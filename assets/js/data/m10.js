export default {
  "id": "m10",
  "num": 10,
  "title": "Techniques d'énumération",
  "short": "Enumération",
  "icon": "🧭",
  "xp": 290,
  "duration": 65,
  "summary": "Cours en français sur « Techniques d'énumération » avec 6 chapitres, 10 exercices par chapitre et un défi CTF.",
  "objectives": [
    "Comprendre et appliquer : Énumération des utilisateurs, services et ressources.",
    "Comprendre et appliquer : Concepts d'énumération SMB, FTP, SMTP, DNS.",
    "Comprendre et appliquer : Banner grabbing et extraction d'informations.",
    "Comprendre et appliquer : Chaînage d'énumération pour un accès plus profond.",
    "Comprendre et appliquer : Cartographie des données d'énumération vers des chemins d'attaque.",
    "Comprendre et appliquer : Analyse d'énumération assistée par IA."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 10 — Techniques d'énumération</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 65 min · XP : 290. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "10.1 Énumération des utilisateurs, services et ressources"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>énumération des utilisateurs, services et ressources</strong> dans le cadre du module « Techniques d'énumération ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Énumération des utilisateurs, services et ressources », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Énumération des utilisateurs, services et ressources.",
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
      "x": "10.2 Concepts d'énumération SMB, FTP, SMTP, DNS"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>concepts d'énumération smb, ftp, smtp, dns</strong> dans le cadre du module « Techniques d'énumération ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Concepts d'énumération SMB, FTP, SMTP, DNS », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Concepts d'énumération SMB, FTP, SMTP, DNS.",
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
      "x": "10.3 Banner grabbing et extraction d'informations"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>banner grabbing et extraction d'informations</strong> dans le cadre du module « Techniques d'énumération ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Banner grabbing et extraction d'informations », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Banner grabbing et extraction d'informations.",
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
      "x": "10.4 Chaînage d'énumération pour un accès plus profond"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>chaînage d'énumération pour un accès plus profond</strong> dans le cadre du module « Techniques d'énumération ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Chaînage d'énumération pour un accès plus profond », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Chaînage d'énumération pour un accès plus profond.",
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
      "x": "10.5 Cartographie des données d'énumération vers des chemins d'attaque"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>cartographie des données d'énumération vers des chemins d'attaque</strong> dans le cadre du module « Techniques d'énumération ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Cartographie des données d'énumération vers des chemins d'attaque », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Cartographie des données d'énumération vers des chemins d'attaque.",
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
      "x": "10.6 Analyse d'énumération assistée par IA"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>analyse d'énumération assistée par ia</strong> dans le cadre du module « Techniques d'énumération ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Analyse d'énumération assistée par IA », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Analyse d'énumération assistée par IA.",
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
      "x": "Exercices — Chapitre 10.1 : Énumération des utilisateurs, services et ressources"
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
          "Exercice 1 (concept) — Énumération des utilisateurs, services et ressources",
          "facile",
          "(concept) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Énumération des utilisateurs, services et ressources",
          "facile",
          "(analyse) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Énumération des utilisateurs, services et ressources",
          "facile",
          "(application) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Énumération des utilisateurs, services et ressources",
          "intermédiaire",
          "(défense) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Énumération des utilisateurs, services et ressources",
          "intermédiaire",
          "(scénario) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Énumération des utilisateurs, services et ressources",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Énumération des utilisateurs, services et ressources",
          "intermédiaire",
          "(méthode) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Énumération des utilisateurs, services et ressources",
          "avancé",
          "(risque) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Énumération des utilisateurs, services et ressources",
          "avancé",
          "(contrôle) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Énumération des utilisateurs, services et ressources",
          "avancé",
          "(synthèse) Dans le contexte de « Énumération des utilisateurs, services et ressources » (module 10 : Techniques d'énumération), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Énumération des utilisateurs, services et ressources », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 10.2 : Concepts d'énumération SMB, FTP, SMTP, DNS"
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
          "Exercice 1 (concept) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "facile",
          "(concept) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "facile",
          "(analyse) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "facile",
          "(application) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "intermédiaire",
          "(défense) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "intermédiaire",
          "(scénario) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "intermédiaire",
          "(méthode) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "avancé",
          "(risque) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "avancé",
          "(contrôle) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Concepts d'énumération SMB, FTP, SMTP, DNS",
          "avancé",
          "(synthèse) Dans le contexte de « Concepts d'énumération SMB, FTP, SMTP, DNS » (module 10 : Techniques d'énumération), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Concepts d'énumération SMB, FTP, SMTP, DNS », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 10.3 : Banner grabbing et extraction d'informations"
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
          "Exercice 1 (concept) — Banner grabbing et extraction d'informations",
          "facile",
          "(concept) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Banner grabbing et extraction d'informations",
          "facile",
          "(analyse) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Banner grabbing et extraction d'informations",
          "facile",
          "(application) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Banner grabbing et extraction d'informations",
          "intermédiaire",
          "(défense) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Banner grabbing et extraction d'informations",
          "intermédiaire",
          "(scénario) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Banner grabbing et extraction d'informations",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Banner grabbing et extraction d'informations",
          "intermédiaire",
          "(méthode) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Banner grabbing et extraction d'informations",
          "avancé",
          "(risque) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Banner grabbing et extraction d'informations",
          "avancé",
          "(contrôle) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Banner grabbing et extraction d'informations",
          "avancé",
          "(synthèse) Dans le contexte de « Banner grabbing et extraction d'informations » (module 10 : Techniques d'énumération), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Banner grabbing et extraction d'informations », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 10.4 : Chaînage d'énumération pour un accès plus profond"
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
          "Exercice 1 (concept) — Chaînage d'énumération pour un accès plus profond",
          "facile",
          "(concept) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Chaînage d'énumération pour un accès plus profond",
          "facile",
          "(analyse) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Chaînage d'énumération pour un accès plus profond",
          "facile",
          "(application) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Chaînage d'énumération pour un accès plus profond",
          "intermédiaire",
          "(défense) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Chaînage d'énumération pour un accès plus profond",
          "intermédiaire",
          "(scénario) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Chaînage d'énumération pour un accès plus profond",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Chaînage d'énumération pour un accès plus profond",
          "intermédiaire",
          "(méthode) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Chaînage d'énumération pour un accès plus profond",
          "avancé",
          "(risque) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Chaînage d'énumération pour un accès plus profond",
          "avancé",
          "(contrôle) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Chaînage d'énumération pour un accès plus profond",
          "avancé",
          "(synthèse) Dans le contexte de « Chaînage d'énumération pour un accès plus profond » (module 10 : Techniques d'énumération), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Chaînage d'énumération pour un accès plus profond », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 10.5 : Cartographie des données d'énumération vers des chemins d'attaque"
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
          "Exercice 1 (concept) — Cartographie des données d'énumération vers des chemins d'attaque",
          "facile",
          "(concept) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Cartographie des données d'énumération vers des chemins d'attaque",
          "facile",
          "(analyse) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Cartographie des données d'énumération vers des chemins d'attaque",
          "facile",
          "(application) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Cartographie des données d'énumération vers des chemins d'attaque",
          "intermédiaire",
          "(défense) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Cartographie des données d'énumération vers des chemins d'attaque",
          "intermédiaire",
          "(scénario) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Cartographie des données d'énumération vers des chemins d'attaque",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Cartographie des données d'énumération vers des chemins d'attaque",
          "intermédiaire",
          "(méthode) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Cartographie des données d'énumération vers des chemins d'attaque",
          "avancé",
          "(risque) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Cartographie des données d'énumération vers des chemins d'attaque",
          "avancé",
          "(contrôle) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Cartographie des données d'énumération vers des chemins d'attaque",
          "avancé",
          "(synthèse) Dans le contexte de « Cartographie des données d'énumération vers des chemins d'attaque » (module 10 : Techniques d'énumération), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Cartographie des données d'énumération vers des chemins d'attaque », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 10.6 : Analyse d'énumération assistée par IA"
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
          "Exercice 1 (concept) — Analyse d'énumération assistée par IA",
          "facile",
          "(concept) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Analyse d'énumération assistée par IA",
          "facile",
          "(analyse) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Analyse d'énumération assistée par IA",
          "facile",
          "(application) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Analyse d'énumération assistée par IA",
          "intermédiaire",
          "(défense) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Analyse d'énumération assistée par IA",
          "intermédiaire",
          "(scénario) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Analyse d'énumération assistée par IA",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Analyse d'énumération assistée par IA",
          "intermédiaire",
          "(méthode) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Analyse d'énumération assistée par IA",
          "avancé",
          "(risque) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Analyse d'énumération assistée par IA",
          "avancé",
          "(contrôle) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Analyse d'énumération assistée par IA",
          "avancé",
          "(synthèse) Dans le contexte de « Analyse d'énumération assistée par IA » (module 10 : Techniques d'énumération), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Analyse d'énumération assistée par IA », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "CTF — Module 10"
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Techniques d'énumération » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
  "quiz": "q10"
};
