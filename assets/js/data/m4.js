export default {
  "id": "m4",
  "num": 4,
  "title": "Fondamentaux réseau pour hackers (Partie 2)",
  "short": "Réseau II",
  "icon": "📡",
  "xp": 260,
  "duration": 60,
  "summary": "Cours en français sur « Fondamentaux réseau pour hackers (Partie 2) » avec 6 chapitres, 10 exercices par chapitre et un défi CTF.",
  "objectives": [
    "Comprendre et appliquer : Comportement TCP vs UDP et analyse du handshake.",
    "Comprendre et appliquer : Protocoles DNS, DHCP, ARP, ICMP.",
    "Comprendre et appliquer : Ports et services courants.",
    "Comprendre et appliquer : Flux de paquets et concepts de détournement de protocoles.",
    "Comprendre et appliquer : Mauvaises configurations réseau exploitées par les attaquants.",
    "Comprendre et appliquer : Introduction au tunneling et aux canaux covert."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 4 — Fondamentaux réseau pour hackers (Partie 2)</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 60 min · XP : 260. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "4.1 Comportement TCP vs UDP et analyse du handshake"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>comportement tcp vs udp et analyse du handshake</strong> dans le cadre du module « Fondamentaux réseau pour hackers (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Comportement TCP vs UDP et analyse du handshake », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Comportement TCP vs UDP et analyse du handshake.",
        "Comprendre le rôle et l'impact de ce thème dans un programme de sécurité.",
        "Identifier les erreurs courantes, signaux d'alerte et points de contrôle.",
        "Appliquer des pratiques de réduction du risque et de défense en profondeur.",
        "Documenter les observations de manière claire, traçable et professionnelle."
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Cadre légal et éthique",
      "x": "Toute technique évoquée doit être utilisée uniquement dans un environnement autorisé (laboratoire, contrat, programme de bug bounty avec périmètre défini). L'accès non autorisé à des systèmes tiers est illégal."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "À faire",
          "p": "Travailler dans un lab isolé, conserver des preuves, suivre les règles d'engagement et privilégier la minimisation des données."
        },
        {
          "v": "amber",
          "h": "À éviter",
          "p": "Tester hors périmètre, perturber la production, conserver des données sensibles sans nécessité ou sans protection."
        },
        {
          "v": "red",
          "h": "Risque",
          "p": "Impacts juridiques, opérationnels et réputationnels en cas de non-respect du cadre légal et contractuel."
        }
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Bonnes pratiques",
      "x": "Adoptez une démarche méthodique : préparer, observer, analyser, valider, puis documenter. Reliez chaque constat à un risque métier et à une recommandation concrète."
    },
    {
      "t": "h",
      "x": "4.2 Protocoles DNS, DHCP, ARP, ICMP"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>protocoles dns, dhcp, arp, icmp</strong> dans le cadre du module « Fondamentaux réseau pour hackers (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Protocoles DNS, DHCP, ARP, ICMP », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Protocoles DNS, DHCP, ARP, ICMP.",
        "Comprendre le rôle et l'impact de ce thème dans un programme de sécurité.",
        "Identifier les erreurs courantes, signaux d'alerte et points de contrôle.",
        "Appliquer des pratiques de réduction du risque et de défense en profondeur.",
        "Documenter les observations de manière claire, traçable et professionnelle."
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Cadre légal et éthique",
      "x": "Toute technique évoquée doit être utilisée uniquement dans un environnement autorisé (laboratoire, contrat, programme de bug bounty avec périmètre défini). L'accès non autorisé à des systèmes tiers est illégal."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "À faire",
          "p": "Travailler dans un lab isolé, conserver des preuves, suivre les règles d'engagement et privilégier la minimisation des données."
        },
        {
          "v": "amber",
          "h": "À éviter",
          "p": "Tester hors périmètre, perturber la production, conserver des données sensibles sans nécessité ou sans protection."
        },
        {
          "v": "red",
          "h": "Risque",
          "p": "Impacts juridiques, opérationnels et réputationnels en cas de non-respect du cadre légal et contractuel."
        }
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Bonnes pratiques",
      "x": "Adoptez une démarche méthodique : préparer, observer, analyser, valider, puis documenter. Reliez chaque constat à un risque métier et à une recommandation concrète."
    },
    {
      "t": "h",
      "x": "4.3 Ports et services courants"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>ports et services courants</strong> dans le cadre du module « Fondamentaux réseau pour hackers (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Ports et services courants », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Ports et services courants.",
        "Comprendre le rôle et l'impact de ce thème dans un programme de sécurité.",
        "Identifier les erreurs courantes, signaux d'alerte et points de contrôle.",
        "Appliquer des pratiques de réduction du risque et de défense en profondeur.",
        "Documenter les observations de manière claire, traçable et professionnelle."
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Cadre légal et éthique",
      "x": "Toute technique évoquée doit être utilisée uniquement dans un environnement autorisé (laboratoire, contrat, programme de bug bounty avec périmètre défini). L'accès non autorisé à des systèmes tiers est illégal."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "À faire",
          "p": "Travailler dans un lab isolé, conserver des preuves, suivre les règles d'engagement et privilégier la minimisation des données."
        },
        {
          "v": "amber",
          "h": "À éviter",
          "p": "Tester hors périmètre, perturber la production, conserver des données sensibles sans nécessité ou sans protection."
        },
        {
          "v": "red",
          "h": "Risque",
          "p": "Impacts juridiques, opérationnels et réputationnels en cas de non-respect du cadre légal et contractuel."
        }
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Bonnes pratiques",
      "x": "Adoptez une démarche méthodique : préparer, observer, analyser, valider, puis documenter. Reliez chaque constat à un risque métier et à une recommandation concrète."
    },
    {
      "t": "h",
      "x": "4.4 Flux de paquets et concepts de détournement de protocoles"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>flux de paquets et concepts de détournement de protocoles</strong> dans le cadre du module « Fondamentaux réseau pour hackers (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Flux de paquets et concepts de détournement de protocoles », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Flux de paquets et concepts de détournement de protocoles.",
        "Comprendre le rôle et l'impact de ce thème dans un programme de sécurité.",
        "Identifier les erreurs courantes, signaux d'alerte et points de contrôle.",
        "Appliquer des pratiques de réduction du risque et de défense en profondeur.",
        "Documenter les observations de manière claire, traçable et professionnelle."
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Cadre légal et éthique",
      "x": "Toute technique évoquée doit être utilisée uniquement dans un environnement autorisé (laboratoire, contrat, programme de bug bounty avec périmètre défini). L'accès non autorisé à des systèmes tiers est illégal."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "À faire",
          "p": "Travailler dans un lab isolé, conserver des preuves, suivre les règles d'engagement et privilégier la minimisation des données."
        },
        {
          "v": "amber",
          "h": "À éviter",
          "p": "Tester hors périmètre, perturber la production, conserver des données sensibles sans nécessité ou sans protection."
        },
        {
          "v": "red",
          "h": "Risque",
          "p": "Impacts juridiques, opérationnels et réputationnels en cas de non-respect du cadre légal et contractuel."
        }
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Bonnes pratiques",
      "x": "Adoptez une démarche méthodique : préparer, observer, analyser, valider, puis documenter. Reliez chaque constat à un risque métier et à une recommandation concrète."
    },
    {
      "t": "h",
      "x": "4.5 Mauvaises configurations réseau exploitées par les attaquants"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>mauvaises configurations réseau exploitées par les attaquants</strong> dans le cadre du module « Fondamentaux réseau pour hackers (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Mauvaises configurations réseau exploitées par les attaquants », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Mauvaises configurations réseau exploitées par les attaquants.",
        "Comprendre le rôle et l'impact de ce thème dans un programme de sécurité.",
        "Identifier les erreurs courantes, signaux d'alerte et points de contrôle.",
        "Appliquer des pratiques de réduction du risque et de défense en profondeur.",
        "Documenter les observations de manière claire, traçable et professionnelle."
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Cadre légal et éthique",
      "x": "Toute technique évoquée doit être utilisée uniquement dans un environnement autorisé (laboratoire, contrat, programme de bug bounty avec périmètre défini). L'accès non autorisé à des systèmes tiers est illégal."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "À faire",
          "p": "Travailler dans un lab isolé, conserver des preuves, suivre les règles d'engagement et privilégier la minimisation des données."
        },
        {
          "v": "amber",
          "h": "À éviter",
          "p": "Tester hors périmètre, perturber la production, conserver des données sensibles sans nécessité ou sans protection."
        },
        {
          "v": "red",
          "h": "Risque",
          "p": "Impacts juridiques, opérationnels et réputationnels en cas de non-respect du cadre légal et contractuel."
        }
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Bonnes pratiques",
      "x": "Adoptez une démarche méthodique : préparer, observer, analyser, valider, puis documenter. Reliez chaque constat à un risque métier et à une recommandation concrète."
    },
    {
      "t": "h",
      "x": "4.6 Introduction au tunneling et aux canaux covert"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>introduction au tunneling et aux canaux covert</strong> dans le cadre du module « Fondamentaux réseau pour hackers (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Introduction au tunneling et aux canaux covert », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Introduction au tunneling et aux canaux covert.",
        "Comprendre le rôle et l'impact de ce thème dans un programme de sécurité.",
        "Identifier les erreurs courantes, signaux d'alerte et points de contrôle.",
        "Appliquer des pratiques de réduction du risque et de défense en profondeur.",
        "Documenter les observations de manière claire, traçable et professionnelle."
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Cadre légal et éthique",
      "x": "Toute technique évoquée doit être utilisée uniquement dans un environnement autorisé (laboratoire, contrat, programme de bug bounty avec périmètre défini). L'accès non autorisé à des systèmes tiers est illégal."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "À faire",
          "p": "Travailler dans un lab isolé, conserver des preuves, suivre les règles d'engagement et privilégier la minimisation des données."
        },
        {
          "v": "amber",
          "h": "À éviter",
          "p": "Tester hors périmètre, perturber la production, conserver des données sensibles sans nécessité ou sans protection."
        },
        {
          "v": "red",
          "h": "Risque",
          "p": "Impacts juridiques, opérationnels et réputationnels en cas de non-respect du cadre légal et contractuel."
        }
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Bonnes pratiques",
      "x": "Adoptez une démarche méthodique : préparer, observer, analyser, valider, puis documenter. Reliez chaque constat à un risque métier et à une recommandation concrète."
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 4.1 : Comportement TCP vs UDP et analyse du handshake"
    },
    {
      "t": "p",
      "x": "Réalisez les 10 exercices suivants. Répondez de manière argumentée, en vous appuyant sur un environnement de laboratoire autorisé."
    },
    {
      "t": "table",
      "head": [
        "#",
        "Titre",
        "Difficulté",
        "Consigne",
        "Attendu"
      ],
      "rows": [
        [
          "1",
          "Exercice 1 (concept) — Comportement TCP vs UDP et analyse du handshake",
          "facile",
          "(concept) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Comportement TCP vs UDP et analyse du handshake",
          "facile",
          "(analyse) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Comportement TCP vs UDP et analyse du handshake",
          "facile",
          "(application) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Comportement TCP vs UDP et analyse du handshake",
          "intermédiaire",
          "(défense) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Comportement TCP vs UDP et analyse du handshake",
          "intermédiaire",
          "(scénario) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Comportement TCP vs UDP et analyse du handshake",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Comportement TCP vs UDP et analyse du handshake",
          "intermédiaire",
          "(méthode) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Comportement TCP vs UDP et analyse du handshake",
          "avancé",
          "(risque) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Comportement TCP vs UDP et analyse du handshake",
          "avancé",
          "(contrôle) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Comportement TCP vs UDP et analyse du handshake",
          "avancé",
          "(synthèse) Dans le contexte de « Comportement TCP vs UDP et analyse du handshake » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement TCP vs UDP et analyse du handshake », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 4.2 : Protocoles DNS, DHCP, ARP, ICMP"
    },
    {
      "t": "p",
      "x": "Réalisez les 10 exercices suivants. Répondez de manière argumentée, en vous appuyant sur un environnement de laboratoire autorisé."
    },
    {
      "t": "table",
      "head": [
        "#",
        "Titre",
        "Difficulté",
        "Consigne",
        "Attendu"
      ],
      "rows": [
        [
          "1",
          "Exercice 1 (concept) — Protocoles DNS, DHCP, ARP, ICMP",
          "facile",
          "(concept) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Protocoles DNS, DHCP, ARP, ICMP",
          "facile",
          "(analyse) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Protocoles DNS, DHCP, ARP, ICMP",
          "facile",
          "(application) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Protocoles DNS, DHCP, ARP, ICMP",
          "intermédiaire",
          "(défense) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Protocoles DNS, DHCP, ARP, ICMP",
          "intermédiaire",
          "(scénario) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Protocoles DNS, DHCP, ARP, ICMP",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Protocoles DNS, DHCP, ARP, ICMP",
          "intermédiaire",
          "(méthode) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Protocoles DNS, DHCP, ARP, ICMP",
          "avancé",
          "(risque) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Protocoles DNS, DHCP, ARP, ICMP",
          "avancé",
          "(contrôle) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Protocoles DNS, DHCP, ARP, ICMP",
          "avancé",
          "(synthèse) Dans le contexte de « Protocoles DNS, DHCP, ARP, ICMP » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Protocoles DNS, DHCP, ARP, ICMP », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 4.3 : Ports et services courants"
    },
    {
      "t": "p",
      "x": "Réalisez les 10 exercices suivants. Répondez de manière argumentée, en vous appuyant sur un environnement de laboratoire autorisé."
    },
    {
      "t": "table",
      "head": [
        "#",
        "Titre",
        "Difficulté",
        "Consigne",
        "Attendu"
      ],
      "rows": [
        [
          "1",
          "Exercice 1 (concept) — Ports et services courants",
          "facile",
          "(concept) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Ports et services courants",
          "facile",
          "(analyse) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Ports et services courants",
          "facile",
          "(application) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Ports et services courants",
          "intermédiaire",
          "(défense) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Ports et services courants",
          "intermédiaire",
          "(scénario) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Ports et services courants",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Ports et services courants",
          "intermédiaire",
          "(méthode) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Ports et services courants",
          "avancé",
          "(risque) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Ports et services courants",
          "avancé",
          "(contrôle) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Ports et services courants",
          "avancé",
          "(synthèse) Dans le contexte de « Ports et services courants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Ports et services courants », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 4.4 : Flux de paquets et concepts de détournement de protocoles"
    },
    {
      "t": "p",
      "x": "Réalisez les 10 exercices suivants. Répondez de manière argumentée, en vous appuyant sur un environnement de laboratoire autorisé."
    },
    {
      "t": "table",
      "head": [
        "#",
        "Titre",
        "Difficulté",
        "Consigne",
        "Attendu"
      ],
      "rows": [
        [
          "1",
          "Exercice 1 (concept) — Flux de paquets et concepts de détournement de protocoles",
          "facile",
          "(concept) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Flux de paquets et concepts de détournement de protocoles",
          "facile",
          "(analyse) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Flux de paquets et concepts de détournement de protocoles",
          "facile",
          "(application) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Flux de paquets et concepts de détournement de protocoles",
          "intermédiaire",
          "(défense) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Flux de paquets et concepts de détournement de protocoles",
          "intermédiaire",
          "(scénario) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Flux de paquets et concepts de détournement de protocoles",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Flux de paquets et concepts de détournement de protocoles",
          "intermédiaire",
          "(méthode) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Flux de paquets et concepts de détournement de protocoles",
          "avancé",
          "(risque) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Flux de paquets et concepts de détournement de protocoles",
          "avancé",
          "(contrôle) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Flux de paquets et concepts de détournement de protocoles",
          "avancé",
          "(synthèse) Dans le contexte de « Flux de paquets et concepts de détournement de protocoles » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de paquets et concepts de détournement de protocoles », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 4.5 : Mauvaises configurations réseau exploitées par les attaquants"
    },
    {
      "t": "p",
      "x": "Réalisez les 10 exercices suivants. Répondez de manière argumentée, en vous appuyant sur un environnement de laboratoire autorisé."
    },
    {
      "t": "table",
      "head": [
        "#",
        "Titre",
        "Difficulté",
        "Consigne",
        "Attendu"
      ],
      "rows": [
        [
          "1",
          "Exercice 1 (concept) — Mauvaises configurations réseau exploitées par les attaquants",
          "facile",
          "(concept) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Mauvaises configurations réseau exploitées par les attaquants",
          "facile",
          "(analyse) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Mauvaises configurations réseau exploitées par les attaquants",
          "facile",
          "(application) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Mauvaises configurations réseau exploitées par les attaquants",
          "intermédiaire",
          "(défense) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Mauvaises configurations réseau exploitées par les attaquants",
          "intermédiaire",
          "(scénario) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Mauvaises configurations réseau exploitées par les attaquants",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Mauvaises configurations réseau exploitées par les attaquants",
          "intermédiaire",
          "(méthode) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Mauvaises configurations réseau exploitées par les attaquants",
          "avancé",
          "(risque) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Mauvaises configurations réseau exploitées par les attaquants",
          "avancé",
          "(contrôle) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Mauvaises configurations réseau exploitées par les attaquants",
          "avancé",
          "(synthèse) Dans le contexte de « Mauvaises configurations réseau exploitées par les attaquants » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations réseau exploitées par les attaquants », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 4.6 : Introduction au tunneling et aux canaux covert"
    },
    {
      "t": "p",
      "x": "Réalisez les 10 exercices suivants. Répondez de manière argumentée, en vous appuyant sur un environnement de laboratoire autorisé."
    },
    {
      "t": "table",
      "head": [
        "#",
        "Titre",
        "Difficulté",
        "Consigne",
        "Attendu"
      ],
      "rows": [
        [
          "1",
          "Exercice 1 (concept) — Introduction au tunneling et aux canaux covert",
          "facile",
          "(concept) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Introduction au tunneling et aux canaux covert",
          "facile",
          "(analyse) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Introduction au tunneling et aux canaux covert",
          "facile",
          "(application) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Introduction au tunneling et aux canaux covert",
          "intermédiaire",
          "(défense) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Introduction au tunneling et aux canaux covert",
          "intermédiaire",
          "(scénario) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Introduction au tunneling et aux canaux covert",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Introduction au tunneling et aux canaux covert",
          "intermédiaire",
          "(méthode) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Introduction au tunneling et aux canaux covert",
          "avancé",
          "(risque) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Introduction au tunneling et aux canaux covert",
          "avancé",
          "(contrôle) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Introduction au tunneling et aux canaux covert",
          "avancé",
          "(synthèse) Dans le contexte de « Introduction au tunneling et aux canaux covert » (module 4 : Fondamentaux réseau pour hackers (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Introduction au tunneling et aux canaux covert », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "CTF — Module 4"
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Fondamentaux réseau pour hackers (Partie 2) » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Préparation",
          "p": "Vérifiez le périmètre, préparez votre environnement et votre journal de notes."
        },
        {
          "h": "Exécution",
          "p": "Appliquez les techniques du module de façon méthodique et non destructive."
        },
        {
          "h": "Preuve",
          "p": "Collectez des preuves minimales (captures, commandes, horodatage) dans un dossier dédié."
        },
        {
          "h": "Remédiation",
          "p": "Proposez des correctifs concrets et priorisés selon le risque."
        }
      ]
    }
  ],
  "quiz": "q4"
};
