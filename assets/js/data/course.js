import m1 from './m1.js';
import m2 from './m2.js';
import m3 from './m3.js';
import m4 from './m4.js';
import m5 from './m5.js';
import m6 from './m6.js';
import m7 from './m7.js';
import m8 from './m8.js';
import m9 from './m9.js';
import m10 from './m10.js';
import m11 from './m11.js';
import m12 from './m12.js';
import m13 from './m13.js';

import r1 from './refs/m1.js';
import r2 from './refs/m2.js';
import r3 from './refs/m3.js';
import r4 from './refs/m4.js';
import r5 from './refs/m5.js';
import r6 from './refs/m6.js';
import r7 from './refs/m7.js';
import r8 from './refs/m8.js';
import r13 from './refs/m13.js';

const REFS = { m1: r1, m2: r2, m3: r3, m4: r4, m5: r5, m6: r6, m7: r7, m8: r8, m13: r13 };

function withRefs(mod) {
  const ref = REFS[mod.id];
  if (!ref) return mod;
  return {
    ...mod,
    blocks: [...mod.blocks, ...(ref.blocks || [])],
    exos: ref.exos || []
  };
}

export const MODULES = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13].map(withRefs);
export const MODULE_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m]));
export const TOTAL_XP = MODULES.reduce((sum, m) => sum + m.xp, 0);
export const TOTAL_DURATION = MODULES.reduce((sum, m) => sum + m.duration, 0);
