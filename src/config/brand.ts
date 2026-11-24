export interface BrandConfig {
  /** Primary display name shown in header, hero, and document title */
  name: string;
  /** Monospace badge / compact nav label */
  shortCode: string;
  /** Subtitle describing the platform scope */
  subtitle: string;
  /** Hero tagline */
  tagline: string;
  /** Current archive edition label */
  edition: string;
  /** Storage namespace prefix */
  storageKeyPrefix: string;
}

/**
 * Initial working project identity.
 * Centralized here so renaming the platform later updates every surface automatically.
 */
export const BRAND: BrandConfig = {
  name: 'LEONIDA CODEX',
  shortCode: 'LCX // VI',
  subtitle: 'Interactive GTA VI Field Archive & Secret Hunter',
  tagline:
    'Verified in-game Easter eggs, community-solved puzzles, and step-by-step field walkthroughs across the State of Leonida.',
  edition: 'Launch Archive • State of Leonida Edition',
  storageKeyPrefix: 'leonida_codex_v1',
};
