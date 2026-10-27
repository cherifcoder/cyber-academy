export default {
  blocks: [
    {
      t: 'glossary',
      title: "Annexe A — Glossaire des identifiants réseau",
      intro: "Les termes à connaître avant de tracer ou de masquer un identifiant. Les définitions restent volontairement courtes : le contexte et la portée comptent plus que la formule.",
      items: [
        { term: "IPv4", full: "Internet Protocol version 4", def: "Adresse de 32 bits notée en quatre octets décimaux. Elle identifie une interface et sert au routage entre réseaux.", use: "Lire la partie réseau avec le masque ou le CIDR avant toute conclusion.", ex: "192.168.56.42/24" },
        { term: "CIDR", full: "Classless Inter-Domain Routing", def: "Notation du nombre de bits de réseau. /24 = 256 adresses, /27 = 32 adresses.", use: "Calculer réseau, broadcast et hôtes utiles : 2^(32-préfixe) − 2.", ex: "192.168.56.0/27" },
        { term: "NAT", full: "Network Address Translation", def: "Réécriture d'adresses et de ports entre deux réseaux. Plusieurs postes partagent souvent une IP publique.", use: "Sans la table de translation, une IP publique ne désigne pas un poste précis.", ex: "192.168.56.42:49812 → 203.0.113.77:51422" },
        { term: "CGNAT", full: "Carrier-Grade NAT", def: "NAT opérateur massif : des milliers d'abonnés partagent une IP publique et une plage de ports.", use: "Une IP CGNAT (100.64.0.0/10) n'est jamais une adresse publique directement traçable.", ex: "100.64.12.7" },
        { term: "ASN", full: "Autonomous System Number", def: "Identifiant d'un réseau autonome annoncé sur Internet, généralement un FAI ou une grande organisation.", use: "whois/RDAP et les looking-glasses BGP associent une IP à un ASN et à un opérateur.", ex: "AS64500" },
        { term: "RDAP", full: "Registration Data Access Protocol", def: "Successeur structuré de whois, en JSON, pour interroger les registres Internet.", use: "Automatiser la collecte du titulaire, de l'ASN et des plages associées.", ex: "https://rdap.org/ip/203.0.113.42" },
        { term: "OUI", full: "Organizationally Unique Identifier", def: "24 premiers bits d'une MAC, attribués à un fabricant ou à une organisation.", use: "Identifier un fabricant, jamais une personne ; une MAC locale n'a pas d'OUI fabricant.", ex: "08:00:27" },
        { term: "ARP", full: "Address Resolution Protocol", def: "Protocole local qui associe une IP à une MAC sur un même segment.", use: "Lire la table ARP/neigh pour relier une IP à une MAC, avec une durée de vie limitée.", ex: "ip neigh" },
        { term: "IMEI", full: "International Mobile Equipment Identity", def: "Identifiant de 15 chiffres d'un terminal mobile : TAC (8), série (6), contrôle Luhn (1).", use: "Vérifier le format et le TAC ; ne jamais publier l'IMEI d'un appareil réel.", ex: "356938035643809" },
        { term: "IMSI", full: "International Mobile Subscriber Identity", def: "Identité de l'abonné portée par la SIM/eSIM, visible du réseau mobile.", use: "Distinguer l'appareil (IMEI) de l'abonnement (IMSI).", ex: "208 01 123456789" },
        { term: "TAC", full: "Type Allocation Code", def: "8 premiers chiffres de l'IMEI, associés à un modèle de terminal.", use: "Identifier une famille d'appareils, pas un utilisateur.", ex: "35693803" },
        { term: "Luhn", full: "Algorithme de contrôle modulo 10", def: "Somme de contrôle utilisée par les cartes bancaires, certains numéros et l'IMEI.", use: "Détecter une faute de saisie ou un numéro manifestement invalide, pas une fraude.", ex: "356938035643809" },
        { term: "EIR", full: "Equipment Identity Register", def: "Registre de l'opérateur qui gère les listes blanches, grises et noires d'IMEI.", use: "Comprendre le blocage d'un terminal volé ; accès réservé à l'opérateur.", ex: "liste noire opérateur" },
        { term: "CDR", full: "Call Detail Record", def: "Enregistrement de session mobile : numéro, IMEI/IMSI, cellule, date, durée, volume.", use: "Support d'enquête légale, jamais accessible par un simple site web.", ex: "CDR opérateur" }
      ]
    },
    {
      t: 'cmdref',
      title: "Annexe B — Commandes de référence : IP, MAC, IMEI",
      intro: "Toutes les commandes s'exécutent sur votre poste ou une cible de laboratoire autorisée. Les adresses de documentation ne pointent vers aucun service réel.",
      items: [
        {
          cmd: "ipcalc",
          tag: "IP",
          what: "Calcule réseau, broadcast, plage d'hôtes et masque à partir d'une adresse CIDR.",
          gives: "Adresse réseau, HostMin, HostMax, broadcast, nombre d'hôtes.",
          use: "Qualifier un sous-réseau avant un scan ou pour comprendre un plan d'adressage.",
          syntax: "ipcalc <adresse>/<préfixe>",
          example: "ipcalc 192.168.56.42/27",
          read: "Le réseau et le broadcast ne sont pas attribuables. Un /27 offre 30 hôtes utiles, pas 32."
        },
        {
          cmd: "ip address / ip route",
          tag: "IP",
          what: "Affiche les interfaces, adresses, état et table de routage.",
          gives: "IP locale, masque, interface, passerelle par défaut, routes connectées.",
          use: "Identifier la couche réseau de son poste et la sortie vers Internet.",
          syntax: "ip -br address ; ip route show",
          example: "ip -br address && ip route",
          read: "Une adresse 192.168.x.x/10.x.x.x est privée : elle n'est pas visible telle quelle sur Internet."
        },
        {
          cmd: "whois / RDAP",
          tag: "IP",
          what: "Interroge le registre compétent sur le titulaire d'un bloc IP.",
          gives: "Titulaire, pays, ASN, contacts, plage annoncée.",
          use: "Remonter à l'opérateur ou à l'organisation, pas à l'abonné final.",
          syntax: "whois <ip> | head -40 ; curl -s https://rdap.org/ip/<ip>",
          example: "whois 203.0.113.42 | head -40",
          read: "TEST-NET-3 est réservé à la documentation : aucune conclusion sur un abonné réel."
        },
        {
          cmd: "dig -x",
          tag: "DNS",
          what: "Effectue une résolution DNS inverse (PTR) d'une IP.",
          gives: "Nom d'hôte éventuel, souvent un hostname de FAI ou d'infrastructure.",
          use: "Compléter le whois ; l'absence de PTR est normale et n'est pas une preuve.",
          syntax: "dig -x <ip> +short",
          example: "dig -x 203.0.113.42 +short",
          read: "Un PTR peut être générique ou mal configuré. Il ne prouve jamais l'identité de l'utilisateur."
        },
        {
          cmd: "traceroute / mtr",
          tag: "Réseau",
          what: "Montre les routeurs traversés jusqu'à une cible.",
          gives: "Chemin, latences, sauts qui répondent ou filtrent.",
          use: "Comprendre un chemin réseau sur une cible autorisée, diagnostiquer une coupure.",
          syntax: "traceroute -n <cible>",
          example: "traceroute -n 203.0.113.42",
          read: "Les routeurs intermédiaires ne sont pas des cibles de test. Un saut silencieux signifie souvent un filtrage ICMP."
        },
        {
          cmd: "ip neigh / arp -a",
          tag: "MAC",
          what: "Affiche le cache ARP : couples IP ↔ MAC récemment résolus sur le segment.",
          gives: "IP, MAC, interface, état (REACHABLE, STALE, FAILED).",
          use: "Relier une IP locale à une MAC, puis la MAC à un port de switch ou un bail DHCP.",
          syntax: "ip neigh ; arp -a",
          example: "ip neigh",
          read: "La MAC ne sort pas du LAN. Une entrée STALE peut être ancienne ; vérifiez la fraîcheur."
        },
        {
          cmd: "ip link / macchanger",
          tag: "MAC",
          what: "Consulte ou modifie l'adresse MAC d'une interface que vous possédez.",
          gives: "MAC actuelle, MAC permanente, nouvelle MAC éventuelle.",
          use: "Tester la randomisation ou changer la MAC de son propre poste en laboratoire.",
          syntax: "ip link show <if> ; sudo macchanger -r <if>",
          example: "sudo macchanger -r eth0",
          read: "Une MAC commençant par 02, 06, 0A ou 0E est localement administrée : aucun fabricant réel."
        },
        {
          cmd: "*#06#",
          tag: "IMEI",
          what: "Affiche l'IMEI et éventuellement l'IMEISV d'un téléphone.",
          gives: "IMEI de 15 chiffres, IMEISV de 16/17 chiffres.",
          use: "Noter l'identifiant de son propre appareil pour une déclaration de vol ou une garantie.",
          syntax: "*#06# (clavier téléphonique)",
          example: "*#06#",
          read: "Ne publiez jamais l'IMEI : il peut être cloné. Un IMEI valide ne prouve pas la propriété."
        }
      ]
    },
    { t: 'h', x: "13.10 Exercices pas à pas" },
    {
      t: 'p',
      x: "Les exercices ci-dessous sont générés à la fin du module. Chaque commande est simulée localement : <code>ipcalc</code>, <code>ip</code>, <code>dig</code>, <code>whois</code>, <code>traceroute</code> et <code>macchanger</code>. Saisissez la commande demandée, lisez la sortie, puis analysez ce que vous pouvez réellement conclure."
    },
    {
      t: 'callout', v: 'tip', title: "Méthode d'entraînement",
      x: "Ne copiez pas la solution immédiatement. Écrivez d'abord la commande sur papier, vérifiez la cible et l'option, exécutez, puis comparez la sortie à votre attente. Une commande comprise vaut mieux que dix commandes copiées."
    }
  ],
  exos: [
    {
      id: 'm13-e1',
      title: "Calculer un sous-réseau",
      context: "Une VM de laboratoire utilise <code>192.168.56.42/27</code>. Vous devez connaître le réseau, la plage utilisable et le broadcast avant de configurer un service.",
      task: "Calculez le sous-réseau avec <code>ipcalc</code>.",
      hint: "La commande est <code>ipcalc</code> suivie de l'adresse et du préfixe, sans espace autour de la barre oblique.",
      accept: [/^ipcalc\s+192\.168\.56\.42\/27$/i],
      solution: 'ipcalc 192.168.56.42/27',
      output: [
        'Address:   192.168.56.42',
        'Netmask:   255.255.255.224 = 27',
        'Wildcard:  0.0.0.31',
        '=>',
        'Network:   192.168.56.32/27',
        'HostMin:   192.168.56.33',
        'HostMax:   192.168.56.62',
        'Broadcast: 192.168.56.63',
        'Hosts/Net: 30',
        '++Réseau 192.168.56.32 · broadcast 192.168.56.63 · 30 hôtes utiles'
      ],
      read: "Le bloc contient 32 adresses, mais le réseau (.32) et le broadcast (.63) ne sont pas attribuables : il reste 30 hôtes. Une machine en .42 est donc bien dans la plage .33–.62.",
      pivot: "Ce calcul évite les erreurs de scan : scanner 192.168.56.42/24 au lieu de /27 sort du périmètre du laboratoire. Notez toujours le réseau exact dans vos règles d'engagement."
    },
    {
      id: 'm13-e2',
      title: "Lire les interfaces locales",
      context: "Avant de tracer quoi que ce soit, il faut savoir quelles interfaces existent, lesquelles sont actives et quelles adresses elles portent.",
      task: "Affichez les adresses de toutes les interfaces en format court.",
      hint: "Utilisez <code>ip</code> avec l'option <code>-br</code> et le mot <code>address</code> (ou <code>a</code>).",
      accept: [/^ip\s+-br\s+(a|addr|address)$/i, /^ip\s+(a|addr|address)\s+show$/i],
      solution: 'ip -br address',
      output: [
        'lo               UNKNOWN        127.0.0.1/8 ::1/128',
        'eth0             UP             192.168.56.42/24 fe80::a00:27ff:feaa:bbcc/64',
        'wlan0            DOWN',
        '++eth0 est l’interface de laboratoire ; wlan0 est inactive'
      ],
      read: "L'interface <code>eth0</code> porte une IPv4 privée et une IPv6 link-local. <code>lo</code> est la boucle locale. Une interface DOWN ne transmet rien : inutile de la cibler.",
      pivot: "Sur un poste réel, une adresse 192.168.x.x indique un réseau privé derrière un routeur. L'adresse publique visible depuis Internet est celle du NAT, pas celle de la carte."
    },
    {
      id: 'm13-e3',
      title: "Identifier la passerelle",
      context: "Le poste doit joindre un service de laboratoire sur un autre réseau. Vous vérifiez la route par défaut avant de lancer le moindre test.",
      task: "Affichez la table de routage.",
      hint: "La commande est <code>ip route</code> (éventuellement <code>show</code>).",
      accept: [/^ip\s+route(\s+show)?$/i],
      solution: 'ip route',
      output: [
        'default via 192.168.56.1 dev eth0 proto dhcp metric 100',
        '192.168.56.0/24 dev eth0 proto kernel scope link src 192.168.56.42',
        '++Passerelle par défaut : 192.168.56.1'
      ],
      read: "La route <code>default</code> indique la passerelle utilisée pour tout ce qui n'est pas local. Le réseau 192.168.56.0/24 est directement connecté à eth0.",
      pivot: "La passerelle est souvent le routeur du lab, pas la cible. La scanner sans autorisation serait une erreur de périmètre : elle n'est pas forcément dans le scope."
    },
    {
      id: 'm13-e4',
      title: "Résolution DNS inverse",
      context: "Vous analysez l'adresse de documentation <code>203.0.113.42</code>. Le registre indique un bloc TEST-NET ; vous cherchez un éventuel nom d'hôte.",
      task: "Interrogez le DNS inverse et affichez uniquement la réponse courte.",
      hint: "Utilisez <code>dig -x</code> avec l'adresse, puis ajoutez <code>+short</code>.",
      accept: [/^dig\s+-x\s+203\.0\.113\.42\s+\+short$/i, /^dig\s+\+short\s+-x\s+203\.0\.113\.42$/i],
      solution: 'dig -x 203.0.113.42 +short',
      output: [
        'lab-gw.example.test.',
        '..Réponse fictive : le domaine .test n’est pas résolvable sur Internet',
        '++Un PTR existe, mais il ne prouve aucune identité'
      ],
      read: "Le PTR renvoie un nom d'hôte de laboratoire. Il peut être configuré par le propriétaire du bloc et ne correspond pas nécessairement à un utilisateur.",
      pivot: "Dans un rapport, notez le PTR comme un indice technique. Ne concluez jamais « cette IP appartient à la société X » sur la seule base d'un nom d'hôte."
    },
    {
      id: 'm13-e5',
      title: "Consulter le registre IP",
      context: "Vous devez identifier le titulaire du bloc qui contient <code>203.0.113.42</code> et vérifier s'il s'agit d'une adresse réelle.",
      task: "Interrogez le whois de l'adresse et limitez la sortie aux premières lignes.",
      hint: "Utilisez <code>whois</code> puis un tube vers <code>head -40</code>.",
      accept: [/^whois\s+203\.0\.113\.42\s*\|\s*head\s+-40$/i, /^whois\s+203\.0\.113\.42$/i],
      solution: 'whois 203.0.113.42 | head -40',
      output: [
        '% IANA WHOIS server',
        '%',
        'inetnum:        203.0.113.0 - 203.0.113.255',
        'netname:        TEST-NET-3',
        'descr:          Documentation (RFC 5737)',
        'country:        ZZ',
        'admin-c:        DOC-ADMIN',
        'tech-c:         DOC-TECH',
        'status:         RESERVED',
        '++Bloc de documentation : aucune organisation réelle, aucun abonné'
      ],
      read: "TEST-NET-3 est réservé à la documentation. Une adresse de cette plage ne doit jamais apparaître comme cible réelle. Si vous la voyez dans un log réel, c'est une erreur de configuration ou une adresse falsifiée.",
      pivot: "Le whois donne le titulaire du bloc, souvent un FAI. Pour remonter à un abonné, il faut la table NAT de l'opérateur et une réquisition : ce n'est pas une recherche publique."
    },
    {
      id: 'm13-e6',
      title: "Observer le chemin réseau",
      context: "Une cible de laboratoire autorisée répond sur <code>203.0.113.42</code>. Vous voulez visualiser les sauts sans résolution DNS pour éviter des requêtes inutiles.",
      task: "Lancez un traceroute numérique vers la cible.",
      hint: "La commande est <code>traceroute -n</code> suivie de l'adresse.",
      accept: [/^traceroute\s+-n\s+203\.0\.113\.42$/i],
      solution: 'traceroute -n 203.0.113.42',
      output: [
        'traceroute to 203.0.113.42 (203.0.113.42), 30 hops max, 60 byte packets',
        ' 1  192.168.56.1  1.102 ms  1.084 ms  1.061 ms',
        ' 2  10.0.0.1      8.441 ms  8.390 ms  8.521 ms',
        ' 3  * * *',
        ' 4  * * *',
        '..Fin de trace : les routeurs suivants filtrent ICMP ou sont hors laboratoire',
        '++Deux sauts privés identifiés, puis silence'
      ],
      read: "Les sauts 1 et 2 sont des adresses privées : le trafic sort par le lab puis par un routeur intermédiaire. Les étoiles ne signifient pas « cible absente » : elles indiquent souvent un filtrage ICMP.",
      pivot: "Ne scannez jamais les routeurs intermédiaires : ils sont hors périmètre. Le traceroute sert à diagnostiquer, pas à cartographier l'infrastructure d'un tiers."
    },
    {
      id: 'm13-e7',
      title: "Lire la table ARP",
      context: "Vous devez relier une adresse IP locale à une adresse MAC sur le segment de laboratoire.",
      task: "Affichez la table des voisins IP/MAC.",
      hint: "Deux commandes possibles : <code>ip neigh</code> ou <code>arp -a</code>.",
      accept: [/^ip\s+neigh$/i, /^arp\s+-a$/i],
      solution: 'ip neigh',
      output: [
        '192.168.56.1 dev eth0 lladdr 0a:00:27:00:00:01 REACHABLE',
        '192.168.56.42 dev eth0 lladdr 08:00:27:aa:bb:cc REACHABLE',
        '192.168.56.10 dev eth0 lladdr 02:00:5e:10:00:01 STALE',
        '++Trois couples IP/MAC ; 192.168.56.10 est une MAC locale (02)'
      ],
      read: "L'entrée <code>REACHABLE</code> est récente ; <code>STALE</code> peut être ancienne. La MAC <code>02:... </code> est localement administrée : elle ne correspond pas forcément à un matériel physique.",
      pivot: "La table ARP ne voit que votre segment. Pour relier une MAC à un port de switch, il faut consulter la table CAM du switch, puis le bail DHCP — dans un cadre autorisé."
    },
    {
      id: 'm13-e8',
      title: "Randomiser sa propre MAC",
      context: "Sur votre poste de laboratoire, vous testez la randomisation MAC pour vérifier son effet sur le réseau local. L'interface est <code>eth0</code> et vous êtes propriétaire de la machine.",
      task: "Demandez à macchanger une adresse aléatoire sur <code>eth0</code>.",
      hint: "La commande est <code>sudo macchanger -r eth0</code>.",
      accept: [/^(sudo\s+)?macchanger\s+-r\s+eth0$/i],
      solution: 'sudo macchanger -r eth0',
      output: [
        'Current MAC:   08:00:27:aa:bb:cc (PCS Systemtechnik GmbH)',
        'Permanent MAC: 08:00:27:aa:bb:cc (PCS Systemtechnik GmbH)',
        'New MAC:       02:1a:2b:3c:4d:5e (unknown)',
        '++MAC aléatoire locale : bit U/L à 1, aucun OUI fabricant'
      ],
      read: "La nouvelle MAC commence par <code>02</code> : bit local à 1, adresse administrée localement. Elle ne révèle aucun fabricant et peut changer à chaque redémarrage selon l'outil.",
      pivot: "Cette opération est légitime sur votre propre matériel. Sur un réseau d'entreprise, elle peut déclencher le NAC ou le port-security. Ne l'utilisez jamais pour contourner une exclusion."
    },
    {
      id: 'm13-e9',
      title: "Détecter une fuite IPv6",
      context: "Vous vérifiez qu'un tunnel VPN ne laisse pas sortir une adresse IPv6 publique hors du tunnel. Vous inspectez les adresses globales de votre poste.",
      task: "Affichez uniquement les adresses IPv6 globales.",
      hint: "Utilisez <code>ip -6 address show scope global</code>.",
      accept: [/^ip\s+-6\s+(a|addr|address)\s+show\s+scope\s+global$/i, /^ip\s+-6\s+address\s+show\s+scope\s+global$/i],
      solution: 'ip -6 address show scope global',
      output: [
        '2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 state UP',
        '    inet6 2001:db8:56::42/64 scope global temporary dynamic',
        '       valid_lft 86312sec preferred_lft 14312sec',
        '++Adresse temporaire : elle change, mais reste publique'
      ],
      read: "Une adresse IPv6 globale n'est pas traduite par NAT. Si le tunnel ne capture que l'IPv4, cette adresse peut révéler le préfixe de votre FAI malgré le VPN.",
      pivot: "Corrigez avec un pare-feu IPv6, un kill switch complet ou la désactivation d'IPv6 si le tunnel ne le supporte pas. Testez toujours après modification."
    }
  ]
};
