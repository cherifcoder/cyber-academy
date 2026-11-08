/**
 * Quiz des modules Réseau & Linux (m13 à m16).
 * Chaque entrée est un quiz complet : moduleId, title, pass et 10 questions.
 */

export const RF_QUIZZES = {
  q13: {
    moduleId: 'm13',
    title: "Évaluation — Fondamentaux réseau",
    pass: 70,
    questions: [
      {
        q: "Sur une machine, qu'est-ce qui identifie précisément un service parmi plusieurs ?",
        options: [
          "L'adresse IP",
          "Le port",
          "L'adresse MAC",
          "Le nom d'hôte"
        ],
        answer: 1,
        explain: "L'adresse IP identifie la machine, le port identifie le service sur cette machine. Un serveur peut ainsi exposer HTTP sur 80, HTTPS sur 443 et SSH sur 22 avec la même IP."
      },
      {
        q: "Quel protocole de transport garantit la livraison, l'ordre et la retransmission des données ?",
        options: ["UDP", "ICMP", "TCP", "ARP"],
        answer: 2,
        explain: "TCP est orienté connexion : handshake, numéros de séquence, accusés de réception et retransmission. UDP envoie sans garantie, ce qui convient à la voix ou au DNS."
      },
      {
        q: "Quel est le rôle principal du DNS ?",
        options: [
          "Attribuer automatiquement des adresses IP",
          "Traduire un nom de domaine en adresse IP",
          "Chiffrer le trafic web",
          "Router les paquets entre réseaux"
        ],
        answer: 1,
        explain: "Le DNS est l'annuaire d'Internet : il traduit les noms lisibles par les humains en adresses IP utilisables par les machines. L'attribution d'adresses est le rôle de DHCP."
      },
      {
        q: "Pourquoi utilise-t-on UDP pour la voix, la vidéo ou les jeux en ligne ?",
        options: [
          "Parce qu'il chiffre automatiquement les données",
          "Parce qu'il garantit chaque paquet",
          "Parce que sa faible latence est préférable à une retransmission tardive",
          "Parce qu'il utilise les ports privilégiés"
        ],
        answer: 2,
        explain: "En temps réel, attendre la retransmission d'un paquet déjà dépassé est pire que de le perdre. UDP privilégie la rapidité, quitte à perdre quelques paquets."
      },
      {
        q: "À quelle couche du modèle OSI se situe le protocole IP ?",
        options: ["Couche 2 — Liaison", "Couche 3 — Réseau", "Couche 4 — Transport", "Couche 7 — Application"],
        answer: 1,
        explain: "IP appartient à la couche 3, la couche réseau : elle adresse les paquets et permet de les acheminer entre réseaux. TCP et UDP sont en couche 4."
      },
      {
        q: "Quelle commande liste les sockets en écoute avec les processus associés sur Linux ?",
        options: ["ip route", "ss -tulpn", "dig +short", "traceroute -n"],
        answer: 1,
        explain: "<code>ss -tulpn</code> affiche les sockets TCP et UDP, les adresses d'écoute et les processus. <code>ip route</code> concerne le routage, <code>dig</code> le DNS."
      },
      {
        q: "Que désigne l'adresse 127.0.0.1 ?",
        options: [
          "La passerelle par défaut du réseau",
          "Le serveur DNS du fournisseur",
          "La boucle locale, c'est-à-dire la machine elle-même",
          "Une adresse publique de documentation"
        ],
        answer: 2,
        explain: "127.0.0.1 est la boucle locale. Un service qui écoute uniquement sur cette adresse n'est accessible que depuis la machine elle-même, pas depuis le réseau."
      },
      {
        q: "Quel est le rôle de DHCP ?",
        options: [
          "Traduire les noms de domaine",
          "Attribuer automatiquement une adresse IP, un masque, une passerelle et des DNS",
          "Chiffrer les connexions SSH",
          "Compter les paquets perdus"
        ],
        answer: 1,
        explain: "DHCP fournit une configuration réseau complète pour une durée limitée (le bail). Sans serveur DHCP, l'adresse doit être configurée manuellement."
      },
      {
        q: "Quel est l'ordre correct du handshake TCP ?",
        options: [
          "ACK, SYN, SYN-ACK",
          "SYN, SYN-ACK, ACK",
          "SYN-ACK, ACK, SYN",
          "SYN, ACK, FIN"
        ],
        answer: 1,
        explain: "Le client envoie SYN, le serveur répond SYN-ACK, le client confirme par ACK. La connexion est alors établie et les données peuvent circuler."
      },
      {
        q: "Un ping vers un serveur web réussit. Que pouvez-vous en conclure ?",
        options: [
          "Le service HTTPS fonctionne forcément",
          "La machine répond à ICMP, mais le service web peut être arrêté ou filtré",
          "Le DNS est correctement configuré",
          "Le pare-feu est totalement désactivé"
        ],
        answer: 1,
        explain: "ping teste ICMP, pas HTTP ni SSH. Une machine peut répondre au ping alors que le port 443 est fermé, ou bloquer le ping alors que le site fonctionne."
      }
    ]
  },

  q14: {
    moduleId: 'm14',
    title: "Évaluation — Adressage IP & sous-réseaux",
    pass: 70,
    questions: [
      {
        q: "Combien de bits contient une adresse IPv4 ?",
        options: ["16", "32", "64", "128"],
        answer: 1,
        explain: "IPv4 utilise 32 bits, soit quatre octets de 8 bits. IPv6 utilise 128 bits, ce qui explique sa capacité bien plus grande."
      },
      {
        q: "Combien d'adresses hôtes utilisables offre un réseau /24 ?",
        options: ["256", "254", "255", "128"],
        answer: 1,
        explain: "Un /24 contient 2^8 = 256 adresses. On retire l'adresse de réseau et le broadcast, soit 254 adresses utilisables."
      },
      {
        q: "Quelle est l'adresse réseau de 192.168.1.130/25 ?",
        options: ["192.168.1.0", "192.168.1.64", "192.168.1.128", "192.168.1.255"],
        answer: 2,
        explain: "Un /25 découpe le dernier octet en blocs de 128 : .0 et .128. 130 tombe dans le bloc .128. Le broadcast est .255 et la plage utile va de .129 à .254."
      },
      {
        q: "Quel est le broadcast du réseau 10.0.0.0/26 ?",
        options: ["10.0.0.31", "10.0.0.63", "10.0.0.127", "10.0.0.255"],
        answer: 1,
        explain: "Un /26 contient 64 adresses. Le bloc va de .0 à .63 ; .63 est le broadcast et .1 à .62 sont utilisables."
      },
      {
        q: "Quelle plage est une plage privée IPv4 ?",
        options: ["8.8.8.0/24", "172.16.0.0/12", "203.0.113.0/24", "1.1.1.0/24"],
        answer: 1,
        explain: "Les plages privées sont 10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16. La plage 203.0.113.0/24 est réservée à la documentation."
      },
      {
        q: "Combien d'adresses hôtes utilisables offre un lien /30 ?",
        options: ["0", "2", "4", "6"],
        answer: 1,
        explain: "Un /30 contient 4 adresses : le réseau, deux hôtes utilisables et le broadcast. C'est le format classique d'un lien point à point."
      },
      {
        q: "Dans le dernier octet, de combien avance un bloc /27 ?",
        options: ["16", "32", "64", "128"],
        answer: 1,
        explain: "Le masque /27 vaut 255.255.255.224. La taille du bloc est 256 − 224 = 32 : les sous-réseaux commencent à .0, .32, .64, etc."
      },
      {
        q: "Que signifie VLSM ?",
        options: [
          "Un découpage où tous les sous-réseaux ont la même taille",
          "L'utilisation de masques de tailles différentes selon les besoins",
          "Un protocole de routage IPv6",
          "Une méthode de chiffrement des adresses"
        ],
        answer: 1,
        explain: "VLSM (Variable Length Subnet Mask) adapte la taille du masque au besoin de chaque segment : un grand bloc pour les utilisateurs, un /30 pour un lien WAN."
      },
      {
        q: "Quelle adresse ne doit jamais être attribuée à une machine dans un réseau IPv4 classique ?",
        options: [
          "La première adresse utilisable",
          "La dernière adresse utilisable",
          "L'adresse de broadcast",
          "Une adresse attribuée par DHCP"
        ],
        answer: 2,
        explain: "L'adresse de broadcast est réservée à la diffusion vers tous les hôtes. L'adresse de réseau l'est aussi. Les deux extrémités de la plage utilisable, elles, sont attribuables."
      },
      {
        q: "Combien de bits contient une adresse IPv6 ?",
        options: ["32", "64", "96", "128"],
        answer: 3,
        explain: "IPv6 utilise 128 bits, écrits en huit groupes hexadécimaux. Un réseau local typique est en /64, ce qui laisse un espace d'adressage immense."
      }
    ]
  },

  q15: {
    moduleId: 'm15',
    title: "Évaluation — Linux fondamentaux & commandes",
    pass: 70,
    questions: [
      {
        q: "Que fait la commande pwd ?",
        options: [
          "Elle liste les fichiers du dossier courant",
          "Elle affiche le chemin du dossier courant",
          "Elle change de dossier",
          "Elle affiche les processus"
        ],
        answer: 1,
        explain: "pwd signifie « print working directory » : elle affiche le chemin absolu du dossier où vous vous trouvez. C'est le réflexe avant toute commande destructive."
      },
      {
        q: "Quelle option de ls affiche aussi les fichiers cachés et les détails ?",
        options: ["ls -h", "ls -la", "ls -R", "ls -t"],
        answer: 1,
        explain: "<code>-l</code> donne le format détaillé et <code>-a</code> inclut les fichiers commençant par un point, comme <code>.bashrc</code>. On peut aussi écrire <code>ls -l -a</code>."
      },
      {
        q: "Quelle commande cherche un motif dans un fichier ou un flux ?",
        options: ["find", "grep", "cat", "chmod"],
        answer: 1,
        explain: "grep filtre les lignes qui contiennent un motif. find cherche des fichiers par nom, type ou date. Les deux sont complémentaires : find localise, grep filtre le contenu."
      },
      {
        q: "Que fait le symbole | dans une commande ?",
        options: [
          "Il écrit la sortie dans un fichier",
          "Il envoie la sortie d'une commande vers l'entrée de la suivante",
          "Il exécute la commande en arrière-plan",
          "Il commente la fin de la ligne"
        ],
        answer: 1,
        explain: "Le pipe relie deux commandes : <code>ps aux | grep ssh</code> envoie la liste des processus dans grep. La redirection <code>&gt;</code> écrit dans un fichier."
      },
      {
        q: "À quoi sert tail -f /var/log/syslog ?",
        options: [
          "À supprimer le journal",
          "À suivre les nouvelles lignes du journal en temps réel",
          "À compter les lignes",
          "À changer les permissions du journal"
        ],
        answer: 1,
        explain: "<code>-f</code> suit le fichier : les nouvelles lignes s'affichent au fur et à mesure. C'est très utile pour observer un service pendant un test."
      },
      {
        q: "Quel est le rôle de systemctl ?",
        options: [
          "Gérer les services systemd (statut, démarrage, redémarrage)",
          "Lister les fichiers d'un dossier",
          "Créer des archives compressées",
          "Résoudre des noms DNS"
        ],
        answer: 0,
        explain: "systemctl pilote les services gérés par systemd : <code>status</code>, <code>start</code>, <code>stop</code>, <code>restart</code>, <code>enable</code>. Les journaux se lisent avec journalctl."
      },
      {
        q: "Quelle commande affiche l'espace libre par système de fichiers ?",
        options: ["du -sh", "df -h", "ls -lh", "free -h"],
        answer: 1,
        explain: "df regarde l'occupation des systèmes de fichiers. du mesure la taille des fichiers et dossiers. free concerne la mémoire vive."
      },
      {
        q: "Que fait tar -czf archive.tgz dossier ?",
        options: [
          "Il extrait l'archive",
          "Il liste le contenu de l'archive",
          "Il crée une archive compressée avec gzip",
          "Il supprime le dossier après archivage"
        ],
        answer: 2,
        explain: "<code>c</code> crée, <code>z</code> compresse avec gzip, <code>f</code> indique le nom de l'archive. Pour extraire, on utilise <code>-xzf</code> ; pour lister, <code>-tzf</code>."
      },
      {
        q: "Qu'est-ce qu'un chemin absolu ?",
        options: [
          "Un chemin qui commence par / et ne dépend pas du dossier courant",
          "Un chemin qui commence par ~",
          "Un chemin qui contient des espaces",
          "Un chemin qui n'existe pas encore"
        ],
        answer: 0,
        explain: "Un chemin absolu part de la racine <code>/</code>, par exemple <code>/etc/hosts</code>. Un chemin relatif comme <code>notes/journal.md</code> dépend du dossier courant."
      },
      {
        q: "Pourquoi faut-il se méfier de rm -rf avec une variable non vérifiée ?",
        options: [
          "Parce que la commande est toujours lente",
          "Parce qu'une variable vide ou mal formée peut cibler un dossier critique sans confirmation",
          "Parce que rm -rf ne fonctionne que sur les fichiers cachés",
          "Parce que la commande modifie les permissions"
        ],
        answer: 1,
        explain: "Il n'y a pas de corbeille avec rm. Si la variable est vide, la commande peut viser la racine ou un dossier important. Vérifiez toujours le chemin avec echo ou pwd avant."
      }
    ]
  },

  q16: {
    moduleId: 'm16',
    title: "Évaluation — Utilisateurs, groupes & permissions",
    pass: 70,
    questions: [
      {
        q: "Dans /etc/passwd, quel champ contient l'UID ?",
        options: ["Le premier", "Le deuxième", "Le troisième", "Le dernier"],
        answer: 2,
        explain: "Les champs sont : nom, mot de passe (x), UID, GID, description, dossier personnel, shell. L'UID est donc le troisième champ."
      },
      {
        q: "Quel est l'UID du compte root ?",
        options: ["1", "100", "1000", "0"],
        answer: 3,
        explain: "root possède l'UID 0. C'est ce numéro, et non le nom, qui déclenche les privilèges administratifs dans le noyau."
      },
      {
        q: "À quelle valeur octale correspond la permission rwxr-x--- ?",
        options: ["750", "755", "640", "700"],
        answer: 0,
        explain: "rwx = 7, r-x = 5, --- = 0, donc 750. Le propriétaire peut tout faire, le groupe lire et traverser, les autres rien."
      },
      {
        q: "Que signifie la permission 640 sur un fichier ?",
        options: [
          "Propriétaire lecture+écriture, groupe lecture, autres aucun droit",
          "Tout le monde peut lire, seul le propriétaire écrit",
          "Propriétaire lecture seule, groupe écriture",
          "Le fichier est exécutable par tous"
        ],
        answer: 0,
        explain: "6 = rw pour le propriétaire, 4 = r pour le groupe, 0 = aucun droit pour les autres. C'est la configuration typique d'un document interne partagé avec une équipe."
      },
      {
        q: "Quelle est la différence entre usermod -G et usermod -aG ?",
        options: [
          "Aucune, les deux ajoutent le groupe",
          "-G remplace tous les groupes secondaires, -aG ajoute sans les écraser",
          "-aG supprime le groupe, -G le crée",
          "-G ne fonctionne que pour root"
        ],
        answer: 1,
        explain: "<code>-G</code> fixe la liste complète des groupes secondaires et peut donc retirer sudo ou d'autres accès. <code>-aG</code> ajoute le groupe en conservant l'existant."
      },
      {
        q: "Quel est l'effet d'un binaire SUID root ?",
        options: [
          "Il s'exécute avec l'identité du propriétaire, ici root",
          "Il devient automatiquement chiffré",
          "Il ne peut être lu que par root",
          "Il est exécuté à chaque démarrage"
        ],
        answer: 0,
        explain: "Le SUID fait prendre au processus l'identité du propriétaire du fichier. Un binaire SUID root mal conçu ou inattendu est une voie classique d'élévation de privilèges."
      },
      {
        q: "À quoi sert le sticky bit sur /tmp ?",
        options: [
          "À empêcher tout le monde d'écrire dans /tmp",
          "À ce que chacun ne puisse supprimer que ses propres fichiers",
          "À chiffrer les fichiers temporaires",
          "À monter /tmp en lecture seule"
        ],
        answer: 1,
        explain: "Avec le sticky bit, un utilisateur peut créer des fichiers dans le dossier partagé mais ne peut supprimer ou renommer que les siens. C'est le <code>t</code> final de <code>drwxrwxrwt</code>."
      },
      {
        q: "À quoi sert getfacl ?",
        options: [
          "À créer un utilisateur",
          "À lire les listes de contrôle d'accès étendues d'un fichier",
          "À changer le mot de passe",
          "À lister les services actifs"
        ],
        answer: 1,
        explain: "getfacl affiche les ACL, y compris les droits nommés pour un utilisateur précis. setfacl les modifie. Une ACL peut expliquer un accès que <code>ls -l</code> ne montre pas."
      },
      {
        q: "Que recherche find / -perm -4000 -type f 2>/dev/null ?",
        options: [
          "Les fichiers exécutables par tous",
          "Les fichiers SUID",
          "Les dossiers accessibles en écriture",
          "Les fichiers modifiés récemment"
        ],
        answer: 1,
        explain: "<code>-4000</code> cible le bit SUID. <code>-2000</code> cible le SGID, <code>-o+w</code> l'écriture pour les autres. <code>2&gt;/dev/null</code> masque seulement les erreurs de permission."
      },
      {
        q: "Qu'applique le principe du moindre privilège ?",
        options: [
          "Donner tous les droits à l'administrateur pour simplifier",
          "Donner uniquement les droits nécessaires à la tâche, pour la durée nécessaire",
          "Supprimer tous les comptes après usage",
          "Désactiver les groupes et utiliser uniquement root"
        ],
        answer: 1,
        explain: "Le moindre privilège limite l'impact d'une erreur ou d'un compte compromis. Concrètement : pas de sudo global, des groupes ciblés, des droits de fichier minimaux et des ACL retirées après usage."
      }
    ]
  }
};
