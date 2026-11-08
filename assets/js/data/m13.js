export default {
  id: 'm13',
  num: 13,
  title: "Réseaux — les fondamentaux expliqués simplement",
  short: "Fondamentaux réseau",
  icon: "🌐",
  xp: 500,
  duration: 120,
  summary: "Comprendre Internet sans jargon : réseau, paquets, couches OSI et TCP/IP, TCP et UDP, ports, DNS, DHCP, NAT et routage, avec des analogies du quotidien et des labs de diagnostic.",
  objectives: [
    "Expliquer avec des mots simples ce qu'est un réseau, une IP, un port et un paquet",
    "Situer les protocoles dans les couches OSI et TCP/IP",
    "Distinguer TCP et UDP et choisir le bon protocole selon l'usage",
    "Identifier les ports et services les plus courants",
    "Décrire pas à pas une résolution DNS et un bail DHCP",
    "Diagnostiquer une connectivité avec ping, dig, ss, traceroute, curl et tcpdump"
  ],
  blocks: [
    {
      t: 'callout', v: 'info', title: "Aucun prérequis technique",
      x: "Ce module part de zéro. Chaque notion est d'abord expliquée avec une analogie du quotidien, puis reliée à la technique. Les commandes sont exécutées dans un lab local ou simulé : <strong>aucune requête réseau réelle n'est émise</strong> par la plateforme."
    },
    {
      t: 'p',
      x: "Un <strong>réseau</strong>, c'est un ensemble d'ordinateurs qui peuvent se parler. Internet est simplement le plus grand réseau de réseaux : des milliers de réseaux locaux reliés entre eux par des routeurs. Pour qu'un message arrive au bon endroit, il faut trois informations : <strong>une adresse</strong> (où ?), <strong>un port</strong> (à quelle porte ?) et <strong>un protocole</strong> (comment parler ?)."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Adresse IP', p: "Comme l'adresse postale d'un immeuble : elle identifie une machine sur le réseau. Exemple : <code>192.168.1.10</code>." },
        { v: 'amber', h: 'Port', p: "Comme le numéro d'appartement dans l'immeuble : plusieurs services peuvent vivre sur la même IP. Exemple : <code>443</code> pour HTTPS." },
        { v: 'lime', h: 'Protocole', p: "Comme la langue parlée : les deux machines doivent utiliser les mêmes règles. Exemple : HTTP pour le web, DNS pour les noms." },
        { v: 'magenta', h: 'Paquet', p: "Comme une enveloppe : le message est découpé en morceaux, chaque morceau porte l'adresse de départ et d'arrivée." }
      ]
    },
    { t: 'h', x: "13.1 Une journée sur le réseau : que se passe-t-il quand vous ouvrez un site ?" },
    {
      t: 'p',
      x: "Vous tapez <code>example.com</code> dans votre navigateur. Votre ordinateur ne connaît pas l'adresse IP de ce nom. Il demande donc à un <strong>serveur DNS</strong> de traduire le nom en adresse, comme on cherche un numéro dans un annuaire. Une fois l'IP obtenue, il ouvre une connexion vers le port <code>443</code>, échange des paquets chiffrés et affiche la page."
    },
    {
      t: 'steps',
      items: [
        { h: "1. Résolution DNS", p: "Le nom <code>example.com</code> est traduit en adresse IP. Sans DNS, il faudrait retenir des nombres par cœur." },
        { h: "2. Routage", p: "Votre machine compare l'adresse cible à son réseau local. Si la cible est ailleurs, elle envoie le paquet à sa passerelle (le routeur)." },
        { h: "3. Connexion TCP", p: "Pour HTTPS, un échange en trois temps (SYN, SYN-ACK, ACK) établit une connexion fiable avant l'échange de données." },
        { h: "4. Requête HTTP", p: "Le navigateur demande la page. Le serveur répond avec un code (200, 404, 500…) et le contenu." },
        { h: "5. Rendu", p: "Le navigateur analyse le HTML, charge les images et le CSS, puis affiche la page." }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "L'analogie de la lettre",
      x: "<strong>IP</strong> = l'adresse de l'immeuble. <strong>Port</strong> = le numéro d'appartement. <strong>DNS</strong> = l'annuaire qui donne l'adresse à partir du nom. <strong>TCP</strong> = un recommandé avec accusé de réception. <strong>UDP</strong> = une carte postale : plus rapide, mais sans garantie d'arrivée."
    },
    { t: 'h', x: "13.2 Les couches réseau : OSI et TCP/IP" },
    {
      t: 'p',
      x: "On ne construit pas un réseau en une seule fois : on le découpe en <strong>couches</strong>. Chaque couche rend un service à la couche du dessus et utilise les services de la couche du dessous. C'est comme envoyer un colis : vous écrivez la lettre (application), vous la mettez dans une enveloppe (transport), vous ajoutez l'adresse (réseau), puis le facteur la transporte (liaison)."
    },
    {
      t: 'table',
      head: ['Couche OSI', 'Rôle simple', 'Exemples', 'Analogie'],
      rows: [
        ['7 — Application', "Ce que l'utilisateur utilise", 'HTTP, DNS, SMTP, SSH', "Le contenu de la lettre"],
        ['6 — Présentation', "Format, chiffrement, encodage", 'TLS, UTF-8, JPEG', "La langue et le format"],
        ['5 — Session', "Ouvrir, maintenir, fermer un dialogue", 'Sessions, RPC', "Le fil de la conversation"],
        ['4 — Transport', "Découper, fiabiliser, adresser un service", 'TCP, UDP, ports', "Le numéro d'appartement"],
        ['3 — Réseau', "Acheminer entre réseaux", 'IP, ICMP, routage', "L'adresse postale"],
        ['2 — Liaison', "Transmettre sur le support local", 'Ethernet, Wi-Fi, ARP', "Le camion de livraison local"],
        ['1 — Physique', "Transporter les bits", 'Câbles, ondes, fibre', "La route et le véhicule"]
      ]
    },
    {
      t: 'p',
      x: "Le modèle <strong>TCP/IP</strong> regroupe ces couches en quatre : <strong>Application</strong> (OSI 5-7), <strong>Transport</strong> (OSI 4), <strong>Internet</strong> (OSI 3) et <strong>Accès réseau</strong> (OSI 1-2). C'est le modèle réellement utilisé sur Internet. Retenez surtout la logique : plus on descend, plus on parle de bits et de câbles ; plus on monte, plus on parle d'applications."
    },
    {
      t: 'table',
      head: ['TCP/IP', 'Correspondance OSI', 'Unité de données', 'Question à laquelle la couche répond'],
      rows: [
        ['Application', '5, 6, 7', 'Message', "Que veut-on envoyer ?"],
        ['Transport', '4', 'Segment (TCP) / datagramme (UDP)', "À quel service, et avec quelles garanties ?"],
        ['Internet', '3', 'Paquet', "Vers quelle adresse IP et par quel chemin ?"],
        ['Accès réseau', '1, 2', 'Trame / bits', "Comment transmettre sur le support local ?"]
      ]
    },
    {
      t: 'p',
      x: "<strong>Encapsulation</strong> : chaque couche ajoute son propre en-tête. Votre message HTTP devient un segment TCP, puis un paquet IP, puis une trame Ethernet. À l'arrivée, chaque couche retire son en-tête, comme on ouvre successivement l'enveloppe, puis la boîte, puis le paquet."
    },
    { t: 'h', x: "13.3 TCP et UDP : deux façons de transporter" },
    {
      t: 'p',
      x: "<strong>TCP</strong> est fiable : il numérote les segments, vérifie leur arrivée, retransmet ce qui manque et remet tout dans l'ordre. C'est le protocole du web, du mail et du SSH. <strong>UDP</strong> est plus simple : il envoie sans garantie. C'est parfait pour la voix, la vidéo, les jeux ou DNS, où attendre une retransmission serait pire que perdre un paquet."
    },
    {
      t: 'table',
      head: ['Critère', 'TCP', 'UDP'],
      rows: [
        ['Connexion', "Établie (handshake)", "Sans connexion"],
        ['Fiabilité', "Accusés, retransmission, ordre garanti", "Aucune garantie"],
        ['Vitesse / latence', "Plus lourd, un peu plus lent", "Plus léger, plus rapide"],
        ['Usages', 'HTTP/HTTPS, SSH, SMTP, bases de données', 'DNS, DHCP, VoIP, streaming, jeux'],
        ['Analogie', "Recommandé avec accusé de réception", "Carte postale"]
      ]
    },
    {
      t: 'p',
      x: "Le <strong>handshake TCP</strong> en trois étapes est un dialogue : le client dit « je veux ouvrir une connexion » (<code>SYN</code>), le serveur répond « d'accord, je suis prêt » (<code>SYN-ACK</code>), le client confirme (<code>ACK</code>). Ensuite seulement, les données circulent. C'est pour cela qu'une connexion TCP est plus lente à démarrer qu'un simple envoi UDP."
    },
    { t: 'h', x: "13.4 Les ports : les portes des services" },
    {
      t: 'p',
      x: "Une machine a une adresse IP, mais elle peut héberger plusieurs services. Le <strong>port</strong> est un numéro de 0 à 65535 qui identifie le service visé. Les ports 0 à 1023 sont dits « privilégiés » : seuls les administrateurs peuvent ouvrir un service dessus. Un serveur web écoute généralement sur <code>80</code> (HTTP) et <code>443</code> (HTTPS)."
    },
    {
      t: 'table',
      head: ['Port', 'Service', 'À quoi ça sert', 'Transport'],
      rows: [
        ['20/21', 'FTP', "Transfert de fichiers (ancien, souvent à remplacer par SFTP)", 'TCP'],
        ['22', 'SSH / SFTP', "Administration et transfert sécurisés", 'TCP'],
        ['25 / 587', 'SMTP', "Envoi de courrier", 'TCP'],
        ['53', 'DNS', "Traduction des noms en IP", 'UDP et TCP'],
        ['67/68', 'DHCP', "Attribution automatique des adresses", 'UDP'],
        ['80', 'HTTP', "Web non chiffré", 'TCP'],
        ['443', 'HTTPS', "Web chiffré avec TLS", 'TCP'],
        ['3306', 'MySQL', "Base de données MySQL/MariaDB", 'TCP'],
        ['5432', 'PostgreSQL', "Base de données PostgreSQL", 'TCP'],
        ['8080', 'HTTP alternatif', "Proxy, application de test, API", 'TCP']
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Voir les ports en écoute sur une machine Linux",
      x: `ss -tulpn
ss -tulpn | grep -E ':22|:80|:443'
sudo ss -tulpn | grep LISTEN`
    },
    {
      t: 'term',
      title: "Sortie commentée",
      x: [
        { c: "ss -tulpn", o: [
          "Netid State  Local Address:Port  Process",
          "udp   UNCONN 0.0.0.0:53           systemd-resolve",
          "tcp   LISTEN 0.0.0.0:22           sshd",
          "tcp   LISTEN 0.0.0.0:80           nginx",
          "tcp   LISTEN 127.0.0.1:3306       mysqld"
        ] },
        { c: "ss -tulpn | grep -E ':22|:80|:443'", o: [
          "tcp LISTEN 0.0.0.0:22 sshd",
          "tcp LISTEN 0.0.0.0:80 nginx"
        ] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Un port ouvert n'est pas toujours voulu",
      x: "Un service à l'écoute sur <code>0.0.0.0</code> accepte les connexions de toutes les interfaces. Un service sur <code>127.0.0.1</code> n'est accessible que depuis la machine elle-même. En sécurité, on ferme les ports inutiles et on limite l'exposition aux seules interfaces nécessaires."
    },
    { t: 'h', x: "13.5 DNS : l'annuaire d'Internet" },
    {
      t: 'p',
      x: "Les humains retiennent des noms, les machines utilisent des adresses IP. Le <strong>DNS</strong> (Domain Name System) fait le pont. Quand vous demandez <code>www.example.com</code>, votre ordinateur interroge d'abord un résolveur (souvent votre box ou le DNS de votre fournisseur). Le résolveur demande au serveur racine, puis au serveur du domaine <code>.com</code>, puis au serveur autoritaire d'<code>example.com</code>, qui donne l'adresse finale."
    },
    {
      t: 'steps',
      items: [
        { h: "1. Cache local", p: "Votre machine vérifie si elle connaît déjà la réponse. Si oui, elle l'utilise immédiatement." },
        { h: "2. Résolveur récursif", p: "Sinon, elle interroge le résolveur configuré, qui fait le travail à sa place." },
        { h: "3. Racine → TLD → autoritaire", p: "Le résolveur remonte la hiérarchie : racine, puis <code>.com</code>, puis le serveur du domaine." },
        { h: "4. Réponse et cache", p: "L'adresse est renvoyée avec une durée de vie (TTL). Elle est mise en cache pour éviter de répéter la requête." }
      ]
    },
    {
      t: 'table',
      head: ['Type', 'Ce qu’il contient', 'Exemple'],
      rows: [
        ['A', "Adresse IPv4 d'un nom", 'example.com → 192.0.2.10'],
        ['AAAA', "Adresse IPv6 d'un nom", 'example.com → 2001:db8::10'],
        ['CNAME', "Alias vers un autre nom", 'www → example.com'],
        ['MX', "Serveur de messagerie du domaine", 'mail.example.com priorité 10'],
        ['TXT', "Texte libre, souvent vérification ou SPF", 'v=spf1 -all'],
        ['NS', "Serveurs autoritaires du domaine", 'ns1.example.com'],
        ['PTR', "Résolution inverse IP → nom", '10.2.0.192.in-addr.arpa']
      ]
    },
    { t: 'lab', id: 'dns' },
    {
      t: 'code', lang: 'bash', title: "Interroger le DNS",
      x: `dig example.lab A +short
dig example.lab MX +short
dig @10.10.10.53 example.lab A +short
getent hosts example.lab
cat /etc/resolv.conf`
    },
    {
      t: 'term',
      title: "Réponses DNS simulées",
      x: [
        { c: "dig example.lab A +short", o: ["192.0.2.10"] },
        { c: "dig example.lab MX +short", o: ["10 mail.example.lab."] },
        { c: "cat /etc/resolv.conf", o: ["nameserver 10.10.10.53", "search lab.local"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "DNS et sécurité",
      x: "Le DNS est aussi une source d'information : les enregistrements MX révèlent le fournisseur de mail, les TXT peuvent exposer des services, et les sous-domaines oubliés élargissent la surface d'attaque. Côté défense, on surveille les requêtes anormales et on utilise DNSSEC quand c'est possible."
    },
    { t: 'h', x: "13.6 DHCP, NAT et routage : comment les paquets voyagent" },
    {
      t: 'p',
      x: "<strong>DHCP</strong> attribue automatiquement une adresse IP à une machine qui arrive sur le réseau, comme un hôtel attribue une chambre à un client. Le serveur fournit une IP, un masque, une passerelle et des serveurs DNS, pour une durée limitée appelée <strong>bail</strong>."
    },
    {
      t: 'p',
      x: "<strong>NAT</strong> (Network Address Translation) permet à plusieurs appareils d'un réseau local de partager une seule adresse IP publique, comme un standard téléphonique qui fait sortir tous les appels sous un même numéro. Votre box fait du NAT : votre PC a une adresse privée, mais Internet voit l'adresse publique de la box."
    },
    {
      t: 'p',
      x: "Le <strong>routage</strong> est le choix du chemin. Chaque machine compare l'adresse de destination à son propre réseau : si la destination est locale, elle envoie directement ; sinon, elle passe par la <strong>passerelle par défaut</strong>. Les routeurs échangent ensuite les paquets de proche en proche, comme des relais postaux."
    },
    {
      t: 'code', lang: 'bash', title: "Lire la configuration réseau et le chemin",
      x: `ip -br a
ip route
ip route get 8.8.8.8
traceroute -n 10.10.10.10
cat /etc/resolv.conf`
    },
    {
      t: 'term',
      title: "Configuration typique d'un lab",
      x: [
        { c: "ip -br a", o: [
          "lo     UNKNOWN  127.0.0.1/8",
          "eth0   UP       10.10.10.100/24"
        ] },
        { c: "ip route", o: [
          "default via 10.10.10.1 dev eth0",
          "10.10.10.0/24 dev eth0 proto kernel scope link src 10.10.10.100"
        ] },
        { c: "ip route get 8.8.8.8", o: ["8.8.8.8 via 10.10.10.1 dev eth0 src 10.10.10.100"] }
      ]
    },
    { t: 'h', x: "13.7 Lab guidé — diagnostiquer une panne réseau" },
    {
      t: 'p',
      x: "Méthode simple, du plus proche au plus loin : vérifier l'interface, l'adresse, la passerelle, le DNS, puis le service distant. On ne commence pas par « Internet est cassé » : on teste chaque étage. Les commandes ci-dessous sont à exécuter dans l'ordre."
    },
    {
      t: 'code', lang: 'bash', title: "Checklist de diagnostic",
      x: `ip -br a                              # 1. ai-je une adresse ?
ip route                              # 2. ai-je une passerelle ?
ping -c 2 10.10.10.1                  # 3. la passerelle répond-elle ?
ping -c 2 1.1.1.1                     # 4. puis-je sortir en IP ?
dig example.lab A +short              # 5. le DNS répond-il ?
nc -zv 10.10.10.10 443                # 6. le port du service est-il ouvert ?
curl -sI http://10.10.10.10           # 7. le service HTTP répond-il ?
traceroute -n 10.10.10.10             # 8. où le chemin s'arrête-t-il ?`
    },
    {
      t: 'term',
      title: "Lecture d'un diagnostic",
      x: [
        { c: "ping -c 2 10.10.10.1", o: ["2 packets transmitted, 2 received, 0% packet loss"] },
        { c: "ping -c 2 1.1.1.1", o: ["2 packets transmitted, 2 received, 0% packet loss"] },
        { c: "dig example.lab A +short", o: ["192.0.2.10"] },
        { c: "nc -zv 10.10.10.10 443", o: ["Connection to 10.10.10.10 443 port [tcp/https] succeeded!"] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Ce que chaque échec signifie",
      x: "<strong>Pas d'IP</strong> : problème DHCP ou interface. <strong>Pas de ping vers la passerelle</strong> : câble, Wi-Fi, VLAN ou routeur. <strong>Ping IP OK mais nom KO</strong> : DNS. <strong>DNS OK mais port fermé</strong> : service arrêté ou pare-feu. <strong>Port ouvert mais erreur HTTP</strong> : application en cause, pas le réseau."
    },
    { t: 'h', x: "13.8 Voir les paquets : tcpdump et Wireshark" },
    {
      t: 'p',
      x: "Un <strong>sniffer</strong> capture les paquets qui passent sur une interface. C'est comme observer le trafic postal dans un bureau de tri. On y voit les adresses, les ports, les drapeaux TCP et parfois le contenu non chiffré. En lab, on l'utilise pour comprendre un handshake ou vérifier qu'une requête part bien."
    },
    {
      t: 'code', lang: 'bash', title: "Captures ciblées",
      x: `sudo tcpdump -i eth0 -c 5 port 53 -nn
sudo tcpdump -i eth0 -c 10 tcp port 80 -nn
sudo tcpdump -i eth0 -nn 'tcp[tcpflags] & tcp-syn != 0'
sudo tcpdump -r evidence/dns.pcap -nn port 53`
    },
    {
      t: 'term',
      title: "Extrait de capture DNS",
      x: [
        { c: "tcpdump -i eth0 -c 5 port 53 -nn", o: [
          "IP 10.10.10.100.53124 > 10.10.10.53.53: UDP, length 38",
          "IP 10.10.10.53.53 > 10.10.10.100.53124: UDP, length 54"
        ] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Chiffrement et vie privée",
      x: "Avec HTTPS, le contenu HTTP est chiffré, mais les métadonnées (IP, ports, nom de domaine via SNI/DNS) restent souvent visibles. Ne capturez jamais le trafic d'un réseau qui ne vous appartient pas : l'analyse de paquets est encadrée par la loi et par le respect de la vie privée."
    },
    { t: 'h', x: "13.9 Les erreurs de raisonnement les plus fréquentes" },
    {
      t: 'ul',
      x: [
        "Confondre <strong>IP</strong> et <strong>port</strong> : l'IP identifie la machine, le port identifie le service.",
        "Croire que <strong>ping</strong> prouve qu'un service fonctionne : ping teste ICMP, pas HTTP ni SSH.",
        "Croire qu'un <strong>port fermé</strong> signifie que la machine est éteinte : le pare-feu peut simplement bloquer.",
        "Confondre <strong>DNS</strong> et <strong>DHCP</strong> : DNS traduit les noms, DHCP attribue les adresses.",
        "Confondre <strong>TCP</strong> et <strong>UDP</strong> : TCP garantit l'ordre et la livraison, UDP non.",
        "Oublier que <strong>localhost</strong> (127.0.0.1) ne sort jamais de la machine.",
        "Lire une adresse <code>/24</code> comme un simple numéro : le suffixe indique la taille du réseau."
      ]
    },
    { t: 'h', x: "13.10 Fiches commandes réseau" },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'ip -br a', tag: 'Interfaces',
          what: "Affiche les interfaces réseau et leurs adresses de façon compacte.",
          gives: "Le nom des interfaces, leur état (UP/DOWN), les adresses IPv4 et IPv6.",
          use: "Vérifier qu'une machine a bien une adresse et sur quelle interface.",
          syntax: 'ip -br a',
          example: 'ip -br a',
          read: "Si l'interface est DOWN, aucun paquet ne sortira. Une adresse en <code>169.254.x.x</code> indique souvent un échec DHCP."
        },
        {
          cmd: 'ip route', tag: 'Routage',
          what: "Affiche la table de routage et la passerelle par défaut.",
          gives: "Le réseau local, la route par défaut et l'interface utilisée.",
          use: "Vérifier comment la machine atteint Internet ou un autre sous-réseau.",
          syntax: 'ip route ; ip route get 8.8.8.8',
          example: 'ip route get 8.8.8.8',
          read: "Sans ligne <code>default via …</code>, la machine ne peut pas sortir de son réseau local. <code>ip route get</code> montre la décision exacte pour une destination."
        },
        {
          cmd: 'ping', tag: 'Connectivité',
          what: "Envoie des paquets ICMP Echo pour tester la joignabilité.",
          gives: "La réponse, la latence et le taux de perte.",
          use: "Tester la boucle locale, la passerelle, une IP distante ou un nom.",
          syntax: 'ping -c 4 destination',
          example: 'ping -c 4 10.10.10.1',
          read: "Un ping réussi prouve que la machine répond à ICMP, pas qu'un service web fonctionne. Un ping bloqué peut être filtré par un pare-feu."
        },
        {
          cmd: 'dig', tag: 'DNS',
          what: "Interroge un serveur DNS et affiche la réponse détaillée.",
          gives: "Les enregistrements A, AAAA, MX, TXT, NS et le serveur qui a répondu.",
          use: "Vérifier la résolution d'un nom, tester un serveur DNS précis ou diagnostiquer un cache.",
          syntax: 'dig [@serveur] nom type [+short]',
          example: 'dig @10.10.10.53 example.lab A +short',
          read: "Une réponse <code>NXDOMAIN</code> signifie que le nom n'existe pas. <code>SERVFAIL</code> indique souvent un problème de résolution côté serveur. Le TTL indique combien de temps la réponse reste en cache."
        },
        {
          cmd: 'traceroute', tag: 'Chemin',
          what: "Affiche les routeurs traversés pour atteindre une destination.",
          gives: "La liste des sauts, les adresses et les temps de réponse.",
          use: "Localiser un point de blocage ou vérifier le chemin suivi.",
          syntax: 'traceroute -n destination',
          example: 'traceroute -n 10.10.10.10',
          read: "Des <code>*</code> ne signifient pas forcément une panne : certains routeurs ne répondent pas aux sondes. Le dernier saut répondeur indique jusqu'où le chemin est connu."
        },
        {
          cmd: 'ss -tulpn', tag: 'Ports',
          what: "Liste les sockets TCP/UDP et les processus à l'écoute.",
          gives: "Les ports ouverts, les adresses d'écoute et le nom des processus.",
          use: "Savoir quels services tournent et s'ils sont exposés à toutes les interfaces.",
          syntax: 'ss -tulpn',
          example: 'sudo ss -tulpn | grep LISTEN',
          read: "<code>0.0.0.0:80</code> écoute sur toutes les interfaces ; <code>127.0.0.1:3306</code> n'est accessible que localement. Un service exposé sans authentification est une cible."
        },
        {
          cmd: 'nc -zv', tag: 'Test de port',
          what: "Ouvre une connexion TCP vers un hôte et un port sans envoyer de données.",
          gives: "Le succès ou l'échec de la connexion et le nom du service.",
          use: "Vérifier qu'un port est joignable avant de tester l'application.",
          syntax: 'nc -zv hôte port',
          example: 'nc -zv 10.10.10.10 443',
          read: "Un échec peut venir d'un port fermé, d'un pare-feu ou d'un service qui n'écoute pas sur cette interface. Ce n'est pas une preuve d'absence de service."
        },
        {
          cmd: 'curl -sI', tag: 'HTTP',
          what: "Envoie une requête HTTP et affiche les en-têtes de réponse.",
          gives: "Le code HTTP, le serveur, les redirections, les cookies et les en-têtes de sécurité.",
          use: "Vérifier qu'un service web répond et identifier sa pile technique.",
          syntax: 'curl -sI URL',
          example: 'curl -sI http://10.10.10.10',
          read: "Un 200 indique une réponse valide ; un 301/302 une redirection ; un 403 un accès refusé ; un 500 une erreur applicative. L'en-tête <code>Server</code> révèle parfois la version."
        },
        {
          cmd: 'tcpdump', tag: 'Capture',
          what: "Capture et filtre les paquets sur une interface réseau.",
          gives: "Les adresses, ports, drapeaux TCP et éventuellement le contenu non chiffré.",
          use: "Comprendre un handshake, vérifier qu'une requête part ou analyser un problème réseau.",
          syntax: 'tcpdump -i interface -nn [filtre]',
          example: 'tcpdump -i eth0 -c 5 port 53 -nn',
          read: "Utilisez <code>-nn</code> pour éviter les résolutions de noms. Filtrez toujours par port ou hôte : capturer tout le trafic est bruyant et peut exposer des données."
        }
      ]
    },
    { t: 'h', x: "13.11 Glossaire réseau" },
    {
      t: 'glossary',
      items: [
        { term: 'Réseau', def: "Ensemble de machines capables de communiquer selon des règles communes.", use: "Un réseau local (LAN) relie des appareils proches ; Internet relie des réseaux du monde entier.", ex: 'LAN, WAN, Internet' },
        { term: 'Adresse IP', def: "Identifiant numérique d'une machine sur un réseau.", use: "Indispensable pour router un paquet vers la bonne destination.", ex: '192.168.1.10' },
        { term: 'Port', def: "Numéro qui identifie un service sur une machine.", use: "Une IP peut héberger plusieurs services : 80, 443, 22…", ex: '443' },
        { term: 'Paquet', def: "Unité de données transportée sur un réseau, avec en-têtes et charge utile.", use: "Le message est découpé en paquets qui peuvent emprunter des chemins différents.", ex: 'paquet IP' },
        { term: 'Protocole', def: "Ensemble de règles de communication entre machines.", use: "Deux machines doivent parler le même protocole pour se comprendre.", ex: 'HTTP, DNS, TCP' },
        { term: 'OSI', full: 'Open Systems Interconnection', def: "Modèle théorique en 7 couches qui décrit les fonctions d'un réseau.", use: "Servir de grille de lecture pour localiser un problème.", ex: '7 couches' },
        { term: 'TCP/IP', def: "Modèle pratique en 4 couches utilisé sur Internet.", use: "Comprendre comment les applications s'appuient sur IP et Ethernet.", ex: 'Application, Transport, Internet, Accès réseau' },
        { term: 'TCP', full: 'Transmission Control Protocol', def: "Protocole de transport fiable, orienté connexion, avec accusés et retransmission.", use: "Utilisé quand chaque octet compte : web, SSH, mail.", ex: 'handshake SYN/SYN-ACK/ACK' },
        { term: 'UDP', full: 'User Datagram Protocol', def: "Protocole de transport sans connexion ni garantie de livraison.", use: "Utilisé quand la latence prime : DNS, voix, jeux, streaming.", ex: 'DNS sur UDP/53' },
        { term: 'DNS', full: 'Domain Name System', def: "Système qui traduit les noms de domaine en adresses IP.", use: "Rendre Internet utilisable sans mémoriser des adresses.", ex: 'example.com → 192.0.2.10' },
        { term: 'DHCP', full: 'Dynamic Host Configuration Protocol', def: "Protocole qui attribue automatiquement une adresse IP et la configuration réseau.", use: "Éviter de configurer chaque machine à la main.", ex: 'bail DHCP' },
        { term: 'NAT', full: 'Network Address Translation', def: "Traduction d'adresses qui permet à plusieurs machines de partager une IP publique.", use: "La box Internet fait du NAT entre le réseau local et Internet.", ex: '192.168.1.10 → 203.0.113.5' },
        { term: 'Passerelle', def: "Routeur par lequel une machine envoie les paquets destinés à d'autres réseaux.", use: "Sans passerelle, une machine ne peut pas sortir de son réseau local.", ex: 'default via 192.168.1.1' },
        { term: 'Latence', def: "Temps mis par un paquet pour aller et revenir.", use: "Mesurée par ping ; elle influence la sensation de rapidité.", ex: '12 ms' }
      ]
    }
  ],
  exos: [
    {
      id: 'm13-e1',
      title: 'Afficher les interfaces réseau',
      context: "Vous devez vérifier que la machine de lab possède bien une adresse.",
      task: "Affichez les interfaces et leurs adresses avec <code>ip -br a</code>.",
      hint: "La commande est simplement <code>ip -br a</code>.",
      accept: [/^ip\s+-br\s+a$/i],
      solution: 'ip -br a',
      output: [
        'lo     UNKNOWN  127.0.0.1/8',
        'eth0   UP       10.10.10.100/24'
      ],
      read: "L'interface <code>eth0</code> est UP avec l'adresse 10.10.10.100/24. <code>lo</code> est la boucle locale, accessible uniquement depuis la machine.",
      pivot: "Vérifiez maintenant la passerelle avec <code>ip route</code> : sans elle, la machine ne peut pas sortir de son réseau."
    },
    {
      id: 'm13-e2',
      title: 'Lire la passerelle par défaut',
      context: "Une machine sans route par défaut ne peut pas joindre Internet.",
      task: "Affichez la table de routage avec <code>ip route</code>.",
      hint: "La commande est <code>ip route</code>.",
      accept: [/^ip\s+route$/i],
      solution: 'ip route',
      output: [
        'default via 10.10.10.1 dev eth0',
        '10.10.10.0/24 dev eth0 proto kernel scope link src 10.10.10.100'
      ],
      read: "La ligne <code>default via 10.10.10.1</code> indique la passerelle. Le réseau local est <code>10.10.10.0/24</code>.",
      pivot: "Testez la passerelle au ping avant de tester une destination Internet."
    },
    {
      id: 'm13-e3',
      title: 'Tester la boucle locale',
      context: "Avant de tester le réseau, on vérifie que la pile IP de la machine fonctionne.",
      task: "Envoyez 4 paquets ICMP à <code>127.0.0.1</code>.",
      hint: "Utilisez <code>ping -c 4 127.0.0.1</code>.",
      accept: [/^ping\s+-c\s+4\s+127\.0\.0\.1$/i],
      solution: 'ping -c 4 127.0.0.1',
      output: [
        '4 packets transmitted, 4 received, 0% packet loss',
        'rtt min/avg/max/mdev = 0.041/0.052/0.061/0.008 ms'
      ],
      read: "La boucle locale répond : la pile réseau de la machine est fonctionnelle. Cela ne prouve pas encore que le câble ou le Wi-Fi fonctionne.",
      pivot: "Passez à la passerelle, puis à une adresse IP externe, puis à un nom de domaine."
    },
    {
      id: 'm13-e4',
      title: 'Tester la passerelle',
      context: "La passerelle est le routeur qui relie votre réseau local au reste.",
      task: "Envoyez 4 paquets à <code>10.10.10.1</code>.",
      hint: "Utilisez <code>ping -c 4 10.10.10.1</code>.",
      accept: [/^ping\s+-c\s+4\s+10\.10\.10\.1$/i],
      solution: 'ping -c 4 10.10.10.1',
      output: ['4 packets transmitted, 4 received, 0% packet loss'],
      read: "La passerelle répond. Le problème réseau, s'il existe, est plus loin : DNS, sortie Internet ou service distant.",
      pivot: "Testez une IP publique pour vérifier la sortie Internet, indépendamment du DNS."
    },
    {
      id: 'm13-e5',
      title: 'Résoudre un nom avec getent',
      context: "Vous devez vérifier la résolution d'un nom sans passer par un navigateur.",
      task: "Résolvez <code>example.lab</code> avec la commande <code>getent hosts</code>.",
      hint: "Utilisez <code>getent hosts example.lab</code>.",
      accept: [/^getent\s+hosts\s+example\.lab$/i],
      solution: 'getent hosts example.lab',
      output: ['192.0.2.10    example.lab'],
      read: "<code>getent</code> utilise la configuration système (fichiers hosts, DNS). Le nom est bien résolu en 192.0.2.10.",
      pivot: "Comparez avec <code>dig</code> pour voir la réponse DNS détaillée et le serveur interrogé."
    },
    {
      id: 'm13-e6',
      title: 'Lire la configuration DNS',
      context: "Le fichier <code>/etc/resolv.conf</code> indique les serveurs DNS utilisés.",
      task: "Affichez son contenu.",
      hint: "Utilisez <code>cat /etc/resolv.conf</code>.",
      accept: [/^cat\s+\/etc\/resolv\.conf$/i],
      solution: 'cat /etc/resolv.conf',
      output: ['nameserver 10.10.10.53', 'search lab.local'],
      read: "Le résolveur configuré est 10.10.10.53. Le domaine de recherche <code>lab.local</code> permet d'écrire un nom court.",
      pivot: "Interrogez directement ce serveur avec <code>dig @10.10.10.53</code> pour vérifier qu'il répond."
    },
    {
      id: 'm13-e7',
      title: 'Demander un enregistrement A',
      context: "Un enregistrement A associe un nom à une adresse IPv4.",
      task: "Demandez l'enregistrement A de <code>example.lab</code> en sortie courte.",
      hint: "Utilisez <code>dig example.lab A +short</code>.",
      accept: [/^dig\s+example\.lab\s+A\s+\+short$/i],
      solution: 'dig example.lab A +short',
      output: ['192.0.2.10'],
      read: "La réponse contient l'adresse IPv4. Sans <code>+short</code>, dig affiche aussi la section QUESTION, AUTHORITY et les statistiques.",
      pivot: "Testez un type MX pour voir le serveur de messagerie du domaine."
    },
    {
      id: 'm13-e8',
      title: 'Lire les serveurs de messagerie',
      context: "Les enregistrements MX indiquent où envoyer le courrier d'un domaine.",
      task: "Demandez les enregistrements MX de <code>example.lab</code> en sortie courte.",
      hint: "Utilisez <code>dig example.lab MX +short</code>.",
      accept: [/^dig\s+example\.lab\s+MX\s+\+short$/i],
      solution: 'dig example.lab MX +short',
      output: ['10 mail.example.lab.'],
      read: "Le nombre 10 est la priorité : plus il est petit, plus le serveur est préféré. <code>mail.example.lab</code> reçoit le courrier.",
      pivot: "Les MX révèlent souvent le fournisseur de messagerie et des sous-domaines à surveiller."
    },
    {
      id: 'm13-e9',
      title: 'Interroger un serveur DNS précis',
      context: "Pour distinguer un problème de cache d'un problème de résolveur, on interroge directement le serveur.",
      task: "Demandez l'enregistrement A de <code>example.lab</code> au serveur <code>10.10.10.53</code>.",
      hint: "Utilisez <code>dig @10.10.10.53 example.lab A +short</code>.",
      accept: [/^dig\s+@10\.10\.10\.53\s+example\.lab\s+A\s+\+short$/i],
      solution: 'dig @10.10.10.53 example.lab A +short',
      output: ['192.0.2.10'],
      read: "Le serveur interrogé directement répond correctement. Si le nom échouait avec le résolveur par défaut mais fonctionne ici, le problème vient de la configuration ou du cache local.",
      pivot: "En cas d'échec, vérifiez le port 53 et la connectivité vers le serveur."
    },
    {
      id: 'm13-e10',
      title: 'Lister les ports en écoute',
      context: "Vous devez identifier les services qui écoutent sur la machine.",
      task: "Affichez les sockets TCP et UDP en écoute avec les processus.",
      hint: "Utilisez <code>ss -tulpn</code>. Ajoutez <code>sudo</code> si les processus ne s'affichent pas.",
      accept: [/^(sudo\s+)?ss\s+-tulpn$/i],
      solution: 'ss -tulpn',
      output: [
        'udp UNCONN 0.0.0.0:53   systemd-resolve',
        'tcp LISTEN 0.0.0.0:22   sshd',
        'tcp LISTEN 0.0.0.0:80   nginx',
        'tcp LISTEN 127.0.0.1:3306 mysqld'
      ],
      read: "SSH et nginx sont exposés sur toutes les interfaces. MySQL n'écoute que sur la boucle locale, donc inaccessible depuis le réseau.",
      pivot: "Filtrez un port précis pour vérifier son exposition et son processus."
    },
    {
      id: 'm13-e11',
      title: 'Vérifier le port SSH',
      context: "Vous voulez savoir si SSH écoute et sur quelle interface.",
      task: "Filtrez la sortie de <code>ss -tulpn</code> sur le port 22.",
      hint: "Utilisez <code>ss -tulpn | grep :22</code>.",
      accept: [/^ss\s+-tulpn\s*\|\s*grep\s+:22$/i],
      solution: 'ss -tulpn | grep :22',
      output: ['tcp LISTEN 0.0.0.0:22 0.0.0.0:* users:(("sshd",pid=812,fd=3))'],
      read: "SSH écoute sur 0.0.0.0:22, donc sur toutes les interfaces. C'est normal pour un serveur, mais à restreindre si l'administration passe par un VPN.",
      pivot: "Testez la joignabilité du port avec <code>nc -zv</code> depuis une autre machine."
    },
    {
      id: 'm13-e12',
      title: 'Tester un port avec netcat',
      context: "Un port ouvert ne signifie pas que le service répond correctement, mais c'est une première étape.",
      task: "Testez la connexion TCP vers <code>10.10.10.10</code> sur le port <code>443</code>.",
      hint: "Utilisez <code>nc -zv 10.10.10.10 443</code>.",
      accept: [/^nc\s+-zv\s+10\.10\.10\.10\s+443$/i],
      solution: 'nc -zv 10.10.10.10 443',
      output: ['Connection to 10.10.10.10 443 port [tcp/https] succeeded!'],
      read: "La connexion TCP s'établit : le port est ouvert et joignable. Cela ne garantit pas que le certificat ou l'application soient corrects.",
      pivot: "Enchaînez avec <code>curl -sI https://…</code> pour tester la couche HTTP."
    },
    {
      id: 'm13-e13',
      title: 'Lire les en-têtes HTTP',
      context: "Vous devez vérifier qu'un service web répond et identifier son serveur.",
      task: "Affichez les en-têtes de <code>http://10.10.10.10</code>.",
      hint: "Utilisez <code>curl -sI http://10.10.10.10</code>.",
      accept: [/^curl\s+-sI\s+http:\/\/10\.10\.10\.10\/?$/i],
      solution: 'curl -sI http://10.10.10.10',
      output: [
        'HTTP/1.1 200 OK',
        'Server: nginx/1.18.0',
        'Content-Type: text/html'
      ],
      read: "Le service répond en 200. L'en-tête <code>Server</code> révèle nginx 1.18.0. Une version exposée est une information utile pour un audit.",
      pivot: "Comparez avec le port 443 et vérifiez la redirection HTTP vers HTTPS."
    },
    {
      id: 'm13-e14',
      title: 'Tracer le chemin réseau',
      context: "Vous devez localiser où le trafic passe et où il pourrait s'arrêter.",
      task: "Tracez le chemin vers <code>10.10.10.10</code> sans résolution DNS.",
      hint: "Utilisez <code>traceroute -n 10.10.10.10</code>.",
      accept: [/^traceroute\s+-n\s+10\.10\.10\.10$/i],
      solution: 'traceroute -n 10.10.10.10',
      output: [
        'traceroute to 10.10.10.10, 30 hops max',
        ' 1  10.10.10.1  1.102 ms  0.987 ms',
        ' 2  10.10.10.10  2.311 ms  2.204 ms'
      ],
      read: "Deux sauts : la passerelle puis la cible. Les temps sont faibles, le chemin est direct.",
      pivot: "Un <code>*</code> sur un saut ne prouve pas une panne : le routeur peut simplement ne pas répondre aux sondes."
    },
    {
      id: 'm13-e15',
      title: 'Capturer le DNS',
      context: "Vous voulez prouver qu'une requête DNS part bien vers le résolveur.",
      task: "Capturez 5 paquets sur le port 53 de l'interface <code>eth0</code>, sans résolution de noms.",
      hint: "Utilisez <code>sudo tcpdump -i eth0 -c 5 port 53 -nn</code>.",
      accept: [/^sudo\s+tcpdump\s+-i\s+eth0\s+-c\s+5\s+port\s+53\s+-nn$/i],
      solution: 'sudo tcpdump -i eth0 -c 5 port 53 -nn',
      output: [
        'IP 10.10.10.100.53124 > 10.10.10.53.53: UDP, length 38',
        'IP 10.10.10.53.53 > 10.10.10.100.53124: UDP, length 54'
      ],
      read: "La requête part vers le port 53 du résolveur et la réponse revient. Le port source 53124 est éphémère : il identifie la conversation côté client.",
      pivot: "Filtrez sur <code>tcp port 80</code> pour observer une requête HTTP et son handshake."
    },
    {
      id: 'm13-e16',
      title: 'Capturer un handshake TCP',
      context: "Vous devez observer les drapeaux SYN et ACK d'une connexion.",
      task: "Capturez 10 paquets TCP sur le port 80 de <code>eth0</code>.",
      hint: "Utilisez <code>sudo tcpdump -i eth0 -c 10 tcp port 80 -nn</code>.",
      accept: [/^sudo\s+tcpdump\s+-i\s+eth0\s+-c\s+10\s+tcp\s+port\s+80\s+-nn$/i],
      solution: 'sudo tcpdump -i eth0 -c 10 tcp port 80 -nn',
      output: [
        'IP 10.10.10.100.51234 > 10.10.10.10.80: Flags [S], seq 1001',
        'IP 10.10.10.10.80 > 10.10.10.100.51234: Flags [S.], seq 2001, ack 1002',
        'IP 10.10.10.100.51234 > 10.10.10.10.80: Flags [.], ack 2002'
      ],
      read: "On voit SYN, SYN-ACK puis ACK : c'est le handshake TCP en trois étapes. Ensuite seulement, la requête HTTP peut être envoyée.",
      pivot: "Le flag <code>[S.]</code> signifie SYN + ACK. Le point seul <code>[.]</code> signifie ACK."
    },
    {
      id: 'm13-e17',
      title: 'Voir les interfaces en une ligne',
      context: "Vous voulez un format compact pour un rapport ou un script.",
      task: "Affichez les interfaces avec <code>ip -br a</code>.",
      hint: "Utilisez <code>ip -br a</code>.",
      accept: [/^ip\s+-br\s+a$/i],
      solution: 'ip -br a',
      output: ['lo UNKNOWN 127.0.0.1/8', 'eth0 UP 10.10.10.100/24'],
      read: "Le format bref est pratique pour les scripts et les preuves. L'état UP/DOWN et le préfixe CIDR sont visibles d'un coup d'œil.",
      pivot: "Combinez avec <code>grep UP</code> pour ne garder que les interfaces actives."
    },
    {
      id: 'm13-e18',
      title: 'Retrouver les ports standards',
      context: "Le fichier <code>/etc/services</code> associe les noms de services aux ports.",
      task: "Affichez les lignes du fichier correspondant à <code>http</code> et <code>https</code>.",
      hint: "Utilisez <code>grep -E '^http|^https' /etc/services</code>.",
      accept: [/^grep\s+-E\s+["']?\^http\|\^https["']?\s+\/etc\/services$/i],
      solution: "grep -E '^http|^https' /etc/services",
      output: [
        'http            80/tcp    www',
        'https           443/tcp   https'
      ],
      read: "Le fichier confirme les ports standards. Un service peut néanmoins écouter sur un autre port : c'est la configuration réelle qui compte.",
      pivot: "Vérifiez avec <code>ss -tulpn</code> le port réellement utilisé par le service."
    },
    {
      id: 'm13-e19',
      title: 'Scanner trois ports TCP',
      context: "Vous devez vérifier quels services web sont exposés sur une cible de lab.",
      task: "Lancez un scan TCP SYN sur les ports 22, 80 et 443 de <code>10.10.10.10</code>.",
      hint: "Utilisez <code>nmap -sS -p 22,80,443 10.10.10.10</code>. Si vous n'avez pas les droits root, utilisez <code>-sT</code>.",
      accept: [/^nmap\s+-s[ST]\s+-p\s*22,80,443\s+10\.10\.10\.10$/i],
      solution: 'nmap -sS -p 22,80,443 10.10.10.10',
      output: [
        '22/tcp  open  ssh',
        '80/tcp  open  http',
        '443/tcp open  https'
      ],
      read: "Trois ports ouverts. Un scan SYN (<code>-sS</code>) est plus discret qu'un scan connecté (<code>-sT</code>), mais nécessite root.",
      pivot: "Identifiez les versions avec <code>nmap -sV</code> avant de conclure à une vulnérabilité."
    },
    {
      id: 'm13-e20',
      title: 'Scanner le DNS en UDP',
      context: "DNS utilise principalement UDP sur le port 53. Un scan TCP ne suffit pas.",
      task: "Lancez un scan UDP du port 53 de <code>10.10.10.53</code>.",
      hint: "Utilisez <code>nmap -sU -p 53 10.10.10.53</code>.",
      accept: [/^nmap\s+-sU\s+-p\s*53\s+10\.10\.10\.53$/i],
      solution: 'nmap -sU -p 53 10.10.10.53',
      output: ['53/udp open domain'],
      read: "Le port UDP 53 est ouvert. Un scan UDP est plus lent et moins fiable qu'un scan TCP, car l'absence de réponse peut signifier ouvert ou filtré.",
      pivot: "Confirmez avec une vraie requête DNS : <code>dig @10.10.10.53 example.lab</code>."
    },
    {
      id: 'm13-e21',
      title: 'Tester une API HTTP',
      context: "Le service web expose une route de santé sur <code>/api/health</code>.",
      task: "Récupérez le contenu de <code>http://10.10.10.10/api/health</code>.",
      hint: "Utilisez <code>curl -s http://10.10.10.10/api/health</code>.",
      accept: [/^curl\s+-s\s+http:\/\/10\.10\.10\.10\/api\/health$/i],
      solution: 'curl -s http://10.10.10.10/api/health',
      output: ['{"status":"ok","service":"atlas-api","version":"2.3"}'],
      read: "L'API répond en JSON et expose sa version. Une route de santé est utile pour le diagnostic, mais peut révéler des informations internes.",
      pivot: "Vérifiez si la route est accessible sans authentification et si elle expose d'autres détails."
    },
    {
      id: 'm13-e22',
      title: 'Relire une capture DNS existante',
      context: "Une capture <code>evidence/dns.pcap</code> a été enregistrée pendant le lab.",
      task: "Lisez la capture et filtrez le port 53 sans résolution de noms.",
      hint: "Utilisez <code>tcpdump -r evidence/dns.pcap -nn port 53</code>.",
      accept: [/^tcpdump\s+-r\s+evidence\/dns\.pcap\s+-nn\s+port\s+53$/i],
      solution: 'tcpdump -r evidence/dns.pcap -nn port 53',
      output: [
        'IP 10.10.10.100.53124 > 10.10.10.53.53: UDP, length 38',
        'IP 10.10.10.53.53 > 10.10.10.100.53124: UDP, length 54'
      ],
      read: "La relecture d'une capture permet d'analyser après coup sans rejouer le trafic. C'est une preuve reproductible et un support pédagogique idéal.",
      pivot: "Comparez l'heure des paquets avec les logs du serveur DNS pour corréler une panne."
    }
  ],
  quiz: 'q13'
};
