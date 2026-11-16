export default {
  "id": "m18",
  "num": 18,
  "title": "Piratage d'applications web (Partie 1)",
  "short": "Web I",
  "icon": "🌍",
  "xp": 320,
  "duration": 75,
  "summary": "Cours en français enrichi sur « Piratage d'applications web (Partie 1) » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
  "objectives": [
    "Comprendre et appliquer : Architecture et technologies des applications web.",
    "Comprendre et appliquer : Comportement du protocole HTTP/HTTPS.",
    "Comprendre et appliquer : Failles d'authentification et de gestion de session.",
    "Comprendre et appliquer : Aperçu des vulnérabilités OWASP Top 10.",
    "Comprendre et appliquer : Problèmes de validation des entrées et de contrôle d'accès.",
    "Comprendre et appliquer : Flux de travail de tests web assistés par IA."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 18 — Piratage d'applications web (Partie 1)</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 75 min · XP : 320. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "18.1 Architecture et technologies des applications web"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>architecture et technologies des applications web</strong> dans le cadre du module « Piratage d'applications web (Partie 1) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Architecture et technologies des applications web », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Architecture et technologies des applications web.",
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
      "x": "18.2 Comportement du protocole HTTP/HTTPS"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>comportement du protocole http/https</strong> dans le cadre du module « Piratage d'applications web (Partie 1) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Comportement du protocole HTTP/HTTPS », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Comportement du protocole HTTP/HTTPS.",
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
      "x": "18.3 Failles d'authentification et de gestion de session"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>failles d'authentification et de gestion de session</strong> dans le cadre du module « Piratage d'applications web (Partie 1) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Failles d'authentification et de gestion de session », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Failles d'authentification et de gestion de session.",
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
      "x": "18.4 Aperçu des vulnérabilités OWASP Top 10"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>aperçu des vulnérabilités owasp top 10</strong> dans le cadre du module « Piratage d'applications web (Partie 1) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Aperçu des vulnérabilités OWASP Top 10 », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Aperçu des vulnérabilités OWASP Top 10.",
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
      "x": "18.5 Problèmes de validation des entrées et de contrôle d'accès"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>problèmes de validation des entrées et de contrôle d'accès</strong> dans le cadre du module « Piratage d'applications web (Partie 1) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Problèmes de validation des entrées et de contrôle d'accès », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Problèmes de validation des entrées et de contrôle d'accès.",
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
      "x": "18.6 Flux de travail de tests web assistés par IA"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>flux de travail de tests web assistés par ia</strong> dans le cadre du module « Piratage d'applications web (Partie 1) ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Flux de travail de tests web assistés par IA », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Flux de travail de tests web assistés par IA.",
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
      "x": "Exercices — Chapitre 18.1 : Architecture et technologies des applications web"
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
          "Exercice 1 (concept) — Architecture et technologies des applications web",
          "facile",
          "(concept) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Architecture et technologies des applications web",
          "facile",
          "(analyse) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Architecture et technologies des applications web",
          "facile",
          "(application) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Architecture et technologies des applications web",
          "intermédiaire",
          "(défense) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Architecture et technologies des applications web",
          "intermédiaire",
          "(scénario) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Architecture et technologies des applications web",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Architecture et technologies des applications web",
          "intermédiaire",
          "(méthode) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Architecture et technologies des applications web",
          "avancé",
          "(risque) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Architecture et technologies des applications web",
          "avancé",
          "(contrôle) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Architecture et technologies des applications web",
          "avancé",
          "(synthèse) Dans le contexte de « Architecture et technologies des applications web » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et technologies des applications web », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 18.2 : Comportement du protocole HTTP/HTTPS"
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
          "Exercice 1 (concept) — Comportement du protocole HTTP/HTTPS",
          "facile",
          "(concept) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Comportement du protocole HTTP/HTTPS",
          "facile",
          "(analyse) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Comportement du protocole HTTP/HTTPS",
          "facile",
          "(application) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Comportement du protocole HTTP/HTTPS",
          "intermédiaire",
          "(défense) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Comportement du protocole HTTP/HTTPS",
          "intermédiaire",
          "(scénario) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Comportement du protocole HTTP/HTTPS",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Comportement du protocole HTTP/HTTPS",
          "intermédiaire",
          "(méthode) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Comportement du protocole HTTP/HTTPS",
          "avancé",
          "(risque) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Comportement du protocole HTTP/HTTPS",
          "avancé",
          "(contrôle) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Comportement du protocole HTTP/HTTPS",
          "avancé",
          "(synthèse) Dans le contexte de « Comportement du protocole HTTP/HTTPS » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comportement du protocole HTTP/HTTPS », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 18.3 : Failles d'authentification et de gestion de session"
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
          "Exercice 1 (concept) — Failles d'authentification et de gestion de session",
          "facile",
          "(concept) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Failles d'authentification et de gestion de session",
          "facile",
          "(analyse) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Failles d'authentification et de gestion de session",
          "facile",
          "(application) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Failles d'authentification et de gestion de session",
          "intermédiaire",
          "(défense) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Failles d'authentification et de gestion de session",
          "intermédiaire",
          "(scénario) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Failles d'authentification et de gestion de session",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Failles d'authentification et de gestion de session",
          "intermédiaire",
          "(méthode) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Failles d'authentification et de gestion de session",
          "avancé",
          "(risque) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Failles d'authentification et de gestion de session",
          "avancé",
          "(contrôle) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Failles d'authentification et de gestion de session",
          "avancé",
          "(synthèse) Dans le contexte de « Failles d'authentification et de gestion de session » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Failles d'authentification et de gestion de session », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 18.4 : Aperçu des vulnérabilités OWASP Top 10"
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
          "Exercice 1 (concept) — Aperçu des vulnérabilités OWASP Top 10",
          "facile",
          "(concept) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Aperçu des vulnérabilités OWASP Top 10",
          "facile",
          "(analyse) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Aperçu des vulnérabilités OWASP Top 10",
          "facile",
          "(application) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Aperçu des vulnérabilités OWASP Top 10",
          "intermédiaire",
          "(défense) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Aperçu des vulnérabilités OWASP Top 10",
          "intermédiaire",
          "(scénario) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Aperçu des vulnérabilités OWASP Top 10",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Aperçu des vulnérabilités OWASP Top 10",
          "intermédiaire",
          "(méthode) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Aperçu des vulnérabilités OWASP Top 10",
          "avancé",
          "(risque) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Aperçu des vulnérabilités OWASP Top 10",
          "avancé",
          "(contrôle) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Aperçu des vulnérabilités OWASP Top 10",
          "avancé",
          "(synthèse) Dans le contexte de « Aperçu des vulnérabilités OWASP Top 10 » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des vulnérabilités OWASP Top 10 », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 18.5 : Problèmes de validation des entrées et de contrôle d'accès"
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
          "Exercice 1 (concept) — Problèmes de validation des entrées et de contrôle d'accès",
          "facile",
          "(concept) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Problèmes de validation des entrées et de contrôle d'accès",
          "facile",
          "(analyse) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Problèmes de validation des entrées et de contrôle d'accès",
          "facile",
          "(application) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Problèmes de validation des entrées et de contrôle d'accès",
          "intermédiaire",
          "(défense) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Problèmes de validation des entrées et de contrôle d'accès",
          "intermédiaire",
          "(scénario) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Problèmes de validation des entrées et de contrôle d'accès",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Problèmes de validation des entrées et de contrôle d'accès",
          "intermédiaire",
          "(méthode) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Problèmes de validation des entrées et de contrôle d'accès",
          "avancé",
          "(risque) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Problèmes de validation des entrées et de contrôle d'accès",
          "avancé",
          "(contrôle) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Problèmes de validation des entrées et de contrôle d'accès",
          "avancé",
          "(synthèse) Dans le contexte de « Problèmes de validation des entrées et de contrôle d'accès » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Problèmes de validation des entrées et de contrôle d'accès », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 18.6 : Flux de travail de tests web assistés par IA"
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
          "Exercice 1 (concept) — Flux de travail de tests web assistés par IA",
          "facile",
          "(concept) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Flux de travail de tests web assistés par IA",
          "facile",
          "(analyse) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Flux de travail de tests web assistés par IA",
          "facile",
          "(application) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Flux de travail de tests web assistés par IA",
          "intermédiaire",
          "(défense) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Flux de travail de tests web assistés par IA",
          "intermédiaire",
          "(scénario) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Flux de travail de tests web assistés par IA",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Flux de travail de tests web assistés par IA",
          "intermédiaire",
          "(méthode) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Flux de travail de tests web assistés par IA",
          "avancé",
          "(risque) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Flux de travail de tests web assistés par IA",
          "avancé",
          "(contrôle) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Flux de travail de tests web assistés par IA",
          "avancé",
          "(synthèse) Dans le contexte de « Flux de travail de tests web assistés par IA » (module 18 : Piratage d'applications web (Partie 1)), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Flux de travail de tests web assistés par IA », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Piratage d'applications web (Partie 1) » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
      "x": "Lab guidé pas à pas — Chapitre 18.1 : Architecture et technologies des applications web"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Web",
      "x": "Mettre en pratique « Architecture et technologies des applications web » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Web » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 18.1 : Architecture et technologies des applications web"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Web », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Injection SQL",
      "x": "<strong>Objectif :</strong> Exploiter une injection SQL de lab pour récupérer le flag.<br><strong>Contexte :</strong> Architecture et technologies des applications web (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c1_ctf1}"
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
      "x": "CTF 1/5 — Injection SQL\nChapitre : 18.1 — Architecture et technologies des applications web\nFlag : flag{m18_c1_ctf1}\n\nIndices :\n  1. Tester le paramètre id.\n  2. Utiliser une charge UNION.\n  3. Lire la table flags.\n\nProcédure pas à pas :\n  1. Identifier le paramètre vulnérable.\n  2. Tester une injection simple.\n  3. Déterminer le nombre de colonnes.\n  4. Extraire la table flags.\n  5. Lire le flag.\n\nRemédiation : Utiliser des requêtes paramétrées et valider les entrées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — XSS réfléchi",
      "x": "<strong>Objectif :</strong> Exploiter un XSS réfléchi de lab et prouver l'exécution.<br><strong>Contexte :</strong> Architecture et technologies des applications web (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c1_ctf2}"
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
      "x": "CTF 2/5 — XSS réfléchi\nChapitre : 18.1 — Architecture et technologies des applications web\nFlag : flag{m18_c1_ctf2}\n\nIndices :\n  1. Tester le paramètre de recherche.\n  2. Injecter une balise script.\n  3. Observer l'exécution.\n\nProcédure pas à pas :\n  1. Identifier le paramètre reflété.\n  2. Injecter un payload de test.\n  3. Vérifier l'exécution.\n  4. Documenter la preuve.\n  5. Récupérer le flag.\n\nRemédiation : Encoder les sorties et appliquer une CSP.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — IDOR",
      "x": "<strong>Objectif :</strong> Accéder à la ressource d'un autre utilisateur de lab via un identifiant.<br><strong>Contexte :</strong> Architecture et technologies des applications web (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c1_ctf3}"
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
      "x": "CTF 3/5 — IDOR\nChapitre : 18.1 — Architecture et technologies des applications web\nFlag : flag{m18_c1_ctf3}\n\nIndices :\n  1. Changer l'identifiant.\n  2. Comparer les réponses.\n  3. Vérifier les autorisations.\n\nProcédure pas à pas :\n  1. Se connecter avec le compte de test.\n  2. Identifier l'endpoint.\n  3. Modifier l'ID.\n  4. Observer l'accès.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier l'autorisation côté serveur pour chaque objet.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Upload de fichier",
      "x": "<strong>Objectif :</strong> Contourner la validation d'upload d'un lab et obtenir l'exécution.<br><strong>Contexte :</strong> Architecture et technologies des applications web (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c1_ctf4}"
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
      "x": "CTF 4/5 — Upload de fichier\nChapitre : 18.1 — Architecture et technologies des applications web\nFlag : flag{m18_c1_ctf4}\n\nIndices :\n  1. Tester les extensions.\n  2. Vérifier le type MIME.\n  3. Chercher un dossier accessible.\n\nProcédure pas à pas :\n  1. Analyser le formulaire.\n  2. Tester une extension autorisée.\n  3. Contourner la validation.\n  4. Accéder au fichier.\n  5. Récupérer le flag.\n\nRemédiation : Valider le type réel, renommer et stocker hors webroot.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — API non autorisée",
      "x": "<strong>Objectif :</strong> Une API de lab ne vérifie pas le rôle. Accéder à une fonction admin.<br><strong>Contexte :</strong> Architecture et technologies des applications web (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c1_ctf5}"
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
      "x": "CTF 5/5 — API non autorisée\nChapitre : 18.1 — Architecture et technologies des applications web\nFlag : flag{m18_c1_ctf5}\n\nIndices :\n  1. Analyser le JWT.\n  2. Tester les rôles.\n  3. Comparer les réponses.\n\nProcédure pas à pas :\n  1. Obtenir un jeton utilisateur.\n  2. Décoder le JWT.\n  3. Modifier le rôle de test.\n  4. Appeler l'endpoint admin.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier les rôles côté serveur et signer les jetons correctement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 18.2 : Comportement du protocole HTTP/HTTPS"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Web",
      "x": "Mettre en pratique « Comportement du protocole HTTP/HTTPS » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Web » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 18.2 : Comportement du protocole HTTP/HTTPS"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Web », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Injection SQL",
      "x": "<strong>Objectif :</strong> Exploiter une injection SQL de lab pour récupérer le flag.<br><strong>Contexte :</strong> Comportement du protocole HTTP/HTTPS (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c2_ctf1}"
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
      "x": "CTF 1/5 — Injection SQL\nChapitre : 18.2 — Comportement du protocole HTTP/HTTPS\nFlag : flag{m18_c2_ctf1}\n\nIndices :\n  1. Tester le paramètre id.\n  2. Utiliser une charge UNION.\n  3. Lire la table flags.\n\nProcédure pas à pas :\n  1. Identifier le paramètre vulnérable.\n  2. Tester une injection simple.\n  3. Déterminer le nombre de colonnes.\n  4. Extraire la table flags.\n  5. Lire le flag.\n\nRemédiation : Utiliser des requêtes paramétrées et valider les entrées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — XSS réfléchi",
      "x": "<strong>Objectif :</strong> Exploiter un XSS réfléchi de lab et prouver l'exécution.<br><strong>Contexte :</strong> Comportement du protocole HTTP/HTTPS (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c2_ctf2}"
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
      "x": "CTF 2/5 — XSS réfléchi\nChapitre : 18.2 — Comportement du protocole HTTP/HTTPS\nFlag : flag{m18_c2_ctf2}\n\nIndices :\n  1. Tester le paramètre de recherche.\n  2. Injecter une balise script.\n  3. Observer l'exécution.\n\nProcédure pas à pas :\n  1. Identifier le paramètre reflété.\n  2. Injecter un payload de test.\n  3. Vérifier l'exécution.\n  4. Documenter la preuve.\n  5. Récupérer le flag.\n\nRemédiation : Encoder les sorties et appliquer une CSP.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — IDOR",
      "x": "<strong>Objectif :</strong> Accéder à la ressource d'un autre utilisateur de lab via un identifiant.<br><strong>Contexte :</strong> Comportement du protocole HTTP/HTTPS (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c2_ctf3}"
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
      "x": "CTF 3/5 — IDOR\nChapitre : 18.2 — Comportement du protocole HTTP/HTTPS\nFlag : flag{m18_c2_ctf3}\n\nIndices :\n  1. Changer l'identifiant.\n  2. Comparer les réponses.\n  3. Vérifier les autorisations.\n\nProcédure pas à pas :\n  1. Se connecter avec le compte de test.\n  2. Identifier l'endpoint.\n  3. Modifier l'ID.\n  4. Observer l'accès.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier l'autorisation côté serveur pour chaque objet.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Upload de fichier",
      "x": "<strong>Objectif :</strong> Contourner la validation d'upload d'un lab et obtenir l'exécution.<br><strong>Contexte :</strong> Comportement du protocole HTTP/HTTPS (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c2_ctf4}"
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
      "x": "CTF 4/5 — Upload de fichier\nChapitre : 18.2 — Comportement du protocole HTTP/HTTPS\nFlag : flag{m18_c2_ctf4}\n\nIndices :\n  1. Tester les extensions.\n  2. Vérifier le type MIME.\n  3. Chercher un dossier accessible.\n\nProcédure pas à pas :\n  1. Analyser le formulaire.\n  2. Tester une extension autorisée.\n  3. Contourner la validation.\n  4. Accéder au fichier.\n  5. Récupérer le flag.\n\nRemédiation : Valider le type réel, renommer et stocker hors webroot.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — API non autorisée",
      "x": "<strong>Objectif :</strong> Une API de lab ne vérifie pas le rôle. Accéder à une fonction admin.<br><strong>Contexte :</strong> Comportement du protocole HTTP/HTTPS (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c2_ctf5}"
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
      "x": "CTF 5/5 — API non autorisée\nChapitre : 18.2 — Comportement du protocole HTTP/HTTPS\nFlag : flag{m18_c2_ctf5}\n\nIndices :\n  1. Analyser le JWT.\n  2. Tester les rôles.\n  3. Comparer les réponses.\n\nProcédure pas à pas :\n  1. Obtenir un jeton utilisateur.\n  2. Décoder le JWT.\n  3. Modifier le rôle de test.\n  4. Appeler l'endpoint admin.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier les rôles côté serveur et signer les jetons correctement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 18.3 : Failles d'authentification et de gestion de session"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Failles d'authentification et de gestion de session » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 18.3 : Failles d'authentification et de gestion de session"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Failles d'authentification et de gestion de session (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m18_c3_ctf1}"
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
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 18.3 — Failles d'authentification et de gestion de session\nFlag : flag{m18_c3_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Failles d'authentification et de gestion de session (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m18_c3_ctf2}"
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
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 18.3 — Failles d'authentification et de gestion de session\nFlag : flag{m18_c3_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Failles d'authentification et de gestion de session (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m18_c3_ctf3}"
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
      "x": "CTF 3/5 — Service non cité\nChapitre : 18.3 — Failles d'authentification et de gestion de session\nFlag : flag{m18_c3_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Failles d'authentification et de gestion de session (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m18_c3_ctf4}"
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
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 18.3 — Failles d'authentification et de gestion de session\nFlag : flag{m18_c3_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Failles d'authentification et de gestion de session (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m18_c3_ctf5}"
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
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 18.3 — Failles d'authentification et de gestion de session\nFlag : flag{m18_c3_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 18.4 : Aperçu des vulnérabilités OWASP Top 10"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Analyse de vulnérabilités",
      "x": "Mettre en pratique « Aperçu des vulnérabilités OWASP Top 10 » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Analyse de vulnérabilités » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 18.4 : Aperçu des vulnérabilités OWASP Top 10"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Analyse de vulnérabilités », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Correspondance CVE",
      "x": "<strong>Objectif :</strong> À partir d'une bannière de lab, identifier une CVE plausible et justifier.<br><strong>Contexte :</strong> Aperçu des vulnérabilités OWASP Top 10 (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m18_c4_ctf1}"
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
      "x": "CTF 1/5 — Correspondance CVE\nChapitre : 18.4 — Aperçu des vulnérabilités OWASP Top 10\nFlag : flag{m18_c4_ctf1}\n\nIndices :\n  1. Relever la version exacte.\n  2. Chercher dans les bases publiques.\n  3. Vérifier les conditions d'exploitation.\n\nProcédure pas à pas :\n  1. Récupérer la bannière du service.\n  2. Identifier le produit et la version.\n  3. Rechercher les CVE associées.\n  4. Vérifier la configuration de lab.\n  5. Récupérer le flag dans le fichier de test.\n\nRemédiation : Mettre à jour le produit et supprimer les informations de version inutiles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Score CVSS",
      "x": "<strong>Objectif :</strong> Calculer un score CVSS pour une vulnérabilité de lab et expliquer les métriques.<br><strong>Contexte :</strong> Aperçu des vulnérabilités OWASP Top 10 (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m18_c4_ctf2}"
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
      "x": "CTF 2/5 — Score CVSS\nChapitre : 18.4 — Aperçu des vulnérabilités OWASP Top 10\nFlag : flag{m18_c4_ctf2}\n\nIndices :\n  1. Identifier les métriques de base.\n  2. Évaluer l'impact confidentialité/intégrité/disponibilité.\n  3. Comparer avec le score officiel.\n\nProcédure pas à pas :\n  1. Lire la description de la vulnérabilité.\n  2. Déterminer AV, AC, PR, UI, S, C, I, A.\n  3. Calculer le score.\n  4. Comparer au score de la base.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Utiliser CVSS comme aide à la priorisation, pas comme seule décision.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Faux positif",
      "x": "<strong>Objectif :</strong> Un scanner signale une vulnérabilité qui n'est pas exploitable. Prouver le faux positif.<br><strong>Contexte :</strong> Aperçu des vulnérabilités OWASP Top 10 (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m18_c4_ctf3}"
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
      "x": "CTF 3/5 — Faux positif\nChapitre : 18.4 — Aperçu des vulnérabilités OWASP Top 10\nFlag : flag{m18_c4_ctf3}\n\nIndices :\n  1. Vérifier la version réelle.\n  2. Tester la condition d'exploitation.\n  3. Lire la configuration.\n\nProcédure pas à pas :\n  1. Reproduire le scan.\n  2. Vérifier la version avec une commande manuelle.\n  3. Tester la condition annoncée.\n  4. Constater l'absence d'impact.\n  5. Récupérer le flag dans la note de validation.\n\nRemédiation : Mettre en place une validation manuelle avant remédiation.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Faisabilité d'exploitation",
      "x": "<strong>Objectif :</strong> Évaluer si une vulnérabilité de lab est réellement exploitable dans le contexte.<br><strong>Contexte :</strong> Aperçu des vulnérabilités OWASP Top 10 (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m18_c4_ctf4}"
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
      "x": "CTF 4/5 — Faisabilité d'exploitation\nChapitre : 18.4 — Aperçu des vulnérabilités OWASP Top 10\nFlag : flag{m18_c4_ctf4}\n\nIndices :\n  1. Vérifier l'accès réseau.\n  2. Vérifier l'authentification.\n  3. Vérifier les protections.\n\nProcédure pas à pas :\n  1. Identifier la surface exposée.\n  2. Vérifier les prérequis.\n  3. Tester un PoC minimal en lab.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le journal.\n\nRemédiation : Prioriser selon le contexte réel et les contrôles compensatoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation",
      "x": "<strong>Objectif :</strong> Classer trois vulnérabilités de lab par ordre de traitement.<br><strong>Contexte :</strong> Aperçu des vulnérabilités OWASP Top 10 (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m18_c4_ctf5}"
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
      "x": "CTF 5/5 — Priorisation\nChapitre : 18.4 — Aperçu des vulnérabilités OWASP Top 10\nFlag : flag{m18_c4_ctf5}\n\nIndices :\n  1. Évaluer la criticité.\n  2. Prendre en compte l'exposition.\n  3. Considérer l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les vulnérabilités.\n  2. Attribuer un score CVSS.\n  3. Ajouter le contexte d'exposition.\n  4. Classer par risque.\n  5. Récupérer le flag dans le plan de remédiation.\n\nRemédiation : Utiliser une approche risque : criticité technique + impact métier + exploitabilité.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 18.5 : Problèmes de validation des entrées et de contrôle d'accès"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Carrière & CEH",
      "x": "Mettre en pratique « Problèmes de validation des entrées et de contrôle d'accès » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Carrière & CEH » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 18.5 : Problèmes de validation des entrées et de contrôle d'accès"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Carrière & CEH », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Cartographie CEH",
      "x": "<strong>Objectif :</strong> Associer cinq sujets de lab aux domaines CEH v13.<br><strong>Contexte :</strong> Problèmes de validation des entrées et de contrôle d'accès (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m18_c5_ctf1}"
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
      "x": "CTF 1/5 — Cartographie CEH\nChapitre : 18.5 — Problèmes de validation des entrées et de contrôle d'accès\nFlag : flag{m18_c5_ctf1}\n\nIndices :\n  1. Lire le référentiel.\n  2. Classer les sujets.\n  3. Justifier.\n\nProcédure pas à pas :\n  1. Lister les sujets.\n  2. Lire les domaines.\n  3. Associer.\n  4. Justifier.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser le référentiel officiel et un plan d'étude.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Question scénario",
      "x": "<strong>Objectif :</strong> Répondre à une question scénario de lab avec élimination.<br><strong>Contexte :</strong> Problèmes de validation des entrées et de contrôle d'accès (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m18_c5_ctf2}"
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
      "x": "CTF 2/5 — Question scénario\nChapitre : 18.5 — Problèmes de validation des entrées et de contrôle d'accès\nFlag : flag{m18_c5_ctf2}\n\nIndices :\n  1. Lire l'énoncé.\n  2. Éliminer les options absurdes.\n  3. Choisir la meilleure.\n\nProcédure pas à pas :\n  1. Analyser l'énoncé.\n  2. Éliminer.\n  3. Comparer.\n  4. Choisir.\n  5. Récupérer le flag.\n\nRemédiation : S'entraîner sur des scénarios et justifier chaque choix.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Gestion du temps",
      "x": "<strong>Objectif :</strong> Planifier un examen blanc de lab de 50 questions en 60 minutes.<br><strong>Contexte :</strong> Problèmes de validation des entrées et de contrôle d'accès (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m18_c5_ctf3}"
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
      "x": "CTF 3/5 — Gestion du temps\nChapitre : 18.5 — Problèmes de validation des entrées et de contrôle d'accès\nFlag : flag{m18_c5_ctf3}\n\nIndices :\n  1. Répartir le temps.\n  2. Marquer les questions difficiles.\n  3. Revenir ensuite.\n\nProcédure pas à pas :\n  1. Créer un planning.\n  2. Répondre aux questions faciles.\n  3. Marquer les difficiles.\n  4. Revenir.\n  5. Récupérer le flag.\n\nRemédiation : S'entraîner avec chronomètre et analyser les erreurs.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Feuille de route",
      "x": "<strong>Objectif :</strong> Proposer une feuille de route de certifications après le lab.<br><strong>Contexte :</strong> Problèmes de validation des entrées et de contrôle d'accès (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m18_c5_ctf4}"
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
      "x": "CTF 4/5 — Feuille de route\nChapitre : 18.5 — Problèmes de validation des entrées et de contrôle d'accès\nFlag : flag{m18_c5_ctf4}\n\nIndices :\n  1. Identifier les prérequis.\n  2. Choisir une spécialisation.\n  3. Planifier.\n\nProcédure pas à pas :\n  1. Lister les certifications.\n  2. Vérifier les prérequis.\n  3. Choisir une trajectoire.\n  4. Planifier.\n  5. Récupérer le flag.\n\nRemédiation : Aligners certifications et expérience pratique.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Capstone",
      "x": "<strong>Objectif :</strong> Cadrer un projet de synthèse de lab avec périmètre et livrables.<br><strong>Contexte :</strong> Problèmes de validation des entrées et de contrôle d'accès (Carrière & CEH).<br><strong>Flag attendu (lab) :</strong> flag{m18_c5_ctf5}"
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
      "x": "CTF 5/5 — Capstone\nChapitre : 18.5 — Problèmes de validation des entrées et de contrôle d'accès\nFlag : flag{m18_c5_ctf5}\n\nIndices :\n  1. Définir le périmètre.\n  2. Lister les livrables.\n  3. Planifier.\n\nProcédure pas à pas :\n  1. Choisir une cible de lab.\n  2. Définir le périmètre.\n  3. Lister les livrables.\n  4. Planifier.\n  5. Récupérer le flag.\n\nRemédiation : Utiliser une méthodologie (PTES/OWASP) et documenter.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 18.6 : Flux de travail de tests web assistés par IA"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Web",
      "x": "Mettre en pratique « Flux de travail de tests web assistés par IA » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Web » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 18.6 : Flux de travail de tests web assistés par IA"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Web », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Injection SQL",
      "x": "<strong>Objectif :</strong> Exploiter une injection SQL de lab pour récupérer le flag.<br><strong>Contexte :</strong> Flux de travail de tests web assistés par IA (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c6_ctf1}"
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
      "x": "CTF 1/5 — Injection SQL\nChapitre : 18.6 — Flux de travail de tests web assistés par IA\nFlag : flag{m18_c6_ctf1}\n\nIndices :\n  1. Tester le paramètre id.\n  2. Utiliser une charge UNION.\n  3. Lire la table flags.\n\nProcédure pas à pas :\n  1. Identifier le paramètre vulnérable.\n  2. Tester une injection simple.\n  3. Déterminer le nombre de colonnes.\n  4. Extraire la table flags.\n  5. Lire le flag.\n\nRemédiation : Utiliser des requêtes paramétrées et valider les entrées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — XSS réfléchi",
      "x": "<strong>Objectif :</strong> Exploiter un XSS réfléchi de lab et prouver l'exécution.<br><strong>Contexte :</strong> Flux de travail de tests web assistés par IA (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c6_ctf2}"
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
      "x": "CTF 2/5 — XSS réfléchi\nChapitre : 18.6 — Flux de travail de tests web assistés par IA\nFlag : flag{m18_c6_ctf2}\n\nIndices :\n  1. Tester le paramètre de recherche.\n  2. Injecter une balise script.\n  3. Observer l'exécution.\n\nProcédure pas à pas :\n  1. Identifier le paramètre reflété.\n  2. Injecter un payload de test.\n  3. Vérifier l'exécution.\n  4. Documenter la preuve.\n  5. Récupérer le flag.\n\nRemédiation : Encoder les sorties et appliquer une CSP.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — IDOR",
      "x": "<strong>Objectif :</strong> Accéder à la ressource d'un autre utilisateur de lab via un identifiant.<br><strong>Contexte :</strong> Flux de travail de tests web assistés par IA (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c6_ctf3}"
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
      "x": "CTF 3/5 — IDOR\nChapitre : 18.6 — Flux de travail de tests web assistés par IA\nFlag : flag{m18_c6_ctf3}\n\nIndices :\n  1. Changer l'identifiant.\n  2. Comparer les réponses.\n  3. Vérifier les autorisations.\n\nProcédure pas à pas :\n  1. Se connecter avec le compte de test.\n  2. Identifier l'endpoint.\n  3. Modifier l'ID.\n  4. Observer l'accès.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier l'autorisation côté serveur pour chaque objet.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Upload de fichier",
      "x": "<strong>Objectif :</strong> Contourner la validation d'upload d'un lab et obtenir l'exécution.<br><strong>Contexte :</strong> Flux de travail de tests web assistés par IA (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c6_ctf4}"
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
      "x": "CTF 4/5 — Upload de fichier\nChapitre : 18.6 — Flux de travail de tests web assistés par IA\nFlag : flag{m18_c6_ctf4}\n\nIndices :\n  1. Tester les extensions.\n  2. Vérifier le type MIME.\n  3. Chercher un dossier accessible.\n\nProcédure pas à pas :\n  1. Analyser le formulaire.\n  2. Tester une extension autorisée.\n  3. Contourner la validation.\n  4. Accéder au fichier.\n  5. Récupérer le flag.\n\nRemédiation : Valider le type réel, renommer et stocker hors webroot.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — API non autorisée",
      "x": "<strong>Objectif :</strong> Une API de lab ne vérifie pas le rôle. Accéder à une fonction admin.<br><strong>Contexte :</strong> Flux de travail de tests web assistés par IA (Web).<br><strong>Flag attendu (lab) :</strong> flag{m18_c6_ctf5}"
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
      "x": "CTF 5/5 — API non autorisée\nChapitre : 18.6 — Flux de travail de tests web assistés par IA\nFlag : flag{m18_c6_ctf5}\n\nIndices :\n  1. Analyser le JWT.\n  2. Tester les rôles.\n  3. Comparer les réponses.\n\nProcédure pas à pas :\n  1. Obtenir un jeton utilisateur.\n  2. Décoder le JWT.\n  3. Modifier le rôle de test.\n  4. Appeler l'endpoint admin.\n  5. Récupérer le flag.\n\nRemédiation : Vérifier les rôles côté serveur et signer les jetons correctement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q18"
};
