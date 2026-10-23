export default {
  id: 'm7',
  num: 7,
  title: "Rapport d'Audit & Classification des Risques",
  short: "Reporting & CVSS",
  icon: "📊",
  xp: 420,
  duration: 70,
  summary: "Transformer des preuves techniques en décisions : calcul CVSS v3.1, priorisation, rédaction professionnelle et génération de rapport exportable.",
  objectives: [
    "Calculer un score CVSS v3.1 et construire son vecteur",
    "Distinguer sévérité technique et impact métier",
    "Structurer un rapport d'audit complet (synthèse, constats, PoC, remédiation)",
    "Générer un rapport imprimable / PDF depuis l'application"
  ],
  blocks: [
    {
      t: 'p',
      x: "Un rapport est le <strong>seul livrable durable</strong> d'un audit. Une faille critique mal expliquée sera ignorée ; une faille moyenne démontrée avec un impact métier clair sera corrigée en priorité. Le rapport s'adresse à trois publics : la direction (risque), les équipes techniques (reproduction, correctif) et l'auditeur suivant (traçabilité)."
    },
    { t: 'h', x: "7.1 CVSS v3.1 : les métriques de base" },
    {
      t: 'table',
      head: ['Métrique', 'Valeurs', 'Ce qu’elle mesure'],
      rows: [
        ['AV — Attack Vector', "Network / Adjacent / Local / Physical", "Distance nécessaire pour attaquer"],
        ['AC — Attack Complexity', "Low / High", "Conditions externes requises"],
        ['PR — Privileges Required', "None / Low / High", "Droits nécessaires avant l'attaque"],
        ['UI — User Interaction', "None / Required", "Action d'un utilisateur nécessaire"],
        ['S — Scope', "Unchanged / Changed", "Impact au-delà du composant vulnérable"],
        ['C — Confidentiality', "High / Low / None", "Perte de confidentialité"],
        ['I — Integrity', "High / Low / None", "Perte d'intégrité"],
        ['A — Availability', "High / Low / None", "Perte de disponibilité"]
      ]
    },
    {
      t: 'code', lang: 'text', title: "Formule du score de base (CVSS v3.1)",
      x: `ISS = 1 - (1 - C) x (1 - I) x (1 - A)

Impact :
  S = Unchanged : 6.42 x ISS
  S = Changed   : 7.52 x (ISS - 0.029) - 3.25 x (ISS - 0.02)^15

Exploitability = 8.22 x AV x AC x PR x UI

Si Impact <= 0 : score = 0
Sinon :
  S = Unchanged : min(Impact + Exploitability, 10)
  S = Changed   : min(1.08 x (Impact + Exploitability), 10)

Arrondi : Roundup(x) = ceil(x x 10) / 10`
    },
    {
      t: 'table',
      head: ['Pondérations', 'AV', 'AC', 'PR (S:U / S:C)', 'UI', 'C/I/A'],
      rows: [
        ['Haut', "N 0.85", "L 0.77", "N 0.85 / 0.85", "N 0.85", "H 0.56"],
        ['Moyen', "A 0.62", "H 0.44", "L 0.62 / 0.68", "R 0.62", "L 0.22"],
        ['Bas', "L 0.55", "—", "H 0.27 / 0.50", "—", "N 0.00"],
        ['Très bas', "P 0.20", "—", "—", "—", "—"]
      ]
    },
    {
      t: 'table',
      head: ['Score', 'Sévérité', 'Délai de correction indicatif'],
      rows: [
        ['0.0', "None", "—"],
        ['0.1 – 3.9', "Low", "Cycle de release normal"],
        ['4.0 – 6.9', "Medium", "Sprint / 30 jours"],
        ['7.0 – 8.9', "High", "7 à 14 jours"],
        ['9.0 – 10.0', "Critical", "Immédiat / 24-72 h, mitigation"]
      ]
    },
    {
      t: 'callout', v: 'warn', title: "CVSS n'est pas la priorité",
      x: "Un score CVSS ne tient compte ni de l'exposition réelle, ni de la valeur des données, ni des contrôles compensatoires. Un 9.8 sur un service inaccessible pèse moins qu'un 6.1 sur l'administration exposée à Internet. Le rapport doit croiser CVSS, contexte métier et exploitabilité réelle."
    },
    {
      t: 'p',
      x: "Exemple : <strong>SQLi sur l'API publique</strong> → <code>AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code> = 9.1 (Critical). La même injection derrière l'authentification admin → <code>PR:H</code> = 7.2 (High). La même, locale et sans exfiltration → score bien plus bas. Le vecteur documente le raisonnement."
    },
    { t: 'h', x: "7.2 CVSS v4.0 : ce qui change" },
    {
      t: 'p',
      x: "v4.0 abandonne la métrique Scope et introduit quatre groupes : <strong>Base</strong> (av/AC/AT/PR/UI/VC/VI/VA/SC/SI/SA), <strong>Threat</strong> (facteurs d'exploitabilité dans le temps), <strong>Environmental</strong> (contexte de l'organisation) et <strong>Supplemental</strong> (informations non scorées). Deux scores peuvent être publiés : CVSS-B (base) et CVSS-BT (base + threat). La logique de priorisation reste la même : score + contexte."
    },
    {
      t: 'table',
      head: ['v3.1', 'v4.0'],
      rows: [
        ['Scope (S)', "Remplacé par des métriques de vulnérabilité et d'impact sur les systèmes suivants (VC/VI/VA, SC/SI/SA)"],
        ["Pas d'évolution temporelle intégrée", "Groupe Threat (E, CR, IR, AR)"],
        ['Base + Temporal + Environmental', "Base + Threat + Environmental + Supplemental"]
      ]
    },
    { t: 'h', x: "7.3 Structure d'un rapport professionnel" },
    {
      t: 'steps',
      items: [
        { h: "Page de garde", p: "Titre, client, version, date, classification (Confidentiel), nom du consultant, mention d'autorisation." },
        { h: "Synthèse exécutive", p: "1 à 2 pages sans jargon : objectif, périmètre, nombre de vulnérabilités par sévérité, risque global, 3 à 5 recommandations prioritaires." },
        { h: "Périmètre et méthodologie", p: "Actifs testés et exclus, fenêtre, IP sources, référentiels (OWASP WSTG, PTES), techniques et limites (boîte noire, pas de DoS…)." },
        { h: "Résultats détaillés", p: "Une fiche par vulnérabilité : titre, sévérité + vecteur CVSS, composant, description, preuve (requête/réponse, captures), impact métier, remédiation, références." },
        { h: "Plan de remédiation", p: "Tableau priorisé (critique → info), effort estimé, responsable, échéance, possibilité de mitigation temporaire (WAF, désactivation)." },
        { h: "Annexes", p: "Inventaire, journaux, détails techniques, glossaire, procédure de retest, contact." }
      ]
    },
    {
      t: 'code', lang: 'text', title: "Fiche de vulnérabilité type",
      x: `TITRE      : Injection SQL authentifiée sur /api/report
SÉVÉRITÉ   : Critique — CVSS 8.8
VECTEUR    : CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H
COMPOSANT  : API v2.3.1 — endpoint /api/report?period=

DESCRIPTION
Le paramètre period est concaténé dans une requête SQL sans
paramétrage. Un utilisateur authentifié peut injecter une clause
UNION et lire les tables users et payments.

PREUVE
GET /api/report?period=2026-01' UNION SELECT null,email,password_hash
    FROM users-- -
→ 200, 42 lignes retournées (extrait de 2 lignes fourni en annexe)

IMPACT MÉTIER
Fuite de 12 000 comptes et de données de facturation ; violation
potentielle RGPD (notification sous 72 h) ; atteinte à la confiance.

REMÉDIATION
Remplacer la concaténation par des requêtes préparées ; restreindre
les droits du compte DB ; journaliser et alerter sur les erreurs SQL.
Délai recommandé : 72 h. Mitigation : blocage WAF des motifs UNION.`
    },
    {
      t: 'callout', v: 'tip', title: "Écrire pour être compris",
      x: "Titre = composant + vulnérabilité + condition. Pas de « faille critique » sans localisation. Une preuve = ce qu'il faut pour reproduire en 2 minutes. L'impact métier se décrit en pertes concrètes : accès, argent, conformité, réputation, arrêt de service."
    },
    { t: 'h', x: "7.4 Atelier : calculateur CVSS" },
    {
      t: 'p',
      x: "Sélectionnez les métriques et observez le score, la sévérité et le vecteur généré. Le calcul applique la formule officielle v3.1, y compris le cas <em>Scope: Changed</em>."
    },
    { t: 'lab', id: 'cvss' },
    {
      t: 'p',
      x: "Le générateur de rapport complet (constats multiples, export PDF via impression) est disponible dans la section <a href=\"#/report\">Rapport d'audit</a>."
    }
  ],
  quiz: 'q7'
};
