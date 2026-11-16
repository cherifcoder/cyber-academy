export default {
  "id": "m4",
  "num": 4,
  "title": "Fondamentaux réseau pour hackers (Partie 2)",
  "short": "Réseau II",
  "icon": "📡",
  "xp": 260,
  "duration": 60,
  "summary": "Cours en français enrichi sur « Fondamentaux réseau pour hackers (Partie 2) » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
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
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 4.1 : Comportement TCP vs UDP et analyse du handshake"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Malware",
      "x": "Mettre en pratique « Comportement TCP vs UDP et analyse du handshake » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Malware » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Isoler la VM d'analyse (réseau host-only, snapshots)."
        },
        {
          "h": "Étape 2",
          "p": "Calculer le hash de l'échantillon et rechercher les informations publiques."
        },
        {
          "h": "Étape 3",
          "p": "Effectuer une analyse statique (strings, en-têtes, imports)."
        },
        {
          "h": "Étape 4",
          "p": "Observer le comportement dynamique (processus, fichiers, réseau)."
        },
        {
          "h": "Étape 5",
          "p": "Extraire les IOC et rédiger une règle de détection."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Analyser un échantillon de malware de lab en toute sécurité",
      "x": "# LAB ISOLÉ UNIQUEMENT\nsha256sum sample.bin\nstrings -n 6 sample.bin | head -80\nfile sample.bin\nobjdump -x sample.bin | head -60\ntcpdump -i eth0 -w lab/capture.pcap\nvolatility3 -f memory.raw windows.pslist"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Analyser un échantillon de malware de lab en toute sécurité",
      "x": "IOC à rechercher :\n- Hash SHA-256.\n- Domaines et adresses IP de callback.\n- Clés de registre de persistance.\n- Noms de fichiers et chemins.\n- Mutex et services créés."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 4.1 : Comportement TCP vs UDP et analyse du handshake"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Malware », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Extraction d'IOC",
      "x": "<strong>Objectif :</strong> Extraire les indicateurs de compromission d'un échantillon de lab.<br><strong>Contexte :</strong> Comportement TCP vs UDP et analyse du handshake (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c1_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Calculer le hash."
        },
        {
          "h": "Étape 2",
          "p": "Extraire les chaînes."
        },
        {
          "h": "Étape 3",
          "p": "Identifier les IOC."
        },
        {
          "h": "Étape 4",
          "p": "Documenter les artefacts."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le rapport."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Extraction d'IOC)",
      "x": "CTF 1/5 — Extraction d'IOC\nChapitre : 4.1 — Comportement TCP vs UDP et analyse du handshake\nFlag : flag{m4_c1_ctf1}\n\nIndices :\n  1. Utiliser strings.\n  2. Chercher les URL et IP.\n  3. Corréler avec le comportement.\n\nProcédure pas à pas :\n  1. Calculer le hash.\n  2. Extraire les chaînes.\n  3. Identifier les IOC.\n  4. Documenter les artefacts.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Bloquer les IOC et surveiller les journaux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Mécanisme de persistance",
      "x": "<strong>Objectif :</strong> Identifier comment un malware de lab survit au redémarrage.<br><strong>Contexte :</strong> Comportement TCP vs UDP et analyse du handshake (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c1_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser le comportement."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la clé de persistance."
        },
        {
          "h": "Étape 3",
          "p": "Documenter le chemin."
        },
        {
          "h": "Étape 4",
          "p": "Nettoyer l'artefact."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Mécanisme de persistance)",
      "x": "CTF 2/5 — Mécanisme de persistance\nChapitre : 4.1 — Comportement TCP vs UDP et analyse du handshake\nFlag : flag{m4_c1_ctf2}\n\nIndices :\n  1. Inspecter les clés Run.\n  2. Vérifier les services.\n  3. Observer les tâches planifiées.\n\nProcédure pas à pas :\n  1. Analyser le comportement.\n  2. Identifier la clé de persistance.\n  3. Documenter le chemin.\n  4. Nettoyer l'artefact.\n  5. Lire le flag.\n\nRemédiation : Surveiller les points de persistance et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Callback réseau",
      "x": "<strong>Objectif :</strong> Un malware de lab contacte un serveur C2. Identifier le trafic.<br><strong>Contexte :</strong> Comportement TCP vs UDP et analyse du handshake (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c1_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir la capture."
        },
        {
          "h": "Étape 2",
          "p": "Filtrer les requêtes sortantes."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le domaine C2."
        },
        {
          "h": "Étape 4",
          "p": "Extraire la requête."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Callback réseau)",
      "x": "CTF 3/5 — Callback réseau\nChapitre : 4.1 — Comportement TCP vs UDP et analyse du handshake\nFlag : flag{m4_c1_ctf3}\n\nIndices :\n  1. Analyser le pcap.\n  2. Chercher les requêtes DNS/HTTP.\n  3. Isoler le réseau.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes sortantes.\n  3. Identifier le domaine C2.\n  4. Extraire la requête.\n  5. Lire le flag.\n\nRemédiation : Bloquer les domaines malveillants et inspecter le trafic sortant.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Binaire packé",
      "x": "<strong>Objectif :</strong> Un échantillon de lab est packé. Détecter l'indice et expliquer.<br><strong>Contexte :</strong> Comportement TCP vs UDP et analyse du handshake (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c1_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser l'en-tête."
        },
        {
          "h": "Étape 2",
          "p": "Calculer l'entropie."
        },
        {
          "h": "Étape 3",
          "p": "Identifier la section suspecte."
        },
        {
          "h": "Étape 4",
          "p": "Documenter l'indice."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Binaire packé)",
      "x": "CTF 4/5 — Binaire packé\nChapitre : 4.1 — Comportement TCP vs UDP et analyse du handshake\nFlag : flag{m4_c1_ctf4}\n\nIndices :\n  1. Vérifier l'entropie.\n  2. Comparer les sections.\n  3. Observer les imports.\n\nProcédure pas à pas :\n  1. Analyser l'en-tête.\n  2. Calculer l'entropie.\n  3. Identifier la section suspecte.\n  4. Documenter l'indice.\n  5. Récupérer le flag.\n\nRemédiation : Analyser en sandbox et utiliser la détection comportementale.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Règle YARA",
      "x": "<strong>Objectif :</strong> Écrire une règle YARA pour détecter un échantillon de lab.<br><strong>Contexte :</strong> Comportement TCP vs UDP et analyse du handshake (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c1_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Extraire une chaîne caractéristique."
        },
        {
          "h": "Étape 2",
          "p": "Rédiger la règle."
        },
        {
          "h": "Étape 3",
          "p": "Tester sur l'échantillon."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier l'absence de faux positif."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (Règle YARA)",
      "x": "CTF 5/5 — Règle YARA\nChapitre : 4.1 — Comportement TCP vs UDP et analyse du handshake\nFlag : flag{m4_c1_ctf5}\n\nIndices :\n  1. Choisir une chaîne unique.\n  2. Vérifier les faux positifs.\n  3. Tester la règle.\n\nProcédure pas à pas :\n  1. Extraire une chaîne caractéristique.\n  2. Rédiger la règle.\n  3. Tester sur l'échantillon.\n  4. Vérifier l'absence de faux positif.\n  5. Récupérer le flag.\n\nRemédiation : Maintenir et tester les règles de détection régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 4.2 : Protocoles DNS, DHCP, ARP, ICMP"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Reconnaissance & OSINT",
      "x": "Mettre en pratique « Protocoles DNS, DHCP, ARP, ICMP » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Reconnaissance & OSINT » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Choisir un domaine de laboratoire ou un domaine fictif autorisé."
        },
        {
          "h": "Étape 2",
          "p": "Collecter les enregistrements DNS (A, MX, TXT, NS) et les informations whois."
        },
        {
          "h": "Étape 3",
          "p": "Rechercher des sous-domaines et des services exposés sans interaction intrusive."
        },
        {
          "h": "Étape 4",
          "p": "Analyser les métadonnées d'un document de lab et les corréler aux indices OSINT."
        },
        {
          "h": "Étape 5",
          "p": "Consigner les sources, les dates de collecte et le niveau de confiance."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Cartographier un domaine de lab et corréler des informations publiques",
      "x": "# LAB AUTORISÉ UNIQUEMENT\ndig +short example.org A\ndig +short example.org MX\ndig +short example.org TXT\nwhois example.org | head -40\nexiftool lab/document.pdf\ncurl -s https://crt.sh/?q=%25.example.org | head -20"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Cartographier un domaine de lab et corréler des informations publiques",
      "x": "Bonnes pratiques OSINT :\n- Ne pas se connecter avec un compte personnel.\n- Privilégier les sources publiques et les API officielles.\n- Horodater chaque collecte.\n- Valider une information avec au moins deux sources.\n- Ne jamais publier de données personnelles."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 4.2 : Protocoles DNS, DHCP, ARP, ICMP"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Reconnaissance & OSINT », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Sous-domaine oublié",
      "x": "<strong>Objectif :</strong> Retrouver un sous-domaine de développement exposé dans un lab et prouver son existence.<br><strong>Contexte :</strong> Protocoles DNS, DHCP, ARP, ICMP (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m4_c2_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Énumérer les sous-domaines via DNS et crt.sh."
        },
        {
          "h": "Étape 2",
          "p": "Tester la résolution des candidats."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le sous-domaine actif."
        },
        {
          "h": "Étape 4",
          "p": "Accéder à la page d'accueil du lab."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le commentaire HTML."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Sous-domaine oublié)",
      "x": "CTF 1/5 — Sous-domaine oublié\nChapitre : 4.2 — Protocoles DNS, DHCP, ARP, ICMP\nFlag : flag{m4_c2_ctf1}\n\nIndices :\n  1. Chercher les enregistrements DNS et les certificats.\n  2. Vérifier les sous-domaines classiques (dev, staging, test).\n  3. Utiliser une source de transparence des certificats.\n\nProcédure pas à pas :\n  1. Énumérer les sous-domaines via DNS et crt.sh.\n  2. Tester la résolution des candidats.\n  3. Identifier le sous-domaine actif.\n  4. Accéder à la page d'accueil du lab.\n  5. Récupérer le flag dans le commentaire HTML.\n\nRemédiation : Retirer les environnements de test de la zone publique et appliquer une authentification.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Métadonnées PDF",
      "x": "<strong>Objectif :</strong> Un PDF de lab contient des métadonnées révélatrices. Les extraire et conclure.<br><strong>Contexte :</strong> Protocoles DNS, DHCP, ARP, ICMP (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m4_c2_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Télécharger le PDF de lab."
        },
        {
          "h": "Étape 2",
          "p": "Exécuter exiftool."
        },
        {
          "h": "Étape 3",
          "p": "Relever l'auteur et le chemin interne."
        },
        {
          "h": "Étape 4",
          "p": "Corréler avec les autres indices."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans les métadonnées."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Métadonnées PDF)",
      "x": "CTF 2/5 — Métadonnées PDF\nChapitre : 4.2 — Protocoles DNS, DHCP, ARP, ICMP\nFlag : flag{m4_c2_ctf2}\n\nIndices :\n  1. Utiliser un outil d'analyse de métadonnées.\n  2. Chercher auteur, logiciel, chemins.\n  3. Ne pas publier les données personnelles.\n\nProcédure pas à pas :\n  1. Télécharger le PDF de lab.\n  2. Exécuter exiftool.\n  3. Relever l'auteur et le chemin interne.\n  4. Corréler avec les autres indices.\n  5. Récupérer le flag dans les métadonnées.\n\nRemédiation : Nettoyer les métadonnées avant publication et sensibiliser les équipes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Modèle d'adresse email",
      "x": "<strong>Objectif :</strong> Déduire le format des adresses email d'une organisation fictive à partir de sources publiques.<br><strong>Contexte :</strong> Protocoles DNS, DHCP, ARP, ICMP (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m4_c2_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Collecter des adresses publiques de lab."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le format dominant."
        },
        {
          "h": "Étape 3",
          "p": "Formuler des candidats."
        },
        {
          "h": "Étape 4",
          "p": "Valider avec une source de lab."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans la page de contact."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Modèle d'adresse email)",
      "x": "CTF 3/5 — Modèle d'adresse email\nChapitre : 4.2 — Protocoles DNS, DHCP, ARP, ICMP\nFlag : flag{m4_c2_ctf3}\n\nIndices :\n  1. Observer les adresses publiées.\n  2. Tester les formats prénom.nom, p.nom, nom.\n  3. Rester passif.\n\nProcédure pas à pas :\n  1. Collecter des adresses publiques de lab.\n  2. Identifier le format dominant.\n  3. Formuler des candidats.\n  4. Valider avec une source de lab.\n  5. Récupérer le flag dans la page de contact.\n\nRemédiation : Limiter l'exposition des adresses et utiliser des alias génériques.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Transfert de zone DNS",
      "x": "<strong>Objectif :</strong> Vérifier si un serveur DNS de lab autorise un transfert de zone.<br><strong>Contexte :</strong> Protocoles DNS, DHCP, ARP, ICMP (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m4_c2_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le serveur NS du lab."
        },
        {
          "h": "Étape 2",
          "p": "Tenter un transfert AXFR."
        },
        {
          "h": "Étape 3",
          "p": "Lister les enregistrements obtenus."
        },
        {
          "h": "Étape 4",
          "p": "Identifier l'hôte contenant le flag."
        },
        {
          "h": "Étape 5",
          "p": "Accéder à la ressource de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Transfert de zone DNS)",
      "x": "CTF 4/5 — Transfert de zone DNS\nChapitre : 4.2 — Protocoles DNS, DHCP, ARP, ICMP\nFlag : flag{m4_c2_ctf4}\n\nIndices :\n  1. Tester dig AXFR.\n  2. Vérifier les NS.\n  3. Comparer avec les enregistrements publics.\n\nProcédure pas à pas :\n  1. Identifier le serveur NS du lab.\n  2. Tenter un transfert AXFR.\n  3. Lister les enregistrements obtenus.\n  4. Identifier l'hôte contenant le flag.\n  5. Accéder à la ressource de lab.\n\nRemédiation : Restreindre les transferts de zone aux serveurs secondaires autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Fuite dans un dépôt public",
      "x": "<strong>Objectif :</strong> Un dépôt Git de lab contient un secret dans l'historique. Le retrouver.<br><strong>Contexte :</strong> Protocoles DNS, DHCP, ARP, ICMP (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m4_c2_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Cloner le dépôt de lab."
        },
        {
          "h": "Étape 2",
          "p": "Parcourir l'historique avec git log -p."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le commit contenant le secret."
        },
        {
          "h": "Étape 4",
          "p": "Extraire la valeur factice."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag associé."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (Fuite dans un dépôt public)",
      "x": "CTF 5/5 — Fuite dans un dépôt public\nChapitre : 4.2 — Protocoles DNS, DHCP, ARP, ICMP\nFlag : flag{m4_c2_ctf5}\n\nIndices :\n  1. Chercher les commits anciens.\n  2. Inspecter les fichiers de configuration.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Cloner le dépôt de lab.\n  2. Parcourir l'historique avec git log -p.\n  3. Identifier le commit contenant le secret.\n  4. Extraire la valeur factice.\n  5. Récupérer le flag associé.\n\nRemédiation : Utiliser un scanner de secrets, révoquer les clés et nettoyer l'historique.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 4.3 : Ports et services courants"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Scan réseau",
      "x": "Mettre en pratique « Ports et services courants » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Scan réseau » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier la plage réseau du lab (ex. 192.168.56.0/24) et vérifier l'autorisation."
        },
        {
          "h": "Étape 2",
          "p": "Lancer une découverte d'hôtes sans scan agressif."
        },
        {
          "h": "Étape 3",
          "p": "Scanner les ports TCP ouverts sur les hôtes identifiés."
        },
        {
          "h": "Étape 4",
          "p": "Détecter les versions de services et les bannières."
        },
        {
          "h": "Étape 5",
          "p": "Prioriser les services exposés et documenter les preuves."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Découvrir les hôtes et services d'un réseau de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nnmap -sn 192.168.56.0/24\nnmap -sT -p- --min-rate 500 192.168.56.10\nnmap -sV -sC -p 22,80,443 192.168.56.10\nnmap -Pn -p 80 --script http-headers 192.168.56.10\nnc -nv 192.168.56.10 80"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Découvrir les hôtes et services d'un réseau de laboratoire",
      "x": "Exemple de sortie attendue :\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.9\n80/tcp open  http    nginx 1.18.0\n443/tcp open ssl/http nginx 1.18.0\nAnalyse : surface exposée, versions à vérifier, services à durcir."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 4.3 : Ports et services courants"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Scan réseau », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Port caché",
      "x": "<strong>Objectif :</strong> Un service de lab écoute sur un port non standard. Le découvrir et récupérer le flag.<br><strong>Contexte :</strong> Ports et services courants (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m4_c3_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Scanner tous les ports TCP de la cible de lab."
        },
        {
          "h": "Étape 2",
          "p": "Repérer le port ouvert inhabituel."
        },
        {
          "h": "Étape 3",
          "p": "Se connecter avec netcat."
        },
        {
          "h": "Étape 4",
          "p": "Lire la bannière et le message."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag affiché."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Port caché)",
      "x": "CTF 1/5 — Port caché\nChapitre : 4.3 — Ports et services courants\nFlag : flag{m4_c3_ctf1}\n\nIndices :\n  1. Utiliser un scan complet des ports TCP.\n  2. Vérifier les ports hauts.\n  3. Lire la bannière du service.\n\nProcédure pas à pas :\n  1. Scanner tous les ports TCP de la cible de lab.\n  2. Repérer le port ouvert inhabituel.\n  3. Se connecter avec netcat.\n  4. Lire la bannière et le message.\n  5. Récupérer le flag affiché.\n\nRemédiation : Fermer les ports non nécessaires et appliquer un filtrage réseau.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Version vulnérable",
      "x": "<strong>Objectif :</strong> Identifier la version d'un service de lab et associer un risque connu.<br><strong>Contexte :</strong> Ports et services courants (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m4_c3_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lancer nmap -sV sur la cible."
        },
        {
          "h": "Étape 2",
          "p": "Relever la version du service."
        },
        {
          "h": "Étape 3",
          "p": "Rechercher les CVE correspondantes."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer la pertinence dans le lab."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le fichier de version."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Version vulnérable)",
      "x": "CTF 2/5 — Version vulnérable\nChapitre : 4.3 — Ports et services courants\nFlag : flag{m4_c3_ctf2}\n\nIndices :\n  1. Utiliser la détection de version.\n  2. Comparer à une base CVE.\n  3. Ne pas exploiter hors lab.\n\nProcédure pas à pas :\n  1. Lancer nmap -sV sur la cible.\n  2. Relever la version du service.\n  3. Rechercher les CVE correspondantes.\n  4. Évaluer la pertinence dans le lab.\n  5. Récupérer le flag dans le fichier de version.\n\nRemédiation : Mettre à jour le service et masquer la version dans les bannières.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Hôte oublié",
      "x": "<strong>Objectif :</strong> Un hôte du réseau de lab ne répond pas au ping mais expose un service. Le trouver.<br><strong>Contexte :</strong> Ports et services courants (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m4_c3_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Scanner la plage avec nmap -sn."
        },
        {
          "h": "Étape 2",
          "p": "Constater l'absence de l'hôte."
        },
        {
          "h": "Étape 3",
          "p": "Relancer avec -Pn sur la plage."
        },
        {
          "h": "Étape 4",
          "p": "Identifier l'hôte qui répond en TCP."
        },
        {
          "h": "Étape 5",
          "p": "Accéder au service et récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Hôte oublié)",
      "x": "CTF 3/5 — Hôte oublié\nChapitre : 4.3 — Ports et services courants\nFlag : flag{m4_c3_ctf3}\n\nIndices :\n  1. Utiliser -Pn.\n  2. Scanner la plage en TCP.\n  3. Vérifier les réponses SYN.\n\nProcédure pas à pas :\n  1. Scanner la plage avec nmap -sn.\n  2. Constater l'absence de l'hôte.\n  3. Relancer avec -Pn sur la plage.\n  4. Identifier l'hôte qui répond en TCP.\n  5. Accéder au service et récupérer le flag.\n\nRemédiation : Inventorier les actifs et surveiller les nouveaux hôtes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Filtrage contourné",
      "x": "<strong>Objectif :</strong> Un pare-feu de lab bloque certains scans. Identifier une méthode de découverte autorisée.<br><strong>Contexte :</strong> Ports et services courants (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m4_c3_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Tester un scan SYN."
        },
        {
          "h": "Étape 2",
          "p": "Tester un scan connect."
        },
        {
          "h": "Étape 3",
          "p": "Comparer les résultats."
        },
        {
          "h": "Étape 4",
          "p": "Identifier les ports filtrés."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans la page de statut du lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Filtrage contourné)",
      "x": "CTF 4/5 — Filtrage contourné\nChapitre : 4.3 — Ports et services courants\nFlag : flag{m4_c3_ctf4}\n\nIndices :\n  1. Tester différents types de scan.\n  2. Comparer les réponses.\n  3. Rester dans le périmètre.\n\nProcédure pas à pas :\n  1. Tester un scan SYN.\n  2. Tester un scan connect.\n  3. Comparer les résultats.\n  4. Identifier les ports filtrés.\n  5. Récupérer le flag dans la page de statut du lab.\n\nRemédiation : Configurer le pare-feu pour journaliser et bloquer les scans non autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation des résultats",
      "x": "<strong>Objectif :</strong> À partir d'un scan de lab, classer les services par risque.<br><strong>Contexte :</strong> Ports et services courants (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m4_c3_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les services ouverts."
        },
        {
          "h": "Étape 2",
          "p": "Identifier les services sensibles."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier les versions et configurations."
        },
        {
          "h": "Étape 4",
          "p": "Classer par criticité."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le rapport de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (Priorisation des résultats)",
      "x": "CTF 5/5 — Priorisation des résultats\nChapitre : 4.3 — Ports et services courants\nFlag : flag{m4_c3_ctf5}\n\nIndices :\n  1. Évaluer l'exposition.\n  2. Vérifier les versions.\n  3. Pondérer par l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les services ouverts.\n  2. Identifier les services sensibles.\n  3. Vérifier les versions et configurations.\n  4. Classer par criticité.\n  5. Récupérer le flag dans le rapport de lab.\n\nRemédiation : Utiliser une matrice de risque et un processus de remédiation priorisé.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 4.4 : Flux de paquets et concepts de détournement de protocoles"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Sniffing & trafic",
      "x": "Mettre en pratique « Flux de paquets et concepts de détournement de protocoles » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Sniffing & trafic » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Configurer une capture sur l'interface de lab autorisée."
        },
        {
          "h": "Étape 2",
          "p": "Générer un trafic de test (HTTP, DNS, authentification de lab)."
        },
        {
          "h": "Étape 3",
          "p": "Filtrer les paquets pertinents dans Wireshark."
        },
        {
          "h": "Étape 4",
          "p": "Analyser les protocoles et les données en clair."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les risques et les mesures de chiffrement."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Capturer et analyser le trafic d'un réseau de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nsudo tcpdump -i eth0 -w lab/capture.pcap\ntshark -r lab/capture.pcap -Y 'http.request'\ntshark -r lab/capture.pcap -Y 'dns.qry.name'\ntshark -r lab/capture.pcap -Y 'arp'\ntshark -r lab/capture.pcap -Y 'http.authorization'"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Capturer et analyser le trafic d'un réseau de laboratoire",
      "x": "Filtres Wireshark utiles :\nhttp.request\ndns.qry.name\narp.opcode == 2\ntcp.flags.syn == 1 && tcp.flags.ack == 0\nhttp.authorization"
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 4.4 : Flux de paquets et concepts de détournement de protocoles"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Sniffing & trafic », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant en clair",
      "x": "<strong>Objectif :</strong> Une capture de lab contient une authentification HTTP Basic. La retrouver.<br><strong>Contexte :</strong> Flux de paquets et concepts de détournement de protocoles (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m4_c4_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir la capture."
        },
        {
          "h": "Étape 2",
          "p": "Filtrer les requêtes HTTP."
        },
        {
          "h": "Étape 3",
          "p": "Identifier l'en-tête Authorization."
        },
        {
          "h": "Étape 4",
          "p": "Décoder la valeur."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Identifiant en clair)",
      "x": "CTF 1/5 — Identifiant en clair\nChapitre : 4.4 — Flux de paquets et concepts de détournement de protocoles\nFlag : flag{m4_c4_ctf1}\n\nIndices :\n  1. Filtrer http.authorization.\n  2. Décoder le Base64.\n  3. Ne pas utiliser de données réelles.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes HTTP.\n  3. Identifier l'en-tête Authorization.\n  4. Décoder la valeur.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser HTTPS et interdire les authentifications en clair.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — ARP spoof",
      "x": "<strong>Objectif :</strong> Une capture de lab montre une attaque ARP. Identifier les preuves.<br><strong>Contexte :</strong> Flux de paquets et concepts de détournement de protocoles (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m4_c4_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser les paquets ARP."
        },
        {
          "h": "Étape 2",
          "p": "Identifier les réponses ARP suspectes."
        },
        {
          "h": "Étape 3",
          "p": "Comparer les MAC."
        },
        {
          "h": "Étape 4",
          "p": "Documenter l'attaque."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (ARP spoof)",
      "x": "CTF 2/5 — ARP spoof\nChapitre : 4.4 — Flux de paquets et concepts de détournement de protocoles\nFlag : flag{m4_c4_ctf2}\n\nIndices :\n  1. Filtrer ARP.\n  2. Chercher les MAC dupliquées.\n  3. Comparer les annonces.\n\nProcédure pas à pas :\n  1. Analyser les paquets ARP.\n  2. Identifier les réponses ARP suspectes.\n  3. Comparer les MAC.\n  4. Documenter l'attaque.\n  5. Récupérer le flag.\n\nRemédiation : Activer la protection ARP et la surveillance réseau.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Exfiltration DNS",
      "x": "<strong>Objectif :</strong> Un poste de lab exfiltre des données via DNS. Détecter le motif.<br><strong>Contexte :</strong> Flux de paquets et concepts de détournement de protocoles (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m4_c4_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Filtrer les requêtes DNS."
        },
        {
          "h": "Étape 2",
          "p": "Identifier les noms anormaux."
        },
        {
          "h": "Étape 3",
          "p": "Extraire les données encodées."
        },
        {
          "h": "Étape 4",
          "p": "Documenter la méthode."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Exfiltration DNS)",
      "x": "CTF 3/5 — Exfiltration DNS\nChapitre : 4.4 — Flux de paquets et concepts de détournement de protocoles\nFlag : flag{m4_c4_ctf3}\n\nIndices :\n  1. Analyser les requêtes DNS.\n  2. Chercher les noms longs.\n  3. Comparer les fréquences.\n\nProcédure pas à pas :\n  1. Filtrer les requêtes DNS.\n  2. Identifier les noms anormaux.\n  3. Extraire les données encodées.\n  4. Documenter la méthode.\n  5. Récupérer le flag.\n\nRemédiation : Surveiller les requêtes DNS et limiter les résolveurs autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Authentification FTP",
      "x": "<strong>Objectif :</strong> Une capture de lab contient un login FTP. L'extraire.<br><strong>Contexte :</strong> Flux de paquets et concepts de détournement de protocoles (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m4_c4_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir la capture."
        },
        {
          "h": "Étape 2",
          "p": "Filtrer le trafic FTP."
        },
        {
          "h": "Étape 3",
          "p": "Identifier les commandes USER/PASS."
        },
        {
          "h": "Étape 4",
          "p": "Relever les identifiants de lab."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Authentification FTP)",
      "x": "CTF 4/5 — Authentification FTP\nChapitre : 4.4 — Flux de paquets et concepts de détournement de protocoles\nFlag : flag{m4_c4_ctf4}\n\nIndices :\n  1. Filtrer FTP.\n  2. Chercher USER et PASS.\n  3. Documenter le risque.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer le trafic FTP.\n  3. Identifier les commandes USER/PASS.\n  4. Relever les identifiants de lab.\n  5. Récupérer le flag.\n\nRemédiation : Remplacer FTP par SFTP/FTPS et chiffrer les échanges.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Métadonnées TLS",
      "x": "<strong>Objectif :</strong> Analyser le SNI d'une capture TLS de lab sans déchiffrer.<br><strong>Contexte :</strong> Flux de paquets et concepts de détournement de protocoles (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m4_c4_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir la capture."
        },
        {
          "h": "Étape 2",
          "p": "Filtrer les paquets TLS."
        },
        {
          "h": "Étape 3",
          "p": "Extraire le SNI."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le service visité."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (Métadonnées TLS)",
      "x": "CTF 5/5 — Métadonnées TLS\nChapitre : 4.4 — Flux de paquets et concepts de détournement de protocoles\nFlag : flag{m4_c4_ctf5}\n\nIndices :\n  1. Filtrer TLS.\n  2. Chercher le champ SNI.\n  3. Identifier le service.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les paquets TLS.\n  3. Extraire le SNI.\n  4. Identifier le service visité.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser TLS 1.3, ECH si disponible et surveiller les métadonnées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 4.5 : Mauvaises configurations réseau exploitées par les attaquants"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Cadre légal & éthique",
      "x": "Mettre en pratique « Mauvaises configurations réseau exploitées par les attaquants » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Cadre légal & éthique » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Créer un dossier de mission avec sous-dossiers notes/, preuves/, roes/ et rapports/."
        },
        {
          "h": "Étape 2",
          "p": "Rédiger une lettre d'autorisation fictive pour un lab local (127.0.0.1) en précisant cibles, exclusions et dates."
        },
        {
          "h": "Étape 3",
          "p": "Rédiger les règles d'engagement (RoE) : techniques autorisées, interdites, contacts et procédure d'arrêt."
        },
        {
          "h": "Étape 4",
          "p": "Créer une preuve texte, calculer son empreinte SHA-256 et journaliser l'opération."
        },
        {
          "h": "Étape 5",
          "p": "Vérifier la checklist avant test et conclure sur l'autorisation de démarrer."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Rédiger un dossier d'autorisation, un périmètre et un journal de preuves",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nmkdir -p lab/legal/{notes,preuves,roes,rapports}\ndate -Iseconds | tee lab/legal/notes/session_start.txt\nprintf 'Cibles: 127.0.0.1\\nExclusions: tout hors local\\n' > lab/legal/roes/perimetre_lab.txt\necho 'Preuve de test' > lab/legal/preuves/preuve.txt\nsha256sum lab/legal/preuves/preuve.txt | tee lab/legal/preuves/preuve.sha256"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Rédiger un dossier d'autorisation, un périmètre et un journal de preuves",
      "x": "Extrait de lettre d'autorisation (lab) :\nClient: LAB LOCAL\nPérimètre: 127.0.0.1:8080, 127.0.0.1:3000\nPériode: 2026-01-01 09:00 au 2026-01-01 12:00\nInterdit: DoS, cibles réelles, exfiltration de données personnelles\nContact: [nom, téléphone]"
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 4.5 : Mauvaises configurations réseau exploitées par les attaquants"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Cadre légal & éthique », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Périmètre non autorisé",
      "x": "<strong>Objectif :</strong> Un testeur scanne une IP voisine non incluse dans le périmètre. Identifier la violation et la conduite à tenir.<br><strong>Contexte :</strong> Mauvaises configurations réseau exploitées par les attaquants (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m4_c5_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Relever l'IP et l'horodatage du scan."
        },
        {
          "h": "Étape 2",
          "p": "Comparer au périmètre autorisé."
        },
        {
          "h": "Étape 3",
          "p": "Arrêter immédiatement toute action sur la cible hors scope."
        },
        {
          "h": "Étape 4",
          "p": "Documenter l'incident et prévenir le client."
        },
        {
          "h": "Étape 5",
          "p": "Proposer une mesure correctrice : liste blanche d'IP, double validation."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Périmètre non autorisé)",
      "x": "CTF 1/5 — Périmètre non autorisé\nChapitre : 4.5 — Mauvaises configurations réseau exploitées par les attaquants\nFlag : flag{m4_c5_ctf1}\n\nIndices :\n  1. Relire la lettre d'autorisation et les RoE.\n  2. Comparer l'IP cible au périmètre contractuel.\n  3. Distinguer erreur technique et infraction.\n\nProcédure pas à pas :\n  1. Relever l'IP et l'horodatage du scan.\n  2. Comparer au périmètre autorisé.\n  3. Arrêter immédiatement toute action sur la cible hors scope.\n  4. Documenter l'incident et prévenir le client.\n  5. Proposer une mesure correctrice : liste blanche d'IP, double validation.\n\nRemédiation : Mettre en place une validation technique du périmètre avant chaque commande et un arrêt automatique en cas d'écart.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Violation de données personnelles",
      "x": "<strong>Objectif :</strong> Un fichier de preuves contient des données personnelles réelles. Déterminer les obligations RGPD.<br><strong>Contexte :</strong> Mauvaises configurations réseau exploitées par les attaquants (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m4_c5_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Classer les données concernées."
        },
        {
          "h": "Étape 2",
          "p": "Vérifier la base légale et l'information des personnes."
        },
        {
          "h": "Étape 3",
          "p": "Supprimer ou anonymiser les données non nécessaires."
        },
        {
          "h": "Étape 4",
          "p": "Notifier l'autorité si la violation est avérée."
        },
        {
          "h": "Étape 5",
          "p": "Documenter la décision et les mesures."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Violation de données personnelles)",
      "x": "CTF 2/5 — Violation de données personnelles\nChapitre : 4.5 — Mauvaises configurations réseau exploitées par les attaquants\nFlag : flag{m4_c5_ctf2}\n\nIndices :\n  1. Identifier la nature des données.\n  2. Vérifier la minimisation et la durée de conservation.\n  3. Penser à la notification sous 72 h.\n\nProcédure pas à pas :\n  1. Classer les données concernées.\n  2. Vérifier la base légale et l'information des personnes.\n  3. Supprimer ou anonymiser les données non nécessaires.\n  4. Notifier l'autorité si la violation est avérée.\n  5. Documenter la décision et les mesures.\n\nRemédiation : Appliquer la minimisation, chiffrer les preuves et limiter la conservation à la durée de la mission.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Preuve non intègre",
      "x": "<strong>Objectif :</strong> Une capture d'écran a été modifiée après collecte. Expliquer pourquoi elle perd sa valeur.<br><strong>Contexte :</strong> Mauvaises configurations réseau exploitées par les attaquants (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m4_c5_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Recalculer le hash du fichier."
        },
        {
          "h": "Étape 2",
          "p": "Comparer au hash consigné."
        },
        {
          "h": "Étape 3",
          "p": "Identifier la différence."
        },
        {
          "h": "Étape 4",
          "p": "Écarter la preuve non intègre."
        },
        {
          "h": "Étape 5",
          "p": "Recommencer la collecte avec un journal."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Preuve non intègre)",
      "x": "CTF 3/5 — Preuve non intègre\nChapitre : 4.5 — Mauvaises configurations réseau exploitées par les attaquants\nFlag : flag{m4_c5_ctf3}\n\nIndices :\n  1. Comparer l'empreinte avant/après.\n  2. Vérifier l'horodatage.\n  3. Distinguer preuve technique et simple copie.\n\nProcédure pas à pas :\n  1. Recalculer le hash du fichier.\n  2. Comparer au hash consigné.\n  3. Identifier la différence.\n  4. Écarter la preuve non intègre.\n  5. Recommencer la collecte avec un journal.\n\nRemédiation : Hasher les preuves au moment de la collecte et conserver les empreintes séparément.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Divulgation responsable",
      "x": "<strong>Objectif :</strong> Une vulnérabilité critique est découverte chez un éditeur. Définir une chronologie de divulgation.<br><strong>Contexte :</strong> Mauvaises configurations réseau exploitées par les attaquants (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m4_c5_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Rédiger un rapport minimal et reproductible."
        },
        {
          "h": "Étape 2",
          "p": "Contacter le programme de divulgation."
        },
        {
          "h": "Étape 3",
          "p": "Proposer un délai (ex. 90 jours)."
        },
        {
          "h": "Étape 4",
          "p": "Suivre les échanges et la correction."
        },
        {
          "h": "Étape 5",
          "p": "Publier uniquement après accord ou expiration négociée."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Divulgation responsable)",
      "x": "CTF 4/5 — Divulgation responsable\nChapitre : 4.5 — Mauvaises configurations réseau exploitées par les attaquants\nFlag : flag{m4_c5_ctf4}\n\nIndices :\n  1. Vérifier le canal de contact sécurité.\n  2. Prévoir un délai de correction raisonnable.\n  3. Éviter la publication avant accord.\n\nProcédure pas à pas :\n  1. Rédiger un rapport minimal et reproductible.\n  2. Contacter le programme de divulgation.\n  3. Proposer un délai (ex. 90 jours).\n  4. Suivre les échanges et la correction.\n  5. Publier uniquement après accord ou expiration négociée.\n\nRemédiation : Utiliser un canal chiffré, limiter les données sensibles et documenter chaque échange.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Contrat ambigu",
      "x": "<strong>Objectif :</strong> Un client autorise un test sur son SaaS hébergé chez un tiers. Identifier la limite de son autorisation.<br><strong>Contexte :</strong> Mauvaises configurations réseau exploitées par les attaquants (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m4_c5_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier l'hébergeur et le service concerné."
        },
        {
          "h": "Étape 2",
          "p": "Vérifier si le client contrôle réellement la couche testée."
        },
        {
          "h": "Étape 3",
          "p": "Demander une autorisation écrite supplémentaire si nécessaire."
        },
        {
          "h": "Étape 4",
          "p": "Adapter le périmètre aux seuls actifs contrôlés."
        },
        {
          "h": "Étape 5",
          "p": "Consigner la décision dans les RoE."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (Contrat ambigu)",
      "x": "CTF 5/5 — Contrat ambigu\nChapitre : 4.5 — Mauvaises configurations réseau exploitées par les attaquants\nFlag : flag{m4_c5_ctf5}\n\nIndices :\n  1. Distinguer propriétaire et hébergeur.\n  2. Lire les conditions du fournisseur.\n  3. Vérifier la chaîne d'autorisation.\n\nProcédure pas à pas :\n  1. Identifier l'hébergeur et le service concerné.\n  2. Vérifier si le client contrôle réellement la couche testée.\n  3. Demander une autorisation écrite supplémentaire si nécessaire.\n  4. Adapter le périmètre aux seuls actifs contrôlés.\n  5. Consigner la décision dans les RoE.\n\nRemédiation : Faire valider le périmètre par le juridique et obtenir l'accord de chaque partie concernée.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 4.6 : Introduction au tunneling et aux canaux covert"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Malware",
      "x": "Mettre en pratique « Introduction au tunneling et aux canaux covert » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Malware » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Isoler la VM d'analyse (réseau host-only, snapshots)."
        },
        {
          "h": "Étape 2",
          "p": "Calculer le hash de l'échantillon et rechercher les informations publiques."
        },
        {
          "h": "Étape 3",
          "p": "Effectuer une analyse statique (strings, en-têtes, imports)."
        },
        {
          "h": "Étape 4",
          "p": "Observer le comportement dynamique (processus, fichiers, réseau)."
        },
        {
          "h": "Étape 5",
          "p": "Extraire les IOC et rédiger une règle de détection."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Analyser un échantillon de malware de lab en toute sécurité",
      "x": "# LAB ISOLÉ UNIQUEMENT\nsha256sum sample.bin\nstrings -n 6 sample.bin | head -80\nfile sample.bin\nobjdump -x sample.bin | head -60\ntcpdump -i eth0 -w lab/capture.pcap\nvolatility3 -f memory.raw windows.pslist"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Analyser un échantillon de malware de lab en toute sécurité",
      "x": "IOC à rechercher :\n- Hash SHA-256.\n- Domaines et adresses IP de callback.\n- Clés de registre de persistance.\n- Noms de fichiers et chemins.\n- Mutex et services créés."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 4.6 : Introduction au tunneling et aux canaux covert"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Malware », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Extraction d'IOC",
      "x": "<strong>Objectif :</strong> Extraire les indicateurs de compromission d'un échantillon de lab.<br><strong>Contexte :</strong> Introduction au tunneling et aux canaux covert (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c6_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Calculer le hash."
        },
        {
          "h": "Étape 2",
          "p": "Extraire les chaînes."
        },
        {
          "h": "Étape 3",
          "p": "Identifier les IOC."
        },
        {
          "h": "Étape 4",
          "p": "Documenter les artefacts."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le rapport."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Extraction d'IOC)",
      "x": "CTF 1/5 — Extraction d'IOC\nChapitre : 4.6 — Introduction au tunneling et aux canaux covert\nFlag : flag{m4_c6_ctf1}\n\nIndices :\n  1. Utiliser strings.\n  2. Chercher les URL et IP.\n  3. Corréler avec le comportement.\n\nProcédure pas à pas :\n  1. Calculer le hash.\n  2. Extraire les chaînes.\n  3. Identifier les IOC.\n  4. Documenter les artefacts.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Bloquer les IOC et surveiller les journaux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Mécanisme de persistance",
      "x": "<strong>Objectif :</strong> Identifier comment un malware de lab survit au redémarrage.<br><strong>Contexte :</strong> Introduction au tunneling et aux canaux covert (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c6_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser le comportement."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la clé de persistance."
        },
        {
          "h": "Étape 3",
          "p": "Documenter le chemin."
        },
        {
          "h": "Étape 4",
          "p": "Nettoyer l'artefact."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Mécanisme de persistance)",
      "x": "CTF 2/5 — Mécanisme de persistance\nChapitre : 4.6 — Introduction au tunneling et aux canaux covert\nFlag : flag{m4_c6_ctf2}\n\nIndices :\n  1. Inspecter les clés Run.\n  2. Vérifier les services.\n  3. Observer les tâches planifiées.\n\nProcédure pas à pas :\n  1. Analyser le comportement.\n  2. Identifier la clé de persistance.\n  3. Documenter le chemin.\n  4. Nettoyer l'artefact.\n  5. Lire le flag.\n\nRemédiation : Surveiller les points de persistance et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Callback réseau",
      "x": "<strong>Objectif :</strong> Un malware de lab contacte un serveur C2. Identifier le trafic.<br><strong>Contexte :</strong> Introduction au tunneling et aux canaux covert (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c6_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir la capture."
        },
        {
          "h": "Étape 2",
          "p": "Filtrer les requêtes sortantes."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le domaine C2."
        },
        {
          "h": "Étape 4",
          "p": "Extraire la requête."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Callback réseau)",
      "x": "CTF 3/5 — Callback réseau\nChapitre : 4.6 — Introduction au tunneling et aux canaux covert\nFlag : flag{m4_c6_ctf3}\n\nIndices :\n  1. Analyser le pcap.\n  2. Chercher les requêtes DNS/HTTP.\n  3. Isoler le réseau.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes sortantes.\n  3. Identifier le domaine C2.\n  4. Extraire la requête.\n  5. Lire le flag.\n\nRemédiation : Bloquer les domaines malveillants et inspecter le trafic sortant.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Binaire packé",
      "x": "<strong>Objectif :</strong> Un échantillon de lab est packé. Détecter l'indice et expliquer.<br><strong>Contexte :</strong> Introduction au tunneling et aux canaux covert (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c6_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser l'en-tête."
        },
        {
          "h": "Étape 2",
          "p": "Calculer l'entropie."
        },
        {
          "h": "Étape 3",
          "p": "Identifier la section suspecte."
        },
        {
          "h": "Étape 4",
          "p": "Documenter l'indice."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Binaire packé)",
      "x": "CTF 4/5 — Binaire packé\nChapitre : 4.6 — Introduction au tunneling et aux canaux covert\nFlag : flag{m4_c6_ctf4}\n\nIndices :\n  1. Vérifier l'entropie.\n  2. Comparer les sections.\n  3. Observer les imports.\n\nProcédure pas à pas :\n  1. Analyser l'en-tête.\n  2. Calculer l'entropie.\n  3. Identifier la section suspecte.\n  4. Documenter l'indice.\n  5. Récupérer le flag.\n\nRemédiation : Analyser en sandbox et utiliser la détection comportementale.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Règle YARA",
      "x": "<strong>Objectif :</strong> Écrire une règle YARA pour détecter un échantillon de lab.<br><strong>Contexte :</strong> Introduction au tunneling et aux canaux covert (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m4_c6_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Extraire une chaîne caractéristique."
        },
        {
          "h": "Étape 2",
          "p": "Rédiger la règle."
        },
        {
          "h": "Étape 3",
          "p": "Tester sur l'échantillon."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier l'absence de faux positif."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (Règle YARA)",
      "x": "CTF 5/5 — Règle YARA\nChapitre : 4.6 — Introduction au tunneling et aux canaux covert\nFlag : flag{m4_c6_ctf5}\n\nIndices :\n  1. Choisir une chaîne unique.\n  2. Vérifier les faux positifs.\n  3. Tester la règle.\n\nProcédure pas à pas :\n  1. Extraire une chaîne caractéristique.\n  2. Rédiger la règle.\n  3. Tester sur l'échantillon.\n  4. Vérifier l'absence de faux positif.\n  5. Récupérer le flag.\n\nRemédiation : Maintenir et tester les règles de détection régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q4"
};
