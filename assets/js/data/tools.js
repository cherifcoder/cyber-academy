export const TOOL_CATEGORIES = [
  'Tous',
  'Reconnaissance',
  'Scan & Énumération',
  'Web',
  'Exploitation (lab)',
  'Post-exploitation (lab)',
  'Défense'
];

export const TOOLS = [
  {
    id: 'whois', name: 'whois', cat: 'Reconnaissance', icon: '📇',
    desc: "Interroge les registres de noms de domaine et d'adresses IP : titulaire, registrar, dates, serveurs DNS.",
    install: 'apt install whois',
    commands: [
      { cmd: 'whois acme.example', desc: 'Fiche complète du domaine' },
      { cmd: 'whois 203.0.113.10', desc: 'Bloc IP, réseau et contact abuse' },
      { cmd: 'whois -h whois.arin.net 203.0.113.0', desc: 'Interroger un registre précis (ARIN, RIPE)' }
    ],
    tips: ['Les données peuvent être masquées par le RGPD : croisez avec RDAP.', "Le contact « abuse » sert en cas d'incident."]
  },
  {
    id: 'dig', name: 'dig / nslookup', cat: 'Reconnaissance', icon: '🌐',
    desc: "Résolution DNS avancée : enregistrements A, AAAA, MX, TXT, NS, SOA et transferts de zone.",
    install: 'apt install dnsutils',
    commands: [
      { cmd: 'dig acme.example +short', desc: 'Résolution simple' },
      { cmd: 'dig ANY acme.example +noall +answer', desc: 'Tous les enregistrements disponibles' },
      { cmd: 'dig MX acme.example +short', desc: 'Serveurs de messagerie' },
      { cmd: 'dig TXT acme.example +short', desc: 'SPF, DKIM, vérifications de propriété' },
      { cmd: 'dig AXFR @ns1.acme.example acme.example', desc: 'Tentative de transfert de zone' }
    ],
    tips: ['AXFR réussi = cartographie complète du domaine.', 'Un TXT peut révéler un service tiers ou une clé oubliée.']
  },
  {
    id: 'amass', name: 'Amass', cat: 'Reconnaissance', icon: '🕸️',
    desc: "Cartographie de la surface d'attaque (ASM) : sous-domaines, ASN, blocs réseau, relations DNS.",
    install: 'go install github.com/owasp-amass/amass/v4/...@master',
    commands: [
      { cmd: 'amass enum -passive -d acme.example -o amass.txt', desc: 'Énumération passive' },
      { cmd: 'amass enum -active -d acme.example -brute -w subs.txt', desc: 'Énumération active + brute force' },
      { cmd: 'amass intel -org "ACME SAS"', desc: 'Recherche par organisation' }
    ],
    tips: ['Plus lent mais plus exhaustif que Subfinder.', 'Configurez vos clés API (Shodan, Censys, SecurityTrails) pour de meilleurs résultats.']
  },
  {
    id: 'subfinder', name: 'Subfinder', cat: 'Reconnaissance', icon: '🔎',
    desc: "Énumération rapide de sous-domaines à partir de sources passives (CT, moteurs, DNS datasets).",
    install: 'go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest',
    commands: [
      { cmd: 'subfinder -d acme.example -all -silent -o subs.txt', desc: 'Toutes les sources, sortie silencieuse' },
      { cmd: 'subfinder -dL domains.txt -o all-subs.txt', desc: 'Plusieurs domaines' },
      { cmd: 'subfinder -d acme.example -silent | dnsx -a -resp', desc: 'Filtrer ceux qui résolvent' }
    ],
    tips: ['Passif : aucun paquet vers la cible.', 'Chaînez avec httpx pour obtenir titres et technologies.']
  },
  {
    id: 'theharvester', name: 'theHarvester', cat: 'Reconnaissance', icon: '📧',
    desc: "Collecte emails, hôtes et noms depuis les moteurs et sources publiques : surface humaine et technique.",
    install: 'apt install theharvester',
    commands: [
      { cmd: 'theHarvester -d acme.example -b duckduckgo,bing,crtsh -l 500', desc: 'Sources web et CT' },
      { cmd: 'theHarvester -d acme.example -b all -f report', desc: 'Toutes les sources, export HTML/XML' }
    ],
    tips: ['Respectez le RGPD : ne stockez pas d\'emails inutilement.', 'Les résultats alimentent la simulation de phishing — uniquement si autorisée.']
  },
  {
    id: 'nmap', name: 'Nmap', cat: 'Scan & Énumération', icon: '🛰️',
    desc: "Référence du scan réseau : découverte d'hôtes, ports, services, OS et scripts NSE.",
    install: 'apt install nmap',
    commands: [
      { cmd: 'nmap -sn 10.10.10.0/24', desc: 'Découverte d\'hôtes' },
      { cmd: 'nmap -sS -sV --top-ports 1000 -T3 target', desc: 'Scan SYN + versions' },
      { cmd: 'nmap -p- --min-rate 500 -T4 target', desc: 'Tous les ports TCP' },
      { cmd: 'nmap -sU -p 53,123,161 target', desc: 'Ports UDP essentiels' },
      { cmd: 'nmap -p 80,443 --script http-title,http-headers target', desc: 'Enrichissement HTTP' },
      { cmd: 'nmap -sV -oA scan target', desc: 'Sortie normalisée .nmap/.xml/.gnmap' }
    ],
    tips: ['-T4 est bruyant : validez le débit avec le client.', 'Un port filtered n\'est pas fermé : adaptez la technique.']
  },
  {
    id: 'whatweb', name: 'WhatWeb', cat: 'Scan & Énumération', icon: '🔖',
    desc: "Empreinte des technologies web : serveur, CMS, frameworks, bibliothèques JS, headers.",
    install: 'apt install whatweb',
    commands: [
      { cmd: 'whatweb -a 3 https://app.acme.example', desc: 'Analyse agressive' },
      { cmd: 'whatweb --log-brief=out.txt https://app.acme.example', desc: 'Sortie synthétique' }
    ],
    tips: ['Croisez avec Wappalyzer pour réduire les faux positifs.', 'Les versions détectées orientent la recherche de CVE.']
  },
  {
    id: 'gobuster', name: 'Gobuster', cat: 'Scan & Énumération', icon: '📂',
    desc: "Énumération de répertoires, de sous-domaines et de virtual hosts à partir de wordlists.",
    install: 'go install github.com/OJ/gobuster/v3@latest',
    commands: [
      { cmd: 'gobuster dir -u https://app.lab -w raft-medium-directories.txt -x php,html,bak', desc: 'Répertoires et extensions' },
      { cmd: 'gobuster dns -d acme.example -w subs.txt -t 50', desc: 'Sous-domaines' },
      { cmd: 'gobuster vhost -u https://acme.example -w vhosts.txt --append-domain', desc: 'Virtual hosts' }
    ],
    tips: ['Calibrez le soft 404 avant de lancer un gros scan.', 'Ajoutez -k pour les certificats auto-signés en lab.']
  },
  {
    id: 'ffuf', name: 'FFUF', cat: 'Scan & Énumération', icon: '⚡',
    desc: "Fuzzer web très rapide : répertoires, paramètres, valeurs, vhosts. Filtres puissants.",
    install: 'go install github.com/ffuf/ffuf/v2@latest',
    commands: [
      { cmd: 'ffuf -u https://app.lab/FUZZ -w dirs.txt -fc 404', desc: 'Fuzzing d\'URL' },
      { cmd: 'ffuf -u "https://app.lab/api?FUZZ=1" -w params.txt -fs 0', desc: 'Découverte de paramètres' },
      { cmd: 'ffuf -u https://app.lab -H "Host: FUZZ.lab" -w vhosts.txt -fs 4242', desc: 'Virtual hosts' },
      { cmd: 'ffuf -u https://app.lab/login -X POST -d "user=alice&pass=FUZZ" -w pass.txt -fc 401', desc: 'Fuzzing de formulaire' }
    ],
    tips: ['-fs filtre par taille, -fw par mots, -fr par regex.', 'Toujours calibrer avec une requête bidon.']
  },
  {
    id: 'dirsearch', name: 'Dirsearch', cat: 'Scan & Énumération', icon: '🗂️',
    desc: "Scanner de chemins web avec extensions, exclusions et sorties de rapport.",
    install: 'pip install dirsearch',
    commands: [
      { cmd: 'dirsearch -u https://app.lab -e php,aspx,js,json,bak -x 404,400', desc: 'Scan standard' },
      { cmd: 'dirsearch -u https://app.lab -w custom.txt -t 30 --random-agent', desc: 'Wordlist et discrétion' }
    ],
    tips: ['Les 403 sont des pistes, pas des échecs.', 'Combinez avec ffuf pour les cas difficiles.']
  },
  {
    id: 'burp', name: 'Burp Suite', cat: 'Web', icon: '🕵️',
    desc: "Proxy d'interception, Repeater, Intruder, Decoder, Comparer, Sequencer, extensions.",
    install: 'portswigger.net/burp (Community / Pro)',
    commands: [
      { cmd: 'Proxy → 127.0.0.1:8080 + FoxyProxy', desc: 'Intercepter le navigateur' },
      { cmd: 'http://burpsuite → certificat CA', desc: 'Débloquer HTTPS' },
      { cmd: 'Ctrl+R sur une requête', desc: 'Envoyer vers Repeater' },
      { cmd: 'Ctrl+I sur une requête', desc: 'Envoyer vers Intruder' },
      { cmd: 'Target → Scope → Add', desc: 'Limiter le périmètre' }
    ],
    tips: ['Un projet par mission, un scope propre.', 'Turbo Intruder pour les race conditions.']
  },
  {
    id: 'zap', name: 'OWASP ZAP', cat: 'Web', icon: '⚡',
    desc: "Proxy et scanner open source, automatisable en CI via API/CLI.",
    install: 'apt install zaproxy',
    commands: [
      { cmd: 'zap.sh -daemon -port 8090 -config api.key=SECRET', desc: 'Mode daemon' },
      { cmd: 'zap-cli quick-scan -s xss,sqli -r report.html https://app.lab', desc: 'Scan rapide' },
      { cmd: 'zap-cli spider https://app.lab', desc: 'Crawl de l\'application' }
    ],
    tips: ['Validez toujours les alertes manuellement.', 'ZAP est idéal pour un premier passage gratuit.']
  },
  {
    id: 'curl', name: 'curl', cat: 'Web', icon: '🌀',
    desc: "Client HTTP en ligne de commande : indispensable pour reproduire et automatiser les requêtes.",
    install: 'apt install curl',
    commands: [
      { cmd: 'curl -sSI https://app.lab', desc: 'En-têtes de réponse' },
      { cmd: 'curl -sS -X POST https://app.lab/api -H "Content-Type: application/json" -d \'{"a":1}\'', desc: 'POST JSON' },
      { cmd: 'curl -sS -b "session=..." https://app.lab/admin', desc: 'Requête authentifiée' },
      { cmd: 'curl -sSIL https://app.lab | grep -i location', desc: 'Suivre les redirections' }
    ],
    tips: ['-i inclut les en-têtes, -v montre le détail TLS.', 'Parfait pour les PoC reproductibles dans un rapport.']
  },
  {
    id: 'sqlmap', name: 'sqlmap', cat: 'Exploitation (lab)', icon: '💉',
    desc: "Automatise la détection et l'exploitation des injections SQL, en lab autorisé.",
    install: 'pip install sqlmap',
    commands: [
      { cmd: 'sqlmap -u "http://lab/item?id=1" --batch --dbs', desc: 'Détection + bases' },
      { cmd: 'sqlmap -u "http://lab/item?id=1" --cookie="session=..." --level=3 --risk=2', desc: 'Contexte authentifié' },
      { cmd: 'sqlmap -r request.txt --batch --tables -D app', desc: 'Depuis une requête Burp' },
      { cmd: 'sqlmap -u "http://lab/item?id=1" --dump -T users --where="id=1"', desc: 'Extraction minimale' }
    ],
    tips: ['En lab uniquement, et jamais avec --dump-all sur des données réelles.', 'Préférez -r avec une requête Burp pour conserver les en-têtes.']
  },
  {
    id: 'nikto', name: 'Nikto', cat: 'Exploitation (lab)', icon: '🔍',
    desc: "Scanner de serveurs web : fichiers dangereux, versions obsolètes, mauvaises configurations.",
    install: 'apt install nikto',
    commands: [
      { cmd: 'nikto -h https://app.lab', desc: 'Scan standard' },
      { cmd: 'nikto -h app.lab -p 8080 -ssl -o nikto.html -Format html', desc: 'Port et rapport' }
    ],
    tips: ['Très bruyant : à réserver au lab ou à une fenêtre autorisée.', 'Les résultats sont des indices, pas des preuves.']
  },
  {
    id: 'hydra', name: 'Hydra', cat: 'Exploitation (lab)', icon: '🔑',
    desc: "Attaque par force brute sur de nombreux protocoles (SSH, FTP, HTTP, RDP) — lab uniquement.",
    install: 'apt install hydra',
    commands: [
      { cmd: 'hydra -l admin -P pass.txt ssh://10.10.10.5', desc: 'Brute force SSH' },
      { cmd: 'hydra -L users.txt -p Spring2026 http://lab/ login_form', desc: 'Formulaire HTTP' }
    ],
    tips: ['Le verrouillage de compte est un effet de bord réel.', 'En mission, utilisez uniquement des comptes de test fournis.']
  },
  {
    id: 'hashcat', name: 'Hashcat / John', cat: 'Post-exploitation (lab)', icon: '#️⃣',
    desc: "Cassage de hachages hors ligne : dictionnaire, règles, masques, attaques combinées.",
    install: 'apt install hashcat john',
    commands: [
      { cmd: 'hashcat -m 1000 hashes.txt rockyou.txt', desc: 'NTLM par dictionnaire' },
      { cmd: 'hashcat -m 1800 shadow.txt rockyou.txt -r rules/best64.rule', desc: 'SHA-512 crypt + règles' },
      { cmd: 'john --wordlist=rockyou.txt --format=raw-sha256 hashes.txt', desc: 'John the Ripper' }
    ],
    tips: ['Le type de hash conditionne -m : vérifiez avec hashid.', 'Les GPU changent tout sur les gros corpus.']
  },
  {
    id: 'metasploit', name: 'Metasploit', cat: 'Exploitation (lab)', icon: '💣',
    desc: "Framework d'exploitation avec modules, payloads, handlers et post-exploitation.",
    install: 'curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod +x msfinstall && ./msfinstall',
    commands: [
      { cmd: 'msfconsole -q', desc: 'Lancer la console' },
      { cmd: 'search type:exploit platform:linux smb', desc: 'Rechercher un module' },
      { cmd: 'use exploit/... ; set RHOSTS 10.10.10.5 ; run', desc: 'Configurer et lancer' },
      { cmd: 'sessions -i 1', desc: 'Interagir avec une session' }
    ],
    tips: ['Un module qui réussit ne prouve pas l\'impact métier : documentez.', 'Nettoyez sessions et artefacts en fin de lab.']
  },
  {
    id: 'nuclei', name: 'Nuclei', cat: 'Scan & Énumération', icon: '🧬',
    desc: "Scanner à templates YAML : CVE, expositions, mauvaises configurations, takeovers.",
    install: 'go install github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest',
    commands: [
      { cmd: 'nuclei -u https://app.lab -severity critical,high', desc: 'Templates critiques' },
      { cmd: 'nuclei -l urls.txt -t cves/ -o out.txt', desc: 'Scan par catégorie' },
      { cmd: 'nuclei -u https://app.lab -tags exposure,misconfig', desc: 'Expositions et misconfigs' }
    ],
    tips: ['Mettez à jour les templates : nuclei -update-templates.', 'Filtrez par sévérité pour éviter le bruit.']
  },
  {
    id: 'wpscan', name: 'WPScan', cat: 'Scan & Énumération', icon: '📝',
    desc: "Scanner spécialisé WordPress : version, plugins, thèmes, utilisateurs, vulnérabilités.",
    install: 'gem install wpscan',
    commands: [
      { cmd: 'wpscan --url https://wp.lab --enumerate vp,vt,u', desc: 'Plugins/thèmes vulnérables + users' },
      { cmd: 'wpscan --url https://wp.lab --api-token TOKEN --enumerate ap', desc: 'Tous les plugins avec la base WPScan' }
    ],
    tips: ['L\'énumération d\'utilisateurs facilite le brute force : à signaler.', 'Vérifiez xmlrpc.php et les backups.']
  },
  {
    id: 'wireshark', name: 'Wireshark / tcpdump', cat: 'Défense', icon: '🦈',
    desc: "Analyse de trafic : comprendre une attaque, vérifier le chiffrement, enquêter après incident.",
    install: 'apt install wireshark tcpdump',
    commands: [
      { cmd: 'tcpdump -i eth0 -nn -s0 -w capture.pcap', desc: 'Capturer tout le trafic' },
      { cmd: 'tcpdump -i eth0 -nn port 80 or port 443', desc: 'Filtrer HTTP/HTTPS' },
      { cmd: 'tshark -r capture.pcap -Y "http.request"', desc: 'Extraire les requêtes HTTP' }
    ],
    tips: ['Sans la clé TLS, HTTPS reste chiffré.', 'Filtrez tôt : une capture complète devient vite illisible.']
  },
  {
    id: 'modsecurity', name: 'ModSecurity + CRS', cat: 'Défense', icon: '🧱',
    desc: "WAF open source pour Nginx/Apache, avec l'OWASP Core Rule Set.",
    install: 'apt install libmodsecurity3 modsecurity-crs',
    commands: [
      { cmd: 'SecRuleEngine On', desc: 'Activer le moteur' },
      { cmd: 'SecRule ARGS "@rx (?i)union\\s+select" "id:1001,phase:2,deny,status:403"', desc: 'Règle ciblée temporaire' },
      { cmd: 'SecRuleEngine DetectionOnly', desc: 'Mode observation avant blocage' }
    ],
    tips: ['Déployez en DetectionOnly puis analysez les faux positifs.', 'Une règle WAF est une mitigation, pas un correctif.']
  },
  {
    id: 'semgrep', name: 'Semgrep / SAST', cat: 'Défense', icon: '🧠',
    desc: "Analyse statique du code pour détecter les motifs dangereux avant la production.",
    install: 'pip install semgrep',
    commands: [
      { cmd: 'semgrep --config=p/owasp-top-ten .', desc: 'Règles OWASP' },
      { cmd: 'semgrep --config=auto --sarif -o semgrep.sarif .', desc: 'Sortie intégrable en CI' }
    ],
    tips: ['Le SAST complète le DAST mais génère des faux positifs.', 'Ajoutez des règles maison pour vos patterns internes.']
  }
];

