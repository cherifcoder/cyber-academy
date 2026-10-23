export default {
  id: 'm2',
  num: 2,
  title: "Reconnaissance & Enquête d'Empreinte",
  short: "Recon & OSINT",
  icon: "🛰️",
  xp: 300,
  duration: 60,
  summary: "Cartographier la surface d'attaque sans bruit : OSINT, DNS, sous-domaines, technologies, ports et services. Maîtriser Whois, dig, Amass, theHarvester, Subfinder, Nmap et WhatWeb.",
  objectives: [
    "Différencier reconnaissance passive et active, et leurs conséquences",
    "Exploiter Whois, dig, nslookup, crt.sh, theHarvester, Amass et Subfinder",
    "Lire une sortie Nmap et choisir les bons flags selon l'objectif",
    "Identifier les technologies et versions exposées avec WhatWeb / Wappalyzer"
  ],
  blocks: [
    {
      t: 'p',
      x: "La reconnaissance représente <strong>60 à 70 % du temps</strong> d'un audit réel. L'objectif n'est pas de « trouver une faille » mais de construire une <strong>carte fiable de la surface d'attaque</strong> : noms de domaine, sous-domaines, adresses IP, technologies, versions, services exposés, employés et fuites publiques."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Passive', p: "Aucun paquet envoyé à la cible : moteurs de recherche, registres, certificats, archives, fuites. Indétectable par la cible." },
        { v: 'magenta', h: 'Active', p: "Interrogation directe : DNS, ports, bannières HTTP. Visible dans les logs et par les IDS/IPS. À réserver au périmètre autorisé." }
      ]
    },
    { t: 'h', x: "2.1 Reconnaissance passive (OSINT)" },
    {
      t: 'table',
      head: ['Source', 'Ce que l’on obtient', 'Exemple'],
      rows: [
        ['Whois / RDAP', "Titulaire, registrar, dates, serveurs DNS", "whois acme.example"],
        ['crt.sh (Certificate Transparency)', "Sous-domaines révélés par les certificats TLS", 'https://crt.sh/?q=%25.acme.example'],
        ['theHarvester', "Emails, hôtes, employés via sources publiques", "theHarvester -d acme.example -b all"],
        ['Amass (passive)', "Cartographie DNS/ASM à partir de sources tierces", "amass enum -passive -d acme.example"],
        ['Subfinder', "Énumération rapide de sous-domaines (sources passives)", "subfinder -d acme.example -all"],
        ['Shodan / Censys', "Services exposés, bannières, certificats", 'shodan search "ssl:acme.example"'],
        ['Wayback Machine', "Anciennes URLs, endpoints oubliés, paramètres", "web.archive.org/web/*/acme.example/*"],
        ['GitHub / GitLab', "Clés, tokens, endpoints internes, configs", 'recherche "acme.example password"']
      ]
    },
    {
      t: 'callout', v: 'warn', title: "L'OSINT est passif pour la cible, pas pour vous",
      x: "Vos requêtes laissent des traces chez les fournisseurs (Google, crt.sh, Shodan) et peuvent être corrélées. Utilisez un compte dédié à la mission, respectez les CGU et ne collectez pas de données personnelles au-delà du nécessaire (minimisation RGPD)."
    },
    { t: 'h', x: "2.2 DNS : le socle de la cartographie" },
    {
      t: 'code', lang: 'bash', title: "Résolution et enregistrements",
      x: `# Résolution simple
dig acme.example +short
nslookup acme.example

# Tous les types utiles
dig acme.example ANY +noall +answer
dig MX acme.example +short
dig TXT acme.example +short
dig NS acme.example +short

# Transfert de zone (mal configuré = jackpot)
dig AXFR @ns1.acme.example acme.example

# Reverse DNS d'une plage
for ip in $(seq 1 254); do dig -x 203.0.113.$ip +short; done`
    },
    {
      t: 'p',
      x: "Un <strong>transfert de zone (AXFR)</strong> réussi livre l'intégralité des enregistrements du domaine. C'est rare mais critique : un serveur DNS qui l'autorise expose sa structure interne. Les enregistrements <strong>TXT</strong> révèlent souvent des vérifications de propriété (Google, Microsoft), des politiques SPF/DMARC et parfois des secrets oubliés."
    },
    {
      t: 'table',
      head: ['Enregistrement', 'Rôle', 'Intérêt offensif'],
      rows: [
        ['A / AAAA', "Nom → IPv4 / IPv6", "Cibles directes, IP d'origine derrière CDN"],
        ['CNAME', "Alias vers un autre nom", "Sous-domaine abandonné → takeover"],
        ['MX', "Serveurs mail", "Surface email, SPF/DMARC, phishing autorisé ?"],
        ['TXT', "Métadonnées (SPF, DKIM, vérifications)", "Fuite d'infos, faiblesse SPF"],
        ['NS', "Serveurs autoritaires", "Zone transfer, provider DNS"],
        ['SOA', "Serveur primaire, contact", "Nom d'admin, sérial"]
      ]
    },
    { t: 'h', x: "2.3 Énumération de sous-domaines" },
    {
      t: 'code', lang: 'bash', title: "Subfinder + Amass + résolution en masse",
      x: `# Passif rapide (sources publiques)
subfinder -d acme.example -all -silent -o subs.txt

# Amass passif puis actif (plus lent, plus complet)
amass enum -passive -d acme.example -o amass.txt
amass enum -active -d acme.example -brute -w subdomains-top1m.txt

# Vérifier lesquels résolvent réellement
dnsx -l subs.txt -a -resp -o live.txt
httpx -l live.txt -title -tech-detect -status-code -o web.txt

# Détecter les takeovers (CNAME orphelin)
subzy run --targets subs.txt`
    },
    {
      t: 'callout', v: 'tip', title: "Subdomain takeover",
      x: "Un CNAME pointe vers un service tiers (S3, GitHub Pages, Heroku…) dont l'instance a été supprimée. Si le nom est encore résolvable et le bucket libérable, un attaquant peut revendiquer la ressource et servir du contenu sous le domaine de la victime. Vérifiez chaque CNAME vers un service externe."
    },
    { t: 'h', x: "2.4 Nmap : du scan à l'interprétation" },
    {
      t: 'p',
      x: "Nmap combine <strong>découverte d'hôtes</strong>, <strong>scan de ports</strong>, <strong>détection de services/versions</strong> et <strong>scripts NSE</strong>. Le choix des options dépend de la discrétion attendue et du périmètre."
    },
    {
      t: 'table',
      head: ['Flag', 'Effet', 'Quand l’utiliser'],
      rows: [
        ['-sn', "Découverte d'hôtes sans scan de ports", "Cartographier un /24 en début de mission"],
        ['-sS', "TCP SYN (half-open), rapide et discret", "Scan privilégié (root) par défaut"],
        ['-sT', "TCP connect complet", "Sans privilèges root, via proxy"],
        ['-sU', "UDP", "DNS, SNMP, DHCP ; lent, cibler les ports clés"],
        ['-sV', "Version des services", "Identifier Apache 2.4.49, OpenSSH 8.2…"],
        ['-O', "Détection d'OS (heuristique)", "Compléter le profil de la cible"],
        ['-p-', "Les 65 535 ports TCP", "Scan exhaustif (long)"],
        ['--top-ports 1000', "Top 1000 ports", "Compromis vitesse/couverture"],
        ['-Pn', "Pas de ping préalable", "Cible qui bloque l'ICMP"],
        ['--script', "Scripts NSE (http-title, vuln…)", "Enrichir sans exploiter"],
        ['-T4', "Temporisation agressive", "Lab rapide ; risqué en prod"],
        ['-oA scan', "Sortie normalisée (.nmap/.xml/.gnmap)", "Traçabilité et parsing"]
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Séquence de scan recommandée",
      x: `# 1. Découverte
nmap -sn 10.10.10.0/24 -oA 01-discovery

# 2. Top ports + versions, sans trop de bruit
nmap -sS -sV --top-ports 1000 -T3 --max-retries 2 10.10.10.5 -oA 02-services

# 3. Scan complet si autorisé et utile
nmap -sS -p- --min-rate 500 -T4 10.10.10.5 -oA 03-allports

# 4. Enrichissement HTTP
nmap -sV -p 80,443,8080 --script http-title,http-headers,http-methods 10.10.10.5

# 5. Vulnérabilités (lecture seule, périmètre lab)
nmap -p 445 --script smb-vuln-ms17-010 10.10.10.5`
    },
    {
      t: 'p',
      x: "<strong>Interprétation des états :</strong> <code>open</code> = un service écoute et accepte les connexions ; <code>closed</code> = aucun service mais l'hôte répond ; <code>filtered</code> = un pare-feu ou un IDS bloque silencieusement (souvent par drop) ; <code>open|filtered</code> = indécidable (fréquent en UDP). Un port filtré n'est pas une preuve d'absence de service : adaptez (fragmentation, ports source, scan UDP)."
    },
    { t: 'h', x: "2.5 Empreinte technologique" },
    {
      t: 'code', lang: 'bash', title: "WhatWeb, Wappalyzer, curl",
      x: `# Empreinte HTTP globale
whatweb -a 3 https://app.acme.example

# Bannière et en-têtes bruts
curl -sSI https://app.acme.example

# Chaîne de redirections
curl -sSIL https://app.acme.example | grep -E "^(HTTP|location)"

# Analyse d'une app JS (endpoints dans les bundles)
curl -s https://app.acme.example/static/js/main.js | grep -oE '"/api/[a-zA-Z0-9/_-]+"' | sort -u`
    },
    {
      t: 'table',
      head: ['Indice', 'Technologie probable', 'Piste de test'],
      rows: [
        ['X-Powered-By: PHP/7.4', "PHP ancien", "Versions EOL, wrappers, LFI"],
        ['Server: nginx + Set-Cookie: PHPSESSID', "Nginx + PHP", "Fichiers .php.bak, path traversal"],
        ['X-AspNet-Version', "ASP.NET / IIS", "ViewState, erreurs détaillées, .aspx"],
        ['_shopify_s, cdn.shopify.com', "Shopify", "Apps tierces, IDOR sur les thèmes"],
        ['X-Generator: Drupal 9', "Drupal", "Modules, /user/login, CHANGELOG.txt"],
        ['wp-content, wp-json', "WordPress", "Enumération plugins/thèmes, xmlrpc"],
        ['Set-Cookie: JSESSIONID', "Java / Spring", "Actuator, SpEL, deserialization"]
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Discrétion : le bruit se paie",
      x: "Un scan -T4 sur un /16, des requêtes ffuf à 500 threads ou des scripts NSE « vuln » en production déclenchent WAF, SOC et coupure. En mission réelle, validez les débits avec le client et préférez des fenêtres horaires annoncées. En lab, vous pouvez être agressif — c'est le seul endroit où c'est sans conséquence."
    },
    { t: 'h', x: "2.6 Atelier : simulateur Nmap" },
    {
      t: 'p',
      x: "Choisissez une cible de laboratoire et une stratégie de scan. Le simulateur produit une sortie réaliste, puis vous devez identifier les services et les pistes prioritaires."
    },
    { t: 'lab', id: 'nmap' }
  ],
  quiz: 'q2'
};
