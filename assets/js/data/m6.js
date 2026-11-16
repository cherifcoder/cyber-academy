export default {
  "id": "m6",
  "num": 6,
  "title": "Internes Windows et fondamentaux de sécurité",
  "short": "Windows",
  "icon": "🪟",
  "xp": 270,
  "duration": 70,
  "summary": "Cours en français sur « Internes Windows et fondamentaux de sécurité » avec 6 chapitres, 10 exercices par chapitre et un défi CTF.",
  "objectives": [
    "Comprendre et appliquer : Architecture et composants Windows.",
    "Comprendre et appliquer : Comptes utilisateurs, groupes et permissions.",
    "Comprendre et appliquer : Mécanismes d'authentification Windows.",
    "Comprendre et appliquer : Aperçu du registre et points de détournement courants.",
    "Comprendre et appliquer : Contrôles et protections de sécurité Windows.",
    "Comprendre et appliquer : Mauvaises configurations courantes ciblées par les attaquants."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 6 — Internes Windows et fondamentaux de sécurité</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 70 min · XP : 270. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "6.1 Architecture et composants Windows"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>architecture et composants windows</strong> dans le cadre du module « Internes Windows et fondamentaux de sécurité ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Architecture et composants Windows », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Architecture et composants Windows.",
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
      "x": "6.2 Comptes utilisateurs, groupes et permissions"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>comptes utilisateurs, groupes et permissions</strong> dans le cadre du module « Internes Windows et fondamentaux de sécurité ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Comptes utilisateurs, groupes et permissions », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Comptes utilisateurs, groupes et permissions.",
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
      "x": "6.3 Mécanismes d'authentification Windows"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>mécanismes d'authentification windows</strong> dans le cadre du module « Internes Windows et fondamentaux de sécurité ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Mécanismes d'authentification Windows », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Mécanismes d'authentification Windows.",
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
      "x": "6.4 Aperçu du registre et points de détournement courants"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>aperçu du registre et points de détournement courants</strong> dans le cadre du module « Internes Windows et fondamentaux de sécurité ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Aperçu du registre et points de détournement courants », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Aperçu du registre et points de détournement courants.",
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
      "x": "6.5 Contrôles et protections de sécurité Windows"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>contrôles et protections de sécurité windows</strong> dans le cadre du module « Internes Windows et fondamentaux de sécurité ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Contrôles et protections de sécurité Windows », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Contrôles et protections de sécurité Windows.",
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
      "x": "6.6 Mauvaises configurations courantes ciblées par les attaquants"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>mauvaises configurations courantes ciblées par les attaquants</strong> dans le cadre du module « Internes Windows et fondamentaux de sécurité ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Mauvaises configurations courantes ciblées par les attaquants », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Mauvaises configurations courantes ciblées par les attaquants.",
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
      "x": "Exercices — Chapitre 6.1 : Architecture et composants Windows"
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
          "Exercice 1 (concept) — Architecture et composants Windows",
          "facile",
          "(concept) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Architecture et composants Windows",
          "facile",
          "(analyse) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Architecture et composants Windows",
          "facile",
          "(application) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Architecture et composants Windows",
          "intermédiaire",
          "(défense) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Architecture et composants Windows",
          "intermédiaire",
          "(scénario) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Architecture et composants Windows",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Architecture et composants Windows",
          "intermédiaire",
          "(méthode) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Architecture et composants Windows",
          "avancé",
          "(risque) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Architecture et composants Windows",
          "avancé",
          "(contrôle) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Architecture et composants Windows",
          "avancé",
          "(synthèse) Dans le contexte de « Architecture et composants Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Architecture et composants Windows », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 6.2 : Comptes utilisateurs, groupes et permissions"
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
          "Exercice 1 (concept) — Comptes utilisateurs, groupes et permissions",
          "facile",
          "(concept) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Comptes utilisateurs, groupes et permissions",
          "facile",
          "(analyse) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Comptes utilisateurs, groupes et permissions",
          "facile",
          "(application) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Comptes utilisateurs, groupes et permissions",
          "intermédiaire",
          "(défense) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Comptes utilisateurs, groupes et permissions",
          "intermédiaire",
          "(scénario) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Comptes utilisateurs, groupes et permissions",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Comptes utilisateurs, groupes et permissions",
          "intermédiaire",
          "(méthode) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Comptes utilisateurs, groupes et permissions",
          "avancé",
          "(risque) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Comptes utilisateurs, groupes et permissions",
          "avancé",
          "(contrôle) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Comptes utilisateurs, groupes et permissions",
          "avancé",
          "(synthèse) Dans le contexte de « Comptes utilisateurs, groupes et permissions » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comptes utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 6.3 : Mécanismes d'authentification Windows"
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
          "Exercice 1 (concept) — Mécanismes d'authentification Windows",
          "facile",
          "(concept) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Mécanismes d'authentification Windows",
          "facile",
          "(analyse) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Mécanismes d'authentification Windows",
          "facile",
          "(application) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Mécanismes d'authentification Windows",
          "intermédiaire",
          "(défense) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Mécanismes d'authentification Windows",
          "intermédiaire",
          "(scénario) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Mécanismes d'authentification Windows",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Mécanismes d'authentification Windows",
          "intermédiaire",
          "(méthode) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Mécanismes d'authentification Windows",
          "avancé",
          "(risque) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Mécanismes d'authentification Windows",
          "avancé",
          "(contrôle) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Mécanismes d'authentification Windows",
          "avancé",
          "(synthèse) Dans le contexte de « Mécanismes d'authentification Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mécanismes d'authentification Windows », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 6.4 : Aperçu du registre et points de détournement courants"
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
          "Exercice 1 (concept) — Aperçu du registre et points de détournement courants",
          "facile",
          "(concept) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Aperçu du registre et points de détournement courants",
          "facile",
          "(analyse) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Aperçu du registre et points de détournement courants",
          "facile",
          "(application) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Aperçu du registre et points de détournement courants",
          "intermédiaire",
          "(défense) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Aperçu du registre et points de détournement courants",
          "intermédiaire",
          "(scénario) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Aperçu du registre et points de détournement courants",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Aperçu du registre et points de détournement courants",
          "intermédiaire",
          "(méthode) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Aperçu du registre et points de détournement courants",
          "avancé",
          "(risque) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Aperçu du registre et points de détournement courants",
          "avancé",
          "(contrôle) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Aperçu du registre et points de détournement courants",
          "avancé",
          "(synthèse) Dans le contexte de « Aperçu du registre et points de détournement courants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu du registre et points de détournement courants », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 6.5 : Contrôles et protections de sécurité Windows"
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
          "Exercice 1 (concept) — Contrôles et protections de sécurité Windows",
          "facile",
          "(concept) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Contrôles et protections de sécurité Windows",
          "facile",
          "(analyse) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Contrôles et protections de sécurité Windows",
          "facile",
          "(application) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Contrôles et protections de sécurité Windows",
          "intermédiaire",
          "(défense) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Contrôles et protections de sécurité Windows",
          "intermédiaire",
          "(scénario) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Contrôles et protections de sécurité Windows",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Contrôles et protections de sécurité Windows",
          "intermédiaire",
          "(méthode) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Contrôles et protections de sécurité Windows",
          "avancé",
          "(risque) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Contrôles et protections de sécurité Windows",
          "avancé",
          "(contrôle) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Contrôles et protections de sécurité Windows",
          "avancé",
          "(synthèse) Dans le contexte de « Contrôles et protections de sécurité Windows » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Contrôles et protections de sécurité Windows », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 6.6 : Mauvaises configurations courantes ciblées par les attaquants"
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
          "Exercice 1 (concept) — Mauvaises configurations courantes ciblées par les attaquants",
          "facile",
          "(concept) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Mauvaises configurations courantes ciblées par les attaquants",
          "facile",
          "(analyse) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Mauvaises configurations courantes ciblées par les attaquants",
          "facile",
          "(application) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Mauvaises configurations courantes ciblées par les attaquants",
          "intermédiaire",
          "(défense) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Mauvaises configurations courantes ciblées par les attaquants",
          "intermédiaire",
          "(scénario) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Mauvaises configurations courantes ciblées par les attaquants",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Mauvaises configurations courantes ciblées par les attaquants",
          "intermédiaire",
          "(méthode) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Mauvaises configurations courantes ciblées par les attaquants",
          "avancé",
          "(risque) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Mauvaises configurations courantes ciblées par les attaquants",
          "avancé",
          "(contrôle) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Mauvaises configurations courantes ciblées par les attaquants",
          "avancé",
          "(synthèse) Dans le contexte de « Mauvaises configurations courantes ciblées par les attaquants » (module 6 : Internes Windows et fondamentaux de sécurité), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Mauvaises configurations courantes ciblées par les attaquants », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "CTF — Module 6"
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Internes Windows et fondamentaux de sécurité » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
  "quiz": "q6"
};