export const CHEATSHEET = [
  {
    cat: 'Reconnaissance',
    items: [
      { cmd: 'whois domaine', desc: 'Titulaire, registrar, dates' },
      { cmd: 'dig +short A domaine', desc: 'Adresse IPv4' },
      { cmd: 'dig AXFR @ns domaine', desc: 'Transfert de zone' },
      { cmd: 'subfinder -d domaine -all', desc: 'Sous-domaines passifs' },
      { cmd: 'amass enum -passive -d domaine', desc: 'Cartographie ASM' },
      { cmd: 'curl -s "https://crt.sh/?q=%25.domaine&output=json" | jq -r ".[].name_value" | sort -u', desc: 'Sous-domaines via CT' },
      { cmd: 'theHarvester -d domaine -b all', desc: 'Emails et hôtes' }
    ]
  },
  {
    cat: 'Scan & Énumération',
    items: [
      { cmd: 'nmap -sn 10.10.10.0/24', desc: 'Découverte d\'hôtes' },
      { cmd: 'nmap -sS -sV -p- -T4 cible', desc: 'Ports + versions' },
      { cmd: 'nmap --script vuln cible', desc: 'Scripts de vulnérabilités' },
      { cmd: 'whatweb -a 3 URL', desc: 'Technologies web' },
      { cmd: 'gobuster dir -u URL -w liste -x php,html', desc: 'Répertoires' },
      { cmd: 'ffuf -u URL/FUZZ -w liste -fc 404', desc: 'Fuzzing rapide' },
      { cmd: 'nuclei -u URL -severity critical,high', desc: 'Templates CVE' }
    ]
  },
  {
    cat: 'Web / Burp',
    items: [
      { cmd: 'Ctrl+R / Ctrl+I', desc: 'Repeater / Intruder' },
      { cmd: 'Proxy → 127.0.0.1:8080', desc: 'Écoute du proxy' },
      { cmd: 'curl -sSI URL', desc: 'En-têtes de réponse' },
      { cmd: 'curl -X POST URL -d "a=1" -b "s=..."', desc: 'POST authentifié' },
      { cmd: 'sqlmap -r req.txt --batch --dbs', desc: 'SQLi depuis une requête' },
      { cmd: 'jwt_tool TOKEN -T', desc: 'Décoder un JWT' }
    ]
  },
  {
    cat: 'Post-exploitation (lab)',
    items: [
      { cmd: 'id; sudo -l', desc: 'Contexte et droits sudo' },
      { cmd: 'find / -perm -4000 -type f 2>/dev/null', desc: 'Binaires SUID' },
      { cmd: 'getcap -r / 2>/dev/null', desc: 'Capabilities' },
      { cmd: 'cat /etc/crontab; ls /etc/cron.*', desc: 'Tâches planifiées' },
      { cmd: 'whoami /priv', desc: 'Privilèges Windows' },
      { cmd: 'wmic service get name,pathname,startmode', desc: 'Services Windows' },
      { cmd: 'linpeas.sh / winPEAS.exe', desc: 'Énumération automatisée (lab)' }
    ]
  },
  {
    cat: 'Défense',
    items: [
      { cmd: "default-src 'self'; object-src 'none'", desc: 'Base CSP' },
      { cmd: 'max-age=63072000; includeSubDomains', desc: 'HSTS' },
      { cmd: 'HttpOnly; Secure; SameSite=Lax', desc: 'Cookie de session' },
      { cmd: 'SecRuleEngine DetectionOnly', desc: 'WAF en observation' },
      { cmd: 'semgrep --config=p/owasp-top-ten .', desc: 'SAST OWASP' },
      { cmd: 'npm audit --production', desc: 'Dépendances vulnérables' }
    ]
  }
];

