export default {
  id: 'm13',
  num: 13,
  title: "Identités réseau : IP, MAC et IMEI",
  short: "IP • MAC • IMEI",
  icon: "📡",
  xp: 450,
  duration: 105,
  summary: "Comprendre trois identifiants complémentaires — l'adresse IP, l'adresse MAC et l'IMEI —, ce qu'ils révèlent réellement, comment les tracer dans un cadre autorisé, comment les masquer légitimement et comment s'en défendre.",
  objectives: [
    "Distinguer la portée d'une IP, d'une MAC et d'un IMEI et identifier la couche concernée",
    "Lire une adresse IPv4/IPv6, un masque CIDR et calculer réseau, broadcast et hôtes utiles",
    "Tracer une IP avec whois/RDAP, DNS inverse, ASN et journaux, en mesurant les limites",
    "Analyser une adresse MAC : OUI, bits U/L et I/G, table ARP et switches",
    "Vérifier la structure d'un IMEI et comprendre le rôle de l'opérateur mobile",
    "Masquer ou limiter la diffusion d'un identifiant sans commettre d'infraction",
    "Corréler plusieurs identifiants (NAT, DHCP, logs) pour reconstituer une chaîne de preuve",
    "Réaliser des challenges CTF IP/MAC/IMEI et rédiger les conclusions avec le bon niveau de certitude"
  ],
  blocks: [
    {
      t: 'callout', v: 'legal', title: "Trois identifiants, pas trois personnes",
      x: "Ce module utilise uniquement des adresses et des numéros <strong>fictifs</strong> ou réservés à la documentation. Tracer, surveiller ou usurper l'identité de quelqu'un sans autorisation est illégal. Les manipulations décrites s'effectuent sur <strong>vos propres appareils</strong> ou dans un laboratoire isolé. La modification d'un IMEI est interdite dans de nombreux pays, dont la France : elle n'est jamais présentée ici comme une solution."
    },
    {
      t: 'p',
      x: "Une connexion laisse des traces à plusieurs niveaux. L'<strong>adresse IP</strong> identifie une interface sur un réseau et permet le routage ; l'<strong>adresse MAC</strong> identifie une carte réseau sur un segment local ; l'<strong>IMEI</strong> identifie un terminal mobile auprès du réseau de l'opérateur. Ces identifiants ne sont ni équivalents, ni interchangeables, et aucun ne désigne directement une personne."
    },
    {
      t: 'table',
      head: ['Couche', 'Identifiant', 'Portée native', 'Qui le voit nativement'],
      rows: [
        ['Applicative', 'Compte, e-mail, cookie, jeton', 'Service en ligne', 'Le service, éventuellement ses partenaires'],
        ['Réseau', 'IP publique / privée', 'Internet ou réseau local', 'Routeurs, serveurs, FAI, opérateur'],
        ['Liaison', 'Adresse MAC', 'Segment Ethernet / Wi-Fi', 'Switch, point d\'accès, voisins directs'],
        ['Mobile', 'IMEI, IMSI, MSISDN', 'Réseau de l\'opérateur', 'Opérateur mobile, équipements cœur de réseau'],
        ['Matériel', 'Numéro de série', 'Appareil', 'Fabricant, technicien, logiciel local']
      ]
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'IP — le fil d\'Ariane', p: "Elle change avec le réseau, le NAT, le VPN ou le redémarrage. Elle permet de remonter à un <strong>FAI</strong> et à une zone approximative, rarement à une personne sans réquisition." },
        { v: 'amber', h: 'MAC — l\'adresse du segment', p: "Elle reste normalement dans le réseau local. Le routeur la réécrit à chaque saut. Elle est facile à observer sur un LAN et facile à modifier sur son propre appareil." },
        { v: 'magenta', h: 'IMEI — la carte d\'identité du mobile', p: "Il identifie l'appareil, pas la SIM. L'opérateur le voit à l'attachement. Seul un cadre légal permet de relier IMEI, IMSI et localisation." }
      ]
    },
    {
      t: 'callout', v: 'info', title: "La corrélation avant l'identification",
      x: "Un identifiant isolé est faible : une IP publique peut être partagée par un foyer, une entreprise ou un CGNAT entier. C'est la <strong>chaîne</strong> — IP + port + horodatage + bail DHCP + MAC + compte authentifié — qui produit une preuve. Sans cette chaîne, on formule une hypothèse, pas une accusation."
    },

    { t: 'h', x: "13.1 Adresse IP : structure, portée et lecture" },
    {
      t: 'p',
      x: "Une adresse <strong>IPv4</strong> est un nombre de 32 bits écrit en quatre octets décimaux séparés par des points, par exemple <code>192.168.56.42</code>. Elle se décompose en une <strong>partie réseau</strong> et une <strong>partie hôte</strong>, délimitées par le masque ou la notation CIDR : <code>/24</code> signifie 24 bits de réseau et 8 bits d'hôtes."
    },
    {
      t: 'table',
      head: ['Bloc', 'Plage', 'Usage', 'Routable sur Internet ?'],
      rows: [
        ['10.0.0.0/8', '10.0.0.0 – 10.255.255.255', 'Réseaux privés (RFC 1918)', 'Non'],
        ['172.16.0.0/12', '172.16.0.0 – 172.31.255.255', 'Réseaux privés (RFC 1918)', 'Non'],
        ['192.168.0.0/16', '192.168.0.0 – 192.168.255.255', 'Réseaux privés (RFC 1918)', 'Non'],
        ['127.0.0.0/8', '127.0.0.1 (localhost)', 'Boucle locale', 'Non'],
        ['169.254.0.0/16', '169.254.0.0 – 169.254.255.255', 'Link-local / APIPA', 'Non'],
        ['100.64.0.0/10', '100.64.0.0 – 100.127.255.255', 'CGNAT opérateur (RFC 6598)', 'Non (partagé)'],
        ['192.0.2.0/24', '192.0.2.0 – 192.0.2.255', 'Documentation (TEST-NET-1)', 'Non'],
        ['198.51.100.0/24', '198.51.100.0 – 198.51.100.255', 'Documentation (TEST-NET-2)', 'Non'],
        ['203.0.113.0/24', '203.0.113.0 – 203.0.113.255', 'Documentation (TEST-NET-3)', 'Non'],
        ['2001:db8::/32', '2001:db8::/32', 'Documentation IPv6', 'Non']
      ]
    },
    {
      t: 'p',
      x: "Le <strong>CIDR</strong> se calcule de tête : pour <code>/24</code>, 256 adresses et 254 hôtes utiles ; pour <code>/25</code>, 128 adresses et 126 hôtes ; pour <code>/27</code>, 32 adresses et 30 hôtes. Le premier et le dernier de chaque bloc sont l'adresse de réseau et l'adresse de diffusion (broadcast), non attribuables à des hôtes."
    },
    {
      t: 'code', lang: 'bash', title: "Lire une configuration IP sans envoyer de paquet",
      x: `# Interfaces, adresses et état (Linux)
ip -br address
ip route show

# Windows
ipconfig /all

# Calcul d'un sous-réseau (paquet ipcalc)
ipcalc 192.168.56.42/27`
    },
    {
      t: 'term', title: "Résultat attendu de ipcalc",
      x: [
        { c: "ipcalc 192.168.56.42/27", o: [
          "Address:   192.168.56.42",
          "Netmask:   255.255.255.224 = 27",
          "Network:   192.168.56.32/27",
          "HostMin:   192.168.56.33",
          "HostMax:   192.168.56.62",
          "Broadcast: 192.168.56.63",
          "Hosts/Net: 30"
        ] }
      ]
    },
    { t: 'h', x: "13.2 Tracer une IP : ce que l'on peut vraiment obtenir" },
    {
      t: 'p',
      x: "Tracer une IP consiste à collecter des informations <strong>publiques</strong> ou <strong>internes à votre organisation</strong>, puis à les corréler. Sur Internet, on obtient surtout le propriétaire du bloc, l'ASN, le FAI, parfois une organisation et une localisation approximative. L'identité civile et l'adresse exacte nécessitent une réquisition auprès de l'opérateur."
    },
    {
      t: 'table',
      head: ['Source', 'Ce qu\'elle donne', 'Limite principale'],
      rows: [
        ['whois / RDAP', 'Titulaire du bloc, ASN, contacts, pays', 'Souvent le FAI, pas le client final'],
        ['DNS inverse (PTR)', 'Nom d\'hôte éventuel', 'Souvent absent ou générique'],
        ['BGP / ASN', 'Réseau annoncé, opérateur, chemin', 'Ne dit rien de l\'utilisateur'],
        ['Base géolocalisation', 'Pays, ville approximative, coordonnées', 'Erreurs fréquentes, VPN et mobilité'],
        ['Journaux de votre serveur', 'IP source, date, URL, user-agent', 'NAT, proxies, horloges non synchronisées'],
        ['Opérateur / autorité', 'Abonné, adresse, durée de session', 'Réquisition légale uniquement']
      ]
    },
    {
      t: 'steps',
      items: [
        { h: "Étape 1 — Qualifier l'adresse", p: "Privée, publique, documentation, CGNAT, IPv6 ? Une adresse privée ou de documentation ne doit jamais être « géolocalisée » sur Internet." },
        { h: "Étape 2 — Vérifier le propriétaire", p: "Interrogez le registre RDAP/whois du RIR compétent (RIPE, ARIN, APNIC, LACNIC, AFRINIC). Notez l'ASN et le pays du bloc." },
        { h: "Étape 3 — Résoudre le nom", p: "Un enregistrement PTR peut révéler un hostname de FAI ou d'entreprise. Absence de PTR = information, pas anomalie." },
        { h: "Étape 4 — Mesurer le chemin", p: "Sur une cible autorisée, <code>traceroute</code> ou <code>mtr</code> montre les routeurs traversés. Ne scannez jamais un routeur intermédiaire hors périmètre." },
        { h: "Étape 5 — Corréler les journaux", p: "Rapprochez l'IP, le port source, l'horodatage et le compte authentifié. Vérifiez la synchronisation NTP et le fuseau horaire." },
        { h: "Étape 6 — Conclure avec prudence", p: "Distinguez le fait (« cette IP a envoyé une requête ») de l'inférence (« un abonné de cet opérateur ») et de l'hypothèse (« telle personne »)." }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Les cinq pièges d'une IP",
      x: "<strong>NAT</strong> : plusieurs machines partagent une IP publique. <strong>CGNAT</strong> : des milliers d'abonnés partagent une IP et des ports. <strong>VPN/Tor</strong> : l'IP visible appartient au fournisseur d'anonymisation. <strong>Mobile</strong> : l'IP change et appartient à l'opérateur. <strong>Dynamique</strong> : l'IP d'hier peut appartenir à quelqu'un d'autre aujourd'hui. Aucune de ces situations ne permet d'affirmer « c'est lui »."
    },
    {
      t: 'p',
      x: "<strong>IPv6</strong> fonctionne sur 128 bits, souvent découpé en <code>/64</code> par réseau client. Il n'y a généralement pas de NAT : chaque appareil peut avoir une adresse publique, mais les extensions de confidentialité renouvellent l'identifiant d'interface. Une adresse IPv6 peut donc être plus stable qu'une IPv4… ou changer régulièrement. Le tracing reste identique : registre, ASN, DNS inverse, journaux, opérateur."
    },
    {
      t: 'code', lang: 'bash', title: "Enquête IP minimale (adresses de documentation)",
      x: `# Propriétaire du bloc et ASN (RDAP, sortie lisible)
whois 203.0.113.42 | head -40

# Alternative moderne, réponse JSON
curl -s https://rdap.org/ip/203.0.113.42 | head -60

# DNS inverse
dig -x 203.0.113.42 +short

# Chemin réseau (cible de laboratoire autorisée uniquement)
traceroute -n 203.0.113.42`
    },
    {
      t: 'callout', v: 'tip', title: "IP publique de son propre poste",
      x: "Pour connaître votre IP de sortie, <code>curl -s https://ipinfo.io/json</code> suffit. Ne confiez pas d'informations sensibles à un site de « test IP » gratuit : il voit votre adresse, votre user-agent et parfois votre position estimée. Préférez un service que vous savez journaliser et supprimez les traces inutiles."
    },
    { t: 'h', x: "13.3 Masquer une IP : usages légitimes et limites" },
    {
      t: 'p',
      x: "Masquer son adresse IP est légitime pour protéger sa vie privée, tester son propre service depuis un autre réseau ou isoler un laboratoire. Cela ne doit jamais servir à frauder, harceler, contourner une sanction ou échapper à une enquête. Techniquement, aucune méthode n'est magique : le fournisseur du tunnel voit votre trafic, et le navigateur peut fuiter votre adresse réelle."
    },
    {
      t: 'table',
      head: ['Méthode', 'Ce qu\'elle masque', 'Ce qu\'elle ne masque pas', 'Usage légitime'],
      rows: [
        ['VPN', 'IP réelle vis-à-vis du serveur visité', 'Le fournisseur VPN, les comptes, l\'empreinte navigateur', 'Télétravail, réseaux publics, test géographique'],
        ['Tor', 'IP réelle et destination vis-à-vis du nœud de sortie', 'Les comptes connectés, les fuites applicatives, le dernier saut', 'Recherche en vie privée, accès à l\'information'],
        ['Proxy HTTP/SOCKS', 'IP réelle pour l\'application configurée', 'Les applications qui ignorent le proxy, le DNS', 'Filtrage d\'entreprise, test applicatif'],
        ['NAT / CGNAT', 'IP privée derrière une IP publique partagée', 'L\'opérateur, les logs de translation, la corrélation', 'Architecture réseau normale'],
        ['Réseau mobile', 'IP fixe de l\'abonnement', 'L\'opérateur, la cellule, l\'IMEI/IMSI', 'Mobilité, secours'],
        ['Changement de réseau', 'L\'IP précédente', 'Les autres identifiants et traces', 'Dépannage, mobilité']
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Un VPN ne vous rend pas anonyme",
      x: "Le serveur visité voit l'IP du VPN, mais votre fournisseur VPN voit votre IP réelle et peut journaliser. Le navigateur peut révéler votre IP locale via WebRTC, votre DNS peut sortir en clair, et vos comptes connectés relient toutes les sessions. L'anonymat réel exige une discipline complète : navigateur dédié, DNS maîtrisé, absence de compte personnel, vérification des fuites IPv6 et WebRTC."
    },
    {
      t: 'code', lang: 'bash', title: "Contrôler ses propres fuites",
      x: `# IP de sortie vue par un service
curl -s https://ipinfo.io/json

# Vérifier que le DNS ne sort pas chez le FAI local
# (utiliser un résolveur chiffré et vérifier avec un test DNS de confiance)

# Vérifier IPv6 : une adresse publique peut contourner le tunnel IPv4
ip -6 address show scope global

# Sous Windows : ipconfig /all, puis tester WebRTC dans un navigateur dédié`
    },
    {
      t: 'p',
      x: "Côté défense, l'IP n'est pas une identité : ne bannissez pas définitivement une IP partagée, ne l'utilisez pas seule pour autoriser un compte, et ne faites pas confiance à <code>X-Forwarded-For</code> s'il peut être forgé par le client. Combinez limitation de débit, authentification, MFA, analyse comportementale et journaux corrélés."
    },

    { t: 'h', x: "13.4 Adresse MAC : le lien local" },
    {
      t: 'p',
      x: "Une adresse <strong>MAC</strong> (Media Access Control) est un identifiant de 48 bits, écrit en six octets hexadécimaux : <code>08:00:27:AA:BB:CC</code>. Les 24 premiers bits forment l'<strong>OUI</strong> (Organizationally Unique Identifier), attribué à un fabricant ; les 24 derniers identifient l'interface. Certains équipements utilisent 64 bits (EUI-64)."
    },
    {
      t: 'table',
      head: ['Bit', 'Position', 'Valeur', 'Signification'],
      rows: [
        ['I/G', 'Bit 0 du premier octet', '0 = unicast / 1 = multicast', 'Une carte normale est en unicast'],
        ['U/L', 'Bit 1 du premier octet', '0 = globale / 1 = locale', '1 indique une adresse administrée localement'],
        ['OUI', '24 premiers bits', 'Ex. 08:00:27', 'Fabricant ou organisation (peut être virtuel)'],
        ['NIC', '24 derniers bits', 'Ex. AA:BB:CC', 'Suffixe attribué par le fabricant'],
        ['Broadcast', 'FF:FF:FF:FF:FF:FF', 'Tous les bits à 1', 'Destine la trame à tout le segment']
      ]
    },
    {
      t: 'term', title: "Observer les adresses MAC autour de soi (Linux)",
      x: [
        { c: "ip link show eth0", o: [
          "2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 state UP",
          "    link/ether 08:00:27:aa:bb:cc brd ff:ff:ff:ff:ff:ff"
        ] },
        { c: "ip neigh", o: [
          "192.168.56.1 dev eth0 lladdr 0a:00:27:00:00:01 REACHABLE",
          "192.168.56.10 dev eth0 lladdr 02:00:5e:10:00:01 STALE"
        ] },
        { c: "arp -a", o: [
          "? (192.168.56.1) at 0a:00:27:00:00:01 [ether] on eth0",
          "? (192.168.56.10) at 02:00:5e:10:00:01 [ether] on eth0"
        ] }
      ]
    },
    {
      t: 'p',
      x: "Contrairement à l'IP, la MAC ne traverse pas Internet : elle sert uniquement sur le <strong>segment local</strong>. À chaque saut, le routeur retire l'en-tête de liaison et en construit un nouveau avec sa propre MAC. Le switch apprend les MAC sur ses ports dans une <strong>table CAM</strong> ; le protocole ARP associe une IP à une MAC sur le LAN ; le serveur DHCP peut enregistrer la MAC du client avec son bail."
    },
    {
      t: 'steps',
      items: [
        { h: "Étape 1 — Identifier l'interface", p: "Sur votre poste : <code>ip link</code> ou <code>ipconfig /all</code>. Notez la MAC de l'interface concernée et son état (connectée, virtuelle, Wi-Fi)." },
        { h: "Étape 2 — Lire la table des voisins", p: "<code>ip neigh</code> ou <code>arp -a</code> donne les couples IP/MAC récemment vus. Une entrée STALE peut encore être valide ; une entrée FAILED indique une résolution ARP échouée." },
        { h: "Étape 3 — Interroger le switch", p: "Sur un équipement administré et autorisé : <code>show mac address-table</code> indique la MAC, le port et le VLAN. Sur un réseau non administré, vous ne verrez que votre segment." },
        { h: "Étape 4 — Croiser avec le DHCP", p: "Le bail DHCP associe MAC, IP, hostname, date et durée. C'est souvent la pièce qui relie l'IP à un poste." },
        { h: "Étape 5 — Vérifier le fabricant", p: "L'OUI donne le fabricant, pas le modèle ni l'utilisateur. Une MAC virtuelle (VM, conteneur, randomisation) peut ne correspondre à aucun matériel réel." },
        { h: "Étape 6 — Corréler avec les journaux", p: "Wi-Fi (association), 802.1X, port-security, DHCP et DNS interne. Attention aux MAC aléatoires : un même appareil peut en changer à chaque réseau." }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Le filtrage MAC n'est pas une sécurité",
      x: "Une adresse MAC se modifie en quelques secondes sur un appareil dont on est propriétaire. Le filtrage par MAC bloque les erreurs et les imprudents, pas un attaquant. Utilisez 802.1X, des VLAN séparés, du port-security, du DHCP snooping et une supervision des changements d'identité."
    },
    {
      t: 'p',
      x: "La <strong>randomisation MAC</strong> est intégrée aux systèmes modernes (Wi-Fi, iOS, Android, Windows) pour éviter le pistage entre réseaux. Elle est légitime sur ses propres appareils. En revanche, changer de MAC pour usurper un autre poste, contourner un contrôle d'accès ou fausser une facturation est une atteinte au réseau d'autrui. Sur un réseau d'entreprise, la randomisation peut casser le NAC, le port-security ou les réservations DHCP."
    },
    {
      t: 'code', lang: 'bash', title: "Changer la MAC de son propre poste (lab uniquement)",
      x: `# Vérifier l'interface et sa MAC actuelle
ip link show eth0

# Couper l'interface, changer la MAC, la réactiver (laboratoire personnel)
sudo ip link set eth0 down
sudo ip link set eth0 address 02:00:5e:10:00:01
sudo ip link set eth0 up

# Outil dédié, équivalent
sudo macchanger -r eth0   # adresse aléatoire locale
sudo macchanger -p eth0   # restaurer la MAC d'origine`
    },
    {
      t: 'callout', v: 'legal', title: "Sur votre matériel, avec votre autorisation",
      x: "Modifier la MAC d'une interface que vous possédez est acceptable pour tester, se protéger ou s'entraîner. La modifier pour accéder à un réseau qui vous a exclu, usurper l'identité d'un équipement ou contourner un contrôle d'accès est une infraction. Ne le faites jamais sur un réseau d'entreprise sans autorisation écrite."
    },
    { t: 'h', x: "13.5 IMEI : l'identité du terminal mobile" },
    {
      t: 'p',
      x: "L'<strong>IMEI</strong> (International Mobile Equipment Identity) identifie un terminal mobile. Il comporte classiquement <strong>15 chiffres</strong> : 8 chiffres de <strong>TAC</strong> (Type Allocation Code), 6 chiffres de numéro de série et 1 chiffre de contrôle calculé par l'algorithme de <strong>Luhn</strong>. Les versions <strong>IMEISV</strong> ajoutent deux chiffres de version logicielle (16 ou 17 chiffres)."
    },
    {
      t: 'table',
      head: ['Identifiant', 'Ce qu\'il identifie', 'Où il vit', 'Qui le voit'],
      rows: [
        ['IMEI', 'Le terminal (modem, châssis)', 'Mémoire du modem', 'Opérateur, fabricant, logiciel local'],
        ['IMSI', 'L\'abonné SIM (identité réseau)', 'Carte SIM / eSIM', 'Opérateur mobile'],
        ['ICCID', 'La carte SIM physique', 'Carte SIM', 'Opérateur, utilisateur'],
        ['MSISDN', 'Le numéro de téléphone', 'Cœur de réseau', 'Opérateur, correspondants'],
        ['EID', 'La puce eSIM', 'eUICC', 'Opérateur, fournisseur eSIM'],
        ['IMEISV', 'Terminal + version logicielle', 'Modem', 'Opérateur, réseau']
      ]
    },
    {
      t: 'steps',
      items: [
        { h: "Étape 1 — Lire l'IMEI", p: "Sur votre propre appareil : composez <code>*#06#</code>, ou consultez Réglages → À propos → IMEI. Ne publiez jamais ce numéro : il peut servir à du clonage ou à du harcèlement." },
        { h: "Étape 2 — Vérifier le format", p: "15 chiffres, éventuellement 16/17 pour un IMEISV. Un IMEI qui échoue au contrôle de Luhn est invalide ou mal saisi." },
        { h: "Étape 3 — Identifier le TAC", p: "Les 8 premiers chiffres donnent le modèle. Les bases publiques sont partielles ; un TAC inconnu n'est pas forcément frauduleux." },
        { h: "Étape 4 — Vérifier le statut", p: "Utilisez les canaux officiels du fabricant, de l'opérateur ou des autorités. Les sites « IMEI checker » gratuits collectent souvent vos données et revendent des résultats approximatifs." },
        { h: "Étape 5 — En cas de vol", p: "Déclarez le vol à l'opérateur et aux autorités avec l'IMEI et l'ICCID. Le blocage s'effectue dans l'EIR de l'opérateur ; un simple changement de SIM ne suffit pas à réutiliser l'appareil." }
      ]
    },
    {
      t: 'code', lang: 'python', title: "Contrôle de Luhn d'un IMEI (exemple pédagogique)",
      x: `def luhn_ok(number: str) -> bool:
    total = 0
    for i, ch in enumerate(reversed(number)):
        d = int(ch)
        if i % 2 == 1:          # on double un chiffre sur deux
            d *= 2
            if d > 9:
                d -= 9
        total += d
    return total % 10 == 0

for imei in ("356938035643809", "356938035643800"):
    print(imei, "valide" if luhn_ok(imei) else "invalide")

# 356938035643809 valide
# 356938035643800 invalide`
    },
    {
      t: 'p',
      x: "Le réseau mobile voit l'IMEI à l'attachement, avec l'IMSI de la SIM et la cellule servante. L'opérateur peut donc relier un terminal à un abonnement, produire des <strong>CDR</strong> (Call Detail Records) et localiser approximativement l'appareil par la cellule et les mesures radio. Cette capacité est réservée à l'opérateur et aux autorités dans un cadre légal : elle n'est pas accessible depuis une simple page web."
    },
    {
      t: 'table',
      head: ['Acteur', 'IMEI', 'IMSI', 'Localisation', 'Cadre'],
      rows: [
        ['Utilisateur', 'Oui (son appareil)', 'Rarement visible', 'GPS / services', 'Consentement'],
        ['Application', 'Parfois via API système', 'Non', 'GPS si autorisé', 'Permissions OS'],
        ['Opérateur', 'Oui', 'Oui', 'Cellule, triangulation', 'Contrat + loi'],
        ['Autorité judiciaire', 'Oui (réquisition)', 'Oui', 'Sur réquisition', 'Procédure pénale'],
        ['Site web public', 'Non', 'Non', 'Non', 'Aucun'],
        ['Fabricant / SAV', 'Oui (support)', 'Non', 'Non', 'Garantie / réparation']
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Modifier un IMEI est illégal et dangereux",
      x: "En France et dans de nombreux pays, falsifier ou modifier l'IMEI d'un terminal est interdit et peut constituer une infraction (fraude, contrefaçon, atteinte à un système de traitement automatisé). Techniquement, l'opération nécessite des outils spécialisés, peut rendre l'appareil inutilisable et ne procure <strong>aucune anonymisation</strong> : l'IMSI, la cellule et les métadonnées restent visibles. Ce cours ne fournit pas de méthode pour y parvenir."
    },
    {
      t: 'p',
      x: "Pour protéger sa vie privée mobile sans illégalité : désactiver le partage de localisation non nécessaire, vérifier les permissions des applications, désactiver la 2G si l'appareil le permet (protection contre certains IMSI catchers), utiliser un eSIM ou un forfait dédié pour un usage séparé, chiffrer l'appareil et ne pas publier son IMEI. En entreprise, un MDM inventorie les terminaux et peut effacer un appareil perdu, dans un cadre RH et légal clair."
    },

    { t: 'h', x: "13.6 Méthode commune : tracer sans se tromper" },
    {
      t: 'steps',
      items: [
        { h: "1. Qualifier l'identifiant", p: "IP, MAC ou IMEI ? Est-il public, privé, virtuel, aléatoire, invalide ? La première erreur est de traiter une adresse privée comme une adresse Internet." },
        { h: "2. Délimiter la portée", p: "Une MAC ne sort pas du LAN ; une IP publique peut être partagée ; un IMEI n'est visible que du réseau mobile. Toute conclusion hors de cette portée est fausse." },
        { h: "3. Choisir une source autorisée", p: "Registres publics pour l'IP, équipements de votre réseau pour la MAC, canaux officiels pour l'IMEI. Jamais de surveillance d'un tiers, de doxxing ou d'achat de données volées." },
        { h: "4. Horodater la preuve", p: "Notez la date, l'heure, le fuseau, l'outil, la commande et la sortie brute. Synchronisez les horloges (NTP) : sans cela, la corrélation NAT/DHCP est impossible." },
        { h: "5. Corréler au minimum deux sources", p: "IP + port + bail DHCP ; MAC + port de switch + journal 802.1X ; IMEI + IMSI + CDR. Une source unique reste une hypothèse." },
        { h: "6. Conclure avec un niveau de certitude", p: "Fait observé, inférence technique, hypothèse à confirmer. Un rapport honnête distingue les trois et documente les limites." }
      ]
    },
    {
      t: 'table',
      head: ['Vous pouvez affirmer', 'Vous ne pouvez pas affirmer sans réquisition'],
      rows: [
        ['Cette IP a envoyé une requête à telle heure', 'Cette personne physique était devant l\'écran'],
        ['Cette MAC était vue sur le port 12 à 14:32', 'Cette MAC appartient à un utilisateur nommé'],
        ['Cet IMEI est syntaxiquement valide et associé à ce TAC', 'Ce terminal se trouve à une adresse précise'],
        ['Ce bloc IP appartient à cet opérateur', 'Ce client est coupable d\'un délit'],
        ['Ce bail DHCP reliait cette IP à ce hostname', 'Cette preuve est suffisante devant un tribunal']
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Le réflexe du rapport",
      x: "Écrivez trois colonnes : <strong>observé</strong>, <strong>déduit</strong>, <strong>hypothèse</strong>. Ajoutez la source, l'horodatage et la méthode. C'est ce qui distingue un analyste d'un détective amateur — et ce qui protège votre organisation en cas de contentieux."
    },

    { t: 'h', x: "13.7 Se défendre : vie privée, journalisation et moindre exposition" },
    {
      t: 'table',
      head: ['Risque', 'Mesure défensive', 'Identifiant concerné'],
      rows: [
        ['Corrélation entre sites', 'Navigateur dédié, cloisonnement des comptes, VPN légitime', 'IP, empreinte, cookies'],
        ['Pistage Wi-Fi', 'Randomisation MAC activée, oublier les réseaux', 'MAC'],
        ['Fuite d\'IP réelle', 'Kill switch, DNS chiffré, désactivation WebRTC/IPv6 non maîtrisée', 'IP'],
        ['Surveillance réseau', '802.1X, segmentation, port-security, DHCP snooping', 'MAC'],
        ['Vol de terminal', 'Verrouillage, chiffrement, MDM, déclaration IMEI', 'IMEI'],
        ['Fuite de logs', 'Rétention limitée, accès restreint, pseudonymisation', 'IP, MAC, IMEI'],
        ['Usurpation d\'identifiant', 'MFA, signatures, contrôle d\'accès, supervision', 'Tous']
      ]
    },
    {
      t: 'p',
      x: "Les logs contenant des IP, des MAC ou des IMEI sont des <strong>données personnelles</strong> au sens du RGPD lorsqu'ils permettent d'identifier une personne, même indirectement. Appliquez minimisation, durée de conservation, contrôle d'accès, chiffrement et journalisation des accès aux journaux. Une IP seule n'est pas toujours identifiante, mais croisée avec un compte ou un bail DHCP, elle le devient."
    },
    {
      t: 'callout', v: 'legal', title: "Cadre français et européen",
      x: "Le traitement d'identifiants techniques doit respecter le RGPD (base légale, proportionnalité, information, sécurité, durée). L'accès frauduleux à un système est réprimé par le Code pénal (art. 323-1 et suivants). La modification d'un IMEI, l'usurpation d'identité numérique et la collecte massive de données personnelles peuvent constituer des infractions distinctes. En cas de doute, consultez le DPO ou un juriste avant de tracer."
    },

    { t: 'h', x: "13.8 Atelier — Traceur IP, MAC & IMEI" },
    {
      t: 'p',
      x: "Trois fiches interactives pour vérifier votre lecture des identifiants. Les données sont fictives et aucune requête réseau n'est émise. Analysez chaque cas, répondez à la question, puis validez les trois couches pour terminer l'atelier."
    },
    { t: 'lab', id: 'identity' },

    { t: 'h', x: "13.9 CTF — 5 challenges IP, MAC & IMEI" },
    {
      t: 'p',
      x: "Les challenges utilisent exclusivement des données de documentation (192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24, 192.168.56.0/24) et des identifiants fictifs. Objectif : produire le flag et justifier la démarche. Les réponses sont dans les blocs « Solution » ; cherchez d'abord sans les ouvrir."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Challenge 1 — Découpage', p: "Calculer réseau, broadcast et nombre d'hôtes d'un <code>/27</code>." },
        { v: 'amber', h: 'Challenge 2 — MAC', p: "Lire les bits U/L et I/G d'une adresse locale." },
        { v: 'lime', h: 'Challenge 3 — IMEI', p: "Valider un IMEI par l'algorithme de Luhn." },
        { v: 'magenta', h: 'Challenge 4 — NAT', p: "Corréler un log web, une translation NAT et un bail DHCP." },
        { v: 'violet', h: 'Challenge 5 — Fuite VPN', p: "Identifier la fuite qui révèle l'IP réelle." }
      ]
    },
    {
      t: 'p',
      x: "<strong>Challenge 1 — Le sous-réseau de la passerelle.</strong> Une VM de laboratoire possède l'adresse <code>192.168.56.42/27</code>. Le routeur de lab demande le réseau, le broadcast et le nombre d'hôtes utiles. Retrouvez-les sans outil, puis vérifiez avec <code>ipcalc</code>."
    },
    {
      t: 'code', lang: 'text', title: "Challenge 1 — données",
      x: `Adresse : 192.168.56.42
Masque  : /27  (255.255.255.224)
Bloc    : 32 adresses

À trouver :
- adresse de réseau
- adresse de broadcast
- nombre d'hôtes utilisables
- flag : FLAG{IP_<réseau>_<hôtes>}`
    },
    {
      t: 'callout', v: 'tip', title: "Solution challenge 1",
      x: "42 se situe dans le bloc 32–63. Réseau : <code>192.168.56.32</code>. Broadcast : <code>192.168.56.63</code>. Hôtes utiles : 32 − 2 = <strong>30</strong>. Flag : <code>FLAG{IP_192.168.56.32_30}</code>. Vérification : <code>ipcalc 192.168.56.42/27</code>."
    },
    {
      t: 'p',
      x: "<strong>Challenge 2 — Une MAC trop locale.</strong> La table ARP d'un poste de lab contient <code>02:1A:2B:3C:4D:5E</code>. Déterminez s'il s'agit d'une adresse unicast ou multicast, globale ou locale, et ce que cela implique pour l'identification du fabricant."
    },
    {
      t: 'code', lang: 'text', title: "Challenge 2 — données",
      x: `MAC : 02:1A:2B:3C:4D:5E
Premier octet : 0x02 = 0000 0010

Rappel :
- bit 0 (I/G) : 0 unicast, 1 multicast
- bit 1 (U/L) : 0 globale, 1 locale

Flag : FLAG{MAC_<type>_<portée>}`
    },
    {
      t: 'callout', v: 'tip', title: "Solution challenge 2",
      x: "Octet 0x02 = <code>0000 0010</code> : bit I/G = 0 (unicast), bit U/L = 1 (localement administrée). L'OUI <code>02:1A:2B</code> n'est pas un OUI fabricant : c'est typiquement une adresse de VM, de conteneur ou randomisée. Flag : <code>FLAG{MAC_LOCAL_UNICAST}</code>. Conclusion : le fabricant n'est pas identifiable, et l'adresse peut changer."
    },
    {
      t: 'p',
      x: "<strong>Challenge 3 — L'IMEI suspect.</strong> Un terminal de lab affiche le préfixe <code>35693803564380</code> suivi d'un chiffre de contrôle. Calculez ce chiffre avec Luhn, reconstruisez l'IMEI complet, puis expliquez pourquoi l'IMEI seul ne localise pas l'appareil."
    },
    {
      t: 'code', lang: 'text', title: "Challenge 3 — données",
      x: `Préfixe (14 chiffres) : 35693803564380
Chiffre de contrôle   : ?

Algorithme de Luhn :
- parcourir les chiffres de droite à gauche
- doubler un chiffre sur deux
- si le double dépasse 9, soustraire 9
- la somme doit être un multiple de 10

Flag : FLAG{IMEI_<15 chiffres>}`
    },
    {
      t: 'callout', v: 'tip', title: "Solution challenge 3",
      x: "Le chiffre de contrôle est <strong>9</strong> : l'IMEI complet est <code>356938035643809</code>, dont la somme de Luhn vaut 70. Flag : <code>FLAG{IMEI_356938035643809}</code>. L'IMEI identifie le terminal, pas sa position : seule l'infrastructure de l'opérateur (cellule, CDR, réquisition) peut fournir une localisation."
    },
    {
      t: 'p',
      x: "<strong>Challenge 4 — Derrière le NAT.</strong> Un serveur web de lab enregistre une requête provenant de <code>203.0.113.77:51422</code>. Le routeur NAT et le serveur DHCP fournissent les données ci-dessous. Quel poste interne a émis la requête ? Justifiez par le port, l'heure et le bail DHCP."
    },
    {
      t: 'code', lang: 'text', title: "Challenge 4 — données",
      x: `# Journal web (heure serveur, NTP synchronisé)
203.0.113.77 - - [12/Mar/2026:14:32:07 +0100] "POST /admin/login" 401

# Table NAT (routeur de lab)
203.0.113.77:51422 -> 192.168.56.42:49812  (14:32:06 - 14:32:09)

# Baux DHCP
192.168.56.42  -> 08:00:27:AA:BB:CC  hostname: poste-compta
192.168.56.43  -> 08:00:27:DD:EE:FF  hostname: poste-rh

Flag : FLAG{NAT_<IP interne>}`
    },
    {
      t: 'callout', v: 'tip', title: "Solution challenge 4",
      x: "Le port source public <code>51422</code> est traduit vers <code>192.168.56.42:49812</code> pendant la fenêtre 14:32:06–14:32:09, qui contient l'horodatage du log. Le bail DHCP associe cette IP au hostname <code>poste-compta</code>. Flag : <code>FLAG{NAT_192.168.56.42}</code>. On peut affirmer le poste technique ; on ne peut pas encore affirmer la personne devant l'écran."
    },
    {
      t: 'p',
      x: "<strong>Challenge 5 — La fuite du tunnel.</strong> Un utilisateur pense être protégé par un VPN. Le site visité voit l'IP de sortie du VPN, mais un test révèle une adresse locale et une adresse publique différente. Identifiez la fuite et proposez deux corrections."
    },
    {
      t: 'code', lang: 'text', title: "Challenge 5 — données",
      x: `# Sortie VPN annoncée
198.51.100.20

# Test navigateur (page de diagnostic)
IP publique vue        : 203.0.113.77
Candidat WebRTC        : 192.168.1.42
Résolveur DNS utilisé  : 192.168.1.1

# Question : quelle donnée révèle l'IP réelle hors tunnel ?
Flag : FLAG{LEAK_<mécanisme>}`
    },
    {
      t: 'callout', v: 'tip', title: "Solution challenge 5",
      x: "Le candidat <strong>WebRTC</strong> expose l'adresse locale et peut révéler l'IP publique réelle malgré le VPN. Le DNS local (<code>192.168.1.1</code>) constitue une seconde fuite. Flag : <code>FLAG{LEAK_WEBRTC}</code>. Corrections : désactiver WebRTC ou utiliser un navigateur/profil dédié, forcer un DNS chiffré, activer un kill switch et bloquer IPv6 hors tunnel."
    },
    {
      t: 'callout', v: 'warn', title: "Règles des challenges",
      x: "Ne testez jamais ces techniques sur une infrastructure qui ne vous appartient pas. Les adresses de documentation et les logs sont fictifs. Un flag se mérite par le raisonnement : dans un vrai rapport, la justification et les limites comptent autant que la réponse."
    },
    {
      t: 'p',
      x: "Pour valider le module, réussissez le test final avec au moins 70 %. Les questions portent sur la lecture des identifiants, les limites du tracing, les bonnes pratiques de masquage et le cadre légal."
    },
    {
      t: 'callout', v: 'legal', title: "Checklist avant de conclure",
      x: "<strong>1.</strong> Suis-je autorisé à analyser cet identifiant ? <strong>2.</strong> Ai-je vérifié sa portée (LAN, Internet, mobile) ? <strong>3.</strong> Mes sources sont-elles publiques ou internes et légitimes ? <strong>4.</strong> Mes horloges sont-elles synchronisées ? <strong>5.</strong> Ai-je au moins deux sources indépendantes ? <strong>6.</strong> Mon rapport distingue-t-il fait, inférence et hypothèse ? Si une réponse est « non », arrêtez et corrigez avant de publier la moindre conclusion."
    }
  ],
  quiz: 'q13'
};
