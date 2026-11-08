export default {
  blocks: [
    { t: 'h', x: "3.6 Fiches commandes : découvrir la surface cachée" },
    {
      t: 'p',
      x: "Le fuzzing produit beaucoup de bruit. La différence entre un débutant et un analyste tient à trois réflexes : <strong>calibrer</strong> la réponse « inexistante », <strong>filtrer</strong> les faux positifs, et <strong>interpréter</strong> les codes de statut. Chaque fiche indique donc quoi faire de la sortie, pas seulement comment lancer l'outil."
    },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'curl (calibration)', tag: 'Vérification',
          what: "Envoie une requête HTTP unique et affiche la réponse brute : en-têtes, code, corps.",
          gives: "Le code de statut, la taille, le contenu exact et les en-têtes d'une URL témoin. C'est la référence pour calibrer un scan.",
          use: "Avant de fuzzer, demandez une URL qui n'existe pas : <code>curl -s -o /dev/null -w '%{http_code} %{size_download}\\n' https://app.acme.example/inexistant-abc123</code>. Notez le code et la taille.",
          syntax: "curl -s -o /dev/null -w '%{http_code} %{size_download}\\n' URL",
          example: "curl -s -o /dev/null -w '%{http_code} %{size_download}\\n' https://app.acme.example/inexistant-abc123",
          read: "Si l'URL inexistante renvoie <code>200</code> avec 1240 octets, l'application utilise un <b>soft 404</b>. Il faudra filtrer <code>-fs 1240</code> (FFUF) ou exclure la taille équivalente avec les autres outils.<br><br><b>Exemple :</b> calibration 404 → 200 / 1240 octets. Le scan FFUF doit utiliser <code>-fc 404 -fs 1240</code> pour ne pas noyer les vrais résultats."
        },
        {
          cmd: 'gobuster dir', tag: 'Découverte · répertoires',
          what: "Énumère répertoires et fichiers à partir d'une wordlist, en testant chaque nom sur l'URL de base.",
          gives: "Une liste d'URL existantes avec leur code HTTP et éventuellement leur taille. <code>-x</code> ajoute des extensions ; <code>-k</code> ignore les erreurs TLS ; <code>-o</code> écrit le résultat.",
          use: "Choisir une wordlist adaptée (raft-medium, common.txt), limiter les threads (<code>-t 20</code>), exclure les faux positifs et sauvegarder la sortie.",
          syntax: 'gobuster dir -u URL -w wordlist -x extensions -t threads -o fichier',
          example: 'gobuster dir -u https://app.acme.example -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -x php,html,txt,bak,zip -t 20 -o dirs.txt',
          read: "Un <code>200</code> sur <code>/backup.zip</code> est immédiatement intéressant : archive peut-être téléchargeable. Un <code>403</code> sur <code>/admin/</code> confirme l'existence d'un panneau protégé. Un <code>301</code> vers <code>/admin/</code> indique un dossier réel.<br><br><b>Exemple :</b> <code>/admin/ (403)</code> + <code>/admin/login.php (200)</code> → la page de login est accessible, testez l'authentification et les contrôles d'accès."
        },
        {
          cmd: 'gobuster dns', tag: 'Découverte · sous-domaines',
          what: "Teste des noms de sous-domaines à partir d'une wordlist en interrogeant le DNS.",
          gives: "Les sous-domaines qui résolvent, avec leur adresse IP.",
          use: "En complément de Subfinder/Amass, surtout pour les noms courts et les environnements internes. <code>-d</code> pour le domaine, <code>-w</code> pour la liste, <code>-t</code> pour les threads.",
          syntax: 'gobuster dns -d domaine -w wordlist -t threads',
          example: 'gobuster dns -d acme.example -w subdomains-top1m.txt -t 50',
          read: "Un sous-domaine qui résout vers une IP interne ou une plage cloud est une piste. Vérifiez ensuite s'il expose HTTP avec httpx. Un CNAME vers un service tiers peut indiquer un takeover.",
          pivot: "Recoupez avec la liste passive : les noms trouvés uniquement en bruteforce sont souvent des environnements oubliés (dev, test, old)."
        },
        {
          cmd: 'gobuster vhost', tag: 'Découverte · virtual hosts',
          what: "Teste des valeurs de l'en-tête <code>Host</code> sur une même adresse IP pour révéler des sites hébergés virtuellement.",
          gives: "Les noms d'hôtes virtuels qui répondent différemment du site par défaut.",
          use: "Quand plusieurs applications partagent la même IP. <code>--append-domain</code> complète les entrées de la wordlist avec le domaine de base.",
          syntax: 'gobuster vhost -u URL -w wordlist --append-domain',
          example: 'gobuster vhost -u https://acme.example -w vhosts.txt --append-domain',
          read: "Un vhost qui renvoie un code ou une taille différente est une application distincte. Il peut être un intranet, une préproduction ou un outil d'administration non référencé.",
          pivot: "Ajoutez le vhost à votre périmètre de test et à votre fichier <code>/etc/hosts</code> de lab. Testez ses routes comme un site séparé."
        },
        {
          cmd: 'dirsearch', tag: 'Découverte · répertoires',
          what: "Scanner de chemins web avec gestion des extensions, des codes exclus et des faux positifs.",
          gives: "Les chemins valides avec code, taille et redirection. <code>-x</code> exclut des codes ; <code>--random-agent</code> varie l'User-Agent.",
          use: "Plus simple que FFUF pour un scan rapide. Toujours exclure 404/400 et limiter les threads.",
          syntax: 'dirsearch -u URL -e extensions -x codes -t threads --random-agent',
          example: 'dirsearch -u https://app.acme.example -e php,asp,aspx,jsp,html,js,json,bak -x 404,400 --random-agent -t 25',
          read: "Les fichiers <code>.bak</code>, <code>.old</code>, <code>.zip</code> sont prioritaires : ils peuvent contenir du code source ou des secrets. Les endpoints <code>api/</code> et <code>admin/</code> sont à cartographier.",
          pivot: "Téléchargez un backup trouvé uniquement si le périmètre l'autorise, et lisez-le hors ligne. Ne l'exécutez jamais sur le serveur."
        },
        {
          cmd: 'ffuf (répertoires)', tag: 'Fuzzing · URL',
          what: "Fuzzer générique : remplace <code>FUZZ</code> par chaque mot d'une wordlist et affiche les réponses selon des filtres.",
          gives: "Les URL qui correspondent aux critères, avec code, taille, mots et lignes. <code>-fc</code>, <code>-fs</code>, <code>-fw</code>, <code>-fr</code> filtrent les faux positifs.",
          use: "Définir la position exacte de <code>FUZZ</code>, calibrer, puis filtrer. Le JSON (<code>-of json</code>) facilite le post-traitement.",
          syntax: 'ffuf -u URL/FUZZ -w wordlist -fc codes -fs taille -t threads -o fichier -of json',
          example: 'ffuf -u https://app.acme.example/FUZZ -w raft-medium-directories.txt -fc 404 -fs 1240 -t 40 -o ffuf-dirs.json -of json',
          read: "Seuls les résultats non filtrés sont affichés. Une taille différente de la référence signale souvent une page réelle. Un 200 avec 0 mot peut être une API qui répond vide.",
          pivot: "Classez les résultats par intérêt : backups, admin, API, upload. Chaque catégorie appelle un test différent (lecture de fichier, auth, IDOR, upload)."
        },
        {
          cmd: 'ffuf (paramètres)', tag: 'Fuzzing · paramètres',
          what: "Découvre des noms de paramètres acceptés par une URL ou un formulaire.",
          gives: "Les paramètres qui modifient la réponse (taille, code, contenu). Utile pour trouver des paramètres cachés comme <code>debug</code>, <code>admin</code>, <code>redirect</code>.",
          use: "Placer <code>FUZZ</code> dans le nom du paramètre : <code>?FUZZ=1</code>. Comparer avec une requête sans paramètre.",
          syntax: 'ffuf -u "URL?FUZZ=1" -w params.txt -fs taille_reference',
          example: 'ffuf -u "https://app.acme.example/api/user?FUZZ=1" -w params.txt -fs 0',
          read: "Un paramètre qui change la réponse est traité par le serveur. <code>debug=1</code> peut révéler des traces ; <code>redirect=</code> peut être un open redirect ; <code>user_id=</code> peut être un IDOR.",
          pivot: "Testez chaque paramètre découvert avec des valeurs légitimes, puis des valeurs d'un autre utilisateur, dans le cadre autorisé."
        },
        {
          cmd: 'ffuf (valeurs / IDOR)', tag: 'Fuzzing · valeurs',
          what: "Fuzz la valeur d'un paramètre existant, par exemple un identifiant de facture.",
          gives: "Les valeurs qui renvoient un contenu différent, donc potentiellement accessibles.",
          use: "Filtrer les codes d'erreur pour ne garder que les succès. <code>-fc 403,404</code> retire les refus et les absents.",
          syntax: 'ffuf -u "URL?id=FUZZ" -w ids.txt -fc 403,404',
          example: 'ffuf -u "https://app.acme.example/api/invoice?id=FUZZ" -w ids.txt -fc 403,404',
          read: "Un 200 sur un ID qui n'appartient pas à l'utilisateur connecté est un IDOR. Vérifiez que la réponse contient bien les données d'un autre utilisateur, pas une page vide.",
          pivot: "Documentez un seul cas avec une preuve minimale (un champ non sensible), jamais une extraction massive. Proposez le contrôle d'accès côté serveur comme remédiation."
        },
        {
          cmd: 'katana', tag: 'Crawling',
          what: "Crawler web moderne qui suit les liens et exécute éventuellement le JavaScript pour découvrir des routes.",
          gives: "Une liste d'URL et d'endpoints découverts, y compris ceux générés par le front.",
          use: "En complément du fuzzing : le crawl trouve ce qui est lié, le fuzzing trouve ce qui est caché. <code>-jc</code> active l'exécution JS, <code>-d</code> la profondeur.",
          syntax: 'katana -u URL -jc -d profondeur -o urls.txt',
          example: 'katana -u https://app.acme.example -jc -d 3 -o urls.txt',
          read: "Les URLs avec paramètres sont des candidats aux tests d'injection, SSRF et redirections. Les routes API sont à comparer avec les bundles JS.",
          pivot: "Dédupliquez les URLs, puis envoyez-les à httpx pour connaître les codes, et à ffuf pour tester les paramètres de chaque endpoint."
        },
        {
          cmd: 'zap-cli / ZAP', tag: 'Scan · proxy',
          what: "Pilote OWASP ZAP en ligne de commande : crawl, scan passif/actif, génération de rapport.",
          gives: "Alertes de sécurité classées par risque, avec URL, preuve et référence. Le scan passif analyse les réponses sans attaque ; l'actif envoie des payloads.",
          use: "Démarrer ZAP en daemon, puis lancer un baseline passif. L'actif doit être explicitement autorisé et limité au scope.",
          syntax: 'zap-cli quick-scan -s xss,sqli -r rapport.html URL',
          example: 'zap-cli quick-scan -s xss,sqli -r zap-report.html https://app.acme.example',
          read: "Les alertes passives (en-têtes manquants, cookies) sont fiables. Les alertes actives (XSS, SQLi) doivent être reproduites manuellement avant d'être rapportées.",
          pivot: "Transformez chaque alerte confirmée en fiche de vulnérabilité avec requête, réponse et impact. Ignorez les faux positifs non reproductibles."
        }
      ]
    },
    { t: 'h', x: "3.7 Glossaire : HTTP, URLs et découverte de contenu" },
    {
      t: 'glossary',
      items: [
        { term: 'HTTP', full: 'HyperText Transfer Protocol', def: "Protocole requête/réponse du web : une méthode, une URL, des en-têtes, parfois un corps.", use: "Lire une requête pour identifier les paramètres, les cookies, les tokens et les points d'injection.", ex: 'GET /api/user?id=42 HTTP/1.1' },
        { term: 'URL', def: "Adresse d'une ressource : schéma, hôte, chemin, paramètres, fragment.", use: "Chaque partie est un point de test : hôte (SSRF), chemin (LFI), paramètre (injection), fragment (DOM XSS).", ex: 'https://app.acme.example/api/user?id=42#profil' },
        { term: 'Endpoint', def: "Point d'entrée d'une API ou d'une application, identifié par une méthode HTTP et un chemin.", use: "Lister les endpoints, puis tester méthodes, paramètres et contrôles d'accès sur chacun.", ex: 'POST /api/login' },
        { term: 'API REST / GraphQL', def: "Interfaces de programmation. REST expose des ressources par URL ; GraphQL expose un point unique avec des requêtes structurées.", use: "Cartographier les schémas, tester les autorisations objet par objet, et chercher les requêtes excessives (introspection, alias).", ex: 'POST /graphql { __schema { types { name } } }' },
        { term: 'SPA', full: 'Single Page Application', def: "Application dont le front JavaScript gère la navigation et appelle des API.", use: "Analyser les bundles JS pour extraire les routes et endpoints non visibles dans l'interface.", ex: 'curl -s /static/js/main.js | grep -oE "/api/[^"]+"' },
        { term: 'Crawling', def: "Suivre les liens depuis une page d'entrée pour découvrir les pages liées.", use: "Première passe, rapide, mais aveugle aux routes non liées.", ex: 'katana -u https://app.acme.example -d 3' },
        { term: 'Spidering', def: "Exploration récursive, incluant formulaires et parfois JavaScript.", use: "Découvrir les parcours fonctionnels ; attention aux actions destructrices déclenchées par des formulaires.", ex: 'Burp Spider / ZAP Spider' },
        { term: 'Fuzzing', def: "Tester systématiquement des entrées issues d'une wordlist pour trouver des ressources ou des comportements cachés.", use: "Découvrir répertoires, fichiers, paramètres et valeurs. Toujours calibrer et filtrer.", ex: 'ffuf -u https://app.acme.example/FUZZ -w liste.txt' },
        { term: 'Wordlist', def: "Liste de mots utilisée comme entrées de fuzzing.", use: "Choisir selon la cible : répertoires, extensions, paramètres, noms d'utilisateurs. Une liste inadaptée produit du bruit.", ex: 'raft-medium-directories.txt, common.txt, params.txt' },
        { term: 'Code de statut HTTP', def: "Nombre à trois chiffres indiquant le résultat d'une requête (200, 301, 401, 403, 404, 500…).", use: "Interpréter la réponse : 200 existe, 401 authentification, 403 refus, 404 absent, 500 erreur révélatrice.", ex: 'HTTP/1.1 403 Forbidden' },
        { term: 'Soft 404', def: "Réponse 200 pour une ressource inexistante, souvent une page d'erreur personnalisée.", use: "Calibrer avec une URL bidon et filtrer par taille, mots ou contenu. Sinon le scan produit des centaines de faux positifs.", ex: 'curl -s -o /dev/null -w "%{http_code} %{size_download}" URL/inexistant' },
        { term: 'Vhost', full: 'virtual host', def: "Site hébergé sur la même IP mais servi selon l'en-tête Host.", use: "Découvrir des applications internes ou oubliées partageant un serveur.", ex: 'gobuster vhost -u https://acme.example -w vhosts.txt --append-domain' },
        { term: 'WAF', full: 'Web Application Firewall', def: "Filtre qui inspecte le trafic HTTP et bloque des motifs ou comportements suspects.", use: "Détecter sa présence, adapter le débit et les encodages, mais ne jamais compter dessus pour la sécurité du code.", ex: 'wafw00f https://app.acme.example' },
        { term: 'Proxy d\'interception', def: "Intermédiaire qui capture et permet de modifier les requêtes/réponses entre navigateur et serveur.", use: "Burp ou ZAP : cartographier, rejouer, modifier un paramètre à la fois.", ex: 'Burp Proxy 127.0.0.1:8080' },
        { term: 'Bundle JavaScript', def: "Fichier JS regroupant le code du front, souvent minifié.", use: "Extraire routes, endpoints, clés publiques et feature flags avec grep ou LinkFinder.", ex: 'main.4f2a.js' },
        { term: 'Paramètre', def: "Variable transmise dans l'URL, le corps ou un en-tête.", use: "Tester sa présence, sa validation, son autorisation et son encodage.", ex: '?id=42&debug=1' },
        { term: 'Rate limiting / throttling', def: "Limitation du nombre de requêtes par unité de temps.", use: "Réduire les threads pour éviter le blocage, le verrouillage de comptes et les alertes SOC.", ex: 'ffuf -t 10 -rate 20' }
      ]
    }
  ],
  exos: [
    {
      id: 'm3-e1',
      title: 'Calibrer un soft 404',
      context: "Avant de lancer un scan, vous devez savoir comment l'application répond à une URL inexistante.",
      task: "Testez <code>https://app.acme.example/inexistant-abc123</code> et affichez uniquement le code HTTP et la taille de la réponse.",
      hint: "Utilisez <code>curl -s -o /dev/null -w '%{http_code} %{size_download}'</code>.",
      accept: [/curl\s+-s\s+-o\s+\/dev\/null\s+-w\s+.*inexistant-abc123/i],
      solution: "curl -s -o /dev/null -w '%{http_code} %{size_download}\\n' https://app.acme.example/inexistant-abc123",
      output: ['200 1240'],
      read: "L'application renvoie 200 avec 1240 octets pour une page inexistante : c'est un soft 404.",
      pivot: "Tous les scans suivants doivent filtrer la taille 1240 (FFUF <code>-fs 1240</code>) ou exclure les réponses équivalentes."
    },
    {
      id: 'm3-e2',
      title: 'Énumérer les répertoires avec Gobuster',
      context: "Vous voulez découvrir les dossiers et fichiers exposés sur le site.",
      task: "Lancez <code>gobuster dir</code> sur <code>https://app.acme.example</code> avec la wordlist <code>raft-medium-directories.txt</code>, les extensions php,html,txt,bak,zip et 20 threads.",
      hint: "Options : <code>-u</code>, <code>-w</code>, <code>-x</code>, <code>-t</code>.",
      accept: [/^gobuster\s+dir\s+-u\s+https:\/\/app\.acme\.example\s+-w\s+\S*raft-medium-directories\.txt.*-x\s+php,html,txt,bak,zip.*-t\s+20/i],
      solution: 'gobuster dir -u https://app.acme.example -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -x php,html,txt,bak,zip -t 20',
      output: [
        '===============================================================',
        'Gobuster v3.6',
        '===============================================================',
        '/admin/               (Status: 403) [Size: 1240]',
        '/backup.zip           (Status: 200) [Size: 248392]',
        '/config.php.bak       (Status: 200) [Size: 1024]',
        '/api/                 (Status: 301) [Size: 0]',
        '/uploads/             (Status: 200) [Size: 1240]',
        '++4 résultats intéressants : backup, config.bak, admin, uploads'
      ],
      read: "Un 403 sur /admin/ confirme l'existence d'un panneau protégé. backup.zip et config.php.bak sont téléchargeables : risque de fuite de code et de secrets.",
      pivot: "Téléchargez les backups uniquement dans le cadre autorisé, analysez-les hors ligne, et testez /admin/ avec des comptes de test fournis. Ne forcez pas l'authentification sans accord."
    },
    {
      id: 'm3-e3',
      title: 'Chercher des sous-domaines avec Gobuster DNS',
      context: "La reconnaissance passive a donné 38 noms. Vous voulez compléter avec du bruteforce DNS.",
      task: "Lancez <code>gobuster dns</code> sur <code>acme.example</code> avec <code>subdomains-top1m.txt</code> et 50 threads.",
      hint: "Syntaxe : <code>gobuster dns -d domaine -w wordlist -t 50</code>.",
      accept: [/^gobuster\s+dns\s+-d\s+acme\.example\s+-w\s+\S*subdomains-top1m\.txt\s+-t\s+50$/i],
      solution: 'gobuster dns -d acme.example -w subdomains-top1m.txt -t 50',
      output: [
        'Found: www.acme.example',
        'Found: api.acme.example',
        'Found: admin.acme.example',
        'Found: old.acme.example',
        'Found: dev.acme.example',
        '++5 sous-domaines résolus'
      ],
      read: "old et dev ne figuraient pas dans la liste passive. Ce sont souvent des environnements abandonnés, moins sécurisés.",
      pivot: "Résolvez-les avec dnsx, puis sondez-les avec httpx. Vérifiez leurs CNAME pour détecter un takeover."
    },
    {
      id: 'm3-e4',
      title: 'Découvrir un virtual host',
      context: "Le serveur <code>acme.example</code> héberge peut-être plusieurs applications sur la même IP.",
      task: "Lancez <code>gobuster vhost</code> sur <code>https://acme.example</code> avec <code>vhosts.txt</code> et l'option <code>--append-domain</code>.",
      hint: "Options : <code>-u</code>, <code>-w</code>, <code>--append-domain</code>.",
      accept: [/^gobuster\s+vhost\s+-u\s+https:\/\/acme\.example\s+-w\s+vhosts\.txt\s+--append-domain$/i],
      solution: 'gobuster vhost -u https://acme.example -w vhosts.txt --append-domain',
      output: [
        'Found: intranet.acme.example Status: 200 [Size: 5321]',
        'Found: jenkins.acme.example Status: 200 [Size: 8912]',
        'Found: default Status: 404 [Size: 0]',
        '++2 vhosts supplémentaires détectés'
      ],
      read: "intranet et jenkins sont servis par le même serveur mais ne sont pas référencés publiquement. Jenkins est un outil d'administration critique.",
      pivot: "Ajoutez ces vhosts à votre fichier hosts de lab et testez leurs pages de login, versions et contrôles d'accès avec autorisation."
    },
    {
      id: 'm3-e5',
      title: 'Scanner avec Dirsearch',
      context: "Vous voulez un scan rapide des fichiers sensibles, avec exclusion des 404 et 400.",
      task: "Lancez <code>dirsearch</code> sur <code>https://app.acme.example</code> avec les extensions php,html,txt,bak,zip et l'exclusion des codes 404,400.",
      hint: "Options : <code>-u</code>, <code>-e</code>, <code>-x 404,400</code>, <code>-t 25</code>.",
      accept: [/^dirsearch\s+-u\s+https:\/\/app\.acme\.example\s+-e\s+php,html,txt,bak,zip\s+-x\s+404,400/i],
      solution: 'dirsearch -u https://app.acme.example -e php,html,txt,bak,zip -x 404,400 --random-agent -t 25',
      output: [
        '[14:52:03] 200 -  248KB - /backup.zip',
        '[14:52:04] 200 -    1KB - /config.php.bak',
        '[14:52:05] 403 -    1KB - /admin/',
        '[14:52:06] 301 -    0B  - /api/',
        '[14:52:08] 200 -    0B  - /health',
        '++5 résultats (faux 404 exclus)'
      ],
      read: "Les fichiers de sauvegarde sont accessibles. <code>/health</code> renvoie 200 vide : endpoint de monitoring, utile pour l'énumération d'API.",
      pivot: "Priorisez config.php.bak : il peut contenir des identifiants de base de données. Lisez-le hors ligne et ne testez pas les identifiants trouvés hors périmètre."
    },
    {
      id: 'm3-e6',
      title: 'Fuzzer avec FFUF et filtres',
      context: "Le soft 404 renvoie 200 / 1240 octets. Vous devez filtrer ces faux positifs.",
      task: "Lancez <code>ffuf</code> sur <code>https://app.acme.example/FUZZ</code> avec la wordlist <code>raft-medium-directories.txt</code>, en filtrant les codes 404 et la taille 1240, avec 40 threads.",
      hint: "Options : <code>-fc 404 -fs 1240 -t 40</code>.",
      accept: [/^ffuf\s+-u\s+https:\/\/app\.acme\.example\/FUZZ\s+-w\s+\S*raft-medium-directories\.txt.*-fc\s+404\s+-fs\s+1240/i],
      solution: 'ffuf -u https://app.acme.example/FUZZ -w raft-medium-directories.txt -fc 404 -fs 1240 -t 40',
      output: [
        '        /\'___\\  /\'___\\  /\\ \\/\\ \\  /\\ \\/\\ \\   ffuf',
        '       /\\ \\__/ /\\ \\__/ /\\ \\ \\_\\ \\ /\\ \\ \\_\\ \\',
        '       \\ \\  _\\ \\ \\  _\\ \\ \\  __ \\ \\ \\  __ \\',
        '        \\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\',
        '         \\/_/\\/_/\\/_/\\/_/\\/_/\\/_/\\/_/\\/_/\\/_/',
        '',
        'admin/                  [Status: 403, Size: 1240, Words: 120]',
        'backup.zip              [Status: 200, Size: 248392, Words: 12]',
        'config.php.bak          [Status: 200, Size: 1024, Words: 40]',
        'api/                    [Status: 301, Size: 0, Words: 1]',
        '++Résultats filtrés : 4 chemins réels'
      ],
      read: "FFUF n'affiche que ce qui n'est pas filtré. Les quatre chemins sont réels ; backup.zip et config.php.bak sont les plus sensibles.",
      pivot: "Exportez en JSON (<code>-of json</code>) pour garder la preuve, puis classez les résultats par catégorie : admin, backup, API, upload."
    },
    {
      id: 'm3-e7',
      title: 'Découvrir des paramètres cachés',
      context: "L'endpoint <code>/api/user</code> existe. Vous cherchez des paramètres non documentés.",
      task: "Fuzz ez le nom du paramètre sur <code>https://app.acme.example/api/user?FUZZ=1</code> avec <code>params.txt</code>, en filtrant une taille de référence de 0.",
      hint: "Placez <code>FUZZ</code> dans le nom du paramètre et utilisez <code>-fs 0</code>.",
      accept: [/^ffuf\s+-u\s+["']?https:\/\/app\.acme\.example\/api\/user\?FUZZ=1["']?\s+-w\s+params\.txt\s+-fs\s+0$/i],
      solution: 'ffuf -u "https://app.acme.example/api/user?FUZZ=1" -w params.txt -fs 0',
      output: [
        'debug                   [Status: 200, Size: 842, Words: 95]',
        'user_id                 [Status: 200, Size: 640, Words: 72]',
        'redirect                [Status: 302, Size: 0, Words: 1]',
        '++3 paramètres influencent la réponse'
      ],
      read: "debug change le contenu (842 octets), user_id aussi, et redirect provoque une redirection. Ce sont trois pistes distinctes.",
      pivot: "Testez debug pour des traces, user_id pour un IDOR (avec deux comptes de test), et redirect pour un open redirect (destination externe)."
    },
    {
      id: 'm3-e8',
      title: 'Tester un IDOR avec FFUF',
      context: "L'API de factures utilise un identifiant numérique. Vous avez un compte de test et l'autorisation de vérifier le contrôle d'accès.",
      task: "Fuzz ez <code>https://app.acme.example/api/invoice?id=FUZZ</code> avec <code>ids.txt</code>, en filtrant les codes 403 et 404.",
      hint: "Options : <code>-fc 403,404</code>.",
      accept: [/^ffuf\s+-u\s+["']?https:\/\/app\.acme\.example\/api\/invoice\?id=FUZZ["']?\s+-w\s+ids\.txt\s+-fc\s+403,404$/i],
      solution: 'ffuf -u "https://app.acme.example/api/invoice?id=FUZZ" -w ids.txt -fc 403,404',
      output: [
        '1042                    [Status: 200, Size: 512, Words: 48]',
        '1043                    [Status: 200, Size: 498, Words: 46]',
        '1044                    [Status: 200, Size: 530, Words: 50]',
        '++3 factures accessibles avec le compte de test'
      ],
      read: "Le compte de test accède à plusieurs factures. Si elles appartiennent à d'autres utilisateurs, c'est un IDOR.",
      pivot: "Vérifiez le champ propriétaire dans la réponse. Documentez un seul cas non sensible, puis recommandez un contrôle d'autorisation côté serveur."
    },
    {
      id: 'm3-e9',
      title: 'Extraire les routes d\'un bundle JS',
      context: "L'application est une SPA et certaines routes ne sont pas liées dans l'interface.",
      task: "Téléchargez <code>/static/js/main.js</code> et extrayez les chaînes <code>/api/...</code> uniques.",
      hint: "Enchaînez <code>curl -s</code>, <code>grep -oE</code>, <code>sort -u</code>.",
      accept: [/curl\s+-s\s+.*main\.js.*grep\s+-oE?.*sort\s+-u/i],
      solution: "curl -s https://app.acme.example/static/js/main.js | grep -oE '\"/api/[a-zA-Z0-9/_-]+\"' | sort -u",
      output: [
        '"/api/admin/export"',
        '"/api/invoices"',
        '"/api/profile"',
        '"/api/users/search"',
        '++4 routes API extraites du bundle'
      ],
      read: "admin/export et users/search ne sont pas visibles dans l'interface. Elles peuvent exposer des fonctions sensibles.",
      pivot: "Testez chaque route avec un compte standard et vérifiez les codes et les données. Une route admin accessible sans rôle est un défaut d'autorisation."
    },
    {
      id: 'm3-e10',
      title: 'Crawler l\'application avec Katana',
      context: "Vous voulez découvrir les URLs liées et les routes générées par JavaScript.",
      task: "Lancez <code>katana</code> sur <code>https://app.acme.example</code> avec exécution JavaScript et profondeur 3, en sortie dans <code>urls.txt</code>.",
      hint: "Options : <code>-u</code>, <code>-jc</code>, <code>-d 3</code>, <code>-o urls.txt</code>.",
      accept: [/^katana\s+-u\s+https:\/\/app\.acme\.example\s+-jc\s+-d\s+3\s+-o\s+urls\.txt$/i],
      solution: 'katana -u https://app.acme.example -jc -d 3 -o urls.txt',
      output: [
        'https://app.acme.example/',
        'https://app.acme.example/login',
        'https://app.acme.example/dashboard',
        'https://app.acme.example/api/profile?user=alice',
        'https://app.acme.example/api/invoices?year=2026',
        '++27 URLs découvertes'
      ],
      read: "Les URLs avec paramètres (user, year) sont des candidats aux tests d'autorisation et d'injection. Le crawl a aussi trouvé l'API profil.",
      pivot: "Dédupliquez, puis testez chaque paramètre avec des valeurs d'un autre compte et des caractères spéciaux. Comparez avec les routes extraites du JS."
    },
    {
      id: 'm3-e11',
      title: 'Lancer un scan ZAP baseline',
      context: "Vous devez produire un premier rapport de configuration sur l'application, sans scan actif agressif.",
      task: "Lancez un quick-scan ZAP sur <code>https://app.acme.example</code> et générez <code>zap-report.html</code>.",
      hint: "Syntaxe : <code>zap-cli quick-scan -s xss,sqli -r rapport.html URL</code>.",
      accept: [/^zap-cli\s+quick-scan\s+-s\s+xss,sqli\s+-r\s+zap-report\.html\s+https:\/\/app\.acme\.example$/i],
      solution: 'zap-cli quick-scan -s xss,sqli -r zap-report.html https://app.acme.example',
      output: [
        '..(ZAP démarre en mode daemon)',
        '..Crawl passif terminé : 18 URLs',
        '..Scan actif limité à xss,sqli',
        '!!Alerte : Content Security Policy (CSP) header not set',
        '!!Alerte : Cookie without Secure flag',
        '++Rapport écrit : zap-report.html'
      ],
      read: "Les alertes de configuration (CSP, cookie) sont fiables. Les alertes XSS/SQLi doivent être reproduites manuellement avant d'être rapportées.",
      pivot: "Convertissez les alertes confirmées en fiches avec preuve. Ne transmettez jamais un rapport de scanner brut comme livrable final."
    },
    {
      id: 'm3-e12',
      title: 'Interpréter un code 403',
      context: "Le scan a trouvé <code>/admin/</code> en 403. Vous devez décider de la suite.",
      task: "Vérifiez les en-têtes et le corps de <code>https://app.acme.example/admin/</code> avec curl, sans suivre les redirections.",
      hint: "Utilisez <code>curl -sSI</code> (ou <code>-si</code> pour voir le corps).",
      accept: [/^curl\s+-sSI\s+https:\/\/app\.acme\.example\/admin\/?$/i, /^curl\s+-si\s+https:\/\/app\.acme\.example\/admin\/?$/i],
      solution: 'curl -sSI https://app.acme.example/admin/',
      output: [
        'HTTP/1.1 403 Forbidden',
        'Server: nginx',
        'Content-Type: text/html; charset=UTF-8',
        'X-Powered-By: PHP/7.4.33',
        'Content-Length: 1240',
        '++Accès refusé, mais le panneau existe et la version PHP est exposée'
      ],
      read: "Le 403 confirme l'existence de l'endpoint. La version PHP est divulguée dans l'en-tête. Le 403 n'est pas une impasse : il indique un contrôle à tester.",
      pivot: "Testez les contournements autorisés (chemin alternatif, méthode, en-tête) et consignez le comportement. Si le panneau reste protégé, notez-le comme point conforme."
    }
  ]
};
