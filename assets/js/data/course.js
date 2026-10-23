import m1 from './m1.js';
import m2 from './m2.js';
import m3 from './m3.js';
import m4 from './m4.js';
import m5 from './m5.js';
import m6 from './m6.js';
import m7 from './m7.js';
import m8 from './m8.js';

export const MODULES = [m1, m2, m3, m4, m5, m6, m7, m8];
export const MODULE_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m]));
export const TOTAL_XP = MODULES.reduce((sum, m) => sum + m.xp, 0);
export const TOTAL_DURATION = MODULES.reduce((sum, m) => sum + m.duration, 0);
