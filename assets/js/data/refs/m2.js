export default {
  blocks: [
    { t: 'h', x: "2.9 Fiches commandes : de l'information brute à la décision" },
    {
      t: 'p',
      x: "Chaque commande ci-dessous est présentée selon le même schéma : <strong>ce qu'elle fait</strong>, <strong>ce qu'elle renvoie</strong>, <strong>comment l'utiliser</strong>, un <strong>exemple</strong> et surtout <strong>ce que l'on fait de l'information obtenue</strong>. Une donnée de reconnaissance n'a de valeur que si elle mène à une action de test ou à une décision de périmètre."
    },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'whois / RDAP', tag: 'Passif · registre',
          what: "Interroge le registre public d'un nom de domaine ou d'une plage IP. <strong>WHOIS</strong> utilise le protocole historique (port 43) ; <strong>RDAP</strong> est sa version moderne en JSON over HTTPS, avec un format structuré et des liens.",
          gives: "<b>Titulaire</b> (souvent masqué pour raison RGPD), <b>registrar</b>, <b>dates</b> de création/mise à jour/expiration, <b>serveurs DNS</b> (NS), statuts du domaine, pays, contacts techniques et abuse. Pour une IP : bloc alloué, ASN, organisation.",
          use: "Première étape de toute reconnaissance passive. <code>whois domaine</code> pour un nom ; <code>whois IP</code> pour l'infrastructure. Préférez RDAP pour parser du JSON : <code>curl -s https://rdap.org/domain/acme.example</code>.",
          syntax: 'whois [domaine|IP]   |   curl -s https://rdap.org/domain/<domaine> | jq',
          example: 'whois acme.example\ncurl -s https://rdap.org/domain/acme.example | jq \'{handle, events, nameservers}\'',
          read: "<b>Date de création récente</b> + <b>registrar inconnu</b> = domaine possiblement typosquatté ou jetable. <b>NS chez un hébergeur cloud</b> = infrastructure externalisée, chercher les buckets et sous-domaines. <b>Email de contact</b> = cible d'OSINT ou de phishing (jamais sans autorisation). <b>Statut clientTransferProhibited</b> = verrou anti-transfert, pas une sécurité applicative.<br><br><b>Exemple d'enchaînement :</b> whois révèle <code>ns1.cloudprovider.example</code> → on interroge ce NS avec <code>dig</code> → on découvre des sous-domaines → on teste leur résolution avec <code>dnsx</code> → on empreinte les services web avec <code>httpx</code> et <code>whatweb</code>."
        },
        {
          cmd: 'dig', tag: 'DNS · actif',
          what: "Effectue des requêtes DNS et affiche la réponse complète : section ANSWER, AUTHORITY, ADDITIONAL, TTL, serveur interrogé. C'est l'outil de référence pour comprendre une zone.",
          gives: "Les enregistrements demandés : <b>A/AAAA</b> (IP), <b>CNAME</b> (alias), <b>MX</b> (mail), <b>TXT</b> (SPF, vérifications, secrets oubliés), <b>NS</b> (serveurs autoritaires), <b>SOA</b> (primaire, contact), <b>SRV</b>, <b>CAA</b>. Le TTL indique la durée de cache.",
          use: "Toujours préciser le type et éventuellement le serveur : <code>dig +short MX acme.example</code>. Pour un transfert de zone : <code>dig AXFR @ns1.acme.example acme.example</code>. Pour l'inverse : <code>dig -x 203.0.113.42</code>.",
          syntax: 'dig [@serveur] nom type +short',
          example: 'dig acme.example ANY +noall +answer\ndig MX acme.example +short\ndig TXT acme.example +short\ndig AXFR @ns1.acme.example acme.example',
          read: "<b>A/AAAA</b> → adresses à scanner (si autorisées). <b>CNAME vers un service tiers</b> → risque de subdomain takeover : vérifier que la ressource existe encore. <b>MX</b> → surface email et vérification SPF/DMARC. <b>TXT</b> → un enregistrement de vérification Google/Microsoft révèle les fournisseurs ; un SPF trop permissif (<code>+all</code>) autorise l'usurpation. <b>NS</b> → tenter AXFR sur chaque serveur autoritaire. <b>SOA</b> → nom du contact admin, souvent <code>hostmaster@</code>, et numéro de série.<br><br><b>Exemple :</b> <code>dig CNAME blog.acme.example +short</code> renvoie <code>acme-blog.herokuapp.com</code> et l'application Heroku n'existe plus → takeover potentiel, à confirmer dans le cadre autorisé."
        },
        {
          cmd: 'nslookup / host', tag: 'DNS · alternative',
          what: "Résolveurs DNS plus simples, disponibles partout (Windows, Linux, macOS). <code>host</code> est concis ; <code>nslookup</code> a un mode interactif.",
          gives: "La même information que <code>dig</code>, avec une présentation différente : nom, adresse, serveur faisant autorité.",
          use: "Dépannage rapide ou poste Windows sans dig. Pour forcer un résolveur : <code>nslookup acme.example 8.8.8.8</code>.",
          syntax: 'nslookup nom [serveur]   |   host [-t type] nom',
          example: 'nslookup acme.example 1.1.1.1\nhost -t MX acme.example',
          read: "Comparer les réponses de plusieurs résolveurs révèle parfois un split-horizon DNS (réponse interne différente) ou un cache empoisonné. Une réponse <code>NXDOMAIN</code> signifie que le nom n'existe pas dans la zone interrogée, pas nécessairement qu'il n'existe nulle part."
        },
        {
          cmd: 'theHarvester', tag: 'Passif · OSINT',
          what: "Collecte des emails, noms d'hôtes, employés et URLs depuis des sources publiques (moteurs, certificats, registres).",
          gives: "Une liste d'emails, de sous-domaines et parfois de noms de personnes, avec la source associée.",
          use: "Cadrer la collecte au domaine autorisé. <code>-b</code> choisit les sources ; <code>-l</code> limite le volume. Ne collectez pas de données personnelles au-delà du nécessaire (minimisation RGPD).",
          syntax: 'theHarvester -d domaine -b sources -l nombre',
          example: 'theHarvester -d acme.example -b all -l 200',
          read: "Les emails confirment le format (<code>prenom.nom@</code>) et les fournisseurs mail. Les hôtes sont à recouper avec <code>dnsx</code>. Un email d'administrateur ou un hostname <code>vpn.</code>/<code>jira.</code> oriente la suite de la cartographie.<br><br><b>Exemple :</b> un hostname <code>old-portal.acme.example</code> trouvé par theHarvester et absent de l'inventaire client peut être un actif oublié, donc prioritaire."
        },
        {
          cmd: 'crt.sh', tag: 'Passif · certificats',
          what: "Interroge les journaux de transparence des certificats (Certificate Transparency). Chaque certificat émis pour un domaine y est public.",
          gives: "Les noms d'hôtes présents dans les certificats, y compris des sous-domaines internes ou oubliés, avec les dates d'émission.",
          use: "Ouvrir <code>https://crt.sh/?q=%25.acme.example</code> ou interroger l'API JSON : <code>curl -s 'https://crt.sh/?q=%25.acme.example&amp;output=json' | jq -r '.[].name_value' | sort -u</code>.",
          syntax: "curl -s 'https://crt.sh/?q=%25.domaine&output=json' | jq -r '.[].name_value' | sort -u",
          example: "curl -s 'https://crt.sh/?q=%25.acme.example&output=json' | jq -r '.[].name_value' | sort -u",
          read: "Chaque nom est un candidat à tester. Les wildcards <code>*.acme.example</code> indiquent que tous les sous-domaines existent potentiellement. Les certificats anciens révèlent des environnements de test ou des services décommissionnés encore résolvables.<br><br><b>Exemple :</b> <code>staging.acme.example</code> apparaît dans un certificat de 2023 mais pas dans le DNS actuel → vérifier s'il résout encore via un autre enregistrement."
        },
        {
          cmd: 'subfinder / amass', tag: 'Passif · sous-domaines',
          what: "Énumèrent des sous-domaines. <strong>Subfinder</strong> est rapide et passif (sources publiques) ; <strong>Amass</strong> est plus complet, avec modes passif et actif (brute force, résolution).",
          gives: "Une liste de noms d'hôtes uniques, avec parfois la source. Amass peut aussi produire un graphe de relations DNS/ASN.",
          use: "Commencer passif pour ne pas toucher la cible, puis vérifier la résolution. <code>subfinder -d acme.example -all -silent -o subs.txt</code> ; <code>amass enum -passive -d acme.example -o amass.txt</code>.",
          syntax: 'subfinder -d domaine -all -silent -o fichier   |   amass enum -passive -d domaine',
          example: 'subfinder -d acme.example -all -silent -o subs.txt\namass enum -passive -d acme.example -o amass.txt',
          read: "La liste brute contient des faux positifs et des noms morts. Il faut la dédupliquer puis vérifier la résolution avec <code>dnsx</code>. Les noms <code>admin</code>, <code>api</code>, <code>dev</code>, <code>staging</code>, <code>vpn</code> sont prioritaires car souvent moins durcis.<br><br><b>Exemple :</b> 312 sous-domaines bruts → 147 résolvent → 38 exposent HTTP → 4 ont un titre « Admin »."
        },
        {
          cmd: 'dnsx / httpx', tag: 'Validation · surface web',
          what: "<strong>dnsx</strong> résout une liste de noms et filtre les vivants ; <strong>httpx</strong> sonde les services HTTP/HTTPS et récupère titre, code, technologies, certificat.",
          gives: "Pour dnsx : les noms qui ont une réponse A/AAAA et l'adresse obtenue. Pour httpx : URL vivantes, codes HTTP, titres, serveurs, technologies, redirections, parfois favicon hash.",
          use: "Toujours après l'énumération, pour transformer une liste en surface réelle. <code>dnsx -l subs.txt -a -resp -o live.txt</code> puis <code>httpx -l live.txt -title -tech-detect -status-code -o web.txt</code>.",
          syntax: 'dnsx -l entree.txt -a -resp -o sortie.txt   |   httpx -l entree.txt -title -tech-detect -status-code',
          example: 'dnsx -l subs.txt -a -resp -o live.txt\nhttpx -l live.txt -title -tech-detect -status-code -o web.txt',
          read: "Un code 200 avec un titre « Index of / » indique un listing de répertoire. Un 401/403 prouve l'existence d'un service protégé. Une technologie ancienne (jQuery 1.x, PHP 5.6) oriente vers des CVE connues. Un certificat expiré ou un titre par défaut révèle parfois un service non maintenu.<br><br><b>Exemple :</b> httpx renvoie <code>https://vpn.acme.example [200] [Login] [Citrix NetScaler]</code> → vérifier la version et les CVE associées, dans le périmètre autorisé."
        },
        {
          cmd: 'nmap', tag: 'Actif · ports & services',
          what: "Découvre les hôtes, les ports ouverts, les services, leurs versions et parfois l'OS. Les scripts NSE enrichissent l'analyse (titres HTTP, méthodes, vulnérabilités connues).",
          gives: "État des ports (<b>open</b>, <b>closed</b>, <b>filtered</b>), protocole, service, version, bannière, résultats de scripts. <code>-oA</code> produit trois formats de sortie pour la traçabilité.",
          use: "Découverte : <code>-sn</code>. Scan rapide : <code>-sS -sV --top-ports 1000</code>. Complet : <code>-p-</code>. Scripts sûrs : <code>--script http-title,http-headers</code>. En lab seulement pour les scripts <code>vuln</code>.",
          syntax: 'nmap [-sn|-sS|-sT] [-sV] [-p ports] [--script scripts] cible -oA nom',
          example: 'nmap -sS -sV --top-ports 1000 -T3 203.0.113.42 -oA 02-services\nnmap -sV -p 80,443,8080 --script http-title,http-headers 203.0.113.42',
          read: "<b>open</b> = service à analyser. <b>filtered</b> = pare-feu/IDS, pas une preuve d'absence. <b>Version</b> = rechercher les CVE correspondantes (avec <code>searchsploit</code> ou la base NVD) sans exploiter. <b>Port 8080</b> = souvent une admin ou un proxy. <b>3306/5432 ouvert</b> = base exposée, à vérifier (accès distant ?).<br><br><b>Exemple :</b> <code>21/tcp open ftp vsftpd 2.3.4</code> → CVE-2011-2523 connue ; noter la version, tester uniquement en lab, proposer la mise à jour."
        },
        {
          cmd: 'whatweb', tag: 'Actif · empreinte web',
          what: "Identifie les technologies d'un site : serveur, framework, CMS, langage, bibliothèques, cookies, en-têtes, balises meta.",
          gives: "Une liste de technologies avec parfois la version, le titre de page, les redirections et les adresses email exposées.",
          use: "Sur chaque service HTTP découvert. <code>-a 3</code> pour une agressivité moyenne en lab ; rester discret en production.",
          syntax: 'whatweb [-a niveau] URL',
          example: 'whatweb -a 3 https://app.acme.example',
          read: "Les versions permettent de chercher des vulnérabilités connues. <code>X-Powered-By</code> ou <code>Server</code> révèlent la stack. Un CMS avec des plugins obsolètes (WordPress + plugin 2019) est une piste. Un WAF détecté (Cloudflare, Akamai) impose d'adapter le débit et les payloads.<br><br><b>Exemple :</b> whatweb renvoie <code>WordPress 6.2, plugin contact-form-7 5.3</code> → consulter les avis de sécurité du plugin, sans scanner agressivement."
        },
        {
          cmd: 'curl', tag: 'Actif · HTTP',
          what: "Client HTTP en ligne de commande. Permet d'inspecter les en-têtes, suivre les redirections, envoyer des méthodes et des corps, tester des cookies et des tokens.",
          gives: "En-têtes de réponse (<code>-I</code>), corps (<code>-s</code>), chaîne de redirections (<code>-IL</code>), code de statut, temps de réponse, certificat. Avec <code>-x</code>, passe par un proxy (Burp).",
          use: `<code>curl -sSI URL</code> pour les en-têtes ; <code>curl -sSIL URL | grep -E '^(HTTP|location)'</code> pour les redirections ; <code>curl -s URL/static/js/main.js | grep -oE '"/api/[^"]+"'</code> pour extraire des endpoints.`,
          syntax: 'curl [-sSI|-sSIL|-x proxy] [-H "Header: value"] URL',
          example: "curl -sSI https://app.acme.example\ncurl -sSIL https://app.acme.example | grep -E '^(HTTP|location)'\ncurl -s https://app.acme.example/static/js/main.js | grep -oE '\"/api/[a-zA-Z0-9/_-]+\"' | sort -u",
          read: "Les en-têtes révèlent la stack, les cookies (flags), le cache et les protections. Une redirection vers un domaine différent peut indiquer un CDN ou un open redirect. Les endpoints extraits du JS sont des routes non visibles dans l'UI, donc à tester en priorité.<br><br><b>Exemple :</b> un bundle contient <code>/api/internal/users</code> → envoyer la requête avec et sans session, comparer les codes 200/401/403."
        },
        {
          cmd: 'nikto', tag: 'Actif · serveur web',
          what: "Scanner de serveur web qui teste des fichiers dangereux, des configurations par défaut, des versions obsolètes et des en-têtes manquants.",
          gives: "Une liste de constats avec l'URL testée, le code de réponse et une description. Beaucoup de bruit et de faux positifs.",
          use: "En lab ou avec un accord explicite, à faible débit. <code>-h URL</code>, <code>-output fichier</code>. Toujours vérifier manuellement chaque résultat.",
          syntax: 'nikto -h URL -output fichier',
          example: 'nikto -h http://app.acme.example -output evidence/nikto.txt',
          read: "Un <code>/admin/</code> accessible ou un <code>phpinfo.php</code> est un vrai signal. Les alertes de version doivent être confirmées par une bannière. Les « missing security header » sont utiles pour le rapport de durcissement.<br><br><b>Exemple :</b> nikto signale <code>/.git/</code> accessible → vérifier avec curl ; si le dépôt est exposé, il peut contenir des secrets et l'historique du code."
        }
      ]
    },
    { t: 'h', x: "2.10 Glossaire : DNS, protocoles, ports et surface d'attaque" },
    {
      t: 'p',
      x: "Ces notions reviennent dans presque tous les modules. Maîtrisez-les avant de lancer un scan : sans elles, une sortie d'outil reste une suite de lignes illisibles."
    },
    {
      t: 'glossary',
      items: [
        { term: 'DNS', full: 'Domain Name System', def: "Annuaire distribué qui traduit un nom lisible (acme.example) en adresse IP et publie d'autres informations (mail, services, vérifications).", use: "Interroger les enregistrements pour cartographier la surface ; comparer plusieurs résolveurs pour détecter un split-horizon.", ex: 'dig A acme.example +short' },
        { term: 'Résolveur', def: "Serveur qui répond à une requête DNS, souvent en cache, sans être autoritaire pour la zone.", use: "8.8.8.8, 1.1.1.1 ou le DNS de l'entreprise. Un résolveur interne peut révéler des noms invisibles depuis Internet.", ex: 'nslookup intranet.acme.example 10.0.0.53' },
        { term: 'Serveur autoritaire', def: "Serveur qui détient officiellement les enregistrements d'une zone et répond aux requêtes la concernant.", use: "C'est lui qu'on interroge pour un transfert de zone AXFR, avec son adresse obtenue via les NS.", ex: 'dig NS acme.example +short' },
        { term: 'Enregistrement A / AAAA', def: "A associe un nom à une IPv4 ; AAAA à une IPv6.", use: "Identifier les adresses réelles derrière un nom et repérer les IP d'origine cachées derrière un CDN.", ex: 'dig AAAA acme.example +short' },
        { term: 'CNAME', def: "Alias d'un nom vers un autre nom.", use: "Détecter un service tiers et un éventuel subdomain takeover si la cible n'existe plus.", ex: 'dig CNAME blog.acme.example +short' },
        { term: 'MX', def: "Serveurs de messagerie du domaine, avec priorité.", use: "Cartographier la surface email, vérifier SPF/DMARC et identifier le fournisseur (Google, Microsoft, OVH…).", ex: 'dig MX acme.example +short' },
        { term: 'TXT', def: "Enregistrement texte libre, utilisé pour SPF, DKIM, DMARC et les vérifications de propriété.", use: "Révéler les fournisseurs, les politiques anti-usurpation et parfois des secrets oubliés.", ex: 'dig TXT _dmarc.acme.example +short' },
        { term: 'NS / SOA', def: "NS liste les serveurs autoritaires ; SOA contient le serveur primaire, le contact admin et le numéro de série.", use: "Cibler AXFR sur les NS et récupérer un contact administratif via SOA.", ex: 'dig SOA acme.example +short' },
        { term: 'Transfert de zone (AXFR)', def: "Mécanisme de réplication qui copie toute une zone DNS d'un serveur à un autre.", use: "S'il est mal restreint, il expose tous les enregistrements, y compris internes.", ex: 'dig AXFR @ns1.acme.example acme.example' },
        { term: 'DNS inverse', def: "Résolution IP → nom, via la zone in-addr.arpa ou ip6.arpa.", use: "Identifier les serveurs d'une plage et les noms internes mal cachés.", ex: 'dig -x 203.0.113.42 +short' },
        { term: 'TTL', def: "Durée de vie d'un enregistrement dans les caches DNS, en secondes.", use: "Un TTL court suggère une infrastructure dynamique ou une bascule prochaine ; un TTL long ralentit la propagation des changements.", ex: 'dig A acme.example +noall +answer' },
        { term: 'Port', def: "Numéro qui identifie un service sur une machine (0–65535).", use: "20/21 FTP, 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS, 3306 MySQL, 3389 RDP, 8080 proxy/admin.", ex: 'nmap -p 22,80,443,8080 203.0.113.42' },
        { term: 'Protocole', def: "Ensemble de règles qui régit une communication (TCP, UDP, HTTP, TLS, DNS…).", use: "Choisir le bon scan : TCP pour HTTP/SSH, UDP pour DNS/SNMP ; comprendre qu'un service peut être filtré au niveau transport.", ex: 'nmap -sU -p 53,161 203.0.113.42' },
        { term: 'TCP / UDP', def: "TCP est connecté et fiable (poignée de main) ; UDP est sans connexion, plus rapide mais sans garantie.", use: "Un scan TCP est rapide et fiable ; un scan UDP est lent et souvent filtré, à réserver aux ports connus.", ex: 'nmap -sS -p- cible  # TCP ; nmap -sU -p 53,161 cible  # UDP' },
        { term: 'Service / version', def: "Programme qui écoute sur un port et sa version précise.", use: "Mapper la version à des CVE connues et prioriser les services obsolètes.", ex: 'nmap -sV -p 80,443 cible' },
        { term: 'Bannière', def: "Texte d'identification renvoyé par un service (serveur, version, parfois OS).", use: "Empreinte rapide, mais facilement falsifiable. À recouper avec les en-têtes et le comportement.", ex: 'curl -sSI https://app.acme.example | head -5' },
        { term: 'OSINT', full: 'Open Source Intelligence', def: "Collecte d'informations à partir de sources publiques, sans interroger directement la cible.", use: "Commencer par le passif pour ne pas alerter la cible, puis recouper les données.", ex: 'theHarvester -d acme.example -b all' },
        { term: 'Reconnaissance passive / active', def: "Passive : aucune requête vers la cible. Active : interrogation directe, visible dans les logs.", use: "La passive est sans risque juridique immédiat ; l'active doit rester dans le scope et les horaires autorisés.", ex: 'Passif : crt.sh. Actif : nmap.' },
        { term: 'Subdomain takeover', def: "Prise de contrôle d'un sous-domaine dont le CNAME pointe vers un service tiers supprimé ou non réclamé.", use: "Vérifier chaque CNAME externe et confirmer que la ressource peut être revendiquée, sans la revendiquer hors scope.", ex: 'dig CNAME old.acme.example +short' },
        { term: 'CIDR / ASN', def: "CIDR note une plage IP (203.0.113.0/24) ; ASN identifie un réseau autonome et son opérateur.", use: "Délimiter le périmètre réseau et identifier l'hébergeur ou le fournisseur cloud.", ex: 'whois -h whois.cymru.com 203.0.113.42' },
        { term: 'RDAP', full: 'Registration Data Access Protocol', def: "Successeur structuré de WHOIS, en JSON, interrogeable en HTTPS.", use: "Automatiser l'extraction des dates, contacts et serveurs DNS sans parser du texte libre.", ex: 'curl -s https://rdap.org/domain/acme.example | jq .' }
      ]
    }
  ],
  exos: [
    {
      id: 'm2-e1',
      title: 'Identifier le titulaire et le registrar',
      context: "Vous démarrez la reconnaissance passive du domaine de lab <code>acme.example</code>. Aucune requête ne doit encore toucher ses serveurs.",
      task: "Interrogez le registre WHOIS pour <code>acme.example</code>.",
      hint: "La commande est simplement <code>whois</code> suivie du domaine.",
      accept: [/^whois\s+acme\.example$/i],
      solution: 'whois acme.example',
      output: [
        'Domain Name: ACME.EXAMPLE',
        'Registry Domain ID: 1234567_DOMAIN_EXAMPLE',
        'Registrar: Example Registrar, Inc.',
        'Creation Date: 2021-03-14T09:12:00Z',
        'Updated Date: 2025-11-02T10:00:00Z',
        'Registry Expiry Date: 2027-03-14T09:12:00Z',
        'Registrant Organization: ACME SAS',
        'Registrant Country: FR',
        'Name Server: NS1.CLOUDPROVIDER.EXAMPLE',
        'Name Server: NS2.CLOUDPROVIDER.EXAMPLE',
        'Domain Status: clientTransferProhibited',
        '++Titulaire : ACME SAS (France) | Registrar : Example Registrar | Expire : 2027-03-14'
      ],
      read: "Le titulaire est bien l'organisation attendue, le domaine expire dans plus d'un an et les NS sont chez un fournisseur cloud. Rien d'anormal ne justifie un arrêt.",
      pivot: "Notez les NS : ils indiquent où interroger le DNS. La date de création récente aurait pu suggérer un typosquat ; ici, elle est cohérente avec l'entreprise."
    },
    {
      id: 'm2-e2',
      title: 'Lire les enregistrements A',
      context: "Vous voulez connaître l'adresse IP réelle du site avant de décider d'un scan.",
      task: "Obtenez uniquement les enregistrements A de <code>acme.example</code>.",
      hint: "Utilisez <code>dig</code> avec le type <code>A</code> et l'option <code>+short</code>.",
      accept: [/^dig\s+(\+short\s+)?a\s+acme\.example(\s+\+short)?$/i, /^dig\s+acme\.example\s+a\s+\+short$/i],
      solution: 'dig A acme.example +short',
      output: [
        '203.0.113.42',
        '203.0.113.43'
      ],
      read: "Deux adresses IPv4 répondent : l'application est probablement derrière un load balancer ou un CDN.",
      pivot: "Vérifiez si ces IP appartiennent au client ou à un hébergeur (whois IP). Si c'est un CDN, scanner ces IP peut sortir du périmètre et frapper l'infrastructure du fournisseur."
    },
    {
      id: 'm2-e3',
      title: 'Cartographier les serveurs mail',
      context: "La direction veut connaître la surface email exposée.",
      task: "Affichez les enregistrements MX de <code>acme.example</code>, triés par priorité.",
      hint: "Type <code>MX</code>, option <code>+short</code>.",
      accept: [/^dig\s+(\+short\s+)?mx\s+acme\.example(\s+\+short)?$/i, /^dig\s+acme\.example\s+mx\s+\+short$/i],
      solution: 'dig MX acme.example +short',
      output: [
        '10 mail1.acme.example.',
        '20 mail2.backupmail.example.'
      ],
      read: "Le serveur principal est interne au domaine, le secondaire est externalisé. La priorité 10 est préférée à 20.",
      pivot: "Interrogez le TXT du domaine pour vérifier SPF/DMARC. Un SPF permissif ou absent expose à l'usurpation d'email, un constat de sécurité à documenter."
    },
    {
      id: 'm2-e4',
      title: 'Détecter les politiques email',
      context: "Vous cherchez des indices de configuration anti-usurpation et de fournisseurs tiers.",
      task: "Affichez les enregistrements TXT de <code>acme.example</code>.",
      hint: "Type <code>TXT</code>, option <code>+short</code>.",
      accept: [/^dig\s+(\+short\s+)?txt\s+acme\.example(\s+\+short)?$/i, /^dig\s+acme\.example\s+txt\s+\+short$/i],
      solution: 'dig TXT acme.example +short',
      output: [
        '"v=spf1 include:_spf.google.com include:mail.acme.example ~all"',
        '"google-site-verification=abc123def456"',
        '"MS=ms12345678"',
        '"v=DMARC1; p=quarantine; rua=mailto:dmarc@acme.example"'
      ],
      read: "SPF utilise <code>~all</code> (softfail), pas <code>-all</code> (rejet strict). DMARC est en quarantaine. Les vérifications Google et Microsoft révèlent deux fournisseurs.",
      pivot: "Un SPF en softfail et DMARC en quarantaine laissent passer une partie de l'usurpation. C'est un constat de configuration, pas une faille applicative. Ne testez jamais l'envoi d'emails sans autorisation explicite."
    },
    {
      id: 'm2-e5',
      title: 'Trouver les serveurs autoritaires',
      context: "Pour tenter un transfert de zone, il faut d'abord identifier les serveurs DNS autoritaires.",
      task: "Affichez les enregistrements NS de <code>acme.example</code>.",
      hint: "Type <code>NS</code>, option <code>+short</code>.",
      accept: [/^dig\s+(\+short\s+)?ns\s+acme\.example(\s+\+short)?$/i, /^dig\s+acme\.example\s+ns\s+\+short$/i],
      solution: 'dig NS acme.example +short',
      output: [
        'ns1.cloudprovider.example.',
        'ns2.cloudprovider.example.'
      ],
      read: "Deux serveurs, tous deux chez le même fournisseur. Ce sont les cibles légitimes d'une requête AXFR.",
      pivot: "Testez AXFR sur chacun. Un refus est normal ; une réussite est un constat critique à documenter avec la liste des enregistrements exposés."
    },
    {
      id: 'm2-e6',
      title: 'Tenter un transfert de zone',
      context: "Le client autorise un test de configuration DNS. Vous devez vérifier si le transfert de zone est restreint.",
      task: "Demandez un transfert de zone (AXFR) au serveur <code>ns1.cloudprovider.example</code> pour la zone <code>acme.example</code>.",
      hint: "Syntaxe : <code>dig AXFR @serveur zone</code>.",
      accept: [/^dig\s+axfr\s+@ns1\.cloudprovider\.example\s+acme\.example$/i],
      solution: 'dig AXFR @ns1.cloudprovider.example acme.example',
      output: [
        ';; Transfer failed.',
        ';; Communications error to 203.0.113.53#53: timed out',
        '!!AXFR refusé ou filtré : la configuration est correcte sur ce point.'
      ],
      read: "Le transfert échoue. Cela ne prouve pas l'absence de problème ailleurs : testez aussi ns2 et les éventuels serveurs internes.",
      pivot: "Un AXFR réussi aurait listé tous les hôtes, y compris internes. Un refus est le comportement attendu ; notez-le comme point conforme."
    },
    {
      id: 'm2-e7',
      title: 'Résolution inverse d\'une IP',
      context: "Une IP a été trouvée dans les logs d'un service. Vous voulez savoir à quel nom elle correspond.",
      task: "Effectuez une résolution DNS inverse de <code>203.0.113.42</code>.",
      hint: "Utilisez <code>dig -x</code>.",
      accept: [/^dig\s+-x\s+203\.0\.113\.42(\s+\+short)?$/i],
      solution: 'dig -x 203.0.113.42 +short',
      output: [
        'app.acme.example.'
      ],
      read: "L'IP correspond au nom <code>app.acme.example</code>. Le DNS inverse est souvent mal configuré ou absent ; ici il est cohérent.",
      pivot: "Un nom inverse interne ou bizarre peut révéler une infrastructure oubliée. Utilisez-le pour enrichir la cartographie, jamais comme preuve unique."
    },
    {
      id: 'm2-e8',
      title: 'Énumérer les sous-domaines en passif',
      context: "Vous devez découvrir des sous-domaines sans interroger directement les serveurs de la cible.",
      task: "Lancez <code>subfinder</code> sur <code>acme.example</code>, en mode silencieux, et enregistrez le résultat dans <code>subs.txt</code>.",
      hint: "Options : <code>-d</code>, <code>-all</code>, <code>-silent</code>, <code>-o</code>.",
      accept: [/^subfinder\s+-d\s+acme\.example\s+.*-all.*-silent.*-o\s+subs\.txt/i, /^subfinder\s+-d\s+acme\.example\s+-all\s+-silent\s+-o\s+subs\.txt$/i],
      solution: 'subfinder -d acme.example -all -silent -o subs.txt',
      output: [
        '..(collecte passive en cours…)',
        '++www.acme.example',
        '++api.acme.example',
        '++admin.acme.example',
        '++staging.acme.example',
        '++vpn.acme.example',
        '++147 sous-domaines uniques écrits dans subs.txt'
      ],
      read: "La liste contient des environnements sensibles (admin, staging, vpn). Tous ne sont pas forcément vivants.",
      pivot: "Ne scannez pas la liste brute. Validez d'abord la résolution avec dnsx, puis priorisez admin/staging/vpn qui sont souvent moins durcis."
    },
    {
      id: 'm2-e9',
      title: 'Vérifier quels sous-domaines existent réellement',
      context: "147 noms ont été collectés, mais beaucoup sont morts ou des faux positifs.",
      task: "Résolvez la liste <code>subs.txt</code> et conservez les noms qui ont une réponse A dans <code>live.txt</code>.",
      hint: "Utilisez <code>dnsx -l subs.txt -a -resp -o live.txt</code>.",
      accept: [/^dnsx\s+-l\s+subs\.txt\s+-a\s+-resp\s+-o\s+live\.txt$/i, /^dnsx\s+-l\s+subs\.txt.*-resp.*live\.txt/i],
      solution: 'dnsx -l subs.txt -a -resp -o live.txt',
      output: [
        'www.acme.example [203.0.113.42]',
        'api.acme.example [203.0.113.44]',
        'admin.acme.example [203.0.113.50]',
        'staging.acme.example [203.0.113.51]',
        '++38 noms résolus sur 147'
      ],
      read: "38 noms existent réellement. admin et staging sont exposés sur des IP distinctes, donc probablement des services dédiés.",
      pivot: "Ces 38 noms constituent la surface active à tester. Documentez la différence entre « collecté » et « résolvant » pour éviter les faux constats."
    },
    {
      id: 'm2-e10',
      title: 'Empreindre les services web vivants',
      context: "Vous avez 38 noms qui résolvent. Il faut identifier lesquels exposent un service HTTP et quelle technologie.",
      task: "Sondez <code>live.txt</code> avec <code>httpx</code> en récupérant le titre, les technologies et le code de statut, et écrivez le résultat dans <code>web.txt</code>.",
      hint: "Options : <code>-l</code>, <code>-title</code>, <code>-tech-detect</code>, <code>-status-code</code>, <code>-o</code>.",
      accept: [/^httpx\s+-l\s+live\.txt\s+-title\s+-tech-detect\s+-status-code\s+-o\s+web\.txt$/i, /^httpx\s+-l\s+live\.txt.*-tech-detect.*web\.txt/i],
      solution: 'httpx -l live.txt -title -tech-detect -status-code -o web.txt',
      output: [
        'https://www.acme.example [200] [ACME — Accueil] [Nginx,React]',
        'https://api.acme.example [401] [Unauthorized] [Express,Node.js]',
        'https://admin.acme.example [200] [Admin Panel] [PHP 7.4,Apache]',
        'https://staging.acme.example [403] [Forbidden] [Nginx]',
        '++4 services web sur 38 noms'
      ],
      read: "admin renvoie 200 avec un panneau d'administration et PHP 7.4 (fin de vie). API renvoie 401 (protégée mais réelle). staging est 403 (filtrage).",
      pivot: "Priorisez admin : accès administrateur + PHP obsolète. Testez l'authentification et les versions, dans le périmètre. Un 403 n'est pas une impasse : vérifiez les contournements autorisés."
    },
    {
      id: 'm2-e11',
      title: 'Découverte d\'hôtes sur le réseau de lab',
      context: "Vous êtes sur un réseau host-only de laboratoire <code>192.168.56.0/24</code>. Vous devez lister les machines actives sans scanner les ports.",
      task: "Lancez un scan de découverte (<code>-sn</code>) sur <code>192.168.56.0/24</code>.",
      hint: "Utilisez <code>nmap -sn</code> avec le réseau en notation CIDR.",
      accept: [/^nmap\s+-sn\s+192\.168\.56\.0\/24$/i, /^nmap\s+-sn\s+192\.168\.56\.0\/24\s+-o[AnG]\s+\S+$/i],
      solution: 'nmap -sn 192.168.56.0/24',
      output: [
        'Starting Nmap 7.94 ( https://nmap.org )',
        'Nmap scan report for 192.168.56.1',
        'Host is up (0.0011s latency).',
        'Nmap scan report for dvwa.lab (192.168.56.101)',
        'Host is up (0.00084s latency).',
        'Nmap scan report for juiceshop.lab (192.168.56.102)',
        'Host is up (0.00092s latency).',
        'Nmap done: 256 IP addresses (3 hosts up) scanned in 2.41 seconds'
      ],
      read: "Trois hôtes actifs : la passerelle et deux applications de lab. Aucun port n'a encore été testé.",
      pivot: "Choisissez les cibles applicatives (192.168.56.101/102) et passez à un scan de ports ciblé. La passerelle n'est pas une cible applicative."
    },
    {
      id: 'm2-e12',
      title: 'Scanner les ports et versions d\'une cible de lab',
      context: "La cible DVWA est à <code>192.168.56.101</code>. Vous devez connaître les services et leurs versions.",
      task: "Lancez un scan TCP SYN avec détection de version sur les 1000 ports les plus courants, en temporisation T3.",
      hint: "Options : <code>-sS -sV --top-ports 1000 -T3</code>.",
      accept: [/^nmap\s+-sS\s+-sV\s+--top-ports\s+1000\s+-T3\s+192\.168\.56\.101$/i, /^nmap\s+-sS\s+-sV\s+--top-ports\s+1000\s+-T3\s+192\.168\.56\.101\s+-oA\s+\S+$/i],
      solution: 'nmap -sS -sV --top-ports 1000 -T3 192.168.56.101 -oA 02-services',
      output: [
        'Nmap scan report for dvwa.lab (192.168.56.101)',
        'Host is up (0.00091s latency).',
        'Not shown: 997 closed tcp ports (reset)',
        'PORT     STATE SERVICE VERSION',
        '22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu',
        '80/tcp   open  http    nginx 1.18.0 (PHP/7.4.33)',
        '8080/tcp open  http    Apache Tomcat 9.0.30',
        'Service detection performed.',
        'Nmap done: 1 IP address (1 host up) scanned in 8.72 seconds'
      ],
      read: "Trois services : SSH à jour, nginx avec PHP 7.4 (EOL), et Tomcat 9.0.30 sur 8080. Tomcat est une surface d'administration critique.",
      pivot: "Vérifiez le manager Tomcat (identifiants par défaut, déploiement WAR) et les routes de l'application sur 80. Enregistrez la sortie avec -oA pour le rapport."
    },
    {
      id: 'm2-e13',
      title: 'Lire les en-têtes HTTP',
      context: "Le service web sur <code>192.168.56.101:80</code> est accessible. Vous voulez identifier la stack sans récupérer toute la page.",
      task: "Affichez uniquement les en-têtes de réponse HTTP avec curl.",
      hint: "Utilisez <code>curl -sSI</code>.",
      accept: [/^curl\s+-sSI\s+http:\/\/192\.168\.56\.101\/?$/i, /^curl\s+-sSI\s+http:\/\/192\.168\.56\.101:80\/?$/i],
      solution: 'curl -sSI http://192.168.56.101/',
      output: [
        'HTTP/1.1 200 OK',
        'Server: nginx/1.18.0',
        'Date: Sat, 24 Oct 2026 12:40:11 GMT',
        'Content-Type: text/html; charset=UTF-8',
        'X-Powered-By: PHP/7.4.33',
        'Set-Cookie: PHPSESSID=abc123; path=/',
        '++Stack : nginx 1.18 + PHP 7.4.33 | Cookie sans HttpOnly/Secure'
      ],
      read: "PHP 7.4 est en fin de vie. Le cookie de session n'a ni HttpOnly ni Secure : un XSS pourrait voler la session, et le cookie peut fuiter en HTTP.",
      pivot: "Consignez la version PHP et les flags de cookie. Testez ensuite les routes applicatives et vérifiez si HTTPS existe sur 443."
    },
    {
      id: 'm2-e14',
      title: 'Empreinte technologique complète',
      context: "Vous devez confirmer le CMS ou le framework derrière l'application de lab.",
      task: "Lancez <code>whatweb</code> en agressivité 3 sur <code>http://192.168.56.101</code>.",
      hint: "Syntaxe : <code>whatweb -a 3 URL</code>.",
      accept: [/^whatweb\s+-a\s*3\s+http:\/\/192\.168\.56\.101\/?$/i],
      solution: 'whatweb -a 3 http://192.168.56.101',
      output: [
        'http://192.168.56.101 [200 OK] Country[RESERVED][ZZ], HTTPServer[nginx/1.18.0], IP[192.168.56.101], PHP[7.4.33], Title[Damn Vulnerable Web Application], X-Powered-By[PHP/7.4.33], nginx[1.18.0]'
      ],
      read: "WhatWeb confirme nginx, PHP 7.4.33 et le titre DVWA. C'est bien l'application volontairement vulnérable attendue.",
      pivot: "Le titre et la version suffisent à confirmer la cible de lab. En production, une version obsolète serait un constat à prioriser."
    },
    {
      id: 'm2-e15',
      title: 'Extraire des endpoints du JavaScript',
      context: "L'application est une SPA. Vous cherchez des routes API non visibles dans l'interface.",
      task: "Téléchargez <code>main.js</code> et extrayez les chaînes commençant par <code>/api/</code>, triées et uniques.",
      hint: "Enchaînez <code>curl -s</code>, <code>grep -oE</code> et <code>sort -u</code>.",
      accept: [/^curl\s+-s\s+.*main\.js.*grep\s+-oE?.*\/api\/.*sort\s+-u/i],
      solution: "curl -s https://app.acme.example/static/js/main.js | grep -oE '\"/api/[a-zA-Z0-9/_-]+\"' | sort -u",
      output: [
        '"/api/admin/users"',
        '"/api/invoices"',
        '"/api/internal/health"',
        '"/api/profile"',
        '++4 endpoints découverts dans le bundle JavaScript'
      ],
      read: "Deux routes sont absentes de l'UI : <code>/api/admin/users</code> et <code>/api/internal/health</code>. Elles existent probablement côté serveur.",
      pivot: "Testez-les avec et sans session, en comparant les codes 200/401/403. Une route admin accessible sans rôle élevé est un défaut de contrôle d'accès."
    }
  ]
};
