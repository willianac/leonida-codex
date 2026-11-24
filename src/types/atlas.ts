export type LeonidaRegionId =
  | 'vice-city'
  | 'leonida-keys'
  | 'grassrivers'
  | 'port-gellhorn'
  | 'leonard-county'
  | 'mount-kalaga'
  | 'offshore-waters';

export interface LeonidaRegion {
  id: LeonidaRegionId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Normalized 0-100 coordinates on the stylized Leonida tactical SVG map */
  labelPos: { x: number; y: number };
  accentVar: string;
}

export type AtlasModuleId =
  | 'easter-eggs'
  | 'world-events'
  | 'collectibles'
  | 'mysteries'
  | 'codes-vaults'
  | 'unique-gear';

export interface AtlasModuleDefinition {
  id: AtlasModuleId;
  label: string;
  shortLabel: string;
  status: 'live' | 'planned';
  summary: string;
  plannedCapabilities: string[];
  routeSlug: string;
}

export interface WalkthroughStep {
  stepNumber: number;
  title: string;
  instruction: string;
  landmarkCue?: string;
  fieldTip?: string;
}

export interface EntryRequirements {
  timeOfDay: string;
  weather?: string;
  protagonist:
    | 'Either'
    | 'Lucia'
    | 'Jason'
    | 'Both Together'
    | 'Solo Only (Lucia or Jason)';
  equipment?: string;
  storyProgress?: string;
  specialCode?: {
    label: string;
    value: string;
  };
}

export interface SourceAttribution {
  label: string;
  community: string;
  url?: string;
}

export type VerificationStatus = 'verified' | 'community-solved';

/**
 * Shared base schema across all current and future Leonida Codex modules
 * (Easter Eggs, Collectibles, World Events, Safe Codes, Unique Gear, etc.)
 */
export interface BaseDiscoveryEntry {
  id: string;
  slug: string;
  moduleId: AtlasModuleId;
  indexCode: string;
  title: string;
  subtitle: string;
  regionId: LeonidaRegionId;
  subLocation: string;
  /** Normalized 0-100 coordinates on the Leonida SVG map */
  mapPin: { x: number; y: number };
  summary: string;
  requirements: EntryRequirements;
  steps: WalkthroughStep[];
  verificationStatus: VerificationStatus;
  sources: SourceAttribution[];
  tags: string[];
  featured?: boolean;
}

export type EasterEggCategory =
  | 'franchise-callback'
  | 'pop-culture'
  | 'cryptid-myth'
  | 'puzzle-secret'
  | 'environmental'
  | 'florida-parody';

export type TriggerComplexity = 'walk-up' | 'conditional' | 'multi-step';

export interface EasterEggEntry extends BaseDiscoveryEntry {
  moduleId: 'easter-eggs';
  category: EasterEggCategory;
  complexity: TriggerComplexity;
  /** Movie, TV show, classic Rockstar title, or folklore referenced */
  referenceOrigin: string;
  /** What you actually see, trigger, or unlock (guarded by optional Spoiler Shield) */
  payoffDescription: string;
  /** Context on why this secret matters or how the community cracked it */
  loreContext: string;
}
