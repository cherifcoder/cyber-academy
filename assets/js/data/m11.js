export default {
  "id": "m11",
  "num": 11,
  "title": "Analyse de vulnérabilités",
  "short": "Vuln Analysis",
  "icon": "🧪",
  "xp": 300,
  "duration": 70,
  "summary": "Cours en français enrichi sur « Analyse de vulnérabilités » : 6 chapitres, 10 exercices par chapitre, labs guidés pas à pas, payloads de lab isolé et 5 CTF détaillés par chapitre.",
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
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 11.1 : Comprendre vulnérabilités, mauvaises configurations et expositions"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Analyse de vulnérabilités",
      "x": "Mettre en pratique « Comprendre vulnérabilités, mauvaises configurations et expositions » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Analyse de vulnérabilités » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 11.1 : Comprendre vulnérabilités, mauvaises configurations et expositions"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Analyse de vulnérabilités », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Correspondance CVE",
      "x": "<strong>Objectif :</strong> À partir d'une bannière de lab, identifier une CVE plausible et justifier.<br><strong>Contexte :</strong> Comprendre vulnérabilités, mauvaises configurations et expositions (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c1_ctf1}"
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
      "x": "CTF 1/5 — Correspondance CVE\nChapitre : 11.1 — Comprendre vulnérabilités, mauvaises configurations et expositions\nFlag : flag{m11_c1_ctf1}\n\nIndices :\n  1. Relever la version exacte.\n  2. Chercher dans les bases publiques.\n  3. Vérifier les conditions d'exploitation.\n\nProcédure pas à pas :\n  1. Récupérer la bannière du service.\n  2. Identifier le produit et la version.\n  3. Rechercher les CVE associées.\n  4. Vérifier la configuration de lab.\n  5. Récupérer le flag dans le fichier de test.\n\nRemédiation : Mettre à jour le produit et supprimer les informations de version inutiles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Score CVSS",
      "x": "<strong>Objectif :</strong> Calculer un score CVSS pour une vulnérabilité de lab et expliquer les métriques.<br><strong>Contexte :</strong> Comprendre vulnérabilités, mauvaises configurations et expositions (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c1_ctf2}"
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
      "x": "CTF 2/5 — Score CVSS\nChapitre : 11.1 — Comprendre vulnérabilités, mauvaises configurations et expositions\nFlag : flag{m11_c1_ctf2}\n\nIndices :\n  1. Identifier les métriques de base.\n  2. Évaluer l'impact confidentialité/intégrité/disponibilité.\n  3. Comparer avec le score officiel.\n\nProcédure pas à pas :\n  1. Lire la description de la vulnérabilité.\n  2. Déterminer AV, AC, PR, UI, S, C, I, A.\n  3. Calculer le score.\n  4. Comparer au score de la base.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Utiliser CVSS comme aide à la priorisation, pas comme seule décision.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Faux positif",
      "x": "<strong>Objectif :</strong> Un scanner signale une vulnérabilité qui n'est pas exploitable. Prouver le faux positif.<br><strong>Contexte :</strong> Comprendre vulnérabilités, mauvaises configurations et expositions (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c1_ctf3}"
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
      "x": "CTF 3/5 — Faux positif\nChapitre : 11.1 — Comprendre vulnérabilités, mauvaises configurations et expositions\nFlag : flag{m11_c1_ctf3}\n\nIndices :\n  1. Vérifier la version réelle.\n  2. Tester la condition d'exploitation.\n  3. Lire la configuration.\n\nProcédure pas à pas :\n  1. Reproduire le scan.\n  2. Vérifier la version avec une commande manuelle.\n  3. Tester la condition annoncée.\n  4. Constater l'absence d'impact.\n  5. Récupérer le flag dans la note de validation.\n\nRemédiation : Mettre en place une validation manuelle avant remédiation.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Faisabilité d'exploitation",
      "x": "<strong>Objectif :</strong> Évaluer si une vulnérabilité de lab est réellement exploitable dans le contexte.<br><strong>Contexte :</strong> Comprendre vulnérabilités, mauvaises configurations et expositions (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c1_ctf4}"
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
      "x": "CTF 4/5 — Faisabilité d'exploitation\nChapitre : 11.1 — Comprendre vulnérabilités, mauvaises configurations et expositions\nFlag : flag{m11_c1_ctf4}\n\nIndices :\n  1. Vérifier l'accès réseau.\n  2. Vérifier l'authentification.\n  3. Vérifier les protections.\n\nProcédure pas à pas :\n  1. Identifier la surface exposée.\n  2. Vérifier les prérequis.\n  3. Tester un PoC minimal en lab.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le journal.\n\nRemédiation : Prioriser selon le contexte réel et les contrôles compensatoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation",
      "x": "<strong>Objectif :</strong> Classer trois vulnérabilités de lab par ordre de traitement.<br><strong>Contexte :</strong> Comprendre vulnérabilités, mauvaises configurations et expositions (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c1_ctf5}"
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
      "x": "CTF 5/5 — Priorisation\nChapitre : 11.1 — Comprendre vulnérabilités, mauvaises configurations et expositions\nFlag : flag{m11_c1_ctf5}\n\nIndices :\n  1. Évaluer la criticité.\n  2. Prendre en compte l'exposition.\n  3. Considérer l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les vulnérabilités.\n  2. Attribuer un score CVSS.\n  3. Ajouter le contexte d'exposition.\n  4. Classer par risque.\n  5. Récupérer le flag dans le plan de remédiation.\n\nRemédiation : Utiliser une approche risque : criticité technique + impact métier + exploitabilité.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 11.2 : CVE, score CVSS et bases de données de vulnérabilités"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Analyse de vulnérabilités",
      "x": "Mettre en pratique « CVE, score CVSS et bases de données de vulnérabilités » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Analyse de vulnérabilités » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 11.2 : CVE, score CVSS et bases de données de vulnérabilités"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Analyse de vulnérabilités », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Correspondance CVE",
      "x": "<strong>Objectif :</strong> À partir d'une bannière de lab, identifier une CVE plausible et justifier.<br><strong>Contexte :</strong> CVE, score CVSS et bases de données de vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c2_ctf1}"
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
      "x": "CTF 1/5 — Correspondance CVE\nChapitre : 11.2 — CVE, score CVSS et bases de données de vulnérabilités\nFlag : flag{m11_c2_ctf1}\n\nIndices :\n  1. Relever la version exacte.\n  2. Chercher dans les bases publiques.\n  3. Vérifier les conditions d'exploitation.\n\nProcédure pas à pas :\n  1. Récupérer la bannière du service.\n  2. Identifier le produit et la version.\n  3. Rechercher les CVE associées.\n  4. Vérifier la configuration de lab.\n  5. Récupérer le flag dans le fichier de test.\n\nRemédiation : Mettre à jour le produit et supprimer les informations de version inutiles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Score CVSS",
      "x": "<strong>Objectif :</strong> Calculer un score CVSS pour une vulnérabilité de lab et expliquer les métriques.<br><strong>Contexte :</strong> CVE, score CVSS et bases de données de vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c2_ctf2}"
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
      "x": "CTF 2/5 — Score CVSS\nChapitre : 11.2 — CVE, score CVSS et bases de données de vulnérabilités\nFlag : flag{m11_c2_ctf2}\n\nIndices :\n  1. Identifier les métriques de base.\n  2. Évaluer l'impact confidentialité/intégrité/disponibilité.\n  3. Comparer avec le score officiel.\n\nProcédure pas à pas :\n  1. Lire la description de la vulnérabilité.\n  2. Déterminer AV, AC, PR, UI, S, C, I, A.\n  3. Calculer le score.\n  4. Comparer au score de la base.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Utiliser CVSS comme aide à la priorisation, pas comme seule décision.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Faux positif",
      "x": "<strong>Objectif :</strong> Un scanner signale une vulnérabilité qui n'est pas exploitable. Prouver le faux positif.<br><strong>Contexte :</strong> CVE, score CVSS et bases de données de vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c2_ctf3}"
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
      "x": "CTF 3/5 — Faux positif\nChapitre : 11.2 — CVE, score CVSS et bases de données de vulnérabilités\nFlag : flag{m11_c2_ctf3}\n\nIndices :\n  1. Vérifier la version réelle.\n  2. Tester la condition d'exploitation.\n  3. Lire la configuration.\n\nProcédure pas à pas :\n  1. Reproduire le scan.\n  2. Vérifier la version avec une commande manuelle.\n  3. Tester la condition annoncée.\n  4. Constater l'absence d'impact.\n  5. Récupérer le flag dans la note de validation.\n\nRemédiation : Mettre en place une validation manuelle avant remédiation.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Faisabilité d'exploitation",
      "x": "<strong>Objectif :</strong> Évaluer si une vulnérabilité de lab est réellement exploitable dans le contexte.<br><strong>Contexte :</strong> CVE, score CVSS et bases de données de vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c2_ctf4}"
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
      "x": "CTF 4/5 — Faisabilité d'exploitation\nChapitre : 11.2 — CVE, score CVSS et bases de données de vulnérabilités\nFlag : flag{m11_c2_ctf4}\n\nIndices :\n  1. Vérifier l'accès réseau.\n  2. Vérifier l'authentification.\n  3. Vérifier les protections.\n\nProcédure pas à pas :\n  1. Identifier la surface exposée.\n  2. Vérifier les prérequis.\n  3. Tester un PoC minimal en lab.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le journal.\n\nRemédiation : Prioriser selon le contexte réel et les contrôles compensatoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation",
      "x": "<strong>Objectif :</strong> Classer trois vulnérabilités de lab par ordre de traitement.<br><strong>Contexte :</strong> CVE, score CVSS et bases de données de vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c2_ctf5}"
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
      "x": "CTF 5/5 — Priorisation\nChapitre : 11.2 — CVE, score CVSS et bases de données de vulnérabilités\nFlag : flag{m11_c2_ctf5}\n\nIndices :\n  1. Évaluer la criticité.\n  2. Prendre en compte l'exposition.\n  3. Considérer l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les vulnérabilités.\n  2. Attribuer un score CVSS.\n  3. Ajouter le contexte d'exposition.\n  4. Classer par risque.\n  5. Récupérer le flag dans le plan de remédiation.\n\nRemédiation : Utiliser une approche risque : criticité technique + impact métier + exploitabilité.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 11.3 : Évaluation manuelle vs automatisée des vulnérabilités"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Analyse de vulnérabilités",
      "x": "Mettre en pratique « Évaluation manuelle vs automatisée des vulnérabilités » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Analyse de vulnérabilités » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 11.3 : Évaluation manuelle vs automatisée des vulnérabilités"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Analyse de vulnérabilités », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Correspondance CVE",
      "x": "<strong>Objectif :</strong> À partir d'une bannière de lab, identifier une CVE plausible et justifier.<br><strong>Contexte :</strong> Évaluation manuelle vs automatisée des vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c3_ctf1}"
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
      "x": "CTF 1/5 — Correspondance CVE\nChapitre : 11.3 — Évaluation manuelle vs automatisée des vulnérabilités\nFlag : flag{m11_c3_ctf1}\n\nIndices :\n  1. Relever la version exacte.\n  2. Chercher dans les bases publiques.\n  3. Vérifier les conditions d'exploitation.\n\nProcédure pas à pas :\n  1. Récupérer la bannière du service.\n  2. Identifier le produit et la version.\n  3. Rechercher les CVE associées.\n  4. Vérifier la configuration de lab.\n  5. Récupérer le flag dans le fichier de test.\n\nRemédiation : Mettre à jour le produit et supprimer les informations de version inutiles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Score CVSS",
      "x": "<strong>Objectif :</strong> Calculer un score CVSS pour une vulnérabilité de lab et expliquer les métriques.<br><strong>Contexte :</strong> Évaluation manuelle vs automatisée des vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c3_ctf2}"
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
      "x": "CTF 2/5 — Score CVSS\nChapitre : 11.3 — Évaluation manuelle vs automatisée des vulnérabilités\nFlag : flag{m11_c3_ctf2}\n\nIndices :\n  1. Identifier les métriques de base.\n  2. Évaluer l'impact confidentialité/intégrité/disponibilité.\n  3. Comparer avec le score officiel.\n\nProcédure pas à pas :\n  1. Lire la description de la vulnérabilité.\n  2. Déterminer AV, AC, PR, UI, S, C, I, A.\n  3. Calculer le score.\n  4. Comparer au score de la base.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Utiliser CVSS comme aide à la priorisation, pas comme seule décision.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Faux positif",
      "x": "<strong>Objectif :</strong> Un scanner signale une vulnérabilité qui n'est pas exploitable. Prouver le faux positif.<br><strong>Contexte :</strong> Évaluation manuelle vs automatisée des vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c3_ctf3}"
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
      "x": "CTF 3/5 — Faux positif\nChapitre : 11.3 — Évaluation manuelle vs automatisée des vulnérabilités\nFlag : flag{m11_c3_ctf3}\n\nIndices :\n  1. Vérifier la version réelle.\n  2. Tester la condition d'exploitation.\n  3. Lire la configuration.\n\nProcédure pas à pas :\n  1. Reproduire le scan.\n  2. Vérifier la version avec une commande manuelle.\n  3. Tester la condition annoncée.\n  4. Constater l'absence d'impact.\n  5. Récupérer le flag dans la note de validation.\n\nRemédiation : Mettre en place une validation manuelle avant remédiation.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Faisabilité d'exploitation",
      "x": "<strong>Objectif :</strong> Évaluer si une vulnérabilité de lab est réellement exploitable dans le contexte.<br><strong>Contexte :</strong> Évaluation manuelle vs automatisée des vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c3_ctf4}"
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
      "x": "CTF 4/5 — Faisabilité d'exploitation\nChapitre : 11.3 — Évaluation manuelle vs automatisée des vulnérabilités\nFlag : flag{m11_c3_ctf4}\n\nIndices :\n  1. Vérifier l'accès réseau.\n  2. Vérifier l'authentification.\n  3. Vérifier les protections.\n\nProcédure pas à pas :\n  1. Identifier la surface exposée.\n  2. Vérifier les prérequis.\n  3. Tester un PoC minimal en lab.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le journal.\n\nRemédiation : Prioriser selon le contexte réel et les contrôles compensatoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation",
      "x": "<strong>Objectif :</strong> Classer trois vulnérabilités de lab par ordre de traitement.<br><strong>Contexte :</strong> Évaluation manuelle vs automatisée des vulnérabilités (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c3_ctf5}"
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
      "x": "CTF 5/5 — Priorisation\nChapitre : 11.3 — Évaluation manuelle vs automatisée des vulnérabilités\nFlag : flag{m11_c3_ctf5}\n\nIndices :\n  1. Évaluer la criticité.\n  2. Prendre en compte l'exposition.\n  3. Considérer l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les vulnérabilités.\n  2. Attribuer un score CVSS.\n  3. Ajouter le contexte d'exposition.\n  4. Classer par risque.\n  5. Récupérer le flag dans le plan de remédiation.\n\nRemédiation : Utiliser une approche risque : criticité technique + impact métier + exploitabilité.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 11.4 : Faisabilité d'exploitation et évaluation du risque réel"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Cadre légal & éthique",
      "x": "Mettre en pratique « Faisabilité d'exploitation et évaluation du risque réel » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Cadre légal & éthique » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 11.4 : Faisabilité d'exploitation et évaluation du risque réel"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Cadre légal & éthique », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Périmètre non autorisé",
      "x": "<strong>Objectif :</strong> Un testeur scanne une IP voisine non incluse dans le périmètre. Identifier la violation et la conduite à tenir.<br><strong>Contexte :</strong> Faisabilité d'exploitation et évaluation du risque réel (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m11_c4_ctf1}"
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
      "x": "CTF 1/5 — Périmètre non autorisé\nChapitre : 11.4 — Faisabilité d'exploitation et évaluation du risque réel\nFlag : flag{m11_c4_ctf1}\n\nIndices :\n  1. Relire la lettre d'autorisation et les RoE.\n  2. Comparer l'IP cible au périmètre contractuel.\n  3. Distinguer erreur technique et infraction.\n\nProcédure pas à pas :\n  1. Relever l'IP et l'horodatage du scan.\n  2. Comparer au périmètre autorisé.\n  3. Arrêter immédiatement toute action sur la cible hors scope.\n  4. Documenter l'incident et prévenir le client.\n  5. Proposer une mesure correctrice : liste blanche d'IP, double validation.\n\nRemédiation : Mettre en place une validation technique du périmètre avant chaque commande et un arrêt automatique en cas d'écart.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Violation de données personnelles",
      "x": "<strong>Objectif :</strong> Un fichier de preuves contient des données personnelles réelles. Déterminer les obligations RGPD.<br><strong>Contexte :</strong> Faisabilité d'exploitation et évaluation du risque réel (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m11_c4_ctf2}"
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
      "x": "CTF 2/5 — Violation de données personnelles\nChapitre : 11.4 — Faisabilité d'exploitation et évaluation du risque réel\nFlag : flag{m11_c4_ctf2}\n\nIndices :\n  1. Identifier la nature des données.\n  2. Vérifier la minimisation et la durée de conservation.\n  3. Penser à la notification sous 72 h.\n\nProcédure pas à pas :\n  1. Classer les données concernées.\n  2. Vérifier la base légale et l'information des personnes.\n  3. Supprimer ou anonymiser les données non nécessaires.\n  4. Notifier l'autorité si la violation est avérée.\n  5. Documenter la décision et les mesures.\n\nRemédiation : Appliquer la minimisation, chiffrer les preuves et limiter la conservation à la durée de la mission.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Preuve non intègre",
      "x": "<strong>Objectif :</strong> Une capture d'écran a été modifiée après collecte. Expliquer pourquoi elle perd sa valeur.<br><strong>Contexte :</strong> Faisabilité d'exploitation et évaluation du risque réel (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m11_c4_ctf3}"
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
      "x": "CTF 3/5 — Preuve non intègre\nChapitre : 11.4 — Faisabilité d'exploitation et évaluation du risque réel\nFlag : flag{m11_c4_ctf3}\n\nIndices :\n  1. Comparer l'empreinte avant/après.\n  2. Vérifier l'horodatage.\n  3. Distinguer preuve technique et simple copie.\n\nProcédure pas à pas :\n  1. Recalculer le hash du fichier.\n  2. Comparer au hash consigné.\n  3. Identifier la différence.\n  4. Écarter la preuve non intègre.\n  5. Recommencer la collecte avec un journal.\n\nRemédiation : Hasher les preuves au moment de la collecte et conserver les empreintes séparément.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Divulgation responsable",
      "x": "<strong>Objectif :</strong> Une vulnérabilité critique est découverte chez un éditeur. Définir une chronologie de divulgation.<br><strong>Contexte :</strong> Faisabilité d'exploitation et évaluation du risque réel (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m11_c4_ctf4}"
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
      "x": "CTF 4/5 — Divulgation responsable\nChapitre : 11.4 — Faisabilité d'exploitation et évaluation du risque réel\nFlag : flag{m11_c4_ctf4}\n\nIndices :\n  1. Vérifier le canal de contact sécurité.\n  2. Prévoir un délai de correction raisonnable.\n  3. Éviter la publication avant accord.\n\nProcédure pas à pas :\n  1. Rédiger un rapport minimal et reproductible.\n  2. Contacter le programme de divulgation.\n  3. Proposer un délai (ex. 90 jours).\n  4. Suivre les échanges et la correction.\n  5. Publier uniquement après accord ou expiration négociée.\n\nRemédiation : Utiliser un canal chiffré, limiter les données sensibles et documenter chaque échange.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Contrat ambigu",
      "x": "<strong>Objectif :</strong> Un client autorise un test sur son SaaS hébergé chez un tiers. Identifier la limite de son autorisation.<br><strong>Contexte :</strong> Faisabilité d'exploitation et évaluation du risque réel (Cadre légal & éthique).<br><strong>Flag attendu (lab) :</strong> flag{m11_c4_ctf5}"
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
      "x": "CTF 5/5 — Contrat ambigu\nChapitre : 11.4 — Faisabilité d'exploitation et évaluation du risque réel\nFlag : flag{m11_c4_ctf5}\n\nIndices :\n  1. Distinguer propriétaire et hébergeur.\n  2. Lire les conditions du fournisseur.\n  3. Vérifier la chaîne d'autorisation.\n\nProcédure pas à pas :\n  1. Identifier l'hébergeur et le service concerné.\n  2. Vérifier si le client contrôle réellement la couche testée.\n  3. Demander une autorisation écrite supplémentaire si nécessaire.\n  4. Adapter le périmètre aux seuls actifs contrôlés.\n  5. Consigner la décision dans les RoE.\n\nRemédiation : Faire valider le périmètre par le juridique et obtenir l'accord de chaque partie concernée.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 11.5 : Identification et validation des faux positifs"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Analyse de vulnérabilités",
      "x": "Mettre en pratique « Identification et validation des faux positifs » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Analyse de vulnérabilités » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 11.5 : Identification et validation des faux positifs"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Analyse de vulnérabilités », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Correspondance CVE",
      "x": "<strong>Objectif :</strong> À partir d'une bannière de lab, identifier une CVE plausible et justifier.<br><strong>Contexte :</strong> Identification et validation des faux positifs (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c5_ctf1}"
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
      "x": "CTF 1/5 — Correspondance CVE\nChapitre : 11.5 — Identification et validation des faux positifs\nFlag : flag{m11_c5_ctf1}\n\nIndices :\n  1. Relever la version exacte.\n  2. Chercher dans les bases publiques.\n  3. Vérifier les conditions d'exploitation.\n\nProcédure pas à pas :\n  1. Récupérer la bannière du service.\n  2. Identifier le produit et la version.\n  3. Rechercher les CVE associées.\n  4. Vérifier la configuration de lab.\n  5. Récupérer le flag dans le fichier de test.\n\nRemédiation : Mettre à jour le produit et supprimer les informations de version inutiles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Score CVSS",
      "x": "<strong>Objectif :</strong> Calculer un score CVSS pour une vulnérabilité de lab et expliquer les métriques.<br><strong>Contexte :</strong> Identification et validation des faux positifs (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c5_ctf2}"
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
      "x": "CTF 2/5 — Score CVSS\nChapitre : 11.5 — Identification et validation des faux positifs\nFlag : flag{m11_c5_ctf2}\n\nIndices :\n  1. Identifier les métriques de base.\n  2. Évaluer l'impact confidentialité/intégrité/disponibilité.\n  3. Comparer avec le score officiel.\n\nProcédure pas à pas :\n  1. Lire la description de la vulnérabilité.\n  2. Déterminer AV, AC, PR, UI, S, C, I, A.\n  3. Calculer le score.\n  4. Comparer au score de la base.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Utiliser CVSS comme aide à la priorisation, pas comme seule décision.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Faux positif",
      "x": "<strong>Objectif :</strong> Un scanner signale une vulnérabilité qui n'est pas exploitable. Prouver le faux positif.<br><strong>Contexte :</strong> Identification et validation des faux positifs (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c5_ctf3}"
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
      "x": "CTF 3/5 — Faux positif\nChapitre : 11.5 — Identification et validation des faux positifs\nFlag : flag{m11_c5_ctf3}\n\nIndices :\n  1. Vérifier la version réelle.\n  2. Tester la condition d'exploitation.\n  3. Lire la configuration.\n\nProcédure pas à pas :\n  1. Reproduire le scan.\n  2. Vérifier la version avec une commande manuelle.\n  3. Tester la condition annoncée.\n  4. Constater l'absence d'impact.\n  5. Récupérer le flag dans la note de validation.\n\nRemédiation : Mettre en place une validation manuelle avant remédiation.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Faisabilité d'exploitation",
      "x": "<strong>Objectif :</strong> Évaluer si une vulnérabilité de lab est réellement exploitable dans le contexte.<br><strong>Contexte :</strong> Identification et validation des faux positifs (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c5_ctf4}"
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
      "x": "CTF 4/5 — Faisabilité d'exploitation\nChapitre : 11.5 — Identification et validation des faux positifs\nFlag : flag{m11_c5_ctf4}\n\nIndices :\n  1. Vérifier l'accès réseau.\n  2. Vérifier l'authentification.\n  3. Vérifier les protections.\n\nProcédure pas à pas :\n  1. Identifier la surface exposée.\n  2. Vérifier les prérequis.\n  3. Tester un PoC minimal en lab.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le journal.\n\nRemédiation : Prioriser selon le contexte réel et les contrôles compensatoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation",
      "x": "<strong>Objectif :</strong> Classer trois vulnérabilités de lab par ordre de traitement.<br><strong>Contexte :</strong> Identification et validation des faux positifs (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c5_ctf5}"
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
      "x": "CTF 5/5 — Priorisation\nChapitre : 11.5 — Identification et validation des faux positifs\nFlag : flag{m11_c5_ctf5}\n\nIndices :\n  1. Évaluer la criticité.\n  2. Prendre en compte l'exposition.\n  3. Considérer l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les vulnérabilités.\n  2. Attribuer un score CVSS.\n  3. Ajouter le contexte d'exposition.\n  4. Classer par risque.\n  5. Récupérer le flag dans le plan de remédiation.\n\nRemédiation : Utiliser une approche risque : criticité technique + impact métier + exploitabilité.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "h",
      "x": "Lab guidé pas à pas — Chapitre 11.6 : Priorisation des vulnérabilités assistée par IA"
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Objectif du lab — Analyse de vulnérabilités",
      "x": "Mettre en pratique « Priorisation des vulnérabilités assistée par IA » dans un laboratoire autorisé (VM locale, conteneur Docker, réseau host-only). Le lab ci-dessous est spécifique au thème « Analyse de vulnérabilités » et doit être exécuté uniquement sur des cibles de lab."
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
      "x": "5 CTF — Chapitre 11.6 : Priorisation des vulnérabilités assistée par IA"
    },
    {
      "t": "p",
      "x": "Cinq défis CTF spécifiques au thème « Analyse de vulnérabilités », avec objectif, indices, procédure détaillée et remédiation. Environnement : lab isolé uniquement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Correspondance CVE",
      "x": "<strong>Objectif :</strong> À partir d'une bannière de lab, identifier une CVE plausible et justifier.<br><strong>Contexte :</strong> Priorisation des vulnérabilités assistée par IA (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c6_ctf1}"
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
      "x": "CTF 1/5 — Correspondance CVE\nChapitre : 11.6 — Priorisation des vulnérabilités assistée par IA\nFlag : flag{m11_c6_ctf1}\n\nIndices :\n  1. Relever la version exacte.\n  2. Chercher dans les bases publiques.\n  3. Vérifier les conditions d'exploitation.\n\nProcédure pas à pas :\n  1. Récupérer la bannière du service.\n  2. Identifier le produit et la version.\n  3. Rechercher les CVE associées.\n  4. Vérifier la configuration de lab.\n  5. Récupérer le flag dans le fichier de test.\n\nRemédiation : Mettre à jour le produit et supprimer les informations de version inutiles.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — Score CVSS",
      "x": "<strong>Objectif :</strong> Calculer un score CVSS pour une vulnérabilité de lab et expliquer les métriques.<br><strong>Contexte :</strong> Priorisation des vulnérabilités assistée par IA (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c6_ctf2}"
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
      "x": "CTF 2/5 — Score CVSS\nChapitre : 11.6 — Priorisation des vulnérabilités assistée par IA\nFlag : flag{m11_c6_ctf2}\n\nIndices :\n  1. Identifier les métriques de base.\n  2. Évaluer l'impact confidentialité/intégrité/disponibilité.\n  3. Comparer avec le score officiel.\n\nProcédure pas à pas :\n  1. Lire la description de la vulnérabilité.\n  2. Déterminer AV, AC, PR, UI, S, C, I, A.\n  3. Calculer le score.\n  4. Comparer au score de la base.\n  5. Récupérer le flag dans le rapport.\n\nRemédiation : Utiliser CVSS comme aide à la priorisation, pas comme seule décision.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — Faux positif",
      "x": "<strong>Objectif :</strong> Un scanner signale une vulnérabilité qui n'est pas exploitable. Prouver le faux positif.<br><strong>Contexte :</strong> Priorisation des vulnérabilités assistée par IA (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c6_ctf3}"
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
      "x": "CTF 3/5 — Faux positif\nChapitre : 11.6 — Priorisation des vulnérabilités assistée par IA\nFlag : flag{m11_c6_ctf3}\n\nIndices :\n  1. Vérifier la version réelle.\n  2. Tester la condition d'exploitation.\n  3. Lire la configuration.\n\nProcédure pas à pas :\n  1. Reproduire le scan.\n  2. Vérifier la version avec une commande manuelle.\n  3. Tester la condition annoncée.\n  4. Constater l'absence d'impact.\n  5. Récupérer le flag dans la note de validation.\n\nRemédiation : Mettre en place une validation manuelle avant remédiation.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — Faisabilité d'exploitation",
      "x": "<strong>Objectif :</strong> Évaluer si une vulnérabilité de lab est réellement exploitable dans le contexte.<br><strong>Contexte :</strong> Priorisation des vulnérabilités assistée par IA (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c6_ctf4}"
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
      "x": "CTF 4/5 — Faisabilité d'exploitation\nChapitre : 11.6 — Priorisation des vulnérabilités assistée par IA\nFlag : flag{m11_c6_ctf4}\n\nIndices :\n  1. Vérifier l'accès réseau.\n  2. Vérifier l'authentification.\n  3. Vérifier les protections.\n\nProcédure pas à pas :\n  1. Identifier la surface exposée.\n  2. Vérifier les prérequis.\n  3. Tester un PoC minimal en lab.\n  4. Évaluer l'impact.\n  5. Récupérer le flag dans le journal.\n\nRemédiation : Prioriser selon le contexte réel et les contrôles compensatoires.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — Priorisation",
      "x": "<strong>Objectif :</strong> Classer trois vulnérabilités de lab par ordre de traitement.<br><strong>Contexte :</strong> Priorisation des vulnérabilités assistée par IA (Analyse de vulnérabilités).<br><strong>Flag attendu (lab) :</strong> flag{m11_c6_ctf5}"
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
      "x": "CTF 5/5 — Priorisation\nChapitre : 11.6 — Priorisation des vulnérabilités assistée par IA\nFlag : flag{m11_c6_ctf5}\n\nIndices :\n  1. Évaluer la criticité.\n  2. Prendre en compte l'exposition.\n  3. Considérer l'impact métier.\n\nProcédure pas à pas :\n  1. Lister les vulnérabilités.\n  2. Attribuer un score CVSS.\n  3. Ajouter le contexte d'exposition.\n  4. Classer par risque.\n  5. Récupérer le flag dans le plan de remédiation.\n\nRemédiation : Utiliser une approche risque : criticité technique + impact métier + exploitabilité.\n\nLivrable attendu : capture(s) horodatée(s), commande(s) exacte(s), preuve minimale et recommandation."
    }
  ],
  "quiz": "q11"
};
