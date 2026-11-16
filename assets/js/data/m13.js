export default {
  "id": "m13",
  "num": 13,
  "title": "Piratage système (Linux)",
  "short": "SysHack Linux",
  "icon": "🐚",
  "xp": 320,
  "duration": 75,
  "summary": "Cours en français enrichi sur « Piratage système (Linux) » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
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
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 13.1 : Concepts d'authentification Linux et d'attaques de mots de passe"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Concepts d'authentification Linux et d'attaques de mots de passe » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Énumérer les comptes locaux, groupes et politiques de mots de passe."
        },
        {
          "h": "Étape 2",
          "p": "Inspecter les services, tâches planifiées et clés Run du registre."
        },
        {
          "h": "Étape 3",
          "p": "Identifier les configurations à risque (droits excessifs, chemins non cités)."
        },
        {
          "h": "Étape 4",
          "p": "Tester la robustesse des mots de passe de lab avec des dictionnaires de test."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les constats et proposer des mesures de durcissement."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Auditer les comptes, permissions et mécanismes de persistance Windows",
      "x": "# LAB AUTORISÉ UNIQUEMENT (PowerShell)\nnet user\nnet localgroup administrators\nnet accounts\nGet-Service | Where-Object {$_.StartType -eq 'Auto'}\nGet-ScheduledTask | Select TaskName,State\nreg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nsc qc VulnService"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Auditer les comptes, permissions et mécanismes de persistance Windows",
      "x": "Points de contrôle :\n- Comptes inutilisés ou sans mot de passe.\n- Membres excessifs du groupe Administrateurs.\n- Services avec chemin non cité ou permissions faibles.\n- Clés Run et tâches planifiées inconnues.\n- Politique de mot de passe trop permissive."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 13.1 : Concepts d'authentification Linux et d'attaques de mots de passe"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Concepts d'authentification Linux et d'attaques de mots de passe (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c1_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir une session de lab."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les clés de registre suspectes."
        },
        {
          "h": "Étape 3",
          "p": "Identifier la clé contenant le mot de passe."
        },
        {
          "h": "Étape 4",
          "p": "Lire la valeur."
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
      "title": "Write-up détaillé — CTF 1/5 (Identifiant dans le registre)",
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 13.1 — Concepts d'authentification Linux et d'attaques de mots de passe\nFlag : flag{m13_c1_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Concepts d'authentification Linux et d'attaques de mots de passe (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c1_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Énumérer les groupes locaux."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le compte de test."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier son appartenance."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer l'impact."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le rapport d'audit."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Droits excessifs)",
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 13.1 — Concepts d'authentification Linux et d'attaques de mots de passe\nFlag : flag{m13_c1_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Concepts d'authentification Linux et d'attaques de mots de passe (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c1_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les services."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le service vulnérable."
        },
        {
          "h": "Étape 3",
          "p": "Afficher sa configuration."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier les droits d'écriture."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le dossier de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Service non cité)",
      "x": "CTF 3/5 — Service non cité\nChapitre : 13.1 — Concepts d'authentification Linux et d'attaques de mots de passe\nFlag : flag{m13_c1_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Concepts d'authentification Linux et d'attaques de mots de passe (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c1_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir le planificateur de tâches."
        },
        {
          "h": "Étape 2",
          "p": "Lister les tâches non standard."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le script utilisé."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier les droits d'écriture."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le script."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Tâche planifiée)",
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 13.1 — Concepts d'authentification Linux et d'attaques de mots de passe\nFlag : flag{m13_c1_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Concepts d'authentification Linux et d'attaques de mots de passe (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c1_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Afficher la politique."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la longueur et la complexité."
        },
        {
          "h": "Étape 3",
          "p": "Tester un petit dictionnaire."
        },
        {
          "h": "Étape 4",
          "p": "Constater la faiblesse."
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
      "title": "Write-up détaillé — CTF 5/5 (Politique de mot de passe)",
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 13.1 — Concepts d'authentification Linux et d'attaques de mots de passe\nFlag : flag{m13_c1_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 13.2 : SUID, permissions et abus de capacités"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « SUID, permissions et abus de capacités » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Énumérer les comptes locaux, groupes et politiques de mots de passe."
        },
        {
          "h": "Étape 2",
          "p": "Inspecter les services, tâches planifiées et clés Run du registre."
        },
        {
          "h": "Étape 3",
          "p": "Identifier les configurations à risque (droits excessifs, chemins non cités)."
        },
        {
          "h": "Étape 4",
          "p": "Tester la robustesse des mots de passe de lab avec des dictionnaires de test."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les constats et proposer des mesures de durcissement."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Auditer les comptes, permissions et mécanismes de persistance Windows",
      "x": "# LAB AUTORISÉ UNIQUEMENT (PowerShell)\nnet user\nnet localgroup administrators\nnet accounts\nGet-Service | Where-Object {$_.StartType -eq 'Auto'}\nGet-ScheduledTask | Select TaskName,State\nreg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nsc qc VulnService"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Auditer les comptes, permissions et mécanismes de persistance Windows",
      "x": "Points de contrôle :\n- Comptes inutilisés ou sans mot de passe.\n- Membres excessifs du groupe Administrateurs.\n- Services avec chemin non cité ou permissions faibles.\n- Clés Run et tâches planifiées inconnues.\n- Politique de mot de passe trop permissive."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 13.2 : SUID, permissions et abus de capacités"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> SUID, permissions et abus de capacités (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c2_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir une session de lab."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les clés de registre suspectes."
        },
        {
          "h": "Étape 3",
          "p": "Identifier la clé contenant le mot de passe."
        },
        {
          "h": "Étape 4",
          "p": "Lire la valeur."
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
      "title": "Write-up détaillé — CTF 1/5 (Identifiant dans le registre)",
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 13.2 — SUID, permissions et abus de capacités\nFlag : flag{m13_c2_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> SUID, permissions et abus de capacités (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c2_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Énumérer les groupes locaux."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le compte de test."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier son appartenance."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer l'impact."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le rapport d'audit."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Droits excessifs)",
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 13.2 — SUID, permissions et abus de capacités\nFlag : flag{m13_c2_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> SUID, permissions et abus de capacités (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c2_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les services."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le service vulnérable."
        },
        {
          "h": "Étape 3",
          "p": "Afficher sa configuration."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier les droits d'écriture."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le dossier de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Service non cité)",
      "x": "CTF 3/5 — Service non cité\nChapitre : 13.2 — SUID, permissions et abus de capacités\nFlag : flag{m13_c2_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> SUID, permissions et abus de capacités (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c2_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir le planificateur de tâches."
        },
        {
          "h": "Étape 2",
          "p": "Lister les tâches non standard."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le script utilisé."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier les droits d'écriture."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le script."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Tâche planifiée)",
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 13.2 — SUID, permissions et abus de capacités\nFlag : flag{m13_c2_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> SUID, permissions et abus de capacités (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c2_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Afficher la politique."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la longueur et la complexité."
        },
        {
          "h": "Étape 3",
          "p": "Tester un petit dictionnaire."
        },
        {
          "h": "Étape 4",
          "p": "Constater la faiblesse."
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
      "title": "Write-up détaillé — CTF 5/5 (Politique de mot de passe)",
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 13.2 — SUID, permissions et abus de capacités\nFlag : flag{m13_c2_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 13.3 : Aperçu des techniques d'escalade de privilèges"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Aperçu des techniques d'escalade de privilèges » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Énumérer les comptes locaux, groupes et politiques de mots de passe."
        },
        {
          "h": "Étape 2",
          "p": "Inspecter les services, tâches planifiées et clés Run du registre."
        },
        {
          "h": "Étape 3",
          "p": "Identifier les configurations à risque (droits excessifs, chemins non cités)."
        },
        {
          "h": "Étape 4",
          "p": "Tester la robustesse des mots de passe de lab avec des dictionnaires de test."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les constats et proposer des mesures de durcissement."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Auditer les comptes, permissions et mécanismes de persistance Windows",
      "x": "# LAB AUTORISÉ UNIQUEMENT (PowerShell)\nnet user\nnet localgroup administrators\nnet accounts\nGet-Service | Where-Object {$_.StartType -eq 'Auto'}\nGet-ScheduledTask | Select TaskName,State\nreg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nsc qc VulnService"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Auditer les comptes, permissions et mécanismes de persistance Windows",
      "x": "Points de contrôle :\n- Comptes inutilisés ou sans mot de passe.\n- Membres excessifs du groupe Administrateurs.\n- Services avec chemin non cité ou permissions faibles.\n- Clés Run et tâches planifiées inconnues.\n- Politique de mot de passe trop permissive."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 13.3 : Aperçu des techniques d'escalade de privilèges"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Aperçu des techniques d'escalade de privilèges (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c3_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir une session de lab."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les clés de registre suspectes."
        },
        {
          "h": "Étape 3",
          "p": "Identifier la clé contenant le mot de passe."
        },
        {
          "h": "Étape 4",
          "p": "Lire la valeur."
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
      "title": "Write-up détaillé — CTF 1/5 (Identifiant dans le registre)",
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 13.3 — Aperçu des techniques d'escalade de privilèges\nFlag : flag{m13_c3_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Aperçu des techniques d'escalade de privilèges (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c3_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Énumérer les groupes locaux."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le compte de test."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier son appartenance."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer l'impact."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le rapport d'audit."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Droits excessifs)",
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 13.3 — Aperçu des techniques d'escalade de privilèges\nFlag : flag{m13_c3_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Aperçu des techniques d'escalade de privilèges (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c3_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les services."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le service vulnérable."
        },
        {
          "h": "Étape 3",
          "p": "Afficher sa configuration."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier les droits d'écriture."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le dossier de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Service non cité)",
      "x": "CTF 3/5 — Service non cité\nChapitre : 13.3 — Aperçu des techniques d'escalade de privilèges\nFlag : flag{m13_c3_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Aperçu des techniques d'escalade de privilèges (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c3_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Ouvrir le planificateur de tâches."
        },
        {
          "h": "Étape 2",
          "p": "Lister les tâches non standard."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le script utilisé."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier les droits d'écriture."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le script."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Tâche planifiée)",
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 13.3 — Aperçu des techniques d'escalade de privilèges\nFlag : flag{m13_c3_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Aperçu des techniques d'escalade de privilèges (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m13_c3_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Afficher la politique."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la longueur et la complexité."
        },
        {
          "h": "Étape 3",
          "p": "Tester un petit dictionnaire."
        },
        {
          "h": "Étape 4",
          "p": "Constater la faiblesse."
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
      "title": "Write-up détaillé — CTF 5/5 (Politique de mot de passe)",
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 13.3 — Aperçu des techniques d'escalade de privilèges\nFlag : flag{m13_c3_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 13.4 : Gestion de l'accès post-exploitation"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Cadre légal & éthique",
      "x": "Mettre en pratique « Gestion de l'accès post-exploitation » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Cadre légal & éthique » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 13.4 : Gestion de l'accès post-exploitation"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Cadre légal & éthique », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Périmètre non autorisé",
      "x": "<strong>Objectif :</strong> Un testeur scanne une IP voisine non incluse dans le périmètre. Identifier la violation et la conduite à tenir.<br><strong>Contexte :</strong> Gestion de l'accès post-exploitation (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c4_ctf1}"
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
      "x": "CTF 1/5 — Périmètre non autorisé\nChapitre : 13.4 — Gestion de l'accès post-exploitation\nFlag : flag{m13_c4_ctf1}\n\nIndices :\n  1. Relire la lettre d'autorisation et les RoE.\n  2. Comparer l'IP cible au périmètre contractuel.\n  3. Distinguer erreur technique et infraction.\n\nProcédure pas à pas :\n  1. Relever l'IP et l'horodatage du scan.\n  2. Comparer au périmètre autorisé.\n  3. Arrêter immédiatement toute action sur la cible hors scope.\n  4. Documenter l'incident et prévenir le client.\n  5. Proposer une mesure correctrice : liste blanche d'IP, double validation.\n\nRemédiation : Mettre en place une validation technique du périmètre avant chaque commande et un arrêt automatique en cas d'écart.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Violation de données personnelles",
      "x": "<strong>Objectif :</strong> Un fichier de preuves contient des données personnelles réelles. Déterminer les obligations RGPD.<br><strong>Contexte :</strong> Gestion de l'accès post-exploitation (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c4_ctf2}"
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
      "x": "CTF 2/5 — Violation de données personnelles\nChapitre : 13.4 — Gestion de l'accès post-exploitation\nFlag : flag{m13_c4_ctf2}\n\nIndices :\n  1. Identifier la nature des données.\n  2. Vérifier la minimisation et la durée de conservation.\n  3. Penser à la notification sous 72 h.\n\nProcédure pas à pas :\n  1. Classer les données concernées.\n  2. Vérifier la base légale et l'information des personnes.\n  3. Supprimer ou anonymiser les données non nécessaires.\n  4. Notifier l'autorité si la violation est avérée.\n  5. Documenter la décision et les mesures.\n\nRemédiation : Appliquer la minimisation, chiffrer les preuves et limiter la conservation à la durée de la mission.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Preuve non intègre",
      "x": "<strong>Objectif :</strong> Une capture d'écran a été modifiée après collecte. Expliquer pourquoi elle perd sa valeur.<br><strong>Contexte :</strong> Gestion de l'accès post-exploitation (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c4_ctf3}"
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
      "x": "CTF 3/5 — Preuve non intègre\nChapitre : 13.4 — Gestion de l'accès post-exploitation\nFlag : flag{m13_c4_ctf3}\n\nIndices :\n  1. Comparer l'empreinte avant/après.\n  2. Vérifier l'horodatage.\n  3. Distinguer preuve technique et simple copie.\n\nProcédure pas à pas :\n  1. Recalculer le hash du fichier.\n  2. Comparer au hash consigné.\n  3. Identifier la différence.\n  4. Écarter la preuve non intègre.\n  5. Recommencer la collecte avec un journal.\n\nRemédiation : Hasher les preuves au moment de la collecte et conserver les empreintes séparément.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Divulgation responsable",
      "x": "<strong>Objectif :</strong> Une vulnérabilité critique est découverte chez un éditeur. Définir une chronologie de divulgation.<br><strong>Contexte :</strong> Gestion de l'accès post-exploitation (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c4_ctf4}"
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
      "x": "CTF 4/5 — Divulgation responsable\nChapitre : 13.4 — Gestion de l'accès post-exploitation\nFlag : flag{m13_c4_ctf4}\n\nIndices :\n  1. Vérifier le canal de contact sécurité.\n  2. Prévoir un délai de correction raisonnable.\n  3. Éviter la publication avant accord.\n\nProcédure pas à pas :\n  1. Rédiger un rapport minimal et reproductible.\n  2. Contacter le programme de divulgation.\n  3. Proposer un délai (ex. 90 jours).\n  4. Suivre les échanges et la correction.\n  5. Publier uniquement après accord ou expiration négociée.\n\nRemédiation : Utiliser un canal chiffré, limiter les données sensibles et documenter chaque échange.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Contrat ambigu",
      "x": "<strong>Objectif :</strong> Un client autorise un test sur son SaaS hébergé chez un tiers. Identifier la limite de son autorisation.<br><strong>Contexte :</strong> Gestion de l'accès post-exploitation (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c4_ctf5}"
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
      "x": "CTF 5/5 — Contrat ambigu\nChapitre : 13.4 — Gestion de l'accès post-exploitation\nFlag : flag{m13_c4_ctf5}\n\nIndices :\n  1. Distinguer propriétaire et hébergeur.\n  2. Lire les conditions du fournisseur.\n  3. Vérifier la chaîne d'autorisation.\n\nProcédure pas à pas :\n  1. Identifier l'hébergeur et le service concerné.\n  2. Vérifier si le client contrôle réellement la couche testée.\n  3. Demander une autorisation écrite supplémentaire si nécessaire.\n  4. Adapter le périmètre aux seuls actifs contrôlés.\n  5. Consigner la décision dans les RoE.\n\nRemédiation : Faire valider le périmètre par le juridique et obtenir l'accord de chaque partie concernée.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 13.5 : Concepts et risques d'exploits noyau"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Cadre légal & éthique",
      "x": "Mettre en pratique « Concepts et risques d'exploits noyau » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Cadre légal & éthique » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 13.5 : Concepts et risques d'exploits noyau"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Cadre légal & éthique », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Périmètre non autorisé",
      "x": "<strong>Objectif :</strong> Un testeur scanne une IP voisine non incluse dans le périmètre. Identifier la violation et la conduite à tenir.<br><strong>Contexte :</strong> Concepts et risques d'exploits noyau (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c5_ctf1}"
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
      "x": "CTF 1/5 — Périmètre non autorisé\nChapitre : 13.5 — Concepts et risques d'exploits noyau\nFlag : flag{m13_c5_ctf1}\n\nIndices :\n  1. Relire la lettre d'autorisation et les RoE.\n  2. Comparer l'IP cible au périmètre contractuel.\n  3. Distinguer erreur technique et infraction.\n\nProcédure pas à pas :\n  1. Relever l'IP et l'horodatage du scan.\n  2. Comparer au périmètre autorisé.\n  3. Arrêter immédiatement toute action sur la cible hors scope.\n  4. Documenter l'incident et prévenir le client.\n  5. Proposer une mesure correctrice : liste blanche d'IP, double validation.\n\nRemédiation : Mettre en place une validation technique du périmètre avant chaque commande et un arrêt automatique en cas d'écart.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Violation de données personnelles",
      "x": "<strong>Objectif :</strong> Un fichier de preuves contient des données personnelles réelles. Déterminer les obligations RGPD.<br><strong>Contexte :</strong> Concepts et risques d'exploits noyau (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c5_ctf2}"
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
      "x": "CTF 2/5 — Violation de données personnelles\nChapitre : 13.5 — Concepts et risques d'exploits noyau\nFlag : flag{m13_c5_ctf2}\n\nIndices :\n  1. Identifier la nature des données.\n  2. Vérifier la minimisation et la durée de conservation.\n  3. Penser à la notification sous 72 h.\n\nProcédure pas à pas :\n  1. Classer les données concernées.\n  2. Vérifier la base légale et l'information des personnes.\n  3. Supprimer ou anonymiser les données non nécessaires.\n  4. Notifier l'autorité si la violation est avérée.\n  5. Documenter la décision et les mesures.\n\nRemédiation : Appliquer la minimisation, chiffrer les preuves et limiter la conservation à la durée de la mission.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Preuve non intègre",
      "x": "<strong>Objectif :</strong> Une capture d'écran a été modifiée après collecte. Expliquer pourquoi elle perd sa valeur.<br><strong>Contexte :</strong> Concepts et risques d'exploits noyau (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c5_ctf3}"
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
      "x": "CTF 3/5 — Preuve non intègre\nChapitre : 13.5 — Concepts et risques d'exploits noyau\nFlag : flag{m13_c5_ctf3}\n\nIndices :\n  1. Comparer l'empreinte avant/après.\n  2. Vérifier l'horodatage.\n  3. Distinguer preuve technique et simple copie.\n\nProcédure pas à pas :\n  1. Recalculer le hash du fichier.\n  2. Comparer au hash consigné.\n  3. Identifier la différence.\n  4. Écarter la preuve non intègre.\n  5. Recommencer la collecte avec un journal.\n\nRemédiation : Hasher les preuves au moment de la collecte et conserver les empreintes séparément.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Divulgation responsable",
      "x": "<strong>Objectif :</strong> Une vulnérabilité critique est découverte chez un éditeur. Définir une chronologie de divulgation.<br><strong>Contexte :</strong> Concepts et risques d'exploits noyau (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c5_ctf4}"
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
      "x": "CTF 4/5 — Divulgation responsable\nChapitre : 13.5 — Concepts et risques d'exploits noyau\nFlag : flag{m13_c5_ctf4}\n\nIndices :\n  1. Vérifier le canal de contact sécurité.\n  2. Prévoir un délai de correction raisonnable.\n  3. Éviter la publication avant accord.\n\nProcédure pas à pas :\n  1. Rédiger un rapport minimal et reproductible.\n  2. Contacter le programme de divulgation.\n  3. Proposer un délai (ex. 90 jours).\n  4. Suivre les échanges et la correction.\n  5. Publier uniquement après accord ou expiration négociée.\n\nRemédiation : Utiliser un canal chiffré, limiter les données sensibles et documenter chaque échange.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Contrat ambigu",
      "x": "<strong>Objectif :</strong> Un client autorise un test sur son SaaS hébergé chez un tiers. Identifier la limite de son autorisation.<br><strong>Contexte :</strong> Concepts et risques d'exploits noyau (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m13_c5_ctf5}"
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
      "x": "CTF 5/5 — Contrat ambigu\nChapitre : 13.5 — Concepts et risques d'exploits noyau\nFlag : flag{m13_c5_ctf5}\n\nIndices :\n  1. Distinguer propriétaire et hébergeur.\n  2. Lire les conditions du fournisseur.\n  3. Vérifier la chaîne d'autorisation.\n\nProcédure pas à pas :\n  1. Identifier l'hébergeur et le service concerné.\n  2. Vérifier si le client contrôle réellement la couche testée.\n  3. Demander une autorisation écrite supplémentaire si nécessaire.\n  4. Adapter le périmètre aux seuls actifs contrôlés.\n  5. Consigner la décision dans les RoE.\n\nRemédiation : Faire valider le périmètre par le juridique et obtenir l'accord de chaque partie concernée.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 13.6 : Dépannage et analyse assistés par IA"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Malware",
      "x": "Mettre en pratique « Dépannage et analyse assistés par IA » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Malware » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 13.6 : Dépannage et analyse assistés par IA"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Malware », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Extraction d'IOC",
      "x": "<strong>Objectif :</strong> Extraire les indicateurs de compromission d'un échantillon de lab.<br><strong>Contexte :</strong> Dépannage et analyse assistés par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m13_c6_ctf1}"
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
      "x": "CTF 1/5 — Extraction d'IOC\nChapitre : 13.6 — Dépannage et analyse assistés par IA\nFlag : flag{m13_c6_ctf1}\n\nIndices :\n  1. Utiliser strings.\n  2. Chercher les URL et IP.\n  3. Corréler avec le comportement.\n\nProcédure pas à pas :\n  1. Calculer le hash.\n  2. Extraire les chaînes.\n  3. Identifier les IOC.\n  4. Documenter les artefacts.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Bloquer les IOC et surveiller les journaux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Mécanisme de persistance",
      "x": "<strong>Objectif :</strong> Identifier comment un malware de lab survit au redémarrage.<br><strong>Contexte :</strong> Dépannage et analyse assistés par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m13_c6_ctf2}"
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
      "x": "CTF 2/5 — Mécanisme de persistance\nChapitre : 13.6 — Dépannage et analyse assistés par IA\nFlag : flag{m13_c6_ctf2}\n\nIndices :\n  1. Inspecter les clés Run.\n  2. Vérifier les services.\n  3. Observer les tâches planifiées.\n\nProcédure pas à pas :\n  1. Analyser le comportement.\n  2. Identifier la clé de persistance.\n  3. Documenter le chemin.\n  4. Nettoyer l'artefact.\n  5. Lire le flag.\n\nRemédiation : Surveiller les points de persistance et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Callback réseau",
      "x": "<strong>Objectif :</strong> Un malware de lab contacte un serveur C2. Identifier le trafic.<br><strong>Contexte :</strong> Dépannage et analyse assistés par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m13_c6_ctf3}"
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
      "x": "CTF 3/5 — Callback réseau\nChapitre : 13.6 — Dépannage et analyse assistés par IA\nFlag : flag{m13_c6_ctf3}\n\nIndices :\n  1. Analyser le pcap.\n  2. Chercher les requêtes DNS/HTTP.\n  3. Isoler le réseau.\n\nProcédure pas à pas :\n  1. Ouvrir la capture.\n  2. Filtrer les requêtes sortantes.\n  3. Identifier le domaine C2.\n  4. Extraire la requête.\n  5. Lire le flag.\n\nRemédiation : Bloquer les domaines malveillants et inspecter le trafic sortant.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Binaire packé",
      "x": "<strong>Objectif :</strong> Un échantillon de lab est packé. Détecter l'indice et expliquer.<br><strong>Contexte :</strong> Dépannage et analyse assistés par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m13_c6_ctf4}"
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
      "x": "CTF 4/5 — Binaire packé\nChapitre : 13.6 — Dépannage et analyse assistés par IA\nFlag : flag{m13_c6_ctf4}\n\nIndices :\n  1. Vérifier l'entropie.\n  2. Comparer les sections.\n  3. Observer les imports.\n\nProcédure pas à pas :\n  1. Analyser l'en-tête.\n  2. Calculer l'entropie.\n  3. Identifier la section suspecte.\n  4. Documenter l'indice.\n  5. Récupérer le flag.\n\nRemédiation : Analyser en sandbox et utiliser la détection comportementale.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Règle YARA",
      "x": "<strong>Objectif :</strong> Écrire une règle YARA pour détecter un échantillon de lab.<br><strong>Contexte :</strong> Dépannage et analyse assistés par IA (Malware).<br><strong>Flag attendu (lab) :</strong> flag{m13_c6_ctf5}"
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
      "x": "CTF 5/5 — Règle YARA\nChapitre : 13.6 — Dépannage et analyse assistés par IA\nFlag : flag{m13_c6_ctf5}\n\nIndices :\n  1. Choisir une chaîne unique.\n  2. Vérifier les faux positifs.\n  3. Tester la règle.\n\nProcédure pas à pas :\n  1. Extraire une chaîne caractéristique.\n  2. Rédiger la règle.\n  3. Tester sur l'échantillon.\n  4. Vérifier l'absence de faux positif.\n  5. Récupérer le flag.\n\nRemédiation : Maintenir et tester les règles de détection régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q13"
};
