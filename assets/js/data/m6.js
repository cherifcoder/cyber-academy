export default {
  "id": "m6",
  "num": 6,
  "title": "Internes Windows et fondamentaux de sécurité",
  "short": "Windows",
  "icon": "🪟",
  "xp": 270,
  "duration": 70,
  "summary": "Cours en français enrichi sur « Internes Windows et fondamentaux de sécurité » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
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
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 6.1 : Architecture et composants Windows"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Architecture et composants Windows » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 6.1 : Architecture et composants Windows"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Architecture et composants Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c1_ctf1}"
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
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 6.1 — Architecture et composants Windows\nFlag : flag{m6_c1_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Architecture et composants Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c1_ctf2}"
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
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 6.1 — Architecture et composants Windows\nFlag : flag{m6_c1_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Architecture et composants Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c1_ctf3}"
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
      "x": "CTF 3/5 — Service non cité\nChapitre : 6.1 — Architecture et composants Windows\nFlag : flag{m6_c1_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Architecture et composants Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c1_ctf4}"
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
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 6.1 — Architecture et composants Windows\nFlag : flag{m6_c1_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Architecture et composants Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c1_ctf5}"
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
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 6.1 — Architecture et composants Windows\nFlag : flag{m6_c1_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 6.2 : Comptes utilisateurs, groupes et permissions"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Comptes utilisateurs, groupes et permissions » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 6.2 : Comptes utilisateurs, groupes et permissions"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Comptes utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c2_ctf1}"
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
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 6.2 — Comptes utilisateurs, groupes et permissions\nFlag : flag{m6_c2_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Comptes utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c2_ctf2}"
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
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 6.2 — Comptes utilisateurs, groupes et permissions\nFlag : flag{m6_c2_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Comptes utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c2_ctf3}"
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
      "x": "CTF 3/5 — Service non cité\nChapitre : 6.2 — Comptes utilisateurs, groupes et permissions\nFlag : flag{m6_c2_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Comptes utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c2_ctf4}"
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
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 6.2 — Comptes utilisateurs, groupes et permissions\nFlag : flag{m6_c2_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Comptes utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c2_ctf5}"
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
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 6.2 — Comptes utilisateurs, groupes et permissions\nFlag : flag{m6_c2_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 6.3 : Mécanismes d'authentification Windows"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Mécanismes d'authentification Windows » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 6.3 : Mécanismes d'authentification Windows"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Mécanismes d'authentification Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c3_ctf1}"
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
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 6.3 — Mécanismes d'authentification Windows\nFlag : flag{m6_c3_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Mécanismes d'authentification Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c3_ctf2}"
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
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 6.3 — Mécanismes d'authentification Windows\nFlag : flag{m6_c3_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Mécanismes d'authentification Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c3_ctf3}"
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
      "x": "CTF 3/5 — Service non cité\nChapitre : 6.3 — Mécanismes d'authentification Windows\nFlag : flag{m6_c3_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Mécanismes d'authentification Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c3_ctf4}"
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
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 6.3 — Mécanismes d'authentification Windows\nFlag : flag{m6_c3_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Mécanismes d'authentification Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c3_ctf5}"
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
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 6.3 — Mécanismes d'authentification Windows\nFlag : flag{m6_c3_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 6.4 : Aperçu du registre et points de détournement courants"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Aperçu du registre et points de détournement courants » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 6.4 : Aperçu du registre et points de détournement courants"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Aperçu du registre et points de détournement courants (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c4_ctf1}"
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
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 6.4 — Aperçu du registre et points de détournement courants\nFlag : flag{m6_c4_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Aperçu du registre et points de détournement courants (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c4_ctf2}"
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
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 6.4 — Aperçu du registre et points de détournement courants\nFlag : flag{m6_c4_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Aperçu du registre et points de détournement courants (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c4_ctf3}"
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
      "x": "CTF 3/5 — Service non cité\nChapitre : 6.4 — Aperçu du registre et points de détournement courants\nFlag : flag{m6_c4_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Aperçu du registre et points de détournement courants (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c4_ctf4}"
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
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 6.4 — Aperçu du registre et points de détournement courants\nFlag : flag{m6_c4_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Aperçu du registre et points de détournement courants (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c4_ctf5}"
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
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 6.4 — Aperçu du registre et points de détournement courants\nFlag : flag{m6_c4_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 6.5 : Contrôles et protections de sécurité Windows"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Contrôles et protections de sécurité Windows » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 6.5 : Contrôles et protections de sécurité Windows"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Contrôles et protections de sécurité Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c5_ctf1}"
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
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 6.5 — Contrôles et protections de sécurité Windows\nFlag : flag{m6_c5_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Contrôles et protections de sécurité Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c5_ctf2}"
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
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 6.5 — Contrôles et protections de sécurité Windows\nFlag : flag{m6_c5_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Contrôles et protections de sécurité Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c5_ctf3}"
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
      "x": "CTF 3/5 — Service non cité\nChapitre : 6.5 — Contrôles et protections de sécurité Windows\nFlag : flag{m6_c5_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Contrôles et protections de sécurité Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c5_ctf4}"
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
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 6.5 — Contrôles et protections de sécurité Windows\nFlag : flag{m6_c5_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Contrôles et protections de sécurité Windows (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m6_c5_ctf5}"
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
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 6.5 — Contrôles et protections de sécurité Windows\nFlag : flag{m6_c5_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 6.6 : Mauvaises configurations courantes ciblées par les attaquants"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Cloud",
      "x": "Mettre en pratique « Mauvaises configurations courantes ciblées par les attaquants » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Cloud » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Utiliser un compte cloud de lab ou un émulateur local (LocalStack)."
        },
        {
          "h": "Étape 2",
          "p": "Auditer les identités, rôles et politiques IAM."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier les stockages publics et les groupes de sécurité."
        },
        {
          "h": "Étape 4",
          "p": "Analyser les journaux d'audit et les alertes."
        },
        {
          "h": "Étape 5",
          "p": "Proposer des corrections et une politique de moindre privilège."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Auditer une configuration cloud de laboratoire",
      "x": "# LAB AUTORISÉ UNIQUEMENT\naws s3 ls\naws iam list-users\naws iam list-attached-user-policies --user-name test\naws ec2 describe-security-groups\naws cloudtrail lookup-events --max-items 10\ncurl -s http://169.254.169.254/latest/meta-data/"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Auditer une configuration cloud de laboratoire",
      "x": "Points de contrôle :\n- Bucket public en lecture/écriture.\n- Rôle avec Action:* Resource:*.\n- Groupe de sécurité ouvert sur 0.0.0.0/0.\n- Absence de MFA sur les comptes admin.\n- Journaux d'audit désactivés."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 6.6 : Mauvaises configurations courantes ciblées par les attaquants"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Cloud », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Bucket public",
      "x": "<strong>Objectif :</strong> Un bucket S3 de lab est public. Lister son contenu et récupérer le flag.<br><strong>Contexte :</strong> Mauvaises configurations courantes ciblées par les attaquants (Cloud).<br><strong>Flag attendu (lab) :</strong> flag{m6_c6_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les buckets de lab."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le bucket public."
        },
        {
          "h": "Étape 3",
          "p": "Lister les objets."
        },
        {
          "h": "Étape 4",
          "p": "Télécharger le fichier flag."
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
      "title": "Write-up détaillé — CTF 1/5 (Bucket public)",
      "x": "CTF 1/5 — Bucket public\nChapitre : 6.6 — Mauvaises configurations courantes ciblées par les attaquants\nFlag : flag{m6_c6_ctf1}\n\nIndices :\n  1. Lister les buckets.\n  2. Tester l'accès anonyme.\n  3. Lire les objets.\n\nProcédure pas à pas :\n  1. Lister les buckets de lab.\n  2. Identifier le bucket public.\n  3. Lister les objets.\n  4. Télécharger le fichier flag.\n  5. Lire le flag.\n\nRemédiation : Bloquer l'accès public et activer les contrôles d'accès.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — IAM trop permissif",
      "x": "<strong>Objectif :</strong> Un rôle IAM de lab possède des droits excessifs. Identifier et corriger.<br><strong>Contexte :</strong> Mauvaises configurations courantes ciblées par les attaquants (Cloud).<br><strong>Flag attendu (lab) :</strong> flag{m6_c6_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les rôles."
        },
        {
          "h": "Étape 2",
          "p": "Afficher les politiques."
        },
        {
          "h": "Étape 3",
          "p": "Identifier Action:*"
        },
        {
          "h": "Étape 4",
          "p": "Proposer une politique restreinte."
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
      "title": "Write-up détaillé — CTF 2/5 (IAM trop permissif)",
      "x": "CTF 2/5 — IAM trop permissif\nChapitre : 6.6 — Mauvaises configurations courantes ciblées par les attaquants\nFlag : flag{m6_c6_ctf2}\n\nIndices :\n  1. Lister les politiques.\n  2. Chercher les wildcards.\n  3. Proposer une politique minimale.\n\nProcédure pas à pas :\n  1. Lister les rôles.\n  2. Afficher les politiques.\n  3. Identifier Action:*\n  4. Proposer une politique restreinte.\n  5. Récupérer le flag.\n\nRemédiation : Appliquer le moindre privilège et revoir les politiques régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — SSRF metadata",
      "x": "<strong>Objectif :</strong> Une application de lab permet d'accéder aux métadonnées cloud. L'exploiter en lab.<br><strong>Contexte :</strong> Mauvaises configurations courantes ciblées par les attaquants (Cloud).<br><strong>Flag attendu (lab) :</strong> flag{m6_c6_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier le paramètre URL."
        },
        {
          "h": "Étape 2",
          "p": "Tester 169.254.169.254."
        },
        {
          "h": "Étape 3",
          "p": "Lire les métadonnées."
        },
        {
          "h": "Étape 4",
          "p": "Extraire les identifiants de lab."
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
      "title": "Write-up détaillé — CTF 3/5 (SSRF metadata)",
      "x": "CTF 3/5 — SSRF metadata\nChapitre : 6.6 — Mauvaises configurations courantes ciblées par les attaquants\nFlag : flag{m6_c6_ctf3}\n\nIndices :\n  1. Tester l'URL de métadonnées.\n  2. Utiliser un proxy de lab.\n  3. Lire le rôle.\n\nProcédure pas à pas :\n  1. Identifier le paramètre URL.\n  2. Tester 169.254.169.254.\n  3. Lire les métadonnées.\n  4. Extraire les identifiants de lab.\n  5. Récupérer le flag.\n\nRemédiation : Bloquer l'accès aux métadonnées et utiliser IMDSv2.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Journaux cloud",
      "x": "<strong>Objectif :</strong> Analyser CloudTrail de lab et identifier une action suspecte.<br><strong>Contexte :</strong> Mauvaises configurations courantes ciblées par les attaquants (Cloud).<br><strong>Flag attendu (lab) :</strong> flag{m6_c6_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lire les événements."
        },
        {
          "h": "Étape 2",
          "p": "Filtrer les actions sensibles."
        },
        {
          "h": "Étape 3",
          "p": "Identifier l'acteur."
        },
        {
          "h": "Étape 4",
          "p": "Documenter l'incident."
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
      "title": "Write-up détaillé — CTF 4/5 (Journaux cloud)",
      "x": "CTF 4/5 — Journaux cloud\nChapitre : 6.6 — Mauvaises configurations courantes ciblées par les attaquants\nFlag : flag{m6_c6_ctf4}\n\nIndices :\n  1. Filtrer les événements.\n  2. Chercher les erreurs.\n  3. Identifier l'acteur.\n\nProcédure pas à pas :\n  1. Lire les événements.\n  2. Filtrer les actions sensibles.\n  3. Identifier l'acteur.\n  4. Documenter l'incident.\n  5. Récupérer le flag.\n\nRemédiation : Activer la journalisation centralisée et les alertes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Groupe de sécurité",
      "x": "<strong>Objectif :</strong> Un groupe de sécurité de lab est ouvert à Internet. Évaluer le risque.<br><strong>Contexte :</strong> Mauvaises configurations courantes ciblées par les attaquants (Cloud).<br><strong>Flag attendu (lab) :</strong> flag{m6_c6_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les groupes."
        },
        {
          "h": "Étape 2",
          "p": "Identifier les règles ouvertes."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier les ports sensibles."
        },
        {
          "h": "Étape 4",
          "p": "Proposer une restriction."
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
      "title": "Write-up détaillé — CTF 5/5 (Groupe de sécurité)",
      "x": "CTF 5/5 — Groupe de sécurité\nChapitre : 6.6 — Mauvaises configurations courantes ciblées par les attaquants\nFlag : flag{m6_c6_ctf5}\n\nIndices :\n  1. Décrire les groupes.\n  2. Chercher 0.0.0.0/0.\n  3. Identifier les ports.\n\nProcédure pas à pas :\n  1. Lister les groupes.\n  2. Identifier les règles ouvertes.\n  3. Vérifier les ports sensibles.\n  4. Proposer une restriction.\n  5. Récupérer le flag.\n\nRemédiation : Restreindre les sources et utiliser un bastion.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q6"
};
