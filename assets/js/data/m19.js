export default {
  "id": "m19",
  "num": 19,
  "title": "Piratage d'applications web (Partie 2)",
  "short": "Web II",
  "icon": "🧩",
  "xp": 330,
  "duration": 80,
  "summary": "Cours en français enrichi sur « Piratage d'applications web (Partie 2) » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
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
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 19.1 : Injection SQL et concepts d'attaques de bases de données"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Web",
      "x": "Mettre en pratique « Injection SQL et concepts d'attaques de bases de données » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Web » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Démarrer une application de lab (DVWA, Juice Shop, WebGoat) sur 127.0.0.1."
        },
        {
          "h": "Étape 2",
          "p": "Cartographier les endpoints, paramètres et mécanismes d'authentification."
        },
        {
          "h": "Étape 3",
          "p": "Tester les entrées avec des payloads de lab (SQLi, XSS, IDOR)."
        },
        {
          "h": "Étape 4",
          "p": "Analyser les réponses et valider l'impact de manière contrôlée."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les preuves et proposer les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Tester une application web vulnérable de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\ncurl -s http://127.0.0.1:8080/ | head -40\ncurl -s 'http://127.0.0.1:8080/vulnerabilities/sqli/?id=1%27&Submit=Submit'\ncurl -s 'http://127.0.0.1:8080/?q=<script>alert(1)</script>'\ncurl -s -b cookies.txt http://127.0.0.1:8080/api/user/1\nffuf -u http://127.0.0.1:8080/FUZZ -w wordlist.txt"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Tester une application web vulnérable de laboratoire",
      "x": "Payloads de lab (DVWA/Juice Shop) :\nSQLi : ' OR '1'='1' --\nXSS : <script>alert(document.domain)</script>\nIDOR : /api/user/2 au lieu de /api/user/1\nUpload : fichier.php.jpg avec contenu de test\nCSRF : formulaire auto-soumis sur un compte de test"
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 19.1 : Injection SQL et concepts d'attaques de bases de données"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Web », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Injection SQL",
      "x": "<strong>Objectif :</strong> Exploiter une injection SQL de lab pour récupérer le flag.<br><strong>Contexte :</strong> Injection SQL et concepts d'attaques de bases de données (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c1_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre vulnérable."
        },
        {
          "h": "Étape 2",
          "p": "Tester une injection simple."
        },
        {
          "h": "Étape 3",
          "p": "Déterminer le nombre de colonnes."
        },
        {
          "h": "Étape 4",
          "p": "Extraire la table flags."
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
      "title": "Write-up détaillé — CTF 1/5 (Injection SQL)",
      "x": "CTF 1/5 — Injection SQL\nChapitre : 19.1 — Injection SQL et concepts d'attaques de bases de données\nFlag : flag{m19_c1_ctf1}\n\nIndices :\n  1. Tester le paramètre id.\n  2. Utiliser une charge UNION.\n  3. Lire la table flags.\n\nProcédure pas à pas :\n  1. Identifier le paramètre vulnérable.\n  2. Tester une injection simple.\n  3. Déterminer le nombre de colonnes.\n  4. Extraire la table flags.\n  5. Lire le flag.\n\nRemédiation : Utiliser des requêtes paramétrées et valider les entrées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — XSS réfléchi",
      "x": "<strong>Objectif :</strong> Exploiter un XSS réfléchi de lab et prouver l'exécution.<br><strong>Contexte :</strong> Injection SQL et concepts d'attaques de bases de données (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c1_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre reflété."
        },
        {
          "h": "Étape 2",
          "p": "Injecter un payload de test."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier l'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Documenter la preuve."
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
      "title": "Write-up détaillé — CTF 2/5 (XSS réfléchi)",
      "x": "CTF 2/5 — XSS réfléchi\nChapitre : 19.1 — Injection SQL et concepts d'attaques de bases de données\nFlag : flag{m19_c1_ctf2}\n\nIndices :\n  1. Tester le paramètre de recherche.\n  2. Injecter une balise script.\n  3. Observer l'exécution.\n\nProcédure pas à pas :\n  1. Identifier le paramètre reflété.\n  2. Injecter un payload de test.\n  3. Vérifier l'exécution.\n  4. Documenter la preuve.\n  5. Récupérer le flag.\n\nRemédiation : Encoder les sorties et appliquer une CSP.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — IDOR",
      "x": "<strong>Objectif :</strong> Accéder à la ressource d'un autre utilisateur de lab via un identifiant.<br><strong>Contexte :</strong> Injection SQL et concepts d'attaques de bases de données (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c1_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter avec le compte de test."
        },
        {
          "h": "Étape 2",
          "p": "Identifier l'endpoint."
        },
        {
          "h": "Étape 3",
          "p": "Modifier l'ID."
        },
        {
          "h": "Étape 4",
          "p": "Observer l'accès."
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
      "title": "Write-up détaillé — CTF 3/5 (IDOR)",
      "x": "CTF 3/5 — IDOR\nChapitre : 19.1 — Injection SQL et concepts d'attaques de bases de données\nFlag : flag{m19_c1_ctf3}\n\nIndices :\n  1. Changer l'identifiant.\n  2. Comparer les réponses.\n  3. Vérifier les autorisations.\n\nProcédure pas à pas :\n  1. Se connecter avec le compte de test.\n  2. Identifier l'endpoint.\n  3. Modifier l'ID.\n  4. Observer l'accès.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier l'autorisation côté serveur pour chaque objet.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Upload de fichier",
      "x": "<strong>Objectif :</strong> Contourner la validation d'upload d'un lab et obtenir l'exécution.<br><strong>Contexte :</strong> Injection SQL et concepts d'attaques de bases de données (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c1_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser le formulaire."
        },
        {
          "h": "Étape 2",
          "p": "Tester une extension autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Contourner la validation."
        },
        {
          "h": "Étape 4",
          "p": "Accéder au fichier."
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
      "title": "Write-up détaillé — CTF 4/5 (Upload de fichier)",
      "x": "CTF 4/5 — Upload de fichier\nChapitre : 19.1 — Injection SQL et concepts d'attaques de bases de données\nFlag : flag{m19_c1_ctf4}\n\nIndices :\n  1. Tester les extensions.\n  2. Vérifier le type MIME.\n  3. Chercher un dossier accessible.\n\nProcédure pas à pas :\n  1. Analyser le formulaire.\n  2. Tester une extension autorisée.\n  3. Contourner la validation.\n  4. Accéder au fichier.\n  5. Récupérer le flag.\n\nRemédiation : Valider le type réel, renommer et stocker hors webroot.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — API non autorisée",
      "x": "<strong>Objectif :</strong> Une API de lab ne vérifie pas le rôle. Accéder à une fonction admin.<br><strong>Contexte :</strong> Injection SQL et concepts d'attaques de bases de données (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c1_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Obtenir un jeton utilisateur."
        },
        {
          "h": "Étape 2",
          "p": "Décoder le JWT."
        },
        {
          "h": "Étape 3",
          "p": "Modifier le rôle de test."
        },
        {
          "h": "Étape 4",
          "p": "Appeler l'endpoint admin."
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
      "title": "Write-up détaillé — CTF 5/5 (API non autorisée)",
      "x": "CTF 5/5 — API non autorisée\nChapitre : 19.1 — Injection SQL et concepts d'attaques de bases de données\nFlag : flag{m19_c1_ctf5}\n\nIndices :\n  1. Analyser le JWT.\n  2. Tester les rôles.\n  3. Comparer les réponses.\n\nProcédure pas à pas :\n  1. Obtenir un jeton utilisateur.\n  2. Décoder le JWT.\n  3. Modifier le rôle de test.\n  4. Appeler l'endpoint admin.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier les rôles côté serveur et signer les jetons correctement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 19.2 : Variantes de Cross-Site Scripting (XSS)"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Web",
      "x": "Mettre en pratique « Variantes de Cross-Site Scripting (XSS) » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Web » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Démarrer une application de lab (DVWA, Juice Shop, WebGoat) sur 127.0.0.1."
        },
        {
          "h": "Étape 2",
          "p": "Cartographier les endpoints, paramètres et mécanismes d'authentification."
        },
        {
          "h": "Étape 3",
          "p": "Tester les entrées avec des payloads de lab (SQLi, XSS, IDOR)."
        },
        {
          "h": "Étape 4",
          "p": "Analyser les réponses et valider l'impact de manière contrôlée."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les preuves et proposer les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Tester une application web vulnérable de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\ncurl -s http://127.0.0.1:8080/ | head -40\ncurl -s 'http://127.0.0.1:8080/vulnerabilities/sqli/?id=1%27&Submit=Submit'\ncurl -s 'http://127.0.0.1:8080/?q=<script>alert(1)</script>'\ncurl -s -b cookies.txt http://127.0.0.1:8080/api/user/1\nffuf -u http://127.0.0.1:8080/FUZZ -w wordlist.txt"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Tester une application web vulnérable de laboratoire",
      "x": "Payloads de lab (DVWA/Juice Shop) :\nSQLi : ' OR '1'='1' --\nXSS : <script>alert(document.domain)</script>\nIDOR : /api/user/2 au lieu de /api/user/1\nUpload : fichier.php.jpg avec contenu de test\nCSRF : formulaire auto-soumis sur un compte de test"
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 19.2 : Variantes de Cross-Site Scripting (XSS)"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Web », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Injection SQL",
      "x": "<strong>Objectif :</strong> Exploiter une injection SQL de lab pour récupérer le flag.<br><strong>Contexte :</strong> Variantes de Cross-Site Scripting (XSS) (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c2_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre vulnérable."
        },
        {
          "h": "Étape 2",
          "p": "Tester une injection simple."
        },
        {
          "h": "Étape 3",
          "p": "Déterminer le nombre de colonnes."
        },
        {
          "h": "Étape 4",
          "p": "Extraire la table flags."
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
      "title": "Write-up détaillé — CTF 1/5 (Injection SQL)",
      "x": "CTF 1/5 — Injection SQL\nChapitre : 19.2 — Variantes de Cross-Site Scripting (XSS)\nFlag : flag{m19_c2_ctf1}\n\nIndices :\n  1. Tester le paramètre id.\n  2. Utiliser une charge UNION.\n  3. Lire la table flags.\n\nProcédure pas à pas :\n  1. Identifier le paramètre vulnérable.\n  2. Tester une injection simple.\n  3. Déterminer le nombre de colonnes.\n  4. Extraire la table flags.\n  5. Lire le flag.\n\nRemédiation : Utiliser des requêtes paramétrées et valider les entrées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — XSS réfléchi",
      "x": "<strong>Objectif :</strong> Exploiter un XSS réfléchi de lab et prouver l'exécution.<br><strong>Contexte :</strong> Variantes de Cross-Site Scripting (XSS) (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c2_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre reflété."
        },
        {
          "h": "Étape 2",
          "p": "Injecter un payload de test."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier l'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Documenter la preuve."
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
      "title": "Write-up détaillé — CTF 2/5 (XSS réfléchi)",
      "x": "CTF 2/5 — XSS réfléchi\nChapitre : 19.2 — Variantes de Cross-Site Scripting (XSS)\nFlag : flag{m19_c2_ctf2}\n\nIndices :\n  1. Tester le paramètre de recherche.\n  2. Injecter une balise script.\n  3. Observer l'exécution.\n\nProcédure pas à pas :\n  1. Identifier le paramètre reflété.\n  2. Injecter un payload de test.\n  3. Vérifier l'exécution.\n  4. Documenter la preuve.\n  5. Récupérer le flag.\n\nRemédiation : Encoder les sorties et appliquer une CSP.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — IDOR",
      "x": "<strong>Objectif :</strong> Accéder à la ressource d'un autre utilisateur de lab via un identifiant.<br><strong>Contexte :</strong> Variantes de Cross-Site Scripting (XSS) (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c2_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter avec le compte de test."
        },
        {
          "h": "Étape 2",
          "p": "Identifier l'endpoint."
        },
        {
          "h": "Étape 3",
          "p": "Modifier l'ID."
        },
        {
          "h": "Étape 4",
          "p": "Observer l'accès."
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
      "title": "Write-up détaillé — CTF 3/5 (IDOR)",
      "x": "CTF 3/5 — IDOR\nChapitre : 19.2 — Variantes de Cross-Site Scripting (XSS)\nFlag : flag{m19_c2_ctf3}\n\nIndices :\n  1. Changer l'identifiant.\n  2. Comparer les réponses.\n  3. Vérifier les autorisations.\n\nProcédure pas à pas :\n  1. Se connecter avec le compte de test.\n  2. Identifier l'endpoint.\n  3. Modifier l'ID.\n  4. Observer l'accès.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier l'autorisation côté serveur pour chaque objet.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Upload de fichier",
      "x": "<strong>Objectif :</strong> Contourner la validation d'upload d'un lab et obtenir l'exécution.<br><strong>Contexte :</strong> Variantes de Cross-Site Scripting (XSS) (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c2_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser le formulaire."
        },
        {
          "h": "Étape 2",
          "p": "Tester une extension autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Contourner la validation."
        },
        {
          "h": "Étape 4",
          "p": "Accéder au fichier."
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
      "title": "Write-up détaillé — CTF 4/5 (Upload de fichier)",
      "x": "CTF 4/5 — Upload de fichier\nChapitre : 19.2 — Variantes de Cross-Site Scripting (XSS)\nFlag : flag{m19_c2_ctf4}\n\nIndices :\n  1. Tester les extensions.\n  2. Vérifier le type MIME.\n  3. Chercher un dossier accessible.\n\nProcédure pas à pas :\n  1. Analyser le formulaire.\n  2. Tester une extension autorisée.\n  3. Contourner la validation.\n  4. Accéder au fichier.\n  5. Récupérer le flag.\n\nRemédiation : Valider le type réel, renommer et stocker hors webroot.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — API non autorisée",
      "x": "<strong>Objectif :</strong> Une API de lab ne vérifie pas le rôle. Accéder à une fonction admin.<br><strong>Contexte :</strong> Variantes de Cross-Site Scripting (XSS) (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c2_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Obtenir un jeton utilisateur."
        },
        {
          "h": "Étape 2",
          "p": "Décoder le JWT."
        },
        {
          "h": "Étape 3",
          "p": "Modifier le rôle de test."
        },
        {
          "h": "Étape 4",
          "p": "Appeler l'endpoint admin."
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
      "title": "Write-up détaillé — CTF 5/5 (API non autorisée)",
      "x": "CTF 5/5 — API non autorisée\nChapitre : 19.2 — Variantes de Cross-Site Scripting (XSS)\nFlag : flag{m19_c2_ctf5}\n\nIndices :\n  1. Analyser le JWT.\n  2. Tester les rôles.\n  3. Comparer les réponses.\n\nProcédure pas à pas :\n  1. Obtenir un jeton utilisateur.\n  2. Décoder le JWT.\n  3. Modifier le rôle de test.\n  4. Appeler l'endpoint admin.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier les rôles côté serveur et signer les jetons correctement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 19.3 : Failles CSRF et falsification de requêtes"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Web",
      "x": "Mettre en pratique « Failles CSRF et falsification de requêtes » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Web » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Démarrer une application de lab (DVWA, Juice Shop, WebGoat) sur 127.0.0.1."
        },
        {
          "h": "Étape 2",
          "p": "Cartographier les endpoints, paramètres et mécanismes d'authentification."
        },
        {
          "h": "Étape 3",
          "p": "Tester les entrées avec des payloads de lab (SQLi, XSS, IDOR)."
        },
        {
          "h": "Étape 4",
          "p": "Analyser les réponses et valider l'impact de manière contrôlée."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les preuves et proposer les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Tester une application web vulnérable de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\ncurl -s http://127.0.0.1:8080/ | head -40\ncurl -s 'http://127.0.0.1:8080/vulnerabilities/sqli/?id=1%27&Submit=Submit'\ncurl -s 'http://127.0.0.1:8080/?q=<script>alert(1)</script>'\ncurl -s -b cookies.txt http://127.0.0.1:8080/api/user/1\nffuf -u http://127.0.0.1:8080/FUZZ -w wordlist.txt"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Tester une application web vulnérable de laboratoire",
      "x": "Payloads de lab (DVWA/Juice Shop) :\nSQLi : ' OR '1'='1' --\nXSS : <script>alert(document.domain)</script>\nIDOR : /api/user/2 au lieu de /api/user/1\nUpload : fichier.php.jpg avec contenu de test\nCSRF : formulaire auto-soumis sur un compte de test"
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 19.3 : Failles CSRF et falsification de requêtes"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Web », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Injection SQL",
      "x": "<strong>Objectif :</strong> Exploiter une injection SQL de lab pour récupérer le flag.<br><strong>Contexte :</strong> Failles CSRF et falsification de requêtes (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c3_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre vulnérable."
        },
        {
          "h": "Étape 2",
          "p": "Tester une injection simple."
        },
        {
          "h": "Étape 3",
          "p": "Déterminer le nombre de colonnes."
        },
        {
          "h": "Étape 4",
          "p": "Extraire la table flags."
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
      "title": "Write-up détaillé — CTF 1/5 (Injection SQL)",
      "x": "CTF 1/5 — Injection SQL\nChapitre : 19.3 — Failles CSRF et falsification de requêtes\nFlag : flag{m19_c3_ctf1}\n\nIndices :\n  1. Tester le paramètre id.\n  2. Utiliser une charge UNION.\n  3. Lire la table flags.\n\nProcédure pas à pas :\n  1. Identifier le paramètre vulnérable.\n  2. Tester une injection simple.\n  3. Déterminer le nombre de colonnes.\n  4. Extraire la table flags.\n  5. Lire le flag.\n\nRemédiation : Utiliser des requêtes paramétrées et valider les entrées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — XSS réfléchi",
      "x": "<strong>Objectif :</strong> Exploiter un XSS réfléchi de lab et prouver l'exécution.<br><strong>Contexte :</strong> Failles CSRF et falsification de requêtes (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c3_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre reflété."
        },
        {
          "h": "Étape 2",
          "p": "Injecter un payload de test."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier l'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Documenter la preuve."
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
      "title": "Write-up détaillé — CTF 2/5 (XSS réfléchi)",
      "x": "CTF 2/5 — XSS réfléchi\nChapitre : 19.3 — Failles CSRF et falsification de requêtes\nFlag : flag{m19_c3_ctf2}\n\nIndices :\n  1. Tester le paramètre de recherche.\n  2. Injecter une balise script.\n  3. Observer l'exécution.\n\nProcédure pas à pas :\n  1. Identifier le paramètre reflété.\n  2. Injecter un payload de test.\n  3. Vérifier l'exécution.\n  4. Documenter la preuve.\n  5. Récupérer le flag.\n\nRemédiation : Encoder les sorties et appliquer une CSP.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — IDOR",
      "x": "<strong>Objectif :</strong> Accéder à la ressource d'un autre utilisateur de lab via un identifiant.<br><strong>Contexte :</strong> Failles CSRF et falsification de requêtes (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c3_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter avec le compte de test."
        },
        {
          "h": "Étape 2",
          "p": "Identifier l'endpoint."
        },
        {
          "h": "Étape 3",
          "p": "Modifier l'ID."
        },
        {
          "h": "Étape 4",
          "p": "Observer l'accès."
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
      "title": "Write-up détaillé — CTF 3/5 (IDOR)",
      "x": "CTF 3/5 — IDOR\nChapitre : 19.3 — Failles CSRF et falsification de requêtes\nFlag : flag{m19_c3_ctf3}\n\nIndices :\n  1. Changer l'identifiant.\n  2. Comparer les réponses.\n  3. Vérifier les autorisations.\n\nProcédure pas à pas :\n  1. Se connecter avec le compte de test.\n  2. Identifier l'endpoint.\n  3. Modifier l'ID.\n  4. Observer l'accès.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier l'autorisation côté serveur pour chaque objet.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Upload de fichier",
      "x": "<strong>Objectif :</strong> Contourner la validation d'upload d'un lab et obtenir l'exécution.<br><strong>Contexte :</strong> Failles CSRF et falsification de requêtes (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c3_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser le formulaire."
        },
        {
          "h": "Étape 2",
          "p": "Tester une extension autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Contourner la validation."
        },
        {
          "h": "Étape 4",
          "p": "Accéder au fichier."
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
      "title": "Write-up détaillé — CTF 4/5 (Upload de fichier)",
      "x": "CTF 4/5 — Upload de fichier\nChapitre : 19.3 — Failles CSRF et falsification de requêtes\nFlag : flag{m19_c3_ctf4}\n\nIndices :\n  1. Tester les extensions.\n  2. Vérifier le type MIME.\n  3. Chercher un dossier accessible.\n\nProcédure pas à pas :\n  1. Analyser le formulaire.\n  2. Tester une extension autorisée.\n  3. Contourner la validation.\n  4. Accéder au fichier.\n  5. Récupérer le flag.\n\nRemédiation : Valider le type réel, renommer et stocker hors webroot.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — API non autorisée",
      "x": "<strong>Objectif :</strong> Une API de lab ne vérifie pas le rôle. Accéder à une fonction admin.<br><strong>Contexte :</strong> Failles CSRF et falsification de requêtes (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c3_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Obtenir un jeton utilisateur."
        },
        {
          "h": "Étape 2",
          "p": "Décoder le JWT."
        },
        {
          "h": "Étape 3",
          "p": "Modifier le rôle de test."
        },
        {
          "h": "Étape 4",
          "p": "Appeler l'endpoint admin."
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
      "title": "Write-up détaillé — CTF 5/5 (API non autorisée)",
      "x": "CTF 5/5 — API non autorisée\nChapitre : 19.3 — Failles CSRF et falsification de requêtes\nFlag : flag{m19_c3_ctf5}\n\nIndices :\n  1. Analyser le JWT.\n  2. Tester les rôles.\n  3. Comparer les réponses.\n\nProcédure pas à pas :\n  1. Obtenir un jeton utilisateur.\n  2. Décoder le JWT.\n  3. Modifier le rôle de test.\n  4. Appeler l'endpoint admin.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier les rôles côté serveur et signer les jetons correctement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 19.4 : Faiblesses d'inclusion de fichiers et d'upload"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Web",
      "x": "Mettre en pratique « Faiblesses d'inclusion de fichiers et d'upload » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Web » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Démarrer une application de lab (DVWA, Juice Shop, WebGoat) sur 127.0.0.1."
        },
        {
          "h": "Étape 2",
          "p": "Cartographier les endpoints, paramètres et mécanismes d'authentification."
        },
        {
          "h": "Étape 3",
          "p": "Tester les entrées avec des payloads de lab (SQLi, XSS, IDOR)."
        },
        {
          "h": "Étape 4",
          "p": "Analyser les réponses et valider l'impact de manière contrôlée."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les preuves et proposer les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Tester une application web vulnérable de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\ncurl -s http://127.0.0.1:8080/ | head -40\ncurl -s 'http://127.0.0.1:8080/vulnerabilities/sqli/?id=1%27&Submit=Submit'\ncurl -s 'http://127.0.0.1:8080/?q=<script>alert(1)</script>'\ncurl -s -b cookies.txt http://127.0.0.1:8080/api/user/1\nffuf -u http://127.0.0.1:8080/FUZZ -w wordlist.txt"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Tester une application web vulnérable de laboratoire",
      "x": "Payloads de lab (DVWA/Juice Shop) :\nSQLi : ' OR '1'='1' --\nXSS : <script>alert(document.domain)</script>\nIDOR : /api/user/2 au lieu de /api/user/1\nUpload : fichier.php.jpg avec contenu de test\nCSRF : formulaire auto-soumis sur un compte de test"
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 19.4 : Faiblesses d'inclusion de fichiers et d'upload"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Web », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Injection SQL",
      "x": "<strong>Objectif :</strong> Exploiter une injection SQL de lab pour récupérer le flag.<br><strong>Contexte :</strong> Faiblesses d'inclusion de fichiers et d'upload (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c4_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre vulnérable."
        },
        {
          "h": "Étape 2",
          "p": "Tester une injection simple."
        },
        {
          "h": "Étape 3",
          "p": "Déterminer le nombre de colonnes."
        },
        {
          "h": "Étape 4",
          "p": "Extraire la table flags."
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
      "title": "Write-up détaillé — CTF 1/5 (Injection SQL)",
      "x": "CTF 1/5 — Injection SQL\nChapitre : 19.4 — Faiblesses d'inclusion de fichiers et d'upload\nFlag : flag{m19_c4_ctf1}\n\nIndices :\n  1. Tester le paramètre id.\n  2. Utiliser une charge UNION.\n  3. Lire la table flags.\n\nProcédure pas à pas :\n  1. Identifier le paramètre vulnérable.\n  2. Tester une injection simple.\n  3. Déterminer le nombre de colonnes.\n  4. Extraire la table flags.\n  5. Lire le flag.\n\nRemédiation : Utiliser des requêtes paramétrées et valider les entrées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — XSS réfléchi",
      "x": "<strong>Objectif :</strong> Exploiter un XSS réfléchi de lab et prouver l'exécution.<br><strong>Contexte :</strong> Faiblesses d'inclusion de fichiers et d'upload (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c4_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre reflété."
        },
        {
          "h": "Étape 2",
          "p": "Injecter un payload de test."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier l'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Documenter la preuve."
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
      "title": "Write-up détaillé — CTF 2/5 (XSS réfléchi)",
      "x": "CTF 2/5 — XSS réfléchi\nChapitre : 19.4 — Faiblesses d'inclusion de fichiers et d'upload\nFlag : flag{m19_c4_ctf2}\n\nIndices :\n  1. Tester le paramètre de recherche.\n  2. Injecter une balise script.\n  3. Observer l'exécution.\n\nProcédure pas à pas :\n  1. Identifier le paramètre reflété.\n  2. Injecter un payload de test.\n  3. Vérifier l'exécution.\n  4. Documenter la preuve.\n  5. Récupérer le flag.\n\nRemédiation : Encoder les sorties et appliquer une CSP.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — IDOR",
      "x": "<strong>Objectif :</strong> Accéder à la ressource d'un autre utilisateur de lab via un identifiant.<br><strong>Contexte :</strong> Faiblesses d'inclusion de fichiers et d'upload (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c4_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter avec le compte de test."
        },
        {
          "h": "Étape 2",
          "p": "Identifier l'endpoint."
        },
        {
          "h": "Étape 3",
          "p": "Modifier l'ID."
        },
        {
          "h": "Étape 4",
          "p": "Observer l'accès."
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
      "title": "Write-up détaillé — CTF 3/5 (IDOR)",
      "x": "CTF 3/5 — IDOR\nChapitre : 19.4 — Faiblesses d'inclusion de fichiers et d'upload\nFlag : flag{m19_c4_ctf3}\n\nIndices :\n  1. Changer l'identifiant.\n  2. Comparer les réponses.\n  3. Vérifier les autorisations.\n\nProcédure pas à pas :\n  1. Se connecter avec le compte de test.\n  2. Identifier l'endpoint.\n  3. Modifier l'ID.\n  4. Observer l'accès.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier l'autorisation côté serveur pour chaque objet.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Upload de fichier",
      "x": "<strong>Objectif :</strong> Contourner la validation d'upload d'un lab et obtenir l'exécution.<br><strong>Contexte :</strong> Faiblesses d'inclusion de fichiers et d'upload (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c4_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser le formulaire."
        },
        {
          "h": "Étape 2",
          "p": "Tester une extension autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Contourner la validation."
        },
        {
          "h": "Étape 4",
          "p": "Accéder au fichier."
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
      "title": "Write-up détaillé — CTF 4/5 (Upload de fichier)",
      "x": "CTF 4/5 — Upload de fichier\nChapitre : 19.4 — Faiblesses d'inclusion de fichiers et d'upload\nFlag : flag{m19_c4_ctf4}\n\nIndices :\n  1. Tester les extensions.\n  2. Vérifier le type MIME.\n  3. Chercher un dossier accessible.\n\nProcédure pas à pas :\n  1. Analyser le formulaire.\n  2. Tester une extension autorisée.\n  3. Contourner la validation.\n  4. Accéder au fichier.\n  5. Récupérer le flag.\n\nRemédiation : Valider le type réel, renommer et stocker hors webroot.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — API non autorisée",
      "x": "<strong>Objectif :</strong> Une API de lab ne vérifie pas le rôle. Accéder à une fonction admin.<br><strong>Contexte :</strong> Faiblesses d'inclusion de fichiers et d'upload (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c4_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Obtenir un jeton utilisateur."
        },
        {
          "h": "Étape 2",
          "p": "Décoder le JWT."
        },
        {
          "h": "Étape 3",
          "p": "Modifier le rôle de test."
        },
        {
          "h": "Étape 4",
          "p": "Appeler l'endpoint admin."
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
      "title": "Write-up détaillé — CTF 5/5 (API non autorisée)",
      "x": "CTF 5/5 — API non autorisée\nChapitre : 19.4 — Faiblesses d'inclusion de fichiers et d'upload\nFlag : flag{m19_c4_ctf5}\n\nIndices :\n  1. Analyser le JWT.\n  2. Tester les rôles.\n  3. Comparer les réponses.\n\nProcédure pas à pas :\n  1. Obtenir un jeton utilisateur.\n  2. Décoder le JWT.\n  3. Modifier le rôle de test.\n  4. Appeler l'endpoint admin.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier les rôles côté serveur et signer les jetons correctement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 19.5 : Vulnérabilités de logique métier"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Analyse de vulnérabilités",
      "x": "Mettre en pratique « Vulnérabilités de logique métier » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Analyse de vulnérabilités » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Collecter les versions et configurations des services de lab."
        },
        {
          "h": "Étape 2",
          "p": "Comparer aux bases CVE et aux avis éditeurs."
        },
        {
          "h": "Étape 3",
          "p": "Calculer un score CVSS et vérifier la validité du constat."
        },
        {
          "h": "Étape 4",
          "p": "Écarter les faux positifs par une vérification manuelle."
        },
        {
          "h": "Étape 5",
          "p": "Prioriser selon l'exposition, l'impact et l'exploitabilité."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Identifier, valider et prioriser une vulnérabilité de lab",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nnmap -sV --script vulners 192.168.56.10\nsearchsploit apache 2.4.49\ncurl -s http://192.168.56.10/ | head -40\necho 'Calcul CVSS: base metrics AV/AC/PR/UI/S/C/I/A'\ngrep -i 'version' lab/rapport_scan.txt"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Identifier, valider et prioriser une vulnérabilité de lab",
      "x": "Exemple de grille CVSS (base) :\nAV:N / AC:L / PR:N / UI:N / S:U / C:H / I:H / A:H => 9.8\nQuestion clé : la vulnérabilité est-elle réellement exploitable dans CE contexte ?\nVérifier : version exacte, configuration, exposition réseau, authentification requise."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 19.5 : Vulnérabilités de logique métier"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Analyse de vulnérabilités », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Correspondance CVE",
      "x": "<strong>Objectif :</strong> À partir d'une bannière de lab, identifier une CVE plausible et justifier.<br><strong>Contexte :</strong> Vulnérabilités de logique métier (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m19_c5_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Récupérer la bannière du service."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le produit et la version."
        },
        {
          "h": "Étape 3",
          "p": "Rechercher les CVE associées."
        },
        {
          "h": "Étape 4",
          "p": "Vérifier la configuration de lab."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le fichier de test."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Correspondance CVE)",
      "x": "CTF 1/5 — Correspondance CVE\nChapitre : 19.5 — Vulnérabilités de logique métier\nFlag : flag{m19_c5_ctf1}\n\nIndices :\n  1. Relever la version exacte.\n  2. Chercher dans les bases publiques.\n  3. Vérifier les conditions d'exploitation.\n\nProcédure pas à pas :\n  1. Récupérer la bannière du service.\n  2. Identifier le produit et la version.\n  3. Rechercher les CVE associées.\n  4. Vérifier la configuration de lab.\n  5. Récupérer le flag dans le fichier de test.\n\nRemédiation : Mettre à jour le produit et supprimer les informations de version inutiles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Score CVSS",
      "x": "<strong>Objectif :</strong> Calculer un score CVSS pour une vulnérabilité de lab et expliquer les métriques.<br><strong>Contexte :</strong> Vulnérabilités de logique métier (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m19_c5_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lire la description de la vulnérabilité."
        },
        {
          "h": "Étape 2",
          "p": "Déterminer AV, AC, PR, UI, S, C, I, A."
        },
        {
          "h": "Étape 3",
          "p": "Calculer le score."
        },
        {
          "h": "Étape 4",
          "p": "Comparer au score de la base."
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
      "title": "Write-up détaillé — CTF 2/5 (Score CVSS)",
      "x": "CTF 2/5 — Score CVSS\nChapitre : 19.5 — Vulnérabilités de logique métier\nFlag : flag{m19_c5_ctf2}\n\nIndices :\n  1. Identifier les métriques de base.\n  2. Évaluer l'impact confidentialité/intégrité/disponibilité.\n  3. Comparer avec le score officiel.\n\nProcédure pas à pas :\n  1. Lire la description de la vulnérabilité.\n  2. Déterminer AV, AC, PR, UI, S, C, I, A.\n  3. Calculer le score.\n  4. Comparer au score de la base.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Utiliser CVSS comme aide à la priorisation, pas comme seule décision.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Faux positif",
      "x": "<strong>Objectif :</strong> Un scanner signale une vulnérabilité qui n'est pas exploitable. Prouver le faux positif.<br><strong>Contexte :</strong> Vulnérabilités de logique métier (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m19_c5_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Reproduire le scan."
        },
        {
          "h": "Étape 2",
          "p": "Vérifier la version avec une commande manuelle."
        },
        {
          "h": "Étape 3",
          "p": "Tester la condition annoncée."
        },
        {
          "h": "Étape 4",
          "p": "Constater l'absence d'impact."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans la note de validation."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 3/5 (Faux positif)",
      "x": "CTF 3/5 — Faux positif\nChapitre : 19.5 — Vulnérabilités de logique métier\nFlag : flag{m19_c5_ctf3}\n\nIndices :\n  1. Vérifier la version réelle.\n  2. Tester la condition d'exploitation.\n  3. Lire la configuration.\n\nProcédure pas à pas :\n  1. Reproduire le scan.\n  2. Vérifier la version avec une commande manuelle.\n  3. Tester la condition annoncée.\n  4. Constater l'absence d'impact.\n  5. Récupérer le flag dans la note de validation.\n\nRemédiation : Mettre en place une validation manuelle avant remédiation.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Faisabilité d'exploitation",
      "x": "<strong>Objectif :</strong> Évaluer si une vulnérabilité de lab est réellement exploitable dans le contexte.<br><strong>Contexte :</strong> Vulnérabilités de logique métier (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m19_c5_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier la surface exposée."
        },
        {
          "h": "Étape 2",
          "p": "Vérifier les prérequis."
        },
        {
          "h": "Étape 3",
          "p": "Tester un PoC minimal en lab."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer l'impact."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le journal."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 4/5 (Faisabilité d'exploitation)",
      "x": "CTF 4/5 — Faisabilité d'exploitation\nChapitre : 19.5 — Vulnérabilités de logique métier\nFlag : flag{m19_c5_ctf4}\n\nIndices :\n  1. Vérifier l'accès réseau.\n  2. Vérifier l'authentification.\n  3. Vérifier les protections.\n\nProcédure pas à pas :\n  1. Identifier la surface exposée.\n  2. Vérifier les prérequis.\n  3. Tester un PoC minimal en lab.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le journal.\n\nRemédiation : Prioriser selon le contexte réel et les contrôles compensatoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation",
      "x": "<strong>Objectif :</strong> Classer trois vulnérabilités de lab par ordre de traitement.<br><strong>Contexte :</strong> Vulnérabilités de logique métier (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m19_c5_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les vulnérabilités."
        },
        {
          "h": "Étape 2",
          "p": "Attribuer un score CVSS."
        },
        {
          "h": "Étape 3",
          "p": "Ajouter le contexte d'exposition."
        },
        {
          "h": "Étape 4",
          "p": "Classer par risque."
        },
        {
          "h": "Étape 5",
          "p": "Récupérer le flag dans le plan de remédiation."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 5/5 (Priorisation)",
      "x": "CTF 5/5 — Priorisation\nChapitre : 19.5 — Vulnérabilités de logique métier\nFlag : flag{m19_c5_ctf5}\n\nIndices :\n  1. Évaluer la criticité.\n  2. Prendre en compte l'exposition.\n  3. Considérer l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les vulnérabilités.\n  2. Attribuer un score CVSS.\n  3. Ajouter le contexte d'exposition.\n  4. Classer par risque.\n  5. Récupérer le flag dans le plan de remédiation.\n\nRemédiation : Utiliser une approche risque : criticité technique + impact métier + exploitabilité.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 19.6 : Fondamentaux de la sécurité des API"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Web",
      "x": "Mettre en pratique « Fondamentaux de la sécurité des API » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Web » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Démarrer une application de lab (DVWA, Juice Shop, WebGoat) sur 127.0.0.1."
        },
        {
          "h": "Étape 2",
          "p": "Cartographier les endpoints, paramètres et mécanismes d'authentification."
        },
        {
          "h": "Étape 3",
          "p": "Tester les entrées avec des payloads de lab (SQLi, XSS, IDOR)."
        },
        {
          "h": "Étape 4",
          "p": "Analyser les réponses et valider l'impact de manière contrôlée."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les preuves et proposer les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Tester une application web vulnérable de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\ncurl -s http://127.0.0.1:8080/ | head -40\ncurl -s 'http://127.0.0.1:8080/vulnerabilities/sqli/?id=1%27&Submit=Submit'\ncurl -s 'http://127.0.0.1:8080/?q=<script>alert(1)</script>'\ncurl -s -b cookies.txt http://127.0.0.1:8080/api/user/1\nffuf -u http://127.0.0.1:8080/FUZZ -w wordlist.txt"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Tester une application web vulnérable de laboratoire",
      "x": "Payloads de lab (DVWA/Juice Shop) :\nSQLi : ' OR '1'='1' --\nXSS : <script>alert(document.domain)</script>\nIDOR : /api/user/2 au lieu de /api/user/1\nUpload : fichier.php.jpg avec contenu de test\nCSRF : formulaire auto-soumis sur un compte de test"
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 19.6 : Fondamentaux de la sécurité des API"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Web », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Injection SQL",
      "x": "<strong>Objectif :</strong> Exploiter une injection SQL de lab pour récupérer le flag.<br><strong>Contexte :</strong> Fondamentaux de la sécurité des API (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c6_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre vulnérable."
        },
        {
          "h": "Étape 2",
          "p": "Tester une injection simple."
        },
        {
          "h": "Étape 3",
          "p": "Déterminer le nombre de colonnes."
        },
        {
          "h": "Étape 4",
          "p": "Extraire la table flags."
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
      "title": "Write-up détaillé — CTF 1/5 (Injection SQL)",
      "x": "CTF 1/5 — Injection SQL\nChapitre : 19.6 — Fondamentaux de la sécurité des API\nFlag : flag{m19_c6_ctf1}\n\nIndices :\n  1. Tester le paramètre id.\n  2. Utiliser une charge UNION.\n  3. Lire la table flags.\n\nProcédure pas à pas :\n  1. Identifier le paramètre vulnérable.\n  2. Tester une injection simple.\n  3. Déterminer le nombre de colonnes.\n  4. Extraire la table flags.\n  5. Lire le flag.\n\nRemédiation : Utiliser des requêtes paramétrées et valider les entrées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — XSS réfléchi",
      "x": "<strong>Objectif :</strong> Exploiter un XSS réfléchi de lab et prouver l'exécution.<br><strong>Contexte :</strong> Fondamentaux de la sécurité des API (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c6_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre reflété."
        },
        {
          "h": "Étape 2",
          "p": "Injecter un payload de test."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier l'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Documenter la preuve."
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
      "title": "Write-up détaillé — CTF 2/5 (XSS réfléchi)",
      "x": "CTF 2/5 — XSS réfléchi\nChapitre : 19.6 — Fondamentaux de la sécurité des API\nFlag : flag{m19_c6_ctf2}\n\nIndices :\n  1. Tester le paramètre de recherche.\n  2. Injecter une balise script.\n  3. Observer l'exécution.\n\nProcédure pas à pas :\n  1. Identifier le paramètre reflété.\n  2. Injecter un payload de test.\n  3. Vérifier l'exécution.\n  4. Documenter la preuve.\n  5. Récupérer le flag.\n\nRemédiation : Encoder les sorties et appliquer une CSP.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — IDOR",
      "x": "<strong>Objectif :</strong> Accéder à la ressource d'un autre utilisateur de lab via un identifiant.<br><strong>Contexte :</strong> Fondamentaux de la sécurité des API (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c6_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Se connecter avec le compte de test."
        },
        {
          "h": "Étape 2",
          "p": "Identifier l'endpoint."
        },
        {
          "h": "Étape 3",
          "p": "Modifier l'ID."
        },
        {
          "h": "Étape 4",
          "p": "Observer l'accès."
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
      "title": "Write-up détaillé — CTF 3/5 (IDOR)",
      "x": "CTF 3/5 — IDOR\nChapitre : 19.6 — Fondamentaux de la sécurité des API\nFlag : flag{m19_c6_ctf3}\n\nIndices :\n  1. Changer l'identifiant.\n  2. Comparer les réponses.\n  3. Vérifier les autorisations.\n\nProcédure pas à pas :\n  1. Se connecter avec le compte de test.\n  2. Identifier l'endpoint.\n  3. Modifier l'ID.\n  4. Observer l'accès.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier l'autorisation côté serveur pour chaque objet.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Upload de fichier",
      "x": "<strong>Objectif :</strong> Contourner la validation d'upload d'un lab et obtenir l'exécution.<br><strong>Contexte :</strong> Fondamentaux de la sécurité des API (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c6_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Analyser le formulaire."
        },
        {
          "h": "Étape 2",
          "p": "Tester une extension autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Contourner la validation."
        },
        {
          "h": "Étape 4",
          "p": "Accéder au fichier."
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
      "title": "Write-up détaillé — CTF 4/5 (Upload de fichier)",
      "x": "CTF 4/5 — Upload de fichier\nChapitre : 19.6 — Fondamentaux de la sécurité des API\nFlag : flag{m19_c6_ctf4}\n\nIndices :\n  1. Tester les extensions.\n  2. Vérifier le type MIME.\n  3. Chercher un dossier accessible.\n\nProcédure pas à pas :\n  1. Analyser le formulaire.\n  2. Tester une extension autorisée.\n  3. Contourner la validation.\n  4. Accéder au fichier.\n  5. Récupérer le flag.\n\nRemédiation : Valider le type réel, renommer et stocker hors webroot.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — API non autorisée",
      "x": "<strong>Objectif :</strong> Une API de lab ne vérifie pas le rôle. Accéder à une fonction admin.<br><strong>Contexte :</strong> Fondamentaux de la sécurité des API (Web).<br><strong>Flag attendu (lab) :</strong> flag{m19_c6_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Obtenir un jeton utilisateur."
        },
        {
          "h": "Étape 2",
          "p": "Décoder le JWT."
        },
        {
          "h": "Étape 3",
          "p": "Modifier le rôle de test."
        },
        {
          "h": "Étape 4",
          "p": "Appeler l'endpoint admin."
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
      "title": "Write-up détaillé — CTF 5/5 (API non autorisée)",
      "x": "CTF 5/5 — API non autorisée\nChapitre : 19.6 — Fondamentaux de la sécurité des API\nFlag : flag{m19_c6_ctf5}\n\nIndices :\n  1. Analyser le JWT.\n  2. Tester les rôles.\n  3. Comparer les réponses.\n\nProcédure pas à pas :\n  1. Obtenir un jeton utilisateur.\n  2. Décoder le JWT.\n  3. Modifier le rôle de test.\n  4. Appeler l'endpoint admin.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier les rôles côté serveur et signer les jetons correctement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q19"
};
