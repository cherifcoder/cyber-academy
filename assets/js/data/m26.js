export default {
  "id": "m26",
  "num": 26,
  "title": "Réponse aux incidents et forensic numérique",
  "short": "IR & Forensic",
  "icon": "🧯",
  "xp": 320,
  "duration": 75,
  "summary": "Cours en français enrichi sur « Réponse aux incidents et forensic numérique » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
  "objectives": [
    "Comprendre et appliquer : Cycle de vie et procédures de réponse aux incidents.",
    "Comprendre et appliquer : Préparation, détection et confinement.",
    "Comprendre et appliquer : Gestion des preuves et préparation forensic.",
    "Comprendre et appliquer : Fondamentaux de l'analyse disque et mémoire.",
    "Comprendre et appliquer : Concepts de reconstruction de chronologie.",
    "Comprendre et appliquer : Flux de travail de réponse aux incidents assistés par IA."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 26 — Réponse aux incidents et forensic numérique</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 75 min · XP : 320. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "26.1 Cycle de vie et procédures de réponse aux incidents"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>cycle de vie et procédures de réponse aux incidents</strong> dans le cadre du module « Réponse aux incidents et forensic numérique ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Cycle de vie et procédures de réponse aux incidents », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Cycle de vie et procédures de réponse aux incidents.",
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
      "x": "26.2 Préparation, détection et confinement"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>préparation, détection et confinement</strong> dans le cadre du module « Réponse aux incidents et forensic numérique ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Préparation, détection et confinement », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Préparation, détection et confinement.",
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
      "x": "26.3 Gestion des preuves et préparation forensic"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>gestion des preuves et préparation forensic</strong> dans le cadre du module « Réponse aux incidents et forensic numérique ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Gestion des preuves et préparation forensic », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Gestion des preuves et préparation forensic.",
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
      "x": "26.4 Fondamentaux de l'analyse disque et mémoire"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>fondamentaux de l'analyse disque et mémoire</strong> dans le cadre du module « Réponse aux incidents et forensic numérique ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Fondamentaux de l'analyse disque et mémoire », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Fondamentaux de l'analyse disque et mémoire.",
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
      "x": "26.5 Concepts de reconstruction de chronologie"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>concepts de reconstruction de chronologie</strong> dans le cadre du module « Réponse aux incidents et forensic numérique ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Concepts de reconstruction de chronologie », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Concepts de reconstruction de chronologie.",
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
      "x": "26.6 Flux de travail de réponse aux incidents assistés par IA"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>flux de travail de réponse aux incidents assistés par ia</strong> dans le cadre du module « Réponse aux incidents et forensic numérique ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Flux de travail de réponse aux incidents assistés par IA », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Flux de travail de réponse aux incidents assistés par IA.",
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
      "x": "Exercices — Chapitre 26.1 : Cycle de vie et procédures de réponse aux incidents"
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
          "Exercice 1 (concept) — Cycle de vie et procédures de réponse aux incidents",
          "facile",
          "(concept) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Cycle de vie et procédures de réponse aux incidents",
          "facile",
          "(analyse) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Cycle de vie et procédures de réponse aux incidents",
          "facile",
          "(application) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Cycle de vie et procédures de réponse aux incidents",
          "intermédiaire",
          "(défense) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Cycle de vie et procédures de réponse aux incidents",
          "intermédiaire",
          "(scénario) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Cycle de vie et procédures de réponse aux incidents",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Cycle de vie et procédures de réponse aux incidents",
          "intermédiaire",
          "(méthode) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Cycle de vie et procédures de réponse aux incidents",
          "avancé",
          "(risque) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Cycle de vie et procédures de réponse aux incidents",
          "avancé",
          "(contrôle) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Cycle de vie et procédures de réponse aux incidents",
          "avancé",
          "(synthèse) Dans le contexte de « Cycle de vie et procédures de réponse aux incidents » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cycle de vie et procédures de réponse aux incidents », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 26.2 : Préparation, détection et confinement"
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
          "Exercice 1 (concept) — Préparation, détection et confinement",
          "facile",
          "(concept) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Préparation, détection et confinement",
          "facile",
          "(analyse) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Préparation, détection et confinement",
          "facile",
          "(application) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Préparation, détection et confinement",
          "intermédiaire",
          "(défense) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Préparation, détection et confinement",
          "intermédiaire",
          "(scénario) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Préparation, détection et confinement",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Préparation, détection et confinement",
          "intermédiaire",
          "(méthode) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Préparation, détection et confinement",
          "avancé",
          "(risque) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Préparation, détection et confinement",
          "avancé",
          "(contrôle) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Préparation, détection et confinement",
          "avancé",
          "(synthèse) Dans le contexte de « Préparation, détection et confinement » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Préparation, détection et confinement », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 26.3 : Gestion des preuves et préparation forensic"
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
          "Exercice 1 (concept) — Gestion des preuves et préparation forensic",
          "facile",
          "(concept) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Gestion des preuves et préparation forensic",
          "facile",
          "(analyse) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Gestion des preuves et préparation forensic",
          "facile",
          "(application) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Gestion des preuves et préparation forensic",
          "intermédiaire",
          "(défense) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Gestion des preuves et préparation forensic",
          "intermédiaire",
          "(scénario) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Gestion des preuves et préparation forensic",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Gestion des preuves et préparation forensic",
          "intermédiaire",
          "(méthode) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Gestion des preuves et préparation forensic",
          "avancé",
          "(risque) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Gestion des preuves et préparation forensic",
          "avancé",
          "(contrôle) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Gestion des preuves et préparation forensic",
          "avancé",
          "(synthèse) Dans le contexte de « Gestion des preuves et préparation forensic » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des preuves et préparation forensic », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 26.4 : Fondamentaux de l'analyse disque et mémoire"
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
          "Exercice 1 (concept) — Fondamentaux de l'analyse disque et mémoire",
          "facile",
          "(concept) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Fondamentaux de l'analyse disque et mémoire",
          "facile",
          "(analyse) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Fondamentaux de l'analyse disque et mémoire",
          "facile",
          "(application) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Fondamentaux de l'analyse disque et mémoire",
          "intermédiaire",
          "(défense) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Fondamentaux de l'analyse disque et mémoire",
          "intermédiaire",
          "(scénario) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Fondamentaux de l'analyse disque et mémoire",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Fondamentaux de l'analyse disque et mémoire",
          "intermédiaire",
          "(méthode) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Fondamentaux de l'analyse disque et mémoire",
          "avancé",
          "(risque) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Fondamentaux de l'analyse disque et mémoire",
          "avancé",
          "(contrôle) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Fondamentaux de l'analyse disque et mémoire",
          "avancé",
          "(synthèse) Dans le contexte de « Fondamentaux de l'analyse disque et mémoire » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de l'analyse disque et mémoire », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 26.5 : Concepts de reconstruction de chronologie"
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
          "Exercice 1 (concept) — Concepts de reconstruction de chronologie",
          "facile",
          "(concept) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Concepts de reconstruction de chronologie",
          "facile",
          "(analyse) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Concepts de reconstruction de chronologie",
          "facile",
          "(application) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Concepts de reconstruction de chronologie",
          "intermédiaire",
          "(défense) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Concepts de reconstruction de chronologie",
          "intermédiaire",
          "(scénario) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Concepts de reconstruction de chronologie",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Concepts de reconstruction de chronologie",
          "intermédiaire",
          "(méthode) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Concepts de reconstruction de chronologie",
          "avancé",
          "(risque) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Concepts de reconstruction de chronologie",
          "avancé",
          "(contrôle) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Concepts de reconstruction de chronologie",
          "avancé",
          "(synthèse) Dans le contexte de « Concepts de reconstruction de chronologie » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts de reconstruction de chronologie », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 26.6 : Flux de travail de réponse aux incidents assistés par IA"
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
          "Exercice 1 (concept) — Flux de travail de réponse aux incidents assistés par IA",
          "facile",
          "(concept) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Flux de travail de réponse aux incidents assistés par IA",
          "facile",
          "(analyse) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Flux de travail de réponse aux incidents assistés par IA",
          "facile",
          "(application) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Flux de travail de réponse aux incidents assistés par IA",
          "intermédiaire",
          "(défense) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Flux de travail de réponse aux incidents assistés par IA",
          "intermédiaire",
          "(scénario) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Flux de travail de réponse aux incidents assistés par IA",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Flux de travail de réponse aux incidents assistés par IA",
          "intermédiaire",
          "(méthode) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Flux de travail de réponse aux incidents assistés par IA",
          "avancé",
          "(risque) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Flux de travail de réponse aux incidents assistés par IA",
          "avancé",
          "(contrôle) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Flux de travail de réponse aux incidents assistés par IA",
          "avancé",
          "(synthèse) Dans le contexte de « Flux de travail de réponse aux incidents assistés par IA » (module 26 : Réponse aux incidents et forensic numérique), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de réponse aux incidents assistés par IA », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Réponse aux incidents et forensic numérique » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
      "x": "Lab guidé pas à pas — Chapitre 26.1 : Cycle de vie et procédures de réponse aux incidents"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Incident response & forensic",
      "x": "Mettre en pratique « Cycle de vie et procédures de réponse aux incidents » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Incident response & forensic » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Sécuriser la scène de lab et documenter l'état initial."
        },
        {
          "h": "Étape 2",
          "p": "Créer une copie forensique et vérifier son hash."
        },
        {
          "h": "Étape 3",
          "p": "Analyser l'image disque (système de fichiers, artefacts)."
        },
        {
          "h": "Étape 4",
          "p": "Analyser la mémoire (processus, connexions, malware)."
        },
        {
          "h": "Étape 5",
          "p": "Reconstruire une chronologie et rédiger un rapport."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Collecter et analyser des preuves numériques de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nsha256sum lab/disk.img\newfacquire lab/disk.img\nautopsy (interface d'analyse)\nvolatility3 -f lab/memory.raw windows.pslist\nvolatility3 -f lab/memory.raw windows.netscan\nlog2timeline.py lab/timeline.plaso lab/disk.img"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Collecter et analyser des preuves numériques de laboratoire",
      "x": "Artefacts à rechercher :\n- Comptes créés récemment.\n- Processus parent/enfant anormaux.\n- Connexions réseau sortantes.\n- Fichiers supprimés récupérables.\n- Clés de persistance."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 26.1 : Cycle de vie et procédures de réponse aux incidents"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Incident response & forensic », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Image disque",
      "x": "<strong>Objectif :</strong> Analyser une image disque de lab et retrouver un fichier supprimé.<br><strong>Contexte :</strong> Cycle de vie et procédures de réponse aux incidents (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c1_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Vérifier le hash."
        },
        {
          "h": "Étape 2",
          "p": "Ouvrir l'image."
        },
        {
          "h": "Étape 3",
          "p": "Analyser le système de fichiers."
        },
        {
          "h": "Étape 4",
          "p": "Récupérer le fichier."
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
      "title": "Write-up détaillé — CTF 1/5 (Image disque)",
      "x": "CTF 1/5 — Image disque\nChapitre : 26.1 — Cycle de vie et procédures de réponse aux incidents\nFlag : flag{m26_c1_ctf1}\n\nIndices :\n  1. Monter l'image en lecture seule.\n  2. Utiliser Autopsy.\n  3. Chercher les fichiers supprimés.\n\nProcédure pas à pas :\n  1. Vérifier le hash.\n  2. Ouvrir l'image.\n  3. Analyser le système de fichiers.\n  4. Récupérer le fichier.\n  5. Lire le flag.\n\nRemédiation : Préserver l'image originale et travailler sur une copie.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Mémoire",
      "x": "<strong>Objectif :</strong> Analyser un dump mémoire de lab et identifier un processus malveillant.<br><strong>Contexte :</strong> Cycle de vie et procédures de réponse aux incidents (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c1_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Charger le dump."
        },
        {
          "h": "Étape 2",
          "p": "Lister les processus."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le processus suspect."
        },
        {
          "h": "Étape 4",
          "p": "Extraire les artefacts."
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
      "title": "Write-up détaillé — CTF 2/5 (Mémoire)",
      "x": "CTF 2/5 — Mémoire\nChapitre : 26.1 — Cycle de vie et procédures de réponse aux incidents\nFlag : flag{m26_c1_ctf2}\n\nIndices :\n  1. Utiliser Volatility.\n  2. Lister les processus.\n  3. Vérifier les connexions.\n\nProcédure pas à pas :\n  1. Charger le dump.\n  2. Lister les processus.\n  3. Identifier le processus suspect.\n  4. Extraire les artefacts.\n  5. Récupérer le flag.\n\nRemédiation : Capturer la mémoire en premier et corréler avec le disque.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Chronologie",
      "x": "<strong>Objectif :</strong> Reconstruire la chronologie d'un incident de lab.<br><strong>Contexte :</strong> Cycle de vie et procédures de réponse aux incidents (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c1_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Collecter les logs."
        },
        {
          "h": "Étape 2",
          "p": "Extraire les horodatages."
        },
        {
          "h": "Étape 3",
          "p": "Créer une timeline."
        },
        {
          "h": "Étape 4",
          "p": "Identifier la séquence."
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
      "title": "Write-up détaillé — CTF 3/5 (Chronologie)",
      "x": "CTF 3/5 — Chronologie\nChapitre : 26.1 — Cycle de vie et procédures de réponse aux incidents\nFlag : flag{m26_c1_ctf3}\n\nIndices :\n  1. Extraire les timestamps.\n  2. Normaliser les sources.\n  3. Ordonner les événements.\n\nProcédure pas à pas :\n  1. Collecter les logs.\n  2. Extraire les horodatages.\n  3. Créer une timeline.\n  4. Identifier la séquence.\n  5. Récupérer le flag.\n\nRemédiation : Synchroniser les horloges et conserver les sources.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Fichier supprimé",
      "x": "<strong>Objectif :</strong> Récupérer un fichier supprimé d'un lab et prouver son intégrité.<br><strong>Contexte :</strong> Cycle de vie et procédures de réponse aux incidents (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c1_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser l'image."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les fichiers supprimés."
        },
        {
          "h": "Étape 3",
          "p": "Extraire le fichier."
        },
        {
          "h": "Étape 4",
          "p": "Calculer le hash."
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
      "title": "Write-up détaillé — CTF 4/5 (Fichier supprimé)",
      "x": "CTF 4/5 — Fichier supprimé\nChapitre : 26.1 — Cycle de vie et procédures de réponse aux incidents\nFlag : flag{m26_c1_ctf4}\n\nIndices :\n  1. Utiliser Autopsy/foremost.\n  2. Calculer le hash.\n  3. Documenter.\n\nProcédure pas à pas :\n  1. Analyser l'image.\n  2. Rechercher les fichiers supprimés.\n  3. Extraire le fichier.\n  4. Calculer le hash.\n  5. Lire le flag.\n\nRemédiation : Documenter la chaîne de possession et vérifier les hashes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Chaîne de possession",
      "x": "<strong>Objectif :</strong> Rédiger la chaîne de possession pour une preuve de lab.<br><strong>Contexte :</strong> Cycle de vie et procédures de réponse aux incidents (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c1_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Décrire la preuve."
        },
        {
          "h": "Étape 2",
          "p": "Noter la collecte."
        },
        {
          "h": "Étape 3",
          "p": "Enregistrer les transferts."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier le hash."
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
      "title": "Write-up détaillé — CTF 5/5 (Chaîne de possession)",
      "x": "CTF 5/5 — Chaîne de possession\nChapitre : 26.1 — Cycle de vie et procédures de réponse aux incidents\nFlag : flag{m26_c1_ctf5}\n\nIndices :\n  1. Identifier la preuve.\n  2. Noter les transferts.\n  3. Hasher.\n\nProcédure pas à pas :\n  1. Décrire la preuve.\n  2. Noter la collecte.\n  3. Enregistrer les transferts.\n  4. Vérifier le hash.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser un formulaire de chaîne de possession et un coffre sécurisé.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 26.2 : Préparation, détection et confinement"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Carrière & CEH",
      "x": "Mettre en pratique « Préparation, détection et confinement » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Carrière & CEH » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Cartographier les domaines CEH v13 et les compétences associées."
        },
        {
          "h": "Étape 2",
          "p": "Évaluer votre niveau actuel par domaine."
        },
        {
          "h": "Étape 3",
          "p": "Définir un plan d'étude et des labs pratiques."
        },
        {
          "h": "Étape 4",
          "p": "Préparer un scénario de projet de synthèse."
        },
        {
          "h": "Étape 5",
          "p": "Rédiger une feuille de route de carrière et de certifications."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Construire un plan de progression et un scénario de projet",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nmkdir -p lab/carriere/{notes,plan,labs}\necho 'Domaines CEH: reconnaissance, scanning, enumeration, vuln, system, web, wireless, mobile, IoT, cloud, crypto, IR' > lab/carriere/notes/domaines.txt\necho 'Objectif: certification + portfolio de labs' > lab/carriere/plan/objectifs.txt\ndate -Iseconds > lab/carriere/notes/start.txt"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Construire un plan de progression et un scénario de projet",
      "x": "Plan type :\n- 4 semaines : fondamentaux réseau + Linux/Windows.\n- 4 semaines : recon, scan, enum, vuln.\n- 4 semaines : web, système, crypto.\n- 2 semaines : IR, cloud, IA.\n- 2 semaines : exam blanc + projet."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 26.2 : Préparation, détection et confinement"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Carrière & CEH », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Cartographie CEH",
      "x": "<strong>Objectif :</strong> Associer cinq sujets de lab aux domaines CEH v13.<br><strong>Contexte :</strong> Préparation, détection et confinement (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m26_c2_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les sujets."
        },
        {
          "h": "Étape 2",
          "p": "Lire les domaines."
        },
        {
          "h": "Étape 3",
          "p": "Associer."
        },
        {
          "h": "Étape 4",
          "p": "Justifier."
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
      "title": "Write-up détaillé — CTF 1/5 (Cartographie CEH)",
      "x": "CTF 1/5 — Cartographie CEH\nChapitre : 26.2 — Préparation, détection et confinement\nFlag : flag{m26_c2_ctf1}\n\nIndices :\n  1. Lire le référentiel.\n  2. Classer les sujets.\n  3. Justifier.\n\nProcédure pas à pas :\n  1. Lister les sujets.\n  2. Lire les domaines.\n  3. Associer.\n  4. Justifier.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser le référentiel officiel et un plan d'étude.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Question scénario",
      "x": "<strong>Objectif :</strong> Répondre à une question scénario de lab avec élimination.<br><strong>Contexte :</strong> Préparation, détection et confinement (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m26_c2_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser l'énoncé."
        },
        {
          "h": "Étape 2",
          "p": "Éliminer."
        },
        {
          "h": "Étape 3",
          "p": "Comparer."
        },
        {
          "h": "Étape 4",
          "p": "Choisir."
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
      "title": "Write-up détaillé — CTF 2/5 (Question scénario)",
      "x": "CTF 2/5 — Question scénario\nChapitre : 26.2 — Préparation, détection et confinement\nFlag : flag{m26_c2_ctf2}\n\nIndices :\n  1. Lire l'énoncé.\n  2. Éliminer les options absurdes.\n  3. Choisir la meilleure.\n\nProcédure pas à pas :\n  1. Analyser l'énoncé.\n  2. Éliminer.\n  3. Comparer.\n  4. Choisir.\n  5. Récupérer le flag.\n\nRemédiation : S'entraîner sur des scénarios et justifier chaque choix.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Gestion du temps",
      "x": "<strong>Objectif :</strong> Planifier un examen blanc de lab de 50 questions en 60 minutes.<br><strong>Contexte :</strong> Préparation, détection et confinement (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m26_c2_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Créer un planning."
        },
        {
          "h": "Étape 2",
          "p": "Répondre aux questions faciles."
        },
        {
          "h": "Étape 3",
          "p": "Marquer les difficiles."
        },
        {
          "h": "Étape 4",
          "p": "Revenir."
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
      "title": "Write-up détaillé — CTF 3/5 (Gestion du temps)",
      "x": "CTF 3/5 — Gestion du temps\nChapitre : 26.2 — Préparation, détection et confinement\nFlag : flag{m26_c2_ctf3}\n\nIndices :\n  1. Répartir le temps.\n  2. Marquer les questions difficiles.\n  3. Revenir ensuite.\n\nProcédure pas à pas :\n  1. Créer un planning.\n  2. Répondre aux questions faciles.\n  3. Marquer les difficiles.\n  4. Revenir.\n  5. Récupérer le flag.\n\nRemédiation : S'entraîner avec chronomètre et analyser les erreurs.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Feuille de route",
      "x": "<strong>Objectif :</strong> Proposer une feuille de route de certifications après le lab.<br><strong>Contexte :</strong> Préparation, détection et confinement (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m26_c2_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les certifications."
        },
        {
          "h": "Étape 2",
          "p": "Vérifier les prérequis."
        },
        {
          "h": "Étape 3",
          "p": "Choisir une trajectoire."
        },
        {
          "h": "Étape 4",
          "p": "Planifier."
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
      "title": "Write-up détaillé — CTF 4/5 (Feuille de route)",
      "x": "CTF 4/5 — Feuille de route\nChapitre : 26.2 — Préparation, détection et confinement\nFlag : flag{m26_c2_ctf4}\n\nIndices :\n  1. Identifier les prérequis.\n  2. Choisir une spécialisation.\n  3. Planifier.\n\nProcédure pas à pas :\n  1. Lister les certifications.\n  2. Vérifier les prérequis.\n  3. Choisir une trajectoire.\n  4. Planifier.\n  5. Récupérer le flag.\n\nRemédiation : Aligners certifications et expérience pratique.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Capstone",
      "x": "<strong>Objectif :</strong> Cadrer un projet de synthèse de lab avec périmètre et livrables.<br><strong>Contexte :</strong> Préparation, détection et confinement (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m26_c2_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Choisir une cible de lab."
        },
        {
          "h": "Étape 2",
          "p": "Définir le périmètre."
        },
        {
          "h": "Étape 3",
          "p": "Lister les livrables."
        },
        {
          "h": "Étape 4",
          "p": "Planifier."
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
      "title": "Write-up détaillé — CTF 5/5 (Capstone)",
      "x": "CTF 5/5 — Capstone\nChapitre : 26.2 — Préparation, détection et confinement\nFlag : flag{m26_c2_ctf5}\n\nIndices :\n  1. Définir le périmètre.\n  2. Lister les livrables.\n  3. Planifier.\n\nProcédure pas à pas :\n  1. Choisir une cible de lab.\n  2. Définir le périmètre.\n  3. Lister les livrables.\n  4. Planifier.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser une méthodologie (PTES/OWASP) et documenter.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 26.3 : Gestion des preuves et préparation forensic"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Cadre légal & éthique",
      "x": "Mettre en pratique « Gestion des preuves et préparation forensic » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Cadre légal & éthique » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 26.3 : Gestion des preuves et préparation forensic"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Cadre légal & éthique », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Périmètre non autorisé",
      "x": "<strong>Objectif :</strong> Un testeur scanne une IP voisine non incluse dans le périmètre. Identifier la violation et la conduite à tenir.<br><strong>Contexte :</strong> Gestion des preuves et préparation forensic (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m26_c3_ctf1}"
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
      "x": "CTF 1/5 — Périmètre non autorisé\nChapitre : 26.3 — Gestion des preuves et préparation forensic\nFlag : flag{m26_c3_ctf1}\n\nIndices :\n  1. Relire la lettre d'autorisation et les RoE.\n  2. Comparer l'IP cible au périmètre contractuel.\n  3. Distinguer erreur technique et infraction.\n\nProcédure pas à pas :\n  1. Relever l'IP et l'horodatage du scan.\n  2. Comparer au périmètre autorisé.\n  3. Arrêter immédiatement toute action sur la cible hors scope.\n  4. Documenter l'incident et prévenir le client.\n  5. Proposer une mesure correctrice : liste blanche d'IP, double validation.\n\nRemédiation : Mettre en place une validation technique du périmètre avant chaque commande et un arrêt automatique en cas d'écart.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Violation de données personnelles",
      "x": "<strong>Objectif :</strong> Un fichier de preuves contient des données personnelles réelles. Déterminer les obligations RGPD.<br><strong>Contexte :</strong> Gestion des preuves et préparation forensic (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m26_c3_ctf2}"
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
      "x": "CTF 2/5 — Violation de données personnelles\nChapitre : 26.3 — Gestion des preuves et préparation forensic\nFlag : flag{m26_c3_ctf2}\n\nIndices :\n  1. Identifier la nature des données.\n  2. Vérifier la minimisation et la durée de conservation.\n  3. Penser à la notification sous 72 h.\n\nProcédure pas à pas :\n  1. Classer les données concernées.\n  2. Vérifier la base légale et l'information des personnes.\n  3. Supprimer ou anonymiser les données non nécessaires.\n  4. Notifier l'autorité si la violation est avérée.\n  5. Documenter la décision et les mesures.\n\nRemédiation : Appliquer la minimisation, chiffrer les preuves et limiter la conservation à la durée de la mission.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Preuve non intègre",
      "x": "<strong>Objectif :</strong> Une capture d'écran a été modifiée après collecte. Expliquer pourquoi elle perd sa valeur.<br><strong>Contexte :</strong> Gestion des preuves et préparation forensic (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m26_c3_ctf3}"
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
      "x": "CTF 3/5 — Preuve non intègre\nChapitre : 26.3 — Gestion des preuves et préparation forensic\nFlag : flag{m26_c3_ctf3}\n\nIndices :\n  1. Comparer l'empreinte avant/après.\n  2. Vérifier l'horodatage.\n  3. Distinguer preuve technique et simple copie.\n\nProcédure pas à pas :\n  1. Recalculer le hash du fichier.\n  2. Comparer au hash consigné.\n  3. Identifier la différence.\n  4. Écarter la preuve non intègre.\n  5. Recommencer la collecte avec un journal.\n\nRemédiation : Hasher les preuves au moment de la collecte et conserver les empreintes séparément.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Divulgation responsable",
      "x": "<strong>Objectif :</strong> Une vulnérabilité critique est découverte chez un éditeur. Définir une chronologie de divulgation.<br><strong>Contexte :</strong> Gestion des preuves et préparation forensic (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m26_c3_ctf4}"
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
      "x": "CTF 4/5 — Divulgation responsable\nChapitre : 26.3 — Gestion des preuves et préparation forensic\nFlag : flag{m26_c3_ctf4}\n\nIndices :\n  1. Vérifier le canal de contact sécurité.\n  2. Prévoir un délai de correction raisonnable.\n  3. Éviter la publication avant accord.\n\nProcédure pas à pas :\n  1. Rédiger un rapport minimal et reproductible.\n  2. Contacter le programme de divulgation.\n  3. Proposer un délai (ex. 90 jours).\n  4. Suivre les échanges et la correction.\n  5. Publier uniquement après accord ou expiration négociée.\n\nRemédiation : Utiliser un canal chiffré, limiter les données sensibles et documenter chaque échange.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Contrat ambigu",
      "x": "<strong>Objectif :</strong> Un client autorise un test sur son SaaS hébergé chez un tiers. Identifier la limite de son autorisation.<br><strong>Contexte :</strong> Gestion des preuves et préparation forensic (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m26_c3_ctf5}"
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
      "x": "CTF 5/5 — Contrat ambigu\nChapitre : 26.3 — Gestion des preuves et préparation forensic\nFlag : flag{m26_c3_ctf5}\n\nIndices :\n  1. Distinguer propriétaire et hébergeur.\n  2. Lire les conditions du fournisseur.\n  3. Vérifier la chaîne d'autorisation.\n\nProcédure pas à pas :\n  1. Identifier l'hébergeur et le service concerné.\n  2. Vérifier si le client contrôle réellement la couche testée.\n  3. Demander une autorisation écrite supplémentaire si nécessaire.\n  4. Adapter le périmètre aux seuls actifs contrôlés.\n  5. Consigner la décision dans les RoE.\n\nRemédiation : Faire valider le périmètre par le juridique et obtenir l'accord de chaque partie concernée.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 26.4 : Fondamentaux de l'analyse disque et mémoire"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Malware",
      "x": "Mettre en pratique « Fondamentaux de l'analyse disque et mémoire » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Malware » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 26.4 : Fondamentaux de l'analyse disque et mémoire"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Malware », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Extraction d'IOC",
      "x": "<strong>Objectif :</strong> Extraire les indicateurs de compromission d'un échantillon de lab.<br><strong>Contexte :</strong> Fondamentaux de l'analyse disque et mémoire (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m26_c4_ctf1}"
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
      "x": "CTF 1/5 — Extraction d'IOC\nChapitre : 26.4 — Fondamentaux de l'analyse disque et mémoire\nFlag : flag{m26_c4_ctf1}\n\nIndices :\n  1. Utiliser strings.\n  2. Chercher les URL et IP.\n  3. Corréler avec le comportement.\n\nProcédure pas à pas :\n  1. Calculer le hash.\n  2. Extraire les chaînes.\n  3. Identifier les IOC.\n  4. Documenter les artefacts.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Bloquer les IOC et surveiller les journaux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Mécanisme de persistance",
      "x": "<strong>Objectif :</strong> Identifier comment un malware de lab survit au redémarrage.<br><strong>Contexte :</strong> Fondamentaux de l'analyse disque et mémoire (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m26_c4_ctf2}"
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
      "x": "CTF 2/5 — Mécanisme de persistance\nChapitre : 26.4 — Fondamentaux de l'analyse disque et mémoire\nFlag : flag{m26_c4_ctf2}\n\nIndices :\n  1. Inspecter les clés Run.\n  2. Vérifier les services.\n  3. Observer les tâches planifiées.\n\nProcédure pas à pas :\n  1. Analyser le comportement.\n  2. Identifier la clé de persistance.\n  3. Documenter le chemin.\n  4. Nettoyer l'artefact.\n  5. Lire le flag.\n\nRemédiation : Surveiller les points de persistance et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Callback réseau",
      "x": "<strong>Objectif :</strong> Un malware de lab contacte un serveur C2. Identifier le trafic.<br><strong>Contexte :</strong> Fondamentaux de l'analyse disque et mémoire (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m26_c4_ctf3}"
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
      "x": "CTF 3/5 — Callback réseau\nChapitre : 26.4 — Fondamentaux de l'analyse disque et mémoire\nFlag : flag{m26_c4_ctf3}\n\nIndices :\n  1. Analyser le pcap.\n  2. Chercher les requêtes DNS/HTTP.\n  3. Isoler le réseau.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes sortantes.\n  3. Identifier le domaine C2.\n  4. Extraire la requête.\n  5. Lire le flag.\n\nRemédiation : Bloquer les domaines malveillants et inspecter le trafic sortant.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Binaire packé",
      "x": "<strong>Objectif :</strong> Un échantillon de lab est packé. Détecter l'indice et expliquer.<br><strong>Contexte :</strong> Fondamentaux de l'analyse disque et mémoire (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m26_c4_ctf4}"
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
      "x": "CTF 4/5 — Binaire packé\nChapitre : 26.4 — Fondamentaux de l'analyse disque et mémoire\nFlag : flag{m26_c4_ctf4}\n\nIndices :\n  1. Vérifier l'entropie.\n  2. Comparer les sections.\n  3. Observer les imports.\n\nProcédure pas à pas :\n  1. Analyser l'en-tête.\n  2. Calculer l'entropie.\n  3. Identifier la section suspecte.\n  4. Documenter l'indice.\n  5. Récupérer le flag.\n\nRemédiation : Analyser en sandbox et utiliser la détection comportementale.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Règle YARA",
      "x": "<strong>Objectif :</strong> Écrire une règle YARA pour détecter un échantillon de lab.<br><strong>Contexte :</strong> Fondamentaux de l'analyse disque et mémoire (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m26_c4_ctf5}"
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
      "x": "CTF 5/5 — Règle YARA\nChapitre : 26.4 — Fondamentaux de l'analyse disque et mémoire\nFlag : flag{m26_c4_ctf5}\n\nIndices :\n  1. Choisir une chaîne unique.\n  2. Vérifier les faux positifs.\n  3. Tester la règle.\n\nProcédure pas à pas :\n  1. Extraire une chaîne caractéristique.\n  2. Rédiger la règle.\n  3. Tester sur l'échantillon.\n  4. Vérifier l'absence de faux positif.\n  5. Récupérer le flag.\n\nRemédiation : Maintenir et tester les règles de détection régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 26.5 : Concepts de reconstruction de chronologie"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Reconnaissance & OSINT",
      "x": "Mettre en pratique « Concepts de reconstruction de chronologie » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Reconnaissance & OSINT » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 26.5 : Concepts de reconstruction de chronologie"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Reconnaissance & OSINT », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Sous-domaine oublié",
      "x": "<strong>Objectif :</strong> Retrouver un sous-domaine de développement exposé dans un lab et prouver son existence.<br><strong>Contexte :</strong> Concepts de reconstruction de chronologie (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m26_c5_ctf1}"
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
      "x": "CTF 1/5 — Sous-domaine oublié\nChapitre : 26.5 — Concepts de reconstruction de chronologie\nFlag : flag{m26_c5_ctf1}\n\nIndices :\n  1. Chercher les enregistrements DNS et les certificats.\n  2. Vérifier les sous-domaines classiques (dev, staging, test).\n  3. Utiliser une source de transparence des certificats.\n\nProcédure pas à pas :\n  1. Énumérer les sous-domaines via DNS et crt.sh.\n  2. Tester la résolution des candidats.\n  3. Identifier le sous-domaine actif.\n  4. Accéder à la page d'accueil du lab.\n  5. Récupérer le flag dans le commentaire HTML.\n\nRemédiation : Retirer les environnements de test de la zone publique et appliquer une authentification.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Métadonnées PDF",
      "x": "<strong>Objectif :</strong> Un PDF de lab contient des métadonnées révélatrices. Les extraire et conclure.<br><strong>Contexte :</strong> Concepts de reconstruction de chronologie (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m26_c5_ctf2}"
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
      "x": "CTF 2/5 — Métadonnées PDF\nChapitre : 26.5 — Concepts de reconstruction de chronologie\nFlag : flag{m26_c5_ctf2}\n\nIndices :\n  1. Utiliser un outil d'analyse de métadonnées.\n  2. Chercher auteur, logiciel, chemins.\n  3. Ne pas publier les données personnelles.\n\nProcédure pas à pas :\n  1. Télécharger le PDF de lab.\n  2. Exécuter exiftool.\n  3. Relever l'auteur et le chemin interne.\n  4. Corréler avec les autres indices.\n  5. Récupérer le flag dans les métadonnées.\n\nRemédiation : Nettoyer les métadonnées avant publication et sensibiliser les équipes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Modèle d'adresse email",
      "x": "<strong>Objectif :</strong> Déduire le format des adresses email d'une organisation fictive à partir de sources publiques.<br><strong>Contexte :</strong> Concepts de reconstruction de chronologie (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m26_c5_ctf3}"
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
      "x": "CTF 3/5 — Modèle d'adresse email\nChapitre : 26.5 — Concepts de reconstruction de chronologie\nFlag : flag{m26_c5_ctf3}\n\nIndices :\n  1. Observer les adresses publiées.\n  2. Tester les formats prénom.nom, p.nom, nom.\n  3. Rester passif.\n\nProcédure pas à pas :\n  1. Collecter des adresses publiques de lab.\n  2. Identifier le format dominant.\n  3. Formuler des candidats.\n  4. Valider avec une source de lab.\n  5. Récupérer le flag dans la page de contact.\n\nRemédiation : Limiter l'exposition des adresses et utiliser des alias génériques.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Transfert de zone DNS",
      "x": "<strong>Objectif :</strong> Vérifier si un serveur DNS de lab autorise un transfert de zone.<br><strong>Contexte :</strong> Concepts de reconstruction de chronologie (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m26_c5_ctf4}"
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
      "x": "CTF 4/5 — Transfert de zone DNS\nChapitre : 26.5 — Concepts de reconstruction de chronologie\nFlag : flag{m26_c5_ctf4}\n\nIndices :\n  1. Tester dig AXFR.\n  2. Vérifier les NS.\n  3. Comparer avec les enregistrements publics.\n\nProcédure pas à pas :\n  1. Identifier le serveur NS du lab.\n  2. Tenter un transfert AXFR.\n  3. Lister les enregistrements obtenus.\n  4. Identifier l'hôte contenant le flag.\n  5. Accéder à la ressource de lab.\n\nRemédiation : Restreindre les transferts de zone aux serveurs secondaires autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Fuite dans un dépôt public",
      "x": "<strong>Objectif :</strong> Un dépôt Git de lab contient un secret dans l'historique. Le retrouver.<br><strong>Contexte :</strong> Concepts de reconstruction de chronologie (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m26_c5_ctf5}"
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
      "x": "CTF 5/5 — Fuite dans un dépôt public\nChapitre : 26.5 — Concepts de reconstruction de chronologie\nFlag : flag{m26_c5_ctf5}\n\nIndices :\n  1. Chercher les commits anciens.\n  2. Inspecter les fichiers de configuration.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Cloner le dépôt de lab.\n  2. Parcourir l'historique avec git log -p.\n  3. Identifier le commit contenant le secret.\n  4. Extraire la valeur factice.\n  5. Récupérer le flag associé.\n\nRemédiation : Utiliser un scanner de secrets, révoquer les clés et nettoyer l'historique.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 26.6 : Flux de travail de réponse aux incidents assistés par IA"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Incident response & forensic",
      "x": "Mettre en pratique « Flux de travail de réponse aux incidents assistés par IA » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Incident response & forensic » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Sécuriser la scène de lab et documenter l'état initial."
        },
        {
          "h": "Étape 2",
          "p": "Créer une copie forensique et vérifier son hash."
        },
        {
          "h": "Étape 3",
          "p": "Analyser l'image disque (système de fichiers, artefacts)."
        },
        {
          "h": "Étape 4",
          "p": "Analyser la mémoire (processus, connexions, malware)."
        },
        {
          "h": "Étape 5",
          "p": "Reconstruire une chronologie et rédiger un rapport."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Collecter et analyser des preuves numériques de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nsha256sum lab/disk.img\newfacquire lab/disk.img\nautopsy (interface d'analyse)\nvolatility3 -f lab/memory.raw windows.pslist\nvolatility3 -f lab/memory.raw windows.netscan\nlog2timeline.py lab/timeline.plaso lab/disk.img"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Collecter et analyser des preuves numériques de laboratoire",
      "x": "Artefacts à rechercher :\n- Comptes créés récemment.\n- Processus parent/enfant anormaux.\n- Connexions réseau sortantes.\n- Fichiers supprimés récupérables.\n- Clés de persistance."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 26.6 : Flux de travail de réponse aux incidents assistés par IA"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Incident response & forensic », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Image disque",
      "x": "<strong>Objectif :</strong> Analyser une image disque de lab et retrouver un fichier supprimé.<br><strong>Contexte :</strong> Flux de travail de réponse aux incidents assistés par IA (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c6_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Vérifier le hash."
        },
        {
          "h": "Étape 2",
          "p": "Ouvrir l'image."
        },
        {
          "h": "Étape 3",
          "p": "Analyser le système de fichiers."
        },
        {
          "h": "Étape 4",
          "p": "Récupérer le fichier."
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
      "title": "Write-up détaillé — CTF 1/5 (Image disque)",
      "x": "CTF 1/5 — Image disque\nChapitre : 26.6 — Flux de travail de réponse aux incidents assistés par IA\nFlag : flag{m26_c6_ctf1}\n\nIndices :\n  1. Monter l'image en lecture seule.\n  2. Utiliser Autopsy.\n  3. Chercher les fichiers supprimés.\n\nProcédure pas à pas :\n  1. Vérifier le hash.\n  2. Ouvrir l'image.\n  3. Analyser le système de fichiers.\n  4. Récupérer le fichier.\n  5. Lire le flag.\n\nRemédiation : Préserver l'image originale et travailler sur une copie.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Mémoire",
      "x": "<strong>Objectif :</strong> Analyser un dump mémoire de lab et identifier un processus malveillant.<br><strong>Contexte :</strong> Flux de travail de réponse aux incidents assistés par IA (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c6_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Charger le dump."
        },
        {
          "h": "Étape 2",
          "p": "Lister les processus."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le processus suspect."
        },
        {
          "h": "Étape 4",
          "p": "Extraire les artefacts."
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
      "title": "Write-up détaillé — CTF 2/5 (Mémoire)",
      "x": "CTF 2/5 — Mémoire\nChapitre : 26.6 — Flux de travail de réponse aux incidents assistés par IA\nFlag : flag{m26_c6_ctf2}\n\nIndices :\n  1. Utiliser Volatility.\n  2. Lister les processus.\n  3. Vérifier les connexions.\n\nProcédure pas à pas :\n  1. Charger le dump.\n  2. Lister les processus.\n  3. Identifier le processus suspect.\n  4. Extraire les artefacts.\n  5. Récupérer le flag.\n\nRemédiation : Capturer la mémoire en premier et corréler avec le disque.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Chronologie",
      "x": "<strong>Objectif :</strong> Reconstruire la chronologie d'un incident de lab.<br><strong>Contexte :</strong> Flux de travail de réponse aux incidents assistés par IA (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c6_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Collecter les logs."
        },
        {
          "h": "Étape 2",
          "p": "Extraire les horodatages."
        },
        {
          "h": "Étape 3",
          "p": "Créer une timeline."
        },
        {
          "h": "Étape 4",
          "p": "Identifier la séquence."
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
      "title": "Write-up détaillé — CTF 3/5 (Chronologie)",
      "x": "CTF 3/5 — Chronologie\nChapitre : 26.6 — Flux de travail de réponse aux incidents assistés par IA\nFlag : flag{m26_c6_ctf3}\n\nIndices :\n  1. Extraire les timestamps.\n  2. Normaliser les sources.\n  3. Ordonner les événements.\n\nProcédure pas à pas :\n  1. Collecter les logs.\n  2. Extraire les horodatages.\n  3. Créer une timeline.\n  4. Identifier la séquence.\n  5. Récupérer le flag.\n\nRemédiation : Synchroniser les horloges et conserver les sources.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Fichier supprimé",
      "x": "<strong>Objectif :</strong> Récupérer un fichier supprimé d'un lab et prouver son intégrité.<br><strong>Contexte :</strong> Flux de travail de réponse aux incidents assistés par IA (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c6_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser l'image."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les fichiers supprimés."
        },
        {
          "h": "Étape 3",
          "p": "Extraire le fichier."
        },
        {
          "h": "Étape 4",
          "p": "Calculer le hash."
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
      "title": "Write-up détaillé — CTF 4/5 (Fichier supprimé)",
      "x": "CTF 4/5 — Fichier supprimé\nChapitre : 26.6 — Flux de travail de réponse aux incidents assistés par IA\nFlag : flag{m26_c6_ctf4}\n\nIndices :\n  1. Utiliser Autopsy/foremost.\n  2. Calculer le hash.\n  3. Documenter.\n\nProcédure pas à pas :\n  1. Analyser l'image.\n  2. Rechercher les fichiers supprimés.\n  3. Extraire le fichier.\n  4. Calculer le hash.\n  5. Lire le flag.\n\nRemédiation : Documenter la chaîne de possession et vérifier les hashes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Chaîne de possession",
      "x": "<strong>Objectif :</strong> Rédiger la chaîne de possession pour une preuve de lab.<br><strong>Contexte :</strong> Flux de travail de réponse aux incidents assistés par IA (Incident response & forensic).<br><strong>Flag attendu (lab) :</strong> flag{m26_c6_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Décrire la preuve."
        },
        {
          "h": "Étape 2",
          "p": "Noter la collecte."
        },
        {
          "h": "Étape 3",
          "p": "Enregistrer les transferts."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier le hash."
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
      "title": "Write-up détaillé — CTF 5/5 (Chaîne de possession)",
      "x": "CTF 5/5 — Chaîne de possession\nChapitre : 26.6 — Flux de travail de réponse aux incidents assistés par IA\nFlag : flag{m26_c6_ctf5}\n\nIndices :\n  1. Identifier la preuve.\n  2. Noter les transferts.\n  3. Hasher.\n\nProcédure pas à pas :\n  1. Décrire la preuve.\n  2. Noter la collecte.\n  3. Enregistrer les transferts.\n  4. Vérifier le hash.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser un formulaire de chaîne de possession et un coffre sécurisé.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q26"
};