export const HARDENING_CHECKLIST = [
  {
    cat: 'Transport & en-têtes',
    items: [
      'TLS 1.2 minimum, TLS 1.3 privilégié, suites fortes, certificats valides et renouvelés.',
      'Redirection HTTP → HTTPS et HSTS avec includeSubDomains (preload après vérification).',
      'CSP stricte avec nonces/hashes, sans unsafe-inline ni unsafe-eval.',
      'X-Content-Type-Options: nosniff, Referrer-Policy, Permissions-Policy.',
      'frame-ancestors / X-Frame-Options configurés.',
      'Aucun header révélant serveur, framework ou version.'
    ]
  },
  {
    cat: 'Authentification & sessions',
    items: [
      'MFA sur les comptes admin et, si possible, sur tous les utilisateurs.',
      'Politique de mot de passe moderne (12+ caractères, vérification des fuites).',
      'Hachage Argon2id ou bcrypt avec coût adapté.',
      'Cookies HttpOnly, Secure, SameSite, préfixe __Host-.',
      'Rotation de l\'ID de session à la connexion et révocation à la déconnexion.',
      'Limitation des tentatives, verrouillage progressif, alertes.',
      'Réinitialisation par jeton à usage unique et expirant.'
    ]
  },
  {
    cat: 'Applicatif',
    items: [
      'Validation allowlist de toutes les entrées (type, taille, format, plage).',
      'Requêtes préparées pour toute requête SQL/NoSQL.',
      'Encodage de sortie contextuel ; sanitisation HTML avec DOMPurify si nécessaire.',
      'Contrôle d\'accès serveur par objet et par action (deny by default).',
      'Jetons anti-CSRF sur les actions sensibles.',
      'Upload : vérification du contenu réel, renommage, stockage hors webroot.',
      'Gestion des erreurs sans fuite d\'information ; debug désactivé en production.'
    ]
  },
  {
    cat: 'Système & dépendances',
    items: [
      'Moindre privilège pour l\'application, la base et le système de fichiers.',
      'Secrets dans un coffre (Vault, Secrets Manager), jamais dans Git.',
      'Dépendances à jour, SCA en CI, images de conteneurs minimales et non-root.',
      'Sauvegardes chiffrées et restauration testée.',
      'Environnements dev/staging isolés et non indexés.',
      'Journalisation centralisée, alertes sur événements critiques.',
      'Plan de réponse à incident et procédure de divulgation responsable.'
    ]
  },
  {
    cat: 'Monitoring & détection',
    items: [
      'Journaux d\'authentification, d\'accès et d\'erreurs conservés et horodatés.',
      'Alertes sur pics de 401/403/500, requêtes anormales, user-agents suspects.',
      'WAF en mode blocage après période d\'observation, règles documentées.',
      'Détection des modifications de fichiers sensibles (FIM).',
      'Revue régulière des comptes et des privilèges.',
      'Exercices de restauration et tests d\'intrusion périodiques.'
    ]
  }
];
