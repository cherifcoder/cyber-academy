export default {
  blocks: [
    { t: 'h', x: "5.7 Fiches : les actions Burp et leurs équivalents en ligne de commande" },
    {
      t: 'p',
      x: "Burp est une interface, mais chaque action a un équivalent compréhensible en requête HTTP. Savoir reproduire un test avec <code>curl</code> est indispensable : cela prouve que vous maîtrisez le protocole, permet d'automatiser et rend les preuves reproductibles hors de Burp."
    },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'Proxy Burp + FoxyProxy', tag: 'Configuration',
          what: "Configure le navigateur pour envoyer tout le trafic HTTP/HTTPS vers Burp (127.0.0.1:8080).",
          gives: "La capture de chaque requête/réponse dans l'historique Burp, avec la possibilité de modifier avant envoi.",
          use: "Installer FoxyProxy, créer un profil HTTP vers 127.0.0.1:8080, activer uniquement pour la cible. Installer le certificat CA sur http://burpsuite.",
          syntax: 'Proxy navigateur : HTTP 127.0.0.1:8080',
          example: 'curl -x http://127.0.0.1:8080 http://app.lab/',
          read: "Si les pages HTTPS affichent une erreur de certificat, la CA n'est pas installée. Si rien n'apparaît dans Burp, le proxy navigateur n'est pas actif ou le trafic contourne le proxy.",
          pivot: "Vérifiez avec <code>curl -x</code> : si la requête apparaît dans Burp, la configuration réseau est bonne. Désactivez ensuite le proxy pour la navigation personnelle."
        },
        {
          cmd: 'curl -x', tag: 'Proxy · vérification',
          what: "Envoie une requête via un proxy HTTP.",
          gives: "La réponse de la cible, tout en faisant transiter la requête par Burp pour inspection.",
          use: "Tester rapidement que Burp écoute et que le certificat est accepté. <code>-k</code> ignore les erreurs TLS en lab.",
          syntax: 'curl -x http://127.0.0.1:8080 [-k] URL',
          example: 'curl -x http://127.0.0.1:8080 -k https://app.lab/',
          read: "Une réponse normale prouve que le proxy transmet. Une erreur 502 signifie que Burp n'écoute pas ou que le proxy upstream est mal configuré.",
          pivot: "Utilisez cette commande pour reproduire une requête interceptée, puis envoyez-la dans Repeater pour la modifier."
        },
        {
          cmd: 'Repeater', tag: 'Test manuel',
          what: "Éditeur de requête : envoie une requête, permet de la modifier, puis affiche la réponse.",
          gives: "Le code, les en-têtes et le corps de la réponse pour chaque variante testée.",
          use: "Modifier un seul élément à la fois : paramètre, cookie, en-tête, méthode. Comparer les réponses. <kbd>Ctrl+R</kbd> depuis Proxy.",
          syntax: 'Proxy → clic droit → Send to Repeater (Ctrl+R) → Send',
          example: 'GET /api/profile?user=alice → modifier user=bob → Send',
          read: "Une différence de code (200 vs 403) ou de contenu (profil d'un autre utilisateur) est un signal. Une réponse identique ne signifie pas absence de faille : testez d'autres variantes.",
          pivot: "Conservez chaque requête intéressante avec son résultat. Le rapport doit contenir la requête brute et la réponse."
        },
        {
          cmd: 'Intruder', tag: 'Automatisation',
          what: "Envoie automatiquement des payloads à des positions marquées <code>§…§</code> dans une requête.",
          gives: "Une table de résultats par payload : code, longueur, temps, et éventuellement les motifs trouvés via Grep-Match.",
          use: "Choisir le mode (Sniper, Battering ram, Pitchfork, Cluster bomb), charger les wordlists, limiter les threads et configurer Grep-Match.",
          syntax: 'Intruder → Positions → Add § → Payloads → Options → Start attack',
          example: 'username=§alice§&password=§wrong§ + Cluster bomb',
          read: "Un code 302 ou un motif « Welcome » sur une seule ligne indique un succès. Des réponses toutes identiques suggèrent un filtre ou un verrouillage. Vérifiez le nombre de requêtes envoyées.",
          pivot: "En mission, utilisez des comptes de test et un throttling explicitement autorisé. Un cluster bomb sur un login réel peut verrouiller des comptes et alerter le SOC."
        },
        {
          cmd: 'Decoder / base64', tag: 'Décodage',
          what: "Décode et encode URL, Base64, Base64URL, hex, HTML, gzip. En ligne de commande : <code>base64 -d</code>, <code>python3</code> ou <code>jq</code>.",
          gives: "Le contenu lisible d'un cookie, d'un JWT, d'un paramètre encodé ou d'une chaîne hexadécimale.",
          use: "Décoder un JWT pour lire header et payload ; décoder un cookie pour comprendre le format ; ré-encoder une valeur modifiée si l'application ne vérifie pas la signature.",
          syntax: "echo 'chaine' | base64 -d",
          example: "echo 'eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0' | base64 -d",
          read: "Base64 n'est pas du chiffrement. Un JWT lisible n'est pas une faille : la faille est une signature absente/faible ou un contrôle d'autorisation côté serveur.",
          pivot: "Après décodage, testez la modification d'un claim dans un lab et vérifiez la réponse. Ne modifiez jamais un token de production sans autorisation."
        },
        {
          cmd: 'hashcat -m 16500', tag: 'JWT · clé faible',
          what: "Teste des mots de passe contre la signature HMAC d'un JWT (mode 16500).",
          gives: "La clé secrète si elle figure dans la wordlist, ce qui permet de forger un token valide.",
          use: "Uniquement en lab, sur un token que vous avez généré. Extraire le JWT dans un fichier et lancer hashcat avec une wordlist.",
          syntax: 'hashcat -a 0 -m 16500 jwt.txt wordlist.txt',
          example: 'hashcat -a 0 -m 16500 jwt.txt rockyou.txt',
          read: "Une clé trouvée signifie que la signature est forgeable : vous pouvez changer le rôle. Aucun résultat ne prouve pas que la clé est forte, seulement qu'elle n'est pas dans la liste.",
          pivot: "Documentez la faiblesse de clé et recommandez une clé aléatoire de 256 bits, une rotation et l'usage d'un algorithme robuste."
        },
        {
          cmd: 'openssl s_client', tag: 'TLS',
          what: "Ouvre une connexion TLS et affiche le certificat, la chaîne et les paramètres négociés.",
          gives: "Version TLS, suite de chiffrement, dates de validité, nom du certificat, émetteur et parfois des erreurs de chaîne.",
          use: "Vérifier un certificat, tester TLS 1.0/1.1, comprendre une erreur de pinning. <code>-connect hôte:443 -servername hôte</code>.",
          syntax: 'openssl s_client -connect hote:443 -servername hote',
          example: 'openssl s_client -connect app.acme.example:443 -servername app.acme.example </dev/null',
          read: "Une version TLS obsolète ou une suite faible est un constat de configuration. Un certificat expiré est un problème de disponibilité et de confiance.",
          pivot: "Documentez la version et les dates. Pour un test complet, utilisez <code>testssl.sh</code> ou <code>sslyze</code> dans le cadre autorisé."
        },
        {
          cmd: 'Comparer', tag: 'Diff de réponses',
          what: "Compare deux réponses ou requêtes, mot par mot ou octet par octet.",
          gives: "Les différences exactes entre deux réponses, même minimes.",
          use: "Envoyer la même requête avec deux valeurs (vrai/faux, deux utilisateurs) et comparer. En ligne de commande : <code>diff -u</code>.",
          syntax: 'Comparer → sélectionner deux réponses → Words/Bytes',
          example: 'diff -u reponse_alice.txt reponse_bob.txt',
          read: "Une différence d'un seul champ (email, rôle, montant) prouve que la réponse dépend de l'entrée. C'est essentiel pour les tests aveugles.",
          pivot: "Joignez le diff ou une capture ciblée. Évitez les captures de pages entières où la différence est invisible."
        },
        {
          cmd: 'Sequencer', tag: 'Entropie',
          what: "Collecte des jetons (session, CSRF, reset) et analyse leur aléa.",
          gives: "Un score d'entropie, la longueur, les caractères et des tests statistiques. Détecte un générateur prévisible.",
          use: "Collecter au moins 100 jetons issus de requêtes distinctes. Vérifier la longueur et la variabilité.",
          syntax: 'Sequencer → capturer des réponses → Analyze',
          example: '100 jetons de 32 caractères, entropie élevée',
          read: "Un token qui s'incrémente ou dont une partie est constante est prévisible. Une entropie élevée ne garantit pas l'absence de faille côté serveur.",
          pivot: "Si un token est prévisible, vérifiez s'il permet de prendre le contrôle d'une session ou de réinitialiser un mot de passe, dans le cadre autorisé."
        }
      ]
    },
    { t: 'h', x: "5.8 Glossaire : proxy, HTTP et attaques automatisées" },
    {
      t: 'glossary',
      items: [
        { term: 'Proxy', def: "Intermédiaire qui reçoit les requêtes du client et les transmet au serveur.", use: "Observer, modifier et rejouer le trafic. Burp écoute sur 127.0.0.1:8080.", ex: 'curl -x http://127.0.0.1:8080 URL' },
        { term: 'Interception', def: "Suspension d'une requête ou réponse avant transmission pour la modifier.", use: "Activer uniquement quand nécessaire ; sinon le navigateur semble bloqué.", ex: 'Proxy → Intercept is on' },
        { term: 'CA', full: 'autorité de certification', def: "Autorité dont le certificat permet à Burp de signer les certificats des sites HTTPS.", use: "Installer la CA Burp dans le navigateur pour éviter les erreurs TLS.", ex: 'http://burpsuite → CA certificate' },
        { term: 'TLS / HTTPS', def: "TLS chiffre et authentifie la connexion ; HTTPS est HTTP sur TLS.", use: "Vérifier les versions, le certificat et les en-têtes de sécurité. Un proxy doit être accepté par le client.", ex: 'openssl s_client -connect hote:443' },
        { term: 'Scope', def: "Périmètre d'URL/domaines sur lequel Burp concentre l'historique et les outils.", use: "Définir avant de naviguer pour éviter de tester hors autorisation.", ex: 'Target → Scope → Add app.acme.example' },
        { term: 'Repeater', def: "Outil Burp d'envoi manuel et répété d'une requête modifiée.", use: "Tester une variable à la fois et comparer les réponses.", ex: 'Ctrl+R puis Send' },
        { term: 'Intruder', def: "Outil d'attaque automatisée par positions et payloads.", use: "Fuzzing, brute force contrôlé, énumération. Toujours limiter le débit.", ex: '§user§ / §pass§' },
        { term: 'Sniper', def: "Mode Intruder : un payload à la fois, une position à la fois.", use: "Tester un paramètre avec une wordlist.", ex: '1 position, 100 payloads = 100 requêtes' },
        { term: 'Battering ram', def: "Mode Intruder : le même payload dans toutes les positions.", use: "Quand la même valeur doit être répétée (mot de passe identique).", ex: '2 positions, 100 payloads = 100 requêtes' },
        { term: 'Pitchfork', def: "Mode Intruder : une wordlist par position, avancement synchronisé.", use: "Identifiants/mots de passe appariés.", ex: 'users[i] + passwords[i]' },
        { term: 'Cluster bomb', def: "Mode Intruder : toutes les combinaisons de toutes les wordlists.", use: "Énumération login × mot de passe, avec un volume maîtrisé.", ex: '10 users × 100 pass = 1000 requêtes' },
        { term: 'Grep-Match', def: "Option Intruder qui recherche un motif dans les réponses.", use: "Repérer « Welcome », « Invalid », un code ou un message d'erreur.", ex: 'Grep - Match : Welcome' },
        { term: 'JWT', full: 'JSON Web Token', def: "Token composé d'un header, d'un payload et d'une signature, encodés en Base64URL.", use: "Lire les claims, vérifier la signature, tester les algorithmes faibles en lab.", ex: 'header.payload.signature' },
        { term: 'Entropie', def: "Mesure du désordre/imprévisibilité d'un jeton.", use: "Un jeton de session doit être long et aléatoire ; un compteur est prévisible.", ex: 'Sequencer → entropie par caractère' },
        { term: 'Certificate pinning', def: "Le client n'accepte qu'un certificat ou une clé publique précis.", use: "Explique pourquoi Burp ne voit pas le trafic d'une app mobile ; contournement réservé au lab.", ex: 'App mobile + Frida/objection en lab' },
        { term: 'Throttling', def: "Limitation volontaire du débit de requêtes.", use: "Éviter le verrouillage de comptes, les alertes SOC et la saturation.", ex: 'Intruder → Resource Pool → 1 thread' }
      ]
    }
  ],
  exos: [
    {
      id: 'm5-e1',
      title: 'Vérifier que Burp intercepte',
      context: "Burp écoute sur <code>127.0.0.1:8080</code>. Vous voulez confirmer que le proxy transmet bien une requête.",
      task: "Envoyez une requête vers <code>https://app.lab/</code> en passant par le proxy Burp, en ignorant l'erreur de certificat.",
      hint: "Utilisez <code>curl -x http://127.0.0.1:8080 -k</code>.",
      accept: [/^curl\s+-x\s+http:\/\/127\.0\.0\.1:8080\s+-k\s+https:\/\/app\.lab\/?$/i],
      solution: 'curl -x http://127.0.0.1:8080 -k https://app.lab/',
      output: [
        '<!doctype html><html><head><title>App Lab</title></head><body>…</body></html>',
        '++Requête visible dans Burp → Proxy → HTTP history'
      ],
      read: "La réponse est normale et la requête apparaît dans l'historique Burp. Le proxy et le certificat fonctionnent.",
      pivot: "Désactivez ensuite FoxyProxy pour votre navigation personnelle. Ne laissez jamais Burp intercepter du trafic hors périmètre."
    },
    {
      id: 'm5-e2',
      title: 'Décoder un JWT',
      context: "Un cookie contient un JWT. Vous voulez lire le rôle sans le modifier.",
      task: "Décodez le payload Base64URL <code>eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0</code>.",
      hint: "Utilisez <code>echo ... | base64 -d</code>.",
      accept: [/echo\s+.*eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0.*base64\s+-d/i],
      solution: "echo 'eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0' | base64 -d",
      output: ['{"uid":1042,"role":"user"}'],
      read: "Le payload contient l'identifiant et le rôle. Il est lisible, mais la signature doit être vérifiée pour savoir s'il est modifiable.",
      pivot: "Testez la modification du rôle uniquement en lab. Si le serveur accepte un token re-signé avec une clé faible, c'est une élévation de privilèges."
    },
    {
      id: 'm5-e3',
      title: 'Décoder l\'en-tête JWT',
      context: "Vous voulez connaître l'algorithme utilisé par le token.",
      task: "Décodez l'en-tête <code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</code>.",
      hint: "Même principe : <code>base64 -d</code>.",
      accept: [/echo\s+.*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.*base64\s+-d/i],
      solution: "echo 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' | base64 -d",
      output: ['{"alg":"HS256","typ":"JWT"}'],
      read: "L'algorithme est HS256 (HMAC-SHA256), donc une clé secrète partagée. Un algorithme « none » serait immédiatement suspect.",
      pivot: "Vérifiez que le serveur rejette alg=none et les algorithmes non attendus. Testez une clé faible avec hashcat uniquement en lab."
    },
    {
      id: 'm5-e4',
      title: 'Modifier un paramètre avec Repeater',
      context: "Vous interceptez une requête de profil et voulez tester un changement d'utilisateur.",
      task: "Envoyez <code>GET /api/profile?user=bob</code> avec le cookie <code>session=ALICE</code> à <code>app.lab</code> et affichez la réponse.",
      hint: "Utilisez <code>curl -s -H 'Cookie: session=ALICE'</code>.",
      accept: [/curl\s+-s\s+-H\s+["']Cookie:\s*session=ALICE["']\s+["']?http:\/\/app\.lab\/api\/profile\?user=bob/i, /curl\s+-s\s+.*user=bob.*Cookie.*ALICE/i],
      solution: "curl -s -H 'Cookie: session=ALICE' 'http://app.lab/api/profile?user=bob'",
      output: [
        '{"id":1043,"username":"bob","email":"bob@lab.example","role":"user"}',
        '!!Le cookie d\'Alice renvoie le profil de Bob.'
      ],
      read: "Le serveur utilise le paramètre user sans vérifier la session. C'est un IDOR. Le rôle reste user, donc pas encore d'élévation.",
      pivot: "Testez avec un compte admin et un compte standard pour mesurer l'impact. Documentez la requête et la réponse, puis recommandez un contrôle d'accès."
    },
    {
      id: 'm5-e5',
      title: 'Préparer une attaque Sniper',
      context: "Vous voulez tester une liste de mots de passe sur un seul champ, avec peu de requêtes.",
      task: "Envoyez une requête POST de login avec <code>username=alice</code> et <code>password=test</code> à <code>http://app.lab/login</code>.",
      hint: "Utilisez <code>curl -s -X POST -d 'username=alice&amp;password=test'</code>.",
      accept: [/curl\s+-s\s+-X\s+POST\s+-d\s+["']username=alice&password=test["']\s+http:\/\/app\.lab\/login/i],
      solution: "curl -s -X POST -d 'username=alice&password=test' http://app.lab/login",
      output: [
        'HTTP/1.1 200 OK',
        'Invalid credentials',
        '++Réponse de référence pour un mot de passe invalide'
      ],
      read: "La réponse « Invalid credentials » est la référence. En Sniper, on garde username fixe et on fait varier password.",
      pivot: "Configurez Intruder avec une seule position sur password et Grep-Match sur « Welcome ». Limitez à 1 thread pour éviter le verrouillage."
    },
    {
      id: 'm5-e6',
      title: 'Comparer deux réponses',
      context: "Vous avez deux réponses de login, l'une valide et l'autre invalide, et devez isoler la différence.",
      task: "Comparez <code>valid.txt</code> et <code>invalid.txt</code> avec diff.",
      hint: "Utilisez <code>diff -u valid.txt invalid.txt</code>.",
      accept: [/^diff\s+-u\s+valid\.txt\s+invalid\.txt$/i],
      solution: 'diff -u valid.txt invalid.txt',
      output: [
        '--- valid.txt',
        '+++ invalid.txt',
        '@@ -1,3 +1,3 @@',
        '-Welcome, alice',
        '+Invalid credentials',
        ' <form>…</form>',
        '++Différence : message de bienvenue vs erreur'
      ],
      read: "La différence est localisée sur le message. C'est le motif à rechercher dans Intruder (Grep-Match) pour repérer un succès.",
      pivot: "Ajoutez ce motif dans Grep-Match, puis relancez l'attaque. Vérifiez toujours manuellement la réponse gagnante."
    },
    {
      id: 'm5-e7',
      title: 'Calculer le volume d\'un cluster bomb',
      context: "Vous avez 10 utilisateurs et 100 mots de passe. Vous devez estimer le nombre de requêtes avant de lancer l'attaque.",
      hint: "En cluster bomb, le nombre de requêtes est le produit des tailles des listes.",
      task: "Calculez le produit <code>10 × 100</code> avec la commande <code>python3 -c 'print(10*100)'</code>.",
      accept: [/python3\s+-c\s+["']print\(10\s*\*\s*100\)["']/i],
      solution: "python3 -c 'print(10*100)'",
      output: ['1000'],
      read: "1000 requêtes. À 1 requête/seconde, cela prend environ 17 minutes et peut verrouiller des comptes.",
      pivot: "Réduisez la liste, utilisez un compte de test, ou choisissez Pitchfork si les paires sont connues. Documentez le volume dans les RoE."
    },
    {
      id: 'm5-e8',
      title: 'Tester une clé JWT faible',
      context: "En lab, vous voulez savoir si la clé HMAC du JWT est un mot de passe courant.",
      task: "Lancez hashcat en mode 16500 sur <code>jwt.txt</code> avec <code>rockyou.txt</code>.",
      hint: "Syntaxe : <code>hashcat -a 0 -m 16500 jwt.txt rockyou.txt</code>.",
      accept: [/^hashcat\s+-a\s+0\s+-m\s+16500\s+jwt\.txt\s+rockyou\.txt$/i],
      solution: 'hashcat -a 0 -m 16500 jwt.txt rockyou.txt',
      output: [
        'hashcat (v6.2.6) starting',
        'Dictionary cache hit...',
        'eyJhbGci...:secret123',
        'Session..........: hashcat',
        'Status...........: Cracked',
        '++Clé trouvée : secret123'
      ],
      read: "La clé HMAC est « secret123 ». Le token est forgeable : un attaquant peut modifier le rôle et re-signer.",
      pivot: "Prouvez-le en forgeant un token avec role=admin dans le lab, puis recommandez une clé aléatoire de 256 bits et une rotation."
    },
    {
      id: 'm5-e9',
      title: 'Inspecter un certificat TLS',
      context: "Le navigateur affiche un avertissement sur <code>app.acme.example</code>. Vous devez vérifier le certificat.",
      task: "Ouvrez une connexion TLS vers <code>app.acme.example:443</code> et affichez le certificat.",
      hint: "Utilisez <code>openssl s_client -connect app.acme.example:443 -servername app.acme.example</code>.",
      accept: [/^openssl\s+s_client\s+-connect\s+app\.acme\.example:443\s+-servername\s+app\.acme\.example/i],
      solution: 'openssl s_client -connect app.acme.example:443 -servername app.acme.example </dev/null',
      output: [
        'CONNECTED(00000003)',
        'depth=2 C = US, O = Let\'s Encrypt, CN = R3',
        'depth=1 C = US, O = Let\'s Encrypt, CN = R3',
        'depth=0 CN = app.acme.example',
        'verify return:1',
        'subject=CN = app.acme.example',
        'issuer=C = US, O = Let\'s Encrypt, CN = R3',
        'notBefore=Sep  1 00:00:00 2026 GMT',
        'notAfter=Nov 30 23:59:59 2026 GMT',
        'Protocol  : TLSv1.3',
        'Cipher    : TLS_AES_256_GCM_SHA384',
        '++Certificat valide, TLS 1.3'
      ],
      read: "Le certificat correspond au nom, est valide et utilise TLS 1.3. L'avertissement navigateur vient probablement du proxy Burp, pas du site.",
      pivot: "Si le certificat est expiré ou ne correspond pas au nom, c'est un constat de disponibilité/confiance. Utilisez testssl.sh pour un audit complet."
    },
    {
      id: 'm5-e10',
      title: 'Collecter des jetons pour Sequencer',
      context: "Vous devez vérifier si les jetons CSRF sont aléatoires. Vous en collectez plusieurs.",
      task: "Récupérez 5 jetons CSRF depuis <code>http://app.lab/login</code> avec une boucle <code>for</code> et <code>grep</code>.",
      hint: "Boucle <code>for i in $(seq 1 5); do curl -s ... | grep -oE 'csrf_token[^&quot;]+'; done</code>.",
      accept: [/for\s+i\s+in\s+\$\(seq\s+1\s+5\).*curl\s+-s.*app\.lab\/login.*grep/i],
      solution: "for i in $(seq 1 5); do curl -s http://app.lab/login | grep -oE 'name=\"csrf_token\" value=\"[^\"]+\"'; done",
      output: [
        'name="csrf_token" value="a8f3c1d9e7b2a4f6c8d0e2b4a6f8c1d3"',
        'name="csrf_token" value="7b2e4a6c8d0f1e3b5a7c9d2f4e6b8a0c"',
        'name="csrf_token" value="f1d3b5a7c9e2f4b6d8a0c2e4f6b8d1a3"',
        'name="csrf_token" value="2c4e6a8d0f1b3d5a7c9e2f4b6d8a0c1e"',
        'name="csrf_token" value="9e1f3b5d7a9c2e4f6b8d0a2c4e6f8b1d"'
      ],
      read: "Les jetons sont de longueur constante et semblent varier à chaque requête. Aucun motif séquentiel évident.",
      pivot: "Passez-les dans Sequencer pour une analyse statistique. Une entropie élevée ne remplace pas la vérification que le jeton est lié à la session."
    },
    {
      id: 'm5-e11',
      title: 'Tester un contournement d\'en-tête',
      context: "Une page admin renvoie 403. Vous testez un en-tête de confiance mal configuré en lab.",
      task: "Envoyez <code>GET /admin</code> à <code>http://app.lab</code> avec l'en-tête <code>X-Forwarded-For: 127.0.0.1</code>.",
      hint: "Utilisez <code>curl -s -H 'X-Forwarded-For: 127.0.0.1'</code>.",
      accept: [/curl\s+-s\s+-H\s+["']X-Forwarded-For:\s*127\.0\.0\.1["']\s+http:\/\/app\.lab\/admin/i],
      solution: "curl -s -H 'X-Forwarded-For: 127.0.0.1' http://app.lab/admin",
      output: [
        'HTTP/1.1 200 OK',
        '<title>Admin Panel</title>',
        '!!Le contrôle d\'accès fait confiance à X-Forwarded-For.'
      ],
      read: "L'en-tête simule une origine locale et donne accès au panneau. Le contrôle repose sur une valeur contrôlable par le client.",
      pivot: "Documentez la requête et la réponse. Recommandez de ne jamais utiliser un en-tête client pour l'autorisation et de valider côté serveur."
    },
    {
      id: 'm5-e12',
      title: 'Définir le scope Burp',
      context: "Avant de naviguer, vous devez éviter que Burp enregistre du trafic hors périmètre.",
      task: "Décrivez l'action de configuration du scope : ajoutez <code>app.acme.example</code> dans Target → Scope. Utilisez la commande <code>echo</code> pour consigner l'action dans le journal.",
      hint: "L'action est dans l'interface ; ici, journalisez-la avec <code>echo</code>.",
      accept: [/echo\s+.*scope.*app\.acme\.example/i],
      solution: 'echo "[$(date -Iseconds)] Scope Burp : app.acme.example uniquement" >> notes/journal.md',
      output: ['..(entrée ajoutée au journal)', '++Scope Burp : app.acme.example uniquement'],
      read: "Le scope limite l'historique, le sitemap et les scans. Il ne remplace pas l'autorisation contractuelle.",
      pivot: "Vérifiez régulièrement le scope avant de lancer un scan ou un Intruder. Un outil qui déborde du scope peut tester un tiers."
    }
  ]
};
