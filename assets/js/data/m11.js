export default {
  "id": "m11",
  "num": 11,
  "title": "Analyse de vulnérabilités",
  "short": "Vuln Analysis",
  "icon": "🧪",
  "xp": 300,
  "duration": 70,
  "summary": "Cours en français sur « Analyse de vulnérabilités » avec 6 chapitres, 10 exercices par chapitre et un défi CTF.",
  "objectives": [
    "Comprendre et appliquer : Comprendre vulnérabilités, mauvaises configurations et expositions.",
    "Comprendre et appliquer : CVE, score CVSS et bases de données de vulnérabilités.",
    "Comprendre et appliquer : Évaluation manuelle vs automatisée des vulnérabilités.",
    "Comprendre et appliquer : Faisabilité d'exploitation et évaluation du risque réel.",
    "Comprendre et appliquer : Identification et validation des faux positifs.",
    "Comprendre et appliquer : Priorisation des vulnérabilités assistée par IA."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 11 — Analyse de vulnérabilités</strong>. Ce module est présenté en français et couvre les chapitres suivants avec des exercices pratiques et des objectifs de compréhension."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Résumé",
      "x": "Durée estimée : 70 min · XP : 300. Travaillez chapitre par chapitre, réalisez les 10 exercices de chaque chapitre, puis validez vos acquis."
    },
    {
      "t": "h",
      "x": "11.1 Comprendre vulnérabilités, mauvaises configurations et expositions"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>comprendre vulnérabilités, mauvaises configurations et expositions</strong> dans le cadre du module « Analyse de vulnérabilités ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Comprendre vulnérabilités, mauvaises configurations et expositions », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Comprendre vulnérabilités, mauvaises configurations et expositions.",
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
      "x": "11.2 CVE, score CVSS et bases de données de vulnérabilités"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>cve, score cvss et bases de données de vulnérabilités</strong> dans le cadre du module « Analyse de vulnérabilités ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « CVE, score CVSS et bases de données de vulnérabilités », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : CVE, score CVSS et bases de données de vulnérabilités.",
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
      "x": "11.3 Évaluation manuelle vs automatisée des vulnérabilités"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>évaluation manuelle vs automatisée des vulnérabilités</strong> dans le cadre du module « Analyse de vulnérabilités ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Évaluation manuelle vs automatisée des vulnérabilités », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Évaluation manuelle vs automatisée des vulnérabilités.",
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
      "x": "11.4 Faisabilité d'exploitation et évaluation du risque réel"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>faisabilité d'exploitation et évaluation du risque réel</strong> dans le cadre du module « Analyse de vulnérabilités ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Faisabilité d'exploitation et évaluation du risque réel », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Faisabilité d'exploitation et évaluation du risque réel.",
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
      "x": "11.5 Identification et validation des faux positifs"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>identification et validation des faux positifs</strong> dans le cadre du module « Analyse de vulnérabilités ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Identification et validation des faux positifs », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Identification et validation des faux positifs.",
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
      "x": "11.6 Priorisation des vulnérabilités assistée par IA"
    },
    {
      "t": "p",
      "x": "Ce chapitre présente <strong>priorisation des vulnérabilités assistée par ia</strong> dans le cadre du module « Analyse de vulnérabilités ». L'objectif est de comprendre les concepts clés, les enjeux opérationnels et les bonnes pratiques défensives, dans un contexte strictement légal et éthique."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectifs du chapitre",
      "x": "À l'issue de ce chapitre, vous devez être capable d'expliquer les notions essentielles de « Priorisation des vulnérabilités assistée par IA », d'identifier les risques associés et d'appliquer les mesures de protection appropriées."
    },
    {
      "t": "ul",
      "x": [
        "Définir les concepts et la terminologie liés à : Priorisation des vulnérabilités assistée par IA.",
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
      "x": "Exercices — Chapitre 11.1 : Comprendre vulnérabilités, mauvaises configurations et expositions"
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
          "Exercice 1 (concept) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "facile",
          "(concept) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "facile",
          "(analyse) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "facile",
          "(application) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "intermédiaire",
          "(défense) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "intermédiaire",
          "(scénario) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "intermédiaire",
          "(méthode) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "avancé",
          "(risque) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "avancé",
          "(contrôle) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Comprendre vulnérabilités, mauvaises configurations et expositions",
          "avancé",
          "(synthèse) Dans le contexte de « Comprendre vulnérabilités, mauvaises configurations et expositions » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Comprendre vulnérabilités, mauvaises configurations et expositions », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 11.2 : CVE, score CVSS et bases de données de vulnérabilités"
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
          "Exercice 1 (concept) — CVE, score CVSS et bases de données de vulnérabilités",
          "facile",
          "(concept) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — CVE, score CVSS et bases de données de vulnérabilités",
          "facile",
          "(analyse) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — CVE, score CVSS et bases de données de vulnérabilités",
          "facile",
          "(application) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — CVE, score CVSS et bases de données de vulnérabilités",
          "intermédiaire",
          "(défense) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — CVE, score CVSS et bases de données de vulnérabilités",
          "intermédiaire",
          "(scénario) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — CVE, score CVSS et bases de données de vulnérabilités",
          "intermédiaire",
          "(terminologie) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — CVE, score CVSS et bases de données de vulnérabilités",
          "intermédiaire",
          "(méthode) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — CVE, score CVSS et bases de données de vulnérabilités",
          "avancé",
          "(risque) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — CVE, score CVSS et bases de données de vulnérabilités",
          "avancé",
          "(contrôle) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — CVE, score CVSS et bases de données de vulnérabilités",
          "avancé",
          "(synthèse) Dans le contexte de « CVE, score CVSS et bases de données de vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « CVE, score CVSS et bases de données de vulnérabilités », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 11.3 : Évaluation manuelle vs automatisée des vulnérabilités"
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
          "Exercice 1 (concept) — Évaluation manuelle vs automatisée des vulnérabilités",
          "facile",
          "(concept) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Évaluation manuelle vs automatisée des vulnérabilités",
          "facile",
          "(analyse) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Évaluation manuelle vs automatisée des vulnérabilités",
          "facile",
          "(application) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Évaluation manuelle vs automatisée des vulnérabilités",
          "intermédiaire",
          "(défense) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Évaluation manuelle vs automatisée des vulnérabilités",
          "intermédiaire",
          "(scénario) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Évaluation manuelle vs automatisée des vulnérabilités",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Évaluation manuelle vs automatisée des vulnérabilités",
          "intermédiaire",
          "(méthode) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Évaluation manuelle vs automatisée des vulnérabilités",
          "avancé",
          "(risque) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Évaluation manuelle vs automatisée des vulnérabilités",
          "avancé",
          "(contrôle) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Évaluation manuelle vs automatisée des vulnérabilités",
          "avancé",
          "(synthèse) Dans le contexte de « Évaluation manuelle vs automatisée des vulnérabilités » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Évaluation manuelle vs automatisée des vulnérabilités », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 11.4 : Faisabilité d'exploitation et évaluation du risque réel"
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
          "Exercice 1 (concept) — Faisabilité d'exploitation et évaluation du risque réel",
          "facile",
          "(concept) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Faisabilité d'exploitation et évaluation du risque réel",
          "facile",
          "(analyse) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Faisabilité d'exploitation et évaluation du risque réel",
          "facile",
          "(application) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Faisabilité d'exploitation et évaluation du risque réel",
          "intermédiaire",
          "(défense) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Faisabilité d'exploitation et évaluation du risque réel",
          "intermédiaire",
          "(scénario) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Faisabilité d'exploitation et évaluation du risque réel",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Faisabilité d'exploitation et évaluation du risque réel",
          "intermédiaire",
          "(méthode) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Faisabilité d'exploitation et évaluation du risque réel",
          "avancé",
          "(risque) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Faisabilité d'exploitation et évaluation du risque réel",
          "avancé",
          "(contrôle) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Faisabilité d'exploitation et évaluation du risque réel",
          "avancé",
          "(synthèse) Dans le contexte de « Faisabilité d'exploitation et évaluation du risque réel » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Faisabilité d'exploitation et évaluation du risque réel », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 11.5 : Identification et validation des faux positifs"
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
          "Exercice 1 (concept) — Identification et validation des faux positifs",
          "facile",
          "(concept) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Identification et validation des faux positifs",
          "facile",
          "(analyse) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Identification et validation des faux positifs",
          "facile",
          "(application) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Identification et validation des faux positifs",
          "intermédiaire",
          "(défense) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Identification et validation des faux positifs",
          "intermédiaire",
          "(scénario) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Identification et validation des faux positifs",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Identification et validation des faux positifs",
          "intermédiaire",
          "(méthode) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Identification et validation des faux positifs",
          "avancé",
          "(risque) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Identification et validation des faux positifs",
          "avancé",
          "(contrôle) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Identification et validation des faux positifs",
          "avancé",
          "(synthèse) Dans le contexte de « Identification et validation des faux positifs » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Identification et validation des faux positifs », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "Exercices — Chapitre 11.6 : Priorisation des vulnérabilités assistée par IA"
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
          "Exercice 1 (concept) — Priorisation des vulnérabilités assistée par IA",
          "facile",
          "(concept) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : définissez les concepts clés.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "2",
          "Exercice 2 (analyse) — Priorisation des vulnérabilités assistée par IA",
          "facile",
          "(analyse) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : listez les éléments essentiels à connaître.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "3",
          "Exercice 3 (application) — Priorisation des vulnérabilités assistée par IA",
          "facile",
          "(application) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : donnez un exemple concret en environnement de lab autorisé.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "4",
          "Exercice 4 (défense) — Priorisation des vulnérabilités assistée par IA",
          "intermédiaire",
          "(défense) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : expliquez un risque principal et son impact.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "5",
          "Exercice 5 (scénario) — Priorisation des vulnérabilités assistée par IA",
          "intermédiaire",
          "(scénario) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez une mesure de prévention ou de détection.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "6",
          "Exercice 6 (terminologie) — Priorisation des vulnérabilités assistée par IA",
          "intermédiaire",
          "(terminologie) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : décrivez une bonne pratique de mise en œuvre.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "7",
          "Exercice 7 (méthode) — Priorisation des vulnérabilités assistée par IA",
          "intermédiaire",
          "(méthode) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : analysez une erreur fréquente et comment l'éviter.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "8",
          "Exercice 8 (risque) — Priorisation des vulnérabilités assistée par IA",
          "avancé",
          "(risque) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : indiquez comment documenter et tracer correctement.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "9",
          "Exercice 9 (contrôle) — Priorisation des vulnérabilités assistée par IA",
          "avancé",
          "(contrôle) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : proposez un contrôle de sécurité ou de conformité.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ],
        [
          "10",
          "Exercice 10 (synthèse) — Priorisation des vulnérabilités assistée par IA",
          "avancé",
          "(synthèse) Dans le contexte de « Priorisation des vulnérabilités assistée par IA » (module 11 : Analyse de vulnérabilités), répondez de façon structurée : synthétisez les points clés à retenir pour un professionnel.",
          "Réponse attendue : une explication claire en français, adaptée au contexte légal/éthique, mentionnant les notions importantes de « Priorisation des vulnérabilités assistée par IA », avec au moins une recommandation pratique."
        ]
      ]
    },
    {
      "t": "h",
      "x": "CTF — Module 11"
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Défi CTF (lab autorisé)",
      "x": "Mettez en pratique les notions du module « Analyse de vulnérabilités » dans un environnement de lab/CTF autorisé. Documentez votre démarche : reconnaissance (si pertinent), hypothèse, test contrôlé, preuve, impact et remédiation."
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
  "quiz": "q11"
};
