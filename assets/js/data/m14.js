export default {
  id: 'm14',
  num: 14,
  title: "Adressage IP, masques et sous-réseaux",
  short: "IP & sous-réseaux",
  icon: "🧮",
  xp: 600,
  duration: 140,
  summary: "Apprendre à lire, découper et concevoir un plan d'adressage IPv4 : binaire, masques, notation CIDR, adresses réseau et broadcast, plages utilisables, sous-réseaux, VLSM et notions d'IPv6.",
  objectives: [
    "Convertir une adresse IPv4 en binaire et comprendre les 32 bits",
    "Distinguer adresse réseau, adresse d'hôte, broadcast et plage utilisable",
    "Calculer le masque, le réseau et la plage à partir d'un préfixe CIDR",
    "Découper un réseau en sous-réseaux de tailles adaptées (VLSM)",
    "Éviter les chevauchements et les erreurs de plan d'adressage",
    "Lire et vérifier un plan d'adressage avec ipcalc et Python"
  ],
  blocks: [
    {
      t: 'callout', v: 'info', title: "Pourquoi découper un réseau ?",
      x: "Un réseau trop grand est difficile à administrer et à sécuriser. Le découpage en <strong>sous-réseaux</strong> permet de séparer les services (administration, utilisateurs, serveurs, invités), de limiter la diffusion et de contrôler les flux. C'est l'équivalent de séparer les étages d'un immeuble par des portes coupe-feu."
    },
    {
      t: 'p',
      x: "Une adresse IPv4 est un nombre de <strong>32 bits</strong>, écrit en quatre blocs de 8 bits séparés par des points. Chaque bloc va de 0 à 255. Par exemple, <code>192.168.1.10</code> signifie quatre octets : 192, 168, 1 et 10. Le <strong>masque</strong> indique combien de ces bits servent à identifier le réseau, et combien servent à identifier les machines."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Adresse IP', p: "L'adresse de l'immeuble. Elle doit être unique sur le réseau." },
        { v: 'amber', h: 'Masque', p: "Le plan de l'immeuble : il dit quelle partie de l'adresse désigne le quartier (réseau) et quelle partie désigne l'appartement (hôte)." },
        { v: 'lime', h: 'CIDR', p: "Une écriture courte du masque : <code>/24</code> signifie 24 bits de réseau, soit 8 bits pour les hôtes." },
        { v: 'magenta', h: 'Sous-réseau', p: "Un étage du bâtiment : une partie du réseau, avec sa propre adresse de réseau et sa propre diffusion." }
      ]
    },
    { t: 'h', x: "14.1 Lire une adresse IP en binaire" },
    {
      t: 'p',
      x: "Chaque octet est une somme de puissances de 2 : 128, 64, 32, 16, 8, 4, 2, 1. Pour convertir 192 : 128 + 64 = 192, donc les deux premiers bits valent 1. Pour 168 : 128 + 32 + 8 = 168. Cette gymnastique devient vite automatique et permet de comprendre les masques."
    },
    {
      t: 'table',
      head: ['Octet', 'Binaire', 'Calcul'],
      rows: [
        ['192', '11000000', '128 + 64'],
        ['168', '10101000', '128 + 32 + 8'],
        ['1', '00000001', '1'],
        ['10', '00001010', '8 + 2'],
        ['255', '11111111', '128 + 64 + 32 + 16 + 8 + 4 + 2 + 1']
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Vérifier une conversion en Python",
      x: `python3 -c "print(bin(192), bin(168), bin(1), bin(10))"
python3 -c "print(int('11000000', 2))"`
    },
    {
      t: 'term',
      title: "Résultat",
      x: [
        { c: "python3 -c \"print(bin(192), bin(168), bin(1), bin(10))\"", o: ["0b11000000 0b10101000 0b1 0b1010"] },
        { c: "python3 -c \"print(int('11000000', 2))\"", o: ["192"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Le masque est un stencil",
      x: "Un masque <code>/24</code> correspond à <code>11111111.11111111.11111111.00000000</code>, soit <code>255.255.255.0</code>. Les 1 indiquent la partie réseau, les 0 la partie hôte. On ne peut pas mettre un 0 au milieu d'une série de 1 : un masque est toujours une suite de 1 suivie d'une suite de 0."
    },
    { t: 'h', x: "14.2 Masques, préfixes et tailles de réseau" },
    {
      t: 'p',
      x: "Le nombre de bits hôtes restants détermine la taille du réseau : avec <code>h</code> bits, on obtient <code>2^h</code> adresses, dont deux sont réservées (adresse de réseau et broadcast). La plage utilisable est donc <code>2^h - 2</code>. C'est pour cela qu'un <code>/24</code> offre 254 adresses utilisables : 256 moins le réseau et le broadcast."
    },
    {
      t: 'table',
      head: ['CIDR', 'Masque', 'Adresses', 'Hôtes utilisables', 'Usage typique'],
      rows: [
        ['/8', '255.0.0.0', '16 777 216', '16 777 214', "Très grand réseau (rare en entreprise)"],
        ['/16', '255.255.0.0', '65 536', '65 534', "Grand campus ou opérateur"],
        ['/24', '255.255.255.0', '256', '254', "Réseau de bureau classique"],
        ['/25', '255.255.255.128', '128', '126', "Moitié d'un /24"],
        ['/26', '255.255.255.192', '64', '62', "Petit service"],
        ['/27', '255.255.255.224', '32', '30', "Petit réseau ou lien"],
        ['/28', '255.255.255.240', '16', '14', "Très petit réseau"],
        ['/29', '255.255.255.248', '8', '6', "Quelques machines"],
        ['/30', '255.255.255.252', '4', '2', "Lien point à point"],
        ['/31', '255.255.255.254', '2', '0 ou 2*', "Lien point à point RFC 3021"],
        ['/32', '255.255.255.255', '1', '0', "Une seule adresse (loopback, route)"]
      ]
    },
    {
      t: 'p',
      x: "La méthode la plus simple pour trouver le réseau : calculer la <strong>taille du bloc</strong> dans l'octet concerné, puis arrondir l'adresse au multiple inférieur. Pour <code>192.168.1.130/25</code>, le masque est <code>255.255.255.128</code>. Le bloc vaut 128 : les réseaux possibles sont .0 et .128. 130 tombe dans .128, donc le réseau est <code>192.168.1.128</code> et le broadcast <code>192.168.1.255</code>."
    },
    {
      t: 'steps',
      items: [
        { h: "1. Convertir le préfixe en masque", p: "<code>/26</code> → <code>255.255.255.192</code>." },
        { h: "2. Calculer la taille du bloc", p: "<code>256 - 192 = 64</code>. Les sous-réseaux avancent de 64 en 64." },
        { h: "3. Trouver le réseau", p: "Arrondir l'IP au multiple de 64 inférieur : 130 → 128." },
        { h: "4. Trouver le broadcast", p: "Broadcast : réseau + bloc - 1 = 128 + 64 - 1 = 191." },
        { h: "5. Donner la plage utilisable", p: "Réseau + 1 à broadcast - 1 : 129 à 190." }
      ]
    },
    { t: 'lab', id: 'subnet' },
    {
      t: 'code', lang: 'bash', title: "Vérifier avec ipcalc",
      x: `ipcalc 192.168.1.130/25
ipcalc 10.10.10.0/28
ipcalc 172.16.5.20/20
ipcalc 198.51.100.0/22`
    },
    {
      t: 'term',
      title: "Sortie ipcalc commentée",
      x: [
        { c: "ipcalc 192.168.1.130/25", o: [
          "Address:   192.168.1.130",
          "Netmask:   255.255.255.128 = 25",
          "Network:   192.168.1.128/25",
          "Broadcast: 192.168.1.255",
          "HostMin:   192.168.1.129",
          "HostMax:   192.168.1.254",
          "Hosts/Net: 126"
        ] },
        { c: "ipcalc 10.10.10.0/28", o: [
          "Network:   10.10.10.0/28",
          "Broadcast: 10.10.10.15",
          "HostMin:   10.10.10.1",
          "HostMax:   10.10.10.14",
          "Hosts/Net: 14"
        ] }
      ]
    },
    { t: 'h', x: "14.3 Adresses privées, publiques et spéciales" },
    {
      t: 'p',
      x: "Toutes les adresses IPv4 ne sont pas égales. Les <strong>adresses privées</strong> ne sont pas routées sur Internet : elles servent à l'intérieur des réseaux locaux. Votre box utilise l'une d'elles, puis le NAT traduit vers une adresse publique. Les <strong>adresses publiques</strong> sont uniques mondialement et attribuées par des registres."
    },
    {
      t: 'table',
      head: ['Plage', 'Type', 'Utilisation'],
      rows: [
        ['10.0.0.0/8', 'Privée (classe A)', "Grands réseaux d'entreprise"],
        ['172.16.0.0/12', 'Privée (classe B)', "Réseaux moyens (172.16 à 172.31)"],
        ['192.168.0.0/16', 'Privée (classe C)', "Maisons et petits bureaux"],
        ['127.0.0.0/8', 'Boucle locale', "La machine elle-même ; 127.0.0.1 est l'adresse la plus connue"],
        ['169.254.0.0/16', 'Link-local (APIPA)', "Attribuée quand DHCP échoue"],
        ['0.0.0.0/0', 'Route par défaut', "Toutes les destinations ; aussi utilisé pour écouter sur toutes les interfaces"],
        ['224.0.0.0/4', 'Multicast', "Diffusion à un groupe d'abonnés"],
        ['255.255.255.255', 'Broadcast limité', "Diffusion sur le réseau local"]
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Erreur classique : lire 172.16.0.0/12 comme 172.16.0.0/16",
      x: "La plage privée <code>172.16.0.0/12</code> couvre <code>172.16.0.0</code> à <code>172.31.255.255</code>. Un <code>/16</code> ne couvrirait que <code>172.16.0.0</code> à <code>172.16.255.255</code>. Le préfixe change complètement la plage : lisez toujours le CIDR, pas seulement les deux premiers octets."
    },
    { t: 'h', x: "14.4 Découper un réseau : méthode pas à pas" },
    {
      t: 'p',
      x: "Découper <code>192.168.1.0/24</code> en quatre sous-réseaux : il faut 2 bits supplémentaires, donc un préfixe <code>/26</code>. Chaque sous-réseau contient 64 adresses. On obtient .0, .64, .128 et .192. Chacun a son adresse réseau, son broadcast et 62 hôtes utilisables."
    },
    {
      t: 'table',
      head: ['Sous-réseau', 'Réseau', 'Plage utilisable', 'Broadcast'],
      rows: [
        ['1', '192.168.1.0/26', '192.168.1.1 – 192.168.1.62', '192.168.1.63'],
        ['2', '192.168.1.64/26', '192.168.1.65 – 192.168.1.126', '192.168.1.127'],
        ['3', '192.168.1.128/26', '192.168.1.129 – 192.168.1.190', '192.168.1.191'],
        ['4', '192.168.1.192/26', '192.168.1.193 – 192.168.1.254', '192.168.1.255']
      ]
    },
    {
      t: 'p',
      x: "Pour un <strong>plan d'adressage</strong>, on part des besoins : combien d'hôtes par segment, combien de segments, quelles évolutions prévoir. On choisit le plus petit bloc qui couvre le besoin, puis on alloue sans chevauchement. On réserve toujours les adresses de réseau et de broadcast, et on documente la passerelle."
    },
    { t: 'h', x: "14.5 VLSM : des sous-réseaux de tailles différentes" },
    {
      t: 'p',
      x: "Le <strong>VLSM</strong> (Variable Length Subnet Mask) consiste à utiliser des masques différents selon les besoins. Au lieu de découper tout en blocs égaux, on donne un grand bloc aux utilisateurs, un moyen aux serveurs, un petit au lien WAN. C'est comme un immeuble où certains étages ont de grands plateaux et d'autres de petites salles."
    },
    {
      t: 'table',
      head: ['Segment', 'Besoin', 'Bloc choisi', 'Réseau', 'Plage', 'Broadcast'],
      rows: [
        ['Administration', '100 hôtes', '/25 (126 hôtes)', '192.168.10.0/25', '192.168.10.1 – 192.168.10.126', '192.168.10.127'],
        ['Utilisateurs', '50 hôtes', '/26 (62 hôtes)', '192.168.10.128/26', '192.168.10.129 – 192.168.10.190', '192.168.10.191'],
        ['Serveurs', '20 hôtes', '/27 (30 hôtes)', '192.168.10.192/27', '192.168.10.193 – 192.168.10.222', '192.168.10.223'],
        ['Lien WAN', '2 hôtes', '/30 (2 hôtes)', '192.168.10.224/30', '192.168.10.225 – 192.168.10.226', '192.168.10.227']
      ]
    },
    {
      t: 'p',
      x: "On commence toujours par le plus grand besoin, puis on place les suivants dans l'espace restant. Ici, il reste <code>192.168.10.228</code> à <code>192.168.10.255</code> pour de futurs besoins. Cette marge évite de refaire tout le plan à chaque ajout."
    },
    {
      t: 'callout', v: 'danger', title: "Les erreurs qui cassent un plan d'adressage",
      x: "Chevauchement de deux blocs, adresse de réseau attribuée à une machine, broadcast utilisé comme passerelle, plage trop petite pour le nombre d'hôtes, ou oubli de la croissance. Une erreur de plan se paie plus tard en conflits d'adresses et en règles de routage incohérentes."
    },
    { t: 'h', x: "14.6 IPv6 : les bases utiles" },
    {
      t: 'p',
      x: "IPv6 utilise <strong>128 bits</strong>, écrits en huit groupes de quatre chiffres hexadécimaux. Il n'y a plus de broadcast : on utilise multicast et des adresses de lien local. Un réseau local typique est en <code>/64</code>, ce qui laisse une immense quantité d'adresses pour les machines. La compression <code>::</code> remplace une suite de groupes nuls, mais une seule fois par adresse."
    },
    {
      t: 'table',
      head: ['Adresse', 'Rôle'],
      rows: [
        ['::1', "Boucle locale (équivalent de 127.0.0.1)"],
        ['fe80::/10', "Lien local, non routable, souvent utilisée pour le voisinage"],
        ['2001:db8::/32', "Plage de documentation, à utiliser dans les exemples"],
        ['2000::/3', "Adresses globales routables (en pratique)"],
        ['ff00::/8', "Multicast"]
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Vérifier IPv6 sur Linux",
      x: `ip -6 addr
ping -6 -c 2 ::1
python3 -c "import ipaddress; print(ipaddress.ip_network('2001:db8::/64').num_addresses)"`
    },
    {
      t: 'term',
      title: "Résultat IPv6",
      x: [
        { c: "ip -6 addr", o: [
          "inet6 ::1/128 scope host",
          "inet6 2001:db8:1::10/64 scope global"
        ] },
        { c: "python3 -c \"...num_addresses\"", o: ["18446744073709551616"] }
      ]
    },
    { t: 'h', x: "14.7 Lab guidé — concevoir un plan d'adressage" },
    {
      t: 'p',
      x: "Vous devez adresser un petit site avec quatre segments : 100 postes d'administration, 50 postes utilisateurs, 20 serveurs et un lien WAN entre deux routeurs. Le réseau fourni est <code>192.168.10.0/24</code>. Le lab ci-dessous vous fait vérifier chaque bloc et détecter les chevauchements."
    },
    {
      t: 'code', lang: 'bash', title: "Vérification des quatre blocs",
      x: `ipcalc 192.168.10.0/25
ipcalc 192.168.10.128/26
ipcalc 192.168.10.192/27
ipcalc 192.168.10.224/30

# Vérifier qu'aucune plage ne se chevauche
python3 - <<'PY'
import ipaddress
nets = [
    ipaddress.ip_network('192.168.10.0/25'),
    ipaddress.ip_network('192.168.10.128/26'),
    ipaddress.ip_network('192.168.10.192/27'),
    ipaddress.ip_network('192.168.10.224/30'),
]
for i, a in enumerate(nets):
    for b in nets[i+1:]:
        print(a, '<=>', b, 'chevauchement' if a.overlaps(b) else 'OK')
PY`
    },
    {
      t: 'term',
      title: "Plan validé",
      x: [
        { c: "ipcalc 192.168.10.0/25", o: ["Network: 192.168.10.0/25", "HostMin: 192.168.10.1", "HostMax: 192.168.10.126", "Broadcast: 192.168.10.127"] },
        { c: "python3 ... overlaps", o: [
          "192.168.10.0/25 <=> 192.168.10.128/26 OK",
          "192.168.10.128/26 <=> 192.168.10.192/27 OK",
          "192.168.10.192/27 <=> 192.168.10.224/30 OK"
        ] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Documenter le plan",
      x: "Un plan d'adressage doit tenir sur une page : nom du segment, réseau CIDR, passerelle, plage DHCP, plage statique, broadcast et VLAN. Sans documentation, le prochain administrateur refera le calcul… et se trompera."
    },
    { t: 'h', x: "14.8 Fiches commandes adressage" },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'ipcalc', tag: 'Calcul réseau',
          what: "Calcule le réseau, le broadcast, la plage utilisable et le masque à partir d'une IP et d'un préfixe.",
          gives: "Toutes les informations d'un sous-réseau, sans erreur de calcul manuel.",
          use: "Vérifier un bloc avant de l'attribuer ou de configurer une interface.",
          syntax: 'ipcalc IP/préfixe',
          example: 'ipcalc 192.168.1.130/25',
          read: "Vérifiez toujours <code>Network</code>, <code>HostMin</code>, <code>HostMax</code> et <code>Broadcast</code>. Une machine ne doit jamais recevoir l'adresse de réseau ou de broadcast."
        },
        {
          cmd: 'ip -br a', tag: 'Adresse locale',
          what: "Affiche les adresses configurées sur les interfaces.",
          gives: "L'IP et le préfixe réellement appliqués à la machine.",
          use: "Comparer la configuration prévue avec la configuration active.",
          syntax: 'ip -br a',
          example: 'ip -br a',
          read: "Un préfixe inattendu sur une interface explique souvent un problème de routage local. Vérifiez aussi la présence de plusieurs adresses sur la même interface."
        },
        {
          cmd: 'ip route', tag: 'Routage',
          what: "Affiche la table de routage et la route par défaut.",
          gives: "Les réseaux directement connectés et la passerelle.",
          use: "Vérifier qu'un sous-réseau est joignable ou qu'une route manque.",
          syntax: 'ip route',
          example: 'ip route',
          read: "Une route <code>10.10.10.0/24 dev eth0</code> indique un réseau directement connecté. Sans route vers un sous-réseau distant, le paquet part vers la passerelle par défaut… ou est perdu."
        },
        {
          cmd: 'ping', tag: 'Test',
          what: "Teste la joignabilité d'une adresse IP.",
          gives: "La réponse et la latence.",
          use: "Vérifier qu'une adresse attribuée est réellement joignable.",
          syntax: 'ping -c 4 adresse',
          example: 'ping -c 4 192.168.10.1',
          read: "Un ping réussi prouve la joignabilité ICMP, pas la validité du plan d'adressage. Un doublon d'adresse peut provoquer des réponses intermittentes."
        },
        {
          cmd: 'python3 ipaddress', tag: 'Vérification',
          what: "Manipule des réseaux et des adresses IPv4/IPv6 en Python.",
          gives: "Le nombre d'adresses, la liste des hôtes, les chevauchements et les conversions.",
          use: "Automatiser la vérification d'un plan d'adressage ou générer une plage.",
          syntax: 'python3 -c "import ipaddress; ..."',
          example: "python3 -c \"import ipaddress; print(ipaddress.ip_network('10.0.0.0/22').num_addresses)\"",
          read: "<code>ip_network</code> refuse une adresse d'hôte sans <code>strict=False</code>. <code>hosts()</code> exclut le réseau et le broadcast pour IPv4, mais pas pour IPv6."
        },
        {
          cmd: 'nmap -sn', tag: 'Découverte',
          what: "Découvre les machines présentes sur un réseau sans scanner les ports.",
          gives: "La liste des hôtes qui répondent.",
          use: "Vérifier quelles adresses d'un bloc sont déjà utilisées avant d'en attribuer une.",
          syntax: 'nmap -sn réseau/préfixe',
          example: 'nmap -sn 192.168.10.0/28',
          read: "Certaines machines bloquent ICMP et n'apparaîtront pas. Un scan de découverte ne remplace pas un inventaire fiable."
        }
      ]
    },
    { t: 'h', x: "14.9 Glossaire adressage" },
    {
      t: 'glossary',
      items: [
        { term: 'IPv4', def: "Adresse de 32 bits écrite en quatre octets décimaux.", use: "Identifier une interface sur un réseau IPv4.", ex: '192.168.1.10' },
        { term: 'Octet', def: "Groupe de 8 bits, valeur de 0 à 255.", use: "Composer les quatre parties d'une adresse IPv4.", ex: '192' },
        { term: 'Masque', def: "Suite de bits qui sépare la partie réseau de la partie hôte.", use: "Déterminer la taille et les limites d'un sous-réseau.", ex: '255.255.255.0' },
        { term: 'CIDR', full: 'Classless Inter-Domain Routing', def: "Notation du masque par un nombre de bits après une barre oblique.", use: "Écrire un réseau de façon compacte.", ex: '/24, /26, /30' },
        { term: 'Adresse réseau', def: "Première adresse d'un bloc, qui identifie le réseau lui-même.", use: "Ne jamais l'attribuer à une machine.", ex: '192.168.1.0' },
        { term: 'Broadcast', def: "Dernière adresse d'un bloc, utilisée pour joindre tous les hôtes.", use: "Ne jamais l'attribuer à une machine.", ex: '192.168.1.255' },
        { term: 'Plage utilisable', def: "Adresses entre le réseau et le broadcast, disponibles pour les machines.", use: "C'est la plage que l'on peut attribuer aux hôtes.", ex: '.1 à .254' },
        { term: 'Sous-réseau', def: "Division d'un réseau en blocs plus petits.", use: "Séparer les services, limiter la diffusion et appliquer des règles.", ex: '192.168.1.0/26' },
        { term: 'VLSM', full: 'Variable Length Subnet Mask', def: "Utilisation de masques de tailles différentes selon les besoins.", use: "Éviter de gaspiller des adresses.", ex: '/25, /26, /27, /30' },
        { term: 'Passerelle', def: "Routeur qui permet de sortir du réseau local.", use: "Généralement la première adresse utilisable du bloc.", ex: '192.168.1.1' },
        { term: 'Adresse privée', def: "Adresse non routée sur Internet, réservée aux réseaux internes.", use: "Utilisée derrière un NAT.", ex: '10.0.0.0/8, 192.168.0.0/16' },
        { term: 'APIPA', full: 'Automatic Private IP Addressing', def: "Adresse link-local attribuée quand DHCP échoue.", use: "Un signe de problème DHCP à diagnostiquer.", ex: '169.254.x.x' },
        { term: 'IPv6', def: "Adresse de 128 bits écrite en hexadécimal.", use: "Remplacer IPv4 à long terme et simplifier certains aspects du routage.", ex: '2001:db8::1/64' },
        { term: 'Chevauchement', def: "Deux blocs qui partagent des adresses.", use: "À détecter avant déploiement, sinon conflits et routage incohérent.", ex: '10.0.0.0/24 et 10.0.0.128/25' }
      ]
    }
  ],
  exos: [
    {
      id: 'm14-e1',
      title: 'Convertir un octet en binaire',
      context: "La compréhension du binaire est la base du calcul de masque.",
      task: "Affichez la représentation binaire de 192 avec Python.",
      hint: "Utilisez <code>python3 -c \"print(bin(192))\"</code>.",
      accept: [/^python3\s+-c\s+["']print\(bin\(192\)\)["']$/i],
      solution: 'python3 -c "print(bin(192))"',
      output: ['0b11000000'],
      read: "192 = 128 + 64, soit <code>11000000</code>. Le préfixe <code>0b</code> indique le binaire en Python.",
      pivot: "Refaites l'exercice avec 168, 255 et 10 pour automatiser la conversion."
    },
    {
      id: 'm14-e2',
      title: 'Analyser un /24',
      context: "Un /24 est le réseau de bureau le plus courant.",
      task: "Calculez les informations de <code>192.168.1.10/24</code> avec ipcalc.",
      hint: "Utilisez <code>ipcalc 192.168.1.10/24</code>.",
      accept: [/^ipcalc\s+192\.168\.1\.10\/24$/i],
      solution: 'ipcalc 192.168.1.10/24',
      output: [
        'Network:   192.168.1.0/24',
        'Broadcast: 192.168.1.255',
        'HostMin:   192.168.1.1',
        'HostMax:   192.168.1.254',
        'Hosts/Net: 254'
      ],
      read: "Le réseau est 192.168.1.0, le broadcast 192.168.1.255, et la plage utilisable va de .1 à .254.",
      pivot: "Vérifiez qu'aucune machine n'utilise .0 ou .255 : ce sont des adresses réservées."
    },
    {
      id: 'm14-e3',
      title: 'Utiliser un masque décimal',
      context: "ipcalc accepte aussi un masque écrit en décimal pointé.",
      task: "Calculez <code>10.0.0.0/255.255.255.0</code>.",
      hint: "Utilisez <code>ipcalc 10.0.0.0/255.255.255.0</code>.",
      accept: [/^ipcalc\s+10\.0\.0\.0\/255\.255\.255\.0$/i],
      solution: 'ipcalc 10.0.0.0/255.255.255.0',
      output: ['Network: 10.0.0.0/24', 'Hosts/Net: 254'],
      read: "Le masque décimal 255.255.255.0 correspond au préfixe /24. Les deux écritures sont équivalentes.",
      pivot: "Retenez les masques les plus courants : /24, /25, /26, /27, /28, /30."
    },
    {
      id: 'm14-e4',
      title: 'Un réseau /20',
      context: "Un /20 est plus grand qu'un /24 et décale le troisième octet.",
      task: "Calculez <code>172.16.5.20/20</code>.",
      hint: "Utilisez <code>ipcalc 172.16.5.20/20</code>.",
      accept: [/^ipcalc\s+172\.16\.5\.20\/20$/i],
      solution: 'ipcalc 172.16.5.20/20',
      output: [
        'Network:   172.16.0.0/20',
        'Broadcast: 172.16.15.255',
        'HostMin:   172.16.0.1',
        'HostMax:   172.16.15.254',
        'Hosts/Net: 4094'
      ],
      read: "Le masque /20 vaut 255.255.240.0. Le bloc couvre 172.16.0.0 à 172.16.15.255 : le troisième octet avance de 16 en 16.",
      pivot: "Ne confondez pas avec 172.16.0.0/16, qui couvrirait tout 172.16.0.0 à 172.16.255.255."
    },
    {
      id: 'm14-e5',
      title: 'Découper un /24 en /26',
      context: "Vous devez créer quatre sous-réseaux égaux dans 192.168.1.0/24.",
      task: "Calculez <code>192.168.1.0/26</code>.",
      hint: "Utilisez <code>ipcalc 192.168.1.0/26</code>.",
      accept: [/^ipcalc\s+192\.168\.1\.0\/26$/i],
      solution: 'ipcalc 192.168.1.0/26',
      output: [
        'Network:   192.168.1.0/26',
        'Broadcast: 192.168.1.63',
        'HostMin:   192.168.1.1',
        'HostMax:   192.168.1.62',
        'Hosts/Net: 62'
      ],
      read: "Chaque /26 contient 64 adresses et 62 hôtes. Les quatre blocs sont .0, .64, .128 et .192.",
      pivot: "Vérifiez les trois autres blocs avec ipcalc avant de les attribuer."
    },
    {
      id: 'm14-e6',
      title: 'Un petit réseau /28',
      context: "Un /28 convient à un petit groupe de machines.",
      task: "Calculez <code>10.10.10.0/28</code>.",
      hint: "Utilisez <code>ipcalc 10.10.10.0/28</code>.",
      accept: [/^ipcalc\s+10\.10\.10\.0\/28$/i],
      solution: 'ipcalc 10.10.10.0/28',
      output: [
        'Network:   10.10.10.0/28',
        'Broadcast: 10.10.10.15',
        'HostMin:   10.10.10.1',
        'HostMax:   10.10.10.14',
        'Hosts/Net: 14'
      ],
      read: "Le bloc contient 16 adresses, dont 14 utilisables. Le masque est 255.255.255.240.",
      pivot: "Un /28 est souvent utilisé pour un petit réseau d'administration ou de serveurs."
    },
    {
      id: 'm14-e7',
      title: 'Un lien point à point /30',
      context: "Deux routeurs reliés directement n'ont besoin que de deux adresses.",
      task: "Calculez <code>10.10.10.0/30</code>.",
      hint: "Utilisez <code>ipcalc 10.10.10.0/30</code>.",
      accept: [/^ipcalc\s+10\.10\.10\.0\/30$/i],
      solution: 'ipcalc 10.10.10.0/30',
      output: [
        'Network:   10.10.10.0/30',
        'Broadcast: 10.10.10.3',
        'HostMin:   10.10.10.1',
        'HostMax:   10.10.10.2',
        'Hosts/Net: 2'
      ],
      read: "Deux adresses utilisables : .1 et .2. C'est le bloc classique d'un lien entre deux routeurs.",
      pivot: "Pour un lien point à point moderne, /31 est aussi possible (RFC 3021) et évite de gaspiller deux adresses."
    },
    {
      id: 'm14-e8',
      title: 'Comprendre un /31',
      context: "Un /31 ne contient que deux adresses, sans réseau ni broadcast classiques.",
      task: "Calculez <code>10.10.10.0/31</code>.",
      hint: "Utilisez <code>ipcalc 10.10.10.0/31</code>.",
      accept: [/^ipcalc\s+10\.10\.10\.0\/31$/i],
      solution: 'ipcalc 10.10.10.0/31',
      output: [
        'Network:   10.10.10.0/31',
        'Broadcast: 10.10.10.1',
        'HostMin:   10.10.10.0',
        'HostMax:   10.10.10.1',
        'Hosts/Net: 0'
      ],
      read: "ipcalc applique la convention classique et compte 0 hôte. En pratique, un /31 est utilisé sur un lien point à point avec les deux adresses .0 et .1.",
      pivot: "Vérifiez que vos équipements supportent RFC 3021 avant d'utiliser un /31."
    },
    {
      id: 'm14-e9',
      title: 'Trouver le réseau d’une adresse',
      context: "L'adresse 192.168.1.130 se trouve dans un sous-réseau /25.",
      task: "Calculez <code>192.168.1.130/25</code>.",
      hint: "Utilisez <code>ipcalc 192.168.1.130/25</code>.",
      accept: [/^ipcalc\s+192\.168\.1\.130\/25$/i],
      solution: 'ipcalc 192.168.1.130/25',
      output: [
        'Network:   192.168.1.128/25',
        'Broadcast: 192.168.1.255',
        'HostMin:   192.168.1.129',
        'HostMax:   192.168.1.254',
        'Hosts/Net: 126'
      ],
      read: "Le réseau est .128, pas .0 : 130 est supérieur à 128. La plage utilisable commence à .129.",
      pivot: "C'est l'erreur la plus fréquente : prendre le début du /24 au lieu du début du /25."
    },
    {
      id: 'm14-e10',
      title: 'Une adresse publique de documentation',
      context: "La plage 203.0.113.0/24 est réservée aux exemples (TEST-NET-3).",
      task: "Calculez <code>203.0.113.0/24</code>.",
      hint: "Utilisez <code>ipcalc 203.0.113.0/24</code>.",
      accept: [/^ipcalc\s+203\.0\.113\.0\/24$/i],
      solution: 'ipcalc 203.0.113.0/24',
      output: ['Network: 203.0.113.0/24', 'HostMin: 203.0.113.1', 'HostMax: 203.0.113.254', 'Hosts/Net: 254'],
      read: "Cette plage est publique mais réservée à la documentation : elle ne doit pas être routée sur Internet. Elle est parfaite pour les exemples et les labs.",
      pivot: "N'utilisez jamais une vraie adresse publique d'un tiers dans un exemple."
    },
    {
      id: 'm14-e11',
      title: 'Le grand bloc privé 10/8',
      context: "10.0.0.0/8 est la plus grande plage privée IPv4.",
      task: "Calculez <code>10.0.0.0/8</code>.",
      hint: "Utilisez <code>ipcalc 10.0.0.0/8</code>.",
      accept: [/^ipcalc\s+10\.0\.0\.0\/8$/i],
      solution: 'ipcalc 10.0.0.0/8',
      output: [
        'Network:   10.0.0.0/8',
        'Broadcast: 10.255.255.255',
        'HostMin:   10.0.0.1',
        'HostMax:   10.255.255.254',
        'Hosts/Net: 16777214'
      ],
      read: "Le bloc couvre 16 777 216 adresses, dont 16 777 214 utilisables. C'est immense pour un seul réseau plat : on le découpe généralement en /16 ou /24.",
      pivot: "Un /8 non découpé est difficile à administrer et à sécuriser."
    },
    {
      id: 'm14-e12',
      title: 'La plage privée 172.16/12',
      context: "La plage 172.16.0.0/12 couvre plusieurs /16.",
      task: "Calculez <code>172.16.0.0/12</code>.",
      hint: "Utilisez <code>ipcalc 172.16.0.0/12</code>.",
      accept: [/^ipcalc\s+172\.16\.0\.0\/12$/i],
      solution: 'ipcalc 172.16.0.0/12',
      output: [
        'Network:   172.16.0.0/12',
        'Broadcast: 172.31.255.255',
        'HostMin:   172.16.0.1',
        'HostMax:   172.31.255.254',
        'Hosts/Net: 1048574'
      ],
      read: "La plage va de 172.16 à 172.31, pas seulement 172.16. Le masque est 255.240.0.0.",
      pivot: "Si vous voyez 172.20.0.0/16, c'est un sous-bloc de cette plage privée."
    },
    {
      id: 'm14-e13',
      title: 'La plage privée 192.168/16',
      context: "192.168.0.0/16 est la plage privée des maisons et petits bureaux.",
      task: "Calculez <code>192.168.0.0/16</code>.",
      hint: "Utilisez <code>ipcalc 192.168.0.0/16</code>.",
      accept: [/^ipcalc\s+192\.168\.0\.0\/16$/i],
      solution: 'ipcalc 192.168.0.0/16',
      output: [
        'Network:   192.168.0.0/16',
        'Broadcast: 192.168.255.255',
        'HostMin:   192.168.0.1',
        'HostMax:   192.168.255.254',
        'Hosts/Net: 65534'
      ],
      read: "La plage couvre tous les 192.168.x.x. Votre box utilise souvent 192.168.1.0/24 à l'intérieur de cette plage.",
      pivot: "Un /16 peut être découpé en plusieurs /24 pour séparer les usages."
    },
    {
      id: 'm14-e14',
      title: 'Vérifier la boucle locale',
      context: "127.0.0.1 est l'adresse de la machine elle-même.",
      task: "Envoyez un paquet à <code>127.0.0.1</code>.",
      hint: "Utilisez <code>ping -c 1 127.0.0.1</code>.",
      accept: [/^ping\s+-c\s+1\s+127\.0\.0\.1$/i],
      solution: 'ping -c 1 127.0.0.1',
      output: ['1 packets transmitted, 1 received, 0% packet loss'],
      read: "La boucle locale fonctionne. Elle ne sort pas de la machine et ne dépend ni du câble ni de la passerelle.",
      pivot: "Si la boucle locale échoue, le problème est dans la pile réseau du système, pas dans le réseau."
    },
    {
      id: 'm14-e15',
      title: 'Voir la route vers Internet',
      context: "Vous devez vérifier par quelle interface et quelle source part un paquet vers 8.8.8.8.",
      task: "Affichez la décision de routage pour <code>8.8.8.8</code>.",
      hint: "Utilisez <code>ip route get 8.8.8.8</code>.",
      accept: [/^ip\s+route\s+get\s+8\.8\.8\.8$/i],
      solution: 'ip route get 8.8.8.8',
      output: ['8.8.8.8 via 10.10.10.1 dev eth0 src 10.10.10.100'],
      read: "Le paquet part par eth0, via la passerelle 10.10.10.1, avec l'adresse source 10.10.10.100.",
      pivot: "Si la route affichée n'est pas celle attendue, vérifiez les routes plus spécifiques et les politiques de routage."
    },
    {
      id: 'm14-e16',
      title: 'Un bloc /22',
      context: "Un /22 regroupe quatre /24 consécutifs.",
      task: "Calculez <code>198.51.100.0/22</code>.",
      hint: "Utilisez <code>ipcalc 198.51.100.0/22</code>.",
      accept: [/^ipcalc\s+198\.51\.100\.0\/22$/i],
      solution: 'ipcalc 198.51.100.0/22',
      output: [
        'Network:   198.51.100.0/22',
        'Broadcast: 198.51.103.255',
        'HostMin:   198.51.100.1',
        'HostMax:   198.51.103.254',
        'Hosts/Net: 1022'
      ],
      read: "Le bloc couvre 198.51.100.0 à 198.51.103.255, soit quatre /24. Le masque est 255.255.252.0.",
      pivot: "Un /22 démarre sur un multiple de 4 du troisième octet : ici 100 = 4 × 25, le bloc est donc bien aligné."
    },
    {
      id: 'm14-e17',
      title: 'Trouver le réseau d’un /27',
      context: "L'adresse 10.20.30.40 appartient à un bloc /27.",
      task: "Calculez <code>10.20.30.40/27</code>.",
      hint: "Utilisez <code>ipcalc 10.20.30.40/27</code>.",
      accept: [/^ipcalc\s+10\.20\.30\.40\/27$/i],
      solution: 'ipcalc 10.20.30.40/27',
      output: [
        'Network:   10.20.30.32/27',
        'Broadcast: 10.20.30.63',
        'HostMin:   10.20.30.33',
        'HostMax:   10.20.30.62',
        'Hosts/Net: 30'
      ],
      read: "Le bloc avance de 32 : 0, 32, 64… 40 tombe dans le bloc 32. Le réseau est 10.20.30.32.",
      pivot: "Vérifiez le broadcast .63 : il ne doit pas être attribué à une machine."
    },
    {
      id: 'm14-e18',
      title: 'Le réseau .0 d’un /27',
      context: "Le même bloc /27 peut être écrit à partir de son adresse réseau.",
      task: "Calculez <code>10.20.30.0/27</code>.",
      hint: "Utilisez <code>ipcalc 10.20.30.0/27</code>.",
      accept: [/^ipcalc\s+10\.20\.30\.0\/27$/i],
      solution: 'ipcalc 10.20.30.0/27',
      output: ['Network: 10.20.30.0/27', 'Broadcast: 10.20.30.31', 'Hosts/Net: 30'],
      read: "Ce bloc est le premier des huit /27 de 10.20.30.0/24. Son broadcast est .31.",
      pivot: "Le bloc suivant commence à .32, puis .64, etc."
    },
    {
      id: 'm14-e19',
      title: 'Vérifier un bloc de plan d’adressage',
      context: "Vous devez valider le bloc utilisateurs 192.168.10.128/26.",
      task: "Calculez <code>192.168.10.128/26</code>.",
      hint: "Utilisez <code>ipcalc 192.168.10.128/26</code>.",
      accept: [/^ipcalc\s+192\.168\.10\.128\/26$/i],
      solution: 'ipcalc 192.168.10.128/26',
      output: [
        'Network:   192.168.10.128/26',
        'Broadcast: 192.168.10.191',
        'HostMin:   192.168.10.129',
        'HostMax:   192.168.10.190',
        'Hosts/Net: 62'
      ],
      read: "Le bloc utilisateurs offre 62 adresses, de .129 à .190. La passerelle pourrait être .129 ou .190 selon la convention.",
      pivot: "Réservez toujours une adresse pour la passerelle et documentez-la."
    },
    {
      id: 'm14-e20',
      title: 'Compter les adresses en Python',
      context: "Vous devez vérifier le nombre total d'adresses d'un /22.",
      task: "Affichez <code>num_addresses</code> du réseau <code>10.0.0.0/22</code> avec Python.",
      hint: "Utilisez <code>python3 -c \"import ipaddress; print(ipaddress.ip_network('10.0.0.0/22').num_addresses)\"</code>.",
      accept: [/ipaddress\.ip_network\(['"]10\.0\.0\.0\/22['"]\)\.num_addresses/i],
      solution: "python3 -c \"import ipaddress; print(ipaddress.ip_network('10.0.0.0/22').num_addresses)\"",
      output: ['1024'],
      read: "Un /22 contient 1 024 adresses, soit 4 × 256. Les hôtes utilisables sont 1 022.",
      pivot: "Utilisez Python pour vérifier un plan entier et détecter les chevauchements automatiquement."
    },
    {
      id: 'm14-e21',
      title: 'Trouver la dernière adresse utilisable',
      context: "La dernière adresse utilisable d'un /24 est le broadcast moins un.",
      task: "Affichez le dernier hôte du réseau <code>10.0.0.0/24</code> avec Python.",
      hint: "Utilisez <code>list(ipaddress.ip_network('10.0.0.0/24').hosts())[-1]</code>.",
      accept: [/ip_network\(['"]10\.0\.0\.0\/24['"]\)\.hosts\(\).*\[-1\]/i],
      solution: "python3 -c \"import ipaddress; print(list(ipaddress.ip_network('10.0.0.0/24').hosts())[-1])\"",
      output: ['10.0.0.254'],
      read: "Le dernier hôte est 10.0.0.254 ; 10.0.0.255 est le broadcast et ne doit pas être attribué.",
      pivot: "Pour un /23, le dernier hôte serait 10.0.1.254."
    },
    {
      id: 'm14-e22',
      title: 'Tester la boucle locale IPv6',
      context: "IPv6 utilise ::1 comme adresse de boucle locale.",
      task: "Envoyez deux paquets à <code>::1</code> avec ping6.",
      hint: "Utilisez <code>ping6 -c 2 ::1</code> ou <code>ping -6 -c 2 ::1</code>.",
      accept: [/^ping6?\s+(-6\s+)?-c\s+2\s+::1$/i],
      solution: 'ping6 -c 2 ::1',
      output: ['2 packets transmitted, 2 received, 0% packet loss'],
      read: "La pile IPv6 répond sur la boucle locale. Cela ne prouve pas que le réseau IPv6 est configuré sur l'interface externe.",
      pivot: "Vérifiez les adresses globales avec <code>ip -6 addr</code>."
    }
  ],
  quiz: 'q14'
};
