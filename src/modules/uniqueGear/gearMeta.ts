import type { UniqueGearCategory } from '../../types/atlas';

export const GEAR_CATEGORY_META: Record<
  UniqueGearCategory,
  { label: string; shortLabel: string; colorVar: string; softBgVar: string }
> = {
  weapon: {
    label: 'Secret Weapons',
    shortLabel: 'Weapons',
    colorVar: 'var(--accent-flamingo)',
    softBgVar: 'var(--accent-flamingo-soft)',
  },
  apparel: {
    label: 'Wardrobe & Hats',
    shortLabel: 'Wardrobe & Hats',
    colorVar: 'var(--accent-teal)',
    softBgVar: 'var(--accent-teal-soft)',
  },
  vehicle: {
    label: 'Rare Vehicles',
    shortLabel: 'Rare Vehicles',
    colorVar: 'var(--accent-amber)',
    softBgVar: 'var(--accent-amber-soft)',
  },
  accessory: {
    label: 'Accessories & Tattoos',
    shortLabel: 'Accessories & Tattoos',
    colorVar: 'var(--accent-lime)',
    softBgVar: 'var(--accent-lime-soft)',
  },
};
