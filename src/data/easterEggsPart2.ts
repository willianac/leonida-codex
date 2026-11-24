import type { EasterEggEntry } from '../types/atlas';

export const EASTER_EGGS_PART_2: EasterEggEntry[] = [
  {
    id: 'ee-15-tiny-arthur-chihuahua',
    slug: 'tiny-arthur-morgan-riding-chihuahua',
    moduleId: 'easter-eggs',
    indexCode: 'EE-15',
    title: 'Tiny Arthur Morgan Doll Riding a Chihuahua',
    subtitle: 'A Cowboy Figurine Trotting Around Frontier Adventure Golf on Valentine Drive',
    regionId: 'leonard-county',
    subLocation: 'Southern Waning Sands — Frontier Adventure Golf (Valentine Drive, Next to Hot Skidz)',
    mapPin: { x: 75, y: 38 },
    category: 'franchise-callback',
    complexity: 'walk-up',
    referenceOrigin: 'Red Dead Redemption 2 — Arthur Morgan & Valentine',
    summary:
      'Along Valentine Drive in Waning Sands, a Chihuahua trots across a Wild West mini-golf course with an unmistakable miniature Arthur Morgan figurine strapped into its saddle.',
    requirements: {
      timeOfDay: 'Daytime recommended for clear camera zoom',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Drive to Frontier Adventure Golf on Valentine Drive',
        landmarkCue: 'Southern Waning Sands • Next to Hot Skidz Go-Karts',
        instruction:
          'Travel to southern Waning Sands in Leonard County and pull into the Western-themed Frontier Adventure Golf course off Valentine Drive, directly beside the Hot Skidz go-kart track.',
      },
      {
        stepNumber: 2,
        title: 'Use Your Camera Zoom on the Resident Chihuahua',
        landmarkCue: 'Mini-Golf Boardwalks & Entrance Path',
        instruction:
          'Stroll slowly along the wooden mini-golf paths watching the ground for a small Chihuahua trotting past, then crouch or zoom in with your phone camera.',
      },
    ],
    payoffDescription:
      'Reveals a tiny action figure dressed in Arthur Morgan’s signature blue shirt and leather hat, raising a miniature revolver while riding the Chihuahua like a frontier steed—right off "Valentine Drive".',
    loreContext:
      'Doubles down on the RDR2 love by pairing Arthur’s iconic Gunslinger outfit with a street named after RDR2’s Chapter 2 town of Valentine.',
    verificationStatus: 'verified',
    sources: [
      { community: 'IGN', label: 'Tiny Arthur Chihuahua Location' },
      { community: 'Red Bull Gaming', label: 'Valentine Drive Mini-Golf Easter Egg' },
    ],
    tags: ['arthur morgan', 'chihuahua', 'rdr2', 'valentine drive', 'mini golf'],
  },
  {
    id: 'ee-16-fast-furious-penumbra-toy-story',
    slug: 'paul-walker-fast-and-furious-eclipse-toy-story-trunk',
    moduleId: 'easter-eggs',
    indexCode: 'EE-16',
    title: 'Brian O’Conner’s Fast & Furious Car ("HAD YOU") & Toy Story Boot Gag',
    subtitle: 'Steal a Neon-Green Maibatsu Penumbra FF With a Hidden Surprise in the Trunk',
    regionId: 'vice-city',
    subLocation: 'Vespucci Island (Rialto Islands, West of Vice Beach) — Modern Villa Garage',
    mapPin: { x: 81, y: 51 },
    category: 'pop-culture',
    complexity: 'walk-up',
    referenceOrigin: 'The Fast and the Furious (2001) & Toy Story',
    summary:
      'Locked inside an upscale Rialto Islands villa garage sits a bright green street-racing tuner sporting Paul Walker’s famous quote on its plate—plus a visual pun inside the boot.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Custom Vanity License Plate',
        value: 'HAD YOU',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Find the Modern Villa on Vespucci Island',
        landmarkCue: 'Rialto Islands • Two Cars Parked Out Front',
        instruction:
          'Cross onto Vespucci Island in the Rialto Islands (west of Vice Beach) and locate the sleek residential villa with two cars parked in the driveway before an enclosed garage.',
      },
      {
        stepNumber: 2,
        title: 'Kill the Wall Alarm Switch Before Opening the Bay',
        landmarkCue: 'Left Interior Garage Wall',
        instruction:
          'Slip into the garage and immediately press the alarm-disable switch mounted on the left wall so you won’t trigger a police response.',
      },
      {
        stepNumber: 3,
        title: 'Pop the Trunk ("Boot") & Claim the Penumbra FF',
        landmarkCue: 'Plate: HAD YOU',
        instruction:
          'Admire the neon-green Maibatsu Penumbra FF with plate "HAD YOU", pop open the rear trunk/boot to inspect the hidden prop gag inside, then hotwire the car and store it in your safehouse garage.',
      },
    ],
    payoffDescription:
      'Awards a free, custom-liveried Maibatsu Penumbra FF paying tribute to Brian O’Conner’s 1995 Mitsubishi Eclipse ("Dude, I almost had you!"), while opening the car’s "boot" reveals a literal snake prop nodding to Woody’s "There’s a snake in my boot!" line from Toy Story.',
    loreContext:
      'Connects street-racing cinema history (including Miami-set 2 Fast 2 Furious) with a classic Rockstar double-pun.',
    verificationStatus: 'verified',
    sources: [
      { community: 'GTAForums', label: 'Vespucci Island Penumbra FF & Boot Snake' },
      { community: 'GamesRadar+', label: 'Paul Walker Tribute Car Location' },
    ],
    tags: ['fast and furious', 'paul walker', 'penumbra ff', 'had you', 'toy story', 'car'],
  },
  {
    id: 'ee-17-monument-leonidan-supremacy',
    slug: 'monument-of-leonidan-supremacy-manifest-canyon',
    moduleId: 'easter-eggs',
    indexCode: 'EE-17',
    title: 'The Monument of Leonidan Supremacy (Chiliad Mystery Successor)',
    subtitle: 'Cracked Golden Orb, Glasgow Cone Horse, Controller Rumble & Waink Morse Signal',
    regionId: 'port-gellhorn',
    subLocation: 'Manifest Canyon (North Kelly County, North of Port Gellhorn)',
    mapPin: { x: 26, y: 32 },
    category: 'franchise-callback',
    complexity: 'walk-up',
    referenceOrigin: 'GTA V Mount Chiliad Mural & Glasgow Duke of Wellington Statue',
    summary:
      'Deep in Manifest Canyon stands a mysterious 1982 stone monument crowned with a cracked golden orb that makes controllers vibrate, triggers Waink app anomalies, and broadcasts rhythmic beeps.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'In-game Smartphone (Waink app) & controller vibration/audio enabled',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Approach the Central Pillar on Foot in Manifest Canyon',
        landmarkCue: 'North of Port Gellhorn',
        instruction:
          'Travel north into Manifest Canyon in Kelly County and walk right up to the central stone pillar—feeling your controller begin to rumble as you near the base.',
      },
      {
        stepNumber: 2,
        title: 'Inspect the Cracked Orb, 1982 Plaque & Four Horse Statues',
        landmarkCue: 'Traffic Cone Horse Head',
        instruction:
          'Look up at the cracked golden globe crowning the pillar, read the "Leonidafication (1982)" plaque, and examine the celestial symbols carved into the four surrounding horse statues—including one wearing an orange traffic cone on its head.',
      },
      {
        stepNumber: 3,
        title: 'Scan With the Waink App & Listen for the Beeping Signal',
        landmarkCue: 'Smartphone Waink Scanner',
        instruction:
          'Open the Waink app on your in-game phone and scan the monument to trigger anomalous haptic/audio feedback while listening closely for the repeating Morse-like beep pattern.',
      },
    ],
    payoffDescription:
      'Produces localized haptic tremors, Waink app interference, a rhythmic mysterious beep sequence, a Chiliad-style cracked egg/globe motif, and a cheeky traffic-cone horse statue gag.',
    loreContext:
      'While the traffic cone is a signature Rockstar North salute to Glasgow’s Duke of Wellington statue, myth-hunters on r/GTA6 treat the cracked orb and Morse audio as Leonida’s central overarching mystery.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Manifest Canyon Monument & Morse Investigation' },
      { community: 'GTAForums', label: 'Chiliad Successor Symbol Analysis' },
    ],
    tags: ['mount chiliad', 'mystery', 'manifest canyon', 'glasgow', 'morse code', 'waink'],
  },
  {
    id: 'ee-18-mount-kalaga-stone-circle-meteorite',
    slug: 'mount-kalaga-summit-stone-circle-meteorite',
    moduleId: 'easter-eggs',
    indexCode: 'EE-18',
    title: 'Mount Kalaga Summit Stone Circle & Glowing Meteorite',
    subtitle: 'Incense Cairn, Summit Mobility Scooter & Purple-Fog Impact Crater',
    regionId: 'mount-kalaga',
    subLocation: 'Mount Kalaga National Park (Lummox County) — Summit Peak & Upper Slope',
    mapPin: { x: 44, y: 15 },
    category: 'cryptid-myth',
    complexity: 'conditional',
    referenceOrigin: 'RDR2 Meteorite Lore & High-Altitude Ritual Sites',
    summary:
      'Scaling the highest peak in Mount Kalaga National Park reveals an enigmatic ritual stone circle—and peering down the slope at night exposes a glowing purple-fog crater holding a collectible meteorite.',
    requirements: {
      timeOfDay: 'Nighttime recommended (purple crater fog glows brightly)',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Ascend to the Summit Peak of Mount Kalaga',
        landmarkCue: 'Lummox County • Summit Cairn',
        instruction:
          'Hike, ride a dirt bike, or fly to the very peak of Mount Kalaga and inspect the ring of standing stones surrounding an incense cairn—absurdly parked beside a mobility scooter and a parachute.',
      },
      {
        stepNumber: 2,
        title: 'Spot the Glowing Purple Fog Down the Mountain Slope',
        landmarkCue: 'Nighttime Visual Beacon',
        instruction:
          'Stand at the rim of the stone circle after dark and scan the mountainside below for an unmistakable pocket of eerie purple mist.',
      },
      {
        stepNumber: 3,
        title: 'Parachute to the Scorched Campsite & Collect the Meteorite',
        landmarkCue: 'Impact Crater',
        instruction:
          'Glide or hike down into the scorched campsite inside the purple fog and pick up the glowing Meteorite fragment from the crater.',
      },
    ],
    payoffDescription:
      'Picking up the space rock washes the screen in a surreal purple-and-green distortion haze and stores a rare Meteorite piece in your inventory.',
    loreContext:
      'Echoes Red Dead Redemption 2’s mysterious meteorite craters while adding classic GTA comedy via the unexplained mobility scooter parked at the mountain peak.',
    verificationStatus: 'verified',
    sources: [
      { community: 'Sportskeeda', label: 'Mount Kalaga Stone Circle & Meteorite Guide' },
      { community: 'r/GTA6', label: 'Purple Fog Crater Discovery' },
    ],
    tags: ['meteorite', 'mount kalaga', 'stone circle', 'purple fog', 'collectible'],
  },
  {
    id: 'ee-19-manifest-canyon-creepy-phone-tower',
    slug: 'manifest-canyon-radio-tower-surveillance-call',
    moduleId: 'easter-eggs',
    indexCode: 'EE-19',
    title: 'Creepy Manifest Canyon Surveillance Tower & Phone Call',
    subtitle: 'Trespass Past Automated Warnings for a Chilling Call About Jason’s Past',
    regionId: 'port-gellhorn',
    subLocation: 'Manifest Canyon Hills (South of Grayson, NE of Port Gellhorn)',
    mapPin: { x: 33, y: 36 },
    category: 'puzzle-secret',
    complexity: 'conditional',
    referenceOrigin: 'Government Surveillance Thrillers & Numbers Stations',
    summary:
      'Ignoring automated loudspeaker warnings at a fenced cellular hut in Manifest Canyon makes Jason’s personal phone ring with an unknown caller who knows his classified military history.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Jason',
      storyProgress: 'Documented during Chapter 1',
      specialCode: {
        label: 'Posted Compound Sign Number',
        value: '786-555-0145',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Travel as Jason to the Hills South of Grayson (Chapter 1)',
        landmarkCue: 'Manifest Canyon • NE of Port Gellhorn',
        instruction:
          'During Chapter 1 while playing as Jason, head into the Manifest Canyon hills northeast of Port Gellhorn until you find a floodlit red-and-white lattice tower fenced around a small utility hut.',
      },
      {
        stepNumber: 2,
        title: 'Push Past the Gate Loudspeaker Warning',
        landmarkCue: 'Sign: 786-555-0145',
        instruction:
          'Note the utility sign reading 786-555-0145, walk past the chain-link gate as an automated loudspeaker orders you to leave, and try to force open the hut door.',
      },
      {
        stepNumber: 3,
        title: 'Answer the Incoming Unknown Number Call',
        landmarkCue: 'Scripted Phone Ring',
        instruction:
          'Stay inside the compound and pick up Jason’s ringing smartphone to hear the hidden dialogue.',
      },
    ],
    payoffDescription:
      'An icy, omniscient female voice addresses Jason directly and recites unsettling specifics from his past military service—proving someone is monitoring him right from Chapter 1.',
    loreContext:
      'A subtle, missable early-chapter world detail that rewards curious trespassers with eerie character backstory.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Chapter 1 Jason Surveillance Tower Call' },
      { community: 'GTAForums', label: '786-555-0145 Manifest Canyon Hut' },
    ],
    tags: ['jason', 'phone call', '786-555-0145', 'surveillance', 'manifest canyon', 'chapter 1'],
  },
  {
    id: 'ee-20-exploding-beached-whale',
    slug: 'exploding-beached-whale-gellhorn-coast',
    moduleId: 'easter-eggs',
    indexCode: 'EE-20',
    title: 'The Exploding Beached Whale',
    subtitle: 'Walk Up to a Tourist-Crowded Whale Carcass & Loot the Blast Debris',
    regionId: 'port-gellhorn',
    subLocation: 'Unmarked Beach SW of Gellhorn Raceway (Near the Capri Strait)',
    mapPin: { x: 18, y: 56 },
    category: 'florida-parody',
    complexity: 'walk-up',
    referenceOrigin: '1970 Oregon Exploding Whale & Viral Marine Bloat Incidents',
    summary:
      'Approaching a crowd of gawking tourists around a stranded whale southwest of Gellhorn Raceway triggers an explosive biological detonation scattering absurd loot across the sand.',
    requirements: {
      timeOfDay: 'Daytime recommended',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Cruise the Coastal Highway SW of Gellhorn Raceway',
        landmarkCue: 'Kelly County • Near Capri Strait',
        instruction:
          'Drive southwest from Gellhorn Raceway along the coastal highway and scan the unmarked sandy beach for a circle of tourists filming a beached whale.',
      },
      {
        stepNumber: 2,
        title: 'Walk Close to Trigger the Event—Then Step Back!',
        landmarkCue: 'Scripted Blast Radius',
        instruction:
          'Approach the whale carcass to kick off NPC reactions, then back up a few paces before the bloated whale violently explodes.',
      },
      {
        stepNumber: 3,
        title: 'Comb the Beach Debris for Contraband & Rare Loot',
        landmarkCue: 'Post-Blast Sand Pickups',
        instruction:
          'Search the scattered remains around the blast zone to collect every dropped item.',
      },
    ],
    payoffDescription:
      'After showering horrified beachgoers in blubber, the whale’s stomach contents yield fencible cocaine bricks, a collectible Meteorite piece, the Nipper pistol, and—in peak Rockstar fashion—an intact wheelchair.',
    loreContext:
      'Parodies both the legendary 1970 Oregon Highway Division dynamited whale broadcast and real-life gas-pressurized whale explosions.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Exploding Whale Loot Table Clip' },
      { community: 'GTA6Map.city', label: 'Capri Strait Beached Whale Event' },
    ],
    tags: ['whale', 'explosion', 'meteorite', 'nipper pistol', 'port gellhorn', 'funny'],
  },
  {
    id: 'ee-21-underwater-metal-kraken',
    slug: 'underwater-metal-kraken-gloriana-key',
    moduleId: 'easter-eggs',
    indexCode: 'EE-21',
    title: 'The Underwater Metal "Kraken"',
    subtitle: 'Deep-Sea Shipwreck Crushed by Giant Twisted Tentacles SE of Gloriana Key',
    regionId: 'offshore-waters',
    subLocation: 'Leonida Deep Ocean — Seabed Southeast of Gloriana Key',
    mapPin: { x: 89, y: 74 },
    category: 'environmental',
    complexity: 'conditional',
    referenceOrigin: 'Maritime Sea Monster Myths & Classic GTA Ocean Legends',
    summary:
      'Far off Gloriana Key’s southeastern shelf, diving to the abyssal floor reveals a haunting sunken vessel ensnared in colossal Kraken-shaped iron tentacles.',
    requirements: {
      timeOfDay: 'Daytime strongly recommended for seabed visibility',
      protagonist: 'Either',
      equipment: 'Boat, Scuba Gear & Arras Bullhead Speargun (unlocked in Ch. 1 "Island Dreams")',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Unlock Scuba Gear & Speargun in Chapter 1',
        landmarkCue: 'Mission: "Island Dreams" (Capt. Kenton)',
        instruction:
          'Complete Chapter 1’s "Island Dreams" story mission to acquire permanent Scuba Gear and the Arras Bullhead speargun for shark defense.',
      },
      {
        stepNumber: 2,
        title: 'Sail Southeast from Gloriana Key Into Deep Water',
        landmarkCue: 'Daylight Open Ocean',
        instruction:
          'Launch a boat from Gloriana Key during bright daylight and head southeast past the coastal shelf into deep ocean waters.',
      },
      {
        stepNumber: 3,
        title: 'Dive Straight to the Seabed Wreckage',
        landmarkCue: 'Underwater Discovery #1–33 Set',
        instruction:
          'Don your Scuba Gear, keep your speargun ready for patrolling sharks, and descend to the seabed to inspect the tentacle-wrapped hull.',
      },
    ],
    payoffDescription:
      'Reveals an eerie monumental sculpture/wreckage formation of dark twisted steel beams coiled like a giant Kraken dragging a ship into the abyss (and counts toward Leonida’s 33 Underwater Discoveries).',
    loreContext:
      'Plays on player thalassophobia—looking terrifyingly alive from a distance in murky water before revealing itself as twisted maritime steel up close.',
    verificationStatus: 'verified',
    sources: [
      { community: 'GameSpot', label: 'Underwater Kraken Location Guide' },
      { community: 'Push Square', label: 'Gloriana Key Deep Sea Secrets' },
    ],
    tags: ['kraken', 'underwater', 'scuba', 'shipwreck', 'gloriana key', 'ocean'],
  },
  {
    id: 'ee-22-scarface-bloody-bathroom',
    slug: 'scarface-bloody-bathroom-surfside-drive',
    moduleId: 'easter-eggs',
    indexCode: 'EE-22',
    title: 'Scarface Bloody Bathroom Chainsaw Scene (Modern Apt. 3C)',
    subtitle: 'Force Open a Taped-Off Yellow Stilt House on Surfside Drive',
    regionId: 'leonida-keys',
    subLocation: 'South Key Lento — Yellow Beachfront Stilt House on Surfside Drive',
    mapPin: { x: 64, y: 84 },
    category: 'pop-culture',
    complexity: 'walk-up',
    referenceOrigin: 'Scarface (1983) & GTA: Vice City (2002) Apartment 3C',
    summary:
      'Breaking past the police-secured door of a yellow stilt house on Key Lento’s Surfside Drive uncovers a grisly crime-scene bathroom paying double homage to Scarface and 2002’s Apartment 3C.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Getaway vehicle parked nearby (entry trips police alarm)',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Yellow Beachfront Stilt House on Surfside Drive',
        landmarkCue: 'South Side of Key Lento',
        instruction:
          'Drive to Surfside Drive along the southern shore of Key Lento and spot the bright yellow house raised on wooden stilts overlooking the beach.',
      },
      {
        stepNumber: 2,
        title: 'Climb the Deck Stairs & Force Open the Secured Door',
        landmarkCue: 'Trips House Security Alarm',
        instruction:
          'Ascend the exterior wooden staircase and kick/force open the taped-off entry door (be ready—Key Lento police are immediately alerted by the alarm).',
      },
      {
        stepNumber: 3,
        title: 'Follow the Blood Trail Into the Shower Bathroom',
        landmarkCue: 'Interior Bathroom',
        instruction:
          'Step inside and follow the smeared crimson trail straight to the bathroom shower curtain before making your getaway.',
      },
    ],
    payoffDescription:
      'Recreates the infamous Sun Ray Motel chainsaw ambush from Brian De Palma’s 1983 Scarface—and serves as the spiritual successor to GTA: Vice City’s Ocean Beach Apartment 3C.',
    loreContext:
      'Apartment 3C was one of the first viral Easter eggs in 3D-era GTA history; placing its modern counterpart in the Keys keeps Vice tradition alive.',
    verificationStatus: 'verified',
    sources: [
      { community: 'Push Square', label: 'Scarface Bathroom Location on Key Lento' },
      { community: 'r/GTA6', label: 'Modern Apartment 3C Comparison' },
    ],
    tags: ['scarface', 'apartment 3c', 'chainsaw', 'key lento', 'vice city callback'],
  },
  {
    id: 'ee-23-tenebrae-lux-console-game',
    slug: 'tenebrae-lux-playable-horror-console-puzzle',
    moduleId: 'easter-eggs',
    indexCode: 'EE-23',
    title: 'Tenebrae Lux (Full Playable Retro Horror Console Game)',
    subtitle: '4-Act Black-and-White Mystery Hidden Inside Jason’s Living Room JoySystem',
    regionId: 'leonida-keys',
    subLocation: 'Key Lento — Jason’s Safehouse Living Room (JoySystem Console)',
    mapPin: { x: 58, y: 87 },
    category: 'puzzle-secret',
    complexity: 'multi-step',
    referenceOrigin: 'Myst, Signalis & P.T. Indie Puzzle Horror',
    summary:
      'Booting up the JoySystem console beneath Jason’s TV launches Tenebrae Lux—a genuinely creepy, multi-act monochrome puzzle game with randomized per-playthrough bunker codes.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      storyProgress: 'Unlocks during/after main mission "Feng Shui" with Cal',
      specialCode: {
        label: '6-Digit Bunker Code Formula (Session-Randomized + #)',
        value: '[Oct11 People][Oct14 DigitSum][Oct20 RomanSum][Oct23 Rings][Oct27 PriceSum][Oct30 α=1..ε=5]#',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Boot JoySystem & Clear Part 1 (The Beach Boards)',
        landmarkCue: 'Jason’s Living Room TV',
        instruction:
          'After "Feng Shui", launch Tenebrae Lux on the JoySystem console. Enter the lit beach shacks and clear each 3D grid board by using medium spiky pieces to eliminate flat dot pieces, then colliding tall three-tier and medium pieces until empty.',
      },
      {
        stepNumber: 2,
        title: 'Deduce Your Unique 6-Digit Bunker Code (Part 2)',
        landmarkCue: 'Oct 11–30 Clues + # Key',
        instruction:
          'Inside the bunker, compute each digit from your session’s six dated clues: (1) Oct 11 fallen photo -> count ALL people including background; (2) Oct 14 tape player -> sum digits to single digit; (3) Oct 20 Roman numeral -> convert & sum digits to single digit; (4) Oct 23 ringing phone -> count rings; (5) Oct 27 vinyl price -> sum digits to single digit; (6) Oct 30 engine Greek letter -> α=1, β=2, γ=3, δ=4, ε=5. Dial the 6 digits followed by #.',
      },
      {
        stepNumber: 3,
        title: 'Solve the 7-Line Bridge Poem & Lighthouse Audio Maze (Parts 3 & 4)',
        landmarkCue: 'Bridge Symbols -> White Doors',
        instruction:
          'Read the 7-line bridge poem and select matching thematic objects in verse order (e.g., riches -> Trophy, time -> Sundial) to lower the bridge, then use headphones/audio cues (footsteps, hums, light shifts) to pick safe doors in the White Doors finale.',
      },
    ],
    payoffDescription:
      'Completes an entire standalone surreal horror short film hidden inside GTA VI, rewarding puzzle fans who deduce a randomized cipher that can’t simply be copied from a friend’s save.',
    loreContext:
      'Kotaku and r/GTA6 hailed Tenebrae Lux as Rockstar’s most ambitious in-game arcade creation since San Andreas and GTA Online’s retro cabinets.',
    verificationStatus: 'community-solved',
    sources: [
      { community: 'Kotaku', label: 'Tenebrae Lux Complete Puzzle Solver' },
      { community: 'GameSpot', label: 'How to Calculate Your Tenebrae Lux Bunker Code' },
      { community: 'r/GTA6', label: 'JoySystem Horror Game Megathread' },
    ],
    tags: ['tenebrae lux', 'joysystem', 'console', 'minigame', 'bunker code', 'horror'],
  },
  {
    id: 'ee-24-ocean-view-hotel-trophy',
    slug: 'ocean-view-hotel-in-the-beginning-trophy',
    moduleId: 'easter-eggs',
    indexCode: 'EE-24',
    title: 'Ocean View Hotel & "In The Beginning..." Trophy',
    subtitle: 'Order a Beachfront Cocktail by Tommy Vercetti’s First Safehouse',
    regionId: 'vice-city',
    subLocation: 'Ocean Beach — Art Deco Strip Waterfront',
    mapPin: { x: 86, y: 61 },
    category: 'franchise-callback',
    complexity: 'walk-up',
    referenceOrigin: 'GTA: Vice City (2002) — Ocean View Hotel',
    summary:
      'Tommy Vercetti’s iconic pink-neon Ocean Beach safehouse returns on the Art Deco strip—and sipping a cocktail overlooking the surf unlocks a nostalgia-packed trophy.',
    requirements: {
      timeOfDay: 'Anytime (Dusk/Night showcases classic pink & green neon)',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Visit the Ocean View Hotel on Ocean Beach',
        landmarkCue: 'Art Deco Beachfront Strip',
        instruction:
          'Cruise down Ocean Beach’s neon strip until you reach the faithfully restored Ocean View Hotel facade—and check the curb out front for throwback classic sports car spawns.',
      },
      {
        stepNumber: 2,
        title: 'Order a Cocktail Overlooking the Beach',
        landmarkCue: 'Beachfront Bar / Viewpoint Prompt',
        instruction:
          'Step over to the Ocean Beach beachfront bar/viewpoint spot opposite the hotel and interact to enjoy a cocktail looking out toward the Atlantic.',
      },
    ],
    payoffDescription:
      'Pops the secret "In The Beginning..." trophy/achievement—saluting the exact spot where millions of players saved their game for the first time in 2002.',
    loreContext:
      'Modeled after Miami Beach’s real-world Ocean Drive Art Deco landmarks (like the Colony and Clevelander hotels).',
    verificationStatus: 'verified',
    sources: [
      { community: 'Red Bull Gaming', label: 'In The Beginning Trophy & Ocean View Guide' },
      { community: 'KeenGamer', label: 'GTA Vice City Landmarks in GTA 6' },
    ],
    tags: ['ocean view hotel', 'trophy', 'achievement', 'ocean beach', 'tommy vercetti'],
  },
  {
    id: 'ee-25-michael-de-santa-gtav-canon',
    slug: 'michael-de-santa-boat-los-santos-gps-ringtone',
    moduleId: 'easter-eggs',
    indexCode: 'EE-25',
    title: 'Michael De Santa’s Stolen Boat, Los Santos GPS & Ringtone',
    subtitle: 'Zoom Into a Key Lento Sailboat Helm & Check Smartphone Settings',
    regionId: 'leonida-keys',
    subLocation: 'Key Lento (Outside Jason’s House), Phone Settings & Keys Magazine Racks',
    mapPin: { x: 55, y: 88 },
    category: 'franchise-callback',
    complexity: 'walk-up',
    referenceOrigin: 'Grand Theft Auto V (2013) — "Father/Son" & Ending C',
    summary:
      'Outside Jason’s Key Lento home sits a Marquis sailboat matching Michael De Santa’s stolen yacht—still displaying South Los Santos on its helm GPS—alongside equippable GTA V ringtones and canon updates.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      storyProgress: 'Available from Chapter 1 onward',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Zoom In on the Marquis Sailboat’s Helm GPS',
        landmarkCue: 'Key Lento • Near Jason’s House',
        instruction:
          'Board or inspect the Marquis sailboat near Jason’s house in Key Lento and zoom your camera/first-person view onto the cockpit GPS screen beside the wheel.',
      },
      {
        stepNumber: 2,
        title: 'Equip Michael’s "Wind Chimes" Ringtone',
        landmarkCue: 'Phone -> Settings -> Ringtones',
        instruction:
          'Open your in-game smartphone, go to Settings -> Ringtones, and select "Wind Chimes" to hear Michael De Santa’s exact 2013 cell ringtone.',
      },
      {
        stepNumber: 3,
        title: 'Read Body Copy Magazine & Listen for Ending C Radio Chatter',
        landmarkCue: 'Leonida Keys Shops & Radio',
        instruction:
          'Check an issue of Body Copy magazine in the Keys to read about yoga guru Fabien LaRouche teaching at a Leonida retirement home, and listen for radio/NPC dialogue confirming Michael, Franklin, and Trevor all survived.',
      },
    ],
    payoffDescription:
      'Reveals an actual South Los Santos street map frozen on the Marquis yacht’s navigation display (implying Jimmy’s stolen boat eventually ended up in the Keys!) and cements GTA V’s "Ending C (The Third Way)" as HD-Universe canon.',
    loreContext:
      'Answers one of GTA V’s longest-running jokes ("Where did Michael’s stolen boat go after Father/Son?") right in Key Lento.',
    verificationStatus: 'verified',
    sources: [
      { community: 'IGN', label: 'Michael De Santa’s Boat Found in Key Lento' },
      { community: 'Eurogamer', label: 'GTA 5 Canon & Los Santos GPS Easter Egg' },
    ],
    tags: ['michael de santa', 'gta 5', 'los santos', 'boat', 'ringtone', 'fabien'],
  },
  {
    id: 'ee-26-gta4-memoir-rdr-novels',
    slug: 'gta-4-liberty-city-memoir-and-new-austin-novels',
    moduleId: 'easter-eggs',
    indexCode: 'EE-26',
    title: 'GTA IV Liberty City Memoir & Red Dead New Austin Novels',
    subtitle: 'Readable Cross-Universe Books in Key Lento & Millport’s Jacob’s Tavern',
    regionId: 'mount-kalaga',
    subLocation: 'Jason’s House (Key Lento) & Jacob’s Tavern in Millport (Lummox County)',
    mapPin: { x: 58, y: 20 },
    category: 'franchise-callback',
    complexity: 'walk-up',
    referenceOrigin: 'Grand Theft Auto IV (2008) & Red Dead Redemption',
    summary:
      'Bookworms exploring interiors in Key Lento and Millport can inspect readable covers chronicling 2008’s Liberty City crime families and frontier legends from New Austin.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Inspect "Lethal by Design" by Jason’s Back Door',
        landmarkCue: 'Key Lento • Jason’s Safehouse',
        instruction:
          'Inside Jason’s Key Lento house, check the small side table next to the rear exit to inspect the hardcover book titled "Lethal by Design: A Liberty City Memoir".',
      },
      {
        stepNumber: 2,
        title: 'Read the New Austin Pulp Westerns in Millport',
        landmarkCue: 'Lummox County • Jacob’s Tavern (Next to Pay ’n’ Spray)',
        instruction:
          'Drive north to Millport in Lummox County, enter Jacob’s Tavern right beside the local Pay ’n’ Spray, and inspect the Western pulp paperbacks inside.',
      },
    ],
    payoffDescription:
      'Connects Liberty City’s 2008 underworld and Red Dead Redemption’s New Austin territory directly into Leonida’s literary world—continuing the tradition of J. Marston’s "Red Dead" book on Franklin’s shelf in GTA V.',
    loreContext:
      'Even the tavern name ("Jacob’s Tavern") and neighboring classic "Pay ’n’ Spray" give longtime GTA IV and 3D-era fans extra reason to stop in Millport.',
    verificationStatus: 'verified',
    sources: [
      { community: 'GameSpot', label: 'GTA 4 & Red Dead Book Locations in Leonida' },
      { community: 'Red Bull Gaming', label: 'Millport Jacob’s Tavern Lore Details' },
    ],
    tags: ['gta 4', 'liberty city', 'new austin', 'red dead', 'books', 'millport'],
  },
  {
    id: 'ee-27-escaped-tiger-deer-hunters',
    slug: 'escaped-bengal-tiger-bella-and-deer-disguise-hunters',
    moduleId: 'easter-eggs',
    indexCode: 'EE-27',
    title: 'Escaped Bengal Tiger ("Bella") & Deer-Disguise Hunters',
    subtitle: 'Mud-Stuck Van Ambush & Backwoods Antler Feud in Grassrivers',
    regionId: 'grassrivers',
    subLocation: 'Grassrivers Muddy Backroads & Gullet Marsh Woods',
    mapPin: { x: 43, y: 72 },
    category: 'florida-parody',
    complexity: 'conditional',
    referenceOrigin: 'Tiger King & Peak "Florida Man" Headlines',
    summary:
      'Cruising Grassrivers’ muddy backroads reveals two peak-Florida encounters: an escaped Bengal tiger bursting out of a stuck van, and a pair of hunters feuding after one wore a deer costume.',
    requirements: {
      timeOfDay: 'Anytime (Free-roam rural Grassrivers patrol)',
      protagonist: 'Either',
      equipment: 'Shotgun or rifle recommended before opening the mud-stuck van',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Investigate the Mud-Stuck Van in Grassrivers',
        landmarkCue: 'Rural Marsh Backroads',
        instruction:
          'Patrol unpaved, muddy Grassrivers backroads until you spot an abandoned van mired axle-deep in mud. Ready a weapon and approach/open the van doors.',
      },
      {
        stepNumber: 2,
        title: 'Survive "Bella" & Tune In to Local Radio',
        landmarkCue: 'Radio Missing-Tiger Bulletin',
        instruction:
          'Fend off the full-grown Bengal tiger that leaps out of the van, then switch on local Leonida radio afterward to hear news bulletins offering a reward for an escaped pet tiger named "Bella".',
      },
      {
        stepNumber: 3,
        title: 'Watch Paul & Todd’s Deer-Disguise Feud in Gullet Marsh',
        landmarkCue: 'Gullet Marsh Backwoods',
        instruction:
          'Roam the wooded edges of Gullet Marsh to find hunters Paul and Todd arguing after one shot the other while wearing antlers and a deer disguise—stay back as a cheating-wife confession turns into a shootout.',
      },
    ],
    payoffDescription:
      'Turns surreal exotic-pet and backcountry Florida tabloid stories into chaotic, unscripted-feeling open-world comedy.',
    loreContext:
      'Frequently shared on r/GTA6 for catching unsuspecting players completely off guard when checking what looks like an ordinary lootable van.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Muddy Van Bengal Tiger Jump Scare Clip' },
      { community: 'GTAForums', label: 'Grassrivers Random Encounters Compendium' },
    ],
    tags: ['tiger', 'bella', 'florida man', 'hunters', 'grassrivers', 'tiger king'],
  },
  {
    id: 'ee-28-t2-roses-bad-boys-little-sam',
    slug: 'terminator-2-roses-shotgun-bad-boys-airport-little-sam',
    moduleId: 'easter-eggs',
    indexCode: 'EE-28',
    title: 'T2 Roses Shotgun, Bad Boys Airport Sign & "Little Sam" Cameo',
    subtitle: 'Cinematic Action Homages & Rockstar Studio Heritage Across Vice City',
    regionId: 'vice-city',
    subLocation: 'Vice City International Airport, Commercial Strips & Ch. 1 / Ch. 3 Missions',
    mapPin: { x: 68, y: 49 },
    category: 'pop-culture',
    complexity: 'walk-up',
    referenceOrigin: 'Terminator 2, Bad Boys (1995), GTA III, San Andreas & Bully',
    summary:
      'From Vice City International Airport’s Bad Boys entrance framing to an enemy pulling a shotgun from a gold box of roses, Rockstar packs cinematic and studio deep cuts across Vice City.',
    requirements: {
      timeOfDay: 'Anytime (Free roam for Airport/Storefronts; Ch. 1 & Ch. 3 for story nods)',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Spot the Gold Box of Roses Shotgun in Chapter 1',
        landmarkCue: 'Ch. 1 Hospital Breakout',
        instruction:
          'During Chapter 1’s hospital breakout sequence (when Lucia busts Jason free), watch an attacker draw a shotgun hidden inside a long gold box of roses—mirroring Arnold Schwarzenegger’s Galleria hallway reveal in Terminator 2.',
      },
      {
        stepNumber: 2,
        title: 'Visit the Vice City International Airport Entrance Sign',
        landmarkCue: 'Main Airport Approach Road',
        instruction:
          'Drive to the main approach of Vice City International Airport in free roam to see the bold "Vice City" monument sign framed identically to Michael Bay’s iconic Miami establishing shot in Bad Boys.',
      },
      {
        stepNumber: 3,
        title: 'Meet "Little Sam", Pass Big Smoke Cigar Co. & Browse Pet Listings',
        landmarkCue: 'Ch. 3 "Boobie Time" & In-Game Web',
        instruction:
          'Play Chapter 3’s "Boobie Time" (with Boobie Ike) to meet "Little Sam" (calling back to GTA III’s rumored Sam Houser stand-in), spot "Big Smoke Cigar Co." storefronts in Vice City, and check in-game pet sites for the "Bullworth Longhair" cat breed nodding to Bully.',
      },
    ],
    payoffDescription:
      'Rewards observant movie buffs and longtime Rockstar veterans with layered references spanning T2, Bad Boys, GTA III, San Andreas, and Bully.',
    loreContext:
      'Highlights how Rockstar weaves Easter eggs into every layer of GTA VI—from blink-and-you-miss-it story animations to highway signage and fake websites.',
    verificationStatus: 'verified',
    sources: [
      { community: 'GamesRadar+', label: 'Terminator 2 & Bad Boys Homages in GTA 6' },
      { community: 'ComicBook', label: 'Little Sam, Big Smoke & Bully Easter Eggs' },
      { community: 'r/GTA6', label: 'Bullworth Longhair & Storefront Details Thread' },
    ],
    tags: ['terminator 2', 'bad boys', 'airport', 'big smoke', 'bully', 'sam houser'],
  },
  {
    id: 'ee-29-jaws-orca-shark-attack',
    slug: 'jaws-smoking-orca-boat-shark-attack',
    moduleId: 'easter-eggs',
    indexCode: 'EE-29',
    title: 'Jaws Smoking "Orca" Boat & Giant Shark Attack',
    subtitle: 'Spot Black Engine Smoke in Leonida Bay to Salvage a Speargun & Contraband',
    regionId: 'leonida-keys',
    subLocation: 'Leonida Bay Open Waters (Dynamic Maritime Encounter)',
    mapPin: { x: 49, y: 84 },
    category: 'pop-culture',
    complexity: 'conditional',
    referenceOrigin: 'Jaws (1975) — Quint’s Fishing Vessel "Orca"',
    summary:
      'Cruising across Leonida Bay can reveal a stranded fishing vessel belching thick black engine smoke—recreating the final moments of Quint’s Orca as a massive shark circles the hull.',
    requirements: {
      timeOfDay: 'Daytime recommended (spot black smoke plume on the horizon)',
      protagonist: 'Either',
      equipment: 'Any fast boat to reach Leonida Bay open water',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Scan the Leonida Bay Horizon for Thick Black Smoke',
        landmarkCue: 'Leonida Bay Open Water',
        instruction:
          'Take a boat across the open waters of Leonida Bay (available as early as Chapter 1) and watch the horizon for a column of dark engine smoke rising from a drifting small fishing boat.',
      },
      {
        stepNumber: 2,
        title: 'Approach the Wreck & Watch the Circling Shark',
        landmarkCue: 'Sinking Fishing Boat',
        instruction:
          'Throttle up alongside the smoking vessel to witness a giant shark circling and ramming the boat.',
      },
      {
        stepNumber: 3,
        title: 'Board Quickly for the Speargun & Scoop Beeping Packages',
        landmarkCue: 'Deck Loot & Floating Cocaine Bricks',
        instruction:
          'Hop onto the deck of the smoking boat to claim a free speargun, then carefully collect the beeping cocaine packages floating nearby without lingering in the water with the shark.',
      },
    ],
    payoffDescription:
      'Stages a tense open-water tribute to Steven Spielberg’s Jaws while rewarding brave captains with an early speargun and valuable floating contraband.',
    loreContext:
      'Verified by players across r/GTA6 and GTAViceGuides as one of Leonida Bay’s standout cinematic maritime encounters.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Leonida Bay Jaws Smoking Boat Encounter' },
      { community: 'GTAViceGuides', label: 'Shark Attack & Free Speargun Guide' },
    ],
    tags: ['jaws', 'orca', 'shark', 'speargun', 'leonida bay', 'boat'],
  },
  {
    id: 'ee-30-w-blancos-breaking-bad',
    slug: 'w-blancos-cuban-foods-breaking-bad-nod',
    moduleId: 'easter-eggs',
    indexCode: 'EE-30',
    title: '"W. Blanco’s Cuban Foods" (Breaking Bad / Metástasis Tribute)',
    subtitle: 'Spot Rockstar’s Bilingual Walter White Storefront Pun on Ambrosia’s Main Highway',
    regionId: 'grassrivers',
    subLocation: 'Ambrosia Highway Strip (Near Lake Leonida’s Southern Sugar Belt)',
    mapPin: { x: 48, y: 60 },
    category: 'pop-culture',
    complexity: 'walk-up',
    referenceOrigin: 'Breaking Bad (Walter White) & Metástasis (Walter Blanco)',
    summary:
      'Along the rural highway running through Ambrosia sits "W. Blanco’s Cuban Foods"—a clever bilingual nod to both Breaking Bad’s Walter White and his official Latin American remake counterpart, Walter Blanco.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Drive the Main Highway Corridor Through Ambrosia',
        landmarkCue: 'Inland Sugar-Refinery Town Near Lake Leonida',
        instruction:
          'Head inland toward the rural farming and sugar-mill town of Ambrosia near Lake Leonida and follow the main Sugarland-style highway strip through town.',
      },
      {
        stepNumber: 2,
        title: 'Inspect the "W. Blanco’s Cuban Foods" Storefront Sign',
        landmarkCue: 'Roadside Restaurant Facade',
        instruction:
          'Slow down along the commercial roadside strip to spot and photograph the "W. Blanco’s Cuban Foods" restaurant signage.',
      },
    ],
    payoffDescription:
      'Delivers a sharp double-layered TV joke: "Blanco" translates to "White" in Spanish—simultaneously referencing Walter White and Colombia’s shot-for-shot Breaking Bad adaptation Metástasis, whose protagonist was literally named Walter Blanco.',
    loreContext:
      'Modeled on a real-world Clewiston, Florida highway storefront while slipping in classic Rockstar signage wordplay.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'W. Blanco’s Walter White / Metástasis Catch' },
      { community: 'Sportskeeda', label: 'Breaking Bad References in GTA 6' },
    ],
    tags: ['breaking bad', 'walter white', 'walter blanco', 'metastasis', 'ambrosia'],
  },
];
