/**
 * Badges débloquables. Chaque `test` reçoit l'état complet du store.
 * `hint` est affiché tant que le badge est verrouillé.
 */
import { MODULES } from './course.js';

export const BADGES = [
  { id: 'identite', name: "Identité forgerée", icon: '🪪', desc: "Vous avez défini votre nom d'apprenti.", hint: "Renseignez votre nom dans le profil.", test: (s) => !!s.user.name.trim() },

  { id: 'premier-pas', name: "Premier pas", icon: '👣', desc: "Premier module validé.", hint: "Terminez un module avec au moins 70 % au quiz.", test: (s) => Object.keys(s.completed).length >= 1 },

  { id: 'juriste', name: "Cadet juridique", icon: '⚖️', desc: "Module 1 validé : le cadre avant la technique.", hint: "Validez le module 1.", test: (s) => !!s.completed.m1 },
  { id: 'eclaireur', name: "Éclaireur", icon: '🛰️', desc: "Module 2 validé : la surface d'attaque est cartographiée.", hint: "Validez le module 2.", test: (s) => !!s.completed.m2 },
  { id: 'cartographe', name: "Cartographe", icon: '🗺️', desc: "Module 3 validé : plus aucun endpoint ne vous échappe.", hint: "Validez le module 3.", test: (s) => !!s.completed.m3 },
  { id: 'exploitant', name: "Exploitant contrôlé", icon: '🧪', desc: "Module 4 validé : OWASP Top 10 maîtrisé.", hint: "Validez le module 4.", test: (s) => !!s.completed.m4 },
  { id: 'intercepteur', name: "Intercepteur", icon: '🕵️', desc: "Module 5 validé : Burp n'a plus de secret.", hint: "Validez le module 5.", test: (s) => !!s.completed.m5 },
  { id: 'ascension', name: "Ascension", icon: '🔺', desc: "Module 6 validé : privilèges et post-exploitation.", hint: "Validez le module 6.", test: (s) => !!s.completed.m6 },
  { id: 'rapporteur', name: "Rapporteur", icon: '📊', desc: "Module 7 validé : vos constats deviennent des décisions.", hint: "Validez le module 7.", test: (s) => !!s.completed.m7 },
  { id: 'rempart', name: "Rempart", icon: '🛡️', desc: "Module 8 validé : la défense n'a plus de trou.", hint: "Validez le module 8.", test: (s) => !!s.completed.m8 },

  { id: 'ctf-web', name: "Chasseur de flags web", icon: '🚩', desc: "CTF web terminé : de la reconnaissance au contrôle d'accès.", hint: "Validez le module 9 (CTF web).", test: (s) => !!s.completed.m9 },
  { id: 'ctf-wordpress', name: "Briseur de WordPress", icon: '🧩', desc: "CTF WordPress terminé : énumération, plugin et RCE.", hint: "Validez le module 10 (CTF WordPress).", test: (s) => !!s.completed.m10 },
  { id: 'ctf-sqli', name: "Maître de l'injection", icon: '💉', desc: "CTF SQLi terminé : de l'apostrophe au flag root.", hint: "Validez le module 11 (CTF injection SQL).", test: (s) => !!s.completed.m11 },
  { id: 'ctf-privesc', name: "Ascension finale", icon: '🪜', desc: "CTF privesc terminé : de www-data à root.", hint: "Validez le module 12 (CTF élévation de privilèges).", test: (s) => !!s.completed.m12 },
  { id: 'sentinelle', name: "Sentinelle réseau", icon: '📡', desc: "Module 13 validé : IP, MAC et IMEI ne vous cachent plus leur portée.", hint: "Validez le module 13 (identités réseau).", test: (s) => !!s.completed.m13 },

  { id: 'sans-faute', name: "Sans faute", icon: '🎯', desc: "Un quiz réussi à 100 %.", hint: "Obtenez 100 % à un quiz.", test: (s) => Object.values(s.quizzes).some((q) => q.total > 0 && q.best === q.total) },

  { id: 'operateur', name: "Opérateur", icon: '⚡', desc: "1 000 XP accumulés.", hint: "Atteignez 1 000 XP.", test: (s) => s.xp >= 1000 },
  { id: 'veteran', name: "Vétéran", icon: '🔥', desc: "2 000 XP accumulés.", hint: "Atteignez 2 000 XP.", test: (s) => s.xp >= 2000 },

  { id: 'parcours-complet', name: "Parcours complet", icon: '🏆', desc: `Les ${MODULES.length} modules sont validés.`, hint: `Validez les ${MODULES.length} modules.`, test: (s) => Object.keys(s.completed).length >= MODULES.length },

  { id: 'memoire', name: "Mémoire vive", icon: '🧠', desc: "20 flashcards maîtrisées.", hint: "Marquez 20 flashcards comme maîtrisées.", test: (s) => s.cards.known.length >= 20 },

  { id: 'lab-rat', name: "Rat de labo", icon: '🧫', desc: "5 ateliers interactifs terminés.", hint: "Terminez 5 ateliers.", test: (s) => Object.values(s.labs).filter((l) => l.done).length >= 5 },

  { id: 'auditeur', name: "Auditeur", icon: '📄', desc: "Un rapport d'audit généré.", hint: "Générez un rapport depuis la section Rapport d'audit.", test: (s) => s.reports.length > 0 },

  { id: 'certifie', name: "Certifié", icon: '🎖️', desc: "Certificat de fin de parcours généré.", hint: "Générez votre certificat.", test: (s) => !!s.meta.certificateGenerated },

  { id: 'curieux', name: "Curieux insatiable", icon: '🔭', desc: "10 fiches outils consultées.", hint: "Consultez 10 fiches dans la boîte à outils.", test: (s) => (s.meta.toolsViewed || []).length >= 10 },

  { id: 'assidu', name: "Assidu", icon: '⏱️', desc: "2 heures d'étude cumulées.", hint: "Accumulez 2 h de temps d'étude.", test: (s) => s.study.seconds >= 7200 }
];

export const BADGE_BY_ID = Object.fromEntries(BADGES.map((b) => [b.id, b]));
