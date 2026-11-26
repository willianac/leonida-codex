import type {
  AtlasModuleDefinition,
  EasterEggCategory,
  LeonidaRegion,
  LeonidaRegionId,
  TriggerComplexity,
} from '../types/atlas';

export const LEONIDA_REGIONS: Record<LeonidaRegionId, LeonidaRegion> = {
  'vice-city': {
    id: 'vice-city',
    name: 'Vice City & Vice-Dale County',
    shortName: 'Vice-Dale',
    tagline: 'Ocean Beach, Washington & Vespucci Islands, Crosstown, Hamlet & South Point',
    description:
      'Leonida’s neon-lit metropolitan eastern coast and southern Vice-Dale corridor—home to the 2002 Malibu Club portal finale, Dexter’s apartment, haunted hotels, and the South Point Airfield bunker.',
    labelPos: { x: 75.5, y: 57 },
    accentVar: 'var(--accent-flamingo)',
  },
  'leonida-keys': {
    id: 'leonida-keys',
    name: 'Leonida Keys',
    shortName: 'Leonida Keys',
    tagline: 'Key Lento, Gambit Bay, Dog Island, Surfside Drive & Badger R&D Tower',
    description:
      'Tropical island chain stretching southwest across Gambit Bay—housing Jason’s Key Lento safehouse, the Badger R&D radio tower secrets, Scarface’s stilt house, and Cool Dog’s jet ski.',
    labelPos: { x: 58, y: 96 },
    accentVar: 'var(--accent-teal)',
  },
  grassrivers: {
    id: 'grassrivers',
    name: 'Grassrivers & Mariana County',
    shortName: 'Grassrivers',
    tagline: 'Gullet Marsh, Cottonmouth Lake, Pelican Valley & Longneck Trail',
    description:
      'Dense southern wetlands and mangrove channels hiding Kirk’s Skunk Ape ("Mr. Mangrove") questline, Krakinos the giant mutant crab, and wild backcountry encounters.',
    labelPos: { x: 52, y: 76.5 },
    accentVar: 'var(--accent-lime)',
  },
  'port-gellhorn': {
    id: 'port-gellhorn',
    name: 'Port Gellhorn & Kelly County',
    shortName: 'Kelly County',
    tagline: 'Port Gellhorn, Gellhorn Raceway, Starlet Motel & Manifest Canyon',
    description:
      'Western coast and rugged northern canyonlands—site of the 2:00 AM UFO abduction, the Monument of Leonidan Supremacy, Arthur Morgan’s hat yard sale, and the exploding whale.',
    labelPos: { x: 29, y: 54 },
    accentVar: 'var(--accent-amber)',
  },
  'leonard-county': {
    id: 'leonard-county',
    name: 'Leonard County & NE Coast',
    shortName: 'Leonard Co.',
    tagline: 'Belville, Waning Sands, Millport Basin & Little Hardin Island',
    description:
      'Northeastern suburbs, coastal barrier islands, and tourist strips—featuring the St. Lucia Lighthouse ghosts, the Belville Simulation House, and Frontier Adventure Golf.',
    labelPos: { x: 54, y: 36 },
    accentVar: 'var(--accent-sky)',
  },
  'mount-kalaga': {
    id: 'mount-kalaga',
    name: 'Mount Kalaga & Lummox County',
    shortName: 'Kalaga / Lummox',
    tagline: 'Mount Kalaga Summit, Southern Moreau Paper Mill & Millport',
    description:
      'Northern mountain wilderness and riverside mill ruins—home to the purple-fog meteorite crater, stone circle, Mario & Luigi hidden block, and Jacob’s Tavern.',
    labelPos: { x: 47, y: 11.5 },
    accentVar: 'var(--accent-lime)',
  },
  'offshore-waters': {
    id: 'offshore-waters',
    name: 'Leonida Deep Ocean',
    shortName: 'Deep Ocean',
    tagline: 'Abyssal seabed southeast of Gloriana Key & outer maritime trenches',
    description:
      'Deep-sea diving zones off Leonida’s southeastern shelf where scuba gear and a speargun reveal sunken shipwrecks and the giant metal Kraken.',
    labelPos: { x: 89.5, y: 81.5 },
    accentVar: 'var(--accent-teal)',
  },
};

export const REGION_LIST: LeonidaRegion[] = Object.values(LEONIDA_REGIONS);

