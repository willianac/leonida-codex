export interface DiscoveryDropEntry {
  id: string;
  /** Human-readable date shown to players (e.g., "November 24, 2026") */
  dateLabel: string;
  badgeLabel: string;
  /** Player-facing summary of newly uncovered secrets (never mention internal tooling/files) */
  summary: string;
  addedEggs: Array<{
    indexCode: string;
    slug: string;
    title: string;
    regionLabel: string;
  }>;
}

/**
 * Player-facing "What's New" feed shown in the website header modal.
 * Only populated when new verified Easter eggs are added—written strictly for players.
 */
export const DISCOVERY_DROPS: DiscoveryDropEntry[] = [
  {
    id: 'drop-2026-11-24-wave-2',
    dateLabel: 'November 24, 2026',
    badgeLabel: '2 New Secrets',
    summary:
      'Uncovered a cinematic open-water shark encounter in Leonida Bay and a bilingual Breaking Bad storefront nod in Ambrosia.',
    addedEggs: [
      {
        indexCode: 'EE-29',
        slug: 'jaws-smoking-orca-boat-shark-attack',
        title: 'Jaws Smoking "Orca" Boat & Giant Shark Attack',
        regionLabel: 'Leonida Keys',
      },
      {
        indexCode: 'EE-30',
        slug: 'w-blancos-cuban-foods-breaking-bad-nod',
        title: '"W. Blanco’s Cuban Foods" (Breaking Bad / Metástasis Tribute)',
        regionLabel: 'Grassrivers',
      },
    ],
  },
  {
    id: 'drop-2026-11-24-launch',
    dateLabel: 'November 24, 2026',
    badgeLabel: 'Launch Archive • 28 Secrets',
    summary:
      'Initial State of Leonida field archive live across all 7 regions—highlighted by these community-favorite multi-step mysteries:',
    addedEggs: [
      {
        indexCode: 'EE-01',
        slug: '2002-vice-city-malibu-club-portal',
        title: 'The 2002 Vice City Portal & Malibu Club ("LIFEISPASSINGMEBY")',
        regionLabel: 'Vice-Dale',
      },
      {
        indexCode: 'EE-04',
        slug: 'ufo-abduction-alien-dream-secret-bunker',
        title: 'UFO Abduction, Alien Dream & South Point Secret Bunker',
        regionLabel: 'Kelly County',
      },
      {
        indexCode: 'EE-08',
        slug: 'krakinos-giant-mutant-crab-pelican-valley',
        title: 'Krakinos the Giant Mutant Crab & Pelican Valley Outpost',
        regionLabel: 'Grassrivers',
      },
    ],
  },
];
