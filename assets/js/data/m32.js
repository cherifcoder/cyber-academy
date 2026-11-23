export default {
  "id": "m32",
  "num": 32,
  "title": "Sécurité Bluetooth — BR/EDR, BLE et labs autorisés",
  "short": "Bluetooth",
  "icon": "📶",
  "xp": 450,
  "duration": 180,
  "summary": "Cours complet en français sur la sécurité Bluetooth : architecture, protocoles BR/EDR et BLE, GATT, appairage, capture HCI, avec 10 exercices interactifs, 10 labs guidés, 10 CTF détaillés et du matériel de lab uniquement.",
  "objectives": [
    "Expliquer les couches du Bluetooth : PHY, LMP, HCI, L2CAP, SDP, RFCOMM, ATT et GATT.",
    "Décrire le fonctionnement de l'inquiry BR/EDR, du SDP et de l'appairage Secure Simple Pairing.",
    "Distinguer advertising BLE, connexion, services, caractéristiques, handles et descripteurs.",
    "Utiliser hcitool, bluetoothctl, sdptool, gatttool, bleak, btmon et tshark dans un banc isolé.",
    "Enregistrer et lire une capture HCI au format btsnoop.",
    "Identifier une characteristic mal protégée ou un service de debug exposé.",
    "Réaliser 10 labs reproductibles avec preuves et empreintes SHA-256.",
    "Résoudre 10 CTF de lab avec flags, commandes et remédiation.",
    "Appliquer les contre-mesures : Secure Connections, retrait des services de debug, firmware signé.",
    "Rédiger un rapport de sécurité Bluetooth structuré et vérifiable."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 32 — Sécurité Bluetooth : BR/EDR, BLE et scénarios de lab autorisés</strong>. Ce cours explique comment fonctionne le Bluetooth (couches physiques, appairage, profils, GATT), quelles informations sont observables dans l'air, quels outils permettent de les analyser, et comment concevoir des labs reproductibles. Chaque commande s'exécute sur votre propre matériel de test ou dans un banc isolé."
    },
    {
      "t": "callout",
      "v": "danger",
      "title": "Cadre légal — à lire avant toute manipulation",
      "x": "Toutes les techniques de ce module sont réservées à un laboratoire isolé : vos propres appareils, des devices de test achetés pour l'occasion, une cage de Faraday ou un banc RF atténué, et des cibles intentionnellement vulnérables. N'écoutez, n'interceptez, ne brouillez, n'appariez ni ne modifiez jamais un appareil appartenant à autrui sans autorisation écrite préalable. La réglementation radio (ANFR/FCC/ETSI) impose des bandes, des puissances et des cycles d'utilisation : hors lab blindé, émettre sans licence est interdit. Le brouillage (jammer) est formellement proscrit hors enceinte blindée et cadre réglementaire."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Durée estimée : 180 min · XP : 450 · 10 exercices · 10 labs · 10 CTF",
      "x": "Progressez chapitre par chapitre. Le matériel recommandé : un adaptateur USB Bluetooth avec support monitor (CSR8510, Ubertooth One ou nRF52840), un casque ou un capteur BLE à vous, et une VM Kali/Linux dédiée. Aucune cible tierce."
    },
    {
      "t": "h",
      "x": "32.1 Architecture Bluetooth : contrôleur, hôte et couches"
    },
    {
      "t": "p",
      "x": "Le Bluetooth est une pile de protocoles divisée en deux zones. Le <strong>contrôleur</strong> gère la radio et la liaison (PHY, baseband, LMP, HCI). L'<strong>hôte</strong> gère la logique applicative (L2CAP, SDP, RFCOMM, ATT/GATT, GAP et les profils). L'interface <strong>HCI</strong> est la frontière entre les deux : c'est elle que les outils de capture écoutent, car elle voit les paquets avant chiffrement applicatif."
    },
    {
      "t": "table",
      "head": [
        "Couche",
        "Rôle",
        "Ce qu'on observe en lab",
        "Protocoles / profils"
      ],
      "rows": [
        [
          "PHY (2,4 GHz)",
          "Modulation, sauts de fréquence, gestion de l'antenne",
          "Puissance, canal, hops, RSSI",
          "BR/EDR : 79 canaux de 1 MHz · LE : 40 canaux de 2 MHz"
        ],
        [
          "Baseband / LMP",
          "Piconet, timing, appairage, chiffrement du lien",
          "Adresses BD_ADDR, rôle master/slave, événements LMP",
          "LMP, SCO/eSCO"
        ],
        [
          "HCI",
          "Commandes et événements entre hôte et contrôleur",
          "Traces btsnoop : inquiry, ACL, SCO",
          "HCI USB / UART"
        ],
        [
          "L2CAP",
          "Multiplexage, segmentation, QoS",
          "CID, MTU, canaux",
          "L2CAP LE, RFCOMM, ATT"
        ],
        [
          "SDP (BR/EDR)",
          "Annuaire des services disponibles",
          "UUID de services, ports RFCOMM",
          "Service Discovery Protocol"
        ],
        [
          "ATT / GATT (BLE)",
          "Attributs, services, caractéristiques",
          "Handles, UUID, valeurs, notifications",
          "GATT, GAP"
        ],
        [
          "Profils",
          "Sémantique applicative",
          "Nom du device, batterie, audio, HID",
          "A2DP, HFP, AVRCP, HID, HOGP"
        ]
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Isoler le banc",
          "p": "Utilisez une VM Linux avec un dongle Bluetooth dédié. Désactivez le Bluetooth de l'hôte pour éviter les interférences et travaillez à faible puissance, à moins d'un mètre."
        },
        {
          "h": "Étape 2 — Vérifier l'interface",
          "p": "hciconfig puis hciconfig hci0 up : l'interface doit passer en mode UP/RUNNING. Notez l'adresse BD_ADDR du dongle, elle sert de référence dans les preuves."
        },
        {
          "h": "Étape 3 — Démarrer la capture HCI",
          "p": "Lancez btmon avant toute action pour horodater les événements. La trace .btsnoop est votre journal d'analyse."
        },
        {
          "h": "Étape 4 — Observer sans interagir",
          "p": "Commencez par un scan passif : vous lisez les advertise BLE sans vous connecter. C'est la phase la moins intrusive et la plus riche en informations."
        },
        {
          "h": "Étape 5 — Journaliser",
          "p": "Chaque commande, adresse, heure et résultat est consigné. Le hash SHA-256 de la trace garantit l'intégrité de la preuve."
        },
        {
          "h": "Étape 6 — Nettoyer",
          "p": "Éteignez l'interface, supprimez les appareils appairés de lab et effacez les données personnelles éventuellement capturées."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Initialisation du banc Bluetooth",
      "x": "# LAB BLUETOOTH AUTORISÉ UNIQUEMENT — matériel à vous\nmkdir -p lab/m32/{scans,captures,gatt,preuves,rapport}\ndate -Iseconds | tee lab/m32/preuves/start.txt\n\n# État et activation de l'interface\nhciconfig\nsudo hciconfig hci0 up\nhciconfig hci0 | tee lab/m32/scans/hci0.txt\n\n# Capture HCI dès le départ (à laisser tourner dans un terminal)\nsudo btmon -w lab/m32/captures/session.btsnoop &\n\n# Informations d'identité du dongle de lab\nsudo hcitool cmd 0x04 0x0003 | tee lab/m32/scans/local_version.txt\n\n# Intégrité des preuves\nsha256sum lab/m32/scans/hci0.txt | tee lab/m32/preuves/hci0.sha256"
    },
    {
      "t": "glossary",
      "title": "Vocabulaire indispensable",
      "intro": "Ces termes reviennent dans toutes les traces et tous les outils Bluetooth.",
      "items": [
        {
          "term": "BD_ADDR",
          "full": "Bluetooth Device Address",
          "def": "Identifiant radio à 48 bits de l'appareil, équivalent d'une adresse MAC.",
          "use": "Utilisez-le pour cibler un appareil de lab dans hcitool ou gatttool.",
          "ex": "AA:BB:CC:DD:EE:FF"
        },
        {
          "term": "OUI",
          "full": "Organizationally Unique Identifier",
          "def": "Les 24 premiers bits de l'adresse, attribués au fabricant.",
          "use": "Il indique le constructeur, pas l'identité de la personne.",
          "ex": "hcitool info AA:BB:CC:DD:EE:FF"
        },
        {
          "term": "Inquiry",
          "full": "Découverte BR/EDR",
          "def": "Procédure par laquelle un appareil recherche ses voisins.",
          "use": "Observez les réponses dans btmon pour comprendre la visibilité.",
          "ex": "hcitool scan"
        },
        {
          "term": "Advertising",
          "full": "Publicité BLE",
          "def": "Diffusion cyclique de paquets sur les canaux 37, 38, 39.",
          "use": "Contient souvent le nom, les UUID de services et la puissance TX.",
          "ex": "hcitool lescan --duplicates"
        },
        {
          "term": "GATT",
          "full": "Generic Attribute Profile",
          "def": "Organisation des données BLE en services et caractéristiques.",
          "use": "C'est la carte à suivre pour lire ou écrire une valeur de lab.",
          "ex": "gatttool -b AA:BB:CC:DD:EE:FF --primary"
        },
        {
          "term": "ATT",
          "full": "Attribute Protocol",
          "def": "Protocole de transport des attributs : read, write, notify, indicate.",
          "use": "Chaque caractéristique a un handle utilisé par les commandes.",
          "ex": "char-read-hnd 0x0003"
        },
        {
          "term": "UUID",
          "full": "Universally Unique Identifier",
          "def": "Identifiant d'un service ou d'une caractéristique (16 ou 128 bits).",
          "use": "0x180F = batterie, 0x2A00 = nom du device.",
          "ex": "char-read-uuid 0x2A00"
        },
        {
          "term": "CCCD",
          "full": "Client Characteristic Configuration Descriptor",
          "def": "Descripteur 0x2902 qui active notifications (0x0001) ou indications (0x0002).",
          "use": "Écrire dedans permet de recevoir les mises à jour d'une caractéristique.",
          "ex": "char-write-req 0x0005 0100"
        }
      ]
    },
    {
      "t": "h",
      "x": "32.2 BR/EDR — découverte, SDP et appairage"
    },
    {
      "t": "p",
      "x": "Le Bluetooth « classique » (BR/EDR) reste utilisé pour l'audio (A2DP), les mains libres (HFP) et les périphériques HID. La découverte repose sur l'<strong>inquiry</strong>, puis le service discovery (<strong>SDP</strong>) révèle les profils exposés et les ports RFCOMM. L'appairage historique à PIN est vulnérable aux attaques par force brute sur PIN courts ; les versions modernes utilisent <strong>Secure Simple Pairing</strong> (ECDH P-192, comparateur numérique, passkey ou OOB). Ne testez ces mécanismes que sur vos propres appareils."
    },
    {
      "t": "table",
      "head": [
        "Mécanisme",
        "Ce qui se passe",
        "Information obtenue",
        "Défense"
      ],
      "rows": [
        [
          "Inquiry",
          "Le dongle émet des paquets d'inquiry et écoute les réponses",
          "BD_ADDR, classe d'appareil, nom",
          "Mode non-découvrable, randomisation d'adresse"
        ],
        [
          "SDP browse",
          "Requête vers le service discovery de l'appareil",
          "UUID de services, port RFCOMM, versions",
          "Limiter les services exposés"
        ],
        [
          "Legacy PIN",
          "PIN partagé, dérivation de clé faible",
          "Clé de lien (lab uniquement)",
          "Passkey 6 chiffres minimum, SSP"
        ],
        [
          "SSP / Secure Connections",
          "ECDH, échange de nonces, confirmation numérique",
          "Clé de lien forte",
          "Numeric comparison plutôt que Just Works"
        ],
        [
          "RFCOMM",
          "Émulation de port série sur L2CAP",
          "Canaux de profils (HFP, OBEX)",
          "Authentification et chiffrement du lien"
        ]
      ]
    },
    {
      "t": "cmdref",
      "title": "Commandes BR/EDR — à quoi elles servent et comment les lire",
      "intro": "Toutes ces commandes ciblent des appareils de lab. Remplacez AA:BB:CC:DD:EE:FF par l'adresse de votre casque ou de votre dongle de test.",
      "items": [
        {
          "cmd": "hciconfig hci0 up",
          "tag": "activation",
          "what": "Active l'interface Bluetooth locale.",
          "gives": "État UP/RUNNING et adresse du dongle.",
          "use": "À lancer avant toute commande de découverte.",
          "syntax": "sudo hciconfig <iface> up",
          "example": "sudo hciconfig hci0 up",
          "read": "Si l'interface reste DOWN, vérifiez le rfkill et le pilote."
        },
        {
          "cmd": "hcitool scan",
          "tag": "découverte",
          "what": "Lance une inquiry BR/EDR de 10 secondes.",
          "gives": "Liste des appareils découvrables : adresse + nom.",
          "use": "Observez la sortie puis notez les adresses dans un fichier.",
          "syntax": "hcitool scan [--duration=N]",
          "example": "sudo hcitool scan | tee lab/m32/scans/br_scan.txt",
          "read": "Une adresse sans nom indique un appareil masqué ou une réponse partielle."
        },
        {
          "cmd": "hcitool info <BD_ADDR>",
          "tag": "information",
          "what": "Demande les informations détaillées d'un appareil.",
          "gives": "Classe, nom, version LMP, compagnie, features.",
          "use": "Ciblez un appareil découvert lors de l'inquiry.",
          "syntax": "hcitool info <BD_ADDR>",
          "example": "sudo hcitool info AA:BB:CC:DD:EE:FF",
          "read": "La classe d'appareil 0x240404 indique un casque audio."
        },
        {
          "cmd": "sdptool browse <BD_ADDR>",
          "tag": "services",
          "what": "Parcourt l'annuaire SDP de l'appareil cible.",
          "gives": "Services exposés : A2DP, AVRCP, HFP, HID, ports RFCOMM.",
          "use": "Utilisez-le pour cartographier la surface d'un casque de lab.",
          "syntax": "sdptool browse <BD_ADDR>",
          "example": "sdptool browse AA:BB:CC:DD:EE:FF | tee lab/m32/scans/sdp.txt",
          "read": "Un service non attendu (ex. OBEX) mérite une vérification de configuration."
        },
        {
          "cmd": "l2ping <BD_ADDR>",
          "tag": "connectivité",
          "what": "Envoie un echo L2CAP pour tester la portée du lien.",
          "gives": "Latence et nombre de réponses.",
          "use": "Test de portée dans le lab, sans saturation.",
          "syntax": "l2ping -c <count> <BD_ADDR>",
          "example": "l2ping -c 4 AA:BB:CC:DD:EE:FF",
          "read": "Une perte croissante indique une mauvaise portée ou des interférences."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Cartographie SDP d'un casque de lab",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"   # <- appareil de lab uniquement\n\n# 1. Découverte BR/EDR\nsudo hcitool scan | tee lab/m32/scans/br_scan.txt\n\n# 2. Informations générales\nsudo hcitool info \"$TARGET\" | tee lab/m32/scans/br_info.txt\n\n# 3. Annuaire des services\nsdptool browse \"$TARGET\" | tee lab/m32/scans/br_sdp.txt\n\n# 4. Extraire les noms de services et les canaux RFCOMM\ngrep -E 'Service Name|Channel|Service Class ID' lab/m32/scans/br_sdp.txt\n\n# 5. Test de portée (4 paquets seulement)\nl2ping -c 4 \"$TARGET\" | tee lab/m32/scans/l2ping.txt\n\n# Lecture : un service A2DP + HFP + AVRCP correspond à un casque.\n# Un service « OBEX Object Push » inattendu = surface à vérifier côté firmware."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Attaques historiques : à connaître, pas à rejouer",
      "x": "Bluejacking (envoi de cartes de visite non sollicitées), Bluesnarfing (lecture OBEX non autorisée) et Bluebugging (prise de contrôle via firmware ancien) concernent surtout des appareils des années 2000 avec PIN courts et firmware non corrigé. Elles servent à comprendre l'évolution du modèle de sécurité. Ne les rejouez jamais sur un appareil réel, même « pour voir » : l'entrave et l'accès non autorisé sont pénalement répréhensibles."
    },
    {
      "t": "h",
      "x": "32.3 BLE — GAP, GATT, ATT et advertising"
    },
    {
      "t": "p",
      "x": "Le Bluetooth Low Energy fonctionne différemment : un périphérique <strong>advertise</strong> sur trois canaux dédiés, un central se connecte ensuite. Les données sont organisées par <strong>GATT</strong> en services (UUID 16 bits ou 128 bits) contenant des caractéristiques identifiées par un handle. Les opérations ATT (read, write, notify) sont visibles dans HCI si le lien n'est pas chiffré, ou dans l'application si vous contrôlez les deux extrémités."
    },
    {
      "t": "table",
      "head": [
        "GAP (publicité / connexion)",
        "GATT (données)",
        "Conséquence pratique"
      ],
      "rows": [
        [
          "Advertising : 3 canaux (37-39), intervalles configurables",
          "Service = regroupement logique (0x180F batterie)",
          "Un scan passif suffit pour lister les devices et leurs UUID"
        ],
        [
          "Connection : intervalle 7,5 ms à 4 s, latence, supervision",
          "Characteristic = valeur + propriétés (read/write/notify)",
          "Les propriétés indiquent ce qui est permis sans écrire"
        ],
        [
          "Adresses publiques, statiques ou privées résolvables (IRK)",
          "Descripteur CCCD 0x2902 pour notifications",
          "L'adresse peut tourner : se fier à l'UUID ou au nom"
        ],
        [
          "Modes de sécurité : Just Works, Passkey, OOB, LE Secure Connections",
          "Valeurs typiques : nom 0x2A00, fabricant 0x2A29, batterie 0x2A19",
          "Un appairage Just Works ne protège pas contre un MITM actif"
        ]
      ]
    },
    {
      "t": "cmdref",
      "title": "Commandes BLE — découverte, lecture et écriture en lab",
      "intro": "Un capteur BLE ou un casque de test suffit. Les handles varient : utilisez toujours la sortie de --primary puis --characteristics avant d'écrire.",
      "items": [
        {
          "cmd": "hcitool lescan",
          "tag": "scan passif",
          "what": "Affiche les périphériques BLE qui émettent des advertise.",
          "gives": "Adresse, nom, type d'adresse.",
          "use": "Première étape avant toute connexion.",
          "syntax": "hcitool lescan --duplicates",
          "example": "sudo hcitool lescan --duplicates | tee lab/m32/scans/ble_scan.txt",
          "read": "Un nom « inconnu » peut cacher une adresse privée résolvable."
        },
        {
          "cmd": "bluetoothctl scan on",
          "tag": "scan moderne",
          "what": "Scan BLE/BR via le démon BlueZ.",
          "gives": "Périphériques, RSSI, UUID de service.",
          "use": "Alternative à hcitool sur les distributions récentes.",
          "syntax": "bluetoothctl scan [on|off]",
          "example": "bluetoothctl scan on",
          "read": "Le RSSI donne une indication de distance, pas une mesure fiable."
        },
        {
          "cmd": "gatttool -b <ADDR> --primary",
          "tag": "GATT",
          "what": "Liste les services GATT du périphérique connecté.",
          "gives": "Plages de handles et UUID de services.",
          "use": "À lancer après connexion avec -I ou --primary direct.",
          "syntax": "gatttool -b <ADDR> --primary",
          "example": "gatttool -b AA:BB:CC:DD:EE:FF --primary",
          "read": "Repérez 0x180F (batterie) ou 0x1800 (Device Information)."
        },
        {
          "cmd": "gatttool -b <ADDR> --char-read-uuid 0x2A00",
          "tag": "lecture",
          "what": "Lit la caractéristique « Device Name ».",
          "gives": "Valeur brute en hexadécimal, souvent ASCII.",
          "use": "Vérifiez d'abord que la characteristic est readable.",
          "syntax": "gatttool -b <ADDR> --char-read-uuid <UUID>",
          "example": "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A00",
          "read": "Convertissez l'hexa en texte avec xxd -r -p pour lire le nom."
        },
        {
          "cmd": "btmon -w capture.btsnoop",
          "tag": "capture",
          "what": "Enregistre toutes les transactions HCI dans un fichier.",
          "gives": "Trace btsnoop lisible par Wireshark.",
          "use": "À démarrer avant le scan et la connexion.",
          "syntax": "sudo btmon -w <fichier>",
          "example": "sudo btmon -w lab/m32/captures/ble.btsnoop",
          "read": "Filtrez ensuite sur bthci_acl pour isoler les paquets ATT."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Lecture GATT avec bleak (Python, appareil de lab)",
      "x": "# pip install bleak\n# LAB : ne ciblez que votre capteur/casque de test\npython3 - <<'PY'\nimport asyncio\nfrom bleak import BleakScanner, BleakClient\n\nasync def main():\n    devices = await BleakScanner.discover(timeout=8.0)\n    for d in devices:\n        print(d.address, d.name, d.rssi, d.details.get(\"uuids\", []))\n\n    target = next((d for d in devices if d.name == \"LAB-SENSOR\"), None)\n    if not target:\n        print(\"Capteur de lab introuvable\"); return\n\n    async with BleakClient(target.address) as client:\n        for svc in client.services:\n            print(\"SERVICE\", svc.uuid)\n            for ch in svc.characteristics:\n                print(\"  CHAR\", ch.uuid, ch.properties)\n                if \"read\" in ch.properties:\n                    try:\n                        val = await client.read_gatt_char(ch.uuid)\n                        print(\"    VALUE\", bytes(val).hex())\n                    except Exception as e:\n                        print(\"    REFUSED\", e)\n\nasyncio.run(main())\nPY"
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Lire une trace HCI",
      "x": "Dans Wireshark : File > Open > capture.btsnoop, puis filtrez sur <code>bthci_acl</code> ou <code>btatt</code>. Les champs « Opcode », « Handle » et « Value » racontent l'échange : qui a lu quoi, quand, et avec quelle réponse. C'est cette lecture — pas l'outil — qui produit une conclusion de sécurité."
    },
    {
      "t": "h",
      "x": "32.4 Capture radio et analyse de trafic"
    },
    {
      "t": "p",
      "x": "HCI montre ce que l'hôte voit. Pour observer réellement les ondes, on utilise un sniffeur dédié : nRF Sniffer (nRF52840) pour BLE, Ubertooth One pour BR/EDR et BLE, ou un SDR large bande. Le sniffing passif est la méthode la plus sûre : vous écoutez sans jamais émettre ni répondre. Les captures servent à comprendre les séquences d'appairage, les publicités et les canaux utilisés."
    },
    {
      "t": "table",
      "head": [
        "Outil",
        "Portée",
        "Ce qu'il capture",
        "Usage pédagogique"
      ],
      "rows": [
        [
          "btmon",
          "HCI local",
          "Commandes/événements de votre dongle",
          "Comprendre la pile BlueZ"
        ],
        [
          "nRF Sniffer (nRF52840)",
          "BLE 2,4 GHz",
          "Advertise, connexions, paquets ATT",
          "Cartographier GATT et les hops BLE"
        ],
        [
          "Ubertooth One",
          "BR/EDR + BLE",
          "Packets radio, suivi de sauts",
          "Observer l'inquiry et le pairing"
        ],
        [
          "Wireshark / tshark",
          "Analyse",
          "btsnoop, PCAP des sniffers",
          "Filtrer, reconstruire, horodater"
        ],
        [
          "Android HCI snoop",
          "HCI téléphone",
          "Trafic du téléphone de test",
          "Comparer application vs trace radio"
        ]
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Choisir le point d'observation",
          "p": "HCI pour votre propre dongle, sniffeur radio pour observer sans interagir. Ne combinez les deux que si vous savez distinguer les horizons temporels."
        },
        {
          "h": "Étape 2 — démarrer la capture avant l'action",
          "p": "Lancez l'enregistrement avant d'allumer le casque ou le capteur : les premières publicités et le début du pairing sont les plus informatifs."
        },
        {
          "h": "Étape 3 — Capturer sur le bon canal",
          "p": "BLE : canaux 37/38/39 pour l'advertise, puis suivi de connexion. BR/EDR : suivi des sauts de fréquence."
        },
        {
          "h": "Étape 4 — Filtrer et annoter",
          "p": "Dans tshark, isolez btatt ou bthci_acl. Ajoutez des commentaires dans votre journal : quel appareil, quelle action, quelle heure."
        },
        {
          "h": "Étape 5 — Vérifier le chiffrement",
          "p": "Une capture lisible en clair après pairing signale un lien non chiffré ou une capture côté hôte avant chiffrement : à interpréter selon le contexte."
        },
        {
          "h": "Étape 6 — Conserver la preuve",
          "p": "Calculez le SHA-256 de la capture et stockez-la avec le journal et la version des outils."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Analyse d'une capture HCI avec tshark",
      "x": "# 1. Lister les paquets pertinents\ntshark -r lab/m32/captures/session.btsnoop -Y \"bthci_acl or btatt\" | head -40\n\n# 2. Extraire les opcodes HCI (inquiry, connection, pairing)\ntshark -r lab/m32/captures/session.btsnoop -Y bthci_cmd \\\n  -T fields -e frame.time_relative -e bthci_cmd.opcode | head -30\n\n# 3. Suivre les lectures/écritures ATT\ntshark -r lab/m32/captures/session.btsnoop -Y btatt \\\n  -T fields -e btatt.opcode -e btatt.handle -e btatt.value\n\n# 4. Statistiques par protocole\ncapinfos lab/m32/captures/session.btsnoop | tee lab/m32/preuves/capinfos.txt\n\n# 5. Empreinte de la capture\nsha256sum lab/m32/captures/session.btsnoop | tee lab/m32/preuves/capture.sha256"
    },
    {
      "t": "h",
      "x": "32.5 Faiblesses classiques et contre-mesures"
    },
    {
      "t": "p",
      "x": "Une revue de sécurité Bluetooth ne se limite pas à « trouver une faille » : elle identifie un mécanisme, son implémentation et le contrôle qui devrait l'empêcher. Le tableau suivant résume les familles les plus fréquentes, avec la défense correspondante."
    },
    {
      "t": "table",
      "head": [
        "Faiblesse",
        "Mécanisme",
        "Ce qu'on observe en lab",
        "Défense"
      ],
      "rows": [
        [
          "PIN court / Legacy pairing",
          "Clé dérivée d'un secret de 4 chiffres",
          "Tentatives répoussées uniquement par le délai",
          "Passkey 6 chiffres, Secure Connections"
        ],
        [
          "Just Works sans MITM",
          "Pas d'authentification d'appairage",
          "Connexion acceptée sans confirmation",
          "Numeric comparison quand l'écran existe"
        ],
        [
          "GATT mal protégé",
          "Characteristic writable sans authentification",
          "Écriture acceptée dans l'outil de lab",
          "Exiger pairing + autorisation côté firmware"
        ],
        [
          "Services de debug exposés",
          "UUID custom laissés en production",
          "Service inconnu dans --primary",
          "Retirer les services de test avant release"
        ],
        [
          "Adresse publique stable",
          "Pas de randomisation",
          "Même BD_ADDR à chaque scan",
          "Adresse privée + rotation des clés"
        ],
        [
          "Firmware non signé",
          "OTA sans vérification",
          "Mise à jour acceptée depuis un outil de lab",
          "Signature, bootloader verrouillé, secure boot"
        ]
      ]
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Bonne pratique",
          "p": "Appairer en lab avec un périphérique à vous, documenter les UUID, vérifier les propriétés de chaque caractéristique et conserver la capture."
        },
        {
          "v": "amber",
          "h": "À surveiller",
          "p": "Un service de debug, une characteristic writable sans authentification ou une adresse stable sont des signaux à remonter dans le rapport."
        },
        {
          "v": "red",
          "h": "Interdit",
          "p": "Tenter un appairage, une lecture ou une écriture sur un appareil qui ne vous appartient pas, même en public et même « sans rien modifier »."
        }
      ]
    },
    {
      "t": "h",
      "x": "32.6 Dix labs guidés — exécution et analyse"
    },
    {
      "t": "h",
      "x": "Lab 01 — Activer et identifier l'interface"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Mettre en service le dongle de lab et relever son identité radio.<br><strong>Environnement :</strong> VM Linux, dongle Bluetooth USB dédié, aucun autre appareil en portée."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "L'interface HCI est le point de contrôle local : toute commande BlueZ passe par elle. L'adresse du dongle sert de référence dans le rapport."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Vérifier la liste des interfaces",
          "p": "hciconfig affiche hci0 et son état."
        },
        {
          "h": "Activer l'interface",
          "p": "Le mode UP autorise l'émission et la réception."
        },
        {
          "h": "Lire la version locale",
          "p": "hcitool cmd 0x04 0x0003 retourne la version LMP et le fabricant."
        },
        {
          "h": "Archiver",
          "p": "Enregistrez la sortie et calculez son empreinte."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 01",
      "x": "mkdir -p lab/m32/lab01\nhciconfig | tee lab/m32/lab01/state_before.txt\nsudo hciconfig hci0 up\nhciconfig hci0 | tee lab/m32/lab01/state_after.txt\nsudo hcitool cmd 0x04 0x0003 | tee lab/m32/lab01/local_version.txt\nsha256sum lab/m32/lab01/*.txt | tee lab/m32/lab01/preuves.sha256"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> state_after.txt avec UP/RUNNING et local_version.txt."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Désactivez le Bluetooth à la fin et retirez le dongle."
    },
    {
      "t": "h",
      "x": "Lab 02 — Scan BR/EDR et inventaire"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Découvrir les appareils classiques de lab et classer les réponses.<br><strong>Environnement :</strong> Casque Bluetooth de test en mode appairage, dongle de lab."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "L'inquiry diffuse une requête générique ; les appareils découvrables répondent avec leur adresse, leur nom et leur classe."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Activer le dongle",
          "p": "Vérifiez hci0 en UP."
        },
        {
          "h": "Lancer l'inquiry",
          "p": "hcitool scan pendant 10 secondes."
        },
        {
          "h": "Isoler le casque",
          "p": "Repérez l'adresse correspondant à votre appareil de test."
        },
        {
          "h": "Conserver la sortie",
          "p": "Le fichier scan.txt est la preuve de découverte."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 02",
      "x": "sudo hciconfig hci0 up\nsudo hcitool scan | tee lab/m32/lab02/scan.txt\n# lecture : adresse + nom; classe via hcitool info\ngrep -E '^[0-9A-F]{2}:' lab/m32/lab02/scan.txt | wc -l"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> scan.txt et le nombre d'appareils vus."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Remettez le casque en mode normal pour ne pas rester découvrable."
    },
    {
      "t": "h",
      "x": "Lab 03 — Lecture des informations LMP"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Interroger le casque de lab pour connaître ses capacités.<br><strong>Environnement :</strong> Appareil découvert au lab 02."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "La commande HCI Remote Name/Version Information interroge le contrôleur distant ; les champs LMP version et manufacturer aident à identifier le firmware."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Cibler l'adresse de lab",
          "p": "Définissez TARGET."
        },
        {
          "h": "Demander les informations",
          "p": "hcitool info interroge l'appareil."
        },
        {
          "h": "Extraire les champs utiles",
          "p": "LMP version, manufacturer, features."
        },
        {
          "h": "Documenter",
          "p": "Notez la version dans le rapport."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 03",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\nsudo hcitool info \"$TARGET\" | tee lab/m32/lab03/info.txt\ngrep -Ei 'Manufacturer|LMP|Features|Device Name' lab/m32/lab03/info.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> info.txt avec la version LMP et le fabricant."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Aucune modification de l'appareil : lecture seule."
    },
    {
      "t": "h",
      "x": "Lab 04 — Cartographie SDP"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Lister les services exposés par le casque de lab.<br><strong>Environnement :</strong> Même casque, appairage non requis pour SDP en général."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "SDP est un annuaire : chaque service a un UUID, un nom, des protocoles et éventuellement un canal RFCOMM. C'est la surface d'attaque applicative du BR/EDR."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Parcourir SDP",
          "p": "sdptool browse récupère les enregistrements."
        },
        {
          "h": "Extraire les canaux",
          "p": "Repérez les lignes Channel."
        },
        {
          "h": "Interpréter",
          "p": "A2DP/AVRCP/HFP = profils audio attendus."
        },
        {
          "h": "Alerter",
          "p": "Tout service inconnu est à documenter."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 04",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\nsdptool browse \"$TARGET\" | tee lab/m32/lab04/sdp.txt\ngrep -E 'Service Name|Channel|Service Class ID' lab/m32/lab04/sdp.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> sdp.txt et la liste des canaux RFCOMM."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Désactivez les services de debug sur le firmware de lab."
    },
    {
      "t": "h",
      "x": "Lab 05 — Test de portée L2CAP"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Mesurer la qualité du lien à l'aide d'echo L2CAP.<br><strong>Environnement :</strong> Casque de lab à portée, dongle de lab."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "L2CAP fournit un canal de données ; l'echo mesure la latence et la perte. C'est un test de couche liaison, pas une attaque."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Envoyer 4 echo",
          "p": "Limitez le nombre de paquets."
        },
        {
          "h": "Observer la perte",
          "p": "Comparez les temps de réponse."
        },
        {
          "h": "Déplacer le casque",
          "p": "Notez l'évolution à 1 m puis 3 m."
        },
        {
          "h": "Consigner",
          "p": "Résultats dans range.txt."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 05",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\nl2ping -c 4 \"$TARGET\" | tee lab/m32/lab05/range_1m.txt\n# recommencer après déplacement physique\nl2ping -c 4 \"$TARGET\" | tee lab/m32/lab05/range_3m.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Deux fichiers de mesures comparables."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne dépassez pas la puissance réglementaire du dongle."
    },
    {
      "t": "h",
      "x": "Lab 06 — Scan BLE passif"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Observer les publicités BLE sans se connecter.<br><strong>Environnement :</strong> Capteur BLE ou casque TWS de lab."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Les paquets d'advertising sur les canaux 37-39 contiennent le nom, les UUID de services et parfois la puissance émise. Aucune connexion n'est nécessaire."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lancer lescan",
          "p": "Avec --duplicates pour voir les trames répétées."
        },
        {
          "h": "Repérer le capteur",
          "p": "Identifiez son nom ou son adresse."
        },
        {
          "h": "Noter le RSSI",
          "p": "Indication grossière de distance."
        },
        {
          "h": "Archiver",
          "p": "scan_ble.txt."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 06",
      "x": "sudo hciconfig hci0 up\ntimeout 12 sudo hcitool lescan --duplicates | tee lab/m32/lab06/scan_ble.txt\ngrep -i 'LAB-SENSOR' lab/m32/lab06/scan_ble.txt | head"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> scan_ble.txt avec l'adresse du capteur de lab."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Coupez le scan à la fin pour limiter l'énergie."
    },
    {
      "t": "h",
      "x": "Lab 07 — Énumération GATT"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Lister services et caractéristiques du capteur de lab.<br><strong>Environnement :</strong> Capteur BLE de lab, appairé ou non selon son design."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "GATT organise les données en arbres : service → caractéristique → descripteur. Chaque caractéristique porte des propriétés (read/write/notify) qui définissent les opérations permises."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Se connecter",
          "p": "gatttool en mode interactif ou commandes directes."
        },
        {
          "h": "Lister les services",
          "p": "--primary donne les handles de début/fin."
        },
        {
          "h": "Lister les caractéristiques",
          "p": "--characteristics donne UUID et propriétés."
        },
        {
          "h": "Cartographier",
          "p": "Construisez un tableau service/caractéristique."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 07",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --primary | tee lab/m32/lab07/primary.txt\ngatttool -b \"$TARGET\" --characteristics | tee lab/m32/lab07/chars.txt\ngrep -E 'char|uuid|handle' lab/m32/lab07/chars.txt | head -30"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> primary.txt et chars.txt."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne modifiez aucune valeur : lecture uniquement."
    },
    {
      "t": "h",
      "x": "Lab 08 — Lecture d'une caractéristique"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Lire le nom et le niveau de batterie du capteur de lab.<br><strong>Environnement :</strong> Capteur exposant 0x2A00 et 0x2A19."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Une caractéristique se lit par UUID ou par handle. La valeur est renvoyée en hexadécimal ; la conversion dépend du format (UTF-8 pour un nom, octet pour une batterie)."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lire le nom",
          "p": "UUID 0x2A00."
        },
        {
          "h": "Lire la batterie",
          "p": "UUID 0x2A19."
        },
        {
          "h": "Convertir",
          "p": "xxd -r -p pour le texte."
        },
        {
          "h": "Interpréter",
          "p": "Un pourcentage cohérent valide la lecture."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 08",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A00 | tee lab/m32/lab08/name_hex.txt\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A19 | tee lab/m32/lab08/battery_hex.txt\nawk '{print $NF}' lab/m32/lab08/name_hex.txt | xxd -r -p; echo"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Valeurs lues et conversion lisible."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Restaurez l'état du capteur si une écriture a été faite par erreur."
    },
    {
      "t": "h",
      "x": "Lab 09 — Notifications CCCD"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Activer les notifications d'une caractéristique de lab.<br><strong>Environnement :</strong> Capteur avec caractéristique notify et descripteur 0x2902."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Le descripteur CCCD active les notifications (0x0001) ou les indications (0x0002). Écrire 0100 en little-endian active les notifications ; le périphérique envoie alors des mises à jour sans nouvelle requête."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Trouver le handle CCCD",
          "p": "Cherchez le descripteur 0x2902 après la caractéristique notify."
        },
        {
          "h": "Activer les notifications",
          "p": "char-write-req 0100."
        },
        {
          "h": "Observer",
          "p": "Les valeurs arrivent en continu pendant quelques secondes."
        },
        {
          "h": "Désactiver",
          "p": "Réécrivez 0000 à la fin."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 09",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" -I <<'EOF'\nprimary\ncharacteristics\nchar-write-req 0x0005 0100\nexit\nEOF\n# Le handle 0x0005 est un exemple : remplacez par le vôtre."
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Capture des notifications reçues."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Désactivez les notifications pour économiser la batterie du capteur."
    },
    {
      "t": "h",
      "x": "Lab 10 — Capture et lecture HCI"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Enregistrer une session complète et en extraire les opérations.<br><strong>Environnement :</strong> Dongle de lab, capteur BLE, Wireshark/tshark installés."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "btmon enregistre les événements HCI au format btsnoop. tshark permet de filtrer les commandes HCI et les paquets ATT pour reconstruire la chronologie d'une session."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Démarrer btmon",
          "p": "Avant toute interaction."
        },
        {
          "h": "Réaliser scan + connexion + lecture",
          "p": "Actions des labs précédents."
        },
        {
          "h": "Arrêter la capture",
          "p": "Ctrl+C propre."
        },
        {
          "h": "Filtrer et hasher",
          "p": "bthci_cmd, btatt, sha256."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 10",
      "x": "sudo btmon -w lab/m32/lab10/session.btsnoop &\nBPID=$!\nsudo hcitool lescan >/dev/null 2>&1 & sleep 3; sudo killall hcitool 2>/dev/null || true\ngatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A19 >/dev/null 2>&1 || true\nsleep 2; kill $BPID 2>/dev/null || true\ntshark -r lab/m32/lab10/session.btsnoop -Y \"bthci_cmd or btatt\" | head -30\nsha256sum lab/m32/lab10/session.btsnoop | tee lab/m32/lab10/preuve.sha256"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> session.btsnoop et son empreinte."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Supprimez la capture si elle contient des données personnelles non nécessaires."
    },
    {
      "t": "h",
      "x": "32.7 Dix CTF — scénarios de lab avec flags"
    },
    {
      "t": "h",
      "x": "CTF 01/10 — Le nom caché"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Retrouver le nom d'un capteur BLE de lab à partir de la publicité.<br><strong>Environnement :</strong> Capture advertise BLE, capteur LAB-BEACON."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf1_advert_name}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Capturer les publicités",
          "p": "Scan passif de 15 secondes."
        },
        {
          "h": "Repérer le device",
          "p": "Le nom apparaît dans l'advertise ou après connexion."
        },
        {
          "h": "Extraire le flag",
          "p": "Le nom encodé contient le flag."
        },
        {
          "h": "Documenter",
          "p": "Notez l'adresse et l'heure."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 01",
      "x": "timeout 15 sudo hcitool lescan --duplicates | tee lab/m32/ctf1/scan.txt\ngrep -i 'LAB-BEACON' lab/m32/ctf1/scan.txt\n# si le nom est tronqué : le lire via GATT 0x2A00\ngatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A00 | tee lab/m32/ctf1/name.txt\n# flag{m32_ctf1_advert_name}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Le nom du device ne doit jamais contenir de secret en production."
    },
    {
      "t": "h",
      "x": "CTF 02/10 — Le service oublié"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier un service GATT de debug exposé par un firmware de lab.<br><strong>Environnement :</strong> Capteur BLE de lab avec UUID 128 bits custom."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf2_debug_service}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": " Énumérer les services",
          "p": "--primary liste tous les UUID."
        },
        {
          "h": "Repérer l'UUID inattendu",
          "p": "Comparez avec la liste attendue du produit."
        },
        {
          "h": "Lire la description",
          "p": "Une caractéristique contient le flag."
        },
        {
          "h": "Rapporter",
          "p": "Décrivez le risque d'exposition de service de debug."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 02",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --primary | tee lab/m32/ctf2/primary.txt\n# chercher un UUID 128 bits (32 hex)\ngrep -E '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}' lab/m32/ctf2/primary.txt\ngatttool -b \"$TARGET\" --char-read-uuid 0000ff01-0000-1000-8000-00805f9b34fb\n# flag{m32_ctf2_debug_service}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Retirer les services de debug des builds de production."
    },
    {
      "t": "h",
      "x": "CTF 03/10 — La batterie bavarde"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Lire une caractéristique de batterie non protégée et récupérer le flag.<br><strong>Environnement :</strong> Capteur exposant 0x2A19 sans authentification."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf3_battery_leak}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Vérifier les propriétés",
          "p": "La caractéristique doit être readable."
        },
        {
          "h": "Lire la valeur",
          "p": "UUID 0x2A19."
        },
        {
          "h": "Interpréter",
          "p": "La valeur encode le flag en hexadécimal."
        },
        {
          "h": "Corriger",
          "p": "Exiger un lien authentifié pour les données sensibles."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 03",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --characteristics | grep -i 2a19\ngatttool -b \"$TARGET\" --char-read-uuid 0x2A19 | tee lab/m32/ctf3/battery.txt\n# flag{m32_ctf3_battery_leak}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Contrôle d'accès sur les caractéristiques sensibles."
    },
    {
      "t": "h",
      "x": "CTF 04/10 — Le CCCD mal gardé"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Activer une notification via CCCD et recevoir le flag émis par le capteur.<br><strong>Environnement :</strong> Capteur avec caractéristique notify flag."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf4_notify_flag}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Trouver le descripteur",
          "p": "Cherchez 0x2902 après la caractéristique notify."
        },
        {
          "h": "Écrire 0100",
          "p": "Active les notifications."
        },
        {
          "h": "Recevoir",
          "p": "Le flag est envoyé en notification."
        },
        {
          "h": "Nettoyer",
          "p": "Réécrivez 0000."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 04",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --char-desc | grep -i 2902\ngatttool -b \"$TARGET\" -I <<'EOF'\nchar-write-req 0x0007 0100\nexit\nEOF\n# flag{m32_ctf4_notify_flag}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Restreindre l'écriture du CCCD aux clients authentifiés."
    },
    {
      "t": "h",
      "x": "CTF 05/10 — SDP bavard"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Retrouver un service RFCOMM non documenté dans l'annuaire SDP d'un casque de lab.<br><strong>Environnement :</strong> Casque BR/EDR de lab."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf5_sdp_service}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Parcourir SDP",
          "p": "sdptool browse."
        },
        {
          "h": "Chercher un port inattendu",
          "p": "Un service custom occupe un canal."
        },
        {
          "h": "Lire le nom du service",
          "p": "Il contient le flag."
        },
        {
          "h": "Rapporter",
          "p": "Service non documenté = surface à retirer."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 05",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\nsdptool browse \"$TARGET\" | tee lab/m32/ctf5/sdp.txt\ngrep -A4 -B2 -i 'flag\\|test\\|debug' lab/m32/ctf5/sdp.txt\n# flag{m32_ctf5_sdp_service}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Limiter les enregistrements SDP aux seuls services nécessaires."
    },
    {
      "t": "h",
      "x": "CTF 06/10 — La piste HCI"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Extraire d'une capture btsnoop l'adresse et la commande d'appairage du lab.<br><strong>Environnement :</strong> Fichier session.btsnoop fourni."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf6_hci_trace}</code> — à retrouver uniquement sur la cible de lab."
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
          "p": "tshark -r."
        },
        {
          "h": "Filtrer les commandes HCI",
          "p": "bthci_cmd."
        },
        {
          "h": "Repérer l'opcode de pairing",
          "p": "La réponse contient le flag encodé."
        },
        {
          "h": "Conserver la preuve",
          "p": "Hash de la capture."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 06",
      "x": "tshark -r lab/m32/captures/session.btsnoop -Y bthci_cmd \\\n  -T fields -e frame.number -e bthci_cmd.opcode | head -20\ntshark -r lab/m32/captures/session.btsnoop -Y 'bthci_evt || bthci_cmd' | grep -i flag\n# flag{m32_ctf6_hci_trace}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Ne stockez pas de secrets dans des champs de protocole."
    },
    {
      "t": "h",
      "x": "CTF 07/10 — Les sauts BLE"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier le canal publicitaire utilisé par un capteur et le documenter.<br><strong>Environnement :</strong> Sniffeur nRF ou capture fournie."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf7_ble_channels}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Observer les publicités",
          "p": "Canaux 37, 38, 39."
        },
        {
          "h": "Déterminer le canal actif",
          "p": "Le fichier de capture l'indique."
        },
        {
          "h": "Extraire la valeur",
          "p": "Le flag est dans le commentaire du lab."
        },
        {
          "h": "Expliquer",
          "p": "Le saut de fréquence réduit les interférences."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 07",
      "x": "# Avec un nRF Sniffer + Wireshark, filtrez :\n# btle.advertising_channel == 37 || 38 || 39\ntshark -r lab/m32/captures/ble_adv.pcapng -Y btle \\\n  -T fields -e btle.advertising_channel -e frame.time_relative | head\n# flag{m32_ctf7_ble_channels}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Ne jamais émettre sur ces canaux hors banc blindé et autorisation."
    },
    {
      "t": "h",
      "x": "CTF 08/10 — L'appairage Just Works"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Démontrer sur deux appareils de lab qu'un appairage sans authentification accepte une connexion.<br><strong>Environnement :</strong> Deux dongles/capteurs de lab à vous."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf8_just_works}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Vérifier le mode d'appairage",
          "p": "Just Works n'affiche aucun code."
        },
        {
          "h": "Connecter",
          "p": "bluetoothctl connect."
        },
        {
          "h": "Confirmer l'absence de challenge",
          "p": "Aucune confirmation numérique."
        },
        {
          "h": "Documenter",
          "p": "Recommander numeric comparison."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 08",
      "x": "bluetoothctl\n[bluetooth]# scan on\n[bluetooth]# pair AA:BB:CC:DD:EE:FF\n[bluetooth]# connect AA:BB:CC:DD:EE:FF\n[bluetooth]# info AA:BB:CC:DD:EE:FF\n# flag{m32_ctf8_just_works}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Préférer LE Secure Connections avec comparaison numérique."
    },
    {
      "t": "h",
      "x": "CTF 09/10 — Le firmware non signé"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier sur un firmware de lab une mise à jour OTA sans vérification de signature.<br><strong>Environnement :</strong> Capteur de lab avec service OTA custom."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf9_ota_unsigned}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Énumérer GATT",
          "p": "Chercher un service OTA."
        },
        {
          "h": "Lire les caractéristiques",
          "p": "Version, taille, données."
        },
        {
          "h": "Vérifier la présence d'une signature",
          "p": "Son absence est le constat."
        },
        {
          "h": "Rapporter",
          "p": "Exiger signature et bootloader sécurisé."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 09",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\ngatttool -b \"$TARGET\" --primary | grep -i -E 'ota|dfu|firmware'\ngatttool -b \"$TARGET\" --characteristics | tee lab/m32/ctf9/ota_chars.txt\ngrep -i -E 'version|sig|data' lab/m32/ctf9/ota_chars.txt\n# flag{m32_ctf9_ota_unsigned}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Signer les firmwares et refuser les images non vérifiées."
    },
    {
      "t": "h",
      "x": "CTF 10/10 — Casque TWS bavard"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Cartographier les profils exposés par un casque TWS de lab et identifier une surface inutile.<br><strong>Environnement :</strong> Casque TWS de lab, SDP + GATT."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m32_ctf10_tws_surface}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "SDP first",
          "p": "Profils A2DP/HFP/AVRCP attendus."
        },
        {
          "h": "GATT ensuite",
          "p": "Services BLE du casque."
        },
        {
          "h": "Comparer",
          "p": "Un service HID ou debug inattendu est le flag."
        },
        {
          "h": "Recommander",
          "p": "Désactiver le service superflu."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 10",
      "x": "TARGET=\"AA:BB:CC:DD:EE:FF\"\nsdptool browse \"$TARGET\" | grep 'Service Name' | tee lab/m32/ctf10/profiles.txt\ngatttool -b \"$TARGET\" --primary | tee lab/m32/ctf10/gatt.txt\ngrep -i 'flag\\|debug\\|hid' lab/m32/ctf10/gatt.txt\n# flag{m32_ctf10_tws_surface}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Revue de firmware : supprimer tout service non fonctionnel."
    },
    {
      "t": "h",
      "x": "32.8 Checklist de durcissement et rapport"
    },
    {
      "t": "ul",
      "x": [
        "Appairage en LE Secure Connections avec comparaison numérique dès que l'appareil a un écran.",
        "Aucun PIN court, aucun mode Just Works par défaut sur un produit grand public.",
        "Aucun service de debug ni UUID custom non documenté dans le firmware de production.",
        "Caractéristiques sensibles protégées par authentification et autorisation côté firmware.",
        "Adresse privée résolvable avec rotation et clé IRK protégée.",
        "Mises à jour OTA signées, bootloader verrouillé, anti-rollback.",
        "Journalisation des événements d'appairage et des tentatives d'écriture refusées.",
        "Rapport : périmètre, matériel, versions, captures horodatées, hash SHA-256, impact et remédiation."
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Trame de rapport —à compléter en lab",
      "x": "Périmètre : 1 casque TWS de lab + 1 capteur BLE de lab, banc isolé\nMatériel : dongle CSR8510, nRF52840 (sniffer), VM Kali outillée\nVersions : BlueZ x.y, btmon x.y, firmware lab 1.0\nActivités : scan BR/EDR, scan BLE, lecture GATT, capture HCI\nConstats :\n - [ ] service GATT non documenté\n - [ ] caractéristique lisible sans authentification\n - [ ] appairage Just Works\nPreuves : lab/m32/captures/*.btsnoop (SHA-256 dans preuves/)\nImpact : très faible à faible → à évaluer selon le contexte métier\nRemédiation : prioriser signature firmware, retrait services debug, Secure Connections"
    }
  ],
  "exos": [
    {
      "id": "bt01",
      "title": "Activer l'interface HCI",
      "context": "Dongle Bluetooth de lab branché sur la VM.",
      "task": "Mettez hci0 en service.",
      "hint": "Commencez par hciconfig.",
      "solution": "sudo hciconfig hci0 up",
      "accept": [
        "sudo hciconfig hci0 up",
        "hciconfig hci0 up"
      ],
      "output": [
        "++ Interface hci0: Type: USB",
        "++ État UP/RUNNING"
      ],
      "read": "L'interface est active : les commandes BlueZ peuvent maintenant être émises.",
      "pivot": "Sans interface UP, aucun scan ni capture n'est possible."
    },
    {
      "id": "bt02",
      "title": "Scanner en BR/EDR",
      "context": "Casque de lab en mode appairage.",
      "task": "Découvrez les appareils classiques.",
      "hint": "Utilisez hcitool et l'option scan.",
      "solution": "sudo hcitool scan",
      "accept": [
        "sudo hcitool scan",
        "hcitool scan",
        "hcitool scan --duration=10"
      ],
      "output": [
        "++ Scanning...",
        "++ AA:BB:CC:DD:EE:FF\tLAB-HEADSET"
      ],
      "read": "La sortie donne l'adresse et le nom de l'appareil découvert.",
      "pivot": "L'adresse servira de cible au cartographie SDP."
    },
    {
      "id": "bt03",
      "title": "Scanner en BLE",
      "context": "Capteur BLE de lab allumé.",
      "task": "Listez les périphériques BLE avec répétitions.",
      "hint": "hcitool lescan accepte --duplicates.",
      "solution": "sudo hcitool lescan --duplicates",
      "accept": [
        "sudo hcitool lescan --duplicates",
        "hcitool lescan --duplicates"
      ],
      "output": [
        "++ LE Scan ...",
        "++ AA:BB:CC:DD:EE:FF LAB-SENSOR"
      ],
      "read": "Les publicités BLE révèlent nom et adresse sans connexion.",
      "pivot": "C'est la phase de reconnaissance la moins intrusive."
    },
    {
      "id": "bt04",
      "title": "Lire les informations LMP",
      "context": "Adresse de lab AA:BB:CC:DD:EE:FF.",
      "task": "Obtenez la version et le fabricant du casque.",
      "hint": "hcitool info + adresse.",
      "solution": "sudo hcitool info AA:BB:CC:DD:EE:FF",
      "accept": [
        "sudo hcitool info AA:BB:CC:DD:EE:FF",
        "hcitool info AA:BB:CC:DD:EE:FF"
      ],
      "output": [
        "++ Device: AA:BB:CC:DD:EE:FF",
        "++ Manufacturer: Cambridge Silicon Radio"
      ],
      "read": "Les champs LMP et manufacturer indentifient le contrôleur.",
      "pivot": "Ils aident à vérifier si le firmware est à jour."
    },
    {
      "id": "bt05",
      "title": "Cartographier SDP",
      "context": "Casque de lab à portée.",
      "task": "Listez les services exposés.",
      "hint": "sdptool browse.",
      "solution": "sdptool browse AA:BB:CC:DD:EE:FF",
      "accept": [
        "sdptool browse AA:BB:CC:DD:EE:FF"
      ],
      "output": [
        "++ Service Name: Audio Source",
        "++ Channel: 12"
      ],
      "read": "SDP révèle les profils (A2DP, HFP, AVRCP) et leurs canaux.",
      "pivot": "Un service inattendu devient un point de vérification firmware."
    },
    {
      "id": "bt06",
      "title": "Lister les services GATT",
      "context": "Capteur BLE connecté en lab.",
      "task": "Affichez les services primaires.",
      "hint": "gatttool avec --primary.",
      "solution": "gatttool -b AA:BB:CC:DD:EE:FF --primary",
      "accept": [
        "gatttool -b AA:BB:CC:DD:EE:FF --primary",
        "gatttool -b AA:BB:CC:DD:EE:FF -I"
      ],
      "output": [
        "++ attr handle: 0x0001, end grp handle: 0x0005",
        "++ uuid: 0000180f-0000-1000-8000-00805f9b34fb"
      ],
      "read": "Chaque service occupe une plage de handles.",
      "pivot": "On cible ensuite une caractéristique dans cette plage."
    },
    {
      "id": "bt07",
      "title": "Lire le nom du device",
      "context": "Characteristic Device Name (0x2A00).",
      "task": "Lisez la valeur par UUID.",
      "hint": "gatttool avec --char-read-uuid.",
      "solution": "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A00",
      "accept": [
        "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 0x2A00",
        "gatttool -b AA:BB:CC:DD:EE:FF --char-read-uuid 2A00"
      ],
      "output": [
        "++ value: 4c 41 42 2d 53 45 4e 53 4f 52"
      ],
      "read": "La valeur hexadécimale se convertit en texte ASCII : LAB-SENSOR.",
      "pivot": "Le nom peut porter des informations de version ou d'environnement."
    },
    {
      "id": "bt08",
      "title": "Activer les notifications",
      "context": "CCCD situé au handle 0x0005.",
      "task": "Activez les notifications avec char-write-req.",
      "hint": "Écrivez 0100 (little-endian).",
      "solution": "gatttool -b AA:BB:CC:DD:EE:FF -I",
      "accept": [
        "gatttool -b AA:BB:CC:DD:EE:FF -I",
        "char-write-req 0x0005 0100"
      ],
      "output": [
        "++ Characteristic value was written successfully",
        "++ Notification: 0x2A19 value: 64"
      ],
      "read": "Le bit 0 du CCCD active les notifications ; le bit 1 les indications.",
      "pivot": "Pensez à réécrire 0000 pour arrêter le flux."
    },
    {
      "id": "bt09",
      "title": "Capturer le trafic HCI",
      "context": "Session de lab à enregistrer.",
      "task": "Démarrez une capture btsnoop.",
      "hint": "btmon avec l'option -w.",
      "solution": "sudo btmon -w lab/m32/captures/session.btsnoop",
      "accept": [
        "sudo btmon -w lab/m32/captures/session.btsnoop",
        "btmon -w lab/m32/captures/session.btsnoop"
      ],
      "output": [
        "++ Wrote 2048 bytes",
        "++ Monitoring HCI traffic"
      ],
      "read": "La capture contient les commandes et événements HCI horodatés.",
      "pivot": "Sans capture, aucune preuve reproductible n'est possible."
    },
    {
      "id": "bt10",
      "title": "Filtrer une capture",
      "context": "Fichier session.btsnoop disponible.",
      "task": "Affichez uniquement les paquets ATT.",
      "hint": "tshark avec un filtre d'affichage.",
      "solution": "tshark -r lab/m32/captures/session.btsnoop -Y btatt",
      "accept": [
        "tshark -r lab/m32/captures/session.btsnoop -Y btatt",
        "tshark -r lab/m32/captures/session.btsnoop -Y \"btatt\""
      ],
      "output": [
        "++ 42 1.203000 host -> 11.11.11.11 ATT 7 Read By Group Type Request"
      ],
      "read": "Le filtre btatt isole les opérations GATT/ATT de la trace.",
      "pivot": "C'est ici qu'on lit quels handles ont été lus ou écrits."
    }
  ],
  "quiz": "q32"
};
