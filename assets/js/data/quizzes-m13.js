/**
 * Évaluation du module 13 — Identités réseau (IP, MAC, IMEI).
 * `answer` est l'index (0-based) de la bonne réponse.
 */
export const QUIZ_M13 = {
  q13: {
    moduleId: 'm13',
    title: "Évaluation — Identités réseau : IP, MAC et IMEI",
    pass: 70,
    questions: [
      {
        q: "Parmi ces adresses, laquelle appartient à une plage privée définie par la RFC 1918 ?",
        options: [
          "203.0.113.42",
          "192.168.56.42",
          "100.64.12.7",
          "198.51.100.20"
        ],
        answer: 1,
        explain: "192.168.0.0/16 est une plage privée RFC 1918. 203.0.113.0/24 et 198.51.100.0/24 sont réservées à la documentation, et 100.64.0.0/10 au CGNAT opérateur : aucune des trois n'est une adresse publique d'abonné."
      },
      {
        q: "Combien d'hôtes utilisables contient un sous-réseau IPv4 en /27 ?",
        options: [
          "32",
          "30",
          "27",
          "62"
        ],
        answer: 1,
        explain: "Un /27 contient 2^(32−27) = 32 adresses. On retire l'adresse de réseau et le broadcast : 30 hôtes utilisables."
      },
      {
        q: "Que peut-on déduire raisonnablement d'une adresse IP publique seule, sans réquisition ?",
        options: [
          "L'identité civile exacte de l'utilisateur",
          "Le FAI ou l'ASN et une localisation approximative",
          "Le numéro de téléphone de l'abonné",
          "Le contenu des communications"
        ],
        answer: 1,
        explain: "Une IP publique permet d'identifier un bloc, un ASN et parfois une zone géographique approximative. L'identité de l'abonné et l'adresse exacte nécessitent une réquisition auprès de l'opérateur."
      },
      {
        q: "Une adresse située dans 100.64.0.0/10 correspond généralement à…",
        options: [
          "Une adresse de documentation",
          "Une adresse privée RFC 1918",
          "Une adresse CGNAT partagée par de nombreux abonnés",
          "Une adresse de boucle locale"
        ],
        answer: 2,
        explain: "100.64.0.0/10 est la plage réservée au Carrier-Grade NAT (RFC 6598). Des milliers d'abonnés peuvent partager une même IP publique : la corrélation nécessite la table de translation de l'opérateur et l'horodatage."
      },
      {
        q: "Une adresse MAC dont le premier octet est 0x02 est…",
        options: [
          "Multicast et globale",
          "Unicast et localement administrée",
          "Broadcast",
          "Forcément celle d'un routeur"
        ],
        answer: 1,
        explain: "0x02 = 0000 0010 : le bit I/G (bit 0) vaut 0, donc unicast ; le bit U/L (bit 1) vaut 1, donc adresse localement administrée. Elle ne correspond pas à un OUI fabricant et peut être randomisée."
      },
      {
        q: "Une adresse MAC source est-elle visible telle quelle par un serveur situé à l'autre bout d'Internet ?",
        options: [
          "Oui, elle traverse tous les routeurs",
          "Non, chaque routeur réécrit l'en-tête de liaison pour le saut suivant",
          "Oui, mais uniquement en HTTPS",
          "Non, elle est chiffrée par le FAI"
        ],
        answer: 1,
        explain: "La MAC est une adresse de couche liaison, valable sur un segment local. À chaque saut, le routeur retire l'ancienne en-tête et en construit une nouvelle avec sa propre MAC. Le serveur distant ne voit pas la MAC d'origine."
      },
      {
        q: "Quelle affirmation sur le filtrage par adresse MAC est correcte ?",
        options: [
          "Il remplace efficacement 802.1X",
          "Il empêche toute usurpation d'identité",
          "Il peut être contourné par usurpation et ne constitue pas une sécurité suffisante",
          "Il chiffre le trafic du segment"
        ],
        answer: 2,
        explain: "Une MAC se modifie facilement sur un appareil dont on est propriétaire. Le filtrage MAC bloque les erreurs, pas un attaquant déterminé. Il doit être complété par 802.1X, port-security, DHCP snooping et une segmentation."
      },
      {
        q: "Un IMEI classique de 15 chiffres se décompose en…",
        options: [
          "6 chiffres de TAC, 8 de série, 1 de contrôle",
          "8 chiffres de TAC, 6 de série, 1 de contrôle Luhn",
          "10 chiffres d'IMSI et 5 de version",
          "15 chiffres de numéro de téléphone"
        ],
        answer: 1,
        explain: "L'IMEI comporte 8 chiffres de TAC (modèle), 6 chiffres de numéro de série et 1 chiffre de contrôle calculé par Luhn. L'IMEISV ajoute deux chiffres de version logicielle."
      },
      {
        q: "Comment localiser précisément un téléphone à partir de son IMEI ?",
        options: [
          "En interrogeant un site public de vérification d'IMEI",
          "En utilisant l'IMEI comme mot de passe Wi-Fi",
          "Via l'opérateur mobile et les autorités, dans un cadre légal",
          "En convertissant l'IMEI en coordonnées GPS"
        ],
        answer: 2,
        explain: "L'IMEI identifie le terminal, pas sa position. Seul l'opérateur, via ses équipements (cellules, CDR, HLR/HSS) et sur réquisition légale, peut fournir une localisation. Les sites publics ne donnent au mieux que le modèle associé au TAC."
      },
      {
        q: "Un VPN est actif, mais un test navigateur affiche une adresse publique différente de celle du VPN. Quelle est la cause la plus probable ?",
        options: [
          "Le VPN améliore la vitesse du DNS",
          "Une fuite WebRTC ou IPv6 révèle l'adresse réelle",
          "L'IMEI du téléphone a été modifié",
          "Le serveur web a changé d'adresse MAC"
        ],
        answer: 1,
        explain: "WebRTC peut exposer des candidats réseau locaux et publics malgré le tunnel, et une IPv6 non capturée peut sortir en clair. Un DNS local mal configuré constitue une autre fuite. Il faut tester et corriger séparément IPv4, IPv6, DNS et WebRTC."
      }
    ]
  }
};
