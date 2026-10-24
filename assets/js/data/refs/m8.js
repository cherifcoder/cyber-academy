export default {
  blocks: [
    { t: 'h', x: "8.7 Fiches commandes : vérifier une défense, pas seulement la configurer" },
    {
      t: 'p',
      x: "Côté Blue Team, une configuration n'est jamais « sûre » parce qu'elle a été écrite : elle est sûre parce qu'elle est <strong>observée</strong>. Ces commandes lisent ce que le serveur expose réellement — en-têtes, redirections, certificats, dépendances, images — et transforment une intention de durcissement en <strong>preuve vérifiable</strong>."
    },
    {
      t: 'callout', v: 'info', title: "Périmètre et éthique",
      x: "Toutes les commandes ci-dessous s'exécutent uniquement contre le <strong>lab autorisé</strong> (par exemple <code>shop.lab.example</code>) ou sur des fichiers locaux. Scanner un domaine public sans autorisation écrite reste une activité illégale, même avec des outils « défensifs »."
    },
    {
      t: 'cmdref',
      title: "Lire les en-têtes et les redirections",
      intro: "La première vérification d'un durcissement HTTP tient en deux requêtes : que renvoie le serveur, et redirige-t-il correctement le trafic en clair ?",
      items: [
        {
          cmd: 'curl -sI', tag: 'En-têtes',
          what: "Envoie une requête <code>HEAD</code> et n'affiche que les en-têtes de réponse, sans télécharger le corps.",
          gives: "Le code de statut et tous les en-têtes : <code>Strict-Transport-Security</code>, <code>Content-Security-Policy</code>, <code>X-Content-Type-Options</code>, <code>Set-Cookie</code>, <code>Server</code>, <code>Referrer-Policy</code>…",
          use: "Comparer la réponse réelle à la checklist de durcissement. Utiliser <code>-D -</code> avec <code>-o /dev/null</code> pour une requête GET dont on veut seulement les en-têtes.",
          syntax: 'curl -sI https://hote/ | grep -i "strict-transport\\|content-security\\|x-content-type\\|x-frame\\|referrer\\|permissions"',
          example: 'curl -sI https://shop.lab.example/ | grep -iE "^(strict-transport|content-security|x-content-type|x-frame|referrer|permissions|server):"',
          read: "Un en-tête absent est un constat. Un en-tête présent mais faible l'est aussi : <code>max-age=300</code> pour HSTS, <code>'unsafe-inline'</code> dans la CSP, <code>X-Frame-Options: ALLOW-FROM</code> (obsolète). <b>Exemple :</b> si <code>Server: nginx/1.18.0</code> apparaît, la version est divulguée inutilement.<br><br>Attention : un en-tête peut être ajouté par un CDN ou un reverse proxy, pas par l'application. Vérifiez aussi une route applicative, pas seulement la page d'accueil.",
          pivot: "Consignez chaque en-tête avec sa valeur exacte dans un tableau « attendu / observé / écart ». C'est la preuve du durcissement, et la base du ticket de correction."
        },
        {
          cmd: 'curl -o /dev/null -w', tag: 'Redirection',
          what: "Suit ou observe une redirection HTTP sans afficher le corps, et écrit des variables de réponse (<code>%{http_code}</code>, <code>%{redirect_url}</code>) sur la sortie standard.",
          gives: "Le code de la première réponse et l'URL de destination : permet de vérifier que HTTP redirige bien vers HTTPS et que le code est un 301/308.",
          use: "Tester l'accès en clair, puis vérifier que la redirection ne perd pas le chemin et n'accepte pas un <code>Host</code> arbitraire.",
          syntax: 'curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\\n" http://hote/chemin',
          example: 'curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\\n" http://shop.lab.example/login',
          read: "Attendu : <code>301</code> ou <code>308</code> vers <code>https://shop.lab.example/login</code>. Un <code>200</code> signifie que le site répond en clair. Une redirection vers un autre domaine peut indiquer un rebond ou une mauvaise configuration.<br><br>Vérifiez aussi qu'aucun cookie de session n'est émis avant la redirection : ce serait une fuite en clair.",
          pivot: "Si la redirection est absente ou faible, c'est un constat « transport » à traiter avant les constats applicatifs : il conditionne la confidentialité de toutes les autres corrections."
        },
        {
          cmd: 'curl -X OPTIONS', tag: 'CORS',
          what: "Envoie une requête de pré-vérification CORS et affiche les en-têtes <code>Access-Control-*</code>.",
          gives: "Les origines autorisées, les méthodes et les en-têtes acceptés, ainsi que la présence de <code>Access-Control-Allow-Credentials</code>.",
          use: "Vérifier qu'une API n'autorise pas <code>*</code> avec credentials, ni une origine reflétée arbitrairement.",
          syntax: 'curl -s -i -X OPTIONS -H "Origin: https://evil.example" -H "Access-Control-Request-Method: GET" https://api.hote/endpoint',
          example: 'curl -s -i -X OPTIONS -H "Origin: https://evil.example" -H "Access-Control-Request-Method: GET" https://api.lab.example/v1/me',
          read: "La combinaison <code>Access-Control-Allow-Origin: https://evil.example</code> + <code>Access-Control-Allow-Credentials: true</code> est critique : elle permet à un site tiers de lire des réponses authentifiées. <code>*</code> sans credentials est souvent acceptable pour une API publique.<br><br>L'absence d'en-tête CORS n'est pas une faille : le navigateur bloque simplement la lecture cross-origin.",
          pivot: "Si l'origine est reflétée, testez plusieurs valeurs et documentez la réponse exacte. La correction est une allowlist stricte côté serveur, jamais un reflet de l'en-tête <code>Origin</code>."
        }
      ]
    },
    {
      t: 'cmdref',
      title: "Vérifier TLS et surface d'exposition",
      intro: "Un certificat valide ne dit rien de la version de TLS ni des suites négociées. Ces outils regardent le détail du handshake.",
      items: [
        {
          cmd: 'openssl s_client', tag: 'TLS',
          what: "Ouvre un handshake TLS manuel et affiche la chaîne de certificats, le protocole et la suite de chiffrement négociés.",
          gives: "Le sujet et l'émetteur du certificat, les dates de validité, les SAN, la version TLS et le cipher, ainsi que les erreurs de vérification.",
          use: "Contrôler qu'un serveur refuse TLS 1.0/1.1, présente une chaîne complète et un certificat au bon nom. Forcer une version avec <code>-tls1_2</code> pour tester un downgrade.",
          syntax: 'openssl s_client -connect hote:443 -servername hote -tls1_2 </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates -ext subjectAltName',
          example: 'openssl s_client -connect shop.lab.example:443 -servername shop.lab.example -tls1_2 </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates',
          read: "Vérifiez : <code>subject</code> et SAN correspondent au nom appelé, <code>notAfter</code> est futur, <code>issuer</code> est une CA de confiance, et <code>Verify return code: 0 (ok)</code>. Un code différent de 0 signale une chaîne incomplète ou un nom incorrect.<br><br>Si <code>-tls1_2</code> échoue alors que le handshake par défaut réussit, le serveur impose peut-être TLS 1.3 uniquement — acceptable — ou une configuration cassée pour certains clients.",
          pivot: "Un certificat expiré est un constat de disponibilité et de confiance, pas seulement de chiffrement. Consignez les dates et le SAN exacts pour permettre le renouvellement."
        },
        {
          cmd: 'nmap --script http-security-headers', tag: 'En-têtes (NSE)',
          what: "Exécute le script NSE <code>http-security-headers</code> sur un service HTTP/HTTPS détecté.",
          gives: "Une liste d'en-têtes de sécurité présents ou manquants, avec leur valeur, sur chaque port web scanné.",
          use: "Balayer plusieurs hôtes du lab d'un coup et produire un tableau comparatif. Combiner avec <code>-p 80,443</code> et <code>-sV</code>.",
          syntax: 'nmap -p 443 --script http-security-headers hote',
          example: 'nmap -p 80,443 -sV --script http-security-headers shop.lab.example',
          read: "Le script liste les en-têtes qu'il connaît ; il ne juge pas la qualité d'une CSP. Utilisez-le comme inventaire, puis lisez les valeurs à la main avec <code>curl</code>.<br><br>Un port 80 ouvert sans redirection apparaît ici : c'est un écart de transport.",
          pivot: "Transformez la sortie en matrice « hôte × en-tête » pour prioriser les écarts communs à plusieurs applications. Une correction mutualisée au niveau du reverse proxy peut couvrir tout le lab."
        },
        {
          cmd: 'nikto', tag: 'Scan web',
          what: "Scanner de configuration web qui teste des fichiers par défaut, des méthodes dangereuses, des en-têtes manquants et des versions obsolètes.",
          gives: "Des constats bruts avec l'URL, le code HTTP et une description : fichiers d'administration, <code>TRACE</code> activé, bannière de version, cookies sans flags.",
          use: "Premier passage sur une application du lab, puis vérification manuelle de chaque alerte. Limiter la casse avec <code>-Tuning</code> et sortir en JSON pour le suivi.",
          syntax: 'nikto -h https://hote -ssl -o nikto.json -Format json',
          example: 'nikto -h https://shop.lab.example -ssl -Tuning 123b -o evidence/nikto.json -Format json',
          read: "Nikto produit beaucoup de bruit : chaque ligne doit être confirmée. <code>TRACE / HTTP/1.1 200</code> est un vrai constat (XST) ; un « fichier trouvé » peut être un faux positif ou une page 200 générique.<br><br>Vérifiez les codes : un 200 sur <code>/admin/</code> mérite une inspection, un 404 ou un soft 404 non.",
          pivot: "Classez les alertes en « confirmée / à vérifier / faux positif », avec la requête de reproduction. Ne collez jamais la sortie brute dans un rapport client sans tri."
        },
        {
          cmd: 'testssl.sh', tag: 'TLS audité',
          what: "Script d'audit TLS qui teste protocoles, suites, certificats, vulnérabilités connues (Heartbleed, ROBOT, Sweet32) et conformité.",
          gives: "Un rapport lisible par protocole et par suite, avec les points faibles classés par sévérité.",
          use: "Vérifier qu'un serveur ne propose que TLS 1.2/1.3 avec des suites AEAD, et que la chaîne de certificats est complète. Utiliser <code>--severity HIGH</code> pour ne voir que l'important.",
          syntax: 'testssl.sh --severity HIGH --protocols --server-defaults https://hote',
          example: 'testssl.sh --severity HIGH --protocols --server-defaults https://shop.lab.example',
          read: "Les lignes rouges indiquent les protocoles obsolètes ou les suites faibles. <code>TLS 1.0/1.1 offered</code> est un constat ferme. Une note globale sans détail ne suffit pas : lisez les protocoles réellement offerts.<br><br>Vérifiez aussi la redirection HTTP→HTTPS et la présence de HSTS ; un bon TLS sans HSTS reste vulnérable au stripping au premier accès.",
          pivot: "Priorisez d'abord la désactivation des protocoles obsolètes, puis les suites, puis HSTS. Conservez le rapport daté comme preuve avant/après."
        }
      ]
    },
    {
      t: 'cmdref',
      title: "Vérifier les dépendances et les images",
      intro: "La majorité des incidents applicatifs vient de composants que l'on n'a pas écrits. L'analyse doit être reproductible et intégrée à la CI.",
      items: [
        {
          cmd: 'npm audit', tag: 'Dépendances',
          what: "Compare les dépendances du projet aux bases de vulnérabilités connues et propose des correctifs.",
          gives: "La liste des paquets vulnérables, la sévérité, le chemin de dépendance, la version corrigée et l'impact (<code>direct</code> ou <code>transitive</code>).",
          use: "Lancer en CI et en local. Utiliser <code>--json</code> pour un traitement automatique, <code>--omit=dev</code> pour ne regarder que la production.",
          syntax: 'npm audit --omit=dev',
          example: 'npm audit --omit=dev --json > evidence/npm-audit.json',
          read: "Une vulnérabilité transitive ne se corrige pas toujours en changeant directement le paquet : il faut mettre à jour le parent ou utiliser un <code>overrides</code> maîtrisé.<br><br><code>npm audit fix --force</code> peut casser l'application en imposant un saut majeur : lisez le diff avant.",
          pivot: "Priorisez les vulnérabilités exploitables dans votre contexte (route exposée, entrée utilisateur) et planifiez la mise à jour avec un test de non-régression."
        },
        {
          cmd: 'trivy image', tag: 'Conteneurs',
          what: "Analyse une image de conteneur (OS + paquets applicatifs) et liste les CVE connues.",
          gives: "Les paquets vulnérables, la sévérité, la version installée, la version corrigée et la présence éventuelle d'un correctif.",
          use: "Scanner l'image avant publication, puis bloquer la CI au-delà d'un seuil. Préférer une image de base minimale et non-root.",
          syntax: 'trivy image --severity HIGH,CRITICAL image:tag',
          example: 'trivy image --severity HIGH,CRITICAL --ignore-unfixed shop-api:1.4.2',
          read: "Une CVE sans correctif disponible n'a pas la même action qu'une CVE corrigeable : dans le premier cas, on compense (WAF, restriction réseau), dans le second on met à jour.<br><br>Vérifiez aussi l'utilisateur de l'image : un scan propre sur une image qui tourne en root reste un risque d'élévation.",
          pivot: "Construisez un tableau « image / paquet / CVE / correctif disponible / action ». Rebuildez régulièrement : une image figée accumule les CVE même sans changement de code."
        },
        {
          cmd: 'docker scan', tag: 'Conteneurs (Docker)',
          what: "Ancienne commande Docker Desktop qui analyse une image via Snyk et produit un rapport de vulnérabilités.",
          gives: "Les CVE par couche, la sévérité, le paquet concerné et les recommandations de mise à jour de l'image de base.",
          use: "Utile ponctuellement sur un poste avec Docker Desktop. En CI, préférez <code>trivy</code> ou <code>grype</code>, plus portables et scriptables.",
          syntax: 'docker scan image:tag',
          example: 'docker scan shop-api:1.4.2',
          read: "Le rapport inclut les paquets système et applicatifs. Une image de base « slim » réduit la surface mais peut manquer de mises à jour : vérifiez la date du dernier build.<br><br>Un score global ne remplace pas la liste des CVE : lisez les paquets réellement chargés par l'application.",
          pivot: "Si l'outil n'est pas disponible en CI, ne le remplacez pas par « pas de scan ». Utilisez un scanner reproductible et conservez le rapport avec l'image."
        },
        {
          cmd: 'grep (journaux et config)', tag: 'Preuve',
          what: "Filtre les journaux, les réponses HTTP ou les fichiers de configuration pour retrouver un indicateur précis.",
          gives: "Les lignes contenant l'en-tête, le cookie, l'erreur ou l'événement recherché, avec leur contexte.",
          use: "Vérifier qu'un cookie de session porte bien <code>HttpOnly</code>, <code>Secure</code> et <code>SameSite</code> ; retrouver une requête bloquée par le WAF ; extraire les erreurs d'authentification.",
          syntax: 'grep -nEi "motif" fichier',
          example: 'grep -nEi "set-cookie:.*(session|sid)" evidence/headers.txt',
          read: "Un cookie sans <code>HttpOnly</code> est lisible par JavaScript ; sans <code>Secure</code>, il peut partir en clair ; sans <code>SameSite</code>, il est envoyé en cross-site (risque CSRF).<br><br>Vérifiez la ligne complète : un attribut présent mais vide ou mal orthographié n'a aucun effet.",
          pivot: "Convertissez chaque ligne en constat avec la preuve exacte et la recommandation. Un grep ciblé vaut mieux qu'un log complet transmis au client."
        }
      ]
    },
    { t: 'h', x: "8.8 Glossaire : durcissement et défense en profondeur" },
    {
      t: 'glossary',
      intro: "Les termes ci-dessous reviennent dans toutes les discussions Blue Team. Savoir les définir ne suffit pas : il faut savoir quel contrôle ils activent et quelle preuve les vérifie.",
      items: [
        { term: 'CSP', full: 'Content-Security-Policy', def: "En-tête qui restreint les sources de scripts, styles, images et cadres qu'un navigateur peut charger ou exécuter.", use: "Réduire l'impact d'un XSS. Déployer d'abord en <code>Report-Only</code>, puis bloquer après correction des sources inline.", ex: "default-src 'self'; script-src 'self' 'nonce-…'; object-src 'none'" },
        { term: 'Nonce CSP', def: "Valeur aléatoire unique par réponse, autorisée explicitement dans la CSP pour un script inline.", use: "Éviter <code>'unsafe-inline'</code> tout en autorisant les scripts légitimes.", ex: "script-src 'nonce-r4nd0m'" },
        { term: 'HSTS', full: 'Strict-Transport-Security', def: "En-tête qui impose HTTPS au navigateur pour un domaine pendant <code>max-age</code>.", use: "Empêcher le downgrade et le SSL stripping. Ajouter <code>includeSubDomains</code> et <code>preload</code> seulement quand tous les sous-domaines sont prêts.", ex: "max-age=63072000; includeSubDomains; preload" },
        { term: 'HSTS preload', def: "Liste embarquée dans les navigateurs qui force HTTPS avant même la première requête.", use: "Protéger le tout premier accès. Difficile à retirer : à activer après une période d'observation.", ex: "soumission sur hstspreload.org" },
        { term: 'nosniff', full: 'X-Content-Type-Options', def: "Empêche le navigateur de deviner un type MIME différent de celui annoncé.", use: "Bloquer l'exécution d'un fichier texte déguisé en image ou en script.", ex: "X-Content-Type-Options: nosniff" },
        { term: 'Clickjacking', def: "Technique qui superpose une page légitime dans une iframe invisible pour détourner des clics.", use: "Se protéger avec <code>frame-ancestors</code> dans la CSP et <code>X-Frame-Options: DENY</code>.", ex: "Content-Security-Policy: frame-ancestors 'none'" },
        { term: 'Referrer-Policy', def: "Contrôle la quantité d'URL transmise dans l'en-tête <code>Referer</code> lors d'une navigation sortante.", use: "Éviter de fuiter des identifiants ou des chemins sensibles vers des sites tiers.", ex: "strict-origin-when-cross-origin" },
        { term: 'Permissions-Policy', def: "En-tête qui restreint l'accès aux API navigateur (caméra, micro, géolocalisation…).", use: "Réduire la surface si une bibliothèque tierce est compromise.", ex: "camera=(), microphone=(), geolocation=()" },
        { term: 'CORS', full: 'Cross-Origin Resource Sharing', def: "Mécanisme qui autorise explicitement un navigateur à lire une réponse d'une autre origine.", use: "Configurer une allowlist d'origines. Ne jamais refléter <code>Origin</code> avec credentials.", ex: "Access-Control-Allow-Origin: https://app.lab.example" },
        { term: 'CSRF', full: 'Cross-Site Request Forgery', def: "Forcer le navigateur d'une victime authentifiée à envoyer une requête non désirée.", use: "Compléter SameSite par un jeton anti-CSRF lié à la session, ou utiliser un pattern double-submit.", ex: "cookie SameSite=Lax + jeton X-CSRF-Token" },
        { term: 'SameSite', def: "Attribut de cookie qui limite son envoi lors de requêtes cross-site.", use: "<code>Lax</code> par défaut raisonnable ; <code>Strict</code> pour les actions sensibles ; <code>None</code> exige <code>Secure</code>.", ex: "Set-Cookie: sid=…; SameSite=Lax; Secure; HttpOnly" },
        { term: 'HttpOnly', def: "Attribut qui interdit à JavaScript de lire le cookie.", use: "Réduire l'impact d'un XSS sur le vol de session. Ne protège pas de l'utilisation du cookie par le navigateur.", ex: "Set-Cookie: sid=…; HttpOnly" },
        { term: 'Secure', def: "Attribut qui n'envoie le cookie qu'en HTTPS.", use: "Empêcher la fuite de session en clair. À combiner avec HSTS.", ex: "Set-Cookie: sid=…; Secure" },
        { term: 'MFA', full: 'authentification multifacteur', def: "Combinaison d'au moins deux facteurs : connaissance, possession, biométrie.", use: "Privilégier WebAuthn ou TOTP au SMS ; rate-limit et anti-replay sur les codes.", ex: "mot de passe + application TOTP" },
        { term: 'WebAuthn', def: "Standard d'authentification sans mot de passe basé sur une clé cryptographique (passkey, clé FIDO2).", use: "Résistant au phishing car l'origine est vérifiée par le navigateur.", ex: "navigator.credentials.create()" },
        { term: 'TOTP', full: 'Time-based One-Time Password', def: "Code à six chiffres dérivé du secret partagé et de l'heure.", use: "Second facteur simple, mais vulnérable au phishing en temps réel : à compléter par une détection d'anomalies.", ex: "code valable 30 s" },
        { term: 'SRI', full: 'Subresource Integrity', def: "Empreinte cryptographique attachée à une ressource externe (script, CSS).", use: "Empêcher l'exécution d'une ressource CDN modifiée ou compromise.", ex: 'integrity="sha384-…" crossorigin="anonymous"' },
        { term: 'WAF', full: 'Web Application Firewall', def: "Filtre les requêtes HTTP selon des signatures ou des anomalies.", use: "Défense en profondeur et mitigation temporaire (virtual patching), jamais substitut au correctif.", ex: "ModSecurity + OWASP Core Rule Set" },
        { term: 'Virtual patching', def: "Règle WAF qui bloque l'exploitation d'une vulnérabilité avant la correction du code.", use: "Protéger une faille critique le temps du correctif, avec une date de retrait documentée.", ex: "SecRule ARGS \"@rx …\" \"id:1001,phase:2,deny,status:403\"" },
        { term: 'SCA', full: 'Software Composition Analysis', def: "Analyse des dépendances et composants tiers pour identifier les vulnérabilités et les licences.", use: "Intégrer <code>npm audit</code>, <code>trivy</code> ou <code>grype</code> en CI et bloquer les seuils critiques.", ex: "npm audit --omit=dev" },
        { term: 'SBOM', full: 'Software Bill of Materials', def: "Inventaire structuré des composants et versions d'un logiciel.", use: "Répondre vite à une nouvelle CVE : savez-vous quelles applications embarquent le paquet concerné ?", ex: "syft app:latest -o spdx-json" },
        { term: 'TLS / cipher suite', def: "TLS chiffre et authentifie la connexion ; la suite définit les algorithmes de clé, de chiffrement et d'intégrité.", use: "N'autoriser que TLS 1.2/1.3 et des suites AEAD, désactiver les suites faibles et la renégociation non sûre.", ex: "TLS_AES_256_GCM_SHA384" },
        { term: 'Défense en profondeur', def: "Empiler des contrôles indépendants pour qu'un seul échec ne suffise pas à compromettre le système.", use: "CSP + encodage + validation + WAF + monitoring : chaque couche couvre les limites des autres.", ex: "XSS : encodage de sortie + CSP + cookies HttpOnly" }
      ]
    }
  ],
  exos: [
    {
      id: 'm8-e1',
      title: 'Inventorier les en-têtes de sécurité',
      context: "Vous devez vérifier la configuration HTTP de <code>https://shop.lab.example/</code> avant mise en production.",
      task: "Affichez uniquement les en-têtes de réponse, puis filtrez ceux qui concernent la sécurité (HSTS, CSP, nosniff, frame, referrer, permissions, server).",
      hint: "Utilisez <code>curl -sI</code> et un <code>grep -iE</code> avec les noms d'en-têtes.",
      accept: [/curl\s+-sI\s+https:\/\/shop\.lab\.example\/?\s*\|\s*grep\s+-iE?\s+["'].*(strict-transport|content-security|x-content-type|x-frame).*/i],
      solution: 'curl -sI https://shop.lab.example/ | grep -iE "^(strict-transport|content-security|x-content-type|x-frame|referrer|permissions|server):"',
      output: [
        'HTTP/2 200',
        'server: nginx/1.18.0',
        'content-security-policy: default-src \'self\'; script-src \'self\' \'unsafe-inline\'',
        'strict-transport-security: max-age=300',
        'x-content-type-options: nosniff',
        '~~x-frame-options: absent',
        '~~referrer-policy: absent',
        '~~permissions-policy: absent'
      ],
      read: "La CSP contient <code>'unsafe-inline'</code> : elle bloque peu de XSS. HSTS est à 300 secondes seulement. <code>X-Frame-Options</code>, <code>Referrer-Policy</code> et <code>Permissions-Policy</code> sont absents. Le serveur divulgue sa version.",
      pivot: "Ouvrez un constat par écart avec la valeur observée. Proposez une CSP sans unsafe-inline (nonce), HSTS à 2 ans après validation, et les en-têtes manquants. Vérifiez aussi une route applicative, pas seulement l'accueil."
    },
    {
      id: 'm8-e2',
      title: 'Vérifier la redirection HTTP vers HTTPS',
      context: "Un utilisateur qui tape <code>http://shop.lab.example/login</code> doit être redirigé vers HTTPS sans perdre son chemin.",
      task: "Affichez le code de statut et l'URL de redirection pour l'accès en clair.",
      hint: "Utilisez <code>curl -s -o /dev/null -w \"%{http_code} -> %{redirect_url}\"</code> sur l'URL HTTP.",
      accept: [/curl\s+-s\s+-o\s+\/dev\/null\s+-w\s+["'].*http_code.*redirect_url.*["']\s+http:\/\/shop\.lab\.example\/login/i],
      solution: 'curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\\n" http://shop.lab.example/login',
      output: ['301 -> https://shop.lab.example/login'],
      read: "Le code 301 et le chemin conservé indiquent une redirection correcte. Aucun cookie n'est émis avant la redirection.",
      pivot: "Vérifiez aussi qu'un <code>Host</code> arbitraire ne détourne pas la redirection et que HSTS est actif. Consignez la preuve avant/après."
    },
    {
      id: 'm8-e3',
      title: 'Contrôler le certificat TLS',
      context: "Le certificat de <code>shop.lab.example</code> doit être valide, au bon nom et présenter une chaîne complète.",
      task: "Ouvrez un handshake TLS 1.2 et affichez le sujet, l'émetteur et les dates du certificat.",
      hint: "Utilisez <code>openssl s_client -connect … -servername … -tls1_2 </dev/null</code> puis <code>openssl x509 -noout -subject -issuer -dates</code>.",
      accept: [/openssl\s+s_client\s+-connect\s+shop\.lab\.example:443\s+-servername\s+shop\.lab\.example\s+-tls1_2.*openssl\s+x509\s+-noout\s+-subject\s+-issuer\s+-dates/i],
      solution: 'openssl s_client -connect shop.lab.example:443 -servername shop.lab.example -tls1_2 </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates',
      output: [
        'subject=CN = shop.lab.example',
        'issuer=C = FR, O = Lab Internal CA, CN = Lab Internal CA R3',
        'notBefore=Jan 10 00:00:00 2026 GMT',
        'notAfter=Jan 10 23:59:59 2027 GMT',
        '++Verify return code: 0 (ok)'
      ],
      read: "Le nom correspond, les dates sont valides et la chaîne est acceptée (code 0). L'émetteur est la CA interne du lab, ce qui est attendu.",
      pivot: "Documentez les dates et le SAN pour le renouvellement. Testez aussi le refus de TLS 1.0/1.1 avec <code>testssl.sh</code>."
    },
    {
      id: 'm8-e4',
      title: 'Scanner les en-têtes du lab avec Nmap',
      context: "Vous devez comparer plusieurs hôtes du lab et repérer les en-têtes manquants d'un coup.",
      task: "Lancez Nmap sur les ports 80 et 443 de <code>shop.lab.example</code> avec le script <code>http-security-headers</code> et la détection de version.",
      hint: "Combinez <code>-p 80,443</code>, <code>-sV</code> et <code>--script http-security-headers</code>.",
      accept: [/nmap\s+-p\s*80,443\s+-sV\s+--script\s+http-security-headers\s+shop\.lab\.example/i],
      solution: 'nmap -p 80,443 -sV --script http-security-headers shop.lab.example',
      output: [
        'PORT    STATE SERVICE  VERSION',
        '80/tcp  open  http     nginx 1.18.0',
        '443/tcp open  ssl/http nginx 1.18.0',
        '| http-security-headers:',
        '|   Strict-Transport-Security: max-age=300',
        '|   X-Content-Type-Options: nosniff',
        '|~~ X-Frame-Options:',
        '|~~ Content-Security-Policy: present but contains unsafe-inline',
        '|~~ Referrer-Policy:',
        '|~~ Permissions-Policy:'
      ],
      read: "Le port 80 est ouvert et le script confirme les mêmes écarts que <code>curl</code>. La version nginx est exposée. Le script ne juge pas la qualité de la CSP : il faut lire la valeur.",
      pivot: "Construisez une matrice hôte × en-tête. Une correction au reverse proxy peut couvrir tous les hôtes ; documentez-la comme mesure centralisée."
    },
    {
      id: 'm8-e5',
      title: 'Premier passage Nikto',
      context: "Vous voulez un inventaire rapide de la configuration web avant un audit manuel.",
      task: "Lancez Nikto sur <code>https://shop.lab.example</code> en mode SSL et enregistrez la sortie JSON dans <code>evidence/nikto.json</code>.",
      hint: "Utilisez <code>nikto -h … -ssl -o evidence/nikto.json -Format json</code>.",
      accept: [/nikto\s+-h\s+https:\/\/shop\.lab\.example\/?\s+-ssl\s+-o\s+evidence\/nikto\.json\s+-Format\s+json/i],
      solution: 'nikto -h https://shop.lab.example -ssl -o evidence/nikto.json -Format json',
      output: [
        '+ Server: nginx/1.18.0',
        '+ /admin/: Admin login page/section found.',
        '+ TRACE: TRACE method is enabled. XST risk.',
        '+ /backup.zip: Backup file found.',
        '++ 3 éléments à vérifier manuellement',
        '..Rapport JSON écrit dans evidence/nikto.json'
      ],
      read: "Trois pistes : une page d'administration, la méthode TRACE activée et une archive de sauvegarde. Nikto produit aussi des faux positifs : chaque ligne doit être confirmée par une requête manuelle.",
      pivot: "Confirmez <code>/admin/</code> et <code>/backup.zip</code> avec <code>curl -I</code>, vérifiez que l'archive n'est pas téléchargeable, puis désactivez TRACE. Classez les alertes en confirmées / à vérifier / faux positifs."
    },
    {
      id: 'm8-e6',
      title: 'Détecter les mauvaise configurations avec Nuclei',
      context: "Vous voulez vérifier les fichiers de configuration exposés et les en-têtes manquants sur le lab.",
      task: "Lancez Nuclei sur <code>https://shop.lab.example</code> avec les templates de mauvaise configuration, sévérité medium et plus.",
      hint: "Utilisez <code>nuclei -u … -t http/misconfiguration/ -severity medium,high,critical</code>.",
      accept: [/nuclei\s+-u\s+https:\/\/shop\.lab\.example\/?\s+-t\s+http\/misconfiguration\/?\s+-severity\s+(medium,high,critical|medium,high|high,critical)/i],
      solution: 'nuclei -u https://shop.lab.example -t http/misconfiguration/ -severity medium,high,critical',
      output: [
        '[missing-security-headers] [http] [info] https://shop.lab.example',
        '[exposed-git-config] [http] [high] https://shop.lab.example/.git/config',
        '[directory-listing] [http] [medium] https://shop.lab.example/uploads/',
        '++3 findings (1 high, 1 medium, 1 info)'
      ],
      read: "Le fichier <code>.git/config</code> exposé est le constat prioritaire : il peut mener à la récupération du code source. Le listing du dossier <code>uploads/</code> expose les fichiers déposés. L'info sur les en-têtes recoupe les tests précédents.",
      pivot: "Confirmez chaque URL avec <code>curl -I</code>, bloquez l'accès à <code>.git</code>, désactivez le listing et vérifiez qu'aucun secret n'est présent dans l'historique Git exposé."
    },
    {
      id: 'm8-e7',
      title: 'Auditer TLS avec testssl.sh',
      context: "Vous devez prouver que le serveur ne propose plus de protocoles obsolètes.",
      task: "Lancez <code>testssl.sh</code> sur <code>https://shop.lab.example</code> en ne montrant que les constats HIGH et les protocoles.",
      hint: "Utilisez <code>--severity HIGH --protocols --server-defaults</code>.",
      accept: [/testssl\.sh\s+--severity\s+HIGH\s+--protocols\s+--server-defaults\s+https:\/\/shop\.lab\.example/i],
      solution: 'testssl.sh --severity HIGH --protocols --server-defaults https://shop.lab.example',
      output: [
        'Testing protocols via sockets',
        ' TLS 1.2   offered (OK)',
        ' TLS 1.3   offered (OK)',
        ' TLS 1.1   not offered',
        ' TLS 1.0   not offered',
        ' SSLv3     not offered',
        '~~ HSTS: max-age=300 (should be >= 15552000)',
        '++No HIGH severity protocol issue'
      ],
      read: "Les protocoles sont corrects : seuls TLS 1.2 et 1.3 sont offerts. Le seul écart HIGH concerne HSTS, trop court pour protéger durablement.",
      pivot: "Conservez ce rapport comme preuve. Augmentez HSTS après validation de tous les sous-domaines, puis rejouez le même scan pour comparer."
    },
    {
      id: 'm8-e8',
      title: 'Auditer les dépendances Node',
      context: "L'application <code>shop-api</code> utilise npm. Vous devez vérifier les dépendances de production.",
      task: "Lancez un audit des dépendances sans les paquets de développement, avec sortie JSON dans <code>evidence/npm-audit.json</code>.",
      hint: "Utilisez <code>npm audit --omit=dev --json</code> avec une redirection.",
      accept: [/npm\s+audit\s+--omit=dev\s+--json\s*>\s*evidence\/npm-audit\.json/i],
      solution: 'npm audit --omit=dev --json > evidence/npm-audit.json',
      output: [
        '..(analyse des dépendances)',
        '{ "auditReportVersion": 2, "vulnerabilities": {',
        '  "jsonwebtoken": { "severity": "high", "range": "<9.0.0" },',
        '  "lodash": { "severity": "medium", "range": "<4.17.21" } },',
        '  "metadata": { "vulnerabilities": { "high": 1, "medium": 1 } } }',
        '+Rapport écrit dans evidence/npm-audit.json'
      ],
      read: "Deux dépendances vulnérables en production : une haute (jsonwebtoken) et une moyenne (lodash). Les versions corrigées sont indiquées par l'audit ; une dépendance transitive peut nécessiter une mise à jour du parent.",
      pivot: "Priorisez jsonwebtoken si l'application vérifie des jetons exposés. Mettez à jour, lancez les tests, puis relancez l'audit. N'utilisez pas <code>--force</code> sans lire le diff."
    },
    {
      id: 'm8-e9',
      title: 'Scanner l\'image de conteneur',
      context: "L'image <code>shop-api:1.4.2</code> doit être publiée. Vous devez identifier les CVE critiques et élevées corrigeables.",
      task: "Scannez l'image avec Trivy en filtrant les sévérités HIGH et CRITICAL et en ignorant les CVE sans correctif.",
      hint: "Utilisez <code>trivy image --severity HIGH,CRITICAL --ignore-unfixed shop-api:1.4.2</code>.",
      accept: [/trivy\s+image\s+--severity\s+HIGH,CRITICAL\s+--ignore-unfixed\s+shop-api:1\.4\.2/i],
      solution: 'trivy image --severity HIGH,CRITICAL --ignore-unfixed shop-api:1.4.2',
      output: [
        'shop-api:1.4.2 (debian 12.4)',
        'Total: 3 (HIGH: 2, CRITICAL: 1)',
        '┌────────────┬────────────────┬──────────┬───────────────────┐',
        '│  Library   │ Vulnerability  │ Severity │ Fixed Version     │',
        '├────────────┼────────────────┼──────────┼───────────────────┤',
        '│ libssl3    │ CVE-2026-1234  │ CRITICAL │ 3.0.14-1          │',
        '│ libc6      │ CVE-2026-5678  │ HIGH     │ 2.36-9+deb12u5    │',
        '│ zlib1g     │ CVE-2026-9012  │ HIGH     │ 1:1.2.13.dfsg-1   │',
        '└────────────┴────────────────┴──────────┴───────────────────┘'
      ],
      read: "Trois CVE ont un correctif disponible : un rebuild avec une image de base à jour les élimine. L'absence de CVE sans correctif ne signifie pas que l'image est sûre.",
      pivot: "Planifiez un rebuild, rescannez, puis comparez les rapports. Vérifiez aussi que le conteneur tourne en non-root et que l'image de base est minimale."
    },
    {
      id: 'm8-e10',
      title: 'Vérifier les flags d\'un cookie de session',
      context: "Vous avez capturé les en-têtes de la page de connexion dans <code>evidence/headers.txt</code>. Vous devez contrôler le cookie de session.",
      task: "Recherchez les lignes <code>Set-Cookie</code> contenant <code>session</code> ou <code>sid</code>, avec insensibilité à la casse et numéros de ligne.",
      hint: "Utilisez <code>grep -nEi</code> avec une alternation et le motif <code>set-cookie</code>.",
      accept: [/grep\s+-nEi\s+["'].*set-cookie.*(session|sid).*["']\s+evidence\/headers\.txt/i],
      solution: 'grep -nEi "set-cookie:.*(session|sid)" evidence/headers.txt',
      output: [
        '14:set-cookie: sid=8f3a...; Path=/; HttpOnly; Secure; SameSite=Lax',
        '~~aucun cookie sans HttpOnly dans cette capture'
      ],
      read: "Le cookie de session porte bien <code>HttpOnly</code>, <code>Secure</code> et <code>SameSite=Lax</code>. Ces flags réduisent le vol via XSS et l'envoi cross-site.",
      pivot: "Vérifiez aussi la durée de vie, le préfixe <code>__Host-</code> et la rotation de l'ID à la connexion. Un cookie bien configuré ne compense pas une session jamais régénérée."
    },
    {
      id: 'm8-e11',
      title: 'Tester une configuration CORS trop permissive',
      context: "L'API <code>https://api.lab.example/v1/me</code> doit être testée avec une origine non autorisée.",
      task: "Envoyez une requête OPTIONS avec <code>Origin: https://evil.example</code> et affichez les en-têtes de réponse.",
      hint: "Utilisez <code>curl -s -i -X OPTIONS</code> avec les en-têtes <code>Origin</code> et <code>Access-Control-Request-Method</code>.",
      accept: [/curl\s+-s\s+-i\s+-X\s+OPTIONS\s+-H\s+["']Origin:\s*https:\/\/evil\.example["']\s+-H\s+["']Access-Control-Request-Method:\s*GET["']\s+https:\/\/api\.lab\.example\/v1\/me/i],
      solution: 'curl -s -i -X OPTIONS -H "Origin: https://evil.example" -H "Access-Control-Request-Method: GET" https://api.lab.example/v1/me',
      output: [
        'HTTP/1.1 204 No Content',
        'access-control-allow-origin: https://evil.example',
        'access-control-allow-credentials: true',
        'access-control-allow-methods: GET, POST',
        'vary: Origin',
        '!!CORS: origine arbitraire reflétée avec credentials'
      ],
      read: "L'origine est reflétée et les credentials sont autorisés : un site tiers peut lire des réponses authentifiées. C'est un constat critique.",
      pivot: "Corrigez avec une allowlist stricte et supprimez le reflet de l'en-tête <code>Origin</code>. Rejouez le test avec une origine autorisée et une origine refusée pour prouver le comportement."
    },
    {
      id: 'm8-e12',
      title: 'Produire la preuve de durcissement',
      context: "Après correction, vous devez conserver une preuve horodatée de la configuration des en-têtes.",
      task: "Enregistrez les en-têtes de sécurité de <code>https://shop.lab.example/</code> dans <code>evidence/headers-after.txt</code>.",
      hint: "Utilisez <code>curl -sI</code> avec une redirection vers le fichier.",
      accept: [/curl\s+-sI\s+https:\/\/shop\.lab\.example\/?\s*>\s*evidence\/headers-after\.txt/i],
      solution: 'curl -sI https://shop.lab.example/ > evidence/headers-after.txt',
      output: [
        '..(réponse enregistrée)',
        '++evidence/headers-after.txt créé',
        '++HSTS: max-age=63072000; includeSubDomains',
        '++CSP: script-src \'self\' \'nonce-…\'',
        '++X-Frame-Options: DENY'
      ],
      read: "La preuve montre les valeurs après correction. HSTS est passé à deux ans, la CSP n'utilise plus <code>unsafe-inline</code> et le clickjacking est bloqué.",
      pivot: "Hashez le fichier de preuve, joignez-le au rapport de remédiation et comparez-le au relevé initial. Une correction sans preuve avant/après est invérifiable."
    }
  ]
};
