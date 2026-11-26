import type { UniqueGearEntry } from '../types/atlas';

export const UNIQUE_GEAR: UniqueGearEntry[] = [
  // =========================================================================
  // SECRET WEAPONS ('weapon')
  // =========================================================================
  {
    id: 'ug-01-crabshack-vf5-smg',
    slug: 'crabshack-vf5-smg',
    moduleId: 'unique-gear',
    indexCode: 'UG-01',
    title: 'Crabshack VF5 SMG',
    subtitle: 'Custom Vom Feuer Submachine Gun Hidden in Pelican Valley’s Boathouse',
    regionId: 'grassrivers',
    subLocation: 'Pelican Valley Swamps (Gullet Marsh) — Pier Boathouse',
    mapPin: { x: 61, y: 71 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Custom-finished Vom Feuer military-grade SMG variant with pre-installed tactical hardware. Once looted, it unlocks permanently under VF5 Variants in the shared Weapon Locker for both Jason and Lucia.',
    summary:
      'Powering up an abandoned crustacean research outpost in Gullet Marsh and cracking its three-part cipher rewards $11,000+ cash and this unique submachine gun as early as Chapter 1.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Boat (launch from Stillwater Path dock) & open long-gun slot or vehicle trunk',
      specialCode: {
        label: 'PC Password -> Shack Safe -> Boathouse Keypad',
        value: 'CLEAVES  ->  0072  ->  0212',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Boat to Pelican Valley Outpost & Flip the Rear Breaker',
        landmarkCue: 'Gullet Marsh • Blue Crab Cages',
        instruction:
          'Launch a boat from the Stillwater Path dock and steer into Pelican Valley until you reach the dark wooden research outpost surrounded by stacked blue crab cages. Walk behind the main shack and throw the exterior breaker switch to restore power.',
      },
      {
        stepNumber: 2,
        title: 'Log Into the Desk PC With "CLEAVES" & Survive the Ambush',
        landmarkCue: 'Side Bedroom Floorboards -> Main Desk PC',
        instruction:
          'Check the scratched floorboards in the side bedroom opposite the kitchen for password CLEAVES, enter it on the desk computer to read "Safe Code = Double Success", and mash the prompt when Krakinos the giant mutant crab lunges onto your chest.',
      },
      {
        stepNumber: 3,
        title: 'Open Shack Safe 0072 for the Pier Code',
        landmarkCue: 'Adjacent Lab Clipboard (Specimen 0036 x 2)',
        instruction:
          'Confirm "Specimen 0036 = SUCCESS" on the lab shed clipboard, then punch doubled code 0072 into the main shack safe to collect ~$1,000+ cash and dock keypad note 0212.',
      },
      {
        stepNumber: 4,
        title: 'Unlock Pier Boathouse 0212 & Claim the Crabshack VF5',
        landmarkCue: 'Wooden Pier Boathouse',
        instruction:
          'Walk onto the wooden pier, dial 0212 into the boathouse keypad, and pick up the Crabshack VF5 SMG alongside $10,000 in stacked cash. Its yellow unique-weapon icon confirms permanent Weapon Locker registration.',
        fieldTip:
          'If your weapon sling is full, stash a long gun in your boat or car trunk before picking up the SMG, or swap immediately—either way it stays saved in your safehouse Weapon Locker.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'GTABase', label: 'Crabshack VF5 Unique Variant Profile' },
      { community: 'Dexerto', label: 'Pelican Valley Outpost & VF5 SMG Guide' },
      { community: 'r/GTA6', label: 'CLEAVES / 0072 / 0212 Puzzle Thread' },
    ],
    tags: ['crabshack vf5', 'smg', 'vom feuer', 'krakinos', 'pelican valley', '0212', 'weapon'],
    relatedEasterEggSlug: 'krakinos-giant-mutant-crab-pelican-valley',
    featured: true,
  },
  {
    id: 'ug-02-cursed-knife',
    slug: 'cursed-knife-st-lucia-lighthouse',
    moduleId: 'unique-gear',
    indexCode: 'UG-02',
    title: 'The Cursed Knife',
    subtitle: 'Glowing Engraved Melee & Throwable Blade Salvaged Off Little Hardin Island',
    regionId: 'leonard-county',
    subLocation: 'Little Hardin Island — Submerged Wooden Wreck East of St. Lucia Lighthouse',
    mapPin: { x: 86, y: 30 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Supernatural Combat Knife variant etched with occult markings that glows green in darkness. Functions as both a silent melee finisher and a retrievable thrown blade, permanently stored in your shared Weapon Locker.',
    summary:
      'Witnessing the 1909 nocturnal ghost murder atop St. Lucia Lighthouse opens a foggy 1:30 AM dive to a sunken wreck holding Leonida’s spookiest unique melee weapon.',
    requirements: {
      timeOfDay: '22:00–04:00 (Supernatural fog dive triggers ~01:30 AM)',
      protagonist: 'Either',
      equipment: 'Boat, Binoculars, Metal Detector (Scuba Gear spawns on keeper’s docked boat)',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Watch the Spectral Argument at St. Lucia Lighthouse',
        landmarkCue: 'Little Hardin Island • 22:00–04:00',
        instruction:
          'Boat across Millport Basin to Little Hardin Island after 10:00 PM. Climb St. Lucia Lighthouse’s exterior ladder to the upper balcony and aim your Binoculars across the deck to witness ghosts Frank Pudney and Godfrey Asher’s 1909 murder.',
      },
      {
        stepNumber: 2,
        title: 'Inspect the 1909 Photograph & Keeper’s Logbook',
        landmarkCue: 'Lighthouse Base -> NW Keeper’s Cottage',
        instruction:
          'Climb down, flip over the old photograph at the impact spot, then force open the front door of the abandoned keeper’s cottage northwest of the tower and read the Old Logbook beside the fireplace.',
      },
      {
        stepNumber: 3,
        title: 'Sail East at 1:30 AM Until the Engine Stalls in Green Fog',
        landmarkCue: 'Keeper’s Boat (Pre-Stocked With Scuba Gear)',
        instruction:
          'Around 1:30 AM, board the boat moored beside the keeper’s house and motor off the eastern tip of Little Hardin Island until unnatural fog envelopes the water, whispers echo, and your engine cuts out.',
      },
      {
        stepNumber: 4,
        title: 'Sweep the Seabed With Your Metal Detector',
        landmarkCue: 'Sunken Skeletal Hull',
        instruction:
          'Put on Scuba Gear, dive to the ocean floor before dawn, and follow your Metal Detector pings to the sunken wooden wreck to claim the glowing Cursed Knife.',
        fieldTip:
          'Once retrieved, surface promptly while it is still dark and glance back toward St. Lucia Lighthouse to catch the glowing Ghost Ship gliding across the water.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'GTABase', label: 'Cursed Knife Unique Melee Entry' },
      { community: 'Vice', label: 'St. Lucia Lighthouse & Cursed Knife Walkthrough' },
      { community: 'Dexerto', label: 'Little Hardin Island Ghost Ship Guide' },
    ],
    tags: ['cursed knife', 'melee', 'glowing knife', 'lighthouse', 'little hardin', 'ghost ship'],
    relatedEasterEggSlug: 'st-lucia-lighthouse-ghosts-cursed-knife-ghost-ship',
    featured: true,
  },
  {
    id: 'ug-03-assassin-nipper-38',
    slug: 'assassin-nipper-38-silenced-pistol',
    moduleId: 'unique-gear',
    indexCode: 'UG-03',
    title: 'Assassin Nipper .38 (Silenced Compact Pistol)',
    subtitle: 'Pre-Suppressed Scorpio Compact Sidearm Inside a Derelict Spy Vessel',
    regionId: 'leonida-keys',
    subLocation: 'Southeastern Tip of Permit Keys (Mariana County) — Wrecked Spy Vessel Deck Hatch',
    mapPin: { x: 47, y: 91 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'One-of-a-kind Scorpio Nipper .38 variant pre-fitted with an integrated suppressor right from Chapter 1—ideal for silent break-ins before shop silencers unlock. (A standard Nipper pistol also drops from the Exploding Beached Whale in Port Gellhorn.)',
    summary:
      'Skip early-game stealth headaches by boarding a wrecked spy vessel at the southeastern tip of the Permit Keys and prying open its deck hatch for a free suppressed sidearm.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Boat or jet ski to reach the Permit Keys shoreline',
      storyProgress: 'Available right from Chapter 1 free roam',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Travel to the Southeastern Tip of the Permit Keys',
        landmarkCue: 'Southern Leonida Keys / Mariana Border',
        instruction:
          'Take a watercraft to the southeasternmost point of the Permit Keys and scan the rocky shallows for the listing hull of a derelict spy vessel.',
      },
      {
        stepNumber: 2,
        title: 'Climb Aboard & Open the Deck Floor Hatch',
        landmarkCue: 'Yellow Unique Weapon Marker',
        instruction:
          'Clamber onto the weathered main deck, locate the recessed floor hatch, and pry it open to reveal the Assassin Nipper .38 tucked inside.',
      },
      {
        stepNumber: 3,
        title: 'Pocket the Pistol to Sync It to Your Weapon Locker',
        landmarkCue: 'Shared Jason & Lucia Armory',
        instruction:
          'Pick up the Assassin Nipper .38 so its yellow unique variant registers permanently under Nipper .38 Variants for both protagonists.',
        fieldTip:
          'Looking for the regular Nipper pistol early in Kelly County too? Visit the Exploding Beached Whale southwest of Gellhorn Raceway and search the post-blast sand debris.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'IGN', label: 'Best Early Unique Weapons in GTA 6' },
      { community: 'PC Gamer', label: 'Assassin Nipper .38 Stealth Guide' },
      { community: 'Beebom', label: 'Permit Keys Derelict Vessel Location' },
    ],
    tags: ['nipper pistol', 'assassin nipper', 'silenced', 'stealth', 'permit keys', 'pistol'],
    relatedEasterEggSlug: 'exploding-beached-whale-gellhorn-coast',
    featured: true,
  },
  {
    id: 'ug-04-arras-bullhead-speargun',
    slug: 'arras-bullhead-speargun',
    moduleId: 'unique-gear',
    indexCode: 'UG-04',
    title: 'Arras Bullhead Speargun',
    subtitle: 'Underwater Harpoon Launcher for Shark Defense & Abyssal Salvage',
    regionId: 'leonida-keys',
    subLocation: 'Leonida Bay (Smoking "Orca" Wreck) & Ch. 1 "Island Dreams" / Key Lento Waters',
    mapPin: { x: 49, y: 84 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Specialized amphibious harpoon launcher manufactured by Arras that fires accurately underwater—vital for neutralizing aggressive sharks around sunken wrecks and Leonida’s 33 Underwater Discoveries.',
    summary:
      'While first loaned during Chapter 1’s "Island Dreams" diving mission, you can grab a free speargun right off the deck of Leonida Bay’s smoking Jaws boat or claim it permanently for your armory.',
    requirements: {
      timeOfDay: 'Daytime best to spot black smoke in Leonida Bay',
      protagonist: 'Either',
      equipment: 'Any fast boat',
      storyProgress: 'Available from Chapter 1 ("Island Dreams" or Leonida Bay free roam)',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Complete "Island Dreams" or Patrol Leonida Bay',
        landmarkCue: 'Capt. Kenton Ch. 1 Mission / Open Bay Waters',
        instruction:
          'Progress through Chapter 1’s "Island Dreams" mission to unlock permanent Scuba Gear alongside your introduction to the Arras Bullhead—or take a boat straight into Leonida Bay free roam and scan the horizon for a rising plume of black engine smoke.',
      },
      {
        stepNumber: 2,
        title: 'Board the Smoking "Orca" Fishing Boat Carefully',
        landmarkCue: 'Circling Great Shark Hazard',
        instruction:
          'Pull up alongside the smoking fishing vessel as the giant shark circles the hull. Hop swiftly onto the deck and grab the speargun waiting near the stern.',
      },
      {
        stepNumber: 3,
        title: 'Equip for Deep-Sea Expeditions & Verify Locker Storage',
        landmarkCue: 'Weapon Wheel -> Heavy / Special Slot',
        instruction:
          'Test a shot against the circling shark if needed, scoop up the beeping floating contraband packages nearby, and store the Arras Bullhead in your safehouse Weapon Locker so it is always ready before deep dives.',
        fieldTip:
          'Pair the Arras Bullhead with Scuba Gear before diving southeast of Gloriana Key for the Underwater Metal Kraken.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'GTABase', label: 'Arras Bullhead Speargun Database Entry' },
      { community: 'GameSpot', label: 'Island Dreams Scuba & Speargun Guide' },
      { community: 'r/GTA6', label: 'Leonida Bay Smoking Boat Speargun Pickup' },
    ],
    tags: ['speargun', 'arras bullhead', 'jaws', 'underwater', 'shark', 'leonida bay'],
    relatedEasterEggSlug: 'jaws-smoking-orca-boat-shark-attack',
  },
  {
    id: 'ug-05-donnies-hl-38',
    slug: 'donnies-hl-38-revolver',
    moduleId: 'unique-gear',
    indexCode: 'UG-05',
    title: 'Donnie’s H&L .38 Revolver',
    subtitle: 'Missable Chapter 1 Custom Double-Action Revolver Stashed in Donnie’s Trunk',
    regionId: 'leonida-keys',
    subLocation: 'Key Lento — Trunk of Donnie’s Red Car (Chapter 1 Mission: "Don Gone")',
    mapPin: { x: 65, y: 82 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Custom-finished Hawk & Little double-action .38 revolver variant with high early-game stopping power and unique grip detailing, shared across Jason and Lucia’s Weapon Locker once looted.',
    missableWarning:
      'HIGHLY MISSABLE: Only obtainable during Chapter 1’s "Don Gone" mission. Open the trunk of Donnie’s red car and collect the revolver BEFORE the vehicle is destroyed, or you will need a mission replay/reload.',
    summary:
      'One of GTA VI’s easiest unique firearms to accidentally blow up—hidden right inside the trunk of Donnie’s red car during early Key Lento story mission "Don Gone".',
    requirements: {
      timeOfDay: 'Mission-locked ("Don Gone")',
      protagonist: 'Jason',
      storyProgress: 'Chapter 1 — Main Mission "Don Gone"',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Reach Donnie’s Red Car During "Don Gone"',
        landmarkCue: 'Chapter 1 Story Objective',
        instruction:
          'Progress through the Chapter 1 mission "Don Gone" until you gain access to Donnie’s red vehicle. Hold off on blowing up or abandoning the car.',
      },
      {
        stepNumber: 2,
        title: 'Pop the Rear Trunk Before Proceeding',
        landmarkCue: 'Rear Boot Prompt',
        instruction:
          'Walk to the rear bumper of Donnie’s red car, open the trunk, and spot the yellow unique-weapon icon for Donnie’s H&L .38 inside.',
      },
      {
        stepNumber: 3,
        title: 'Loot the Revolver to Register It Permanently',
        landmarkCue: 'Hawk & Little .38 Variant',
        instruction:
          'Grab the revolver before finishing the mission sequence so it permanently locks into both protagonists’ Weapon Locker under H&L .38 Variants.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'GTABase', label: 'Donnie’s H&L .38 Unique Variant' },
      { community: 'Beebom', label: 'Missable Early-Game Unique Weapons List' },
      { community: 'Space4Games', label: 'Don Gone Trunk Revolver Guide' },
    ],
    tags: ['donnie', 'revolver', 'h&l 38', 'missable', 'chapter 1', 'don gone'],
  },
  {
    id: 'ug-06-russos-1922-pistol',
    slug: 'russos-1922-pistol',
    moduleId: 'unique-gear',
    indexCode: 'UG-06',
    title: 'Russo’s 1922 Pistol',
    subtitle: 'President Joe S. Russo’s Engraved Personal Sidearm From Fallout Bunker #1',
    regionId: 'vice-city',
    subLocation: 'Sharktooth Island — President Russo’s Fallout Bunker #1',
    mapPin: { x: 78, y: 54 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Presidential Cold War keepsake variant of the 1922 pistol featuring commemorative finish work and crisp accuracy; permanently archived in the shared Weapon Locker after clearing Sharktooth Island.',
    summary:
      'Following informant Jose Bermudez’s conspiracy lead from Downtown Vice City opens President Russo’s first subterranean fallout bunker on Sharktooth Island—and unlocks his personal 1922 sidearm.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'In-game Smartphone (WAiNK scanner) & boat for Sharktooth Island',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Scan Friends of Freedom & Talk to Jose Bermudez',
        landmarkCue: 'Downtown Vice City -> NW 4th Ave (Little Cuba)',
        instruction:
          'Scan the Friends of Freedom monument in Downtown Vice City with the WAiNK app, speak to Jose Bermudez sitting by the wall, and follow his lead to his apartment on NW 4th Avenue in Little Cuba.',
      },
      {
        stepNumber: 2,
        title: 'Infiltrate President Russo’s Bunker #1 on Sharktooth Island',
        landmarkCue: 'Cold War Fallout Hatch',
        instruction:
          'Use the apartment intel to travel to Sharktooth Island, locate the concealed fallout bunker entrance, and clear the interior chambers.',
      },
      {
        stepNumber: 3,
        title: 'Claim Russo’s 1922 Pistol Inside the Command Area',
        landmarkCue: 'Yellow Unique Weapon Marker',
        instruction:
          'Search the bunker’s inner desk and display case area to pick up Russo’s 1922 Pistol and secure clues pointing onward to Bunker #2 in Big Pines.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'GTABase', label: 'Russo’s 1922 Unique Pistol Profile' },
      { community: 'GameSpot', label: 'President Russo Bunkers & Rewards Guide' },
    ],
    tags: ['russo', '1922 pistol', 'sharktooth island', 'bunker', 'jose bermudez', 'pistol'],
    relatedEasterEggSlug: 'project-rumba-iaa-mind-conditioning-loops',
  },
  {
    id: 'ug-07-cold-war-556',
    slug: 'cold-war-556-assault-rifle',
    moduleId: 'unique-gear',
    indexCode: 'UG-07',
    title: 'Cold War 556 Assault Rifle',
    subtitle: 'Vintage Duke Arms Military-Issue Rifle Inside Big Pines Bunker #2',
    regionId: 'grassrivers',
    subLocation: 'Big Pines (North Mariana County) — President Russo’s Fallout Bunker #2',
    mapPin: { x: 56, y: 63 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Rare vintage Duke Arms 556 assault rifle variant sporting authentic Cold War military hardware and pre-installed combat attachments; shared permanently between Jason and Lucia via the Weapon Locker.',
    summary:
      'Deep inside President Russo’s second fallout bunker in Big Pines lies this classic military-spec 556 rifle—sitting right along the path to the respawning tank and Project Rumba.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      storyProgress: 'Requires clearing Jose Bermudez’s lead & Sharktooth Island Bunker #1',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Follow Bunker #1 Clues to Big Pines',
        landmarkCue: 'North Mariana County • Big Pines Woods',
        instruction:
          'After completing Sharktooth Island’s fallout bunker, follow the recovered coordinates north into Big Pines to uncover President Russo’s second underground complex.',
      },
      {
        stepNumber: 2,
        title: 'Clear the Bunker Armory Wing',
        landmarkCue: 'Console Room & Adjacent Storage',
        instruction:
          'Push through the bunker’s interior corridors and open the weapon storage rack near the console room to spot the yellow Cold War 556 icon.',
      },
      {
        stepNumber: 3,
        title: 'Equip & Sync to Your Armory Before Starting Project Rumba',
        landmarkCue: 'Duke Arms 556 Variant',
        instruction:
          'Pick up the Cold War 556 Assault Rifle to add it permanently to your Weapon Locker before interacting with the console room to unlock the Project Rumba mind-conditioning hatch.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'GTABase', label: 'Cold War 556 Unique Assault Rifle' },
      { community: 'GameSpot', label: 'Big Pines Bunker Loot & Project Rumba Guide' },
    ],
    tags: ['cold war 556', 'duke arms', 'assault rifle', 'big pines', 'russo bunker'],
    relatedEasterEggSlug: 'project-rumba-iaa-mind-conditioning-loops',
  },
  {
    id: 'ug-08-drug-mule-kz-59',
    slug: 'drug-mule-kz-59-assault-rifle',
    moduleId: 'unique-gear',
    indexCode: 'UG-08',
    title: 'Drug Mule KZ-59 Assault Rifle',
    subtitle: 'Sunken Smuggler Kozlov Rifle Salvaged Off the Riquezas Keys',
    regionId: 'leonida-keys',
    subLocation: 'Northern Coast of Riquezas Keys — Seabed Beneath Sunken Speedboat',
    mapPin: { x: 57, y: 88 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Custom-skinned Kozlov KZ-59 assault rifle variant with pre-fitted contraband hardware—one of the strongest early free-roam rifles obtainable once you unlock Scuba Gear.',
    summary:
      'Floating smuggler packages bobbing off the northern shoreline of the Riquezas Keys mark a sunken speedboat resting on the ocean floor with this unique Kozlov rifle inside.',
    requirements: {
      timeOfDay: 'Daytime strongly recommended for underwater visibility',
      protagonist: 'Either',
      equipment: 'Boat & Scuba Gear (unlocked in Ch. 1 "Island Dreams")',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Cruise Along the Northern Coast of Riquezas Keys',
        landmarkCue: 'Floating Contraband Packages on Surface',
        instruction:
          'Motor along the northern coastal water of the Riquezas Keys in bright daylight until you spot floating packages drifting over a dark submerged hull.',
      },
      {
        stepNumber: 2,
        title: 'Equip Scuba Gear & Dive to the Sunken Speedboat',
        landmarkCue: 'Seabed Wreckage',
        instruction:
          'Cut your engine, equip Scuba Gear (and keep a speargun handy in case sharks patrol nearby), and dive straight down to the wrecked smuggler speedboat.',
      },
      {
        stepNumber: 3,
        title: 'Loot the Drug Mule KZ-59 From the Wreck',
        landmarkCue: 'Yellow Unique Weapon Icon',
        instruction:
          'Swim beside the cockpit and cargo deck to grab the Drug Mule KZ-59 assault rifle, permanently unlocking it in both protagonists’ Weapon Lockers.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Beebom', label: 'Riquezas Keys Drug Mule KZ-59 Location' },
      { community: 'MeowDB', label: 'Kozlov KZ-59 Unique Variants Catalog' },
    ],
    tags: ['drug mule', 'kz-59', 'kozlov', 'assault rifle', 'riquezas keys', 'scuba'],
  },
  {
    id: 'ug-09-unpacked-comshot-12',
    slug: 'unpacked-comshot-12-shotgun',
    moduleId: 'unique-gear',
    indexCode: 'UG-09',
    title: 'Unpacked Comshot 12 Shotgun',
    subtitle: 'Free Chapter 1 Close-Quarters Shotgun Tucked Behind a Key Lento Bathroom Door',
    regionId: 'leonida-keys',
    subLocation: 'Northwestern Coast of Key Lento — Upper-Floor Bathroom',
    mapPin: { x: 63, y: 81 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Custom Comshot 12 shotgun variant with pre-installed attachments available in minutes during Chapter 1—permanently synced to the shared Weapon Locker once picked up.',
    summary:
      'No puzzle codes or firefights required: slip into a coastal building on northwestern Key Lento, head upstairs, and check directly behind the bathroom door for an instant unique shotgun.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      storyProgress: 'Available immediately in Chapter 1 free roam',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Head to the Northwestern Shoreline of Key Lento',
        landmarkCue: 'Northwest Coastal Two-Story Building',
        instruction:
          'Drive or walk to the northwestern edge of Key Lento and enter the accessible two-story coastal building overlooking the water.',
      },
      {
        stepNumber: 2,
        title: 'Go Upstairs & Check Behind the Bathroom Door',
        landmarkCue: 'Upper-Floor Bathroom Corner',
        instruction:
          'Climb the stairs to the upper floor, step into the bathroom, and swing the door inward to spot the Unpacked Comshot 12 tucked neatly behind it.',
      },
      {
        stepNumber: 3,
        title: 'Claim the Shotgun for Your Permanent Locker',
        landmarkCue: 'Comshot 12 Variants Tab',
        instruction:
          'Pick up the shotgun to add it permanently to both Jason and Lucia’s Weapon Lockers.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Beebom', label: 'Key Lento Unpacked Comshot 12 Guide' },
      { community: 'GTA6Pocket', label: 'Early Unique Shotgun Locations' },
    ],
    tags: ['comshot 12', 'shotgun', 'key lento', 'chapter 1', 'free weapon'],
  },
  {
    id: 'ug-10-gutterball-moreland-850',
    slug: 'gutterball-moreland-850-shotgun',
    moduleId: 'unique-gear',
    indexCode: 'UG-10',
    title: 'Gutterball Moreland 850 Shotgun',
    subtitle: 'Custom Pump-Action Shotgun Looted Inside Port Gellhorn’s Kingpin Bowling',
    regionId: 'port-gellhorn',
    subLocation: 'Port Gellhorn — Kingpin Bowling (Illegal Operation Gang Front)',
    mapPin: { x: 24, y: 50 },
    gearCategory: 'weapon',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Bowling-themed custom pump-action Moreland 850 shotgun variant with pre-fitted close-range hardware; unlocks permanently in your shared Weapon Locker after raiding the alley.',
    summary:
      'Clearing out the gang front operating inside Port Gellhorn’s Kingpin Bowling alley rewards a custom Moreland 850 pump shotgun displayed right on the green pool table.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Body armor & mid-range rifle or SMG for clearing the gang front',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Kingpin Bowling Illegal Operation in Port Gellhorn',
        landmarkCue: 'Port Gellhorn Commercial Strip',
        instruction:
          'Drive to Kingpin Bowling in Port Gellhorn and prepare for close-quarters combat against the gang crew guarding the lanes and lounge.',
      },
      {
        stepNumber: 2,
        title: 'Clear Hostiles & Inspect the Green Pool Table',
        landmarkCue: 'Open Gun Case on Billiards Felt',
        instruction:
          'Once the interior is secure, walk over to the green pool table inside the lounge area and spot the open weapon case emitting a yellow unique-weapon icon.',
      },
      {
        stepNumber: 3,
        title: 'Grab the Gutterball Moreland 850',
        landmarkCue: 'Moreland 850 Variants Tab',
        instruction:
          'Pick up the Gutterball Moreland 850 to permanently unlock it in your safehouse Weapon Locker for both Jason and Lucia.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Space4Games', label: 'Kingpin Bowling Unique Shotgun Guide' },
      { community: 'Sportskeeda', label: 'Gutterball Moreland 850 Location' },
    ],
    tags: ['gutterball', 'moreland 850', 'shotgun', 'kingpin bowling', 'port gellhorn', 'illegal operation'],
  },

  // =========================================================================
  // WARDROBE & HATS ('apparel')
  // =========================================================================
  {
    id: 'ug-11-tommy-vercetti-hawaiian-shirt',
    slug: 'tommy-vercetti-floral-hawaiian-shirt',
    moduleId: 'unique-gear',
    indexCode: 'UG-11',
    title: 'Tommy Vercetti’s Floral Hawaiian Shirt',
    subtitle: 'Iconic 2002 Vice City Teal Floral Button-Up Earned via the Malibu Club Portal',
    regionId: 'vice-city',
    subLocation: 'Badger R&D Tower (Key Lento) -> 12 LPL Substations -> LPL Turtle Head Power Station',
    mapPin: { x: 68, y: 61 },
    gearCategory: 'apparel',
    wearableBy: 'Jason',
    perkOrStats:
      'Permanent nostalgic wardrobe top for Jason—an unmistakable modern recreation of Tommy Vercetti’s classic blue floral Hawaiian shirt. Equippable from any safehouse wardrobe or vehicle trunk.',
    missableWarning:
      'SEQUENCE RESET WARNING: You MUST start and finish the entire 12-substation sequence as Jason without switching protagonists or using fast travel/taxis, or substation progress resets to zero.',
    summary:
      'Completing Leonida’s grandest multi-step secret—entering the 2002 Vice City time-cheat across 12 power substations and stepping into Reactor 2’s portal—permanently adds Tommy Vercetti’s signature shirt to Jason’s closet.',
    requirements: {
      timeOfDay: 'Reactor 2 Portal Window: 19:00–06:00 (7 PM – 6 AM)',
      protagonist: 'Jason',
      equipment: 'Fast car or helicopter (NO fast travel allowed)',
      storyProgress: 'Chapter 3+ recommended; stay as Jason throughout',
      specialCode: {
        label: '12-Substation Order (LIFEISPASSINGMEBY)',
        value: 'D, D, •, A, •, A, A, A, •, W, D, W  ->  U-235 REACTOR2 19-06',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Initialize the Signal at Badger R&D Tower as Jason',
        landmarkCue: 'Key Lento • Upper Storage Room',
        instruction:
          'Playing as Jason, climb Badger R&D Radio Tower in Key Lento, pull the left power lever, and press the right Koch board button until the classic 2002 chime plays and the TV flashes the Malibu Club logo.',
      },
      {
        stepNumber: 2,
        title: 'Flip All 12 LPL Substation Switches in Exact Order',
        landmarkCue: 'Blue Exterior Letters L-iF-Ei-S-P-A-S-S-I-N-G-M',
        instruction:
          'Manually drive or fly to all 12 Leonida Power & Light substations in sequence without fast traveling or switching characters, flipping ONLY the purple-taped switch matching D, D, •, A, •, A, A, A, •, W, D, W.',
      },
      {
        stepNumber: 3,
        title: 'Enter Reactor 2 at Turtle Head Power Station (19:00–06:00)',
        landmarkCue: 'East of Hamlet • Unknown SMS Confirmation',
        instruction:
          'After receiving the "U-235 REACTOR2 19-06" SMS, infiltrate LPL Turtle Head Power Station east of Hamlet between 7 PM and 6 AM, pull the Reactor 2 lever, and step into the purple portal.',
      },
      {
        stepNumber: 4,
        title: 'Visit Kent Paul Upstairs & Return to Modern Leonida',
        landmarkCue: '2002 PS2 Malibu Club -> Safehouse Wardrobe',
        instruction:
          'Speak with Kent Paul upstairs inside the low-poly 2002 Malibu Club and exit back to modern Vice-Dale County—permanently unlocking Tommy Vercetti’s Floral Hawaiian Shirt in Jason’s wardrobe (plus the Western Malibu Zombie Bomber bike).',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'IGN', label: '2002 Malibu Club Portal & Tommy Shirt Guide' },
      { community: 'Rock Paper Shotgun', label: 'LIFEISPASSINGMEBY Substation Walkthrough' },
      { community: 'Vice', label: 'How to Unlock Tommy Vercetti’s Outfit' },
    ],
    tags: ['tommy vercetti', 'hawaiian shirt', 'malibu club', 'wardrobe', 'jason', 'vice city'],
    relatedEasterEggSlug: '2002-vice-city-malibu-club-portal',
    featured: true,
  },
  {
    id: 'ug-12-arthur-morgans-cowboy-hat',
    slug: 'arthur-morgans-genuine-cowboy-hat-item',
    moduleId: 'unique-gear',
    indexCode: 'UG-12',
    title: 'Arthur Morgan’s "Genuine Cowboy Hat"',
    subtitle: 'Weathered Leather Gambler Hat With Twisted Rope Band From a Port Gellhorn Yard Sale',
    regionId: 'port-gellhorn',
    subLocation: 'Port Gellhorn — Residential Yard Sale Two Blocks South of Moses’ Garage',
    mapPin: { x: 22, y: 48 },
    gearCategory: 'apparel',
    wearableBy: 'Both',
    perkOrStats:
      'Permanent weathered brown leather cowboy hat (complete with Arthur’s rope band and rear knot) usable by both Jason and Lucia. Headwear also slightly delays police recognition when breaking line of sight.',
    summary:
      'Bring $35 cash to a sunny neighborhood lawn sale two blocks south of Moses’ Garage in Port Gellhorn to claim Red Dead Redemption 2’s most iconic keepsake.',
    requirements: {
      timeOfDay: 'Daytime (Dynamic Yard Sale spawn)',
      protagonist: 'Either',
      equipment: '$35 cash',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Cruise South From Moses’ Garage in Daylight',
        landmarkCue: 'Two Blocks South • Past Petrol Station (Left Side)',
        instruction:
          'During daytime in Port Gellhorn, drive south from Moses’ Garage past the petrol station (north of the raceway) and watch the left sidewalk for colorful balloons and "Yard Sale" lawn signs.',
        fieldTip:
          'If the lawn sale is empty, drive a few blocks away, pass a couple of daytime hours, and loop back down the block.',
      },
      {
        stepNumber: 2,
        title: 'Inspect the Guitar Case Near the Far Couch',
        landmarkCue: '$35 Purchase Prompt',
        instruction:
          'Walk toward the back of the yard sale beside the outdoor couch and interact with the worn leather cowboy hat sitting on top of a guitar case.',
      },
      {
        stepNumber: 3,
        title: 'Buy for $35 & Equip From Any Wardrobe or Trunk',
        landmarkCue: 'Wardrobe -> Hats -> Genuine Cowboy Hat',
        instruction:
          'Pay $35 to permanently unlock the "Genuine Cowboy Hat" for both Jason and Lucia, then toss it into your car trunk if you want quick-swap outlaw fits on the road.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Eurogamer', label: 'How to Buy Arthur Morgan’s Hat in GTA 6' },
      { community: 'PC Gamer', label: 'Port Gellhorn Yard Sale Genuine Cowboy Hat' },
    ],
    tags: ['arthur morgan', 'cowboy hat', 'rdr2', 'yard sale', 'port gellhorn', 'wardrobe'],
    relatedEasterEggSlug: 'arthur-morgans-genuine-cowboy-hat',
    featured: true,
  },
  {
    id: 'ug-13-mario-j-plumber-cap',
    slug: 'super-mario-j-plumber-cap',
    moduleId: 'unique-gear',
    indexCode: 'UG-13',
    title: 'Super Mario "J" Plumber Cap',
    subtitle: 'Hidden Floating Coin-Block Hat Drop Exclusive to Jason in Lummox County',
    regionId: 'mount-kalaga',
    subLocation: 'Southern Moreau (Lummox County) — Lawton Co. Paper Mill Ruins',
    mapPin: { x: 35, y: 22 },
    gearCategory: 'apparel',
    wearableBy: 'Jason',
    perkOrStats:
      'Permanent red Mario-inspired "J" baseball cap unlocked exclusively for Jason’s wardrobe—dropped alongside Lucia’s green "L" cap after bonking the invisible floating mill block.',
    summary:
      'Taking a hit from a dusty bong amid the brick ruins of the Lawton Co. Paper Mill reveals a translucent floating question block overhead that drops Jason’s signature red "J" cap.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Both Together',
      equipment: 'Bring Lucia along too if you want to pick up both caps in one trip',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Travel to Lawton Co. Paper Mill Ruins in Southern Moreau',
        landmarkCue: 'Near Riverside Water Wheel & MacAlister Gold Mine',
        instruction:
          'Head to the crumbled brick walls of Lawton Co. Paper Mill in southern Moreau (Lummox County), right beside the riverside Water Wheel meditation point.',
      },
      {
        stepNumber: 2,
        title: 'Use the Bong on the Crate & Look Up Into the Smoke',
        landmarkCue: 'Purple Tarp / Center Ruins',
        instruction:
          'Interact with the bong resting on the crate/purple tarp in the center of the ruins and tilt your camera straight upward along the rising smoke to spot the faint floating block.',
      },
      {
        stepNumber: 3,
        title: 'Bonk or Shoot the Floating Block & Pick Up the "J" Cap as Jason',
        landmarkCue: 'Upper Brick Ledge Drop',
        instruction:
          'Climb the broken brick wall to jump underneath the translucent block (or shoot it directly) to trigger the retro chime, then collect the red "J" cap while controlling Jason to save it permanently to his wardrobe.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Rock Paper Shotgun', label: 'Mario & Luigi J/L Plumber Caps Guide' },
      { community: 'Mobalytics', label: 'Lawton Paper Mill Hidden Block Location' },
    ],
    tags: ['mario', 'j cap', 'plumber cap', 'hat', 'jason', 'lawton paper mill', 'moreau'],
    relatedEasterEggSlug: 'super-mario-luigi-hidden-block-j-and-l-caps',
  },
  {
    id: 'ug-14-luigi-l-plumber-cap',
    slug: 'luigi-l-plumber-cap',
    moduleId: 'unique-gear',
    indexCode: 'UG-14',
    title: 'Luigi "L" Plumber Cap',
    subtitle: 'Green Nintendo Homage Cap Exclusive to Lucia From the Lawton Mill Block',
    regionId: 'mount-kalaga',
    subLocation: 'Southern Moreau (Lummox County) — Lawton Co. Paper Mill Ruins',
    mapPin: { x: 37, y: 21 },
    gearCategory: 'apparel',
    wearableBy: 'Lucia',
    perkOrStats:
      'Permanent green Luigi-styled "L" baseball cap unlocked exclusively for Lucia’s wardrobe—completing the matching "J" & "L" duo look with Jason.',
    summary:
      'Bonking the smoke-revealed floating block inside southern Moreau’s ruined paper mill drops Lucia’s matching green "L" cap right onto the rubble.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Both Together',
      equipment: 'Switch to Lucia on-site to pick up the "L" cap directly',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Bring Lucia to the Lawton Co. Paper Mill Ruins',
        landmarkCue: 'Southern Moreau • Lummox County',
        instruction:
          'Travel to the brick ruins of Lawton Co. Paper Mill near the river Water Wheel with Lucia (or both protagonists together so you can claim both hats in one visit).',
      },
      {
        stepNumber: 2,
        title: 'Reveal & Hit the Translucent Floating Block',
        landmarkCue: 'Center Crate Bong -> Upper Brick Wall',
        instruction:
          'Take a hit from the bong on the purple tarp to expose the hovering translucent block above the masonry, then jump up from the broken ledge beneath it (or fire a shot into the block).',
      },
      {
        stepNumber: 3,
        title: 'Swap to Lucia & Claim the Green "L" Cap',
        landmarkCue: 'Lucia Wardrobe -> Hats',
        instruction:
          'Switch to Lucia and pick up the green "L" cap from the ground so it permanently registers in Lucia’s safehouse wardrobe and vehicle trunk outfits.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Rock Paper Shotgun', label: 'How to Unlock Lucia’s L Plumber Cap' },
      { community: 'GameBoost', label: 'Mario & Luigi Caps Wardrobe Walkthrough' },
    ],
    tags: ['luigi', 'l cap', 'plumber cap', 'hat', 'lucia', 'lawton paper mill', 'moreau'],
    relatedEasterEggSlug: 'super-mario-luigi-hidden-block-j-and-l-caps',
  },

  // =========================================================================
  // RARE VEHICLES ('vehicle')
  // =========================================================================
  {
    id: 'ug-15-western-malibu-zombie-bomber',
    slug: 'western-malibu-zombie-bomber',
    moduleId: 'unique-gear',
    indexCode: 'UG-15',
    title: 'Western Malibu Zombie Bomber (Tommy’s Motorcycle)',
    subtitle: 'Throwback Classic Cruiser Bike Awarded After the 2002 Malibu Club Finale',
    regionId: 'vice-city',
    subLocation: 'LPL Turtle Head Power Station (East of Hamlet) — 2002 Portal Return',
    mapPin: { x: 70, y: 61 },
    gearCategory: 'vehicle',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Custom throwback cruiser motorcycle honoring 2002’s GTA: Vice City—awarded alongside Tommy Vercetti’s floral Hawaiian shirt once you return from Kent Paul’s low-poly Malibu Club.',
    missableWarning:
      'GARAGE REGISTRATION TIP: Drive rare reward vehicles straight to a Pay ’n’ Spray to register them in your personal recovery pool; unregistered vehicles destroyed in free roam can be permanently lost.',
    summary:
      'Completing the 12-substation LIFEISPASSINGMEBY time portal doesn’t just outfit Jason—it hands over a custom-spec Western Malibu Zombie Bomber motorcycle to cruise Ocean Beach in style.',
    requirements: {
      timeOfDay: 'Portal Finale: 19:00–06:00',
      protagonist: 'Jason',
      equipment: 'Cash on hand for Pay ’n’ Spray vehicle registration',
      specialCode: {
        label: '12-Substation Cheat Sequence',
        value: 'D, D, •, A, •, A, A, A, •, W, D, W',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Complete the 12-Substation Malibu Portal as Jason',
        landmarkCue: 'Badger R&D Tower -> 12 LPL Substations -> Reactor 2',
        instruction:
          'Activate Badger R&D Tower in Key Lento as Jason, manually flip all 12 blue-lettered LPL substation switches without fast travel, and step into Reactor 2 at LPL Turtle Head Power Station between 19:00 and 06:00.',
      },
      {
        stepNumber: 2,
        title: 'Finish Kent Paul’s 2002 Malibu Club Encounter',
        landmarkCue: 'Upstairs VIP Balcony',
        instruction:
          'Meet Kent Paul inside the low-poly 2002 Malibu Club and pass back through to modern Leonida to trigger both Tommy Vercetti unlock notifications.',
      },
      {
        stepNumber: 3,
        title: 'Register & Store the Western Malibu Zombie Bomber',
        landmarkCue: 'Pay ’n’ Spray -> Safehouse Garage',
        instruction:
          'Claim your Western Malibu Zombie Bomber and bring it to a Pay ’n’ Spray (or garage storage) to register it permanently into your personal recovery pool.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'IGN', label: 'Malibu Club Portal Rewards & Zombie Bomber Bike' },
      { community: 'GTABoom', label: 'Western Malibu Zombie Bomber Unlock Guide' },
    ],
    tags: ['zombie bomber', 'motorcycle', 'tommy vercetti', 'malibu club', 'western', 'vehicle'],
    relatedEasterEggSlug: '2002-vice-city-malibu-club-portal',
    featured: true,
  },
  {
    id: 'ug-16-brian-penumbra-ff',
    slug: 'brian-oconner-had-you-penumbra-ff',
    moduleId: 'unique-gear',
    indexCode: 'UG-16',
    title: 'Brian O’Conner’s "HAD YOU" Maibatsu Penumbra FF',
    subtitle: 'Pre-Tuned Neon-Green Street-Racing Coupe Locked Inside a Vespucci Villa Garage',
    regionId: 'vice-city',
    subLocation: 'Vespucci Island (Rialto Islands, Neptune Circle) — Modern Villa Garage',
    mapPin: { x: 81, y: 51 },
    gearCategory: 'vehicle',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Free custom-tuned ’97 Maibatsu Penumbra FF sporting neon-green street-racing livery, high-downforce wing, vanity plate "HAD YOU", and a Toy Story snake prop hidden inside the rear trunk ("boot").',
    missableWarning:
      'ALARM & STORAGE WARNING: Flip the alarm-disable switch on the left interior garage wall BEFORE opening the bay or hotwiring, then register the Penumbra FF at Pay ’n’ Spray (or via Moses in Ch. 2) so it is never permanently lost if wrecked.',
    summary:
      'Tucked inside a private villa garage on Vespucci Island’s Neptune Circle sits a full Fast & Furious tribute coupe ready to steal cleanly once you kill the garage wall alarm.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Custom Vanity Plate',
        value: 'HAD YOU',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Modern Villa on Vespucci Island (Neptune Circle)',
        landmarkCue: 'Rialto Islands • Two Cars Parked in Driveway',
        instruction:
          'Cross into Vespucci Island west of Vice Beach and pull up along Neptune Circle to find the sleek modern villa with two vehicles parked outside an enclosed garage.',
      },
      {
        stepNumber: 2,
        title: 'Disable the Left-Wall Garage Alarm First',
        landmarkCue: 'Left Interior Wall Switch',
        instruction:
          'Slip inside the garage and immediately toggle the security alarm switch mounted on the left interior wall so taking the car will not summon Vice City police.',
      },
      {
        stepNumber: 3,
        title: 'Inspect the Trunk Gag, Hotwire & Register at Pay ’n’ Spray',
        landmarkCue: 'Plate: HAD YOU -> Pay ’n’ Spray',
        instruction:
          'Pop the rear trunk ("boot") to spot the Toy Story snake-in-a-boot gag, then drive the neon-green Penumbra FF straight to a Pay ’n’ Spray to register it permanently into your personal garage pool.',
        fieldTip:
          'Parking an unregistered Standout car in your safehouse garage keeps it safe indoors, but if it explodes in free roam before registration it is gone for good.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'IGN', label: 'Vespucci Island Fast & Furious Penumbra FF Guide' },
      { community: 'GamesRadar+', label: 'How to Steal & Keep Brian O’Conner’s Car' },
      { community: 'GTABase', label: 'Standout Vehicles Registration & Storage Guide' },
    ],
    tags: ['penumbra ff', 'had you', 'fast and furious', 'paul walker', 'vespucci island', 'car'],
    relatedEasterEggSlug: 'paul-walker-fast-and-furious-eclipse-toy-story-trunk',
    featured: true,
  },
  {
    id: 'ug-17-russo-bunker-tank',
    slug: 'president-russo-hauners-ridgway-tank',
    moduleId: 'unique-gear',
    indexCode: 'UG-17',
    title: 'President Russo Bunker Tank (Hauners Ridgway)',
    subtitle: 'Free Respawning Armored Military Tank Earned From the Cold War Bunker Chain',
    regionId: 'grassrivers',
    subLocation: 'Big Pines (North Mariana County) — President Russo Bunker #2 Heavy Bay',
    mapPin: { x: 54, y: 64 },
    gearCategory: 'vehicle',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Heavy armored Cold War military tank (Hauners Ridgway) armed with an explosive main cannon turret and rooftop machine gun. Permanently respawns at the bunker bay after you clear President Russo’s bunker chain.',
    summary:
      'Unraveling Jose Bermudez’s presidential assassination conspiracy across Sharktooth Island and Big Pines doesn’t just unlock Cold War weapons—it hands you repeatable access to a military tank.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'In-game Smartphone (WAiNK scanner) & combat loadout',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Start Jose Bermudez’s Conspiracy Lead in Downtown Vice City',
        landmarkCue: 'Friends of Freedom Monument -> Little Cuba Apartment',
        instruction:
          'Scan the Friends of Freedom monument in Downtown Vice City using WAiNK, talk to Jose Bermudez, and follow his intel to his NW 4th Avenue apartment in Little Cuba.',
      },
      {
        stepNumber: 2,
        title: 'Clear President Russo’s Bunker #1 (Sharktooth Island)',
        landmarkCue: 'Fallout Hatch #1',
        instruction:
          'Infiltrate the Sharktooth Island bunker, pick up Russo’s 1922 Pistol, and gather the audio logs and coordinates pointing to Bunker #2 in Big Pines.',
      },
      {
        stepNumber: 3,
        title: 'Clear Bunker #2 in Big Pines to Unlock the Respawning Tank',
        landmarkCue: 'Big Pines Heavy Vehicle Bay',
        instruction:
          'Complete the Big Pines fallout bunker sequence to open access to the Hauners Ridgway tank—returning whenever you want a fresh heavy-armor rampage vehicle across Leonida.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'GTABase', label: 'President Russo Bunker & Tank Questline' },
      { community: 'GameSpot', label: 'How to Unlock the Free Respawning Tank' },
      { community: 'KeenGamer', label: 'Hauners Ridgway Tank Location Guide' },
    ],
    tags: ['tank', 'hauners ridgway', 'president russo', 'big pines', 'bunker', 'respawning'],
    relatedEasterEggSlug: 'project-rumba-iaa-mind-conditioning-loops',
    featured: true,
  },
  {
    id: 'ug-18-progen-royal-ruby-emerus',
    slug: 'progen-royal-ruby-emerus',
    moduleId: 'unique-gear',
    indexCode: 'UG-18',
    title: 'Progen Royal Ruby Emerus (Standout Hypercar)',
    subtitle: 'Exclusive Ruby-Finished Supercar Stashed Behind a Guarded Vespucci Patio Gate',
    regionId: 'vice-city',
    subLocation: 'Vespucci Island — Guarded Residential Patio Garage',
    mapPin: { x: 79, y: 50 },
    gearCategory: 'vehicle',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Top-tier Progen Emerus hypercar finished in an exclusive Royal Ruby coat with elite acceleration and cornering grip—stealable free without dropping millions at a dealership.',
    missableWarning:
      'TRACKER & REGISTRATION WARNING: Standout supercars trigger immediate security/tracker heat. Shake pursuit and register the Emerus at a Pay ’n’ Spray (or through Moses in Ch. 2) so it joins your permanent recovery pool.',
    summary:
      'Skip the guarded front entrance on Vespucci Island by hopping the side estate hedges to claim a rare Royal Ruby Progen Emerus tucked inside the rear patio garage.',
    requirements: {
      timeOfDay: 'Anytime (Night offers easier stealth around estate guards)',
      protagonist: 'Either',
      equipment: 'Cash for Pay ’n’ Spray registration (Key Cloner helpful for high-end estates)',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Approach the Guarded Vespucci Island Estate From the Side',
        landmarkCue: 'Side Perimeter Hedges',
        instruction:
          'Drive to the walled Vespucci Island villa housing the patio garage, avoiding the front security guards stationed by the main driveway gate.',
      },
      {
        stepNumber: 2,
        title: 'Vault the Side Hedges to Reach the Patio Garage',
        landmarkCue: 'Royal Ruby Hypercar Spawn',
        instruction:
          'Slip over the side hedges into the courtyard to access the Royal Ruby Progen Emerus parked cleanly inside the patio garage bay.',
      },
      {
        stepNumber: 3,
        title: 'Evade Tracker Heat & Register at Pay ’n’ Spray',
        landmarkCue: 'Permanent Recovery Pool',
        instruction:
          'Burst out through the gate, lose any triggered security response, and take the Emerus straight to Pay ’n’ Spray to register ownership permanently.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Detonated', label: 'Vespucci Island Royal Ruby Emerus Spawn' },
      { community: 'GTABase', label: 'Standout Vehicles & Permanent Registration Guide' },
    ],
    tags: ['progen emerus', 'royal ruby', 'supercar', 'standout vehicle', 'vespucci island'],
  },
  {
    id: 'ug-19-crimsonpalms-gold-supercar',
    slug: 'crimsonpalms-solid-gold-supercar',
    moduleId: 'unique-gear',
    indexCode: 'UG-19',
    title: 'Solid Gold Supercar (Crimsonpalms Condominiums)',
    subtitle: 'Flashy Fixed-Spawn Gold Exotic Parked Beneath a Washington Island Balcony',
    regionId: 'vice-city',
    subLocation: 'Washington Island (Near Vice Beach) — Crimsonpalms Condominiums Ground Balcony',
    mapPin: { x: 85, y: 52 },
    gearCategory: 'vehicle',
    wearableBy: 'Garage / Armory',
    perkOrStats:
      'Fixed-spawn solid gold exotic supercar parked completely in the open beneath Crimsonpalms Condominiums—an instant top-speed getaway ride and Vice Beach status symbol once registered.',
    missableWarning:
      'ACTIVE TRACKER ALERT: Stealing this exotic triggers built-in vehicle trackers and nearby condo security. Clear your wanted level and pay for Pay ’n’ Spray registration before taking it into gunfights.',
    summary:
      'Right off Vice Beach on Washington Island, a gleaming solid-gold exotic sits parked beneath the ground-floor overhang of Crimsonpalms Condominiums waiting for a daring getaway.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Clear escape route across the Vice Beach causeways & registration cash',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Drive to Crimsonpalms Condominiums on Washington Island',
        landmarkCue: 'Near Vice Beach Shoreline',
        instruction:
          'Cross onto Washington Island near Vice Beach and pull up to the luxury Crimsonpalms Condominiums waterfront complex.',
      },
      {
        stepNumber: 2,
        title: 'Spot the Solid Gold Supercar Under the Ground Balcony',
        landmarkCue: 'Ground-Floor Overhang Bay',
        instruction:
          'Check directly beneath the ground-floor balcony area to locate the solid-gold exotic supercar parked out in the open, watching for nearby private security.',
      },
      {
        stepNumber: 3,
        title: 'Break Tracker Pursuit & Register Permanently',
        landmarkCue: 'Pay ’n’ Spray Registration',
        instruction:
          'Commandeer the supercar, evade the tracker-triggered police response, and register it at a Pay ’n’ Spray so you can recover it even if wrecked later.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Detonated', label: 'Crimsonpalms Solid Gold Supercar Location' },
      { community: 'GTABase', label: 'How to Keep Tracked Standout Vehicles' },
    ],
    tags: ['gold supercar', 'crimsonpalms', 'washington island', 'vice beach', 'standout vehicle'],
  },

  // =========================================================================
  // WATCHES, EYEWEAR & TATTOOS ('accessory')
  // =========================================================================
  {
    id: 'ug-20-crowex-ambassador-breakfast-watch',
    slug: 'crowex-ambassador-breakfast-watch',
    moduleId: 'unique-gear',
    indexCode: 'UG-20',
    title: 'Crowex Ambassador "Breakfast" Luxury Watch',
    subtitle: 'Rare Collectible Timepiece Locked Inside the Haunted Marbelle Hotel Safe',
    regionId: 'vice-city',
    subLocation: 'Southern Crosstown (NW 8th St) — Marbelle Hotel Ground-Floor Office Safe',
    mapPin: { x: 72, y: 52 },
    gearCategory: 'accessory',
    wearableBy: 'Both',
    perkOrStats:
      'Collectible luxury wristwatch stored under Wardrobe -> Accessories -> Watches. Counts toward Leonida’s 34 Luxury Watches & Discovered Styles milestones (10 watches unlock Move Time Forward; 20 unlock Pause Time of Day).',
    summary:
      'Braving the Silent Hill-inspired haunting inside Crosstown’s condemned Marbelle Hotel leads to a rooftop realtor note with safe code 955214—rewarding cash and this luxury Crowex timepiece.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Weapon-wheel Flashlight recommended',
      specialCode: {
        label: 'Marbelle Ground-Floor 6-Digit Safe Code',
        value: '955214',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Enter the Marbelle Hotel via the Rear Alley Door',
        landmarkCue: 'Southern Crosstown • East of Pawn & Gun (NW 8th St)',
        instruction:
          'Locate the boarded-up Marbelle Hotel ("For Sale" sign out front) east of the Crosstown Pawn & Gun shop, slip down the left alley to the back, and enter the unlocked rear door.',
      },
      {
        stepNumber: 2,
        title: 'Check the Rooftop Note (or Go Straight to the Ground Office)',
        landmarkCue: 'Roof Old Note -> Ground-Floor Back Office',
        instruction:
          'Optional: climb upstairs to experience the Silent Hill fog haunting and read the rooftop Old Note circling 955214. If you only want the watch, you can head straight into the ground-floor back office corner.',
      },
      {
        stepNumber: 3,
        title: 'Dial 955214 & Claim the Crowex Ambassador "Breakfast"',
        landmarkCue: 'Gold Watch Icon -> Wardrobe Accessories',
        instruction:
          'Punch 955214 into the wall safe, collect the cash bundle, and manually pick up the glowing gold-icon Crowex Ambassador "Breakfast" watch to add it to your Discovered Styles.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Vice', label: 'Marbelle Hotel Safe 955214 & Crowex Watch Guide' },
      { community: 'Sortiraparis', label: 'All 34 Luxury Watches & Time Cheat Rewards' },
    ],
    tags: ['crowex', 'watch', 'breakfast watch', 'marbelle hotel', '955214', 'luxury watch'],
    relatedEasterEggSlug: 'haunted-marbelle-hotel-silent-hill-safe',
    featured: true,
  },
  {
    id: 'ug-21-dog-island-sunglasses',
    slug: 'dog-island-collectible-sunglasses',
    moduleId: 'unique-gear',
    indexCode: 'UG-21',
    title: 'Dog Island Collectible Sunglasses',
    subtitle: 'Secret Sanctuary Eyewear Claimed After Cool Dog’s Gambit Bay Jet-Ski Rescue',
    regionId: 'leonida-keys',
    subLocation: 'Gambit Bay Open Water -> Dog Island Sanctuary',
    mapPin: { x: 54, y: 82 },
    gearCategory: 'accessory',
    wearableBy: 'Both',
    perkOrStats:
      'Permanent unique eyewear unlocked on Dog Island alongside a $1,218 loose wallet and trailer safe loot (code 44017). Wearing glasses also helps delay civilian police recognition after escaping sight.',
    summary:
      'Stranding yourself in Gambit Bay summons goggle-wearing jet-ski legend "Cool Dog" to chauffeur you straight to Dog Island—where wearable sunglasses and safe 44017 await.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Any boat to reach deep Gambit Bay waters',
      specialCode: {
        label: 'Dog Island Trailer Safe Combination',
        value: '44017',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Jump Into Deep Gambit Bay Water & Tread for ~60 Seconds',
        landmarkCue: 'Gambit Bay / Leonida Keys',
        instruction:
          'Pilot a boat into open deep water in Gambit Bay, bail overboard, and swim clear of the vessel so you are stranded treading water for roughly a minute.',
      },
      {
        stepNumber: 2,
        title: 'Ride Pillion Behind Cool Dog to Dog Island',
        landmarkCue: 'Triangle / Y Jet-Ski Prompt',
        instruction:
          'Listen for enthusiastic barking, swim beside the goggle-wearing jet-skiing pup, and press Triangle / Y to let Cool Dog chauffeur you straight onto Dog Island’s shore.',
      },
      {
        stepNumber: 3,
        title: 'Claim the Sunglasses, $1,218 Wallet & Trailer Safe 44017',
        landmarkCue: 'Dog Island Camp & Trailer',
        instruction:
          'Explore the island sanctuary to pick up the collectible sunglasses for your wardrobe, pocket the $1,218 wallet, and unlock the trailer safe using code 44017.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'IGN', label: 'Dog Island Sunglasses & Safe 44017 Guide' },
      { community: 'GamesRadar+', label: 'Cool Dog Jet-Ski Rescue Walkthrough' },
    ],
    tags: ['sunglasses', 'eyewear', 'dog island', 'cool dog', '44017', 'accessory'],
    relatedEasterEggSlug: 'cool-dog-jet-ski-and-dog-island',
  },
  {
    id: 'ug-22-project-rumba-brainwash-tattoo',
    slug: 'project-rumba-brainwash-tattoo',
    moduleId: 'unique-gear',
    indexCode: 'UG-22',
    title: 'Project Rumba "Brainwash" Tattoo',
    subtitle: 'Exclusive IAA Mind-Conditioning Parlor Ink + Permanent Focus Stat Boost',
    regionId: 'vice-city',
    subLocation: 'Downtown VC -> Big Pines Bunker #2 -> Any Leonida Tattoo Parlor',
    mapPin: { x: 75, y: 50 },
    gearCategory: 'accessory',
    wearableBy: 'Both',
    perkOrStats:
      'Permanent exclusive "Brainwash" tattoo design unlocked for both Jason and Lucia across all 11 Leonida tattoo parlors (such as The Inked Mermaid in Key Lento), paired with a permanent Focus stat boost.',
    summary:
      'Returning to President Russo’s Big Pines bunker and surviving all five psychological loops of the IAA’s Project Rumba permanently buffs your Focus and unlocks rare conspiracy ink.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'In-game Smartphone (WAiNK landmark scanner)',
      storyProgress: 'Requires clearing President Russo’s Sharktooth & Big Pines bunkers first',
      specialCode: {
        label: 'Loop 3 Dormitory Reception Keypad',
        value: '09-06-07',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Clear Both Russo Bunkers & Sit in the Big Pines Chair',
        landmarkCue: 'Big Pines Bunker #2 Console Room -> Entrance Hatch',
        instruction:
          'After completing Jose Bermudez’s bunker chain, revisit Big Pines Bunker #2, activate the main console in the console room, backtrack to the newly opened entrance hallway hatch, and sit in the mind-conditioning chair.',
      },
      {
        stepNumber: 2,
        title: 'Clear Loops 1 & 2 (Side Door & Wall Clock)',
        landmarkCue: 'IAA Facility Reception',
        instruction:
          'In Loop 1, ignore the red exit doors by President Russo and take the alternate side door. In Loop 2, answer the ringing red phone in the starting room, then hold L2 / LT to inspect the reception wall clock.',
      },
      {
        stepNumber: 3,
        title: 'Enter Keypad 09-06-07 in Loop 3 & Finish Loops 4–5',
        landmarkCue: 'Candidate Beds 06, 07, 09 -> Inner Lab Desk Photo',
        instruction:
          'In Loop 3, enter 09-06-07 on the keypad right of President Russo to open the inner laboratory, examine the conditioning clues, and interact with the desk photograph to complete Loop 5.',
      },
      {
        stepNumber: 4,
        title: 'Apply the "Brainwash" Ink at Any Tattoo Parlor',
        landmarkCue: '11 Leonida Tattoo Parlors (Black Heart Icon)',
        instruction:
          'Once you wake up with your permanent Focus upgrade, visit any tattoo parlor in Leonida (like The Inked Mermaid in Key Lento) to apply the exclusive "Brainwash" tattoo on Jason or Lucia.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'GameSpot', label: 'Project Rumba 5-Loop & Brainwash Tattoo Guide' },
      { community: 'GTATown', label: 'Big Pines Mind-Conditioning & 09-06-07 Solution' },
    ],
    tags: ['brainwash tattoo', 'tattoo', 'project rumba', 'focus boost', '09-06-07', 'iaa'],
    relatedEasterEggSlug: 'project-rumba-iaa-mind-conditioning-loops',
    featured: true,
  },
];
