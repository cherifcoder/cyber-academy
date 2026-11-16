export default {
  "id": "m15",
  "num": 15,
  "title": "Sniffing et analyse du trafic réseau",
  "short": "Sniffing",
  "icon": "🕵️",
  "xp": 300,
  "duration": 70,
  "summary": "Cours en français enrichi sur « Sniffing et analyse du trafic réseau » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
  "objectives": [
    "Comprendre et appliquer : Concepts de sniffing de paquets et scénarios d'attaque.",
    "Comprendre et appliquer : Théorie de l'empoisonnement ARP et du détournement de session.",
    "Comprendre et appliquer : Analyse du trafic avec Wireshark.",
    "Comprendre et appliquer : Motifs de comportement du trafic chiffré.",
    "Comprendre et appliquer : Détection d'anomalies et abus de protocoles.",
    "Comprendre et appliquer : Analyse des motifs de trafic assistée par IA."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 15 — Sniffing et analyse du trafic réseau</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 70 min · XP : 300. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "15.1 Concepts de sniffing de paquets et scénarios d'attaque"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>concepts de sniffing de paquets et scénarios d'attaque</strong> dans le cadre du module « Sniffing et analyse du trafic réseau ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Concepts de sniffing de paquets et scénarios d'attaque », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Concepts de sniffing de paquets et scénarios d'attaque.",
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
      "x": "15.2 Théorie de l'empoisonnement ARP et du détournement de session"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>théorie de l'empoisonnement arp et du détournement de session</strong> dans le cadre du module « Sniffing et analyse du trafic réseau ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Théorie de l'empoisonnement ARP et du détournement de session », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Théorie de l'empoisonnement ARP et du détournement de session.",
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
      "x": "15.3 Analyse du trafic avec Wireshark"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>analyse du trafic avec wireshark</strong> dans le cadre du module « Sniffing et analyse du trafic réseau ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Analyse du trafic avec Wireshark », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Analyse du trafic avec Wireshark.",
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
      "x": "15.4 Motifs de comportement du trafic chiffré"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>motifs de comportement du trafic chiffré</strong> dans le cadre du module « Sniffing et analyse du trafic réseau ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Motifs de comportement du trafic chiffré », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Motifs de comportement du trafic chiffré.",
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
      "x": "15.5 Détection d'anomalies et abus de protocoles"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>détection d'anomalies et abus de protocoles</strong> dans le cadre du module « Sniffing et analyse du trafic réseau ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Détection d'anomalies et abus de protocoles », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Détection d'anomalies et abus de protocoles.",
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
      "x": "15.6 Analyse des motifs de trafic assistée par IA"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>analyse des motifs de trafic assistée par ia</strong> dans le cadre du module « Sniffing et analyse du trafic réseau ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Analyse des motifs de trafic assistée par IA », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Analyse des motifs de trafic assistée par IA.",
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
      "x": "Exercices — Chapitre 15.1 : Concepts de sniffing de paquets et scénarios d'attaque"
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
          "Exercice 1 (concept) — Concepts de sniffing de paquets et scénarios d'attaque",
          "facile",
          "(concept) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Concepts de sniffing de paquets et scénarios d'attaque",
          "facile",
          "(analyse) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Concepts de sniffing de paquets et scénarios d'attaque",
          "facile",
          "(application) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Concepts de sniffing de paquets et scénarios d'attaque",
          "intermédiaire",
          "(défense) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Concepts de sniffing de paquets et scénarios d'attaque",
          "intermédiaire",
          "(scénario) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Concepts de sniffing de paquets et scénarios d'attaque",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Concepts de sniffing de paquets et scénarios d'attaque",
          "intermédiaire",
          "(méthode) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Concepts de sniffing de paquets et scénarios d'attaque",
          "avancé",
          "(risque) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Concepts de sniffing de paquets et scénarios d'attaque",
          "avancé",
          "(contrôle) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Concepts de sniffing de paquets et scénarios d'attaque",
          "avancé",
          "(synthèse) Dans le contexte de « Concepts de sniffing de paquets et scénarios d'attaque » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de sniffing de paquets et scénarios d'attaque », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 15.2 : Théorie de l'empoisonnement ARP et du détournement de session"
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
          "Exercice 1 (concept) — Théorie de l'empoisonnement ARP et du détournement de session",
          "facile",
          "(concept) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Théorie de l'empoisonnement ARP et du détournement de session",
          "facile",
          "(analyse) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Théorie de l'empoisonnement ARP et du détournement de session",
          "facile",
          "(application) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Théorie de l'empoisonnement ARP et du détournement de session",
          "intermédiaire",
          "(défense) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Théorie de l'empoisonnement ARP et du détournement de session",
          "intermédiaire",
          "(scénario) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Théorie de l'empoisonnement ARP et du détournement de session",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Théorie de l'empoisonnement ARP et du détournement de session",
          "intermédiaire",
          "(méthode) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Théorie de l'empoisonnement ARP et du détournement de session",
          "avancé",
          "(risque) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Théorie de l'empoisonnement ARP et du détournement de session",
          "avancé",
          "(contrôle) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Théorie de l'empoisonnement ARP et du détournement de session",
          "avancé",
          "(synthèse) Dans le contexte de « Théorie de l'empoisonnement ARP et du détournement de session » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Théorie de l'empoisonnement ARP et du détournement de session », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 15.3 : Analyse du trafic avec Wireshark"
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
          "Exercice 1 (concept) — Analyse du trafic avec Wireshark",
          "facile",
          "(concept) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Analyse du trafic avec Wireshark",
          "facile",
          "(analyse) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Analyse du trafic avec Wireshark",
          "facile",
          "(application) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Analyse du trafic avec Wireshark",
          "intermédiaire",
          "(défense) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Analyse du trafic avec Wireshark",
          "intermédiaire",
          "(scénario) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Analyse du trafic avec Wireshark",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Analyse du trafic avec Wireshark",
          "intermédiaire",
          "(méthode) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Analyse du trafic avec Wireshark",
          "avancé",
          "(risque) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Analyse du trafic avec Wireshark",
          "avancé",
          "(contrôle) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Analyse du trafic avec Wireshark",
          "avancé",
          "(synthèse) Dans le contexte de « Analyse du trafic avec Wireshark » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse du trafic avec Wireshark », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 15.4 : Motifs de comportement du trafic chiffré"
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
          "Exercice 1 (concept) — Motifs de comportement du trafic chiffré",
          "facile",
          "(concept) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Motifs de comportement du trafic chiffré",
          "facile",
          "(analyse) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Motifs de comportement du trafic chiffré",
          "facile",
          "(application) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Motifs de comportement du trafic chiffré",
          "intermédiaire",
          "(défense) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Motifs de comportement du trafic chiffré",
          "intermédiaire",
          "(scénario) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Motifs de comportement du trafic chiffré",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Motifs de comportement du trafic chiffré",
          "intermédiaire",
          "(méthode) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Motifs de comportement du trafic chiffré",
          "avancé",
          "(risque) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Motifs de comportement du trafic chiffré",
          "avancé",
          "(contrôle) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Motifs de comportement du trafic chiffré",
          "avancé",
          "(synthèse) Dans le contexte de « Motifs de comportement du trafic chiffré » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Motifs de comportement du trafic chiffré », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 15.5 : Détection d'anomalies et abus de protocoles"
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
          "Exercice 1 (concept) — Détection d'anomalies et abus de protocoles",
          "facile",
          "(concept) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Détection d'anomalies et abus de protocoles",
          "facile",
          "(analyse) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Détection d'anomalies et abus de protocoles",
          "facile",
          "(application) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Détection d'anomalies et abus de protocoles",
          "intermédiaire",
          "(défense) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Détection d'anomalies et abus de protocoles",
          "intermédiaire",
          "(scénario) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Détection d'anomalies et abus de protocoles",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Détection d'anomalies et abus de protocoles",
          "intermédiaire",
          "(méthode) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Détection d'anomalies et abus de protocoles",
          "avancé",
          "(risque) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Détection d'anomalies et abus de protocoles",
          "avancé",
          "(contrôle) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Détection d'anomalies et abus de protocoles",
          "avancé",
          "(synthèse) Dans le contexte de « Détection d'anomalies et abus de protocoles » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Détection d'anomalies et abus de protocoles », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 15.6 : Analyse des motifs de trafic assistée par IA"
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
          "Exercice 1 (concept) — Analyse des motifs de trafic assistée par IA",
          "facile",
          "(concept) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Analyse des motifs de trafic assistée par IA",
          "facile",
          "(analyse) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Analyse des motifs de trafic assistée par IA",
          "facile",
          "(application) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Analyse des motifs de trafic assistée par IA",
          "intermédiaire",
          "(défense) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Analyse des motifs de trafic assistée par IA",
          "intermédiaire",
          "(scénario) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Analyse des motifs de trafic assistée par IA",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Analyse des motifs de trafic assistée par IA",
          "intermédiaire",
          "(méthode) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Analyse des motifs de trafic assistée par IA",
          "avancé",
          "(risque) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Analyse des motifs de trafic assistée par IA",
          "avancé",
          "(contrôle) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Analyse des motifs de trafic assistée par IA",
          "avancé",
          "(synthèse) Dans le contexte de « Analyse des motifs de trafic assistée par IA » (module 15 : Sniffing et analyse du trafic réseau), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse des motifs de trafic assistée par IA », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Sniffing et analyse du trafic réseau » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
      "x": "Lab guidé pas à pas — Chapitre 15.1 : Concepts de sniffing de paquets et scénarios d'attaque"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Sniffing & trafic",
      "x": "Mettre en pratique « Concepts de sniffing de paquets et scénarios d'attaque » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Sniffing & trafic » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 15.1 : Concepts de sniffing de paquets et scénarios d'attaque"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Sniffing & trafic », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant en clair",
      "x": "<strong>Objectif :</strong> Une capture de lab contient une authentification HTTP Basic. La retrouver.<br><strong>Contexte :</strong> Concepts de sniffing de paquets et scénarios d'attaque (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c1_ctf1}"
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
      "x": "CTF 1/5 — Identifiant en clair\nChapitre : 15.1 — Concepts de sniffing de paquets et scénarios d'attaque\nFlag : flag{m15_c1_ctf1}\n\nIndices :\n  1. Filtrer http.authorization.\n  2. Décoder le Base64.\n  3. Ne pas utiliser de données réelles.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes HTTP.\n  3. Identifier l'en-tête Authorization.\n  4. Décoder la valeur.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser HTTPS et interdire les authentifications en clair.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — ARP spoof",
      "x": "<strong>Objectif :</strong> Une capture de lab montre une attaque ARP. Identifier les preuves.<br><strong>Contexte :</strong> Concepts de sniffing de paquets et scénarios d'attaque (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c1_ctf2}"
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
      "x": "CTF 2/5 — ARP spoof\nChapitre : 15.1 — Concepts de sniffing de paquets et scénarios d'attaque\nFlag : flag{m15_c1_ctf2}\n\nIndices :\n  1. Filtrer ARP.\n  2. Chercher les MAC dupliquées.\n  3. Comparer les annonces.\n\nProcédure pas à pas :\n  1. Analyser les paquets ARP.\n  2. Identifier les réponses ARP suspectes.\n  3. Comparer les MAC.\n  4. Documenter l'attaque.\n  5. Récupérer le flag.\n\nRemédiation : Activer la protection ARP et la surveillance réseau.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Exfiltration DNS",
      "x": "<strong>Objectif :</strong> Un poste de lab exfiltre des données via DNS. Détecter le motif.<br><strong>Contexte :</strong> Concepts de sniffing de paquets et scénarios d'attaque (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c1_ctf3}"
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
      "x": "CTF 3/5 — Exfiltration DNS\nChapitre : 15.1 — Concepts de sniffing de paquets et scénarios d'attaque\nFlag : flag{m15_c1_ctf3}\n\nIndices :\n  1. Analyser les requêtes DNS.\n  2. Chercher les noms longs.\n  3. Comparer les fréquences.\n\nProcédure pas à pas :\n  1. Filtrer les requêtes DNS.\n  2. Identifier les noms anormaux.\n  3. Extraire les données encodées.\n  4. Documenter la méthode.\n  5. Récupérer le flag.\n\nRemédiation : Surveiller les requêtes DNS et limiter les résolveurs autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Authentification FTP",
      "x": "<strong>Objectif :</strong> Une capture de lab contient un login FTP. L'extraire.<br><strong>Contexte :</strong> Concepts de sniffing de paquets et scénarios d'attaque (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c1_ctf4}"
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
      "x": "CTF 4/5 — Authentification FTP\nChapitre : 15.1 — Concepts de sniffing de paquets et scénarios d'attaque\nFlag : flag{m15_c1_ctf4}\n\nIndices :\n  1. Filtrer FTP.\n  2. Chercher USER et PASS.\n  3. Documenter le risque.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer le trafic FTP.\n  3. Identifier les commandes USER/PASS.\n  4. Relever les identifiants de lab.\n  5. Récupérer le flag.\n\nRemédiation : Remplacer FTP par SFTP/FTPS et chiffrer les échanges.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Métadonnées TLS",
      "x": "<strong>Objectif :</strong> Analyser le SNI d'une capture TLS de lab sans déchiffrer.<br><strong>Contexte :</strong> Concepts de sniffing de paquets et scénarios d'attaque (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c1_ctf5}"
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
      "x": "CTF 5/5 — Métadonnées TLS\nChapitre : 15.1 — Concepts de sniffing de paquets et scénarios d'attaque\nFlag : flag{m15_c1_ctf5}\n\nIndices :\n  1. Filtrer TLS.\n  2. Chercher le champ SNI.\n  3. Identifier le service.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les paquets TLS.\n  3. Extraire le SNI.\n  4. Identifier le service visité.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser TLS 1.3, ECH si disponible et surveiller les métadonnées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 15.2 : Théorie de l'empoisonnement ARP et du détournement de session"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Sniffing & trafic",
      "x": "Mettre en pratique « Théorie de l'empoisonnement ARP et du détournement de session » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Sniffing & trafic » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 15.2 : Théorie de l'empoisonnement ARP et du détournement de session"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Sniffing & trafic », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant en clair",
      "x": "<strong>Objectif :</strong> Une capture de lab contient une authentification HTTP Basic. La retrouver.<br><strong>Contexte :</strong> Théorie de l'empoisonnement ARP et du détournement de session (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c2_ctf1}"
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
      "x": "CTF 1/5 — Identifiant en clair\nChapitre : 15.2 — Théorie de l'empoisonnement ARP et du détournement de session\nFlag : flag{m15_c2_ctf1}\n\nIndices :\n  1. Filtrer http.authorization.\n  2. Décoder le Base64.\n  3. Ne pas utiliser de données réelles.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes HTTP.\n  3. Identifier l'en-tête Authorization.\n  4. Décoder la valeur.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser HTTPS et interdire les authentifications en clair.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — ARP spoof",
      "x": "<strong>Objectif :</strong> Une capture de lab montre une attaque ARP. Identifier les preuves.<br><strong>Contexte :</strong> Théorie de l'empoisonnement ARP et du détournement de session (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c2_ctf2}"
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
      "x": "CTF 2/5 — ARP spoof\nChapitre : 15.2 — Théorie de l'empoisonnement ARP et du détournement de session\nFlag : flag{m15_c2_ctf2}\n\nIndices :\n  1. Filtrer ARP.\n  2. Chercher les MAC dupliquées.\n  3. Comparer les annonces.\n\nProcédure pas à pas :\n  1. Analyser les paquets ARP.\n  2. Identifier les réponses ARP suspectes.\n  3. Comparer les MAC.\n  4. Documenter l'attaque.\n  5. Récupérer le flag.\n\nRemédiation : Activer la protection ARP et la surveillance réseau.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Exfiltration DNS",
      "x": "<strong>Objectif :</strong> Un poste de lab exfiltre des données via DNS. Détecter le motif.<br><strong>Contexte :</strong> Théorie de l'empoisonnement ARP et du détournement de session (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c2_ctf3}"
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
      "x": "CTF 3/5 — Exfiltration DNS\nChapitre : 15.2 — Théorie de l'empoisonnement ARP et du détournement de session\nFlag : flag{m15_c2_ctf3}\n\nIndices :\n  1. Analyser les requêtes DNS.\n  2. Chercher les noms longs.\n  3. Comparer les fréquences.\n\nProcédure pas à pas :\n  1. Filtrer les requêtes DNS.\n  2. Identifier les noms anormaux.\n  3. Extraire les données encodées.\n  4. Documenter la méthode.\n  5. Récupérer le flag.\n\nRemédiation : Surveiller les requêtes DNS et limiter les résolveurs autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Authentification FTP",
      "x": "<strong>Objectif :</strong> Une capture de lab contient un login FTP. L'extraire.<br><strong>Contexte :</strong> Théorie de l'empoisonnement ARP et du détournement de session (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c2_ctf4}"
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
      "x": "CTF 4/5 — Authentification FTP\nChapitre : 15.2 — Théorie de l'empoisonnement ARP et du détournement de session\nFlag : flag{m15_c2_ctf4}\n\nIndices :\n  1. Filtrer FTP.\n  2. Chercher USER et PASS.\n  3. Documenter le risque.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer le trafic FTP.\n  3. Identifier les commandes USER/PASS.\n  4. Relever les identifiants de lab.\n  5. Récupérer le flag.\n\nRemédiation : Remplacer FTP par SFTP/FTPS et chiffrer les échanges.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Métadonnées TLS",
      "x": "<strong>Objectif :</strong> Analyser le SNI d'une capture TLS de lab sans déchiffrer.<br><strong>Contexte :</strong> Théorie de l'empoisonnement ARP et du détournement de session (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c2_ctf5}"
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
      "x": "CTF 5/5 — Métadonnées TLS\nChapitre : 15.2 — Théorie de l'empoisonnement ARP et du détournement de session\nFlag : flag{m15_c2_ctf5}\n\nIndices :\n  1. Filtrer TLS.\n  2. Chercher le champ SNI.\n  3. Identifier le service.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les paquets TLS.\n  3. Extraire le SNI.\n  4. Identifier le service visité.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser TLS 1.3, ECH si disponible et surveiller les métadonnées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 15.3 : Analyse du trafic avec Wireshark"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Malware",
      "x": "Mettre en pratique « Analyse du trafic avec Wireshark » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Malware » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 15.3 : Analyse du trafic avec Wireshark"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Malware », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Extraction d'IOC",
      "x": "<strong>Objectif :</strong> Extraire les indicateurs de compromission d'un échantillon de lab.<br><strong>Contexte :</strong> Analyse du trafic avec Wireshark (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c3_ctf1}"
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
      "x": "CTF 1/5 — Extraction d'IOC\nChapitre : 15.3 — Analyse du trafic avec Wireshark\nFlag : flag{m15_c3_ctf1}\n\nIndices :\n  1. Utiliser strings.\n  2. Chercher les URL et IP.\n  3. Corréler avec le comportement.\n\nProcédure pas à pas :\n  1. Calculer le hash.\n  2. Extraire les chaînes.\n  3. Identifier les IOC.\n  4. Documenter les artefacts.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Bloquer les IOC et surveiller les journaux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Mécanisme de persistance",
      "x": "<strong>Objectif :</strong> Identifier comment un malware de lab survit au redémarrage.<br><strong>Contexte :</strong> Analyse du trafic avec Wireshark (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c3_ctf2}"
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
      "x": "CTF 2/5 — Mécanisme de persistance\nChapitre : 15.3 — Analyse du trafic avec Wireshark\nFlag : flag{m15_c3_ctf2}\n\nIndices :\n  1. Inspecter les clés Run.\n  2. Vérifier les services.\n  3. Observer les tâches planifiées.\n\nProcédure pas à pas :\n  1. Analyser le comportement.\n  2. Identifier la clé de persistance.\n  3. Documenter le chemin.\n  4. Nettoyer l'artefact.\n  5. Lire le flag.\n\nRemédiation : Surveiller les points de persistance et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Callback réseau",
      "x": "<strong>Objectif :</strong> Un malware de lab contacte un serveur C2. Identifier le trafic.<br><strong>Contexte :</strong> Analyse du trafic avec Wireshark (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c3_ctf3}"
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
      "x": "CTF 3/5 — Callback réseau\nChapitre : 15.3 — Analyse du trafic avec Wireshark\nFlag : flag{m15_c3_ctf3}\n\nIndices :\n  1. Analyser le pcap.\n  2. Chercher les requêtes DNS/HTTP.\n  3. Isoler le réseau.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes sortantes.\n  3. Identifier le domaine C2.\n  4. Extraire la requête.\n  5. Lire le flag.\n\nRemédiation : Bloquer les domaines malveillants et inspecter le trafic sortant.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Binaire packé",
      "x": "<strong>Objectif :</strong> Un échantillon de lab est packé. Détecter l'indice et expliquer.<br><strong>Contexte :</strong> Analyse du trafic avec Wireshark (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c3_ctf4}"
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
      "x": "CTF 4/5 — Binaire packé\nChapitre : 15.3 — Analyse du trafic avec Wireshark\nFlag : flag{m15_c3_ctf4}\n\nIndices :\n  1. Vérifier l'entropie.\n  2. Comparer les sections.\n  3. Observer les imports.\n\nProcédure pas à pas :\n  1. Analyser l'en-tête.\n  2. Calculer l'entropie.\n  3. Identifier la section suspecte.\n  4. Documenter l'indice.\n  5. Récupérer le flag.\n\nRemédiation : Analyser en sandbox et utiliser la détection comportementale.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Règle YARA",
      "x": "<strong>Objectif :</strong> Écrire une règle YARA pour détecter un échantillon de lab.<br><strong>Contexte :</strong> Analyse du trafic avec Wireshark (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c3_ctf5}"
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
      "x": "CTF 5/5 — Règle YARA\nChapitre : 15.3 — Analyse du trafic avec Wireshark\nFlag : flag{m15_c3_ctf5}\n\nIndices :\n  1. Choisir une chaîne unique.\n  2. Vérifier les faux positifs.\n  3. Tester la règle.\n\nProcédure pas à pas :\n  1. Extraire une chaîne caractéristique.\n  2. Rédiger la règle.\n  3. Tester sur l'échantillon.\n  4. Vérifier l'absence de faux positif.\n  5. Récupérer le flag.\n\nRemédiation : Maintenir et tester les règles de détection régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 15.4 : Motifs de comportement du trafic chiffré"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Sniffing & trafic",
      "x": "Mettre en pratique « Motifs de comportement du trafic chiffré » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Sniffing & trafic » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 15.4 : Motifs de comportement du trafic chiffré"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Sniffing & trafic », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant en clair",
      "x": "<strong>Objectif :</strong> Une capture de lab contient une authentification HTTP Basic. La retrouver.<br><strong>Contexte :</strong> Motifs de comportement du trafic chiffré (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c4_ctf1}"
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
      "x": "CTF 1/5 — Identifiant en clair\nChapitre : 15.4 — Motifs de comportement du trafic chiffré\nFlag : flag{m15_c4_ctf1}\n\nIndices :\n  1. Filtrer http.authorization.\n  2. Décoder le Base64.\n  3. Ne pas utiliser de données réelles.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes HTTP.\n  3. Identifier l'en-tête Authorization.\n  4. Décoder la valeur.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser HTTPS et interdire les authentifications en clair.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — ARP spoof",
      "x": "<strong>Objectif :</strong> Une capture de lab montre une attaque ARP. Identifier les preuves.<br><strong>Contexte :</strong> Motifs de comportement du trafic chiffré (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c4_ctf2}"
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
      "x": "CTF 2/5 — ARP spoof\nChapitre : 15.4 — Motifs de comportement du trafic chiffré\nFlag : flag{m15_c4_ctf2}\n\nIndices :\n  1. Filtrer ARP.\n  2. Chercher les MAC dupliquées.\n  3. Comparer les annonces.\n\nProcédure pas à pas :\n  1. Analyser les paquets ARP.\n  2. Identifier les réponses ARP suspectes.\n  3. Comparer les MAC.\n  4. Documenter l'attaque.\n  5. Récupérer le flag.\n\nRemédiation : Activer la protection ARP et la surveillance réseau.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Exfiltration DNS",
      "x": "<strong>Objectif :</strong> Un poste de lab exfiltre des données via DNS. Détecter le motif.<br><strong>Contexte :</strong> Motifs de comportement du trafic chiffré (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c4_ctf3}"
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
      "x": "CTF 3/5 — Exfiltration DNS\nChapitre : 15.4 — Motifs de comportement du trafic chiffré\nFlag : flag{m15_c4_ctf3}\n\nIndices :\n  1. Analyser les requêtes DNS.\n  2. Chercher les noms longs.\n  3. Comparer les fréquences.\n\nProcédure pas à pas :\n  1. Filtrer les requêtes DNS.\n  2. Identifier les noms anormaux.\n  3. Extraire les données encodées.\n  4. Documenter la méthode.\n  5. Récupérer le flag.\n\nRemédiation : Surveiller les requêtes DNS et limiter les résolveurs autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Authentification FTP",
      "x": "<strong>Objectif :</strong> Une capture de lab contient un login FTP. L'extraire.<br><strong>Contexte :</strong> Motifs de comportement du trafic chiffré (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c4_ctf4}"
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
      "x": "CTF 4/5 — Authentification FTP\nChapitre : 15.4 — Motifs de comportement du trafic chiffré\nFlag : flag{m15_c4_ctf4}\n\nIndices :\n  1. Filtrer FTP.\n  2. Chercher USER et PASS.\n  3. Documenter le risque.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer le trafic FTP.\n  3. Identifier les commandes USER/PASS.\n  4. Relever les identifiants de lab.\n  5. Récupérer le flag.\n\nRemédiation : Remplacer FTP par SFTP/FTPS et chiffrer les échanges.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Métadonnées TLS",
      "x": "<strong>Objectif :</strong> Analyser le SNI d'une capture TLS de lab sans déchiffrer.<br><strong>Contexte :</strong> Motifs de comportement du trafic chiffré (Sniffing & trafic).<br><strong>Flag attendu (lab) :</strong> flag{m15_c4_ctf5}"
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
      "x": "CTF 5/5 — Métadonnées TLS\nChapitre : 15.4 — Motifs de comportement du trafic chiffré\nFlag : flag{m15_c4_ctf5}\n\nIndices :\n  1. Filtrer TLS.\n  2. Chercher le champ SNI.\n  3. Identifier le service.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les paquets TLS.\n  3. Extraire le SNI.\n  4. Identifier le service visité.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser TLS 1.3, ECH si disponible et surveiller les métadonnées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 15.5 : Détection d'anomalies et abus de protocoles"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — IoT & OT",
      "x": "Mettre en pratique « Détection d'anomalies et abus de protocoles » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « IoT & OT » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Isoler l'objet IoT dans un VLAN de lab."
        },
        {
          "h": "Étape 2",
          "p": "Identifier les services exposés et les identifiants par défaut."
        },
        {
          "h": "Étape 3",
          "p": "Extraire et analyser le firmware."
        },
        {
          "h": "Étape 4",
          "p": "Rechercher les secrets et les mises à jour non signées."
        },
        {
          "h": "Étape 5",
          "p": "Proposer des mesures de durcissement."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Auditer un objet IoT de laboratoire et son firmware",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nnmap -sV -p- 192.168.56.20\ncurl -s http://192.168.56.20/\nbinwalk -e firmware.bin\nstrings firmware.bin | grep -i 'password\\|admin\\|key'\nmosquitto_sub -h 192.168.56.20 -t '#' -v"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Auditer un objet IoT de laboratoire et son firmware",
      "x": "Points de contrôle :\n- Identifiants par défaut.\n- Telnet/HTTP non chiffré.\n- Firmware non signé.\n- MQTT sans authentification.\n- Ports de debug exposés."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 15.5 : Détection d'anomalies et abus de protocoles"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « IoT & OT », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiants par défaut",
      "x": "<strong>Objectif :</strong> Un objet IoT de lab utilise admin/admin. Prouver l'accès.<br><strong>Contexte :</strong> Détection d'anomalies et abus de protocoles (IoT & OT).<br><strong>Flag attendu (lab) :</strong> flag{m15_c5_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Scanner l'objet."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le service web."
        },
        {
          "h": "Étape 3",
          "p": "Tester admin/admin."
        },
        {
          "h": "Étape 4",
          "p": "Accéder au tableau de bord."
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
      "title": "Write-up détaillé — CTF 1/5 (Identifiants par défaut)",
      "x": "CTF 1/5 — Identifiants par défaut\nChapitre : 15.5 — Détection d'anomalies et abus de protocoles\nFlag : flag{m15_c5_ctf1}\n\nIndices :\n  1. Tester les identifiants par défaut.\n  2. Lire la bannière.\n  3. Documenter.\n\nProcédure pas à pas :\n  1. Scanner l'objet.\n  2. Identifier le service web.\n  3. Tester admin/admin.\n  4. Accéder au tableau de bord.\n  5. Récupérer le flag.\n\nRemédiation : Forcer le changement des identifiants et désactiver les comptes par défaut.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Secret firmware",
      "x": "<strong>Objectif :</strong> Un firmware de lab contient un secret. L'extraire.<br><strong>Contexte :</strong> Détection d'anomalies et abus de protocoles (IoT & OT).<br><strong>Flag attendu (lab) :</strong> flag{m15_c5_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Télécharger le firmware."
        },
        {
          "h": "Étape 2",
          "p": "Extraire avec binwalk."
        },
        {
          "h": "Étape 3",
          "p": "Rechercher les chaînes."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le secret de lab."
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
      "title": "Write-up détaillé — CTF 2/5 (Secret firmware)",
      "x": "CTF 2/5 — Secret firmware\nChapitre : 15.5 — Détection d'anomalies et abus de protocoles\nFlag : flag{m15_c5_ctf2}\n\nIndices :\n  1. Extraire le firmware.\n  2. Chercher les chaînes.\n  3. Identifier le secret.\n\nProcédure pas à pas :\n  1. Télécharger le firmware.\n  2. Extraire avec binwalk.\n  3. Rechercher les chaînes.\n  4. Identifier le secret de lab.\n  5. Récupérer le flag.\n\nRemédiation : Ne pas embarquer de secrets et signer les firmwares.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Telnet exposé",
      "x": "<strong>Objectif :</strong> Un objet IoT de lab expose Telnet. Expliquer le risque.<br><strong>Contexte :</strong> Détection d'anomalies et abus de protocoles (IoT & OT).<br><strong>Flag attendu (lab) :</strong> flag{m15_c5_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Scanner l'objet."
        },
        {
          "h": "Étape 2",
          "p": "Identifier Telnet."
        },
        {
          "h": "Étape 3",
          "p": "Se connecter avec un compte de lab."
        },
        {
          "h": "Étape 4",
          "p": "Documenter l'exposition."
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
      "title": "Write-up détaillé — CTF 3/5 (Telnet exposé)",
      "x": "CTF 3/5 — Telnet exposé\nChapitre : 15.5 — Détection d'anomalies et abus de protocoles\nFlag : flag{m15_c5_ctf3}\n\nIndices :\n  1. Scanner les ports.\n  2. Tester une connexion.\n  3. Documenter.\n\nProcédure pas à pas :\n  1. Scanner l'objet.\n  2. Identifier Telnet.\n  3. Se connecter avec un compte de lab.\n  4. Documenter l'exposition.\n  5. Récupérer le flag.\n\nRemédiation : Désactiver Telnet et utiliser SSH avec des clés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — MQTT",
      "x": "<strong>Objectif :</strong> Un broker MQTT de lab accepte les connexions anonymes. Lire un message.<br><strong>Contexte :</strong> Détection d'anomalies et abus de protocoles (IoT & OT).<br><strong>Flag attendu (lab) :</strong> flag{m15_c5_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le broker."
        },
        {
          "h": "Étape 2",
          "p": "S'abonner avec mosquitto_sub."
        },
        {
          "h": "Étape 3",
          "p": "Observer les messages."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le flag."
        },
        {
          "h": "Étape 5",
          "p": "Documenter."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (MQTT)",
      "x": "CTF 4/5 — MQTT\nChapitre : 15.5 — Détection d'anomalies et abus de protocoles\nFlag : flag{m15_c5_ctf4}\n\nIndices :\n  1. Scanner MQTT.\n  2. S'abonner au topic #.\n  3. Lire les messages.\n\nProcédure pas à pas :\n  1. Identifier le broker.\n  2. S'abonner avec mosquitto_sub.\n  3. Observer les messages.\n  4. Identifier le flag.\n  5. Documenter.\n\nRemédiation : Activer l'authentification et chiffrer MQTT avec TLS.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Botnet IoT",
      "x": "<strong>Objectif :</strong> Un scénario de lab décrit un botnet IoT. Identifier les vecteurs.<br><strong>Contexte :</strong> Détection d'anomalies et abus de protocoles (IoT & OT).<br><strong>Flag attendu (lab) :</strong> flag{m15_c5_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lire le scénario."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le vecteur initial."
        },
        {
          "h": "Étape 3",
          "p": "Expliquer la propagation."
        },
        {
          "h": "Étape 4",
          "p": "Proposer la segmentation."
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
      "title": "Write-up détaillé — CTF 5/5 (Botnet IoT)",
      "x": "CTF 5/5 — Botnet IoT\nChapitre : 15.5 — Détection d'anomalies et abus de protocoles\nFlag : flag{m15_c5_ctf5}\n\nIndices :\n  1. Analyser les incidents.\n  2. Identifier les mots de passe faibles.\n  3. Proposer des défenses.\n\nProcédure pas à pas :\n  1. Lire le scénario.\n  2. Identifier le vecteur initial.\n  3. Expliquer la propagation.\n  4. Proposer la segmentation.\n  5. Récupérer le flag.\n\nRemédiation : Segmentation, mises à jour, mots de passe uniques et surveillance.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 15.6 : Analyse des motifs de trafic assistée par IA"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Malware",
      "x": "Mettre en pratique « Analyse des motifs de trafic assistée par IA » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Malware » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 15.6 : Analyse des motifs de trafic assistée par IA"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Malware », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Extraction d'IOC",
      "x": "<strong>Objectif :</strong> Extraire les indicateurs de compromission d'un échantillon de lab.<br><strong>Contexte :</strong> Analyse des motifs de trafic assistée par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c6_ctf1}"
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
      "x": "CTF 1/5 — Extraction d'IOC\nChapitre : 15.6 — Analyse des motifs de trafic assistée par IA\nFlag : flag{m15_c6_ctf1}\n\nIndices :\n  1. Utiliser strings.\n  2. Chercher les URL et IP.\n  3. Corréler avec le comportement.\n\nProcédure pas à pas :\n  1. Calculer le hash.\n  2. Extraire les chaînes.\n  3. Identifier les IOC.\n  4. Documenter les artefacts.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Bloquer les IOC et surveiller les journaux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Mécanisme de persistance",
      "x": "<strong>Objectif :</strong> Identifier comment un malware de lab survit au redémarrage.<br><strong>Contexte :</strong> Analyse des motifs de trafic assistée par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c6_ctf2}"
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
      "x": "CTF 2/5 — Mécanisme de persistance\nChapitre : 15.6 — Analyse des motifs de trafic assistée par IA\nFlag : flag{m15_c6_ctf2}\n\nIndices :\n  1. Inspecter les clés Run.\n  2. Vérifier les services.\n  3. Observer les tâches planifiées.\n\nProcédure pas à pas :\n  1. Analyser le comportement.\n  2. Identifier la clé de persistance.\n  3. Documenter le chemin.\n  4. Nettoyer l'artefact.\n  5. Lire le flag.\n\nRemédiation : Surveiller les points de persistance et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Callback réseau",
      "x": "<strong>Objectif :</strong> Un malware de lab contacte un serveur C2. Identifier le trafic.<br><strong>Contexte :</strong> Analyse des motifs de trafic assistée par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c6_ctf3}"
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
      "x": "CTF 3/5 — Callback réseau\nChapitre : 15.6 — Analyse des motifs de trafic assistée par IA\nFlag : flag{m15_c6_ctf3}\n\nIndices :\n  1. Analyser le pcap.\n  2. Chercher les requêtes DNS/HTTP.\n  3. Isoler le réseau.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes sortantes.\n  3. Identifier le domaine C2.\n  4. Extraire la requête.\n  5. Lire le flag.\n\nRemédiation : Bloquer les domaines malveillants et inspecter le trafic sortant.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Binaire packé",
      "x": "<strong>Objectif :</strong> Un échantillon de lab est packé. Détecter l'indice et expliquer.<br><strong>Contexte :</strong> Analyse des motifs de trafic assistée par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c6_ctf4}"
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
      "x": "CTF 4/5 — Binaire packé\nChapitre : 15.6 — Analyse des motifs de trafic assistée par IA\nFlag : flag{m15_c6_ctf4}\n\nIndices :\n  1. Vérifier l'entropie.\n  2. Comparer les sections.\n  3. Observer les imports.\n\nProcédure pas à pas :\n  1. Analyser l'en-tête.\n  2. Calculer l'entropie.\n  3. Identifier la section suspecte.\n  4. Documenter l'indice.\n  5. Récupérer le flag.\n\nRemédiation : Analyser en sandbox et utiliser la détection comportementale.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Règle YARA",
      "x": "<strong>Objectif :</strong> Écrire une règle YARA pour détecter un échantillon de lab.<br><strong>Contexte :</strong> Analyse des motifs de trafic assistée par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m15_c6_ctf5}"
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
      "x": "CTF 5/5 — Règle YARA\nChapitre : 15.6 — Analyse des motifs de trafic assistée par IA\nFlag : flag{m15_c6_ctf5}\n\nIndices :\n  1. Choisir une chaîne unique.\n  2. Vérifier les faux positifs.\n  3. Tester la règle.\n\nProcédure pas à pas :\n  1. Extraire une chaîne caractéristique.\n  2. Rédiger la règle.\n  3. Tester sur l'échantillon.\n  4. Vérifier l'absence de faux positif.\n  5. Récupérer le flag.\n\nRemédiation : Maintenir et tester les règles de détection régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q15"
};
