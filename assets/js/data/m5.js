export default {
  "id": "m5",
  "num": 5,
  "title": "Fondamentaux Linux et ligne de commande",
  "short": "Linux",
  "icon": "🐧",
  "xp": 270,
  "duration": 70,
  "summary": "Cours en français enrichi sur « Fondamentaux Linux et ligne de commande » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
  "objectives": [
    "Comprendre et appliquer : Système de fichiers et structure des répertoires Linux.",
    "Comprendre et appliquer : Commandes Linux essentielles pour les tests de sécurité.",
    "Comprendre et appliquer : Gestion des utilisateurs, groupes et permissions.",
    "Comprendre et appliquer : Gestion des processus et des services.",
    "Comprendre et appliquer : Fondamentaux du scripting Bash.",
    "Comprendre et appliquer : Aperçu des binaires living-off-the-land (LOLbins)."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 5 — Fondamentaux Linux et ligne de commande</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 70 min · XP : 270. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "5.1 Système de fichiers et structure des répertoires Linux"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>système de fichiers et structure des répertoires linux</strong> dans le cadre du module « Fondamentaux Linux et ligne de commande ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Système de fichiers et structure des répertoires Linux », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Système de fichiers et structure des répertoires Linux.",
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
      "x": "5.2 Commandes Linux essentielles pour les tests de sécurité"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>commandes linux essentielles pour les tests de sécurité</strong> dans le cadre du module « Fondamentaux Linux et ligne de commande ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Commandes Linux essentielles pour les tests de sécurité », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Commandes Linux essentielles pour les tests de sécurité.",
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
      "x": "5.3 Gestion des utilisateurs, groupes et permissions"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>gestion des utilisateurs, groupes et permissions</strong> dans le cadre du module « Fondamentaux Linux et ligne de commande ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Gestion des utilisateurs, groupes et permissions », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Gestion des utilisateurs, groupes et permissions.",
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
      "x": "5.4 Gestion des processus et des services"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>gestion des processus et des services</strong> dans le cadre du module « Fondamentaux Linux et ligne de commande ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Gestion des processus et des services », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Gestion des processus et des services.",
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
      "x": "5.5 Fondamentaux du scripting Bash"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>fondamentaux du scripting bash</strong> dans le cadre du module « Fondamentaux Linux et ligne de commande ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Fondamentaux du scripting Bash », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Fondamentaux du scripting Bash.",
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
      "x": "5.6 Aperçu des binaires living-off-the-land (LOLbins)"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>aperçu des binaires living-off-the-land (lolbins)</strong> dans le cadre du module « Fondamentaux Linux et ligne de commande ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Aperçu des binaires living-off-the-land (LOLbins) », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Aperçu des binaires living-off-the-land (LOLbins).",
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
      "x": "Exercices — Chapitre 5.1 : Système de fichiers et structure des répertoires Linux"
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
          "Exercice 1 (concept) — Système de fichiers et structure des répertoires Linux",
          "facile",
          "(concept) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Système de fichiers et structure des répertoires Linux",
          "facile",
          "(analyse) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Système de fichiers et structure des répertoires Linux",
          "facile",
          "(application) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Système de fichiers et structure des répertoires Linux",
          "intermédiaire",
          "(défense) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Système de fichiers et structure des répertoires Linux",
          "intermédiaire",
          "(scénario) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Système de fichiers et structure des répertoires Linux",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Système de fichiers et structure des répertoires Linux",
          "intermédiaire",
          "(méthode) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Système de fichiers et structure des répertoires Linux",
          "avancé",
          "(risque) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Système de fichiers et structure des répertoires Linux",
          "avancé",
          "(contrôle) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Système de fichiers et structure des répertoires Linux",
          "avancé",
          "(synthèse) Dans le contexte de « Système de fichiers et structure des répertoires Linux » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Système de fichiers et structure des répertoires Linux », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 5.2 : Commandes Linux essentielles pour les tests de sécurité"
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
          "Exercice 1 (concept) — Commandes Linux essentielles pour les tests de sécurité",
          "facile",
          "(concept) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Commandes Linux essentielles pour les tests de sécurité",
          "facile",
          "(analyse) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Commandes Linux essentielles pour les tests de sécurité",
          "facile",
          "(application) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Commandes Linux essentielles pour les tests de sécurité",
          "intermédiaire",
          "(défense) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Commandes Linux essentielles pour les tests de sécurité",
          "intermédiaire",
          "(scénario) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Commandes Linux essentielles pour les tests de sécurité",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Commandes Linux essentielles pour les tests de sécurité",
          "intermédiaire",
          "(méthode) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Commandes Linux essentielles pour les tests de sécurité",
          "avancé",
          "(risque) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Commandes Linux essentielles pour les tests de sécurité",
          "avancé",
          "(contrôle) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Commandes Linux essentielles pour les tests de sécurité",
          "avancé",
          "(synthèse) Dans le contexte de « Commandes Linux essentielles pour les tests de sécurité » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Commandes Linux essentielles pour les tests de sécurité », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 5.3 : Gestion des utilisateurs, groupes et permissions"
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
          "Exercice 1 (concept) — Gestion des utilisateurs, groupes et permissions",
          "facile",
          "(concept) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Gestion des utilisateurs, groupes et permissions",
          "facile",
          "(analyse) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Gestion des utilisateurs, groupes et permissions",
          "facile",
          "(application) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Gestion des utilisateurs, groupes et permissions",
          "intermédiaire",
          "(défense) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Gestion des utilisateurs, groupes et permissions",
          "intermédiaire",
          "(scénario) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Gestion des utilisateurs, groupes et permissions",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Gestion des utilisateurs, groupes et permissions",
          "intermédiaire",
          "(méthode) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Gestion des utilisateurs, groupes et permissions",
          "avancé",
          "(risque) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Gestion des utilisateurs, groupes et permissions",
          "avancé",
          "(contrôle) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Gestion des utilisateurs, groupes et permissions",
          "avancé",
          "(synthèse) Dans le contexte de « Gestion des utilisateurs, groupes et permissions » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des utilisateurs, groupes et permissions », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 5.4 : Gestion des processus et des services"
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
          "Exercice 1 (concept) — Gestion des processus et des services",
          "facile",
          "(concept) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Gestion des processus et des services",
          "facile",
          "(analyse) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Gestion des processus et des services",
          "facile",
          "(application) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Gestion des processus et des services",
          "intermédiaire",
          "(défense) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Gestion des processus et des services",
          "intermédiaire",
          "(scénario) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Gestion des processus et des services",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Gestion des processus et des services",
          "intermédiaire",
          "(méthode) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Gestion des processus et des services",
          "avancé",
          "(risque) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Gestion des processus et des services",
          "avancé",
          "(contrôle) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Gestion des processus et des services",
          "avancé",
          "(synthèse) Dans le contexte de « Gestion des processus et des services » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Gestion des processus et des services », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 5.5 : Fondamentaux du scripting Bash"
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
          "Exercice 1 (concept) — Fondamentaux du scripting Bash",
          "facile",
          "(concept) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Fondamentaux du scripting Bash",
          "facile",
          "(analyse) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Fondamentaux du scripting Bash",
          "facile",
          "(application) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Fondamentaux du scripting Bash",
          "intermédiaire",
          "(défense) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Fondamentaux du scripting Bash",
          "intermédiaire",
          "(scénario) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Fondamentaux du scripting Bash",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Fondamentaux du scripting Bash",
          "intermédiaire",
          "(méthode) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Fondamentaux du scripting Bash",
          "avancé",
          "(risque) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Fondamentaux du scripting Bash",
          "avancé",
          "(contrôle) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Fondamentaux du scripting Bash",
          "avancé",
          "(synthèse) Dans le contexte de « Fondamentaux du scripting Bash » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Fondamentaux du scripting Bash », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 5.6 : Aperçu des binaires living-off-the-land (LOLbins)"
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
          "Exercice 1 (concept) — Aperçu des binaires living-off-the-land (LOLbins)",
          "facile",
          "(concept) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Aperçu des binaires living-off-the-land (LOLbins)",
          "facile",
          "(analyse) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Aperçu des binaires living-off-the-land (LOLbins)",
          "facile",
          "(application) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Aperçu des binaires living-off-the-land (LOLbins)",
          "intermédiaire",
          "(défense) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Aperçu des binaires living-off-the-land (LOLbins)",
          "intermédiaire",
          "(scénario) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Aperçu des binaires living-off-the-land (LOLbins)",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Aperçu des binaires living-off-the-land (LOLbins)",
          "intermédiaire",
          "(méthode) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Aperçu des binaires living-off-the-land (LOLbins)",
          "avancé",
          "(risque) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Aperçu des binaires living-off-the-land (LOLbins)",
          "avancé",
          "(contrôle) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Aperçu des binaires living-off-the-land (LOLbins)",
          "avancé",
          "(synthèse) Dans le contexte de « Aperçu des binaires living-off-the-land (LOLbins) » (module 5 : Fondamentaux Linux et ligne de commande), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Aperçu des binaires living-off-the-land (LOLbins) », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Fondamentaux Linux et ligne de commande » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
      "x": "Lab guidé pas à pas — Chapitre 5.1 : Système de fichiers et structure des répertoires Linux"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Linux",
      "x": "Mettre en pratique « Système de fichiers et structure des répertoires Linux » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Linux » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier l'utilisateur courant, les groupes et la version du noyau."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les binaires SUID/SGID et les capacités spéciales."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier les droits sudo et les tâches cron."
        },
        {
          "h": "Étape 4",
          "p": "Inspecter les services et fichiers modifiables."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les chemins d'escalade et les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Rechercher des chemins d'escalade de privilèges sur Linux",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nid\nuname -a\nsudo -l\nfind / -perm -4000 -type f 2>/dev/null\ngetcap -r / 2>/dev/null\ncrontab -l\nls -la /etc/cron*\nfind / -writable -type f 2>/dev/null | head -20"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Rechercher des chemins d'escalade de privilèges sur Linux",
      "x": "Points de contrôle :\n- Binaire SUID appartenant à root et exécutable par tous.\n- Règle sudo autorisant une commande sans mot de passe.\n- Script cron modifiable par l'utilisateur.\n- Capacité cap_setuid ou cap_net_raw.\n- Noyau ancien avec exploit public (lab uniquement)."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 5.1 : Système de fichiers et structure des répertoires Linux"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Linux », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Binaire SUID",
      "x": "<strong>Objectif :</strong> Un binaire SUID de lab permet d'obtenir un shell root. Le trouver et l'exploiter.<br><strong>Contexte :</strong> Système de fichiers et structure des répertoires Linux (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c1_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Rechercher les SUID."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le binaire inhabituel."
        },
        {
          "h": "Étape 3",
          "p": "Consulter GTFOBins."
        },
        {
          "h": "Étape 4",
          "p": "Exécuter la commande d'escalade."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag dans /root."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Binaire SUID)",
      "x": "CTF 1/5 — Binaire SUID\nChapitre : 5.1 — Système de fichiers et structure des répertoires Linux\nFlag : flag{m5_c1_ctf1}\n\nIndices :\n  1. Chercher les binaires SUID.\n  2. Comparer à GTFOBins.\n  3. Tester en lab.\n\nProcédure pas à pas :\n  1. Rechercher les SUID.\n  2. Identifier le binaire inhabituel.\n  3. Consulter GTFOBins.\n  4. Exécuter la commande d'escalade.\n  5. Lire le flag dans /root.\n\nRemédiation : Retirer le bit SUID inutile et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Sudo mal configuré",
      "x": "<strong>Objectif :</strong> Une règle sudo de lab autorise une commande dangereuse. Identifier et exploiter.<br><strong>Contexte :</strong> Système de fichiers et structure des répertoires Linux (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c1_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lancer sudo -l."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la commande autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Trouver une option d'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Obtenir un shell root."
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
      "title": "Write-up détaillé — CTF 2/5 (Sudo mal configuré)",
      "x": "CTF 2/5 — Sudo mal configuré\nChapitre : 5.1 — Système de fichiers et structure des répertoires Linux\nFlag : flag{m5_c1_ctf2}\n\nIndices :\n  1. Afficher sudo -l.\n  2. Chercher les commandes autorisées.\n  3. Vérifier les options.\n\nProcédure pas à pas :\n  1. Lancer sudo -l.\n  2. Identifier la commande autorisée.\n  3. Trouver une option d'exécution.\n  4. Obtenir un shell root.\n  5. Lire le flag.\n\nRemédiation : Restreindre les commandes sudo et éviter les wildcards dangereux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Cron modifiable",
      "x": "<strong>Objectif :</strong> Un script cron de lab est modifiable par l'utilisateur. Exploiter la persistance.<br><strong>Contexte :</strong> Système de fichiers et structure des répertoires Linux (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c1_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les tâches cron."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le script modifiable."
        },
        {
          "h": "Étape 3",
          "p": "Ajouter une commande de test."
        },
        {
          "h": "Étape 4",
          "p": "Attendre l'exécution."
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
      "title": "Write-up détaillé — CTF 3/5 (Cron modifiable)",
      "x": "CTF 3/5 — Cron modifiable\nChapitre : 5.1 — Système de fichiers et structure des répertoires Linux\nFlag : flag{m5_c1_ctf3}\n\nIndices :\n  1. Lister les cron.\n  2. Vérifier les permissions.\n  3. Attendre l'exécution.\n\nProcédure pas à pas :\n  1. Lister les tâches cron.\n  2. Identifier le script modifiable.\n  3. Ajouter une commande de test.\n  4. Attendre l'exécution.\n  5. Lire le flag.\n\nRemédiation : Restreindre les permissions des scripts cron et surveiller les modifications.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Capacités",
      "x": "<strong>Objectif :</strong> Un binaire de lab possède une capacité dangereuse. L'identifier et l'exploiter.<br><strong>Contexte :</strong> Système de fichiers et structure des répertoires Linux (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c1_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les capacités."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le binaire."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier la capacité."
        },
        {
          "h": "Étape 4",
          "p": "Exploiter setuid."
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
      "title": "Write-up détaillé — CTF 4/5 (Capacités)",
      "x": "CTF 4/5 — Capacités\nChapitre : 5.1 — Système de fichiers et structure des répertoires Linux\nFlag : flag{m5_c1_ctf4}\n\nIndices :\n  1. Utiliser getcap.\n  2. Chercher cap_setuid.\n  3. Tester en lab.\n\nProcédure pas à pas :\n  1. Lister les capacités.\n  2. Identifier le binaire.\n  3. Vérifier la capacité.\n  4. Exploiter setuid.\n  5. Lire le flag.\n\nRemédiation : Retirer les capacités non nécessaires et auditer régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Noyau vulnérable",
      "x": "<strong>Objectif :</strong> La version du noyau de lab est obsolète. Évaluer le risque et le corriger.<br><strong>Contexte :</strong> Système de fichiers et structure des répertoires Linux (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c1_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Relever la version."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la fin de support."
        },
        {
          "h": "Étape 3",
          "p": "Rechercher les CVE connues."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer l'exploitabilité."
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
      "title": "Write-up détaillé — CTF 5/5 (Noyau vulnérable)",
      "x": "CTF 5/5 — Noyau vulnérable\nChapitre : 5.1 — Système de fichiers et structure des répertoires Linux\nFlag : flag{m5_c1_ctf5}\n\nIndices :\n  1. Utiliser uname -a.\n  2. Comparer aux versions supportées.\n  3. Chercher les CVE.\n\nProcédure pas à pas :\n  1. Relever la version.\n  2. Identifier la fin de support.\n  3. Rechercher les CVE connues.\n  4. Évaluer l'exploitabilité.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Appliquer les mises à jour de sécurité et surveiller les avis éditeurs.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 5.2 : Commandes Linux essentielles pour les tests de sécurité"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Linux",
      "x": "Mettre en pratique « Commandes Linux essentielles pour les tests de sécurité » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Linux » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier l'utilisateur courant, les groupes et la version du noyau."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les binaires SUID/SGID et les capacités spéciales."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier les droits sudo et les tâches cron."
        },
        {
          "h": "Étape 4",
          "p": "Inspecter les services et fichiers modifiables."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les chemins d'escalade et les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Rechercher des chemins d'escalade de privilèges sur Linux",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nid\nuname -a\nsudo -l\nfind / -perm -4000 -type f 2>/dev/null\ngetcap -r / 2>/dev/null\ncrontab -l\nls -la /etc/cron*\nfind / -writable -type f 2>/dev/null | head -20"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Rechercher des chemins d'escalade de privilèges sur Linux",
      "x": "Points de contrôle :\n- Binaire SUID appartenant à root et exécutable par tous.\n- Règle sudo autorisant une commande sans mot de passe.\n- Script cron modifiable par l'utilisateur.\n- Capacité cap_setuid ou cap_net_raw.\n- Noyau ancien avec exploit public (lab uniquement)."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 5.2 : Commandes Linux essentielles pour les tests de sécurité"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Linux », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Binaire SUID",
      "x": "<strong>Objectif :</strong> Un binaire SUID de lab permet d'obtenir un shell root. Le trouver et l'exploiter.<br><strong>Contexte :</strong> Commandes Linux essentielles pour les tests de sécurité (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c2_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Rechercher les SUID."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le binaire inhabituel."
        },
        {
          "h": "Étape 3",
          "p": "Consulter GTFOBins."
        },
        {
          "h": "Étape 4",
          "p": "Exécuter la commande d'escalade."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag dans /root."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Binaire SUID)",
      "x": "CTF 1/5 — Binaire SUID\nChapitre : 5.2 — Commandes Linux essentielles pour les tests de sécurité\nFlag : flag{m5_c2_ctf1}\n\nIndices :\n  1. Chercher les binaires SUID.\n  2. Comparer à GTFOBins.\n  3. Tester en lab.\n\nProcédure pas à pas :\n  1. Rechercher les SUID.\n  2. Identifier le binaire inhabituel.\n  3. Consulter GTFOBins.\n  4. Exécuter la commande d'escalade.\n  5. Lire le flag dans /root.\n\nRemédiation : Retirer le bit SUID inutile et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Sudo mal configuré",
      "x": "<strong>Objectif :</strong> Une règle sudo de lab autorise une commande dangereuse. Identifier et exploiter.<br><strong>Contexte :</strong> Commandes Linux essentielles pour les tests de sécurité (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c2_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lancer sudo -l."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la commande autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Trouver une option d'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Obtenir un shell root."
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
      "title": "Write-up détaillé — CTF 2/5 (Sudo mal configuré)",
      "x": "CTF 2/5 — Sudo mal configuré\nChapitre : 5.2 — Commandes Linux essentielles pour les tests de sécurité\nFlag : flag{m5_c2_ctf2}\n\nIndices :\n  1. Afficher sudo -l.\n  2. Chercher les commandes autorisées.\n  3. Vérifier les options.\n\nProcédure pas à pas :\n  1. Lancer sudo -l.\n  2. Identifier la commande autorisée.\n  3. Trouver une option d'exécution.\n  4. Obtenir un shell root.\n  5. Lire le flag.\n\nRemédiation : Restreindre les commandes sudo et éviter les wildcards dangereux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Cron modifiable",
      "x": "<strong>Objectif :</strong> Un script cron de lab est modifiable par l'utilisateur. Exploiter la persistance.<br><strong>Contexte :</strong> Commandes Linux essentielles pour les tests de sécurité (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c2_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les tâches cron."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le script modifiable."
        },
        {
          "h": "Étape 3",
          "p": "Ajouter une commande de test."
        },
        {
          "h": "Étape 4",
          "p": "Attendre l'exécution."
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
      "title": "Write-up détaillé — CTF 3/5 (Cron modifiable)",
      "x": "CTF 3/5 — Cron modifiable\nChapitre : 5.2 — Commandes Linux essentielles pour les tests de sécurité\nFlag : flag{m5_c2_ctf3}\n\nIndices :\n  1. Lister les cron.\n  2. Vérifier les permissions.\n  3. Attendre l'exécution.\n\nProcédure pas à pas :\n  1. Lister les tâches cron.\n  2. Identifier le script modifiable.\n  3. Ajouter une commande de test.\n  4. Attendre l'exécution.\n  5. Lire le flag.\n\nRemédiation : Restreindre les permissions des scripts cron et surveiller les modifications.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Capacités",
      "x": "<strong>Objectif :</strong> Un binaire de lab possède une capacité dangereuse. L'identifier et l'exploiter.<br><strong>Contexte :</strong> Commandes Linux essentielles pour les tests de sécurité (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c2_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les capacités."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le binaire."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier la capacité."
        },
        {
          "h": "Étape 4",
          "p": "Exploiter setuid."
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
      "title": "Write-up détaillé — CTF 4/5 (Capacités)",
      "x": "CTF 4/5 — Capacités\nChapitre : 5.2 — Commandes Linux essentielles pour les tests de sécurité\nFlag : flag{m5_c2_ctf4}\n\nIndices :\n  1. Utiliser getcap.\n  2. Chercher cap_setuid.\n  3. Tester en lab.\n\nProcédure pas à pas :\n  1. Lister les capacités.\n  2. Identifier le binaire.\n  3. Vérifier la capacité.\n  4. Exploiter setuid.\n  5. Lire le flag.\n\nRemédiation : Retirer les capacités non nécessaires et auditer régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Noyau vulnérable",
      "x": "<strong>Objectif :</strong> La version du noyau de lab est obsolète. Évaluer le risque et le corriger.<br><strong>Contexte :</strong> Commandes Linux essentielles pour les tests de sécurité (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c2_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Relever la version."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la fin de support."
        },
        {
          "h": "Étape 3",
          "p": "Rechercher les CVE connues."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer l'exploitabilité."
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
      "title": "Write-up détaillé — CTF 5/5 (Noyau vulnérable)",
      "x": "CTF 5/5 — Noyau vulnérable\nChapitre : 5.2 — Commandes Linux essentielles pour les tests de sécurité\nFlag : flag{m5_c2_ctf5}\n\nIndices :\n  1. Utiliser uname -a.\n  2. Comparer aux versions supportées.\n  3. Chercher les CVE.\n\nProcédure pas à pas :\n  1. Relever la version.\n  2. Identifier la fin de support.\n  3. Rechercher les CVE connues.\n  4. Évaluer l'exploitabilité.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Appliquer les mises à jour de sécurité et surveiller les avis éditeurs.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 5.3 : Gestion des utilisateurs, groupes et permissions"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Windows",
      "x": "Mettre en pratique « Gestion des utilisateurs, groupes et permissions » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Windows » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 5.3 : Gestion des utilisateurs, groupes et permissions"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Windows », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Identifiant dans le registre",
      "x": "<strong>Objectif :</strong> Un lab Windows stocke un identifiant dans une clé de registre. Le retrouver.<br><strong>Contexte :</strong> Gestion des utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m5_c3_ctf1}"
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
      "x": "CTF 1/5 — Identifiant dans le registre\nChapitre : 5.3 — Gestion des utilisateurs, groupes et permissions\nFlag : flag{m5_c3_ctf1}\n\nIndices :\n  1. Chercher les clés Run et les clés applicatives.\n  2. Utiliser reg query.\n  3. Ne pas exposer le secret réel.\n\nProcédure pas à pas :\n  1. Ouvrir une session de lab.\n  2. Rechercher les clés de registre suspectes.\n  3. Identifier la clé contenant le mot de passe.\n  4. Lire la valeur.\n  5. Récupérer le flag associé.\n\nRemédiation : Ne jamais stocker de secrets en clair dans le registre ; utiliser un coffre-fort.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Droits excessifs",
      "x": "<strong>Objectif :</strong> Un compte de lab appartient à un groupe trop privilégié. Identifier le risque.<br><strong>Contexte :</strong> Gestion des utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m5_c3_ctf2}"
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
      "x": "CTF 2/5 — Droits excessifs\nChapitre : 5.3 — Gestion des utilisateurs, groupes et permissions\nFlag : flag{m5_c3_ctf2}\n\nIndices :\n  1. Lister les groupes.\n  2. Vérifier les membres.\n  3. Comparer aux besoins.\n\nProcédure pas à pas :\n  1. Énumérer les groupes locaux.\n  2. Identifier le compte de test.\n  3. Vérifier son appartenance.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le rapport d'audit.\n\nRemédiation : Appliquer le moindre privilège et revoir régulièrement les adhésions.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Service non cité",
      "x": "<strong>Objectif :</strong> Un service Windows de lab utilise un chemin non cité. Expliquer le risque.<br><strong>Contexte :</strong> Gestion des utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m5_c3_ctf3}"
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
      "x": "CTF 3/5 — Service non cité\nChapitre : 5.3 — Gestion des utilisateurs, groupes et permissions\nFlag : flag{m5_c3_ctf3}\n\nIndices :\n  1. Utiliser sc qc.\n  2. Chercher les espaces dans le chemin.\n  3. Vérifier les permissions du dossier.\n\nProcédure pas à pas :\n  1. Lister les services.\n  2. Identifier le service vulnérable.\n  3. Afficher sa configuration.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le dossier de lab.\n\nRemédiation : Citer les chemins de service et restreindre les permissions des répertoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Tâche planifiée",
      "x": "<strong>Objectif :</strong> Une tâche planifiée de lab exécute un script modifiable. Identifier la persistance.<br><strong>Contexte :</strong> Gestion des utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m5_c3_ctf4}"
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
      "x": "CTF 4/5 — Tâche planifiée\nChapitre : 5.3 — Gestion des utilisateurs, groupes et permissions\nFlag : flag{m5_c3_ctf4}\n\nIndices :\n  1. Lister les tâches planifiées.\n  2. Vérifier les scripts exécutés.\n  3. Contrôler les permissions.\n\nProcédure pas à pas :\n  1. Ouvrir le planificateur de tâches.\n  2. Lister les tâches non standard.\n  3. Identifier le script utilisé.\n  4. Vérifier les droits d'écriture.\n  5. Récupérer le flag dans le script.\n\nRemédiation : Protéger les scripts et restreindre la création de tâches planifiées.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Politique de mot de passe",
      "x": "<strong>Objectif :</strong> La politique de mot de passe d'un lab est trop faible. Prouver le risque.<br><strong>Contexte :</strong> Gestion des utilisateurs, groupes et permissions (Système Windows).<br><strong>Flag attendu (lab) :</strong> flag{m5_c3_ctf5}"
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
      "x": "CTF 5/5 — Politique de mot de passe\nChapitre : 5.3 — Gestion des utilisateurs, groupes et permissions\nFlag : flag{m5_c3_ctf5}\n\nIndices :\n  1. Utiliser net accounts.\n  2. Tester un dictionnaire de lab.\n  3. Mesurer le temps de cassage.\n\nProcédure pas à pas :\n  1. Afficher la politique.\n  2. Identifier la longueur et la complexité.\n  3. Tester un petit dictionnaire.\n  4. Constater la faiblesse.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Imposer une longueur minimale, la complexité et une protection contre les mots de passe compromis.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 5.4 : Gestion des processus et des services"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Scan réseau",
      "x": "Mettre en pratique « Gestion des processus et des services » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Scan réseau » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 5.4 : Gestion des processus et des services"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Scan réseau », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Port caché",
      "x": "<strong>Objectif :</strong> Un service de lab écoute sur un port non standard. Le découvrir et récupérer le flag.<br><strong>Contexte :</strong> Gestion des processus et des services (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m5_c4_ctf1}"
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
      "x": "CTF 1/5 — Port caché\nChapitre : 5.4 — Gestion des processus et des services\nFlag : flag{m5_c4_ctf1}\n\nIndices :\n  1. Utiliser un scan complet des ports TCP.\n  2. Vérifier les ports hauts.\n  3. Lire la bannière du service.\n\nProcédure pas à pas :\n  1. Scanner tous les ports TCP de la cible de lab.\n  2. Repérer le port ouvert inhabituel.\n  3. Se connecter avec netcat.\n  4. Lire la bannière et le message.\n  5. Récupérer le flag affiché.\n\nRemédiation : Fermer les ports non nécessaires et appliquer un filtrage réseau.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Version vulnérable",
      "x": "<strong>Objectif :</strong> Identifier la version d'un service de lab et associer un risque connu.<br><strong>Contexte :</strong> Gestion des processus et des services (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m5_c4_ctf2}"
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
      "x": "CTF 2/5 — Version vulnérable\nChapitre : 5.4 — Gestion des processus et des services\nFlag : flag{m5_c4_ctf2}\n\nIndices :\n  1. Utiliser la détection de version.\n  2. Comparer à une base CVE.\n  3. Ne pas exploiter hors lab.\n\nProcédure pas à pas :\n  1. Lancer nmap -sV sur la cible.\n  2. Relever la version du service.\n  3. Rechercher les CVE correspondantes.\n  4. Évaluer la pertinence dans le lab.\n  5. Récupérer le flag dans le fichier de version.\n\nRemédiation : Mettre à jour le service et masquer la version dans les bannières.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Hôte oublié",
      "x": "<strong>Objectif :</strong> Un hôte du réseau de lab ne répond pas au ping mais expose un service. Le trouver.<br><strong>Contexte :</strong> Gestion des processus et des services (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m5_c4_ctf3}"
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
      "x": "CTF 3/5 — Hôte oublié\nChapitre : 5.4 — Gestion des processus et des services\nFlag : flag{m5_c4_ctf3}\n\nIndices :\n  1. Utiliser -Pn.\n  2. Scanner la plage en TCP.\n  3. Vérifier les réponses SYN.\n\nProcédure pas à pas :\n  1. Scanner la plage avec nmap -sn.\n  2. Constater l'absence de l'hôte.\n  3. Relancer avec -Pn sur la plage.\n  4. Identifier l'hôte qui répond en TCP.\n  5. Accéder au service et récupérer le flag.\n\nRemédiation : Inventorier les actifs et surveiller les nouveaux hôtes.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Filtrage contourné",
      "x": "<strong>Objectif :</strong> Un pare-feu de lab bloque certains scans. Identifier une méthode de découverte autorisée.<br><strong>Contexte :</strong> Gestion des processus et des services (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m5_c4_ctf4}"
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
      "x": "CTF 4/5 — Filtrage contourné\nChapitre : 5.4 — Gestion des processus et des services\nFlag : flag{m5_c4_ctf4}\n\nIndices :\n  1. Tester différents types de scan.\n  2. Comparer les réponses.\n  3. Rester dans le périmètre.\n\nProcédure pas à pas :\n  1. Tester un scan SYN.\n  2. Tester un scan connect.\n  3. Comparer les résultats.\n  4. Identifier les ports filtrés.\n  5. Récupérer le flag dans la page de statut du lab.\n\nRemédiation : Configurer le pare-feu pour journaliser et bloquer les scans non autorisés.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation des résultats",
      "x": "<strong>Objectif :</strong> À partir d'un scan de lab, classer les services par risque.<br><strong>Contexte :</strong> Gestion des processus et des services (Scan réseau).<br><strong>Flag attendu (lab) :</strong> flag{m5_c4_ctf5}"
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
      "x": "CTF 5/5 — Priorisation des résultats\nChapitre : 5.4 — Gestion des processus et des services\nFlag : flag{m5_c4_ctf5}\n\nIndices :\n  1. Évaluer l'exposition.\n  2. Vérifier les versions.\n  3. Pondérer par l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les services ouverts.\n  2. Identifier les services sensibles.\n  3. Vérifier les versions et configurations.\n  4. Classer par criticité.\n  5. Récupérer le flag dans le rapport de lab.\n\nRemédiation : Utiliser une matrice de risque et un processus de remédiation priorisé.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 5.5 : Fondamentaux du scripting Bash"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Linux",
      "x": "Mettre en pratique « Fondamentaux du scripting Bash » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Linux » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier l'utilisateur courant, les groupes et la version du noyau."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les binaires SUID/SGID et les capacités spéciales."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier les droits sudo et les tâches cron."
        },
        {
          "h": "Étape 4",
          "p": "Inspecter les services et fichiers modifiables."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les chemins d'escalade et les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Rechercher des chemins d'escalade de privilèges sur Linux",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nid\nuname -a\nsudo -l\nfind / -perm -4000 -type f 2>/dev/null\ngetcap -r / 2>/dev/null\ncrontab -l\nls -la /etc/cron*\nfind / -writable -type f 2>/dev/null | head -20"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Rechercher des chemins d'escalade de privilèges sur Linux",
      "x": "Points de contrôle :\n- Binaire SUID appartenant à root et exécutable par tous.\n- Règle sudo autorisant une commande sans mot de passe.\n- Script cron modifiable par l'utilisateur.\n- Capacité cap_setuid ou cap_net_raw.\n- Noyau ancien avec exploit public (lab uniquement)."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 5.5 : Fondamentaux du scripting Bash"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Linux », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Binaire SUID",
      "x": "<strong>Objectif :</strong> Un binaire SUID de lab permet d'obtenir un shell root. Le trouver et l'exploiter.<br><strong>Contexte :</strong> Fondamentaux du scripting Bash (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c5_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Rechercher les SUID."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le binaire inhabituel."
        },
        {
          "h": "Étape 3",
          "p": "Consulter GTFOBins."
        },
        {
          "h": "Étape 4",
          "p": "Exécuter la commande d'escalade."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag dans /root."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Binaire SUID)",
      "x": "CTF 1/5 — Binaire SUID\nChapitre : 5.5 — Fondamentaux du scripting Bash\nFlag : flag{m5_c5_ctf1}\n\nIndices :\n  1. Chercher les binaires SUID.\n  2. Comparer à GTFOBins.\n  3. Tester en lab.\n\nProcédure pas à pas :\n  1. Rechercher les SUID.\n  2. Identifier le binaire inhabituel.\n  3. Consulter GTFOBins.\n  4. Exécuter la commande d'escalade.\n  5. Lire le flag dans /root.\n\nRemédiation : Retirer le bit SUID inutile et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Sudo mal configuré",
      "x": "<strong>Objectif :</strong> Une règle sudo de lab autorise une commande dangereuse. Identifier et exploiter.<br><strong>Contexte :</strong> Fondamentaux du scripting Bash (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c5_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lancer sudo -l."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la commande autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Trouver une option d'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Obtenir un shell root."
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
      "title": "Write-up détaillé — CTF 2/5 (Sudo mal configuré)",
      "x": "CTF 2/5 — Sudo mal configuré\nChapitre : 5.5 — Fondamentaux du scripting Bash\nFlag : flag{m5_c5_ctf2}\n\nIndices :\n  1. Afficher sudo -l.\n  2. Chercher les commandes autorisées.\n  3. Vérifier les options.\n\nProcédure pas à pas :\n  1. Lancer sudo -l.\n  2. Identifier la commande autorisée.\n  3. Trouver une option d'exécution.\n  4. Obtenir un shell root.\n  5. Lire le flag.\n\nRemédiation : Restreindre les commandes sudo et éviter les wildcards dangereux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Cron modifiable",
      "x": "<strong>Objectif :</strong> Un script cron de lab est modifiable par l'utilisateur. Exploiter la persistance.<br><strong>Contexte :</strong> Fondamentaux du scripting Bash (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c5_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les tâches cron."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le script modifiable."
        },
        {
          "h": "Étape 3",
          "p": "Ajouter une commande de test."
        },
        {
          "h": "Étape 4",
          "p": "Attendre l'exécution."
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
      "title": "Write-up détaillé — CTF 3/5 (Cron modifiable)",
      "x": "CTF 3/5 — Cron modifiable\nChapitre : 5.5 — Fondamentaux du scripting Bash\nFlag : flag{m5_c5_ctf3}\n\nIndices :\n  1. Lister les cron.\n  2. Vérifier les permissions.\n  3. Attendre l'exécution.\n\nProcédure pas à pas :\n  1. Lister les tâches cron.\n  2. Identifier le script modifiable.\n  3. Ajouter une commande de test.\n  4. Attendre l'exécution.\n  5. Lire le flag.\n\nRemédiation : Restreindre les permissions des scripts cron et surveiller les modifications.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Capacités",
      "x": "<strong>Objectif :</strong> Un binaire de lab possède une capacité dangereuse. L'identifier et l'exploiter.<br><strong>Contexte :</strong> Fondamentaux du scripting Bash (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c5_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les capacités."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le binaire."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier la capacité."
        },
        {
          "h": "Étape 4",
          "p": "Exploiter setuid."
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
      "title": "Write-up détaillé — CTF 4/5 (Capacités)",
      "x": "CTF 4/5 — Capacités\nChapitre : 5.5 — Fondamentaux du scripting Bash\nFlag : flag{m5_c5_ctf4}\n\nIndices :\n  1. Utiliser getcap.\n  2. Chercher cap_setuid.\n  3. Tester en lab.\n\nProcédure pas à pas :\n  1. Lister les capacités.\n  2. Identifier le binaire.\n  3. Vérifier la capacité.\n  4. Exploiter setuid.\n  5. Lire le flag.\n\nRemédiation : Retirer les capacités non nécessaires et auditer régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Noyau vulnérable",
      "x": "<strong>Objectif :</strong> La version du noyau de lab est obsolète. Évaluer le risque et le corriger.<br><strong>Contexte :</strong> Fondamentaux du scripting Bash (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c5_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Relever la version."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la fin de support."
        },
        {
          "h": "Étape 3",
          "p": "Rechercher les CVE connues."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer l'exploitabilité."
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
      "title": "Write-up détaillé — CTF 5/5 (Noyau vulnérable)",
      "x": "CTF 5/5 — Noyau vulnérable\nChapitre : 5.5 — Fondamentaux du scripting Bash\nFlag : flag{m5_c5_ctf5}\n\nIndices :\n  1. Utiliser uname -a.\n  2. Comparer aux versions supportées.\n  3. Chercher les CVE.\n\nProcédure pas à pas :\n  1. Relever la version.\n  2. Identifier la fin de support.\n  3. Rechercher les CVE connues.\n  4. Évaluer l'exploitabilité.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Appliquer les mises à jour de sécurité et surveiller les avis éditeurs.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 5.6 : Aperçu des binaires living-off-the-land (LOLbins)"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Système Linux",
      "x": "Mettre en pratique « Aperçu des binaires living-off-the-land (LOLbins) » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Système Linux » et doit être exécuté uniquement sur des cibles de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Identifier l'utilisateur courant, les groupes et la version du noyau."
        },
        {
          "h": "Étape 2",
          "p": "Rechercher les binaires SUID/SGID et les capacités spéciales."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier les droits sudo et les tâches cron."
        },
        {
          "h": "Étape 4",
          "p": "Inspecter les services et fichiers modifiables."
        },
        {
          "h": "Étape 5",
          "p": "Documenter les chemins d'escalade et les corrections."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Commandes de lab — Rechercher des chemins d'escalade de privilèges sur Linux",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nid\nuname -a\nsudo -l\nfind / -perm -4000 -type f 2>/dev/null\ngetcap -r / 2>/dev/null\ncrontab -l\nls -la /etc/cron*\nfind / -writable -type f 2>/dev/null | head -20"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads / données de test — Rechercher des chemins d'escalade de privilèges sur Linux",
      "x": "Points de contrôle :\n- Binaire SUID appartenant à root et exécutable par tous.\n- Règle sudo autorisant une commande sans mot de passe.\n- Script cron modifiable par l'utilisateur.\n- Capacité cap_setuid ou cap_net_raw.\n- Noyau ancien avec exploit public (lab uniquement)."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Rappel critique",
      "x": "Toutes les commandes et tous les payloads ci-dessus sont destinés à un environnement de laboratoire isolé et autorisé. Ne les exécutez jamais sur un système tiers sans autorisation écrite."
    },
    {
      "t": "h",
      "x": "5 CTF — Chapitre 5.6 : Aperçu des binaires living-off-the-land (LOLbins)"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Système Linux », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Binaire SUID",
      "x": "<strong>Objectif :</strong> Un binaire SUID de lab permet d'obtenir un shell root. Le trouver et l'exploiter.<br><strong>Contexte :</strong> Aperçu des binaires living-off-the-land (LOLbins) (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c6_ctf1}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Rechercher les SUID."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le binaire inhabituel."
        },
        {
          "h": "Étape 3",
          "p": "Consulter GTFOBins."
        },
        {
          "h": "Étape 4",
          "p": "Exécuter la commande d'escalade."
        },
        {
          "h": "Étape 5",
          "p": "Lire le flag dans /root."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up détaillé — CTF 1/5 (Binaire SUID)",
      "x": "CTF 1/5 — Binaire SUID\nChapitre : 5.6 — Aperçu des binaires living-off-the-land (LOLbins)\nFlag : flag{m5_c6_ctf1}\n\nIndices :\n  1. Chercher les binaires SUID.\n  2. Comparer à GTFOBins.\n  3. Tester en lab.\n\nProcédure pas à pas :\n  1. Rechercher les SUID.\n  2. Identifier le binaire inhabituel.\n  3. Consulter GTFOBins.\n  4. Exécuter la commande d'escalade.\n  5. Lire le flag dans /root.\n\nRemédiation : Retirer le bit SUID inutile et appliquer le moindre privilège.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Sudo mal configuré",
      "x": "<strong>Objectif :</strong> Une règle sudo de lab autorise une commande dangereuse. Identifier et exploiter.<br><strong>Contexte :</strong> Aperçu des binaires living-off-the-land (LOLbins) (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c6_ctf2}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lancer sudo -l."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la commande autorisée."
        },
        {
          "h": "Étape 3",
          "p": "Trouver une option d'exécution."
        },
        {
          "h": "Étape 4",
          "p": "Obtenir un shell root."
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
      "title": "Write-up détaillé — CTF 2/5 (Sudo mal configuré)",
      "x": "CTF 2/5 — Sudo mal configuré\nChapitre : 5.6 — Aperçu des binaires living-off-the-land (LOLbins)\nFlag : flag{m5_c6_ctf2}\n\nIndices :\n  1. Afficher sudo -l.\n  2. Chercher les commandes autorisées.\n  3. Vérifier les options.\n\nProcédure pas à pas :\n  1. Lancer sudo -l.\n  2. Identifier la commande autorisée.\n  3. Trouver une option d'exécution.\n  4. Obtenir un shell root.\n  5. Lire le flag.\n\nRemédiation : Restreindre les commandes sudo et éviter les wildcards dangereux.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Cron modifiable",
      "x": "<strong>Objectif :</strong> Un script cron de lab est modifiable par l'utilisateur. Exploiter la persistance.<br><strong>Contexte :</strong> Aperçu des binaires living-off-the-land (LOLbins) (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c6_ctf3}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les tâches cron."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le script modifiable."
        },
        {
          "h": "Étape 3",
          "p": "Ajouter une commande de test."
        },
        {
          "h": "Étape 4",
          "p": "Attendre l'exécution."
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
      "title": "Write-up détaillé — CTF 3/5 (Cron modifiable)",
      "x": "CTF 3/5 — Cron modifiable\nChapitre : 5.6 — Aperçu des binaires living-off-the-land (LOLbins)\nFlag : flag{m5_c6_ctf3}\n\nIndices :\n  1. Lister les cron.\n  2. Vérifier les permissions.\n  3. Attendre l'exécution.\n\nProcédure pas à pas :\n  1. Lister les tâches cron.\n  2. Identifier le script modifiable.\n  3. Ajouter une commande de test.\n  4. Attendre l'exécution.\n  5. Lire le flag.\n\nRemédiation : Restreindre les permissions des scripts cron et surveiller les modifications.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Capacités",
      "x": "<strong>Objectif :</strong> Un binaire de lab possède une capacité dangereuse. L'identifier et l'exploiter.<br><strong>Contexte :</strong> Aperçu des binaires living-off-the-land (LOLbins) (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c6_ctf4}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Lister les capacités."
        },
        {
          "h": "Étape 2",
          "p": "Identifier le binaire."
        },
        {
          "h": "Étape 3",
          "p": "Vérifier la capacité."
        },
        {
          "h": "Étape 4",
          "p": "Exploiter setuid."
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
      "title": "Write-up détaillé — CTF 4/5 (Capacités)",
      "x": "CTF 4/5 — Capacités\nChapitre : 5.6 — Aperçu des binaires living-off-the-land (LOLbins)\nFlag : flag{m5_c6_ctf4}\n\nIndices :\n  1. Utiliser getcap.\n  2. Chercher cap_setuid.\n  3. Tester en lab.\n\nProcédure pas à pas :\n  1. Lister les capacités.\n  2. Identifier le binaire.\n  3. Vérifier la capacité.\n  4. Exploiter setuid.\n  5. Lire le flag.\n\nRemédiation : Retirer les capacités non nécessaires et auditer régulièrement.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Noyau vulnérable",
      "x": "<strong>Objectif :</strong> La version du noyau de lab est obsolète. Évaluer le risque et le corriger.<br><strong>Contexte :</strong> Aperçu des binaires living-off-the-land (LOLbins) (Système Linux).<br><strong>Flag attendu (lab) :</strong> flag{m5_c6_ctf5}"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1",
          "p": "Relever la version."
        },
        {
          "h": "Étape 2",
          "p": "Identifier la fin de support."
        },
        {
          "h": "Étape 3",
          "p": "Rechercher les CVE connues."
        },
        {
          "h": "Étape 4",
          "p": "Évaluer l'exploitabilité."
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
      "title": "Write-up détaillé — CTF 5/5 (Noyau vulnérable)",
      "x": "CTF 5/5 — Noyau vulnérable\nChapitre : 5.6 — Aperçu des binaires living-off-the-land (LOLbins)\nFlag : flag{m5_c6_ctf5}\n\nIndices :\n  1. Utiliser uname -a.\n  2. Comparer aux versions supportées.\n  3. Chercher les CVE.\n\nProcédure pas à pas :\n  1. Relever la version.\n  2. Identifier la fin de support.\n  3. Rechercher les CVE connues.\n  4. Évaluer l'exploitabilité.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Appliquer les mises à jour de sécurité et surveiller les avis éditeurs.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q5"
};
