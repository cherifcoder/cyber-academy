export default {
  "id": "m10",
  "num": 10,
  "title": "Techniques d'énumération",
  "short": "Enumération",
  "icon": "🧭",
  "xp": 290,
  "duration": 65,
  "summary": "Cours en français enrichi sur « Techniques d'énumération » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
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
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 10.1 : Énumération des utilisateurs, services et ressources"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Scan réseau",
      "x": "Mettre en pratique « Énumération des utilisateurs, services et ressources » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Scan réseau » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 10.1 : Énumération des utilisateurs, services et ressources"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Scan réseau », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Port caché",
      "x": "<strong>Objectif :</strong> Un service de lab écoute sur un port non standard. Le découvrir et récupérer le flag.<br><strong>Contexte :</strong> Énumération des utilisateurs, services et ressources (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m10_c1_ctf1}"
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
      "x": "CTF 1/5 — Port caché\nChapitre : 10.1 — Énumération des utilisateurs, services et ressources\nFlag : flag{m10_c1_ctf1}\n\nIndices :\n  1. Utiliser un scan complet des ports TCP.\n  2. Vérifier les ports hauts.\n  3. Lire la bannière du service.\n\nProcédure pas à pas :\n  1. Scanner tous les ports TCP de la cible de lab.\n  2. Repérer le port ouvert inhabituel.\n  3. Se connecter avec netcat.\n  4. Lire la bannière et le message.\n  5. Récupérer le flag affiché.\n\nRemédiation : Fermer les ports non nécessaires et appliquer un filtrage réseau.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Version vulnérable",
      "x": "<strong>Objectif :</strong> Identifier la version d'un service de lab et associer un risque connu.<br><strong>Contexte :</strong> Énumération des utilisateurs, services et ressources (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m10_c1_ctf2}"
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
      "x": "CTF 2/5 — Version vulnérable\nChapitre : 10.1 — Énumération des utilisateurs, services et ressources\nFlag : flag{m10_c1_ctf2}\n\nIndices :\n  1. Utiliser la détection de version.\n  2. Comparer à une base CVE.\n  3. Ne pas exploiter hors lab.\n\nProcédure pas à pas :\n  1. Lancer nmap -sV sur la cible.\n  2. Relever la version du service.\n  3. Rechercher les CVE correspondantes.\n  4. Évaluer la pertinence dans le lab.\n  5. Récupérer le flag dans le fichier de version.\n\nRemédiation : Mettre à jour le service et masquer la version dans les bannières.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Hôte oublié",
      "x": "<strong>Objectif :</strong> Un hôte du réseau de lab ne répond pas au ping mais expose un service. Le trouver.<br><strong>Contexte :</strong> Énumération des utilisateurs, services et ressources (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m10_c1_ctf3}"
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
      "x": "CTF 3/5 — Hôte oublié\nChapitre : 10.1 — Énumération des utilisateurs, services et ressources\nFlag : flag{m10_c1_ctf3}\n\nIndices :\n  1. Utiliser -Pn.\n  2. Scanner la plage en TCP.\n  3. Vérifier les réponses SYN.\n\nProcédure pas à pas :\n  1. Scanner la plage avec nmap -sn.\n  2. Constater l'absence de l'hôte.\n  3. Relancer avec -Pn sur la plage.\n  4. Identifier l'hôte qui répond en TCP.\n  5. Accéder au service et récupérer le flag.\n\nRemédiation : Inventorier les actifs et surveiller les nouveaux hôtes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Filtrage contourné",
      "x": "<strong>Objectif :</strong> Un pare-feu de lab bloque certains scans. Identifier une méthode de découverte autorisée.<br><strong>Contexte :</strong> Énumération des utilisateurs, services et ressources (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m10_c1_ctf4}"
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
      "x": "CTF 4/5 — Filtrage contourné\nChapitre : 10.1 — Énumération des utilisateurs, services et ressources\nFlag : flag{m10_c1_ctf4}\n\nIndices :\n  1. Tester différents types de scan.\n  2. Comparer les réponses.\n  3. Rester dans le périmètre.\n\nProcédure pas à pas :\n  1. Tester un scan SYN.\n  2. Tester un scan connect.\n  3. Comparer les résultats.\n  4. Identifier les ports filtrés.\n  5. Récupérer le flag dans la page de statut du lab.\n\nRemédiation : Configurer le pare-feu pour journaliser et bloquer les scans non autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation des résultats",
      "x": "<strong>Objectif :</strong> À partir d'un scan de lab, classer les services par risque.<br><strong>Contexte :</strong> Énumération des utilisateurs, services et ressources (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m10_c1_ctf5}"
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
      "x": "CTF 5/5 — Priorisation des résultats\nChapitre : 10.1 — Énumération des utilisateurs, services et ressources\nFlag : flag{m10_c1_ctf5}\n\nIndices :\n  1. Évaluer l'exposition.\n  2. Vérifier les versions.\n  3. Pondérer par l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les services ouverts.\n  2. Identifier les services sensibles.\n  3. Vérifier les versions et configurations.\n  4. Classer par criticité.\n  5. Récupérer le flag dans le rapport de lab.\n\nRemédiation : Utiliser une matrice de risque et un processus de remédiation priorisé.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 10.2 : Concepts d'énumération SMB, FTP, SMTP, DNS"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Reconnaissance & OSINT",
      "x": "Mettre en pratique « Concepts d'énumération SMB, FTP, SMTP, DNS » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Reconnaissance & OSINT » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 10.2 : Concepts d'énumération SMB, FTP, SMTP, DNS"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Reconnaissance & OSINT », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Sous-domaine oublié",
      "x": "<strong>Objectif :</strong> Retrouver un sous-domaine de développement exposé dans un lab et prouver son existence.<br><strong>Contexte :</strong> Concepts d'énumération SMB, FTP, SMTP, DNS (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m10_c2_ctf1}"
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
      "x": "CTF 1/5 — Sous-domaine oublié\nChapitre : 10.2 — Concepts d'énumération SMB, FTP, SMTP, DNS\nFlag : flag{m10_c2_ctf1}\n\nIndices :\n  1. Chercher les enregistrements DNS et les certificats.\n  2. Vérifier les sous-domaines classiques (dev, staging, test).\n  3. Utiliser une source de transparence des certificats.\n\nProcédure pas à pas :\n  1. Énumérer les sous-domaines via DNS et crt.sh.\n  2. Tester la résolution des candidats.\n  3. Identifier le sous-domaine actif.\n  4. Accéder à la page d'accueil du lab.\n  5. Récupérer le flag dans le commentaire HTML.\n\nRemédiation : Retirer les environnements de test de la zone publique et appliquer une authentification.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Métadonnées PDF",
      "x": "<strong>Objectif :</strong> Un PDF de lab contient des métadonnées révélatrices. Les extraire et conclure.<br><strong>Contexte :</strong> Concepts d'énumération SMB, FTP, SMTP, DNS (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m10_c2_ctf2}"
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
      "x": "CTF 2/5 — Métadonnées PDF\nChapitre : 10.2 — Concepts d'énumération SMB, FTP, SMTP, DNS\nFlag : flag{m10_c2_ctf2}\n\nIndices :\n  1. Utiliser un outil d'analyse de métadonnées.\n  2. Chercher auteur, logiciel, chemins.\n  3. Ne pas publier les données personnelles.\n\nProcédure pas à pas :\n  1. Télécharger le PDF de lab.\n  2. Exécuter exiftool.\n  3. Relever l'auteur et le chemin interne.\n  4. Corréler avec les autres indices.\n  5. Récupérer le flag dans les métadonnées.\n\nRemédiation : Nettoyer les métadonnées avant publication et sensibiliser les équipes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Modèle d'adresse email",
      "x": "<strong>Objectif :</strong> Déduire le format des adresses email d'une organisation fictive à partir de sources publiques.<br><strong>Contexte :</strong> Concepts d'énumération SMB, FTP, SMTP, DNS (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m10_c2_ctf3}"
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
      "x": "CTF 3/5 — Modèle d'adresse email\nChapitre : 10.2 — Concepts d'énumération SMB, FTP, SMTP, DNS\nFlag : flag{m10_c2_ctf3}\n\nIndices :\n  1. Observer les adresses publiées.\n  2. Tester les formats prénom.nom, p.nom, nom.\n  3. Rester passif.\n\nProcédure pas à pas :\n  1. Collecter des adresses publiques de lab.\n  2. Identifier le format dominant.\n  3. Formuler des candidats.\n  4. Valider avec une source de lab.\n  5. Récupérer le flag dans la page de contact.\n\nRemédiation : Limiter l'exposition des adresses et utiliser des alias génériques.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Transfert de zone DNS",
      "x": "<strong>Objectif :</strong> Vérifier si un serveur DNS de lab autorise un transfert de zone.<br><strong>Contexte :</strong> Concepts d'énumération SMB, FTP, SMTP, DNS (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m10_c2_ctf4}"
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
      "x": "CTF 4/5 — Transfert de zone DNS\nChapitre : 10.2 — Concepts d'énumération SMB, FTP, SMTP, DNS\nFlag : flag{m10_c2_ctf4}\n\nIndices :\n  1. Tester dig AXFR.\n  2. Vérifier les NS.\n  3. Comparer avec les enregistrements publics.\n\nProcédure pas à pas :\n  1. Identifier le serveur NS du lab.\n  2. Tenter un transfert AXFR.\n  3. Lister les enregistrements obtenus.\n  4. Identifier l'hôte contenant le flag.\n  5. Accéder à la ressource de lab.\n\nRemédiation : Restreindre les transferts de zone aux serveurs secondaires autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Fuite dans un dépôt public",
      "x": "<strong>Objectif :</strong> Un dépôt Git de lab contient un secret dans l'historique. Le retrouver.<br><strong>Contexte :</strong> Concepts d'énumération SMB, FTP, SMTP, DNS (Reconnaissance & OSINT).<br><strong>Flag attendu (lab) :</strong> flag{m10_c2_ctf5}"
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
      "x": "CTF 5/5 — Fuite dans un dépôt public\nChapitre : 10.2 — Concepts d'énumération SMB, FTP, SMTP, DNS\nFlag : flag{m10_c2_ctf5}\n\nIndices :\n  1. Chercher les commits anciens.\n  2. Inspecter les fichiers de configuration.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Cloner le dépôt de lab.\n  2. Parcourir l'historique avec git log -p.\n  3. Identifier le commit contenant le secret.\n  4. Extraire la valeur factice.\n  5. Récupérer le flag associé.\n\nRemédiation : Utiliser un scanner de secrets, révoquer les clés et nettoyer l'historique.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 10.3 : Banner grabbing et extraction d'informations"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Énumération",
      "x": "Mettre en pratique « Banner grabbing et extraction d'informations » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Énumération » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier les services d'énumération disponibles (SMB, FTP, SMTP, DNS, LDAP)."
        },
        {
          "h": "Étape 2",
          "p": "Tester les accès anonymes ou les informations publiques."
        },
        {
          "h": "Étape 3",
          "p": "Lister les partages, utilisateurs et bannières."
        },
        {
          "h": "Étape 4",
          "p": "Corréler les informations pour construire une carte des accès."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les accès autorisés et les données sensibles exposées."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Énumérer les utilisateurs, partages et services d'un lab",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nenum4linux -a 192.168.56.10\nsmbclient -L //192.168.56.10 -N\nftp 192.168.56.10\ndig axfr @192.168.56.10 lab.local\nsmtp-user-enum -M VRFY -U users.txt -t 192.168.56.10\nldapsearch -x -H ldap://192.168.56.10 -b dc=lab,dc=local"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Énumérer les utilisateurs, partages et services d'un lab",
      "x": "Exemples d'informations recherchées :\n- Partages SMB accessibles en lecture.\n- Comptes FTP anonymes.\n- Utilisateurs valides via SMTP VRFY.\n- Enregistrements DNS internes.\n- Groupes et permissions LDAP."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 10.3 : Banner grabbing et extraction d'informations"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Énumération », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — FTP anonyme",
      "x": "<strong>Objectif :</strong> Un serveur FTP de lab accepte les connexions anonymes. Trouver le fichier contenant le flag.<br><strong>Contexte :</strong> Banner grabbing et extraction d'informations (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c3_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter en anonymous."
        },
        {
          "h": "Étape 2",
          "p": "Lister le répertoire racine."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le fichier README."
        },
        {
          "h": "Étape 4",
          "p": "Le télécharger."
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
      "title": "Write-up détaillé — CTF 1/5 (FTP anonyme)",
      "x": "CTF 1/5 — FTP anonyme\nChapitre : 10.3 — Banner grabbing et extraction d'informations\nFlag : flag{m10_c3_ctf1}\n\nIndices :\n  1. Tester l'utilisateur anonymous.\n  2. Lister les répertoires.\n  3. Télécharger le fichier lisible.\n\nProcédure pas à pas :\n  1. Se connecter en anonymous.\n  2. Lister le répertoire racine.\n  3. Identifier le fichier README.\n  4. Le télécharger.\n  5. Lire le flag.\n\nRemédiation : Désactiver l'accès anonyme et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Partage SMB",
      "x": "<strong>Objectif :</strong> Un partage SMB de lab est accessible sans authentification. Explorer et récupérer le flag.<br><strong>Contexte :</strong> Banner grabbing et extraction d'informations (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c3_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les partages avec smbclient."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le partage lisible."
        },
        {
          "h": "Étape 3",
          "p": "Se connecter au partage."
        },
        {
          "h": "Étape 4",
          "p": "Parcourir les fichiers."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag dans le fichier texte."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Partage SMB)",
      "x": "CTF 2/5 — Partage SMB\nChapitre : 10.3 — Banner grabbing et extraction d'informations\nFlag : flag{m10_c3_ctf2}\n\nIndices :\n  1. Lister les partages.\n  2. Tester un accès nul.\n  3. Chercher les fichiers de configuration.\n\nProcédure pas à pas :\n  1. Lister les partages avec smbclient.\n  2. Identifier le partage lisible.\n  3. Se connecter au partage.\n  4. Parcourir les fichiers.\n  5. Lire le flag dans le fichier texte.\n\nRemédiation : Restreindre les partages, désactiver les sessions nulles et auditer les ACL.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Utilisateurs SMTP",
      "x": "<strong>Objectif :</strong> Énumérer des utilisateurs valides sur un serveur SMTP de lab.<br><strong>Contexte :</strong> Banner grabbing et extraction d'informations (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c3_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Préparer une liste d'utilisateurs."
        },
        {
          "h": "Étape 2",
          "p": "Lancer smtp-user-enum."
        },
        {
          "h": "Étape 3",
          "p": "Relever les comptes valides."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le compte de test."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans la boîte de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Utilisateurs SMTP)",
      "x": "CTF 3/5 — Utilisateurs SMTP\nChapitre : 10.3 — Banner grabbing et extraction d'informations\nFlag : flag{m10_c3_ctf3}\n\nIndices :\n  1. Tester VRFY et EXPN.\n  2. Utiliser une liste de noms.\n  3. Observer les codes de réponse.\n\nProcédure pas à pas :\n  1. Préparer une liste d'utilisateurs.\n  2. Lancer smtp-user-enum.\n  3. Relever les comptes valides.\n  4. Identifier le compte de test.\n  5. Récupérer le flag dans la boîte de lab.\n\nRemédiation : Désactiver VRFY/EXPN et limiter les réponses du serveur.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — DNS interne",
      "x": "<strong>Objectif :</strong> Un serveur DNS de lab révèle des enregistrements internes. Les lister et trouver le flag.<br><strong>Contexte :</strong> Banner grabbing et extraction d'informations (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c3_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le serveur DNS."
        },
        {
          "h": "Étape 2",
          "p": "Tenter un transfert de zone."
        },
        {
          "h": "Étape 3",
          "p": "Lister les enregistrements."
        },
        {
          "h": "Étape 4",
          "p": "Repérer l'hôte associé au flag."
        },
        {
          "h": "Étape 5",
          "p": "Accéder à la ressource."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (DNS interne)",
      "x": "CTF 4/5 — DNS interne\nChapitre : 10.3 — Banner grabbing et extraction d'informations\nFlag : flag{m10_c3_ctf4}\n\nIndices :\n  1. Tester AXFR.\n  2. Interroger les enregistrements TXT.\n  3. Vérifier les zones internes.\n\nProcédure pas à pas :\n  1. Identifier le serveur DNS.\n  2. Tenter un transfert de zone.\n  3. Lister les enregistrements.\n  4. Repérer l'hôte associé au flag.\n  5. Accéder à la ressource.\n\nRemédiation : Restreindre les transferts de zone et séparer les zones internes/externes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — LDAP",
      "x": "<strong>Objectif :</strong> Un annuaire LDAP de lab expose des informations. Énumérer les utilisateurs et groupes.<br><strong>Contexte :</strong> Banner grabbing et extraction d'informations (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c3_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Interroger la base LDAP."
        },
        {
          "h": "Étape 2",
          "p": "Lister les objets utilisateurs."
        },
        {
          "h": "Étape 3",
          "p": "Lister les groupes."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le compte avec le flag."
        },
        {
          "h": "Étape 5",
          "p": "Lire l'attribut description."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (LDAP)",
      "x": "CTF 5/5 — LDAP\nChapitre : 10.3 — Banner grabbing et extraction d'informations\nFlag : flag{m10_c3_ctf5}\n\nIndices :\n  1. Tester une connexion anonyme.\n  2. Chercher les attributs publics.\n  3. Identifier le compte de service.\n\nProcédure pas à pas :\n  1. Interroger la base LDAP.\n  2. Lister les objets utilisateurs.\n  3. Lister les groupes.\n  4. Identifier le compte avec le flag.\n  5. Lire l'attribut description.\n\nRemédiation : Limiter les lectures anonymes et protéger les attributs sensibles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 10.4 : Chaînage d'énumération pour un accès plus profond"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Énumération",
      "x": "Mettre en pratique « Chaînage d'énumération pour un accès plus profond » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Énumération » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier les services d'énumération disponibles (SMB, FTP, SMTP, DNS, LDAP)."
        },
        {
          "h": "Étape 2",
          "p": "Tester les accès anonymes ou les informations publiques."
        },
        {
          "h": "Étape 3",
          "p": "Lister les partages, utilisateurs et bannières."
        },
        {
          "h": "Étape 4",
          "p": "Corréler les informations pour construire une carte des accès."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les accès autorisés et les données sensibles exposées."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Énumérer les utilisateurs, partages et services d'un lab",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nenum4linux -a 192.168.56.10\nsmbclient -L //192.168.56.10 -N\nftp 192.168.56.10\ndig axfr @192.168.56.10 lab.local\nsmtp-user-enum -M VRFY -U users.txt -t 192.168.56.10\nldapsearch -x -H ldap://192.168.56.10 -b dc=lab,dc=local"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Énumérer les utilisateurs, partages et services d'un lab",
      "x": "Exemples d'informations recherchées :\n- Partages SMB accessibles en lecture.\n- Comptes FTP anonymes.\n- Utilisateurs valides via SMTP VRFY.\n- Enregistrements DNS internes.\n- Groupes et permissions LDAP."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 10.4 : Chaînage d'énumération pour un accès plus profond"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Énumération », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — FTP anonyme",
      "x": "<strong>Objectif :</strong> Un serveur FTP de lab accepte les connexions anonymes. Trouver le fichier contenant le flag.<br><strong>Contexte :</strong> Chaînage d'énumération pour un accès plus profond (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c4_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter en anonymous."
        },
        {
          "h": "Étape 2",
          "p": "Lister le répertoire racine."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le fichier README."
        },
        {
          "h": "Étape 4",
          "p": "Le télécharger."
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
      "title": "Write-up détaillé — CTF 1/5 (FTP anonyme)",
      "x": "CTF 1/5 — FTP anonyme\nChapitre : 10.4 — Chaînage d'énumération pour un accès plus profond\nFlag : flag{m10_c4_ctf1}\n\nIndices :\n  1. Tester l'utilisateur anonymous.\n  2. Lister les répertoires.\n  3. Télécharger le fichier lisible.\n\nProcédure pas à pas :\n  1. Se connecter en anonymous.\n  2. Lister le répertoire racine.\n  3. Identifier le fichier README.\n  4. Le télécharger.\n  5. Lire le flag.\n\nRemédiation : Désactiver l'accès anonyme et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Partage SMB",
      "x": "<strong>Objectif :</strong> Un partage SMB de lab est accessible sans authentification. Explorer et récupérer le flag.<br><strong>Contexte :</strong> Chaînage d'énumération pour un accès plus profond (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c4_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les partages avec smbclient."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le partage lisible."
        },
        {
          "h": "Étape 3",
          "p": "Se connecter au partage."
        },
        {
          "h": "Étape 4",
          "p": "Parcourir les fichiers."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag dans le fichier texte."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Partage SMB)",
      "x": "CTF 2/5 — Partage SMB\nChapitre : 10.4 — Chaînage d'énumération pour un accès plus profond\nFlag : flag{m10_c4_ctf2}\n\nIndices :\n  1. Lister les partages.\n  2. Tester un accès nul.\n  3. Chercher les fichiers de configuration.\n\nProcédure pas à pas :\n  1. Lister les partages avec smbclient.\n  2. Identifier le partage lisible.\n  3. Se connecter au partage.\n  4. Parcourir les fichiers.\n  5. Lire le flag dans le fichier texte.\n\nRemédiation : Restreindre les partages, désactiver les sessions nulles et auditer les ACL.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Utilisateurs SMTP",
      "x": "<strong>Objectif :</strong> Énumérer des utilisateurs valides sur un serveur SMTP de lab.<br><strong>Contexte :</strong> Chaînage d'énumération pour un accès plus profond (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c4_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Préparer une liste d'utilisateurs."
        },
        {
          "h": "Étape 2",
          "p": "Lancer smtp-user-enum."
        },
        {
          "h": "Étape 3",
          "p": "Relever les comptes valides."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le compte de test."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans la boîte de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Utilisateurs SMTP)",
      "x": "CTF 3/5 — Utilisateurs SMTP\nChapitre : 10.4 — Chaînage d'énumération pour un accès plus profond\nFlag : flag{m10_c4_ctf3}\n\nIndices :\n  1. Tester VRFY et EXPN.\n  2. Utiliser une liste de noms.\n  3. Observer les codes de réponse.\n\nProcédure pas à pas :\n  1. Préparer une liste d'utilisateurs.\n  2. Lancer smtp-user-enum.\n  3. Relever les comptes valides.\n  4. Identifier le compte de test.\n  5. Récupérer le flag dans la boîte de lab.\n\nRemédiation : Désactiver VRFY/EXPN et limiter les réponses du serveur.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — DNS interne",
      "x": "<strong>Objectif :</strong> Un serveur DNS de lab révèle des enregistrements internes. Les lister et trouver le flag.<br><strong>Contexte :</strong> Chaînage d'énumération pour un accès plus profond (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c4_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le serveur DNS."
        },
        {
          "h": "Étape 2",
          "p": "Tenter un transfert de zone."
        },
        {
          "h": "Étape 3",
          "p": "Lister les enregistrements."
        },
        {
          "h": "Étape 4",
          "p": "Repérer l'hôte associé au flag."
        },
        {
          "h": "Étape 5",
          "p": "Accéder à la ressource."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (DNS interne)",
      "x": "CTF 4/5 — DNS interne\nChapitre : 10.4 — Chaînage d'énumération pour un accès plus profond\nFlag : flag{m10_c4_ctf4}\n\nIndices :\n  1. Tester AXFR.\n  2. Interroger les enregistrements TXT.\n  3. Vérifier les zones internes.\n\nProcédure pas à pas :\n  1. Identifier le serveur DNS.\n  2. Tenter un transfert de zone.\n  3. Lister les enregistrements.\n  4. Repérer l'hôte associé au flag.\n  5. Accéder à la ressource.\n\nRemédiation : Restreindre les transferts de zone et séparer les zones internes/externes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — LDAP",
      "x": "<strong>Objectif :</strong> Un annuaire LDAP de lab expose des informations. Énumérer les utilisateurs et groupes.<br><strong>Contexte :</strong> Chaînage d'énumération pour un accès plus profond (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c4_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Interroger la base LDAP."
        },
        {
          "h": "Étape 2",
          "p": "Lister les objets utilisateurs."
        },
        {
          "h": "Étape 3",
          "p": "Lister les groupes."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le compte avec le flag."
        },
        {
          "h": "Étape 5",
          "p": "Lire l'attribut description."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (LDAP)",
      "x": "CTF 5/5 — LDAP\nChapitre : 10.4 — Chaînage d'énumération pour un accès plus profond\nFlag : flag{m10_c4_ctf5}\n\nIndices :\n  1. Tester une connexion anonyme.\n  2. Chercher les attributs publics.\n  3. Identifier le compte de service.\n\nProcédure pas à pas :\n  1. Interroger la base LDAP.\n  2. Lister les objets utilisateurs.\n  3. Lister les groupes.\n  4. Identifier le compte avec le flag.\n  5. Lire l'attribut description.\n\nRemédiation : Limiter les lectures anonymes et protéger les attributs sensibles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 10.5 : Cartographie des données d'énumération vers des chemins d'attaque"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Énumération",
      "x": "Mettre en pratique « Cartographie des données d'énumération vers des chemins d'attaque » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Énumération » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier les services d'énumération disponibles (SMB, FTP, SMTP, DNS, LDAP)."
        },
        {
          "h": "Étape 2",
          "p": "Tester les accès anonymes ou les informations publiques."
        },
        {
          "h": "Étape 3",
          "p": "Lister les partages, utilisateurs et bannières."
        },
        {
          "h": "Étape 4",
          "p": "Corréler les informations pour construire une carte des accès."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les accès autorisés et les données sensibles exposées."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Énumérer les utilisateurs, partages et services d'un lab",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nenum4linux -a 192.168.56.10\nsmbclient -L //192.168.56.10 -N\nftp 192.168.56.10\ndig axfr @192.168.56.10 lab.local\nsmtp-user-enum -M VRFY -U users.txt -t 192.168.56.10\nldapsearch -x -H ldap://192.168.56.10 -b dc=lab,dc=local"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Énumérer les utilisateurs, partages et services d'un lab",
      "x": "Exemples d'informations recherchées :\n- Partages SMB accessibles en lecture.\n- Comptes FTP anonymes.\n- Utilisateurs valides via SMTP VRFY.\n- Enregistrements DNS internes.\n- Groupes et permissions LDAP."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 10.5 : Cartographie des données d'énumération vers des chemins d'attaque"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Énumération », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — FTP anonyme",
      "x": "<strong>Objectif :</strong> Un serveur FTP de lab accepte les connexions anonymes. Trouver le fichier contenant le flag.<br><strong>Contexte :</strong> Cartographie des données d'énumération vers des chemins d'attaque (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c5_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter en anonymous."
        },
        {
          "h": "Étape 2",
          "p": "Lister le répertoire racine."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le fichier README."
        },
        {
          "h": "Étape 4",
          "p": "Le télécharger."
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
      "title": "Write-up détaillé — CTF 1/5 (FTP anonyme)",
      "x": "CTF 1/5 — FTP anonyme\nChapitre : 10.5 — Cartographie des données d'énumération vers des chemins d'attaque\nFlag : flag{m10_c5_ctf1}\n\nIndices :\n  1. Tester l'utilisateur anonymous.\n  2. Lister les répertoires.\n  3. Télécharger le fichier lisible.\n\nProcédure pas à pas :\n  1. Se connecter en anonymous.\n  2. Lister le répertoire racine.\n  3. Identifier le fichier README.\n  4. Le télécharger.\n  5. Lire le flag.\n\nRemédiation : Désactiver l'accès anonyme et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Partage SMB",
      "x": "<strong>Objectif :</strong> Un partage SMB de lab est accessible sans authentification. Explorer et récupérer le flag.<br><strong>Contexte :</strong> Cartographie des données d'énumération vers des chemins d'attaque (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c5_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les partages avec smbclient."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le partage lisible."
        },
        {
          "h": "Étape 3",
          "p": "Se connecter au partage."
        },
        {
          "h": "Étape 4",
          "p": "Parcourir les fichiers."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag dans le fichier texte."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Partage SMB)",
      "x": "CTF 2/5 — Partage SMB\nChapitre : 10.5 — Cartographie des données d'énumération vers des chemins d'attaque\nFlag : flag{m10_c5_ctf2}\n\nIndices :\n  1. Lister les partages.\n  2. Tester un accès nul.\n  3. Chercher les fichiers de configuration.\n\nProcédure pas à pas :\n  1. Lister les partages avec smbclient.\n  2. Identifier le partage lisible.\n  3. Se connecter au partage.\n  4. Parcourir les fichiers.\n  5. Lire le flag dans le fichier texte.\n\nRemédiation : Restreindre les partages, désactiver les sessions nulles et auditer les ACL.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Utilisateurs SMTP",
      "x": "<strong>Objectif :</strong> Énumérer des utilisateurs valides sur un serveur SMTP de lab.<br><strong>Contexte :</strong> Cartographie des données d'énumération vers des chemins d'attaque (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c5_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Préparer une liste d'utilisateurs."
        },
        {
          "h": "Étape 2",
          "p": "Lancer smtp-user-enum."
        },
        {
          "h": "Étape 3",
          "p": "Relever les comptes valides."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le compte de test."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans la boîte de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Utilisateurs SMTP)",
      "x": "CTF 3/5 — Utilisateurs SMTP\nChapitre : 10.5 — Cartographie des données d'énumération vers des chemins d'attaque\nFlag : flag{m10_c5_ctf3}\n\nIndices :\n  1. Tester VRFY et EXPN.\n  2. Utiliser une liste de noms.\n  3. Observer les codes de réponse.\n\nProcédure pas à pas :\n  1. Préparer une liste d'utilisateurs.\n  2. Lancer smtp-user-enum.\n  3. Relever les comptes valides.\n  4. Identifier le compte de test.\n  5. Récupérer le flag dans la boîte de lab.\n\nRemédiation : Désactiver VRFY/EXPN et limiter les réponses du serveur.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — DNS interne",
      "x": "<strong>Objectif :</strong> Un serveur DNS de lab révèle des enregistrements internes. Les lister et trouver le flag.<br><strong>Contexte :</strong> Cartographie des données d'énumération vers des chemins d'attaque (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c5_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le serveur DNS."
        },
        {
          "h": "Étape 2",
          "p": "Tenter un transfert de zone."
        },
        {
          "h": "Étape 3",
          "p": "Lister les enregistrements."
        },
        {
          "h": "Étape 4",
          "p": "Repérer l'hôte associé au flag."
        },
        {
          "h": "Étape 5",
          "p": "Accéder à la ressource."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (DNS interne)",
      "x": "CTF 4/5 — DNS interne\nChapitre : 10.5 — Cartographie des données d'énumération vers des chemins d'attaque\nFlag : flag{m10_c5_ctf4}\n\nIndices :\n  1. Tester AXFR.\n  2. Interroger les enregistrements TXT.\n  3. Vérifier les zones internes.\n\nProcédure pas à pas :\n  1. Identifier le serveur DNS.\n  2. Tenter un transfert de zone.\n  3. Lister les enregistrements.\n  4. Repérer l'hôte associé au flag.\n  5. Accéder à la ressource.\n\nRemédiation : Restreindre les transferts de zone et séparer les zones internes/externes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — LDAP",
      "x": "<strong>Objectif :</strong> Un annuaire LDAP de lab expose des informations. Énumérer les utilisateurs et groupes.<br><strong>Contexte :</strong> Cartographie des données d'énumération vers des chemins d'attaque (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c5_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Interroger la base LDAP."
        },
        {
          "h": "Étape 2",
          "p": "Lister les objets utilisateurs."
        },
        {
          "h": "Étape 3",
          "p": "Lister les groupes."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le compte avec le flag."
        },
        {
          "h": "Étape 5",
          "p": "Lire l'attribut description."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (LDAP)",
      "x": "CTF 5/5 — LDAP\nChapitre : 10.5 — Cartographie des données d'énumération vers des chemins d'attaque\nFlag : flag{m10_c5_ctf5}\n\nIndices :\n  1. Tester une connexion anonyme.\n  2. Chercher les attributs publics.\n  3. Identifier le compte de service.\n\nProcédure pas à pas :\n  1. Interroger la base LDAP.\n  2. Lister les objets utilisateurs.\n  3. Lister les groupes.\n  4. Identifier le compte avec le flag.\n  5. Lire l'attribut description.\n\nRemédiation : Limiter les lectures anonymes et protéger les attributs sensibles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 10.6 : Analyse d'énumération assistée par IA"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Énumération",
      "x": "Mettre en pratique « Analyse d'énumération assistée par IA » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Énumération » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier les services d'énumération disponibles (SMB, FTP, SMTP, DNS, LDAP)."
        },
        {
          "h": "Étape 2",
          "p": "Tester les accès anonymes ou les informations publiques."
        },
        {
          "h": "Étape 3",
          "p": "Lister les partages, utilisateurs et bannières."
        },
        {
          "h": "Étape 4",
          "p": "Corréler les informations pour construire une carte des accès."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les accès autorisés et les données sensibles exposées."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Énumérer les utilisateurs, partages et services d'un lab",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nenum4linux -a 192.168.56.10\nsmbclient -L //192.168.56.10 -N\nftp 192.168.56.10\ndig axfr @192.168.56.10 lab.local\nsmtp-user-enum -M VRFY -U users.txt -t 192.168.56.10\nldapsearch -x -H ldap://192.168.56.10 -b dc=lab,dc=local"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Énumérer les utilisateurs, partages et services d'un lab",
      "x": "Exemples d'informations recherchées :\n- Partages SMB accessibles en lecture.\n- Comptes FTP anonymes.\n- Utilisateurs valides via SMTP VRFY.\n- Enregistrements DNS internes.\n- Groupes et permissions LDAP."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 10.6 : Analyse d'énumération assistée par IA"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Énumération », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — FTP anonyme",
      "x": "<strong>Objectif :</strong> Un serveur FTP de lab accepte les connexions anonymes. Trouver le fichier contenant le flag.<br><strong>Contexte :</strong> Analyse d'énumération assistée par IA (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c6_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter en anonymous."
        },
        {
          "h": "Étape 2",
          "p": "Lister le répertoire racine."
        },
        {
          "h": "Étape 3",
          "p": "Identifier le fichier README."
        },
        {
          "h": "Étape 4",
          "p": "Le télécharger."
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
      "title": "Write-up détaillé — CTF 1/5 (FTP anonyme)",
      "x": "CTF 1/5 — FTP anonyme\nChapitre : 10.6 — Analyse d'énumération assistée par IA\nFlag : flag{m10_c6_ctf1}\n\nIndices :\n  1. Tester l'utilisateur anonymous.\n  2. Lister les répertoires.\n  3. Télécharger le fichier lisible.\n\nProcédure pas à pas :\n  1. Se connecter en anonymous.\n  2. Lister le répertoire racine.\n  3. Identifier le fichier README.\n  4. Le télécharger.\n  5. Lire le flag.\n\nRemédiation : Désactiver l'accès anonyme et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Partage SMB",
      "x": "<strong>Objectif :</strong> Un partage SMB de lab est accessible sans authentification. Explorer et récupérer le flag.<br><strong>Contexte :</strong> Analyse d'énumération assistée par IA (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c6_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les partages avec smbclient."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le partage lisible."
        },
        {
          "h": "Étape 3",
          "p": "Se connecter au partage."
        },
        {
          "h": "Étape 4",
          "p": "Parcourir les fichiers."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag dans le fichier texte."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 2/5 (Partage SMB)",
      "x": "CTF 2/5 — Partage SMB\nChapitre : 10.6 — Analyse d'énumération assistée par IA\nFlag : flag{m10_c6_ctf2}\n\nIndices :\n  1. Lister les partages.\n  2. Tester un accès nul.\n  3. Chercher les fichiers de configuration.\n\nProcédure pas à pas :\n  1. Lister les partages avec smbclient.\n  2. Identifier le partage lisible.\n  3. Se connecter au partage.\n  4. Parcourir les fichiers.\n  5. Lire le flag dans le fichier texte.\n\nRemédiation : Restreindre les partages, désactiver les sessions nulles et auditer les ACL.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Utilisateurs SMTP",
      "x": "<strong>Objectif :</strong> Énumérer des utilisateurs valides sur un serveur SMTP de lab.<br><strong>Contexte :</strong> Analyse d'énumération assistée par IA (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c6_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Préparer une liste d'utilisateurs."
        },
        {
          "h": "Étape 2",
          "p": "Lancer smtp-user-enum."
        },
        {
          "h": "Étape 3",
          "p": "Relever les comptes valides."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le compte de test."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans la boîte de lab."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Utilisateurs SMTP)",
      "x": "CTF 3/5 — Utilisateurs SMTP\nChapitre : 10.6 — Analyse d'énumération assistée par IA\nFlag : flag{m10_c6_ctf3}\n\nIndices :\n  1. Tester VRFY et EXPN.\n  2. Utiliser une liste de noms.\n  3. Observer les codes de réponse.\n\nProcédure pas à pas :\n  1. Préparer une liste d'utilisateurs.\n  2. Lancer smtp-user-enum.\n  3. Relever les comptes valides.\n  4. Identifier le compte de test.\n  5. Récupérer le flag dans la boîte de lab.\n\nRemédiation : Désactiver VRFY/EXPN et limiter les réponses du serveur.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — DNS interne",
      "x": "<strong>Objectif :</strong> Un serveur DNS de lab révèle des enregistrements internes. Les lister et trouver le flag.<br><strong>Contexte :</strong> Analyse d'énumération assistée par IA (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c6_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le serveur DNS."
        },
        {
          "h": "Étape 2",
          "p": "Tenter un transfert de zone."
        },
        {
          "h": "Étape 3",
          "p": "Lister les enregistrements."
        },
        {
          "h": "Étape 4",
          "p": "Repérer l'hôte associé au flag."
        },
        {
          "h": "Étape 5",
          "p": "Accéder à la ressource."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (DNS interne)",
      "x": "CTF 4/5 — DNS interne\nChapitre : 10.6 — Analyse d'énumération assistée par IA\nFlag : flag{m10_c6_ctf4}\n\nIndices :\n  1. Tester AXFR.\n  2. Interroger les enregistrements TXT.\n  3. Vérifier les zones internes.\n\nProcédure pas à pas :\n  1. Identifier le serveur DNS.\n  2. Tenter un transfert de zone.\n  3. Lister les enregistrements.\n  4. Repérer l'hôte associé au flag.\n  5. Accéder à la ressource.\n\nRemédiation : Restreindre les transferts de zone et séparer les zones internes/externes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — LDAP",
      "x": "<strong>Objectif :</strong> Un annuaire LDAP de lab expose des informations. Énumérer les utilisateurs et groupes.<br><strong>Contexte :</strong> Analyse d'énumération assistée par IA (Énumération).<br><strong>Flag attendu (lab) :</strong> flag{m10_c6_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Interroger la base LDAP."
        },
        {
          "h": "Étape 2",
          "p": "Lister les objets utilisateurs."
        },
        {
          "h": "Étape 3",
          "p": "Lister les groupes."
        },
        {
          "h": "Étape 4",
          "p": "Identifier le compte avec le flag."
        },
        {
          "h": "Étape 5",
          "p": "Lire l'attribut description."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (LDAP)",
      "x": "CTF 5/5 — LDAP\nChapitre : 10.6 — Analyse d'énumération assistée par IA\nFlag : flag{m10_c6_ctf5}\n\nIndices :\n  1. Tester une connexion anonyme.\n  2. Chercher les attributs publics.\n  3. Identifier le compte de service.\n\nProcédure pas à pas :\n  1. Interroger la base LDAP.\n  2. Lister les objets utilisateurs.\n  3. Lister les groupes.\n  4. Identifier le compte avec le flag.\n  5. Lire l'attribut description.\n\nRemédiation : Limiter les lectures anonymes et protéger les attributs sensibles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q10"
};
