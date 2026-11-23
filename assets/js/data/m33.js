export default {
  "id": "m33",
  "num": 33,
  "title": "Sécurité radio — SDR, bandes ISM et systèmes sans fil",
  "short": "Radio / SDR",
  "icon": "📡",
  "xp": 480,
  "duration": 200,
  "summary": "Cours complet en français sur la sécurité radio logicielle : bandes ISM, modulation, capture I/Q, GNU Radio, RFID et ADS-B, avec 10 exercices interactifs, 10 labs sur banc isolé, 10 CTF et un accent fort sur la conformité réglementaire.",
  "objectives": [
    "Expliquer fréquence, longueur d'onde, bande passante, gain, RSSI et rapport signal sur bruit.",
    "Distinguer les modulations ASK/OOK, FSK/GFSK et LoRa et leurs usages.",
    "Utiliser rtl_sdr, rtl_433, hackrf_transfer, gqrx, URH, inspectrum et GNU Radio.",
    "Capturer, visualiser et décoder un signal de lab au format I/Q.",
    "Construire un graphe GNU Radio simple : source, filtre, sortie.",
    "Comprendre le rôle des codes roulants et du duty cycle.",
    "Réaliser 10 labs RF dans un banc isolé avec preuves horodatées et empreintes SHA-256.",
    "Résoudre 10 CTF RF avec flags, commandes et remédiation.",
    "Appliquer la réglementation ANFR/ETSI/FCC et refuser tout brouillage illicite.",
    "Rédiger un rapport RF reproductible et conforme."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 33 — Sécurité radio : SDR, bandes ISM et systèmes sans fil</strong>. Ce cours présente les bases de la radio logicielle (SDR), les bandes utilisées par les objets connectés, les outils de capture et d'analyse, puis dix labs et dix CTF exécutables sur un banc RF isolé. L'objectif est de comprendre ce qui circule dans l'air et de savoir écrire une preuve exploitable — jamais d'émettre hors périmètre autorisé."
    },
    {
      "t": "callout",
      "v": "danger",
      "title": "Cadre légal et réglementaire — lecture obligatoire",
      "x": "Toutes les techniques de ce module sont réservées à un laboratoire isolé : vos propres appareils, des devices de test achetés pour l'occasion, une cage de Faraday ou un banc RF atténué, et des cibles intentionnellement vulnérables. N'écoutez, n'interceptez, ne brouillez, n'appariez ni ne modifiez jamais un appareil appartenant à autrui sans autorisation écrite préalable. La réglementation radio (ANFR/FCC/ETSI) impose des bandes, des puissances et des cycles d'utilisation : hors lab blindé, émettre sans licence est interdit. Le brouillage (jammer) est formellement proscrit hors enceinte blindée et cadre réglementaire. En France, l'ANFR et l'ETSI fixent les bandes SRD, les puissances et les cycles d'utilisation. Un RTL-SDR en réception passive est généralement utilisable pour apprendre ; un émetteur (HackRF, Flipper Zero, CC1101) ne doit fonctionner que dans une enceinte blindée ou avec une autorisation de fréquence."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Durée estimée : 200 min · XP : 480 · 10 exercices · 10 labs · 10 CTF",
      "x": "Matériel recommandé : RTL-SDR (réception), HackRF One ou Flipper Zero (émission en laboratoire blindé seulement), antennes adaptées, VM Linux avec GNU Radio, URH et Wireshark."
    },
    {
      "t": "h",
      "x": "33.1 Bases radio : fréquence, bande et modulation"
    },
    {
      "t": "p",
      "x": "Un signal radio est une onde électromagnétique caractérisée par une <strong>fréquence</strong> (nombre d'oscillations par seconde, en Hz), une <strong>amplitude</strong> et une <strong>phase</strong>. La relation <code>λ = c / f</code> relie longueur d'onde et fréquence. La <strong>bande passante</strong> est la plage de fréquences occupée par le signal : plus elle est large, plus on peut transmettre de données, mais plus on occupe le spectre. Un récepteur SDR numérise une portion de spectre et produit des échantillons <strong>I/Q</strong> (phase et quadrature) qu'un logiciel traite."
    },
    {
      "t": "table",
      "head": [
        "Notion",
        "Définition simple",
        "Analogie",
        "Dans les outils"
      ],
      "rows": [
        [
          "Fréquence (f)",
          "Nombre de cycles par seconde",
          "La hauteur d'une note de musique",
          "-f 433.92M"
        ],
        [
          "Longueur d'onde (λ)",
          "Distance parcourue pendant un cycle",
          "L'espacement entre deux crêtes",
          "λ ≈ 69 cm à 433,92 MHz"
        ],
        [
          "Bande passante (BW)",
          "Largeur du spectre occupé",
          "La largeur d'un tuyau",
          "-s 2M (2 MHz)"
        ],
        [
          "Gain (g)",
          "Amplification appliquée au récepteur",
          "Le volume du poste",
          "-g 20"
        ],
        [
          "RSSI",
          "Puissance du signal reçu (dBm)",
          "La force d'une voix",
          "Affiché dans gqrx / SDR++"
        ],
        [
          "SNR",
          "Rapport signal sur bruit",
          "Voix vs brouhaha",
          "Détermine la lisibilité"
        ],
        [
          "I/Q",
          "Échantillons en phase et quadrature",
          "Deux composantes d'un même mouvement",
          "Fichier .iq / .cfile"
        ],
        [
          "Nyquist",
          "Fe := 2 × B maximale sans repliement",
          "Nombre de photos minimum pour filmer un mouvement",
          "Fe ≥ 2 × bande utile"
        ]
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Choisir la bande",
          "p": "Listez les appareils de votre lab et leurs fréquences documentées : 433,92 MHz, 868 MHz, 2,4 GHz. Ne scannez que les bandes que vous êtes autorisé à observer."
        },
        {
          "h": "Étape 2 — Régler le gain",
          "p": "Commencez avec un gain faible (10-20) et augmentez jusqu'à obtenir un bruit de fond stable sans saturation."
        },
        {
          "h": "Étape 3 — Régler la fréquence et le sample rate",
          "p": "Centrez sur la fréquence cible et choisissez 2 MS/s pour couvrir largement un signal 433 MHz."
        },
        {
          "h": "Étape 4 — Observer le spectrogramme",
          "p": "Dans gqrx ou SDR++, repérez les pics : largeur, durée, répétition. C'est la signature du signal."
        },
        {
          "h": "Étape 5 — Capturer",
          "p": "Enregistrez un fichier IQ brut avec rtl_sdr ou hackrf_transfer. Notez fréquence, sample rate, gain, date et antenne."
        },
        {
          "h": "Étape 6 — Analyser",
          "p": "Ouvrez le fichier dans URH, inspectrum ou GNU Radio pour décoder ou visualiser la modulation."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Première capture RTL-SDR — 433,92 MHz",
      "x": "# LAB RF — réception passive d'un émetteur de lab (télécommande à vous)\nmkdir -p lab/m33/{iq,decodes,preuves,rapport,grc}\n\n# Vérifier que le dongle est vu\nrtl_eeprom 2>/dev/null | head -5 || true\nrtl_test -t 2>&1 | head -10\n\n# Capture brute : 2 secondes à 2 MS/s, gain 20\nrtl_sdr -f 433920000 -s 2000000 -g 20 -n 4000000 lab/m33/iq/433_capture.iq\n\n# Capture continue (Ctrl+C pour arrêter) avec horodatage\ntimeout 10 rtl_sdr -f 433920000 -s 2000000 -g 20 \\\n  lab/m33/iq/433_live.iq\n\n# Métadonnées minimales de la preuve\ncat > lab/m33/preuves/433_meta.txt <<EOF\nFrequence: 433920000 Hz\nSample rate: 2000000 S/s\nGain: 20 dB\nDate: $(date -Iseconds)\nAntenne: monopole 433 MHz\nCible: emetteur de laboratoire uniquement\nEOF\nsha256sum lab/m33/iq/433_capture.iq | tee lab/m33/preuves/433.sha256"
    },
    {
      "t": "glossary",
      "title": "Vocabulaire radio",
      "intro": "Les termes essentiels pour lire un spectrogramme et un rapport RF.",
      "items": [
        {
          "term": "ASK / OOK",
          "full": "Amplitude Shift Keying / On-Off Keying",
          "def": "Modulation où l'information est portée par l'amplitude (présence ou absence de porteuse).",
          "use": "Fréquent pour les télécommandes 433 MHz bon marché.",
          "ex": "rtl_433 -R 40"
        },
        {
          "term": "FSK / GFSK",
          "full": "Frequency Shift Keying / Gaussian FSK",
          "def": "L'information est portée par de petites variations de fréquence.",
          "use": "Utilisé en BLE, LoRa FSK, beaucoup de capteurs.",
          "ex": "gqrx mode NBFM"
        },
        {
          "term": "LoRa",
          "full": "Long Range (chirp spread spectrum)",
          "def": "Modulation à étalement de spectre très résistante au bruit.",
          "use": "Portée longue, débit faible, trames lisibles à bas SNR.",
          "ex": "rtl_433 -R 149"
        },
        {
          "term": "Preambule",
          "full": "Préambule",
          "def": "Suite de bits connue en début de trame pour synchroniser le récepteur.",
          "use": "URH la détecte automatiquement pour retrouver le début du message.",
          "ex": "10101010..."
        },
        {
          "term": "Manchester",
          "full": "Codage de Manchester",
          "def": "Codage où chaque bit est représenté par une transition.",
          "use": "Fréquent en RFID et 433 MHz ; Kalman et URH le décodent.",
          "ex": "01 → 10"
        },
        {
          "term": "Roll code",
          "full": "Rolling code",
          "def": "Code changeant à chaque émission (KeeLoq, Hitag2).",
          "use": "Empêche la relecture simple d'une trame capturée.",
          "ex": "Vérifier une résistance au replay en lab"
        },
        {
          "term": "Duty cycle",
          "full": "Cycle d'utilisation",
          "def": "Pourcentage de temps pendant lequel un appareil émet.",
          "use": "Limite réglementaire : ne pas le dépasser hors permission.",
          "ex": "ETSI EN 300 220"
        },
        {
          "term": "Near/far",
          "full": "Effet near-far",
          "def": "Un émetteur proche masque un émetteur lointain.",
          "use": "Explique pourquoi un casque proche domine le spectrogramme.",
          "ex": "Réduire le gain ou s'éloigner"
        }
      ]
    },
    {
      "t": "h",
      "x": "33.2 Bandes ISM, SRD et réglementation"
    },
    {
      "t": "p",
      "x": "Les bandes <strong>ISM</strong> (Industrial, Scientific, Medical) et <strong>SRD</strong> (Short Range Devices) sont ouvertes à des équipements de faible puissance sous conditions. Les valeurs ci-dessous sont des repères pédagogiques : vérifiez toujours la réglementation en vigueur dans votre pays et la version applicable de la norme."
    },
    {
      "t": "table",
      "head": [
        "Bande",
        "Fréquence",
        "Usages typiques",
        "Point réglementaire"
      ],
      "rows": [
        [
          "ISM 433 MHz",
          "433,05 – 434,79 MHz",
          "Télécommandes, capteurs météo, TPMS",
          "Puissance très limitée, duty cycle contraignant (ETSI)"
        ],
        [
          "SRD 868 MHz",
          "868 – 870 MHz",
          "Compteurs, domotique, LoRa",
          "Sous-bandes avec duty cycles différents"
        ],
        [
          "ISM 915 MHz",
          "902 – 928 MHz",
          "RFID UHF, LoRa (Amérique du Nord)",
          "Réglementation FCC, bandes plus larges"
        ],
        [
          "ISM 2,4 GHz",
          "2,400 – 2,483,5 GHz",
          "Wi-Fi, Bluetooth, Zigbee, micro-ondes",
          "Puissance limitée, coexistence dense"
        ],
        [
          "ISM 5,8 GHz",
          "5,725 – 5,875 GHz",
          "Liens vidéo, radar",
          "Conditions spécifiques"
        ],
        [
          "RFID LF/HF",
          "125 kHz / 13,56 MHz",
          "Badges, cartes, paiement sans contact",
          "Champs proches, normes ISO dédiées"
        ]
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Réception passive vs émission",
      "x": "Écouter avec un RTL-SDR n'émet rien. Capturer puis rejouer avec un HackRF émet des ondes : même à faible puissance, cela nécessite un banc blindé et une autorisation. Le brouillage est interdit hors cas réglementaires très encadrés (immunité EMC en chambre anéchoïque par exemple)."
    },
    {
      "t": "cmdref",
      "title": "Commandes de découverte et d'analyse RF",
      "intro": "Réglages exprimés en Hz, échantillons/seconde (S/s) et dB. Adaptez-les à votre matériel de lab.",
      "items": [
        {
          "cmd": "rtl_sdr -f <Hz> -s <S/s> -g <dB> out.iq",
          "tag": "capture",
          "what": "Enregistre les échantillons I/Q bruts du récepteur RTL.",
          "gives": "Un fichier .iq de 8 bits par composante (CU8).",
          "use": "Choisissez la fréquence du signal de lab et une bande assez large.",
          "syntax": "rtl_sdr -f <Hz> -s <rate> -g <gain> <fichier.iq>",
          "example": "rtl_sdr -f 433920000 -s 2000000 -g 20 cap.iq",
          "read": "Un fichier trop petit ne contient pas assez de trames pour décoder."
        },
        {
          "cmd": "rtl_433 -f 433.92M",
          "tag": "décodage",
          "what": "Décode plus de 150 protocoles de capteurs sans fil.",
          "gives": "Horodatage, type de capteur, id, température, etc.",
          "use": "Laissez tourner quelques secondes face à votre capteur de lab.",
          "syntax": "rtl_433 -f <freq> -R <protocole>",
          "example": "rtl_433 -f 433.92M -R 40 -F json",
          "read": "Une ligne JSON par trame décodée : c'est une preuve directe."
        },
        {
          "cmd": "hackrf_transfer -r cap.iq -f <Hz> -s <rate>",
          "tag": "capture large bande",
          "what": "Enregistre avec un HackRF One en réception.",
          "gives": "Fichier I/Q signé 8 bits (CS8).",
          "use": "Utile au-delà de 1,7 GHz ou pour plus de bande passante.",
          "syntax": "hackrf_transfer -r <fichier> -f <Hz> -s <rate> -g <gain>",
          "example": "hackrf_transfer -r cap.iq -f 433920000 -s 2000000 -g 20",
          "read": "Le format diffère du RTL-SDR : renseignez-le dans URH."
        },
        {
          "cmd": "hackrf_transfer -t cap.iq -f <Hz> -s <rate>",
          "tag": "réémission (lab blindé)",
          "what": "Rejoue un fichier I/Q précédemment capturé.",
          "gives": "Émission du signal sur la fréquence choisie.",
          "use": "Uniquement en enceinte blindée, sur votre propre appareil, puissance minimale.",
          "syntax": "hackrf_transfer -t <fichier> -f <Hz> -s <rate> -x <txvga>",
          "example": "hackrf_transfer -t replay.iq -f 433920000 -s 2000000 -x 0",
          "read": "Cette commande émet réellement : hors lab autorisé, c'est interdit."
        },
        {
          "cmd": "gqrx",
          "tag": "analyse visuelle",
          "what": "Ouvre un spectrogramme et un analyseur de spectre temps réel.",
          "gives": "Pics, largeur, durée, bruit de fond.",
          "use": "Réglez fréquence, gain et mode de démodulation à la souris.",
          "syntax": "gqrx",
          "example": "gqrx",
          "read": "Un pic bref et répété indique une télécommande."
        },
        {
          "cmd": "urh",
          "tag": "décodage",
          "what": "Universal Radio Hacker : détecte préambules, bits et protocoles.",
          "gives": "Trames décodées, bits, champs.",
          "use": "Importez le .iq, choisissez le format d'échantillons, puis « Autodetect parameters ».",
          "syntax": "urh",
          "example": "urh",
          "read": "URH apprend la modulation à partir de votre propre capture."
        },
        {
          "cmd": "inspectrum",
          "tag": "visualisation",
          "what": "Affiche le spectrogramme d'un fichier IQ et mesure une largeur de bande.",
          "gives": "Durée, bandwidth, motifs temporels.",
          "use": "Sélectionnez une zone et lisez les mesures.",
          "syntax": "inspectrum cap.iq",
          "example": "inspectrum lab/m33/iq/433_capture.iq",
          "read": "La largeur mesurée aide à choisir le filtre GNU Radio."
        }
      ]
    },
    {
      "t": "h",
      "x": "33.3 GNU Radio et traitement du signal"
    },
    {
      "t": "p",
      "x": "GNU Radio est un environnement de traitement du signal en blocs. On y assemble un graphe : <strong>source</strong> (fichier IQ ou SDR) → <strong>filtre</strong> → <strong>démodulateur</strong> → <strong>sink</strong> (fichier, audio, affichage). Le fichier .grc est le schéma, le .py est le script généré. Comprendre ce graphe permet de passer d'un spectrogramme à des bits, puis à une trame décodable."
    },
    {
      "t": "table",
      "head": [
        "Bloc GNU Radio",
        "Fonction",
        "Paramètre clé",
        "Résultat"
      ],
      "rows": [
        [
          "File Source",
          "Lit un fichier IQ",
          "Format CU8/CS8, répétition",
          "Flux d'échantillons"
        ],
        [
          "Low Pass Filter",
          "Garde uniquement la bande utile",
          "Cutoff, transition",
          "Signal débruité"
        ],
        [
          "Quadrature Demod",
          "Démodule FSK/GFSK",
          "Gain",
          "Signal en amplitude"
        ],
        [
          "Clock Recovery MM",
          "Récupère l'horloge de bits",
          "Omega, gain mu",
          "Flux de bits synchronisé"
        ],
        [
          "Binary Slicer",
          "Convertit en 0/1",
          "Seuil",
          "Bits"
        ],
        [
          "File Sink / Message Debug",
          "Sauvegarde ou affiche",
          "Chemin / buffer",
          "Trame décodée"
        ]
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Générer un signal de test local (sans émettre)",
      "x": "# LAB — créer un fichier IQ synthétique pour apprendre à décoder\npython3 - <<'PY'\nimport numpy as np\nfs = 2_000_000\nt = np.arange(0, 0.2, 1/fs)\nfc = 100_000                      # porteuse décalée dans le fichier\nbitrate = 10_000\nbits = np.array(list(\"1011001000110101\"), dtype=float)\nbits = np.repeat(bits, int(fs/bitrate))\nsig = 0.3 * np.sin(2*np.pi*fc*t) * (2*bits-1)\niq = (sig*127).astype(np.int8)\n# interleaver I,Q pour le format CS8 attendu par URH\ninter = np.empty(iq.size*2, dtype=np.int8)\ninter[0::2] = iq\ninter[1::2] = 0\ninter.tofile(\"lab/m33/iq/test_signal.cs8\")\nprint(\"Fichier de test:\", inter.size, \"octets\")\nPY\n\n# Visualisation et décodage sur fichier : aucune émission radio\ninspectrum lab/m33/iq/test_signal.cs8\nurh lab/m33/iq/test_signal.cs8"
    },
    {
      "t": "h",
      "x": "33.4 Surfaces d'attaque et scénarios pédagogiques"
    },
    {
      "t": "p",
      "x": "L'étude de la sécurité radio couvre plusieurs familles. Chacune illustre un principe de conception : absence d'authentification, secret réutilisable, absence de contrôle d'intégrité ou dépendance à un canal physique. Les scénarios ci-dessous sont décrits dans un cadre de lab et orientés vers la contre-mesure."
    },
    {
      "t": "table",
      "head": [
        "Famille",
        "Principe",
        "Ce qu'on observe en lab",
        "Contre-mesure"
      ],
      "rows": [
        [
          "Replay",
          "Une trame valide est réenregistrée puis rejouée",
          "L'action se répète sur l'appareil de lab",
          "Rolling code, horodatage, nonce, authentification"
        ],
        [
          "Rolljam (concept)",
          "Deux captures décalées permettent de réutiliser un code futur",
          "À modéliser, pas à exécuter hors lab",
          "Code à usage unique + synchronisation stricte"
        ],
        [
          "Brouillage (jam)",
          "Émission pour empêcher la réception",
          "Perte de liaison sur le banc blindé uniquement",
          "Détection de niveau, sauts de fréquence, VSWR, supervision"
        ],
        [
          "RFID LF 125 kHz",
          "Badge à faible sécurité, souvent en clair",
          "ID lisible et clonable sur carte de lab",
          "MIFARE DESFire, authentification, lecture sécurisée"
        ],
        [
          "RFID HF 13,56 MHz",
          "MIFARE Classic et Crypto1 faible",
          "Clés par défaut testées sur carte de lab",
          "Cartes avec authentification mutuelle forte"
        ],
        [
          "ADS-B",
          "Broadcast non chiffré des avions",
          "Position, altitude, vitesse en clair",
          "Authentification de données (futur), corrélation de sources"
        ],
        [
          "TPMS",
          "Capteurs de pression de pneus",
          "IDs et pressions captés en lab statique",
          "Chiffrement des trames, identification vérifiée"
        ],
        [
          "GSM (passif)",
          "Canal de contrôle diffusé en clair",
          "Cell ID, synchronisation, BCCH",
          "Chiffrement réseau, authentification mutuelle (4G/5G)"
        ]
      ]
    },
    {
      "t": "callout",
      "v": "legal",
      "title": "Ce que ce module ne fait pas",
      "x": "Aucune procédure d'interception de communications privées, d'usurpation de badge tiers, de neutralisation de véhicule ou d'infrastructure n'est fournie. Les manipulations décrites portent sur des équipements de lab appartenant à l'apprenant et servent à concevoir des défenses."
    },
    {
      "t": "h",
      "x": "33.5 Dix labs guidés — banc RF isolé"
    },
    {
      "t": "h",
      "x": "Lab 01 — Vérifier le dongle RTL-SDR"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Installer et tester le récepteur SDR de banc.<br><strong>Environnement :</strong> RTL-SDR + VM Linux."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Le pilote rtl-sdr expose un tuner et un démodulateur ; rtl_test vérifie les erreurs de lecture USB."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Brancher le dongle",
          "p": "Vérifiez la reconnaissance USB."
        },
        {
          "h": "Tester le flux",
          "p": "rtl_test -t mesure 5 secondes."
        },
        {
          "h": "Lire l'EEPROM",
          "p": "rtl_eeprom affiche l'identité du tuner."
        },
        {
          "h": "Noter",
          "p": "Référence, sériel, résultats dans sdr_info.txt."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 01",
      "x": "mkdir -p lab/m33/lab01\nlsusb | grep -i -E 'realtek|rtl' | tee lab/m33/lab01/usb.txt\nrtl_test -t 2>&1 | tee lab/m33/lab01/rtl_test.txt\nrtl_eeprom 2>/dev/null | tee lab/m33/lab01/eeprom.txt || true"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> rtl_test sans erreurs majeures."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Débranchez le dongle après usage."
    },
    {
      "t": "h",
      "x": "Lab 02 — Observer le bruit de fond"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Mesurer le plancher de bruit avant d'allumer un émetteur de lab.<br><strong>Environnement :</strong> RTL-SDR, aucun émetteur actif."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Le bruit de fond sert de référence : un signal n'est intéressant que s'il en sort clairement."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Régler gqrx",
          "p": "433,92 MHz, 2 MS/s, gain 15."
        },
        {
          "h": "Observer 10 secondes",
          "p": "Aucun pic attendu hors interférences connues."
        },
        {
          "h": "Capturer",
          "p": "2 secondes de bruit."
        },
        {
          "h": "Conserver",
          "p": "Fichier noise.iq + mesure RSSI."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 02",
      "x": "rtl_sdr -f 433920000 -s 2000000 -g 15 -n 4000000 lab/m33/lab02/noise.iq\npython3 - <<'PY'\nimport numpy as np\nx = np.fromfile('lab/m33/lab02/noise.iq', dtype=np.uint8).astype(float) - 127.5\nprint('Puissance moyenne (I):', round(np.mean(x[0::2]**2),2))\nprint('Puissance moyenne (Q):', round(np.mean(x[1::2]**2),2))\nPY"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> noise.iq et la mesure de référence."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Réduisez le gain si leADC sature."
    },
    {
      "t": "h",
      "x": "Lab 03 — Capturer une télécommande de lab"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Enregistrer la trame d'un émetteur appartenant au lab.<br><strong>Environnement :</strong> Télécommande 433 MHz de lab, RTL-SDR."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Une télécommande OOK émet une courte rafale. La capture I/Q conserve la forme d'onde exacte et permet de mesurer la durée de la trame et le motifs de bits."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Placer la télécommande",
          "p": "À 30 cm du dongle, dans le banc."
        },
        {
          "h": "Capturer 2 secondes",
          "p": "Pendant un appui sur le bouton."
        },
        {
          "h": "Visualiser",
          "p": "inspectrum pour voir la rafale."
        },
        {
          "h": "Mesurer",
          "p": "Durée et largeur de bande."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 03",
      "x": "rtl_sdr -f 433920000 -s 2000000 -g 20 -n 4000000 lab/m33/lab03/remote.iq\ninspectrum lab/m33/lab03/remote.iq\n# Mesurez la largeur du pic dans l'interface et notez-la dans lab03/mesures.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> remote.iq + mesures.txt."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> N'appuyez que sur votre propre télécommande de lab."
    },
    {
      "t": "h",
      "x": "Lab 04 — Décoder avec rtl_433"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Lire les trames de capteurs météo de lab.<br><strong>Environnement :</strong> Capteur 433 MHz de lab."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "rtl_433 contient des décodeurs pour de nombreux protocoles. Le format JSON facilite l'exploitation et l'horodatage des preuves."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Lancer rtl_433",
          "p": "En sortie JSON."
        },
        {
          "h": "Observer",
          "p": "Attendez deux ou trois trames."
        },
        {
          "h": "Identifier le capteur",
          "p": "Notez l'ID et le modèle."
        },
        {
          "h": "Sauvegarder",
          "p": "decodes.jsonl."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 04",
      "x": "timeout 20 rtl_433 -f 433.92M -F json -R 40 2>/dev/null \\\n  | tee lab/m33/lab04/decodes.jsonl\nwc -l lab/m33/lab04/decodes.jsonl\nhead -3 lab/m33/lab04/decodes.jsonl | jq ."
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Au moins deux trames JSON décodées."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne collectez que les données de votre capteur."
    },
    {
      "t": "h",
      "x": "Lab 05 — Découvrir les protocoles avec URH"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Analyser un fichier IQ sans connaître le protocole.<br><strong>Environnement :</strong> Capture remote.iq du lab 03."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "URH détecte le préambule, estime le débit binaire et affiche les bits. C'est un outil d'apprentissage : il ne suppose pas le protocole à l'avance."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Ouvrir le fichier",
          "p": "urh remote.iq, format CU8."
        },
        {
          "h": "Autodetect",
          "p": "Lancer la détection des paramètres."
        },
        {
          "h": "Décoder",
          "p": "Observer les bits et repérer les répétitions."
        },
        {
          "h": "Exporter",
          "p": "bits.txt et capture d'écran."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 05",
      "x": "urh lab/m33/lab03/remote.iq\n# Dans l'interface :\n# 1. Importer le fichier, format CU8, sample rate 2 MS/s\n# 2. Tools > Autodetect parameters\n# 3. Affichage > Bits, puis exporter vers lab/m33/lab05/bits.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> bits.txt et la capture d'écran URH."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Aucun appairage ni émission : analyse hors ligne."
    },
    {
      "t": "h",
      "x": "Lab 06 — Mesurer une bande avec inspectrum"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Déterminer la largeur de bande d'un signal capturé.<br><strong>Environnement :</strong> Capture du lab 03."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Un spectrogramme donne la largeur occupée et la durée. Ces deux valeurs conditionnent le filtre et le débit à utiliser dans GNU Radio."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Ouvrir inspectrum",
          "p": "Sélectionner le fichier IQ."
        },
        {
          "h": "Zoomer sur la rafale",
          "p": "Repérer les bords du signal."
        },
        {
          "h": "Mesurer",
          "p": "Largeur en kHz, durée en ms."
        },
        {
          "h": "Documenter",
          "p": "mesures_bande.txt."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 06",
      "x": "inspectrum lab/m33/lab03/remote.iq\n# Sélectionnez la zone du signal et lisez :\n# - Frequency range (largeur)\n# - Time selection (durée)\n# Notez les valeurs dans lab/m33/lab06/mesures_bande.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> Largeur et durée mesurées."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ces mesures restent dans le rapport de lab."
    },
    {
      "t": "h",
      "x": "Lab 07 — Premier graphe GNU Radio"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Assembler un graphe File Source → Low Pass → File Sink.<br><strong>Environnement :</strong> Fichier IQ synthétique du chapitre 33.3."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Un graphe minimal filtre un canal et sauvegarde le résultat. Le schéma .grc est relisible et versionnable : c'est la preuve de la méthode."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Créer le graphe",
          "p": "gnuradio-companion."
        },
        {
          "h": "Ajouter les blocs",
          "p": "File Source (CS8), Low Pass Filter, File Sink."
        },
        {
          "h": "Régler",
          "p": "Sample rate 2 MS/s, cutoff 100 kHz."
        },
        {
          "h": "Exécuter",
          "p": "Lancer et vérifier le fichier de sortie."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 07",
      "x": "gnuradio-companion\n# Blocs à placer :\n# File Source  ->  Low Pass Filter  ->  File Sink\n# Paramètres suggérés :\n#   File Source : lab/m33/iq/test_signal.cs8, format CS8, Repeat=No\n#   Low Pass Filter : Sample Rate=2e6, Cutoff=100e3, Transition=20e3\n#   File Sink : lab/m33/lab07/filtered.cfile, Format=Complex Float 32\n# Exécuter puis vérifier :\nls -lh lab/m33/lab07/filtered.cfile"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> filtered.cfile non vide."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Aucun périphérique radio impliqué : traitement hors ligne."
    },
    {
      "t": "h",
      "x": "Lab 08 — Écoute ADS-B passive"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Observer des trames ADS-B avec dump1090 si un aérodrome est proche.<br><strong>Environnement :</strong> RTL-SDR, réception passive uniquement."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "ADS-B diffuse en clair la position et l'altitude des aéronefs en 1090 MHz. Ce lab sert à comprendre la différence entre donnée publique et donnée sensible, sans jamais tenter d'émettre."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Régler la fréquence",
          "p": "1090 MHz."
        },
        {
          "h": "Lancer dump1090",
          "p": "Mode réseau local."
        },
        {
          "h": "Observer",
          "p": "Liste des pistes reçues."
        },
        {
          "h": "Limiter",
          "p": "Aucune donnée personnelle à conserver."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 08",
      "x": "mkdir -p lab/m33/lab08\ndump1090 --net --interactive --quiet 2>&1 | tee lab/m33/lab08/dump1090.log &\n# Ouvrir http://localhost:8080 pour observer les pistes locales\n# Arrêter après 30 s :\n# kill %1\n# Ne conserver que le nombre de pistes, pas de données personnelles."
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> dump1090.log et nombre de pistes."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne jamais émettre sur 1090 MHz."
    },
    {
      "t": "h",
      "x": "Lab 09 — RFID LF sur carte de lab"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Lire l'identifiant d'un badge 125 kHz appartenant au lab.<br><strong>Environnement :</strong> Proxmark3 ou lecteur RFID + carte de lab."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "Les badges 125 kHz de type EM4100 émettent un identifiant en clair par couplage inductif. Ce lab illustre pourquoi un identifiant seul n'est pas une preuve d'authentification."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Placer la carte",
          "p": "Sur l'antenne du lecteur de lab."
        },
        {
          "h": "Lire",
          "p": "lf search ou commande équivalente."
        },
        {
          "h": "Noter l'ID",
          "p": "ID décimal et hexadécimal."
        },
        {
          "h": "Comparer",
          "p": "Deux cartes de lab distinctes."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 09",
      "x": "# Avec un Proxmark3 en lab :\n# pm3\n# [usb] pm3 --> lf search\n# [usb] pm3 --> lf em 410x_read\n#\n# Résultat attendu : un ID EM4100 sur 40 bits, par ex. 0x123456789A\n# Consigner l'ID dans lab/m33/lab09/rfid_lf.txt\n# Aucune écriture/clonage hors carte de lab autorisée."
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> ID de la carte de lab noté."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Ne lisez aucun badge tiers, même par curiosité."
    },
    {
      "t": "h",
      "x": "Lab 10 — Banc blindé et réémission contrôlée"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Comprendre une chaîne capture → décodage → réémission sur banc atténué.<br><strong>Environnement :</strong> HackRF One, enceinte blindée, télécommande de lab."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Protocole et principes",
      "x": "La réémission rejoue exactement les échantillons capturés. Elle démontre l'absence de rolling code. Elle n'est légale que dans un banc blindé, avec puissance minimale et sur un appareil à vous."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Vérifier le banc",
          "p": "Enceinte fermée, personne à proximité."
        },
        {
          "h": "Capturer",
          "p": "Rejeter une trame propre de la télécommande de lab."
        },
        {
          "h": "Réémettre",
          "p": "Puissance TX minimale (-x 0)."
        },
        {
          "h": "Observer",
          "p": "L'appareil de lab réagit : la trame était rejouable."
        },
        {
          "h": "Corriger",
          "p": "Recommander rolling code et authentification."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes du lab 10",
      "x": "# ⚠ LAB BLINDÉ UNIQUEMENT — émission réelle\nhackrf_transfer -r lab/m33/lab03/remote.iq -f 433920000 -s 2000000 -g 20\n# Vérifier la propreté de la capture puis, dans l'enceinte fermée :\nhackrf_transfer -t lab/m33/lab03/remote.iq -f 433920000 -s 2000000 -x 0\n# Durée < 1 s, puissance minimale, aucune cible tierce\necho \"Observation: la commande de lab s'est rejouee\" | tee lab/m33/lab10/resultat.txt"
    },
    {
      "t": "p",
      "x": "<strong>Preuve à conserver :</strong> resultat.txt et la capture d'écran du banc."
    },
    {
      "t": "p",
      "x": "<strong>Remédiation / durcissement :</strong> Sans rolling code, une trame valide reste valable indéfiniment : c'est le défense à corriger."
    },
    {
      "t": "h",
      "x": "33.6 Dix CTF — scénarios RF de lab"
    },
    {
      "t": "h",
      "x": "CTF 01/10 — Le pic fantôme"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Distinguer le bruit d'un vrai signal sur un spectrogramme fourni.<br><strong>Environnement :</strong> Capture noise.iq et capture remote.iq."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf1_spectrogram}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Ouvrir les deux captures",
          "p": "inspectrum ou URH."
        },
        {
          "h": "Comparer",
          "p": "Un seul contient une rafale."
        },
        {
          "h": "Mesurer",
          "p": "Fréquence et durée du pic."
        },
        {
          "h": "Conclure",
          "p": "Le bruit seul ne constitue pas une preuve."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 01",
      "x": "inspectrum lab/m33/lab02/noise.iq\ninspectrum lab/m33/lab03/remote.iq\n# Le pic du signal de lab porte le flag dans son commentaire\n# flag{m33_ctf1_spectrogram}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Documentez toujours la référence bruit de fond."
    },
    {
      "t": "h",
      "x": "CTF 02/10 — Le débit caché"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Estimer le débit binaire d'une trame OOK capturée.<br><strong>Environnement :</strong> Capture remote.iq + URH."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf2_bitrate}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Importer dans URH",
          "p": "Format CU8, 2 MS/s."
        },
        {
          "h": "Autodetect",
          "p": "URH estime la largeur d'un bit."
        },
        {
          "h": "Vérifier",
          "p": "Comparez avec la durée de rafale / nombre de bits."
        },
        {
          "h": "Noter",
          "p": "Débit en bauds."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 02",
      "x": "urh lab/m33/lab03/remote.iq\n# Autodetect parameters -> Bit duration\n# Exemple : 100 us -> 10 kbaud\n# flag{m33_ctf2_bitrate}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Un débit mal estimé décale tout le décodage."
    },
    {
      "t": "h",
      "x": "CTF 03/10 — Le préambule"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Retrouver le motif de synchronisation d'une trame de lab.<br><strong>Environnement :</strong> Fichier bits.txt du lab 05."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf3_preamble}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Ouvrir bits.txt",
          "p": "Suite de 0 et 1."
        },
        {
          "h": "Repérer le début",
          "p": "Motif répété en tête."
        },
        {
          "h": "Identifier",
          "p": "Souvent 10101010 ou 11110000."
        },
        {
          "h": "Expliquer",
          "p": "Le préambule synchronise le récepteur."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 03",
      "x": "head -c 200 lab/m33/lab05/bits.txt\n# Repérer le motif répétitif en début de trame\n# flag{m33_ctf3_preamble}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Un préambule connu doit être retiré avant analyse du payload."
    },
    {
      "t": "h",
      "x": "CTF 04/10 — Le capteur bavard"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Extraire l'identifiant d'un capteur 433 MHz décodé par rtl_433.<br><strong>Environnement :</strong> Fichier decodes.jsonl du lab 04."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf4_sensor_id}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Lire le JSON",
          "p": "une ligne = une trame."
        },
        {
          "h": "Extraire le champ id",
          "p": "jq ou python."
        },
        {
          "h": "Comparer",
          "p": "Deux trames du même capteur."
        },
        {
          "h": "Conclure",
          "p": "Un ID stable permet le suivi."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 04",
      "x": "jq -r '.id' lab/m33/lab04/decodes.jsonl | sort -u\n# flag{m33_ctf4_sensor_id}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Les identifiants stables sont des vecteurs de suivi : à minimiser."
    },
    {
      "t": "h",
      "x": "CTF 05/10 — La bande 868"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier la sous-bande et le duty cycle d'un capteur LoRa de lab.<br><strong>Environnement :</strong> Capture 868 MHz fournie."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf5_868_duty}</code> — à retrouver uniquement sur la cible de lab."
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
          "p": "Centrée sur 868,1 MHz."
        },
        {
          "h": "Mesurer",
          "p": "Largeur et temps d'émission."
        },
        {
          "h": "Calculer",
          "p": "duty cycle = temps émis / période."
        },
        {
          "h": "Comparer",
          "p": "Aux limites ETSI de la sous-bande."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 05",
      "x": "rtl_sdr -f 868100000 -s 1000000 -g 20 -n 2000000 lab/m33/ctf5/868.iq\ninspectrum lab/m33/ctf5/868.iq\n# flag{m33_ctf5_868_duty}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Respecter le duty cycle est une obligation réglementaire."
    },
    {
      "t": "h",
      "x": "CTF 06/10 — Le badge LF"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Déterminer pourquoi un badge 125 kHz n'authentifie pas son porteur.<br><strong>Environnement :</strong> ID EM4100 relevé au lab 09."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf6_rfid_lf}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Relire l'ID",
          "p": "Deux lectures consécutives."
        },
        {
          "h": "Comparer",
          "p": "L'ID est identique à chaque fois."
        },
        {
          "h": "Analyser",
          "p": "Aucun secret, aucun challenge."
        },
        {
          "h": "Recommander",
          "p": "Authentification mutuelle."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 06",
      "x": "cat lab/m33/lab09/rfid_lf.txt\n# Un ID fixe copiable = facteur de possession faible\n# flag{m33_ctf6_rfid_lf}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Utiliser des cartes avec authentification (DESFire, MIFARE Plus)."
    },
    {
      "t": "h",
      "x": "CTF 07/10 — Le graphe incomplet"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Corriger un graphe GNU Radio où le sample rate est erroné.<br><strong>Environnement :</strong> Fichier .grc fourni."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf7_grc_rate}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Ouvrir le .grc",
          "p": "gnuradio-companion."
        },
        {
          "h": "Vérifier",
          "p": "Sample rate du File Source vs du filtre."
        },
        {
          "h": "Corriger",
          "p": "Aligner les deux à 2 MS/s."
        },
        {
          "h": "Relancer",
          "p": "Le fichier de sortie devient cohérent."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 07",
      "x": "gnuradio-companion lab/m33/ctf7/graphe.grc\n# Corriger : Sample Rate = 2e6 partout\n# flag{m33_ctf7_grc_rate}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Un sample rate incohérent décale toutes les mesures."
    },
    {
      "t": "h",
      "x": "CTF 08/10 — Le signal rejoué"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Expliquer, à partir d'une capture, pourquoi une télécommande sans rolling code est vulnérable.<br><strong>Environnement :</strong> Capture remote.iq + résultat lab 10."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf8_replay}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Relire la trame",
          "p": "Même suite de bits à chaque appui."
        },
        {
          "h": "Comparer",
          "p": "Deux appuis = trames identiques."
        },
        {
          "h": "Conclure",
          "p": "Aucun nonce, aucune horloge."
        },
        {
          "h": "Corriger",
          "p": "Rolling code + authentification."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 08",
      "x": "urh lab/m33/lab03/remote.iq\n# Comparer deux rafales : bit pattern identique\ncat lab/m33/lab10/resultat.txt\n# flag{m33_ctf8_replay}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Codes roulants et horodatage sont la défense de référence."
    },
    {
      "t": "h",
      "x": "CTF 09/10 — Le brouillage interdit"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Identifier, dans une mise en situation, la décision conforme face à une demande de jam.<br><strong>Environnement :</strong> Scénario écrit fourni."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf9_reglementation}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Lire le scénario",
          "p": "Un collègue demande de « bloquer un signal gênant »."
        },
        {
          "h": "Vérifier",
          "p": "Pas d'autorisation, pas d'enceinte blindée."
        },
        {
          "h": "Refuser",
          "p": "Le brouillage est interdit."
        },
        {
          "h": "Proposer",
          "p": "Analyse spectrale et voie réglementaire."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Solution guidée — CTF 09",
      "x": "cat lab/m33/ctf9/scenario.txt\n# Réponse attendue : refus + proposition d'analyse passive\n# flag{m33_ctf9_reglementation}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> La conformité réglementaire fait partie de la sécurité."
    },
    {
      "t": "h",
      "x": "CTF 10/10 — La preuve RF"
    },
    {
      "t": "p",
      "x": "<strong>Objectif :</strong> Produire une preuve complète : capture + métadonnées + hash.<br><strong>Environnement :</strong> Tous les fichiers du lab m33."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Flag attendu",
          "p": "<code>flag{m33_ctf10_evidence}</code> — à retrouver uniquement sur la cible de lab."
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
          "h": "Choisir une capture",
          "p": "Celle du lab 03."
        },
        {
          "h": "Écrire les métadonnées",
          "p": "Fréquence, gain, date, antenne."
        },
        {
          "h": "Hasher",
          "p": "sha256sum."
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
      "x": "cat lab/m33/preuves/433_meta.txt\nsha256sum lab/m33/iq/433_capture.iq | tee lab/m33/ctf10/preuve.sha256\nsha256sum -c lab/m33/ctf10/preuve.sha256\n# flag{m33_ctf10_evidence}"
    },
    {
      "t": "p",
      "x": "<strong>Remédiation :</strong> Une preuve sans métadonnées n'est pas reproductible."
    },
    {
      "t": "h",
      "x": "33.7 Durcissement, conformité et rapport"
    },
    {
      "t": "ul",
      "x": [
        "Choisir des protocoles avec authentification et codes roulants plutôt qu'un identifiant fixe.",
        "Utiliser des nonces et un horodatage pour empêcher la relecture d'une trame valide.",
        "Réduire la puissance et le duty cycle au minimum nécessaire, conformément à la réglementation.",
        "Prévoir une supervision de liaison : perte de signal, répétitions anormales, niveau de bruit élevé.",
        "Ne jamais stocker de secrets dans un préambule, un nom de device ou un champ de protocole clair.",
        "Documenter la bande, la modulation, le débit et le format de trame dans la fiche technique du produit.",
        "Pour un rapport : joindre la capture IQ, les métadonnées, le hash SHA-256 et la version des outils."
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Trame de rapport RF",
      "x": "Bande observee : 433,92 MHz (SRD, lab)\nMateriel : RTL-SDR + HackRF (banc blindé)\nOutils : rtl_sdr 1.x, rtl_433 2x.x, URH x.y, GNU Radio 3.10\nCapture : lab/m33/iq/433_capture.iq (SHA-256 ci-joint)\nMethodes : spectrogramme, decodage, estimation de debit\nConstats :\n - [ ] trame rejouable (pas de rolling code)\n - [ ] identifiant stable et lisible\n - [ ] duty cycle a verifier\nRisque : a qualifier selon le contexte (domotique, industrie, etc.)\nRemediation : nonce + authentification + limitation de puissance"
    }
  ],
  "exos": [
    {
      "id": "rf01",
      "title": "Tester le dongle",
      "context": "RTL-SDR branché sur la VM.",
      "task": "Vérifiez le flux USB.",
      "hint": "rtl_test avec -t.",
      "solution": "rtl_test -t",
      "accept": [
        "rtl_test -t",
        "sudo rtl_test -t"
      ],
      "output": [
        "++ Found 1 device",
        "++ Testing 5 second sample read test"
      ],
      "read": "Le test confirme que le récepteur délivre des échantillons sans erreur.",
      "pivot": "Sans flux stable, toute capture est inexploitable."
    },
    {
      "id": "rf02",
      "title": "Capturer en I/Q",
      "context": "Signal de lab à 433,92 MHz.",
      "task": "Enregistrez 2 secondes à 2 MS/s.",
      "hint": "rtl_sdr avec -f, -s, -n.",
      "solution": "rtl_sdr -f 433920000 -s 2000000 -g 20 -n 4000000 cap.iq",
      "accept": [
        "rtl_sdr -f 433920000 -s 2000000 -g 20 -n 4000000 cap.iq"
      ],
      "output": [
        "++ Found 1 device",
        "++ Writing 4000000 samples"
      ],
      "read": "Le fichier contient les composantes I et Q sur 8 bits.",
      "pivot": "La fréquence et le sample rate doivent être consignés."
    },
    {
      "id": "rf03",
      "title": "Décoder des capteurs",
      "context": "Capteur météo 433 MHz de lab.",
      "task": "Affichez les trames décodées en JSON.",
      "hint": "rtl_433 avec -F json.",
      "solution": "rtl_433 -f 433.92M -F json",
      "accept": [
        "rtl_433 -f 433.92M -F json",
        "rtl_433 -f 433.92M -F json -R 40"
      ],
      "output": [
        "++ {\"time\":\"...\",\"model\":\"Acurite\",\"id\":123}"
      ],
      "read": "Chaque ligne JSON correspond à une trame reçue et horodatée.",
      "pivot": "L'ID stable permet de suivre un capteur : un risque de confidentialité."
    },
    {
      "id": "rf04",
      "title": "Ouvrir le spectrogramme",
      "context": "Capture cap.iq disponible.",
      "task": "Visualisez le signal avec inspectrum.",
      "hint": "inspectrum + fichier.",
      "solution": "inspectrum cap.iq",
      "accept": [
        "inspectrum cap.iq",
        "inspectrum lab/m33/iq/433_capture.iq"
      ],
      "output": [
        "++ Spectrogramme affiché",
        "++ Largeur de bande mesurable"
      ],
      "read": "Le spectrogramme montre où et quand le signal émet.",
      "pivot": "La largeur mesurée guide le filtre GNU Radio."
    },
    {
      "id": "rf05",
      "title": "Analyser avec URH",
      "context": "Capture de télécommande de lab.",
      "task": "Lancez Universal Radio Hacker.",
      "hint": "urh + fichier IQ.",
      "solution": "urh cap.iq",
      "accept": [
        "urh cap.iq",
        "urh lab/m33/iq/433_capture.iq"
      ],
      "output": [
        "++ Import du fichier",
        "++ Autodetect parameters disponible"
      ],
      "read": "URH estime préambule, débit et bits sans connaître le protocole.",
      "pivot": "C'est l'outil d'apprentissage idéal pour un signal inconnu."
    },
    {
      "id": "rf06",
      "title": "Lancer GNU Radio",
      "context": "Poste de travail de lab.",
      "task": "Ouvrez l'éditeur de graphes.",
      "hint": "gnuradio-companion.",
      "solution": "gnuradio-companion",
      "accept": [
        "gnuradio-companion",
        "gnuradio-companion lab/m33/grc/fltre.grc"
      ],
      "output": [
        "++ GNU Radio Companion démarré",
        "++ Palette de blocs disponible"
      ],
      "read": "L'éditeur permet d'assembler source, filtre et sortie.",
      "pivot": "Le .grc versionné constitue une preuve de la méthode."
    },
    {
      "id": "rf07",
      "title": "Écouter en mode large bande",
      "context": "HackRF de lab en réception.",
      "task": "Captures avec hackrf_transfer.",
      "hint": "hackrf_transfer -r.",
      "solution": "hackrf_transfer -r capture.iq -f 433920000 -s 2000000 -g 20",
      "accept": [
        "hackrf_transfer -r capture.iq -f 433920000 -s 2000000 -g 20"
      ],
      "output": [
        "++ Waiting for samples...",
        "++ Received 2000000 samples"
      ],
      "read": "Le HackRF couvre une gamme plus large que le RTL-SDR.",
      "pivot": "Le format CS8 doit être indiqué dans URH."
    },
    {
      "id": "rf08",
      "title": "Réémettre sur banc blindé",
      "context": "Enceinte blindée fermée, appareil de lab.",
      "task": "Rejouez la capture avec la puissance minimale.",
      "hint": "hackrf_transfer -t et -x 0.",
      "solution": "hackrf_transfer -t capture.iq -f 433920000 -s 2000000 -x 0",
      "accept": [
        "hackrf_transfer -t capture.iq -f 433920000 -s 2000000 -x 0"
      ],
      "output": [
        "++ Transmitting...",
        "++ Done"
      ],
      "read": "La réémission démontre l'absence de rolling code.",
      "pivot": "Hors banc blindé et autorisation, cette commande est interdite."
    },
    {
      "id": "rf09",
      "title": "Lire un badge de lab",
      "context": "Lecteur 125 kHz et carte de lab.",
      "task": "Lancez la recherche LF sur Proxmark3.",
      "hint": "lf search.",
      "solution": "pm3 --> lf search",
      "accept": [
        "pm3 --> lf search",
        "lf search",
        "pm3 -c 'lf search'"
      ],
      "output": [
        "++ EM4100 found",
        "++ ID: 123456789A"
      ],
      "read": "L'ID d'un badge LF est lu en clair et reste stable.",
      "pivot": "Un identifiant seul n'authentifie pas son porteur."
    },
    {
      "id": "rf10",
      "title": "Hasher une preuve",
      "context": "Capture cap.iq et métadonnées écrites.",
      "task": "Produisez l'empreinte SHA-256.",
      "hint": "sha256sum sur le fichier.",
      "solution": "sha256sum cap.iq",
      "accept": [
        "sha256sum cap.iq",
        "sha256sum lab/m33/iq/433_capture.iq"
      ],
      "output": [
        "++ e3b0c442...  cap.iq"
      ],
      "read": "Le hash garantit que la capture n'a pas été modifiée.",
      "pivot": "Joignez-le toujours au rapport avec la date et les réglages."
    }
  ],
  "quiz": "q33"
};
