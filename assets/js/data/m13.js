export default {
  "id": "m13",
  "num": 13,
  "title": "Piratage système (Linux)",
  "short": "SysHack Linux",
  "icon": "🐚",
  "xp": 320,
  "duration": 75,
  "summary": "Cours en français sur « Piratage système (Linux) » avec 6 chapitres, 10 exercices par chapitre et un défi CTF.",
  "objectives": [
    "Comprendre et appliquer : Concepts d'authentification Linux et d'attaques de mots de passe.",
    "Comprendre et appliquer : SUID, permissions et abus de capacités.",
    "Comprendre et appliquer : Aperçu des techniques d'escalade de privilèges.",
    "Comprendre et appliquer : Gestion de l'accès post-exploitation.",
    "Comprendre et appliquer : Concepts et risques d'exploits noyau.",
    "Comprendre et appliquer : Dépannage et analyse assistés par IA."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 13 — Piratage système (Linux)</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 75 min · XP : 320. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "13.1 Concepts d'authentification Linux et d'attaques de mots de passe"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>concepts d'authentification linux et d'attaques de mots de passe</strong> dans le cadre du module « Piratage système (Linux) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Concepts d'authentification Linux et d'attaques de mots de passe », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Concepts d'authentification Linux et d'attaques de mots de passe.",
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
      "x": "13.2 SUID, permissions et abus de capacités"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>suid, permissions et abus de capacités</strong> dans le cadre du module « Piratage système (Linux) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « SUID, permissions et abus de capacités », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : SUID, permissions et abus de capacités.",
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
      "x": "13.3 Aperçu des techniques d'escalade de privilèges"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>aperçu des techniques d'escalade de privilèges</strong> dans le cadre du module « Piratage système (Linux) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Aperçu des techniques d'escalade de privilèges », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Aperçu des techniques d'escalade de privilèges.",
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
      "x": "13.4 Gestion de l'accès post-exploitation"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>gestion de l'accès post-exploitation</strong> dans le cadre du module « Piratage système (Linux) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Gestion de l'accès post-exploitation », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Gestion de l'accès post-exploitation.",
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
      "x": "13.5 Concepts et risques d'exploits noyau"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>concepts et risques d'exploits noyau</strong> dans le cadre du module « Piratage système (Linux) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Concepts et risques d'exploits noyau », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Concepts et risques d'exploits noyau.",
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
      "x": "13.6 Dépannage et analyse assistés par IA"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>dépannage et analyse assistés par ia</strong> dans le cadre du module « Piratage système (Linux) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Dépannage et analyse assistés par IA », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Dépannage et analyse assistés par IA.",
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
      "x": "Exercices — Chapitre 13.1 : Concepts d'authentification Linux et d'attaques de mots de passe"
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
          "Exercice 1 (concept) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "facile",
          "(concept) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "facile",
          "(analyse) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "facile",
          "(application) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "intermédiaire",
          "(défense) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "intermédiaire",
          "(scénario) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "intermédiaire",
          "(méthode) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "avancé",
          "(risque) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "avancé",
          "(contrôle) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Concepts d'authentification Linux et d'attaques de mots de passe",
          "avancé",
          "(synthèse) Dans le contexte de « Concepts d'authentification Linux et d'attaques de mots de passe » (module 13 : Piratage système (Linux)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'authentification Linux et d'attaques de mots de passe », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 13.2 : SUID, permissions et abus de capacités"
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
          "Exercice 1 (concept) — SUID, permissions et abus de capacités",
          "facile",
          "(concept) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — SUID, permissions et abus de capacités",
          "facile",
          "(analyse) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — SUID, permissions et abus de capacités",
          "facile",
          "(application) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — SUID, permissions et abus de capacités",
          "intermédiaire",
          "(défense) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — SUID, permissions et abus de capacités",
          "intermédiaire",
          "(scénario) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — SUID, permissions et abus de capacités",
          "intermédiaire",
          "(terminologie) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — SUID, permissions et abus de capacités",
          "intermédiaire",
          "(méthode) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — SUID, permissions et abus de capacités",
          "avancé",
          "(risque) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — SUID, permissions et abus de capacités",
          "avancé",
          "(contrôle) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — SUID, permissions et abus de capacités",
          "avancé",
          "(synthèse) Dans le contexte de « SUID, permissions et abus de capacités » (module 13 : Piratage système (Linux)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « SUID, permissions et abus de capacités », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 13.3 : Aperçu des techniques d'escalade de privilèges"
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
          "Exercice 1 (concept) — Aperçu des techniques d'escalade de privilèges",
          "facile",
          "(concept) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Aperçu des techniques d'escalade de privilèges",
          "facile",
          "(analyse) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Aperçu des techniques d'escalade de privilèges",
          "facile",
          "(application) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Aperçu des techniques d'escalade de privilèges",
          "intermédiaire",
          "(défense) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Aperçu des techniques d'escalade de privilèges",
          "intermédiaire",
          "(scénario) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Aperçu des techniques d'escalade de privilèges",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Aperçu des techniques d'escalade de privilèges",
          "intermédiaire",
          "(méthode) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Aperçu des techniques d'escalade de privilèges",
          "avancé",
          "(risque) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Aperçu des techniques d'escalade de privilèges",
          "avancé",
          "(contrôle) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Aperçu des techniques d'escalade de privilèges",
          "avancé",
          "(synthèse) Dans le contexte de « Aperçu des techniques d'escalade de privilèges » (module 13 : Piratage système (Linux)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des techniques d'escalade de privilèges », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 13.4 : Gestion de l'accès post-exploitation"
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
          "Exercice 1 (concept) — Gestion de l'accès post-exploitation",
          "facile",
          "(concept) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Gestion de l'accès post-exploitation",
          "facile",
          "(analyse) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Gestion de l'accès post-exploitation",
          "facile",
          "(application) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Gestion de l'accès post-exploitation",
          "intermédiaire",
          "(défense) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Gestion de l'accès post-exploitation",
          "intermédiaire",
          "(scénario) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Gestion de l'accès post-exploitation",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Gestion de l'accès post-exploitation",
          "intermédiaire",
          "(méthode) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Gestion de l'accès post-exploitation",
          "avancé",
          "(risque) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Gestion de l'accès post-exploitation",
          "avancé",
          "(contrôle) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Gestion de l'accès post-exploitation",
          "avancé",
          "(synthèse) Dans le contexte de « Gestion de l'accès post-exploitation » (module 13 : Piratage système (Linux)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion de l'accès post-exploitation », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 13.5 : Concepts et risques d'exploits noyau"
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
          "Exercice 1 (concept) — Concepts et risques d'exploits noyau",
          "facile",
          "(concept) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Concepts et risques d'exploits noyau",
          "facile",
          "(analyse) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Concepts et risques d'exploits noyau",
          "facile",
          "(application) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Concepts et risques d'exploits noyau",
          "intermédiaire",
          "(défense) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Concepts et risques d'exploits noyau",
          "intermédiaire",
          "(scénario) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Concepts et risques d'exploits noyau",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Concepts et risques d'exploits noyau",
          "intermédiaire",
          "(méthode) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Concepts et risques d'exploits noyau",
          "avancé",
          "(risque) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Concepts et risques d'exploits noyau",
          "avancé",
          "(contrôle) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Concepts et risques d'exploits noyau",
          "avancé",
          "(synthèse) Dans le contexte de « Concepts et risques d'exploits noyau » (module 13 : Piratage système (Linux)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts et risques d'exploits noyau », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 13.6 : Dépannage et analyse assistés par IA"
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
          "Exercice 1 (concept) — Dépannage et analyse assistés par IA",
          "facile",
          "(concept) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Dépannage et analyse assistés par IA",
          "facile",
          "(analyse) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Dépannage et analyse assistés par IA",
          "facile",
          "(application) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Dépannage et analyse assistés par IA",
          "intermédiaire",
          "(défense) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Dépannage et analyse assistés par IA",
          "intermédiaire",
          "(scénario) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Dépannage et analyse assistés par IA",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Dépannage et analyse assistés par IA",
          "intermédiaire",
          "(méthode) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Dépannage et analyse assistés par IA",
          "avancé",
          "(risque) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Dépannage et analyse assistés par IA",
          "avancé",
          "(contrôle) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Dépannage et analyse assistés par IA",
          "avancé",
          "(synthèse) Dans le contexte de « Dépannage et analyse assistés par IA » (module 13 : Piratage système (Linux)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Dépannage et analyse assistés par IA », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "CTF — Module 13"
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Piratage système (Linux) » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
  "quiz": "q13"
};
