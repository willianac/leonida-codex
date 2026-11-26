import type { CodeVaultEntry } from '../types/atlas';

export const CODES_SAFES: CodeVaultEntry[] = [
  {
    id: 'cv-01-marbelle-hotel-safe',
    slug: 'marbelle-hotel-wall-safe-955214',
    moduleId: 'codes-vaults',
    indexCode: 'CV-01',
    title: 'Marbelle Hotel Ground-Floor Safe',
    subtitle: 'Rooftop Realtor Note -> Ground-Floor Back Office Wall Safe',
    regionId: 'vice-city',
    subLocation: 'Southern Crosstown — NW 8th Street (East of Pawn & Gun)',
    mapPin: { x: 72, y: 52 },
    codeType: 'safe-6',
    codeDisplay: '955214',
    summary:
      'Hidden in the back office corner of the condemned Marbelle Hotel, this 6-digit wall safe unlocks straight away once you enter the circled realtor combination found on the roof.',
    rewardSummary: 'Cash stash + rare collectible Crowex Ambassador "Breakfast" luxury watch',
    relatedEasterEggSlug: 'haunted-marbelle-hotel-silent-hill-safe',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Weapon-wheel Flashlight recommended for the dark interior',
      specialCode: {
        label: 'Marbelle Ground-Floor 6-Digit Safe Code',
        value: '955214',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Enter Through the Marbelle Hotel Rear Alley',
        landmarkCue: 'Southern Crosstown • Near NW 8th St',
        instruction:
          'Locate the boarded-up Marbelle Hotel with the "For Sale" sign out front east of the Crosstown Pawn & Gun shop. Follow the left alley behind the building and slip inside through the unlocked back door.',
      },
      {
        stepNumber: 2,
        title: 'Find the Circled Rooftop Realtor Note (Optional Clue)',
        landmarkCue: 'Marbelle Hotel Rooftop',
        instruction:
          'To verify the clue in-world, climb to the rooftop after exploring the haunted upper corridor and inspect the Old Note with 955214 circled.',
        fieldTip:
          'You do not have to trigger the top-floor haunting first—955214 works on the ground-floor safe immediately.',
      },
      {
        stepNumber: 3,
        title: 'Dial 955214 on the Ground-Floor Back Office Safe',
        landmarkCue: 'Ground Floor • Rear Office Corner',
        instruction:
          'Head into the dim ground-floor office behind reception, interact with the wall safe in the corner, and punch in 955214 to claim the cash and Crowex Ambassador "Breakfast" watch.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Vice', label: 'Marbelle Hotel Safe Code & Watch Guide' },
      { community: 'r/GTA6', label: 'Marbelle Hotel Safe Verification' },
    ],
    tags: ['marbelle hotel', '955214', 'safe', 'watch', 'crowex', 'crosstown', 'silent hill'],
    featured: true,
  },
  {
    id: 'cv-02-pelican-valley-pc',
    slug: 'pelican-valley-outpost-terminal-cleaves',
    moduleId: 'codes-vaults',
    indexCode: 'CV-02',
    title: 'Pelican Valley Research Outpost PC Login',
    subtitle: 'Scratched Bedroom Floorboards -> Main Desk Terminal Password',
    regionId: 'grassrivers',
    subLocation: 'Pelican Valley Swamps (Gullet Marsh, Launch from Stillwater Path Dock)',
    mapPin: { x: 61, y: 71 },
    codeType: 'terminal',
    codeDisplay: 'CLEAVES',
    summary:
      'Powering up the abandoned crustacean lab in Pelican Valley lets you log into the main research desk computer using a password scratched into the bedroom floorboards.',
    rewardSummary: 'Unlocks lab journal clue ("Safe Code = Double Success") leading to safe 0072 & boathouse 0212',
    relatedEasterEggSlug: 'krakinos-giant-mutant-crab-pelican-valley',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Boat launched from Stillwater Path dock',
      specialCode: {
        label: 'Outpost Terminal Login Password',
        value: 'CLEAVES',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Flip the Exterior Power Breaker Behind the Shack',
        landmarkCue: 'Pelican Valley Outpost • Blue Crab Cages',
        instruction:
          'Take a boat from Stillwater Path dock through the alligator marshes to the Pelican Valley research shack. Walk around back beside the stacked blue crab cages and flip the power breaker.',
      },
      {
        stepNumber: 2,
        title: 'Check the Side Bedroom Floorboards for the Password',
        landmarkCue: 'Bedroom Opposite the Kitchen',
        instruction:
          'Step inside the shack and inspect the scratched wooden floorboards in the small bedroom opposite the kitchen to reveal the password CLEAVES.',
      },
      {
        stepNumber: 3,
        title: 'Log Into the Desk PC & Brace for Ambush',
        landmarkCue: 'Main Desk Terminal',
        instruction:
          'Enter CLEAVES on the powered desktop monitor to read the "Safe Code = Double Success" research note—then be ready to mash the struggle prompt when Krakinos ambushes you.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'Dexerto', label: 'Pelican Valley Outpost PC & Crab Guide' },
      { community: 'r/GTA6', label: 'CLEAVES Terminal Breakdown' },
    ],
    tags: ['cleaves', 'pelican valley', 'terminal', 'pc', 'password', 'krakinos', 'grassrivers'],
    featured: true,
  },
  {
    id: 'cv-03-pelican-valley-safe',
    slug: 'pelican-valley-shack-safe-0072',
    moduleId: 'codes-vaults',
    indexCode: 'CV-03',
    title: 'Pelican Valley Outpost Titanvault Safe',
    subtitle: 'Specimen 0036 ("Double Success") -> Main Shack 4-Digit Safe',
    regionId: 'grassrivers',
    subLocation: 'Pelican Valley Swamps — Main Research Outpost Shack',
    mapPin: { x: 62, y: 72 },
    codeType: 'safe-4',
    codeDisplay: '0072',
    summary:
      'Doubling the successful lab specimen number (0036 × 2) cracks the Titanvault safe inside the Pelican Valley shack, revealing cash and the emergency pier dock keypad code.',
    rewardSummary: '~$1,000+ cash + Emergency Pier Boathouse Keypad Note (0212)',
    relatedEasterEggSlug: 'krakinos-giant-mutant-crab-pelican-valley',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Boat to reach Pelican Valley marshes',
      specialCode: {
        label: 'Pelican Valley Shack Safe Code',
        value: '0072',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Verify Specimen 0036 in the Adjacent Lab Shed',
        landmarkCue: 'Pelican Valley Outpost • Side Lab Clipboard',
        instruction:
          'After checking the outpost PC ("Safe Code = Double Success"), inspect the clipboard inside the adjacent lab shed listing "Specimen 0036 = SUCCESS" and double it to 0072.',
      },
      {
        stepNumber: 2,
        title: 'Enter 0072 Into the Main Shack Safe',
        landmarkCue: 'Titanvault Safe • Include Both Leading Zeros',
        instruction:
          'Return to the main shack, interact with the safe, and type 0072 (including both leading zeros) to collect the cash bundle and note showing dock code 0212.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'Dexerto', label: 'Pelican Valley Safe 0072 Walkthrough' },
      { community: 'Eurogamer', label: 'Fixed Open-World Safe Codes' },
    ],
    tags: ['0072', 'pelican valley', 'safe', 'titanvault', 'krakinos', 'grassrivers'],
  },
  {
    id: 'cv-04-pelican-valley-boathouse',
    slug: 'pelican-valley-pier-boathouse-keypad-0212',
    moduleId: 'codes-vaults',
    indexCode: 'CV-04',
    title: 'Pelican Valley Pier Boathouse Keypad',
    subtitle: 'Safe Note Code -> Locked Wooden Pier Armory & $10,000 Stash',
    regionId: 'grassrivers',
    subLocation: 'Pelican Valley Swamps — Wooden Pier Boathouse',
    mapPin: { x: 63, y: 70 },
    codeType: 'keypad',
    codeDisplay: '0212',
    summary:
      'Found on the emergency dock note inside Pelican Valley safe 0072, this 4-digit pier keypad opens the boathouse holding a $10,000 cash payout and a unique custom SMG.',
    rewardSummary: '$10,000 cash + unique custom-skinned Crabshack VF5 SMG',
    relatedEasterEggSlug: 'krakinos-giant-mutant-crab-pelican-valley',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Boat & an open long-gun slot or vehicle trunk for the VF5 SMG',
      specialCode: {
        label: 'Pier Boathouse Door Keypad',
        value: '0212',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Walk Out to the Pelican Valley Wooden Pier',
        landmarkCue: 'Behind the Research Outpost Shack',
        instruction:
          'Follow the boardwalk behind the Pelican Valley shack out to the locked wooden boathouse perched over the swamp water.',
      },
      {
        stepNumber: 2,
        title: 'Punch 0212 Into the Door Keypad',
        landmarkCue: 'Include Leading Zero',
        instruction:
          'Interact with the electronic door keypad, enter 0212, and step inside to claim the $10,000 cash stack and the Crabshack VF5 submachine gun.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'Dexerto', label: 'Crabshack VF5 SMG & Boathouse 0212 Guide' },
      { community: 'r/GTA6', label: 'Pelican Valley 0212 Keypad Thread' },
    ],
    tags: ['0212', 'pelican valley', 'keypad', 'crabshack vf5', 'smg', 'cash', 'grassrivers'],
    featured: true,
  },
  {
    id: 'cv-05-dog-island-trailer-safe',
    slug: 'dog-island-trailer-safe-44017',
    moduleId: 'codes-vaults',
    indexCode: 'CV-05',
    title: 'Dog Island & Cottonmouth Trailer Safe',
    subtitle: '5-Digit Combination Hidden Inside the Island Trailer Under the Microwave',
    regionId: 'leonida-keys',
    subLocation: 'Dog Island Sanctuary (Gambit Bay / Southern Cottonmouth Edge)',
    mapPin: { x: 54, y: 82 },
    codeType: 'safe-5',
    codeDisplay: '44017',
    summary:
      'Accessible after Cool Dog chauffeurs you across Gambit Bay (or by boating directly to the sanctuary), this 5-digit trailer safe hides extra cash alongside unique wearable sunglasses.',
    rewardSummary: 'Safe cash loot (plus $1,218 loose wallet & unique sunglasses in the trailer)',
    relatedEasterEggSlug: 'cool-dog-jet-ski-and-dog-island',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Any boat to reach Gambit Bay or Dog Island',
      specialCode: {
        label: 'Dog Island Trailer 5-Digit Safe Code',
        value: '44017',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Reach Dog Island via Cool Dog or Boat',
        landmarkCue: 'Gambit Bay • Dog Island Sanctuary',
        instruction:
          'Tread water in deep Gambit Bay for ~60 seconds to ride Cool Dog’s jet ski straight to Dog Island, or pilot your own watercraft ashore.',
      },
      {
        stepNumber: 2,
        title: 'Check the Postcard Clues Inside the Trailer',
        landmarkCue: 'Trailer Wall Postcards & Kitchen Counter',
        instruction:
          'Step inside the weathered trailer on Dog Island and look beneath the microwave counter (the wall photos/postcards encode the 5-digit combination 44017).',
      },
      {
        stepNumber: 3,
        title: 'Enter 44017 & Grab the Nearby Stash',
        landmarkCue: 'Under-Counter Safe',
        instruction:
          'Dial 44017 to pop the safe, and remember to scoop the $1,218 wallet and wearable sunglasses before leaving the island.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'IGN', label: 'Dog Island & Safe 44017 Guide' },
      { community: 'GamesRadar+', label: 'Trailer Safe 44017 Location' },
    ],
    tags: ['44017', 'dog island', 'cool dog', 'safe', 'trailer', 'leonida keys'],
    featured: true,
  },
  {
    id: 'cv-06-big-pines-loop-3-keypad',
    slug: 'project-rumba-big-pines-loop-3-keypad-09-06-07',
    moduleId: 'codes-vaults',
    indexCode: 'CV-06',
    title: 'Project Rumba — Big Pines Loop 3 Reception Keypad',
    subtitle: 'Surviving Candidate Dorm Beds (06, 07, 09) -> Inner IAA Lab Code',
    regionId: 'vice-city',
    subLocation: 'Big Pines — President Russo’s Bunker #2 (IAA Mind-Conditioning Loops)',
    mapPin: { x: 75, y: 50 },
    codeType: 'keypad',
    codeDisplay: '09-06-07',
    summary:
      'During the third hallucinatory loop inside the Big Pines IAA facility, combining the three surviving candidate bunk numbers unlocks the reception door leading into the inner laboratory.',
    rewardSummary: 'Unlocks Loops 4–5 -> permanent Focus stat boost + exclusive "Brainwash" tattoo',
    relatedEasterEggSlug: 'project-rumba-iaa-mind-conditioning-loops',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      storyProgress: 'Requires clearing Russo Bunkers #1 (Sharktooth) & #2 (Big Pines)',
      specialCode: {
        label: 'Loop 3 Reception Keypad Sequence',
        value: '09-06-07',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Reach Loop 3 of the Big Pines Conditioning Sequence',
        landmarkCue: 'Big Pines Bunker #2 • Mind-Conditioning Chair',
        instruction:
          'After clearing both Russo bunkers and sitting in the Big Pines chamber chair, complete Loop 1 (alternate side door) and Loop 2 (red phone + wall clock inspection).',
      },
      {
        stepNumber: 2,
        title: 'Inspect the Dormitory Candidate Beds',
        landmarkCue: 'Beds Marked 06, 07 & 09',
        instruction:
          'Inside Loop 3’s dormitory wing, check the numbered bunks of the three surviving program subjects (06, 07, and 09) to establish the reception sequence.',
      },
      {
        stepNumber: 3,
        title: 'Enter 09-06-07 Beside President Russo at Reception',
        landmarkCue: 'Reception Keypad Right of Desk',
        instruction:
          'Return to the reception hall and enter 09-06-07 into the wall keypad to the right of President Russo to open the inner laboratory sector.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'GameSpot', label: 'Project Rumba 5-Loop Walkthrough' },
      { community: 'GTATown', label: 'Big Pines Loop 3 Keypad 09-06-07' },
    ],
    tags: ['09-06-07', 'project rumba', 'big pines', 'iaa', 'bunker', 'keypad', 'focus boost'],
    featured: true,
  },
  {
    id: 'cv-07-lifeispassingmeby-substations',
    slug: 'lpl-12-substation-switch-sequence-lifeispassingmeby',
    moduleId: 'codes-vaults',
    indexCode: 'CV-07',
    title: 'LPL 12-Substation Switch Sequence ("LIFEISPASSINGMEBY")',
    subtitle: 'Badger R&D Initialization -> 12 Blue-Letter Substations -> Reactor 2 Portal',
    regionId: 'vice-city',
    subLocation: 'Key Lento Badger R&D Tower -> 12 LPL Substations -> LPL Turtle Head Power Station',
    mapPin: { x: 68, y: 61 },
    codeType: 'sequence',
    codeDisplay: 'D, D, •, A, •, A, A, A, •, W, D, W',
    summary:
      'Flipping one exact purple-taped switch at each of 12 blue-lettered Leonida Power & Light substations in PS2 cheat-code order triggers an unknown SMS ("U-235 REACTOR2 19-06") and opens the 2002 Malibu Club portal.',
    rewardSummary: '2002 PS2 Malibu Club portal + Tommy Vercetti’s Hawaiian shirt + Western Malibu Zombie Bomber bike',
    relatedEasterEggSlug: '2002-vice-city-malibu-club-portal',
    requirements: {
      timeOfDay: 'Reactor 2 Finale: 19:00–06:00 (7 PM – 6 AM)',
      protagonist: 'Jason',
      equipment: 'Fast car or helicopter — NEVER fast travel or swap protagonists',
      storyProgress: 'Chapter 3+ recommended',
      specialCode: {
        label: '12-Substation Purple-Taped Switch Order',
        value: 'D, D, •, A, •, A, A, A, •, W, D, W',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Initialize the Sequence as Jason at Badger R&D Tower',
        landmarkCue: 'Key Lento • Upper Storage Room',
        instruction:
          'Climb Badger R&D Radio Tower in Key Lento as Jason, flip the left power lever, and press the right Koch board button until the 2002 Vice City chime plays and the TV flashes Club Malibu.',
      },
      {
        stepNumber: 2,
        title: 'Flip Substations #1–#4 (L-iF-Ei-S -> D, D, •, A)',
        landmarkCue: 'Downtown VC -> Balsero -> Key Lento -> North Vice Beach',
        instruction:
          'Travel manually (no taxis/transit) to flip ONLY the mapped purple-taped switch: #1 ("L", Downtown VC south of river) -> D; #2 ("iF", Balsero) -> D; #3 ("Ei", Key Lento) -> • (Dot); #4 ("S", northern tip of Vice Beach) -> A.',
      },
      {
        stepNumber: 3,
        title: 'Flip Substations #5–#12 (P-A-S-S-I-N-G-M -> •, A, A, A, •, W, D, W)',
        landmarkCue: 'Blue Painted Exterior Letters',
        instruction:
          'Complete the remaining eight substations in strict order: #5 ("P") -> •, #6 ("A") -> A, #7 ("S") -> A, #8 ("S") -> A, #9 ("I") -> •, #10 ("N") -> W, #11 ("G") -> D, #12 ("M") -> W.',
        fieldTip:
          'Ignore decoy switches inside each fenced cage and stay as Jason until the text message arrives.',
      },
      {
        stepNumber: 4,
        title: 'Confirm SMS & Enter Reactor 2 Between 19:00 and 06:00',
        landmarkCue: 'LPL Turtle Head Power Station (East of Hamlet)',
        instruction:
          'Verify the incoming SMS reading "U-235 REACTOR2 19-06", infiltrate LPL Turtle Head Power Station east of Hamlet at night, pull the lever beside Reactor 2, and step through the portal.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'r/GTA6', label: 'Memeio & LPL Substation Megathread' },
      { community: 'IGN', label: '2002 Malibu Club Portal Guide' },
    ],
    tags: ['lifeispassingmeby', 'substation', 'sequence', 'malibu club', 'reactor 2', 'tommy vercetti'],
    featured: true,
  },
  {
    id: 'cv-08-manifest-canyon-surveillance-phone',
    slug: 'manifest-canyon-surveillance-hut-786-555-0145',
    moduleId: 'codes-vaults',
    indexCode: 'CV-08',
    title: 'Manifest Canyon Surveillance Hut Utility Number',
    subtitle: 'Posted Warning Sign 786-555-0145 & Triggered Unknown Caller Dialogue',
    regionId: 'port-gellhorn',
    subLocation: 'Manifest Canyon Hills (South of Grayson, NE of Port Gellhorn)',
    mapPin: { x: 33, y: 36 },
    codeType: 'phone',
    codeDisplay: '786-555-0145',
    summary:
      'Posted on the fence of a floodlit cellular utility hut in Manifest Canyon; pushing past the automated warnings triggers a chilling incoming call on Jason’s smartphone revealing someone knows his military past.',
    rewardSummary: 'Hidden Chapter 1 voiced surveillance phone call detailing Jason’s classified military history',
    relatedEasterEggSlug: 'manifest-canyon-radio-tower-surveillance-call',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Jason',
      storyProgress: 'Documented during Chapter 1 free roam',
      specialCode: {
        label: 'Posted Compound Utility Number',
        value: '786-555-0145',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Floodlit Cellular Hut as Jason',
        landmarkCue: 'Manifest Canyon Hills • South of Grayson',
        instruction:
          'While playing as Jason in Chapter 1, head into the hills of Manifest Canyon northeast of Port Gellhorn until you spot a fenced red-and-white lattice tower beside a small utility hut.',
      },
      {
        stepNumber: 2,
        title: 'Read Sign 786-555-0145 & Ignore the Loudspeaker',
        landmarkCue: 'Chain-Link Perimeter Gate',
        instruction:
          'Spot the posted 786-555-0145 utility sign (GTA VI has no manual dial-pad app, so this event triggers automatically inside the compound). Push past the gate warnings and test the locked hut door.',
      },
      {
        stepNumber: 3,
        title: 'Answer the Incoming Unknown Caller',
        landmarkCue: 'Jason’s Smartphone Ring',
        instruction:
          'Remain inside the fenced compound and answer Jason’s ringing phone to hear an ominous unknown female voice recite specifics from his past.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Chapter 1 Surveillance Tower Call' },
      { community: 'GTAForums', label: '786-555-0145 Manifest Canyon Hut' },
    ],
    tags: ['786-555-0145', 'phone', 'surveillance', 'manifest canyon', 'jason', 'chapter 1'],
  },
  {
    id: 'cv-09-tenebrae-lux-bunker-cipher',
    slug: 'tenebrae-lux-6-digit-bunker-phone-cipher',
    moduleId: 'codes-vaults',
    indexCode: 'CV-09',
    title: 'Tenebrae Lux — 6-Digit Bunker Phone Cipher',
    subtitle: 'Chronological Oct 11–30 Room Anomalies + # Key (Use Built-In Calculator)',
    regionId: 'leonida-keys',
    subLocation: 'Key Lento — Jason’s Safehouse Living Room (JoySystem Console)',
    mapPin: { x: 58, y: 87 },
    codeType: 'dynamic-cipher',
    codeDisplay: '[Oct11][Oct14][Oct20][Oct23][Oct27][Oct30]#',
    isSessionRandomized: true,
    summary:
      'Every playthrough of Jason’s playable retro horror game Tenebrae Lux generates a unique 6-digit bunker phone code from six October looping-room anomalies. Sort strictly by calendar date and finish with #.',
    rewardSummary: 'Unlocks Tenebrae Lux Parts 3 & 4 (Bridge Poem & White Doors Lighthouse Finale)',
    relatedEasterEggSlug: 'tenebrae-lux-playable-horror-console-puzzle',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      storyProgress: 'JoySystem unlocks during/after mission "Feng Shui" with Cal',
      specialCode: {
        label: 'Chronological Formula (+ # at end)',
        value: '[Oct11 Photo][Oct14 Tape][Oct20 Roman][Oct23 Rings][Oct27 Vinyl][Oct30 Greek]#',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Loop the Bunker Room & Log All Six October Dates',
        landmarkCue: 'Wall Calendar: Oct 11, 14, 20, 23, 27, 30',
        instruction:
          'Exit the bunker phone room and climb back upstairs repeatedly. Each loop shifts the wall calendar date and alters one object from baseline—record the date paired with its anomaly.',
      },
      {
        stepNumber: 2,
        title: 'Convert Each Anomaly to a Single Digit (Use Calculator Above)',
        landmarkCue: 'Interactive Tenebrae Lux Calculator',
        instruction:
          'Enter your six session values into the Tenebrae Lux Calculator at the top of this page: Oct 11 total people in fallen photo; Oct 14 altered tape number (digital root); Oct 20 Roman numeral (integer -> digital root); Oct 23 phone ring count; Oct 27 vinyl price (digital root); Oct 30 engine Greek letter (α=1, β=2, γ=3, δ=4, ε=5).',
        fieldTip:
          'Always order the six digits chronologically from Oct 11 to Oct 30—not the order you happened to encounter them.',
      },
      {
        stepNumber: 3,
        title: 'Dial Your 6 Digits Followed by # on the Bunker Phone',
        landmarkCue: 'Wall Phone Keypad',
        instruction:
          'Approach the bunker wall phone, punch in your computed 6-digit sequence, and press # to accept the code and unlock the ruins bridge.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'Kotaku', label: 'Tenebrae Lux Complete Puzzle Solver' },
      { community: 'GameSpot', label: 'How to Calculate Tenebrae Lux Bunker Code' },
    ],
    tags: ['tenebrae lux', 'cipher', 'bunker', 'joysystem', 'calculator', 'randomized', 'leonida keys'],
    featured: true,
  },
  {
    id: 'cv-10-south-point-alien-bunker',
    slug: 'south-point-airfield-alien-bunker-keypad',
    moduleId: 'codes-vaults',
    indexCode: 'CV-10',
    title: 'South Point Airfield Alien Bunker Keypad',
    subtitle: 'Count 4 Vertical Bar Groups in the Alien Dream Console (Use Bar Helper)',
    regionId: 'vice-city',
    subLocation: 'Hamlet (South Vice-Dale) — South Point Airfield Fenced Radio Tower Roof Hatch',
    mapPin: { x: 69, y: 63 },
    codeType: 'dynamic-cipher',
    codeDisplay: '4-Bar Dream Code (e.g. 2134 / 2314 / 2341)',
    isSessionRandomized: true,
    summary:
      'Generated uniquely during your white-room alien dream sequence after the 2:00 AM Kelly County UFO abduction, this 4-digit code unlocks the hidden underground laboratory beneath South Point Airfield.',
    rewardSummary: 'Permanent upgrades to Health, Stamina & Focus stats + Alien Specimen encounter',
    relatedEasterEggSlug: 'ufo-abduction-alien-dream-secret-bunker',
    requirements: {
      timeOfDay: 'Abduction: after 02:00 AM • Bunker Entry: Anytime',
      protagonist: 'Solo Only (Lucia or Jason)',
      storyProgress: 'Chapter 2 onward (after completing Chapter 1)',
      specialCode: {
        label: 'Commonly Rolled Community Codes',
        value: '2134 / 2314 / 2341',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Trigger the UFO Abduction & White-Room Alien Dream',
        landmarkCue: 'NW of Starlet Motel (02:00+) -> Safehouse Bed',
        instruction:
          'Get abducted solo past 2:00 AM northwest of Starlet Motel, then sleep repeatedly in any safehouse bed as that protagonist until you wake inside the white alien facility.',
      },
      {
        stepNumber: 2,
        title: 'Count the Four Bar Groups Above the Dream Keypad',
        landmarkCue: 'Solar-System Console Room',
        instruction:
          'Navigate around the alien eggs to reach the solar-system console and count the vertical bars in each of the four left-to-right clusters. Use the South Point 4-Bar Helper at the top of this page to lock in and copy your 4-digit PIN.',
        fieldTip:
          'If you missed your dream tally, players most commonly roll 2134, 2314, or 2341.',
      },
      {
        stepNumber: 3,
        title: 'Drop Through the South Point Airfield Roof Hatch',
        landmarkCue: 'Hamlet • Airfield Radio Tower Roof',
        instruction:
          'Vault the left fence of the South Point Airfield radio tower, climb the ladder onto the adjacent roof, drop into the open hatch, and type your 4-digit code into the basement keypad.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'r/GTA6', label: 'South Point Bunker Keypad Solver' },
      { community: 'IGN', label: 'Alien Dream Bar Code & Bunker Guide' },
    ],
    tags: ['alien', 'ufo', 'south point', 'bunker', 'keypad', '2134', '2314', '2341', 'stat boost'],
    featured: true,
  },
  {
    id: 'cv-11-vc-heights-laptop-password',
    slug: 'vc-heights-safehouse-laptop-muffinsqueen15',
    moduleId: 'codes-vaults',
    indexCode: 'CV-11',
    title: 'VC Heights Safehouse Bedroom Laptop',
    subtitle: 'Dog Shrine ("Muffins") + Crown Notepad ("Queen") + Class of ’15',
    regionId: 'vice-city',
    subLocation: 'VC Heights (Vice City) — Chapter 3 Safehouse Bedroom',
    mapPin: { x: 74, y: 47 },
    codeType: 'terminal',
    codeDisplay: 'MuffinsQueen15',
    summary:
      'A missable Chapter 3 bedroom laptop puzzle inside Boobie’s VC Heights apartment. Piecing together three apartment clues unlocks WhatUp messages containing the keypad code to a free La Perle garage.',
    rewardSummary: 'Reveals garage keypad code 92665 -> Vanessa’s custom Pink Pfister Growler + permanent garage',
    requirements: {
      timeOfDay: 'Anytime during Chapter 3',
      protagonist: 'Either',
      storyProgress: 'MISSABLE: Complete before finishing Chapter 3 / starting the Cartel Heist',
      specialCode: {
        label: 'Bedroom Laptop Password (No Spaces)',
        value: 'MuffinsQueen15',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Inspect the Hallway Dog Shrine & Bedroom Notepad',
        landmarkCue: 'VC Heights Apartment Entrance & Bedside Table',
        instruction:
          'Check the framed dog photo shrine near the entryway/kitchen for the name "Muffins", then inspect both sides of the bedroom bedside notepad showing a crowned dog ("Queen") and "Class of ’15".',
      },
      {
        stepNumber: 2,
        title: 'Enter MuffinsQueen15 on the Bedroom Laptop',
        landmarkCue: 'Open Laptop on Desk',
        instruction:
          'Interact with the locked bedroom laptop and enter the three password prompts in sequence: MUFFINS, QUEEN, 15 (MuffinsQueen15).',
        fieldTip:
          'Do not postpone this past Chapter 3—once story progression locks out the apartment, you lose access to the laptop.',
      },
      {
        stepNumber: 3,
        title: 'Read the WhatUp Thread for Garage Code 92665',
        landmarkCue: 'Laptop Messaging App',
        instruction:
          'Open the WhatUp messages on the unlocked laptop to reveal the La Perle garage directions and keypad code 92665 (see CV-12).',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'GamesRadar+', label: 'VC Heights Laptop MuffinsQueen15 Guide' },
      { community: 'Shacknews', label: 'Chapter 3 Safehouse Laptop Solution' },
    ],
    tags: ['muffinsqueen15', 'laptop', 'terminal', 'chapter 3', 'missable', 'vanessa', 'vc heights'],
    featured: true,
  },
  {
    id: 'cv-12-la-perle-vanessa-garage',
    slug: 'la-perle-vanessa-growler-garage-92665',
    moduleId: 'codes-vaults',
    indexCode: 'CV-12',
    title: 'La Perle Unmarked Garage (Vanessa’s Growler)',
    subtitle: 'Del Rio Blvd Shutter Keypad Unlocked via VC Heights Laptop Intel',
    regionId: 'vice-city',
    subLocation: 'Southern La Perle — Del Rio Boulevard (Near Auntie’s Place & Tattoo Parlor)',
    mapPin: { x: 70, y: 54 },
    codeType: 'keypad',
    codeDisplay: '92665',
    summary:
      'Following the WhatUp message from the VC Heights laptop (CV-11) leads to a shuttered garage in southern La Perle hiding a custom pink Pfister Growler and a permanent extra safehouse garage.',
    rewardSummary: 'Free custom Pink Pfister Growler ("Vanessa’s Growler") + permanent vehicle storage & weapon locker',
    requirements: {
      timeOfDay: 'Anytime during Chapter 3',
      protagonist: 'Either',
      storyProgress: 'Unlock via Chapter 3 VC Heights laptop (CV-11) before finishing Ch. 3',
      specialCode: {
        label: 'La Perle Garage Shutter Keypad',
        value: '92665',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Unmarked Garage on Del Rio Boulevard',
        landmarkCue: 'Southern La Perle • Beside Auntie’s Place & Tattoo Shop',
        instruction:
          'After unlocking the VC Heights laptop (CV-11), drive to southern La Perle along Del Rio Boulevard near Auntie’s Place / Aunt Zola’s Soul Food and look for the unmarked shuttered garage beside the tattoo parlor.',
      },
      {
        stepNumber: 2,
        title: 'Enter 92665 on the Exterior Keypad',
        landmarkCue: 'Garage Bay Keypad',
        instruction:
          'Input 92665 to raise the shutter, claim Vanessa’s custom pink Pfister Growler, and permanently unlock the garage and weapon locker for future storage.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'GameSpot', label: 'Vanessa’s Pink Growler & 92665 Garage Guide' },
      { community: 'IGN', label: 'La Perle Secret Garage Code 92665' },
    ],
    tags: ['92665', 'vanessa', 'growler', 'pfister', 'garage', 'keypad', 'la perle', 'missable'],
    featured: true,
  },
  {
    id: 'cv-13-key-lento-party-house-garage',
    slug: 'key-lento-party-house-garage-092319',
    moduleId: 'codes-vaults',
    indexCode: 'CV-13',
    title: 'Key Lento Party House Garage Keypad',
    subtitle: '6-Digit Keypad Unlocking the Hidden Invetero Spiderweb Coquette',
    regionId: 'leonida-keys',
    subLocation: 'Southeast Key Lento — Waterfront Party House Garage',
    mapPin: { x: 67, y: 83 },
    codeType: 'keypad',
    codeDisplay: '092319',
    summary:
      'Tucked away at a party house in southeast Key Lento, this 6-digit residential garage keypad hides a custom-painted Invetero Spiderweb Coquette sports car.',
    rewardSummary: 'Free hidden Invetero Spiderweb Coquette sports car',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Party House 6-Digit Garage Keypad',
        value: '092319',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Drive to the Southeast Key Lento Party House',
        landmarkCue: 'Southeast Key Lento Residential Strip',
        instruction:
          'Explore the southeastern residential stretch of Key Lento to locate the lively party house with a keypad-secured private garage.',
      },
      {
        stepNumber: 2,
        title: 'Punch In 092319 (Keep Leading Zero)',
        landmarkCue: 'Garage Entry Keypad',
        instruction:
          'Enter 092319 on the keypad—making sure to include the leading zero—to open the bay and drive off in the Invetero Spiderweb Coquette.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'MetaForge', label: 'Key Lento Party House 092319 Guide' },
      { community: 'EScoreNews', label: 'Invetero Spiderweb Coquette Unlock' },
    ],
    tags: ['092319', 'coquette', 'spiderweb', 'garage', 'keypad', 'key lento', 'vehicle'],
    featured: true,
  },
  {
    id: 'cv-14-red-apple-orchard-garage',
    slug: 'red-apple-orchard-garage-keypad-360782',
    moduleId: 'codes-vaults',
    indexCode: 'CV-14',
    title: 'Red Apple Orchard Garage Keypad',
    subtitle: 'Barn Loft ManlyGaze Clue (Issue 36, 07/1982) -> Declasse Applesauce Bobcat',
    regionId: 'port-gellhorn',
    subLocation: 'Kelly County — Farmer Scrumpy’s Red Apple Orchard (West of Manifest Canyon)',
    mapPin: { x: 21, y: 35 },
    codeType: 'keypad',
    codeDisplay: '360782',
    summary:
      'At Farmer Scrumpy’s orchard west of Manifest Canyon, reading a vintage magazine tucked in the barn loft reveals the 6-digit garage code guarding a one-of-a-kind pickup truck.',
    rewardSummary: 'Free custom Declasse Applesauce Bobcat pickup truck',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Orchard Garage 6-Digit Keypad',
        value: '360782',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Visit Farmer Scrumpy’s Red Apple Orchard',
        landmarkCue: 'West of Manifest Canyon • Kelly County',
        instruction:
          'Head west of Manifest Canyon into rural Kelly County and pull into the Red Apple Orchard farmstead.',
      },
      {
        stepNumber: 2,
        title: 'Inspect the Barn Loft Magazine Clue (Optional)',
        landmarkCue: 'ManlyGaze Issue 36 • July 1982',
        instruction:
          'Climb into the barn loft to spot the vintage ManlyGaze magazine listing Issue 36, Month 07, Year 1982—yielding code 360782.',
      },
      {
        stepNumber: 3,
        title: 'Unlock the Farm Garage With 360782',
        landmarkCue: 'Orchard Garage Keypad',
        instruction:
          'Enter 360782 into the locked farm garage keypad to open the bay and claim the Declasse Applesauce Bobcat.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'GTABase', label: 'Red Apple Orchard 360782 Vehicle Guide' },
      { community: 'r/GTA6', label: 'Declasse Applesauce Bobcat Discovery' },
    ],
    tags: ['360782', 'red apple orchard', 'applesauce bobcat', 'vehicle', 'keypad', 'kelly county'],
  },
  {
    id: 'cv-15-mount-kalaga-firewatch-shed',
    slug: 'mount-kalaga-firewatch-shed-keypad-69185',
    moduleId: 'codes-vaults',
    indexCode: 'CV-15',
    title: 'Mount Kalaga Firewatch Shed Keypad',
    subtitle: 'Switchback Tower & Stone Hills Logbooks -> Locked Park Shed',
    regionId: 'mount-kalaga',
    subLocation: 'Mount Kalaga National Park — Locked Shed Below Firewatch Tower',
    mapPin: { x: 46, y: 17 },
    codeType: 'keypad',
    codeDisplay: '69185',
    summary:
      'Tied to the "Gliding Man" wilderness mystery logbooks scattered around Switchback Tower and Stone Hills, this 5-digit keypad opens the locked supply shed beneath Mount Kalaga’s firewatch tower.',
    rewardSummary: 'Hidden ranger supply stash + Gliding Man mystery progression clues',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Off-road bike or helicopter helpful on steep mountain trails',
      specialCode: {
        label: 'Firewatch Shed 5-Digit Keypad',
        value: '69185',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Mount Kalaga Firewatch Tower',
        landmarkCue: 'Mount Kalaga National Park • Lummox County',
        instruction:
          'Follow the highland forestry trails into Mount Kalaga National Park until you reach the wooden firewatch tower and its locked utility shed below.',
      },
      {
        stepNumber: 2,
        title: 'Read the Gliding Man Logbooks (Optional Lore)',
        landmarkCue: 'Switchback Tower & Stone Hills Shed',
        instruction:
          'For full lore context, read the ranger logbooks at Switchback Tower and the Stone Hills shed that piece together the 5-digit PIN 69185.',
      },
      {
        stepNumber: 3,
        title: 'Enter 69185 on the Firewatch Shed Keypad',
        landmarkCue: 'Shed Door Keypad',
        instruction:
          'Input 69185 into the door keypad beneath the tower to unlock the shed and search its hidden supplies.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'GTABoom', label: 'Mount Kalaga Firewatch Shed 69185 Guide' },
      { community: 'Radio Times', label: 'Fixed Open-World Keypad Codes' },
    ],
    tags: ['69185', 'mount kalaga', 'firewatch', 'gliding man', 'keypad', 'lummox'],
  },
  {
    id: 'cv-16-moonstone-boutique-lab',
    slug: 'moonstone-boutique-acid-lab-door-0420',
    moduleId: 'codes-vaults',
    indexCode: 'CV-16',
    title: 'Moonstone Boutique Hidden Lab Door',
    subtitle: 'Chapter 1 "Lab Fees" Back-Room Keypad (Leading Zero Required)',
    regionId: 'leonida-keys',
    subLocation: 'Key Lento — Moonstone Boutique Back Room',
    mapPin: { x: 65, y: 82 },
    codeType: 'keypad',
    codeDisplay: '0420',
    summary:
      'During Brian Heder’s Chapter 1 rent-collection mission "Lab Fees", the Moonstone Boutique clerk sends Jason to the secret back-room acid lab secured by keypad code 0420.',
    rewardSummary: 'Access to the hidden back-room acid lab to collect Brian’s product during "Lab Fees"',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Jason',
      storyProgress: 'Chapter 1 story mission "Lab Fees"',
      specialCode: {
        label: 'Moonstone Boutique Lab Keypad',
        value: '0420',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Speak With the Moonstone Boutique Clerk',
        landmarkCue: 'Mission: "Lab Fees" • Key Lento',
        instruction:
          'Head to Moonstone Boutique while collecting rent for Brian Heder. When the clerk cannot pay in cash, follow directions to the locked door behind the counter.',
      },
      {
        stepNumber: 2,
        title: 'Enter 0420 (Including the Leading Zero)',
        landmarkCue: 'Back-Room Door Keypad',
        instruction:
          'Punch 0420 into the keypad—make sure to type the leading zero or the lock will reject the code—then bag the product inside.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Eurogamer', label: 'Lab Fees Moonstone Boutique Code 0420' },
      { community: 'Space4Games', label: 'Story Mission Keypads Guide' },
    ],
    tags: ['0420', 'moonstone boutique', 'lab fees', 'keypad', 'chapter 1', 'key lento'],
  },
  {
    id: 'cv-17-brians-lockup-door',
    slug: 'brians-storage-lockup-door-7700',
    moduleId: 'codes-vaults',
    indexCode: 'CV-17',
    title: 'Brian Heder’s Storage Lockup Keypad',
    subtitle: 'Chapter 1 "Lab Fees" Drop-Off Facility Door Code',
    regionId: 'leonida-keys',
    subLocation: 'Leonida Keys (Isla Tropical Corridor) — Brian’s Secure Lockup',
    mapPin: { x: 62, y: 84 },
    codeType: 'keypad',
    codeDisplay: '7700',
    summary:
      'Given by Brian Heder over the phone after clearing Moonstone Boutique in "Lab Fees", this 4-digit keypad opens his secure Keys storage lockup.',
    rewardSummary: 'Opens Brian’s secure drop-off lockup to stash the duffel bag and complete "Lab Fees"',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Jason',
      storyProgress: 'Chapter 1 story mission "Lab Fees"',
      specialCode: {
        label: 'Brian’s Storage Lockup Keypad',
        value: '7700',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Call Brian & Drive to the Storage Lockup',
        landmarkCue: 'Isla Tropical Area • Leonida Keys',
        instruction:
          'After packing the product from Moonstone Boutique, take Brian’s call and haul the duffel bag to his marked storage lockup.',
      },
      {
        stepNumber: 2,
        title: 'Type 7700 Into the Lockup Keypad',
        landmarkCue: 'Storage Unit Entry Pad',
        instruction:
          'Enter 7700 on the keypad beside the steel door, walk inside, and drop the duffel bag at the marker.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'IGN', label: 'Lab Fees Mission Walkthrough (7700)' },
      { community: 'GamesRadar+', label: 'Brian’s Lockup Keypad Code' },
    ],
    tags: ['7700', 'brian heder', 'lockup', 'lab fees', 'keypad', 'chapter 1', 'leonida keys'],
  },
  {
    id: 'cv-18-brooks-boatworks-safe',
    slug: 'brooks-boatworks-kolt-safe-6823',
    moduleId: 'codes-vaults',
    indexCode: 'CV-18',
    title: 'Brooks Boatworks Hideout Safe',
    subtitle: 'Kolt & Associates HQ Safe + Upstairs Master Wall Map for Port Gellhorn',
    regionId: 'port-gellhorn',
    subLocation: 'Northern Port Gellhorn — Brooks Boatworks (Kolt & Associates)',
    mapPin: { x: 25, y: 47 },
    codeType: 'safe-4',
    codeDisplay: '6823',
    summary:
      'One of three linked Kolt & Associates hideout safes in Port Gellhorn. Inspecting the upstairs office wall map here also reveals the combinations for Kingpin Bowling (0300) and La Cascara Motel (6969).',
    rewardSummary: 'Kolt & Associates hideout cash stash + master wall map listing all 3 Port Gellhorn safe codes',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Silenced weapon recommended to clear gang guards',
      storyProgress: 'Available from Chapter 2 onward',
      specialCode: {
        label: 'Brooks Boatworks Safe Code',
        value: '6823',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Clear the Kolt & Associates Guards at Brooks Boatworks',
        landmarkCue: 'Northern Port Gellhorn Waterfront',
        instruction:
          'Infiltrate the Brooks Boatworks yard in northern Port Gellhorn and neutralize the Kolt & Associates crew guarding the main workshop.',
      },
      {
        stepNumber: 2,
        title: 'Check the Upstairs Master Wall Map & Crack Safe 6823',
        landmarkCue: 'Upstairs Office',
        instruction:
          'Head up to the office to photograph the master wall map (listing 6823, 0300, and 6969), then punch 6823 into the Brooks Boatworks safe to claim its cash.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Vice', label: 'Port Gellhorn Kolt & Associates Safe Codes' },
      { community: 'Space4Games', label: 'Brooks Boatworks 6823 Guide' },
    ],
    tags: ['6823', 'brooks boatworks', 'kolt', 'safe', 'port gellhorn', 'gang hideout'],
  },
  {
    id: 'cv-19-kingpin-bowling-safe',
    slug: 'kingpin-bowling-office-safe-0300',
    moduleId: 'codes-vaults',
    indexCode: 'CV-19',
    title: 'Kingpin Bowling Office Safe',
    subtitle: 'Kolt & Associates Southern Port Gellhorn Hideout (Leading Zero)',
    regionId: 'port-gellhorn',
    subLocation: 'Southern Port Gellhorn — Kingpin Bowling Back Office',
    mapPin: { x: 24, y: 56 },
    codeType: 'safe-4',
    codeDisplay: '0300',
    summary:
      'A classic "perfect game" bowling combination (0300) guarding Kolt & Associates’ back-office safe at Kingpin Bowling in southern Port Gellhorn.',
    rewardSummary: 'Hideout cash payout & illegal operation loot',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      storyProgress: 'Available from Chapter 2 onward',
      specialCode: {
        label: 'Kingpin Bowling Safe Code',
        value: '0300',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Locate Kingpin Bowling in Southern Port Gellhorn',
        landmarkCue: 'Kolt & Associates Operation',
        instruction:
          'Head to the Kingpin Bowling alley in southern Port Gellhorn and clear the gang defenders around the office wing.',
      },
      {
        stepNumber: 2,
        title: 'Dial 0300 Into the Office Safe',
        landmarkCue: 'Back Office • Include Leading Zero',
        instruction:
          'Enter 0300 into the office safe keypad (leading zero required) to collect the gang stash.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Space4Games', label: 'Kingpin Bowling Safe 0300 Guide' },
      { community: 'Sortiraparis', label: 'Port Gellhorn Fixed Safe Codes' },
    ],
    tags: ['0300', 'kingpin bowling', 'kolt', 'safe', 'port gellhorn', 'gang hideout'],
  },
  {
    id: 'cv-20-la-cascara-motel-safe',
    slug: 'la-cascara-motel-safe-6969',
    moduleId: 'codes-vaults',
    indexCode: 'CV-20',
    title: 'La Cascara Motel Hideout Safe',
    subtitle: 'Kolt & Associates Western Port Gellhorn Safehouse Combination',
    regionId: 'port-gellhorn',
    subLocation: 'Western Port Gellhorn — La Cascara Motel',
    mapPin: { x: 18, y: 50 },
    codeType: 'safe-4',
    codeDisplay: '6969',
    summary:
      'The third Kolt & Associates combination noted on the Brooks Boatworks wall map opens the gang safe tucked inside La Cascara Motel on Port Gellhorn’s west side.',
    rewardSummary: 'Hideout cash stash & valuables',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      storyProgress: 'Available from Chapter 2 onward',
      specialCode: {
        label: 'La Cascara Motel Safe Code',
        value: '6969',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Clear the Kolt Crew at La Cascara Motel',
        landmarkCue: 'Western Port Gellhorn',
        instruction:
          'Approach La Cascara Motel on the western edge of Port Gellhorn and neutralize the Kolt & Associates guards holding the courtyard and rooms.',
      },
      {
        stepNumber: 2,
        title: 'Unlock the Motel Hideout Safe With 6969',
        landmarkCue: 'Gang Room Safe',
        instruction:
          'Locate the safe inside the gang’s operational room and input 6969 to empty the stash.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Space4Games', label: 'La Cascara Motel Safe 6969 Guide' },
      { community: 'Vice', label: 'Port Gellhorn Hideout Combinations' },
    ],
    tags: ['6969', 'la cascara', 'motel', 'kolt', 'safe', 'port gellhorn', 'gang hideout'],
  },
  {
    id: 'cv-21-janjaks-garage-safe',
    slug: 'janjaks-garage-office-safe-4444',
    moduleId: 'codes-vaults',
    indexCode: 'CV-21',
    title: 'Janjak’s Garage Office Safe',
    subtitle: 'Fridge Sticky Note & Pink Gin Tulip Plate -> San4San Operation Safe',
    regionId: 'vice-city',
    subLocation: 'La Perle (Vice City) — Janjak’s Garage (San4San Operation)',
    mapPin: { x: 71, y: 55 },
    codeType: 'safe-4',
    codeDisplay: '4444',
    summary:
      'Clued by both a sticky note on the breakroom fridge and the front plate of the pink Declasse Tulip parked inside, 4444 cracks the San4San office safe at Janjak’s Garage.',
    rewardSummary: 'San4San weed operation cash payout (plus pink Declasse Pink Gin Tulip parked inside)',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Janjak’s Garage Safe Code',
        value: '4444',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Infiltrate Janjak’s Garage in La Perle',
        landmarkCue: 'San4San Gang Turf • La Perle',
        instruction:
          'Head to Janjak’s Garage in La Perle and clear out the San4San crew running the backroom grow operation.',
      },
      {
        stepNumber: 2,
        title: 'Spot the Fridge Sticky Note & Crack Safe 4444',
        landmarkCue: 'Office Safe Beside Break Area',
        instruction:
          'Verify 4444 on the fridge note (or the pink Tulip’s license plate), step into the garage office, and enter 4444 on the safe.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'MetaForge', label: 'Janjak’s Garage 4444 Safe Guide' },
      { community: 'Beebom', label: 'San4San Garage Safe & Tulip Location' },
    ],
    tags: ['4444', 'janjaks garage', 'san4san', 'la perle', 'safe', 'vice city'],
  },
  {
    id: 'cv-22-drip-drops-sneaker-safe',
    slug: 'drip-drops-illegal-sneaker-safe-4124',
    moduleId: 'codes-vaults',
    indexCode: 'CV-22',
    title: 'Drip Drops Illegal Sneaker Trade Safe',
    subtitle: 'San4San Backroom Safe in La Perle',
    regionId: 'vice-city',
    subLocation: 'La Perle (Vice City) — Drip Drops Sneaker Hideout',
    mapPin: { x: 73, y: 53 },
    codeType: 'safe-4',
    codeDisplay: '4124',
    summary:
      'Securing San4San’s counterfeit sneaker warehouse in La Perle lets you crack their backroom office safe with static code 4124.',
    rewardSummary: 'Illegal sneaker operation cash stash',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Drip Drops Safe Code',
        value: '4124',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Hit the San4San Drip Drops Hideout in La Perle',
        landmarkCue: 'La Perle Commercial Block',
        instruction:
          'Locate the Drip Drops illegal sneaker operation in La Perle and clear out the San4San lookouts.',
      },
      {
        stepNumber: 2,
        title: 'Enter 4124 on the Backroom Safe',
        landmarkCue: 'Stockroom Office Safe',
        instruction:
          'Find the safe nestled behind the sneaker stockroom and enter 4124 to collect the cash.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Vice', label: 'Drip Drops 4124 Safe Location' },
      { community: 'Space4Games', label: 'San4San Hideout Safe Codes' },
    ],
    tags: ['4124', 'drip drops', 'sneaker', 'san4san', 'la perle', 'safe', 'vice city'],
  },
  {
    id: 'cv-23-casa-guardia-safe',
    slug: 'casa-guardia-little-cuba-safe-1965',
    moduleId: 'codes-vaults',
    indexCode: 'CV-23',
    title: 'Casa Guardia Hideout Safe',
    subtitle: 'Guardia Brothers Little Cuba Compound Safe',
    regionId: 'vice-city',
    subLocation: 'Little Cuba (Vice City) — Casa Guardia Compound',
    mapPin: { x: 66, y: 53 },
    codeType: 'safe-4',
    codeDisplay: '1965',
    summary:
      'Nestled inside the Guardia Brothers’ Little Cuba stronghold, Casa Guardia’s compound safe opens immediately with fixed year code 1965.',
    rewardSummary: 'Guardia Brothers stronghold cash stash',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Body armor & rifle recommended for heavy gang resistance',
      specialCode: {
        label: 'Casa Guardia Safe Code',
        value: '1965',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Breach the Casa Guardia Stronghold in Little Cuba',
        landmarkCue: 'Little Cuba • Guardia Brothers Turf',
        instruction:
          'Approach Casa Guardia in Little Cuba and clear the Guardia Brothers enforcers patrolling the courtyard and interior.',
      },
      {
        stepNumber: 2,
        title: 'Open the Compound Safe With 1965',
        landmarkCue: 'Main Office Safe',
        instruction:
          'Locate the compound safe inside the main office and enter 1965 to scoop the cash.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'GTABoom', label: 'Casa Guardia Safe Code 1965' },
      { community: 'Space4Games', label: 'Guardia Brothers Hideout Codes' },
    ],
    tags: ['1965', 'casa guardia', 'guardia brothers', 'little cuba', 'safe', 'vice city'],
  },
  {
    id: 'cv-24-saber-shipping-facility-safe',
    slug: 'saber-shipping-facility-balsero-safe-1122',
    moduleId: 'codes-vaults',
    indexCode: 'CV-24',
    title: 'Saber Shipping Facility Safe (Balsero)',
    subtitle: 'Guardia Brothers Balsero Freight Warehouse Safe',
    regionId: 'vice-city',
    subLocation: 'Balsero (Vice City) — Saber Shipping Facility',
    mapPin: { x: 65, y: 58 },
    codeType: 'safe-4',
    codeDisplay: '1122',
    summary:
      'Operated by the Guardia Brothers out of Balsero’s industrial district, the Saber Shipping Facility office safe opens with clean 4-digit code 1122.',
    rewardSummary: 'Industrial smuggling operation cash stash',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Saber Shipping Facility Safe Code',
        value: '1122',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Infiltrate Saber Shipping Facility in Balsero',
        landmarkCue: 'Balsero Industrial Corridor',
        instruction:
          'Head to the Saber Shipping Facility warehouse in Balsero and eliminate the Guardia Brothers guards.',
      },
      {
        stepNumber: 2,
        title: 'Punch 1122 Into the Freight Office Safe',
        landmarkCue: 'Warehouse Office',
        instruction:
          'Enter the warehouse dispatch office and dial 1122 into the safe for the smuggling payout.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Vice', label: 'Saber Shipping Facility 1122 Guide' },
      { community: 'Space4Games', label: 'Balsero Safe Codes' },
    ],
    tags: ['1122', 'saber shipping', 'balsero', 'guardia brothers', 'safe', 'vice city'],
  },
  {
    id: 'cv-25-saber-shipping-yard-safe',
    slug: 'saber-shipping-yard-little-cuba-safe-8046',
    moduleId: 'codes-vaults',
    indexCode: 'CV-25',
    title: 'Saber Shipping Yard Safe (Little Cuba)',
    subtitle: 'Guardia Brothers Container Yard Office Safe',
    regionId: 'vice-city',
    subLocation: 'Little Cuba (Vice City) — Saber Shipping Yard',
    mapPin: { x: 64, y: 55 },
    codeType: 'safe-4',
    codeDisplay: '8046',
    summary:
      'Separate from the Balsero warehouse (1122), the Guardia Brothers’ Little Cuba container yard office safe uses static combination 8046.',
    rewardSummary: 'Container yard operation cash stash',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Saber Shipping Yard Safe Code',
        value: '8046',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Clear the Saber Shipping Container Yard',
        landmarkCue: 'Little Cuba Freight Yard',
        instruction:
          'Sweep through the shipping containers at the Saber Shipping Yard in Little Cuba to clear the Guardia Brothers crew.',
      },
      {
        stepNumber: 2,
        title: 'Crack the Yard Office Safe With 8046',
        landmarkCue: 'Yard Foreman Office',
        instruction:
          'Step into the foreman’s office and type 8046 on the safe keypad to collect the stash.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Vice', label: 'Saber Shipping Yard 8046 Guide' },
      { community: 'MetaForge', label: 'Little Cuba Safe Combinations' },
    ],
    tags: ['8046', 'saber shipping', 'little cuba', 'guardia brothers', 'safe', 'vice city'],
  },
  {
    id: 'cv-26-nova-auto-junkyard-safe',
    slug: 'nova-auto-junkyard-hamlet-safe-7777',
    moduleId: 'codes-vaults',
    indexCode: 'CV-26',
    title: 'Nova Auto Junkyard Office Safe',
    subtitle: 'Lowrider Plate Clue -> M7 (Marabunta Grande) Hamlet Operation Safe',
    regionId: 'vice-city',
    subLocation: 'Hamlet (South Vice-Dale) — Nova Auto Junkyard',
    mapPin: { x: 67, y: 60 },
    codeType: 'safe-4',
    codeDisplay: '7777',
    summary:
      'Matching a custom lowrider license plate parked inside the scrapyard, 7777 pops the M7 / Marabunta Grande garage office safe at Nova Auto Junkyard in Hamlet.',
    rewardSummary: 'M7 chop-shop operation cash stash',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Nova Auto Junkyard Safe Code',
        value: '7777',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Raid Nova Auto Junkyard in Hamlet',
        landmarkCue: 'South Vice-Dale • M7 Scrapyard',
        instruction:
          'Drive to Nova Auto Junkyard in Hamlet and clear the M7 / Marabunta Grande mechanics guarding the chop-shop bays.',
      },
      {
        stepNumber: 2,
        title: 'Dial 7777 Into the Garage Office Safe',
        landmarkCue: 'Main Bay Office',
        instruction:
          'Enter the junkyard office (the clue 7777 also appears on a parked lowrider plate) and punch 7777 into the safe.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Eurogamer', label: 'Nova Auto Junkyard 7777 Safe Guide' },
      { community: 'EScoreNews', label: 'Hamlet Gang Hideout Codes' },
    ],
    tags: ['7777', 'nova auto', 'junkyard', 'hamlet', 'm7', 'safe', 'vice city'],
  },
  {
    id: 'cv-27-sunrise-rv-park-safe',
    slug: 'sunrise-rv-park-dockside-safe-6769',
    moduleId: 'codes-vaults',
    indexCode: 'CV-27',
    title: 'Sunrise RV Park Dockside Safe',
    subtitle: 'Kingfishers Gang Cottonmouth Bay Warehouse Safe',
    regionId: 'grassrivers',
    subLocation: 'Gullet Marsh / Cottonmouth Bay — Sunrise RV Park Dockside Building',
    mapPin: { x: 56, y: 74 },
    codeType: 'safe-4',
    codeDisplay: '6769',
    summary:
      'Tucked inside the Kingfishers’ dockside warehouse at Sunrise RV Park along Cottonmouth Bay, this 4-digit safe unlocks cleanly with static code 6769.',
    rewardSummary: 'Kingfishers swamp smuggling cash stash',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Sunrise RV Park Safe Code',
        value: '6769',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Clear the Kingfishers Crew at Sunrise RV Park',
        landmarkCue: 'Cottonmouth Bay Dockside Shed',
        instruction:
          'Head to Sunrise RV Park bordering Gullet Marsh and Cottonmouth Bay and neutralize the Kingfishers gang guarding the waterfront building.',
      },
      {
        stepNumber: 2,
        title: 'Enter 6769 on the Dockside Safe',
        landmarkCue: 'Warehouse Interior Safe',
        instruction:
          'Step inside the dockside shed and input 6769 to unlock the gang safe.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'MetaForge', label: 'Sunrise RV Park Safe 6769 Guide' },
      { community: 'Space4Games', label: 'Kingfishers Hideout Combinations' },
    ],
    tags: ['6769', 'sunrise rv park', 'kingfishers', 'cottonmouth', 'safe', 'grassrivers'],
  },
  {
    id: 'cv-28-farm-fix-meth-lab-safe',
    slug: 'farm-fix-meth-lab-belville-safe-2121',
    moduleId: 'codes-vaults',
    indexCode: 'CV-28',
    title: 'Farm Fix Meth Lab Safe (McKittrick Farm)',
    subtitle: 'Final Chapter Gang Hideout Safe North of Belville',
    regionId: 'leonard-county',
    subLocation: 'North of Belville (Leonard County) — McKittrick Farm / Farm Fix Lab',
    mapPin: { x: 60, y: 31 },
    codeType: 'safe-4',
    codeDisplay: '2121',
    summary:
      'Held by the Final Chapter crew at McKittrick Farm north of Belville, the Farm Fix meth lab safe cracks immediately with fixed combination 2121.',
    rewardSummary: 'Final Chapter rural lab cash stash',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Farm Fix Lab Safe Code',
        value: '2121',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Assault McKittrick Farm North of Belville',
        landmarkCue: 'Leonard County • Farm Fix Outbuilding',
        instruction:
          'Drive north out of Belville to McKittrick Farm and clear the Final Chapter gang members protecting the Farm Fix meth lab.',
      },
      {
        stepNumber: 2,
        title: 'Dial 2121 on the Lab Safe',
        landmarkCue: 'Back Lab Room',
        instruction:
          'Locate the safe inside the lab building and punch in 2121 to grab the operation’s cash.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Rock Paper Shotgun', label: 'McKittrick Farm 2121 Safe Guide' },
      { community: 'Space4Games', label: 'Leonard County Hideout Codes' },
    ],
    tags: ['2121', 'farm fix', 'mckittrick farm', 'belville', 'safe', 'leonard county'],
  },
  {
    id: 'cv-29-thirsty-wolf-clubhouse-safe',
    slug: 'thirsty-wolf-biker-clubhouse-safe-1982',
    moduleId: 'codes-vaults',
    indexCode: 'CV-29',
    title: 'The Thirsty Wolf Biker Clubhouse Safe',
    subtitle: 'Biker Hideout Safe Behind The Thirsty Wolf Near Belville',
    regionId: 'leonard-county',
    subLocation: 'Near Belville (Leonard County) — Clubhouse Behind The Thirsty Wolf',
    mapPin: { x: 66, y: 36 },
    codeType: 'safe-4',
    codeDisplay: '1982',
    summary:
      'Tucked behind the Thirsty Wolf roadhouse near Belville, the biker clubhouse office safe opens with fixed founding-year code 1982.',
    rewardSummary: 'Biker clubhouse cash stash & hideout loot',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      specialCode: {
        label: 'Biker Clubhouse Safe Code',
        value: '1982',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Reach the Biker Clubhouse Behind The Thirsty Wolf',
        landmarkCue: 'Belville Outskirts • Leonard County',
        instruction:
          'Pull up behind The Thirsty Wolf bar near Belville and fight through the biker crew guarding their private clubhouse.',
      },
      {
        stepNumber: 2,
        title: 'Enter 1982 on the Clubhouse Safe',
        landmarkCue: 'Clubhouse Back Office',
        instruction:
          'Step into the clubhouse office and input 1982 to pop the safe and claim the cash.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Space4Games', label: 'Thirsty Wolf Clubhouse 1982 Guide' },
      { community: 'TechWiser', label: 'Belville Biker Hideout Safe' },
    ],
    tags: ['1982', 'thirsty wolf', 'biker clubhouse', 'belville', 'safe', 'leonard county'],
  },
];
