export default {
  "id": "m19",
  "num": 19,
  "title": "Piratage d'applications web (Partie 2)",
  "short": "Web II",
  "icon": "🧩",
  "xp": 330,
  "duration": 80,
  "summary": "Cours en français sur « Piratage d'applications web (Partie 2) » avec 6 chapitres, 10 exercices par chapitre et un défi CTF.",
  "objectives": [
    "Comprendre et appliquer : Injection SQL et concepts d'attaques de bases de données.",
    "Comprendre et appliquer : Variantes de Cross-Site Scripting (XSS).",
    "Comprendre et appliquer : Failles CSRF et falsification de requêtes.",
    "Comprendre et appliquer : Faiblesses d'inclusion de fichiers et d'upload.",
    "Comprendre et appliquer : Vulnérabilités de logique métier.",
    "Comprendre et appliquer : Fondamentaux de la sécurité des API."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 19 — Piratage d'applications web (Partie 2)</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 80 min · XP : 330. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "19.1 Injection SQL et concepts d'attaques de bases de données"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>injection sql et concepts d'attaques de bases de données</strong> dans le cadre du module « Piratage d'applications web (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Injection SQL et concepts d'attaques de bases de données », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Injection SQL et concepts d'attaques de bases de données.",
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
      "x": "19.2 Variantes de Cross-Site Scripting (XSS)"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>variantes de cross-site scripting (xss)</strong> dans le cadre du module « Piratage d'applications web (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Variantes de Cross-Site Scripting (XSS) », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Variantes de Cross-Site Scripting (XSS).",
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
      "x": "19.3 Failles CSRF et falsification de requêtes"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>failles csrf et falsification de requêtes</strong> dans le cadre du module « Piratage d'applications web (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Failles CSRF et falsification de requêtes », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Failles CSRF et falsification de requêtes.",
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
      "x": "19.4 Faiblesses d'inclusion de fichiers et d'upload"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>faiblesses d'inclusion de fichiers et d'upload</strong> dans le cadre du module « Piratage d'applications web (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Faiblesses d'inclusion de fichiers et d'upload », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Faiblesses d'inclusion de fichiers et d'upload.",
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
      "x": "19.5 Vulnérabilités de logique métier"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>vulnérabilités de logique métier</strong> dans le cadre du module « Piratage d'applications web (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Vulnérabilités de logique métier », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Vulnérabilités de logique métier.",
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
      "x": "19.6 Fondamentaux de la sécurité des API"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>fondamentaux de la sécurité des api</strong> dans le cadre du module « Piratage d'applications web (Partie 2) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Fondamentaux de la sécurité des API », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Fondamentaux de la sécurité des API.",
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
      "x": "Exercices — Chapitre 19.1 : Injection SQL et concepts d'attaques de bases de données"
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
          "Exercice 1 (concept) — Injection SQL et concepts d'attaques de bases de données",
          "facile",
          "(concept) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Injection SQL et concepts d'attaques de bases de données",
          "facile",
          "(analyse) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Injection SQL et concepts d'attaques de bases de données",
          "facile",
          "(application) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Injection SQL et concepts d'attaques de bases de données",
          "intermédiaire",
          "(défense) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Injection SQL et concepts d'attaques de bases de données",
          "intermédiaire",
          "(scénario) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Injection SQL et concepts d'attaques de bases de données",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Injection SQL et concepts d'attaques de bases de données",
          "intermédiaire",
          "(méthode) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Injection SQL et concepts d'attaques de bases de données",
          "avancé",
          "(risque) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Injection SQL et concepts d'attaques de bases de données",
          "avancé",
          "(contrôle) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Injection SQL et concepts d'attaques de bases de données",
          "avancé",
          "(synthèse) Dans le contexte de « Injection SQL et concepts d'attaques de bases de données » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Injection SQL et concepts d'attaques de bases de données », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 19.2 : Variantes de Cross-Site Scripting (XSS)"
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
          "Exercice 1 (concept) — Variantes de Cross-Site Scripting (XSS)",
          "facile",
          "(concept) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Variantes de Cross-Site Scripting (XSS)",
          "facile",
          "(analyse) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Variantes de Cross-Site Scripting (XSS)",
          "facile",
          "(application) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Variantes de Cross-Site Scripting (XSS)",
          "intermédiaire",
          "(défense) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Variantes de Cross-Site Scripting (XSS)",
          "intermédiaire",
          "(scénario) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Variantes de Cross-Site Scripting (XSS)",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Variantes de Cross-Site Scripting (XSS)",
          "intermédiaire",
          "(méthode) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Variantes de Cross-Site Scripting (XSS)",
          "avancé",
          "(risque) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Variantes de Cross-Site Scripting (XSS)",
          "avancé",
          "(contrôle) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Variantes de Cross-Site Scripting (XSS)",
          "avancé",
          "(synthèse) Dans le contexte de « Variantes de Cross-Site Scripting (XSS) » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Variantes de Cross-Site Scripting (XSS) », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 19.3 : Failles CSRF et falsification de requêtes"
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
          "Exercice 1 (concept) — Failles CSRF et falsification de requêtes",
          "facile",
          "(concept) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Failles CSRF et falsification de requêtes",
          "facile",
          "(analyse) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Failles CSRF et falsification de requêtes",
          "facile",
          "(application) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Failles CSRF et falsification de requêtes",
          "intermédiaire",
          "(défense) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Failles CSRF et falsification de requêtes",
          "intermédiaire",
          "(scénario) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Failles CSRF et falsification de requêtes",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Failles CSRF et falsification de requêtes",
          "intermédiaire",
          "(méthode) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Failles CSRF et falsification de requêtes",
          "avancé",
          "(risque) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Failles CSRF et falsification de requêtes",
          "avancé",
          "(contrôle) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Failles CSRF et falsification de requêtes",
          "avancé",
          "(synthèse) Dans le contexte de « Failles CSRF et falsification de requêtes » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles CSRF et falsification de requêtes », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 19.4 : Faiblesses d'inclusion de fichiers et d'upload"
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
          "Exercice 1 (concept) — Faiblesses d'inclusion de fichiers et d'upload",
          "facile",
          "(concept) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Faiblesses d'inclusion de fichiers et d'upload",
          "facile",
          "(analyse) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Faiblesses d'inclusion de fichiers et d'upload",
          "facile",
          "(application) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Faiblesses d'inclusion de fichiers et d'upload",
          "intermédiaire",
          "(défense) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Faiblesses d'inclusion de fichiers et d'upload",
          "intermédiaire",
          "(scénario) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Faiblesses d'inclusion de fichiers et d'upload",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Faiblesses d'inclusion de fichiers et d'upload",
          "intermédiaire",
          "(méthode) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Faiblesses d'inclusion de fichiers et d'upload",
          "avancé",
          "(risque) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Faiblesses d'inclusion de fichiers et d'upload",
          "avancé",
          "(contrôle) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Faiblesses d'inclusion de fichiers et d'upload",
          "avancé",
          "(synthèse) Dans le contexte de « Faiblesses d'inclusion de fichiers et d'upload » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faiblesses d'inclusion de fichiers et d'upload », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 19.5 : Vulnérabilités de logique métier"
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
          "Exercice 1 (concept) — Vulnérabilités de logique métier",
          "facile",
          "(concept) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Vulnérabilités de logique métier",
          "facile",
          "(analyse) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Vulnérabilités de logique métier",
          "facile",
          "(application) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Vulnérabilités de logique métier",
          "intermédiaire",
          "(défense) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Vulnérabilités de logique métier",
          "intermédiaire",
          "(scénario) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Vulnérabilités de logique métier",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Vulnérabilités de logique métier",
          "intermédiaire",
          "(méthode) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Vulnérabilités de logique métier",
          "avancé",
          "(risque) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Vulnérabilités de logique métier",
          "avancé",
          "(contrôle) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Vulnérabilités de logique métier",
          "avancé",
          "(synthèse) Dans le contexte de « Vulnérabilités de logique métier » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Vulnérabilités de logique métier », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 19.6 : Fondamentaux de la sécurité des API"
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
          "Exercice 1 (concept) — Fondamentaux de la sécurité des API",
          "facile",
          "(concept) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Fondamentaux de la sécurité des API",
          "facile",
          "(analyse) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Fondamentaux de la sécurité des API",
          "facile",
          "(application) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Fondamentaux de la sécurité des API",
          "intermédiaire",
          "(défense) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Fondamentaux de la sécurité des API",
          "intermédiaire",
          "(scénario) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Fondamentaux de la sécurité des API",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Fondamentaux de la sécurité des API",
          "intermédiaire",
          "(méthode) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Fondamentaux de la sécurité des API",
          "avancé",
          "(risque) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Fondamentaux de la sécurité des API",
          "avancé",
          "(contrôle) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Fondamentaux de la sécurité des API",
          "avancé",
          "(synthèse) Dans le contexte de « Fondamentaux de la sécurité des API » (module 19 : Piratage d'applications web (Partie 2)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux de la sécurité des API », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "CTF — Module 19"
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Piratage d'applications web (Partie 2) » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
  "quiz": "q19"
};
