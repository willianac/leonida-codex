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

export const BRAND: BrandConfig = {
  name: 'Leonida Codex',
  shortCode: 'LCX · VI',
  subtitle: 'GTA VI Field Archive & Secret Tracker',
  tagline:
    'Numbered walkthrough steps, protagonist requirements, time windows, and spoiler-guarded payoffs reproduced in-game across the State of Leonida.',
  edition: 'State of Leonida Archive',
  storageKeyPrefix: 'leonida_codex_v1',
};
