export default {
  id: 'm3',
  num: 3,
  title: "Cartographie & Énumération d'Applications",
  short: "Cartographie",
  icon: "🗺️",
  xp: 320,
  duration: 55,
  summary: "Transformer une liste d'actifs en plan d'attaque : architecture, crawling, spidering, fuzzing d'endpoints. Maîtriser Burp, ZAP, Gobuster, Dirsearch et FFUF.",
  objectives: [
    "Décrire une architecture web type et ses points d'entrée",
    "Distinguer crawling, spidering et fuzzing, et choisir la bonne approche",
    "Utiliser Gobuster, Dirsearch et FFUF avec les bons filtres",
    "Interpréter les codes de statut et détecter les faux positifs (soft 404)"
  ],
  blocks: [
    {
      t: 'p',
      x: "Après la reconnaissance vient la <strong>cartographie applicative</strong> : comprendre comment l'application est construite, quels endpoints existent, quels paramètres sont acceptés et quelles fonctionnalités ne sont pas visibles dans l'interface. C'est ici que se découvrent la majorité des bugs réels : routes oubliées, API non documentées, panneaux d'administration, backups."
    },
    { t: 'h', x: "3.1 Anatomie d'une application web" },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Bordure', p: "CDN, WAF, reverse proxy, load balancer. Souvent là où vivent les règles de filtrage et les en-têtes de sécurité." },
        { v: 'magenta', h: 'Application', p: "Front statique (SPA) + API REST/GraphQL. Logique métier, authentification, autorisations." },
        { v: 'amber', h: 'Services', p: "Microservices internes, files de messages, workers. Cibles SSRF et mouvements latéraux." },
        { v: 'lime', h: 'Données', p: "Base SQL/NoSQL, cache Redis, stockage objet (S3). Fuites via IDOR, injections, buckets ouverts." }
      ]
    },
    {
      t: 'ul',
      x: [
        "<strong>Surface visible</strong> : ce que l'interface propose (pages, formulaires, boutons).",
        "<strong>Surface cachée</strong> : endpoints d'API, paramètres masqués (<code>?debug=1</code>), routes admin, fichiers de sauvegarde, environnements de préproduction.",
        "<strong>Surface tierce</strong> : sous-domaines oubliés, intégrations (Stripe, OAuth), webhooks, buckets cloud."
      ]
    },
    { t: 'h', x: "3.2 Crawling, spidering, fuzzing" },
    {
      t: 'table',
      head: ['Technique', 'Principe', 'Outil', 'Limite'],
      rows: [
        ['Crawling', "Suivre les liens depuis une page d'entrée", "Burp Spider, ZAP, katana", "Ne trouve que ce qui est lié"],
        ['Spidering', "Exploration récursive + formulaires + JS", "Burp, ZAP, Playwright", "Peut déclencher des actions destructrices"],
        ['Fuzzing de répertoires', "Tester des noms issus d'une wordlist", "Gobuster, Dirsearch, FFUF", "Bruit, faux positifs, 404 dynamiques"],
        ['Fuzzing de paramètres', "Découvrir des paramètres cachés", "Arjun, FFUF", "Nécessite des réponses différentiables"],
        ['Analyse de bundles JS', "Extraire les routes et clés d'API du front", "LinkFinder, JS Miner", "Code minifié/obfusqué"]
      ]
    },
    {
      t: 'callout', v: 'info', title: "Le code JavaScript est une carte au trésor",
      x: "Les SPA embarquent souvent leurs routes, endpoints d'API, clés publiques et feature flags. Cherchez <code>/api/</code>, <code>admin</code>, <code>internal</code>, <code>debug</code>, <code>graphql</code> et les URLs absolues dans les bundles. Un endpoint non lié dans l'UI reste accessible."
    },
    { t: 'h', x: "3.3 Les outils d'énumération" },
    {
      t: 'code', lang: 'bash', title: "Gobuster : dir, dns, vhost",
      x: `# Répertoires et fichiers
gobuster dir -u https://app.acme.example -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt \\
  -x php,html,txt,bak,zip -t 30 -k -o dirs.txt

# Sous-domaines
gobuster dns -d acme.example -w subdomains-top1m.txt -t 50

# Virtual hosts (même IP, Host différent)
gobuster vhost -u https://acme.example -w vhosts.txt --append-domain`
    },
    {
      t: 'code', lang: 'bash', title: "Dirsearch et FFUF",
      x: `# Dirsearch : extensions, exclusion des 404, threads
dirsearch -u https://app.acme.example -e php,asp,aspx,jsp,html,js,json,bak \\
  -x 404,400 --random-agent -t 25

# FFUF : fuzzing d'URL avec filtres de taille
ffuf -u https://app.acme.example/FUZZ -w raft-medium-directories.txt \\
  -fc 404 -fs 1240 -t 40 -o ffuf-dirs.json -of json

# FFUF : paramètres GET
ffuf -u "https://app.acme.example/api/user?FUZZ=1" -w params.txt -fs 0

# FFUF : valeur d'un paramètre (ex. IDOR)
ffuf -u "https://app.acme.example/api/invoice?id=FUZZ" -w ids.txt -fc 403,404`
    },
    {
      t: 'table',
      head: ['Code', 'Signification', 'Action'],
      rows: [
        ['200', "Ressource accessible", "Analyser le contenu, vérifier le soft 404"],
        ['204', "Succès sans contenu", "Souvent une API qui accepte la requête"],
        ['301 / 302', "Redirection", "Suivre avec -L, noter la destination"],
        ['401', "Authentification requise", "Endpoint réel : tester avec/sans session"],
        ['403', "Accès refusé", "Endpoint existe : bypass (headers, encodage, path)"],
        ['404', "Absent", "Filtrer, sauf si taille différente = soft 404"],
        ['405', "Méthode non autorisée", "Tester PUT/DELETE/PATCH"],
        ['500', "Erreur serveur", "Souvent un paramètre mal formé révélateur"]
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Le piège du soft 404",
      x: "Beaucoup d'applications renvoient 200 avec une page « introuvable ». Filtrez par <strong>taille</strong> (<code>-fs</code>), par <strong>nombre de mots</strong> (<code>-fw</code>) ou par <strong>contenu</strong> (<code>-fr</code>). Calibrez toujours avec une URL bidon avant de lancer un gros scan."
    },
    { t: 'h', x: "3.4 Burp Suite et OWASP ZAP" },
    {
      t: 'p',
      x: "Un <strong>proxy d'interception</strong> s'installe entre le navigateur et l'application. Il permet de voir, modifier et rejouer chaque requête. C'est l'outil central du pentest web : sans lui, on teste à l'aveugle."
    },
    {
      t: 'steps',
      items: [
        { h: "Configurer le proxy", p: "Burp écoute sur 127.0.0.1:8080. Installez FoxyProxy dans le navigateur et créez un profil pointant vers ce proxy." },
        { h: "Installer le certificat CA", p: "Visitez http://burpsuite, téléchargez le certificat, importez-le dans le magasin de certificats (ou dans Firefox). Sans cela, HTTPS génère des erreurs." },
        { h: "Définir le scope", p: "Target → Scope : ajoutez uniquement les domaines autorisés. Le scope filtre l'historique, le sitemap et les scans." },
        { h: "Cartographier", p: "Naviguez dans l'application, utilisez le Sitemap et l'onglet Issues. Puis lancez un crawl contrôlé et comparez avec votre liste d'endpoints." },
        { h: "Tester", p: "Envoyez les requêtes intéressantes vers Repeater (manuel) ou Intruder (automatisé). Conservez chaque preuve." }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "ZAP en mode daemon",
      x: "ZAP peut tourner en headless et s'automatiser : <code>zap.sh -daemon -port 8090 -config api.key=…</code>, puis <code>zap-cli quick-scan -s xss,sqli -r report.html URL</code>. Pratique pour l'intégration CI, à condition de valider manuellement les résultats."
    },
    { t: 'h', x: "3.5 Atelier : fuzzing d'endpoints" },
    {
      t: 'p',
      x: "Vous auditez <code>shop.lab</code>. Choisissez un outil, une wordlist et vos filtres, puis lancez l'énumération. À vous de repérer l'endpoint critique parmi les faux positifs."
    },
    { t: 'lab', id: 'fuzz' }
  ],
  quiz: 'q3'
};
