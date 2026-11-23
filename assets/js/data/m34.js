export default {
  "id": "m34",
  "num": 34,
  "title": "Écouteurs connectés et audio sans fil — TWS, LE Audio, Fast Pair",
  "short": "Audio & TWS",
  "icon": "🎧",
  "xp": 460,
  "duration": 170,
  "summary": "Cours complet en français sur la sécurité des écouteurs connectés : A2DP, AVRCP, HFP, LE Audio LC3, Fast Pair, GATT et confidentialité, avec 10 exercices interactifs, 10 labs, 10 CTF et des scénarios sur matériel personnel uniquement.",
  "objectives": [
    "Décrire la chaîne audio Bluetooth et la différence entre A2DP, AVRCP et HFP.",
    "Expliquer le rôle de LC3, BIG et BASS dans le LE Audio.",
    "Cartographier les profils SDP et les services GATT d'un casque de lab.",
    "Lire modèle, firmware, numéro de série et batterie via les caractéristiques standard.",
    "Analyser une capture HCI sans enregistrer ni reconstruire de contenu audio.",
    "Comprendre Fast Pair, les identifiants de suivi et les risques d'appairage indésirable.",
    "Vérifier qu'une mise à jour OTA est signée et protégée.",
    "Réaliser 10 labs audio avec preuves et empreintes SHA-256.",
    "Résoudre 10 CTF audio avec flags, commandes et remédiation.",
    "Rédiger un rapport de sécurité respectant la vie privée."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 34 — Écouteurs connectés, casques TWS et audio sans fil</strong>. Ce cours décrit la chaîne audio Bluetooth, les profils A2DP/AVRCP/HFP, les nouveaux profils LE Audio, les mécanismes d'appairage rapide (Fast Pair, appairage propriétaire), les informations exposées par GATT et les contre-mesures. Les labs utilisent exclusivement votre propre casque, vos écouteurs de test et un banc isolé."
    },
    {
      "t": "callout",
      "v": "danger",
      "title": "Cadre légal et vie privée",
      "x": "Toutes les techniques de ce module sont réservées à un laboratoire isolé : vos propres appareils, des devices de test achetés pour l'occasion, une cage de Faraday ou un banc RF atténué, et des cibles intentionnellement vulnérables. N'écoutez, n'interceptez, ne brouillez, n'appariez ni ne modifiez jamais un appareil appartenant à autrui sans autorisation écrite préalable. La réglementation radio (ANFR/FCC/ETSI) impose des bandes, des puissances et des cycles d'utilisation : hors lab blindé, émettre sans licence est interdit. Le brouillage (jammer) est formellement proscrit hors enceinte blindée et cadre réglementaire. Un casque est un capteur : micro, capteurs de mouvement, identifiants de compte et historique d'appairage. Aucune capture ne doit contenir de conversation, de donnée biométrique ou d'identifiant tiers. N'analyse que votre propre matériel et supprimez les enregistrements dès que l'apprentissage est terminé."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Durée estimée : 170 min · XP : 460 · 10 exercices · 10 labs · 10 CTF",
      "x": "Matériel : écouteurs TWS ou casque Bluetooth à vous, téléphone de test avec « HCI snoop log » activable, dongle Bluetooth sur VM Linux, nRF Connect et Wireshark."
    },
    {
      "t": "h",
      "x": "34.1 Écosystème audio sans fil et chaîne de traitement"
    },
    {
      "t": "p",
      "x": "Un casque Bluetooth n'est pas un simple haut-parleur : c'est un système embarqué avec contrôleur radio, micro, DSP, batterie, firmware évolutif et souvent une application mobile. Le trajet audio dépend du profil utilisé. En <strong>A2DP</strong>, le téléphone encode le flux (SBC, AAC, aptX, LDAC) et le casque le décode. En <strong>HFP</strong> pour la voix, un lien <strong>SCO/eSCO</strong> séparé transporte la voix, et des commandes AT passent sur RFCOMM. En <strong>LE Audio</strong>, le codec <strong>LC3</strong> et les flux isochrones (ISO/BIG) remplacent cette architecture."
    },
    {
      "t": "table",
      "head": [
        "Élément",
        "Rôle",
        "Protocole / couche",
        "Ce qui est observable en lab"
      ],
      "rows": [
        [
          "Téléphone / source",
          "Encode et envoie l'audio",
          "A2DP sur AVDTP/L2CAP",
          "Paquets ACL, codec, débit"
        ],
        [
          "Lien musical",
          "Transport stéréo haute qualité",
          "A2DP + SBC/AAC/aptX/LDAC",
          "Taille des paquets, intervalle"
        ],
        [
          "Lien vocal",
          "Voix micro + commandes",
          "HFP + SCO/eSCO + AT",
          "Établissement SCO, commandes AT"
        ],
        [
          "Contrôle",
          "Lecture, pause, volume, pistes",
          "AVRCP via AVCTP",
          "AV/C commands, métadonnées"
        ],
        [
          "Écouteurs TWS",
          "Deux buddies synchronisés",
          "Lien propriétaire + BLE",
          "Rôle master/slave, batterie, état boîtier"
        ],
        [
          "Appairage rapide",
          "Connexion en un geste",
          "Fast Pair (GATT 0xFE2C), propriétaire",
          "Modèle, clé de compte, publicités"
        ],
        [
          "Application mobile",
          "Réglages, firmware, EQ",
          "GATT / BLE + cloud",
          "Caractéristiques, endpoints cloud"
        ]
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Choisir le casque de lab",
          "p": "Utilisez un modèle à vous, avec firmware à jour. Notez le modèle, la version firmware et l'adresse BD_ADDR."
        },
        {
          "h": "Étape 2 — Préparer le téléphone de test",
          "p": "Activez le « HCI snoop log » dans les options développeur, puis redémarrez. Ce téléphone ne doit contenir aucun compte personnel."
        },
        {
          "h": "Étape 3 — Démarrer la capture",
          "p": "Sur la VM : btmon. Sur le téléphone : début de l'enregistrement HCI avant l'appairage."
        },
        {
          "h": "Étape 4 — Réaliser un scénario simple",
          "p": "Allumer, appairer, lire un son de test silencieux généré localement, changer le volume, éteindre."
        },
        {
          "h": "Étape 5 — Analyser sans écouter",
          "p": "Lisez les opcodes et les GATT dans la trace. N'extrayez aucun contenu audio réel."
        },
        {
          "h": "Étape 6 — Nettoyer",
          "p": "Désactivez le snoop log, supprimez les captures, désapparez le casque du téléphone de test."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Initialisation d'un banc audio sans fil",
      "x": "# LAB AUDIO — matériel personnel de test uniquement\nmkdir -p lab/m34/{gatt,hci,profiles,preuves,rapport}\ndate -Iseconds | tee lab/m34/preuves/start.txt\n\n# VM : interface + capture HCI locale\nsudo hciconfig hci0 up\nhciconfig hci0 | tee lab/m34/hci/hci0.txt\nsudo btmon -w lab/m34/hci/session.btsnoop &\n\n# Téléphone de test : activer \"HCI snoop log\" (Options développeur)\n# Puis : Paramètres > Système > Options développeur > HCI snoop log = ON\n# Redémarrer le téléphone avant la capture\n\n# Informations de base sur le casque de lab (après appairage)\nbluetoothctl devices | tee lab/m34/profiles/devices.txt\nTARGET=\"AA:BB:CC:DD:EE:FF\"     # adresse du casque de LAB\nbluetoothctl info \"$TARGET\" | tee lab/m34/profiles/info.txt\n\nsha256sum lab/m34/hci/hci0.txt lab/m34/profiles/info.txt | tee lab/m34/preuves/init.sha256"
    },
    {
      "t": "glossary",
      "title": "Vocabulaire audio Bluetooth",
      "intro": "Les termes rencontrés dans les captures et dans les fiches constructeur.",
      "items": [
        {
          "term": "A2DP",
          "full": "Advanced Audio Distribution Profile",
          "def": "Profil de diffusion audio stéréo haute qualité.",
          "use": "C'est le profil utilisé pour écouter de la musique.",
          "ex": "sdptool browse <ADDR> | grep A2DP"
        },
        {
          "term": "AVRCP",
          "full": "Audio/Video Remote Control Profile",
          "def": "Commandes lecture/pause/volume et métadonnées.",
          "use": "Les touches du casque envoient des commandes AV/C.",
          "ex": "AV/C commands dans HCI"
        },
        {
          "term": "HFP",
          "full": "Hands-Free Profile",
          "def": "Profil mains libres pour la voix et le micro.",
          "use": "Il coexiste avec A2DP et utilise RFCOMM + SCO.",
          "ex": "AT+CHUP, AT+ATA"
        },
        {
          "term": "SCO / eSCO",
          "full": "Synchronous Connection Oriented",
          "def": "Lien synchronisé transportant la voix.",
          "use": "Sa qualité est inférieure à A2DP mais sa latence est faible.",
          "ex": "bthci_evt SCO dans Wireshark"
        },
        {
          "term": "LC3",
          "full": "Low Complexity Communication Codec",
          "def": "Codec audio du LE Audio, efficace à faible débit.",
          "use": "Il remplace SBC dans les nouveaux profils.",
          "ex": "LE Audio / ISO"
        },
        {
          "term": "LE Audio",
          "full": "LE Audio",
          "def": "Suite de profils Bluetooth LE pour l'audio : LC3, BIG, BASS.",
          "use": "Apporte multi-flux, broadcast et meilleure autonomie.",
          "ex": "BIG, BASS, ISO"
        },
        {
          "term": "Fast Pair",
          "full": "Google Fast Pair",
          "def": "Mécanisme BLE d'appairage rapide basé sur un service GATT dédié.",
          "use": "Un modèle et une clé de compte peuvent être exposés.",
          "ex": "Service 0xFE2C"
        },
        {
          "term": "TWS",
          "full": "True Wireless Stereo",
          "def": "Deux écouteurs sans fil synchronisés, souvent avec un boîtier de charge.",
          "use": "Le lien entre les deux écouteurs est propriétaire.",
          "ex": "État boîtier, batterie, rôle principal"
        }
      ]
    },
    {
      "t": "h",
      "x": "34.2 Protocoles audio : A2DP, AVRCP, HFP et LE Audio"
    },
    {
      "t": "p",
      "x": "Les profils classiques reposent sur BR/EDR. <strong>AVDTP</strong> transporte le flux A2DP (découverte, négociation de capacités, établissement de stream). <strong>AVCTP</strong> transporte les commandes AVRCP. <strong>HFP</strong> ajoute des commandes AT sur RFCOMM et un canal SCO pour la voix. Le passage à <strong>LE Audio</strong> déplace tout cela sur BLE, avec le codec LC3, les groupes isochrones (<strong>BIG</strong>) et le service de diffusion <strong>BASS</strong>."
    },
    {
      "t": "table",
      "head": [
        "Profil",
        "Transport",
        "Données",
        "Point de sécurité"
      ],
      "rows": [
        [
          "A2DP",
          "AVDTP / L2CAP",
          "Flux audio compressé (SBC, AAC, aptX, LDAC)",
          "Le contenu est chiffré au lien si l'appairage est sécurisé"
        ],
        [
          "AVRCP",
          "AVCTP / L2CAP",
          "Commandes et métadonnées (titre, artiste)",
          "Métadonnées visibles dans l'application, à minimiser"
        ],
        [
          "HFP",
          "RFCOMM + SCO",
          "Commandes AT, voix micro/haut-parleur",
          "Micro actif = surface de confidentialité"
        ],
        [
          "HOGP",
          "GATT / BLE",
          "Touches, capteurs, batterie",
          "Une characteristic non protégée peut injecter des commandes"
        ],
        [
          "LE Audio",
          "ISO AL / BIG / BASS",
          "Flux LC3, diffusion, répartition",
          "Gestion des clés de broadcast et du retour d'écoute"
        ]
      ]
    },
    {
      "t": "cmdref",
      "title": "Commandes et outils d'analyse audio",
      "intro": "Ces commandes ciblent votre casque de lab et votre téléphone de test. Elles ne capturent aucun contenu audio réel.",
      "items": [
        {
          "cmd": "bluetoothctl info <ADDR>",
          "tag": "informations",
          "what": "Affiche nom, alias, classe, profils et état de connexion du casque.",
          "gives": "UUID des profils, nom, puissance, état appairé.",
          "use": "Première étape après connexion du casque de lab.",
          "syntax": "bluetoothctl info <ADDR>",
          "example": "bluetoothctl info AA:BB:CC:DD:EE:FF",
          "read": "La liste UUID confirme A2DP/HFP/AVRCP."
        },
        {
          "cmd": "sdptool browse <ADDR>",
          "tag": "profils",
          "what": "Énumère les services BR/EDR du casque.",
          "gives": "Services A2DP, AVRCP, HFP et canaux RFCOMM.",
          "use": "Comparez avec la fiche constructeur.",
          "syntax": "sdptool browse <ADDR>",
          "example": "sdptool browse AA:BB:CC:DD:EE:FF",
          "read": "Un service inattendu (HID, debug) est à documenter."
        },
        {
          "cmd": "gatttool -b <ADDR> --primary",
          "tag": "GATT",
          "what": "Liste les services BLE exposés par le casque/boîtier.",
          "gives": "Batterie, Device Information, services propriétaires.",
          "use": "À utiliser pour cartographier l'application mobile.",
          "syntax": "gatttool -b <ADDR> --primary",
          "example": "gatttool -b AA:BB:CC:DD:EE:FF --primary",
          "read": "Le service 0xFE2C indique Fast Pair."
        },
        {
          "cmd": "btmon -w session.btsnoop",
          "tag": "capture",
          "what": "Enregistre les événements HCI pendant un scénario audio.",
          "gives": "Chronologie appairage, L2CAP, ATT, SCO.",
          "use": "Démarrez avant d'allumer le casque.",
          "syntax": "sudo btmon -w <fichier>",
          "example": "sudo btmon -w lab/m34/hci/scenario.btsnoop",
          "read": "Les filtres bthci_acl et btatt isolent les échanges utiles."
        },
        {
          "cmd": "tshark -r session.btsnoop -Y btatt",
          "tag": "analyse",
          "what": "Filtre les opérations ATT dans la capture.",
          "gives": "Handles lus/écrits, valeurs, notifications.",
          "use": "À utiliser après arrêt de la capture.",
          "syntax": "tshark -r <fichier> -Y btatt",
          "example": "tshark -r lab/m34/hci/scenario.btsnoop -Y btatt",
          "read": "Une écriture répétée sur un handle de firmware mérite une vérification."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Lecture des profils et des services d'un casque de lab",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\n\n# 1. Profils BR/EDR\nsdptool browse \"$TARGET\" | tee lab/m34/profiles/sdp.txt\ngrep -E 'Service Name|Service Class ID|Channel' lab/m34/profiles/sdp.txt\n\n# 2. Informations Bluetooth\nbluetoothctl info \"$TARGET\" | tee lab/m34/profiles/info.txt\n\n# 3. Services BLE (boîtier, appairage rapide, batterie)\ngatttool -b \"$TARGET\" --primary | tee lab/m34/gatt/primary.txt\n\n# 4. Unité d'information du périphérique (fabricant, modèle, firmware)\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A24   # Model Number\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A26   # Firmware Revision\n\n# 5. Comparaison avec la fiche constructeur attendue\necho \"Attendu: A2DP, AVRCP, HFP, HOGP, Battery\" > lab/m34/profiles/expected.txt\necho \"Observé:\" >> lab/m34/profiles/expected.txt\ngrep 'Service Name' lab/m34/profiles/sdp.txt >> lab/m34/profiles/expected.txt\ncat lab/m34/profiles/expected.txt"
    },
    {
      "t": "h",
      "x": "34.3 Appairage rapide, Fast Pair et suivi d'appareil"
    },
    {
      "t": "p",
      "x": "Les écouteurs modernes réduisent le frottement de l'appairage : <strong>Google Fast Pair</strong> utilise un service BLE (UUID 0xFE2C) diffusé par le boîtier ouvert. Le téléphone lit un identifiant de modèle, affiche une notification et échange une clé de compte. Le même mécanisme alimente le réseau « chercher mon appareil ». Côté Apple, les puces W1/H1 et le réseau « Localiser » remplissent un rôle comparable. Ces mécanismes améliorent l'usage mais posent des questions de confidentialité : identifiants stables, publicités BLE, localisation et synchronisation de compte."
    },
    {
      "t": "table",
      "head": [
        "Étape",
        "Ce qui circule",
        "Information exposée",
        "Défense"
      ],
      "rows": [
        [
          "Publicité BLE",
          "Service 0xFE2C + données de modèle",
          "Modèle du produit, état du boîtier",
          "Rotation des adresses, limitation des données"
        ],
        [
          "Notification de proximité",
          "Message poussé au téléphone",
          "Identifiant de modèle",
          "Confirmation utilisateur explicite"
        ],
        [
          "Appairage",
          "Échange de clés et de compte",
          "Clé de compte, identifiant",
          "Clés uniques par appareil, révocation"
        ],
        [
          "Suivi",
          "Publicités relayées par le réseau",
          "Position de l'objet",
          "Chiffrement, contrôle de l'utilisateur, désactivation possible"
        ],
        [
          "Mise à jour",
          "Firmware via GATT ou application",
          "Version, paquet de mise à jour",
          "Signature, vérification d'intégrité"
        ]
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Vulnérabilités connues de Fast Pair — esprit de la recherche",
      "x": "Des travaux de recherche ont montré que des implantations pouvaient accepter une demande d'appairage sans validation suffisante ou exposer des identifiants de modèle de façon trop stable. L'objectif pédagogique est de comprendre le principe : un mécanisme de convenance qui confond « proximité » et « autorisation » affaiblit le modèle de sécurité. Ne testez jamais ces scénarios sur des écouteurs tiers."
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Cartographier le service Fast Pair d'un boîtier de lab",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"   # boîtier de LAB uniquement\n\n# 1. Les publicités BLE révèlent-elles le service Fast Pair ?\ntimeout 10 sudo hcitool lescan --duplicates | tee lab/m34/gatt/adv.txt\n\n# 2. Services GATT exposés par le boîtier\ngatttool -b \"$TARGET\" --primary | tee lab/m34/gatt/fastpair_primary.txt\n\n# 3. Repérer UUID 0xFE2C (Fast Pair) et les services de batterie\ngrep -i -E 'fe2c|180f|180a|firmware|dfu' lab/m34/gatt/fastpair_primary.txt\n\n# 4. Lire les caractéristiques d'information (0x180A)\ngatttool -b \"$TARGET\" --characteristics | grep -i -E '2a24|2a25|2a26|2a29' \\\n  | tee lab/m34/gatt/device_info.txt\n\n# 5. Que vérifier dans un rapport ?\n# - présence d'un service de mise à jour non protégé\n# - identifiant de modèle lisible sans appairage\n# - rotation de l'adresse BLE"
    },
    {
      "t": "h",
      "x": "34.4 Capture et analyse d'un scénario audio"
    },
    {
      "t": "p",
      "x": "La capture HCI permet de voir l'ordre des événements sans enregistrer le son : publicité, connexion, échange SDP, établissement d'un stream A2DP, commandes AVRCP, établissement SCO pour la voix, puis déconnexion. Sur Android, le « HCI snoop log » produit un fichier btsnoop récupérable via <code>adb bugreport</code>. Sur Linux, btmon suffit. L'analyse consiste à corréler ces événements avec les actions effectuées pendant le scénario."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Préparer le scénario",
          "p": "Listez les actions : ouverture du boîtier, appairage, lecture d'un fichier silencieux de test, pause, appel fictif en lab, fermeture."
        },
        {
          "h": "Étape 2 — Démarrer les captures",
          "p": "btmon sur la VM, snoop log sur le téléphone de test."
        },
        {
          "h": "Étape 3 — Exécuter lentement",
          "p": "Marquez l'heure de chaque action dans un journal : la corrélation est essentielle."
        },
        {
          "h": "Étape 4 — Arrêter et extraire",
          "p": "Récupérez les deux fichiers et calculez leur empreinte."
        },
        {
          "h": "Étape 5 — Filtrer",
          "p": "bthci_cmd pour les commandes, btatt pour GATT, bthci_evt pour les événements de connexion et SCO."
        },
        {
          "h": "Étape 6 — Conclure",
          "p": "Décrivez ce qui est lisible sans authentification et proposez une contre-mesure."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Analyse d'une capture audio de lab",
      "x": "# 1. Chronologie des commandes HCI\ntshark -r lab/m34/hci/scenario.btsnoop -Y bthci_cmd \\\n  -T fields -e frame.time_relative -e bthci_cmd.opcode | head -40\n\n# 2. Événements de connexion et établissement SCO\ntshark -r lab/m34/hci/scenario.btsnoop -Y 'bthci_evt' \\\n  -T fields -e frame.time_relative -e _ws.col.Info | grep -i -E 'connect|sco|link' | head\n\n# 3. Opérations GATT (batterie, infos appareil, éventuel firmware)\ntshark -r lab/m34/hci/scenario.btsnoop -Y btatt \\\n  -T fields -e btatt.opcode -e btatt.handle -e btatt.value | head -30\n\n# 4. Volume de données par protocole\ncapinfos lab/m34/hci/scenario.btsnoop | tee lab/m34/preuves/capinfos.txt\n\n# 5. Intégrité\nsha256sum lab/m34/hci/scenario.btsnoop | tee lab/m34/preuves/audio.sha256\n\n# Sur Android (téléphone de test) :\n# adb bugreport bugreport.zip\n# unzip -p bugreport.zip FS/data/misc/bluetooth/logs/btsnoop_hci.log > lab/m34/hci/android.btsnoop"
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Ne pas confondre capture et écoute",
      "x": "Une trace HCI montre des métadonnées et des commandes. Elle ne doit jamais être utilisée pour reconstruire ou écouter une conversation. Si une capture contient des données vocales réelles, supprimez-la immédiatement : ce n'est pas un livrable de lab."
    },
    {
      "t": "h",
      "x": "Lab 01 — Inventaire du casque de lab"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier le modèle, le firmware et les profils d'un casque à vous.<br><strong>Environnement :</strong> Casque Bluetooth de lab, VM Linux."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "SDP et GATT sont deux annuaires complémentaires : l'un pour BR/EDR, l'autre pour BLE. Leur comparaison avec la fiche constructeur révèle les services superflus."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Appairer le casque",
          "p": "Depuis bluetoothctl, sur la VM de lab."
        },
        {
          "h": "Lire les informations",
          "p": "bluetoothctl info."
        },
        {
          "h": "Lister SDP",
          "p": "sdptool browse."
        },
        {
          "h": "Lister GATT",
          "p": "gatttool --primary."
        },
        {
          "h": "Comparer",
          "p": "Documenter les écarts."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 01",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\nbluetoothctl <<EOF\npower on\nagent on\npair $TARGET\nconnect $TARGET\nquit\nEOF\nbluetoothctl info \"$TARGET\" | tee lab/m34/lab01/info.txt\nsdptool browse \"$TARGET\" | grep 'Service Name' | tee lab/m34/lab01/profiles.txt\ngatttool -b \"$TARGET\" --primary | tee lab/m34/lab01/gatt.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> info.txt, profiles.txt, gatt.txt."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Désapparez le casque du téléphone personnel."
    },
    {
      "t": "h",
      "x": "Lab 02 — Lecture GATT de l'information appareil"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Lire modèle, fabricant et version firmware via 0x180A.<br><strong>Environnement :</strong> Casque de lab appairé."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Le service Device Information (0x180A) expose des caractéristiques standard : fabricant 0x2A29, modèle 0x2A24, numéro de série 0x2A25, firmware 0x2A26."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lister les caractéristiques",
          "p": "gatttool --characteristics."
        },
        {
          "h": "Lire le modèle",
          "p": "UUID 0x2A24."
        },
        {
          "h": "Lire le firmware",
          "p": "UUID 0x2A26."
        },
        {
          "h": "Vérifier",
          "p": "Un numéro de série lisible sans authentification est un signal."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 02",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --characteristics | tee lab/m34/lab02/chars.txt\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A24 | tee lab/m34/lab02/model.txt\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A26 | tee lab/m34/lab02/firmware.txt\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A25 | tee lab/m34/lab02/serial.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Valeurs lues et interprétées."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne publiez jamais le numéro de série dans un rapport."
    },
    {
      "t": "h",
      "x": "Lab 03 — Niveau de batterie et notifications"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Observer les mises à jour de batterie d'un casque de lab.<br><strong>Environnement :</strong> Casque exposant 0x180F / 0x2A19."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Le service Battery diffuse son niveau via une caractéristique notifiable. Activer le CCCD permet de recevoir les changements sans polling."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lire la batterie",
          "p": "UUID 0x2A19."
        },
        {
          "h": "Trouver le CCCD",
          "p": "Descripteur 0x2902."
        },
        {
          "h": "Activer les notifications",
          "p": "Écrire 0100."
        },
        {
          "h": "Observer",
          "p": "Brancher le casque pour voir une mise à jour."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 03",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A19 | tee lab/m34/lab03/battery_before.txt\ngatttool -b \"$TARGET\" --char-desc | grep -i 2902\ngatttool -b \"$TARGET\" -I <<'EOF'\nchar-write-req 0x0009 0100\nexit\nEOF\n# débrancher/rebrancher le casque de lab, puis observer les notifications\n# désactiver ensuite avec char-write-req 0x0009 0000"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Notifications de batterie reçues puis désactivées."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Aucune batterie d'appareil tiers ne doit être interrogée."
    },
    {
      "t": "h",
      "x": "Lab 04 — Commandes AVRCP dans HCI"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Repérer les commandes de contrôle lecture dans une capture.<br><strong>Environnement :</strong> Casque de lab + lecture d'un fichier audio silencieux local."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "AVRCP transporte les commandes AV/C sur AVCTP. Dans la trace HCI, elles apparaissent comme des paquets L2CAP avec un identifiant de transaction et un opcode de commande (play, pause, next)."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Démarrer btmon",
          "p": "Avant la lecture."
        },
        {
          "h": "Appuyer sur pause",
          "p": "Une seule fois, en notant l'heure."
        },
        {
          "h": "Arrêter",
          "p": "Après 5 secondes."
        },
        {
          "h": "Filtrer",
          "p": "bthci_acl et L2CAP."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 04",
      "x": "sudo btmon -w lab/m34/lab04/avrcp.btsnoop &\nsleep 2\n# Appuyer sur le bouton pause du casque de LAB une fois\nsleep 3\nsudo pkill -INT btmon || true\ntshark -r lab/m34/lab04/avrcp.btsnoop -Y 'bthci_acl || btl2cap' | head -30\ntshark -r lab/m34/lab04/avrcp.btsnoop -Y bthci_acl | grep -i -E 'l2cap|avrcp' | head"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Trace horodatée avec une commande de pause."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> N'utilisez qu'un fichier audio silencieux généré localement."
    },
    {
      "t": "h",
      "x": "Lab 05 — Établissement d'un flux A2DP"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Observer la négociation de capacités et le démarrage du stream.<br><strong>Environnement :</strong> Casque de lab, btmon."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "AVDTP négocie le codec et les paramètres (fréquence, canaux, taille de paquet) avant d'ouvrir un canal de streaming. La trace montre les messages SET_CONFIGURATION et START."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Capturer",
          "p": "Pendant la connexion du casque."
        },
        {
          "h": "Démarrer la lecture",
          "p": "Fichier de test silencieux."
        },
        {
          "h": "Filtrer",
          "p": "Paquets L2CAP vers le CID AVDTP."
        },
        {
          "h": "Documenter",
          "p": "Paramètres négociés."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 05",
      "x": "sudo btmon -w lab/m34/lab05/a2dp.btsnoop &\nsleep 1\nbluetoothctl connect AA:BB:CC:DD:EE:FF\nsleep 2\n# lecture locale silencieuse via paplay/ffplay sur un fichier généré\nsleep 2\nsudo pkill -INT btmon || true\ntshark -r lab/m34/lab05/a2dp.btsnoop -Y 'bthci_acl' \\\n  -T fields -e frame.time_relative -e _ws.col.Info | head -40"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Chronologie de connexion et de démarrage de flux."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Aucun contenu audio réel enregistré."
    },
    {
      "t": "h",
      "x": "Lab 06 — SCO et profil mains libres"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Comprendre la différence entre flux musical et flux vocal.<br><strong>Environnement :</strong> Casque de lab avec micro, scénario d'appel fictif."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "HFP utilise RFCOMM pour les commandes AT et SCO/eSCO pour la voix. Le passage en appel modifie le routage audio et la qualité : c'est observable dans la trace même sans enregistrer la voix."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Capturer",
          "p": "Avant le scénario."
        },
        {
          "h": "Déclencher un appel de test",
          "p": "Avec un numéro fictif, sans émettre de parole."
        },
        {
          "h": "Observer",
          "p": "Événements SCO dans bthci_evt."
        },
        {
          "h": "Raccrocher",
          "p": "Puis arrêter la capture."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 06",
      "x": "sudo btmon -w lab/m34/lab06/hfp.btsnoop &\nsleep 2\n# Déclencher un appel de test sur le téléphone de LAB, sans parler\n# Observer les événements SCO dans la capture\nsleep 5\nsudo pkill -INT btmon || true\ntshark -r lab/m34/lab06/hfp.btsnoop -Y bthci_evt \\\n  | grep -i -E 'sco|voice|connection' | head -20"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Événements SCO identifiés dans la trace."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne jamais enregistrer ni conserver de conversation."
    },
    {
      "t": "h",
      "x": "Lab 07 — Snoop log Android"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Récupérer une capture HCI depuis le téléphone de test.<br><strong>Environnement :</strong> Téléphone Android de test, option HCI snoop log activée."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Le snoop log enregistre les mêmes événements HCI que btmon, côté téléphone. Il complète la vue du dongle et permet de comparer les deux points d'observation."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Activer l'option",
          "p": "Options développeur."
        },
        {
          "h": "Redémarrer",
          "p": "Pour que le log démarre au boot."
        },
        {
          "h": "Réaliser le scénario",
          "p": "Appairage + lecture silencieuse."
        },
        {
          "h": "Extraitre le rapport",
          "p": "adb bugreport puis extraction du log."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 07",
      "x": "adb devices\nadb bugreport lab/m34/lab07/bugreport.zip\nunzip -l lab/m34/lab07/bugreport.zip | grep -i btsnoop | head\nunzip -p lab/m34/lab07/bugreport.zip \\\n  'FS/data/misc/bluetooth/logs/btsnoop_hci.log' \\\n  > lab/m34/lab07/android.btsnoop 2>/dev/null || true\ncapinfos lab/m34/lab07/android.btsnoop | head -10"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> android.btsnoop lisible par tshark."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Désactivez le snoop log juste après l'exercice."
    },
    {
      "t": "h",
      "x": "Lab 08 — Service Fast Pair"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Vérifier la présence du service 0xFE2C sur un boîtier de lab.<br><strong>Environnement :</strong> Écouteurs TWS de lab, boîtier ouvert."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Fast Pair announce un service GATT dédié en BLE. Sa présence n'est pas une faille, mais les données exposées avant appairage doivent être limitées au strict nécessaire."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Ouvrir le boîtier",
          "p": "À proximité du dongle de lab."
        },
        {
          "h": "Scanner",
          "p": "hcitool lescan."
        },
        {
          "h": "Lister les services",
          "p": "gatttool --primary."
        },
        {
          "h": "Vérifier",
          "p": "Présence de FE2C et d'un service de debug."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 08",
      "x": "timeout 10 sudo hcitool lescan --duplicates | tee lab/m34/lab08/adv.txt\nTARGET=\"AA:BB:CC:DD:EE:FF\"   # adresse du boîtier de LAB\ngatttool -b \"$TARGET\" --primary | tee lab/m34/lab08/primary.txt\ngrep -i -E 'fe2c|dfu|debug|180f' lab/m34/lab08/primary.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> primary.txt et conclusion sur les services exposés."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne vous connectez jamais à des écouteurs trouvés dans la rue."
    },
    {
      "t": "h",
      "x": "Lab 09 — Recherche de service de mise à jour"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier un service DFU/OTA et vérifier sa protection.<br><strong>Environnement :</strong> Casque ou boîtier de lab."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Une mise à jour firmware passe souvent par un service GATT dédié (DFU). La question de sécurité n'est pas l'existence du service, mais la vérification de signature et l'authentification requise."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lister les services",
          "p": "Repérer DFU/OTA."
        },
        {
          "h": "Lire les caractéristiques",
          "p": "Version, taille, données, contrôle."
        },
        {
          "h": "Vérifier les propriétés",
          "p": "write sans authentification ?"
        },
        {
          "h": "Conclure",
          "p": "Signature et bootloader sécurisé recommandés."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 09",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --primary | grep -i -E 'dfu|ota|firmware' \\\n  | tee lab/m34/lab09/dfu.txt\ngatttool -b \"$TARGET\" --characteristics | grep -i -E 'dfu|ota|firmware|control|data' \\\n  | tee lab/m34/lab09/dfu_chars.txt\n# Ne jamais écrire dans ces caractéristiques hors test firmware de lab"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> dfu_chars.txt et analyse des propriétés."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Aucune modification de firmware : lecture seule."
    },
    {
      "t": "h",
      "x": "Lab 10 — Rapport d'analyse audio"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Produire un rapport complet à partir des labs 01 à 09.<br><strong>Environnement :</strong> Tous les fichiers de lab/m34."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Un rapport utile relie une observation à une mécanique de protocole et à une contre-mesure. Il inclut le périmètre, le matériel, les versions, la chronologie, les preuves hashées et les recommandations priorisées."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Rassembler les preuves",
          "p": "Captures, fichiers GATT, métadonnées."
        },
        {
          "h": "Rédiger les constats",
          "p": "Un constat = observation + protocole + impact."
        },
        {
          "h": "Prioriser",
          "p": "Gravité x facilité de correction."
        },
        {
          "h": "Vérifier",
          "p": "sha256sum -c sur toutes les preuves."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 10",
      "x": "mkdir -p lab/m34/lab10\ncat > lab/m34/lab10/rapport.md <<'EOF'\n# Analyse de sécurité — casque de lab (m34)\n## Périmètre\nUn casque TWS et son boîtier, appartenant à l'apprenant, banc isolé.\n## Matériel et versions\nVM Linux, dongle Bluetooth, téléphone de test, BlueZ x.y, btmon x.y.\n## Observations\n1. Services SDP : A2DP, AVRCP, HFP (attendu).\n2. Service GATT 0xFE2C présent (Fast Pair).\n3. Numéro de série lisible avant authentification.\n## Recommandations\n- Restreindre la lecture du numéro de série.\n- Vérifier la signature des mises à jour OTA.\n- Désactiver Fast Pair si l'usage n'en a pas besoin.\n## Preuves\nlab/m34/hci/*.btsnoop, lab/m34/gatt/*.txt (SHA-256 en annexe).\nEOF\nsha256sum lab/m34/hci/*.btsnoop lab/m34/gatt/*.txt > lab/m34/lab10/preuves.sha256\nsha256sum -c lab/m34/lab10/preuves.sha256 | tail -3"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> rapport.md et preuves.sha256 vérifiées."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne joignez jamais de capture contenant de la voix ou des données personnelles."
    },
    {
      "t": "h",
      "x": "34.6 Dix CTF — scénarios audio de lab"
    },
    {
      "t": "h",
      "x": "CTF 01/10 — Le profil manquant"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Comparer les profils annoncés par SDP avec la fiche du constructeur.<br><strong>Environnement :</strong> Casque de lab, fichier sdp.txt."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf1_sdp_profiles}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lire sdp.txt",
          "p": "Liste des services."
        },
        {
          "h": "Comparer",
          "p": "A2DP, AVRCP, HFP attendus."
        },
        {
          "h": "Repérer",
          "p": "Un service HID inattendu."
        },
        {
          "h": "Conclure",
          "p": "Surface de commande superflue."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 01",
      "x": "cat lab/m34/lab01/profiles.txt\n# Service inattendu : HID (contrôle) sur un casque sans touches\n# flag{m34_ctf1_sdp_profiles}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Retirer les profils non utilisés de la configuration firmware."
    },
    {
      "t": "h",
      "x": "CTF 02/10 — Le numéro de série"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Déterminer si une information d'identification est lisible avant authentification.<br><strong>Environnement :</strong> Service 0x180A du casque de lab."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf2_serial_leak}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lire 0x2A25",
          "p": "Numéro de série."
        },
        {
          "h": "Vérifier les propriétés",
          "p": "read sans pairing ?"
        },
        {
          "h": "Évaluer",
          "p": "Un identifiant stable facilite le suivi."
        },
        {
          "h": "Corriger",
          "p": "Restreindre l'accès."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 02",
      "x": "cat lab/m34/lab02/serial.txt\n# Si lisible sans authentification : exposition d'identifiant\n# flag{m34_ctf2_serial_leak}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Protéger les caractéristiques d'identification par un accès contrôlé."
    },
    {
      "t": "h",
      "x": "CTF 03/10 — La batterie bavarde"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Retrouver le handle CCCD utilisé pour les notifications de batterie.<br><strong>Environnement :</strong> Capture gatttool du lab 03."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf3_cccd_handle}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Ouvrir chars.txt",
          "p": "Repérer 0x2A19."
        },
        {
          "h": "Chercher 0x2902",
          "p": "Le descripteur suit la caractéristique."
        },
        {
          "h": "Noter le handle",
          "p": "Exemple 0x0009."
        },
        {
          "h": "Expliquer",
          "p": "0100 active, 0000 désactive."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 03",
      "x": "grep -i -B2 -A2 '2902' lab/m34/lab02/chars.txt\n# flag{m34_ctf3_cccd_handle}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Limiter l'écriture du CCCD aux clients autorisés."
    },
    {
      "t": "h",
      "x": "CTF 04/10 — La commande pause"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier dans la trace l'action utilisateur qui a déclenché une commande AVRCP.<br><strong>Environnement :</strong> Capture avrcp.btsnoop."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf4_avrcp_pause}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Ouvrir la capture",
          "p": "tshark."
        },
        {
          "h": "Chercher le pic d'activité",
          "p": "Corréler avec l'heure notée."
        },
        {
          "h": "Repérer l'opcode",
          "p": "Commande AV/C PAUSE."
        },
        {
          "h": "Documenter",
          "p": "Une touche = une commande sur L2CAP."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 04",
      "x": "tshark -r lab/m34/lab04/avrcp.btsnoop -Y bthci_acl \\\n  | grep -i -E 'l2cap|av|c' | head -20\n# flag{m34_ctf4_avrcp_pause}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Journaliser les commandes de contrôle côté firmware et les limiter."
    },
    {
      "t": "h",
      "x": "CTF 05/10 — Le flux A2DP"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Retrouver la séquence de négociation AVDTP dans la capture du lab 05.<br><strong>Environnement :</strong> Capture a2dp.btsnoop."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf5_avdtp}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Filtrer L2CAP",
          "p": "Identifier le canal de signalisation."
        },
        {
          "h": "Repérer SET_CONFIGURATION",
          "p": "Négociation du codec."
        },
        {
          "h": "Repérer START",
          "p": "Début du flux."
        },
        {
          "h": "Conclure",
          "p": "La qualité audio dépend des paramètres négociés."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 05",
      "x": "tshark -r lab/m34/lab05/a2dp.btsnoop -Y bthci_acl \\\n  -T fields -e frame.time_relative -e _ws.col.Info | head -25\n# flag{m34_ctf5_avdtp}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Vérifier les paramètres négociés dans le firmware et l'application."
    },
    {
      "t": "h",
      "x": "CTF 06/10 — Le canal vocal"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Distinguer le flux SCO du flux A2DP dans une capture.<br><strong>Environnement :</strong> Capture hfp.btsnoop."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf6_sco}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Filtrer bthci_evt",
          "p": "Événements de connexion SCO."
        },
        {
          "h": "Comparer",
          "p": "SCO démarre à l'appel, A2DP reste actif."
        },
        {
          "h": "Expliquer",
          "p": "Deux liens, deux qualités, deux usages."
        },
        {
          "h": "Confidentialité",
          "p": "Le micro est un capteur à part entière."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 06",
      "x": "tshark -r lab/m34/lab06/hfp.btsnoop -Y bthci_evt | grep -i sco\n# flag{m34_ctf6_sco}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Prévoir un témoin physique d'activation micro et une politique de confidentialité."
    },
    {
      "t": "h",
      "x": "CTF 07/10 — Le snoop Android"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Retrouver dans un bugreport le chemin du fichier btsnoop_hci.log.<br><strong>Environnement :</strong> bugreport.zip du lab 07."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf7_snoop_path}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lister l'archive",
          "p": "unzip -l | grep btsnoop."
        },
        {
          "h": "Noter le chemin",
          "p": "FS/data/misc/bluetooth/logs/..."
        },
        {
          "h": "Extraire",
          "p": "unzip -p."
        },
        {
          "h": "Vérifier",
          "p": "capinfos."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 07",
      "x": "unzip -l lab/m34/lab07/bugreport.zip | grep -i btsnoop\n# flag{m34_ctf7_snoop_path}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Désactiver le snoop log après usage : il contient des données sensibles."
    },
    {
      "t": "h",
      "x": "CTF 08/10 — Fast Pair exposé"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Vérifier si le service 0xFE2C et un identifiant de modèle sont lisibles avant appairage.<br><strong>Environnement :</strong> Boîtier de TWS de lab."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf8_fast_pair}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Ouvrir le boîtier",
          "p": "Publicité BLE."
        },
        {
          "h": "Lister les services",
          "p": "gatttool --primary."
        },
        {
          "h": "Lire les caractéristiques",
          "p": "Identifier le modèle."
        },
        {
          "h": "Évaluer",
          "p": "Stabilité de l'identifiant."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 08",
      "x": "grep -i 'fe2c' lab/m34/lab08/primary.txt\n# flag{m34_ctf8_fast_pair}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Utiliser des identifiants rotatifs et exiger une confirmation utilisateur."
    },
    {
      "t": "h",
      "x": "CTF 09/10 — Le DFU non protégé"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier une caractéristique de mise à jour writable sans authentification.<br><strong>Environnement :</strong> Casque de lab, service DFU."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf9_dfu_write}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Ouvrir dfu_chars.txt",
          "p": "Repérer write."
        },
        {
          "h": "Vérifier",
          "p": "Aucune exigence de pairing."
        },
        {
          "h": "Risque",
          "p": "Firmware non signé => modification possible."
        },
        {
          "h": "Corriger",
          "p": "Signature + bootloader verrouillé."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 09",
      "x": "cat lab/m34/lab09/dfu_chars.txt\n# flag{m34_ctf9_dfu_write}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Signer chaque image et vérifier l'intégrité avant bootloader."
    },
    {
      "t": "h",
      "x": "CTF 10/10 — Le rapport final"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Assembler un rapport avec preuves vérifiées et recommandations priorisées.<br><strong>Environnement :</strong> Tous les labs du module."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m34_ctf10_report}</code> — à retrouver uniquement sur la cible de lab."
        },
        {
          "v": "amber",
          "h": "Contraintes",
          "p": "Aucune cible tierce. Matériel et données de lab uniquement. Journalisez chaque étape."
        },
        {
          "v": "red",
          "h": "Règle d'arrêt",
          "p": "Si une consigne légale ou technique vous échappe, arrêtez et demandez validation."
        }
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Rassembler",
          "p": "Captures et fichiers GATT."
        },
        {
          "h": "Rédiger",
          "p": "Constat = observation + protocole + impact."
        },
        {
          "h": "Prioriser",
          "p": "Signature firmware > identifiants > confort."
        },
        {
          "h": "Vérifier",
          "p": "sha256sum -c."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 10",
      "x": "sha256sum -c lab/m34/lab10/preuves.sha256 | tail -3\nhead -20 lab/m34/lab10/rapport.md\n# flag{m34_ctf10_report}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Un rapport sans preuve ni priorisation n'aide pas à la remédiation."
    },
    {
      "t": "h",
      "x": "34.7 Durcissement des écouteurs et bonnes pratiques"
    },
    {
      "t": "ul",
      "x": [
        "Appairage avec authentification forte ; éviter le mode sans confirmation pour les appareils disposant d'un écran ou d'une application.",
        "Désactiver les services de debug et les UUID propriétaires non nécessaires dans les versions de production.",
        "Restreindre la lecture du numéro de série et des identifiants par authentification.",
        "Signer les images firmware, vérifier la signature avant installation et verrouiller le bootloader.",
        "Limiter l'exposition des publicités BLE et faire tourner les identifiants de suivi.",
        "Fournir un témoin clair d'activation du micro et une politique de suppression des enregistrements vocaux.",
        "Mettre à jour le firmware via un canal authentifié et informer l'utilisateur des correctifs de sécurité.",
        "Dans un rapport : ne jamais joindre de contenu audio, uniquement des métadonnées et des opérations protocolaires."
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Matrice de remédiation priorisée",
      "x": "| Observation | Protocole | Impact | Priorité | Correctif |\n|---|---|---|---|---|\n| Firmware via GATT sans signature | DFU/OTA | Prise de contrôle du périphérique | P1 | Signature + secure boot |\n| Numéro de série lisible | GATT 0x180A | Suivi, corrélations | P2 | Accès authentifié |\n| Service debug exposé | GATT custom | Surface d'attaque accrue | P2 | Retrait du build de production |\n| Fast Pair sans confirmation | BLE 0xFE2C | Appairage indésirable | P2 | Confirmation utilisateur, rotation |\n| Micro sans témoin | HFP/SCO | Confidentialité | P2 | Témoin logiciel/physique\n"
    }
  ],
  "exos": [
    {
      "id": "au01",
      "title": "Appairer le casque de lab",
      "context": "Casque de test à vous, dongle sur VM.",
      "task": "Lancez l'appairage via bluetoothctl.",
      "hint": "Utilisez l'agent et la commande pair.",
      "solution": "bluetoothctl",
      "accept": [
        "bluetoothctl",
        "bluetoothctl pair AA:BB:CC:DD:EE:FF"
      ],
      "output": [
        "++ Agent registered",
        "++ pair successful"
      ],
      "read": "L'appairage crée une relation de confiance entre le dongle et le casque.",
      "pivot": "N'appairez que votre matériel de lab."
    },
    {
      "id": "au02",
      "title": "Lister les profils SDP",
      "context": "Casque appairé.",
      "task": "Énumérez les services BR/EDR.",
      "hint": "sdptool browse.",
      "solution": "sdptool browse AA:BB:CC:DD:EE:FF",
      "accept": [
        "sdptool browse AA:BB:CC:DD:EE:FF"
      ],
      "output": [
        "++ Service Name: Audio Source",
        "++ Service Name: Hands-Free"
      ],
      "read": "SDP révèle A2DP, AVRCP et HFP.",
      "pivot": "Un service supplémentaire doit être vérifié."
    },
    {
      "id": "au03",
      "title": "Lister les services GATT",
      "context": "Casque/boîtier de lab.",
      "task": "Affichez les services primaires.",
      "hint": "gatttool --primary.",
      "solution": "gatttool -b AA:BB:CC:DD:EE:FF --primary",
      "accept": [
        "gatttool -b AA:BB:CC:DD:EE:FF --primary"
      ],
      "output": [
        "++ uuid: 0000180f-0000-1000-8000-00805f9b34fb",
        "++ uuid: 0000fe2c-0000-1000-8000-00805f9b34fb"
      ],
      "read": "Le service 0xFE2C indique Fast Pair, 0x180F la batterie.",
      "pivot": "Cartographier GATT précède toute analyse d'application."
    },
    {
      "id": "au04",
      "title": "Lire le modèle",
      "context": "Service Device Information 0x180A.",
      "task": "Lisez la caractéristique 0x2A24.",
      "hint": "gatttool --char-read-uuid.",
      "solution": "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A24",
      "accept": [
        "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A24"
      ],
      "output": [
        "++ value: 4c 41 42 2d 54 57 53"
      ],
      "read": "La valeur hexadécimale donne le modèle du casque de lab.",
      "pivot": "Un identifiant stable peut servir au suivi."
    },
    {
      "id": "au05",
      "title": "Lire le firmware",
      "context": "Caractéristique Firmware Revision 0x2A26.",
      "task": "Récupérez la version firmware.",
      "hint": "Même approche que pour le modèle.",
      "solution": "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A26",
      "accept": [
        "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A26"
      ],
      "output": [
        "++ value: 31 2e 32 2e 30"
      ],
      "read": "La version firmware permet de vérifier si les correctifs sont appliqués.",
      "pivot": "Une version ancienne est un critère de priorisation."
    },
    {
      "id": "au06",
      "title": "Lire la batterie",
      "context": "Service Battery 0x180F.",
      "task": "Lisez le niveau de batterie.",
      "hint": "UUID 0x2A19.",
      "solution": "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A19",
      "accept": [
        "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A19"
      ],
      "output": [
        "++ value: 64"
      ],
      "read": "0x64 = 100 % de batterie sur le casque de lab.",
      "pivot": "Cette information est utile mais peut révéler un état d'usage."
    },
    {
      "id": "au07",
      "title": "Démarrer une capture HCI",
      "context": "Scénario audio à analyser.",
      "task": "Enregistrez les événements HCI.",
      "hint": "btmon -w.",
      "solution": "sudo btmon -w lab/m34/hci/session.btsnoop",
      "accept": [
        "sudo btmon -w lab/m34/hci/session.btsnoop",
        "btmon -w lab/m34/hci/session.btsnoop"
      ],
      "output": [
        "++ Monitoring HCI traffic",
        "++ Wrote capture"
      ],
      "read": "La capture conserve la chronologie des événements.",
      "pivot": "Démarrez-la avant l'action à observer."
    },
    {
      "id": "au08",
      "title": "Filtrer une capture",
      "context": "Fichier session.btsnoop.",
      "task": "Affichez les opérations ATT.",
      "hint": "tshark -Y btatt.",
      "solution": "tshark -r lab/m34/hci/session.btsnoop -Y btatt",
      "accept": [
        "tshark -r lab/m34/hci/session.btsnoop -Y btatt"
      ],
      "output": [
        "++ ATT 7 Read By Group Type Request"
      ],
      "read": "Les opérations ATT montrent quels handles ont été utilisés.",
      "pivot": "C'est la base de l'analyse d'une application mobile."
    },
    {
      "id": "au09",
      "title": "Activer le snoop Android",
      "context": "Téléphone de test, options développeur.",
      "task": "Activez la journalisation HCI.",
      "hint": "Nom de l'option : HCI snoop log.",
      "solution": "adb shell settings put secure bluetooth_hci_log 1",
      "accept": [
        "adb shell settings put secure bluetooth_hci_log 1",
        "HCI snoop log"
      ],
      "output": [
        "++ Option activée",
        "++ Redémarrage requis"
      ],
      "read": "Le snoop log capture les événements HCI côté téléphone.",
      "pivot": "Désactivez-le après l'exercice."
    },
    {
      "id": "au10",
      "title": "Vérifier les preuves",
      "context": "Rapport et fichiers de preuves.",
      "task": "Vérifiez les empreintes SHA-256.",
      "hint": "sha256sum -c.",
      "solution": "sha256sum -c lab/m34/lab10/preuves.sha256",
      "accept": [
        "sha256sum -c lab/m34/lab10/preuves.sha256"
      ],
      "output": [
        "++ OK",
        "++ OK"
      ],
      "read": "La vérification garantit que les preuves n'ont pas été altérées.",
      "pivot": "Joignez le fichier d'empreintes au rapport."
    }
  ],
  "quiz": "q34"
};
