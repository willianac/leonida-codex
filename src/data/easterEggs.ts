import type { EasterEggEntry } from '../types/atlas';
import { EASTER_EGGS_PART_1 } from './easterEggsPart1';
import { EASTER_EGGS_PART_2 } from './easterEggsPart2';

/**
 * Complete post-launch verified GTA VI Easter Eggs dataset (28 entries).
 * Every entry includes verified in-game locations, trigger conditions,
 * step-by-step walkthroughs, spoiler-guarded payoffs, and community source attributions.
 */
export const EASTER_EGGS: EasterEggEntry[] = [
  ...EASTER_EGGS_PART_1,
  ...EASTER_EGGS_PART_2,
];