export const MODULE_REGISTRY: AtlasModuleDefinition[] = [
  {
    id: 'easter-eggs',
    label: 'Easter Eggs & Secrets',
    shortLabel: 'Easter Eggs',
    status: 'live',
    summary:
      'Community-verified hidden references, franchise callbacks, cryptid encounters, and multi-step puzzles with actionable in-game walkthroughs.',
    plannedCapabilities: [
      'Interactive step-by-step discovery checklists',
      'Tactical Leonida county radar & pin locator',
      'Optional Spoiler Shield for surprise payoffs',
    ],
    routeSlug: 'easter-eggs',
  },
  {
    id: 'codes-vaults',
    label: 'Keypads, Safes & Phone Codes',
    shortLabel: 'Codes & Safes',
    status: 'live',
    summary:
      'Every cracked safe combination, LPL substation input, JoySystem cipher, and dialable 786/305 phone secret—complete with interactive puzzle calculators.',
    plannedCapabilities: [
      'Interactive Tenebrae Lux & Alien Bunker code calculators',
      'One-tap keypad code copy & clue location guides',
      'Safe loot value & unique watch/weapon index',
    ],
    routeSlug: 'codes-vaults',
  },
  {
    id: 'unique-gear',
    label: 'Unique Weapons, Hats & Rides',
    shortLabel: 'Unique Gear',
    status: 'live',
    summary:
      'Exact unlock guides for secret weapons, iconic throwback hats/outfits, collectible watches, tattoos, and rare fixed-spawn vehicles across Leonida.',
    plannedCapabilities: [
      'Wardrobe & weapon locker checklist for Jason and Lucia',
      'Garage storage & alarm-bypass instructions',
      'Stat perk & hidden item comparisons',
    ],
    routeSlug: 'unique-gear',
  },
  {
    id: 'mysteries',
    label: 'Active Myth Investigations',
    shortLabel: 'Myth Board',
    status: 'live',
    summary:
      'Investigative case files tracking confirmed clues, active community theories, and debunked dead ends across Leonida’s deepest mysteries.',
    plannedCapabilities: [
      'Evidence board linking Manifest Canyon & Kalaga clues',
      'Confirmed Clue vs. Active Hypothesis vs. Debunked tags',
      'Ruled-out hoax warnings so hunters save hours in-game',
    ],
    routeSlug: 'mysteries',
  },
  {
    id: 'collectibles',
    label: 'Collectibles & Underwater 33',
    shortLabel: 'Collectibles',
    status: 'planned',
    summary:
      'County-by-county tracking for 100% completion collectibles, Meteorite chunks, Leonida’s 33 Underwater Discoveries, and completion rewards.',
    plannedCapabilities: [
      'Per-county completion counters (e.g., 14/33 Underwater)',
      'Optimal route ordering between adjacent pins',
      'Reward tier breakdown & checklist sync',
    ],
    routeSlug: 'collectibles',
  },
  {
    id: 'world-events',
    label: 'Random Events & Strangers',
    shortLabel: 'World Events',
    status: 'planned',
    summary:
      'Dynamic roadside encounters, multi-part Stranger arcs (like Kirk’s swamp hunts), and missable world interactions for Lucia and Jason.',
    plannedCapabilities: [
      'Spawn window & protagonist compatibility matrix',
      'Choice consequences & outcome comparisons',
      'Non-spoiler encounter trigger radii',
    ],
    routeSlug: 'world-events',
  },
];

export const CATEGORY_META: Record<
  EasterEggCategory,
  { label: string; shortLabel: string; colorVar: string; description: string }
> = {
  'franchise-callback': {
    label: 'Rockstar & GTA Callback',
    shortLabel: 'Rockstar Callback',
    colorVar: 'var(--accent-flamingo)',
    description: 'Nods to GTA: Vice City (2002), GTA IV, GTA V, Red Dead Redemption 2, San Andreas, and Bully.',
  },
  'pop-culture': {
    label: 'Film, TV & Gaming Homage',
    shortLabel: 'Pop Culture',
    colorVar: 'var(--accent-teal)',
    description: 'Tributes to Dexter, Scarface, Fast & Furious, Silent Hill, IT, Super Mario Bros., and Terminator.',
  },
  'cryptid-myth': {
    label: 'Cryptids, Ghosts & UFOs',
    shortLabel: 'Cryptids & Lore',
    colorVar: 'var(--accent-lime)',
    description: 'Skunk Ape, UFO abductions, St. Lucia Lighthouse ghosts, Krakinos mutant crab, and the Immortal Man.',
  },
  'puzzle-secret': {
    label: 'Multi-Step Puzzle & Code',
    shortLabel: 'Secret Puzzle',
    colorVar: 'var(--accent-amber)',
    description: 'Complex multi-stage mysteries, substation sequences, Tenebrae Lux console ciphers, and hidden bunkers.',
  },
  environmental: {
    label: 'Hidden Interior & World Secret',
    shortLabel: 'World Secret',
    colorVar: 'var(--accent-sky)',
    description: 'Secret crawlspaces, radio tower summits, deep-sea wrecks, and interactive world details.',
  },
  'florida-parody': {
    label: 'Leonida / Florida Man Parody',
    shortLabel: 'Leonida Parody',
    colorVar: 'var(--accent-coral)',
    description: 'Jet-skiing dogs, exploding beached whales, escaped Bengal tigers, and backcountry chaos.',
  },
};

export const COMPLEXITY_META: Record<
  TriggerComplexity,
  { label: string; badgeText: string; rank: number; hint: string }
> = {
  'walk-up': {
    label: 'Walk-Up Sighting',
    badgeText: 'Direct Visit',
    rank: 1,
    hint: 'Present at the location—travel there and inspect or interact.',
  },
  conditional: {
    label: 'Conditional Trigger',
    badgeText: 'Time / Condition',
    rank: 2,
    hint: 'Requires a specific time window, chapter, solo character, or equipment.',
  },
  'multi-step': {
    label: 'Multi-Step Sequence',
    badgeText: 'Multi-Step Puzzle',
    rank: 3,
    hint: 'Requires solving an ordered chain of clues, substations, or keypad codes.',
  },
};
