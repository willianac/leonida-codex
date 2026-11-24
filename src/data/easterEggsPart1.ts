import type { EasterEggEntry } from '../types/atlas';

export const EASTER_EGGS_PART_1: EasterEggEntry[] = [
  {
    id: 'ee-01-malibu-portal',
    slug: '2002-vice-city-malibu-club-portal',
    moduleId: 'easter-eggs',
    indexCode: 'EE-01',
    title: 'The 2002 Vice City Portal & Malibu Club ("LIFEISPASSINGMEBY")',
    subtitle: '12 LPL Substations -> Reactor 2 -> Low-Poly PS2 Malibu Club',
    regionId: 'vice-city',
    subLocation: 'Badger R&D Tower (Key Lento) -> 12 LPL Substations -> LPL Turtle Head Power Station',
    mapPin: { x: 68, y: 61 },
    category: 'puzzle-secret',
    complexity: 'multi-step',
    referenceOrigin: 'GTA: Vice City (2002) — Malibu Club, Kent Paul & Tommy Vercetti',
    summary:
      ' GTA VI’s grandest community-solved secret: activating a radio tower in Key Lento and flipping 12 Leonida Power & Light substation switches in classic PS2 cheat-code order opens a swirling time portal straight into a blocky 2002 PS2 Malibu Club.',
    requirements: {
      timeOfDay: 'Finale: 19:00–06:00 (7 PM – 6 AM)',
      protagonist: 'Jason',
      equipment: 'Fast car or helicopter (NO fast travel allowed)',
      storyProgress: 'Chapter 3+ recommended; do NOT switch protagonists mid-sequence',
      specialCode: {
        label: '12-Substation Input Order (LIFEISPASSINGMEBY)',
        value: 'D, D, •, A, •, A, A, A, •, W, D, W  ->  U-235 REACTOR2 19-06',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Initialize the Grid at Badger R&D Radio Tower',
        landmarkCue: 'Key Lento • Near Nifty Threads Island Wear',
        instruction:
          'Climb the stairs and ladders of the Badger R&D Radio Tower in Key Lento to reach the upper storage room. Flip the power lever on the left, then press the button on the right (Koch board) until a classic 2002 Vice City audio cue plays and the nearby TV flashes the Club Malibu logo.',
        fieldTip:
          'Start as Jason and stay as Jason for the entire run. Switching protagonists or using fast travel (taxis/transit) resets substation progress to zero.',
      },
      {
        stepNumber: 2,
        title: 'Trigger Substations #1 to #4 Across Leonida',
        landmarkCue: 'Downtown VC -> Balsero -> Key Lento -> North Vice Beach',
        instruction:
          'Manually drive or fly to the first four Leonida Power and Light (LPL) substations marked with blue exterior letters and flip ONLY the matching purple-taped switch inside: #1 ("L", Downtown Vice City just south over the river) -> press D; #2 ("iF", Balsero) -> press D; #3 ("Ei", Key Lento) -> press • (Dot); #4 ("S", extreme northern tip of Vice Beach) -> press A.',
      },
      {
        stepNumber: 3,
        title: 'Complete Substations #5 to #12 in Exact Cheat Sequence',
        landmarkCue: 'Blue Exterior Letters P-A-S-S-I-N-G-M',
        instruction:
          'Continue manually visiting substations #5 through #12 in exact order, matching the blue painted exterior letters and pressing only the mapped switch: #5 ("P") -> •, #6 ("A") -> A, #7 ("S") -> A, #8 ("S") -> A, #9 ("I") -> •, #10 ("N") -> W, #11 ("G") -> D, #12 ("M") -> W.',
        fieldTip:
          'Watch out for trespassing guards at fenced substations and ignore decoy switches inside each cage.',
      },
      {
        stepNumber: 4,
        title: 'Verify the Unknown Text Message',
        landmarkCue: 'Smartphone SMS',
        instruction:
          'Right after flipping the 12th switch ("M" -> W), check Jason’s phone for an automated text from an unknown sender reading "U-235 REACTOR2 19-06", confirming the portal window.',
      },
      {
        stepNumber: 5,
        title: 'Open Reactor 2 at LPL Turtle Head Power Station',
        landmarkCue: 'East of Hamlet • 19:00–06:00',
        instruction:
          'Travel to the LPL Turtle Head (T.H.) Power Station east of Hamlet in South Vice-Dale County between 7:00 PM and 6:00 AM. Infiltrate the plant as Jason, find the door labeled Reactor 2, pull the adjacent lever, and step into the swirling purple portal.',
      },
    ],
    payoffDescription:
      'Jason warps into an authentic low-polygon 2002 PS2 recreation of Vice City’s Malibu Club. Upstairs you meet Kent Paul (featuring brand-new voice lines recorded by Danny Dyer). Returning to modern Leonida permanently unlocks Tommy Vercetti’s iconic blue floral Hawaiian shirt and his classic motorcycle, the Western Malibu Zombie Bomber.',
    loreContext:
      'First cracked by YouTuber Memeio and verified across r/GTA6, the 12 switch inputs translate the original PS2 button sequence (Circle=D, L1=•, Square=A, Triangle=W) for "LIFEISPASSINGMEBY"—the 2002 GTA: Vice City cheat code that accelerated time.',
    verificationStatus: 'community-solved',
    sources: [
      { community: 'r/GTA6', label: 'Memeio & LPL Substation Megathread' },
      { community: 'IGN', label: '2002 Malibu Club Portal Walkthrough' },
      { community: 'Rock Paper Shotgun', label: 'LIFEISPASSINGMEBY Guide' },
    ],
    tags: ['malibu club', 'tommy vercetti', 'kent paul', 'portal', 'substation', 'hawaiian shirt', 'bike'],
    featured: true,
  },
  {
    id: 'ee-02-literal-easter-egg',
    slug: 'literal-radio-tower-easter-egg',
    moduleId: 'easter-eggs',
    indexCode: 'EE-02',
    title: 'The Literal Easter Egg (Tallest Radio Tower Nest)',
    subtitle: 'Climb the Skyscraper-Height Broadcast Mast & Drop a Painted Egg',
    regionId: 'vice-city',
    subLocation: 'South Vice-Dale County (Tallest Red-and-White Mast North of Hamlet)',
    mapPin: { x: 64, y: 58 },
    category: 'franchise-callback',
    complexity: 'walk-up',
    referenceOrigin: 'GTA: Vice City (2002) — Chocolate Easter Egg Callback',
    summary:
      'Perched atop the tallest red-and-white communications mast north of Hamlet sits a bird’s nest cradling literal painted Easter eggs—complete with a comedic cutscene if you hurl one off the edge.',
    requirements: {
      timeOfDay: 'Anytime (Daytime best for visibility)',
      protagonist: 'Either',
      equipment: 'Parachute (or helicopter) & a manual save before climbing',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Reach the South Vice-Dale Broadcast Mast',
        landmarkCue: 'Highway North of Hamlet',
        instruction:
          'Drive north up the highway from Key Lento past Hamlet until you spot the towering red-and-white striped broadcast mast dominating the South Vice-Dale skyline.',
      },
      {
        stepNumber: 2,
        title: 'Ascend to the Summit Platform',
        landmarkCue: '5–7 Minute Vertical Ladder Climb',
        instruction:
          'Hop the perimeter security fence and climb the continuous vertical maintenance ladders all the way to the top platform (or land/hover carefully with a helicopter).',
        fieldTip:
          'Drop a quick manual save before starting the climb—one slip without a parachute deployed is fatal.',
      },
      {
        stepNumber: 3,
        title: 'Grab a Painted Egg & Throw It Off the Edge',
        landmarkCue: 'Summit Bird’s Nest',
        instruction:
          'Inspect the bird’s nest at the very peak to pick up one of the brightly painted Easter eggs, step to the railing edge, and throw it off to trigger a special camera sequence. Parachute safely down afterward.',
      },
    ],
    payoffDescription:
      'Throwing the painted Easter egg triggers a bespoke comedic cutscene tracking the egg’s entire freefall from the clouds until it splats squarely across an unsuspecting commuter’s windshield on the highway below.',
    loreContext:
      'Continues Rockstar’s famous literal "Easter Egg" gag started in 2002’s GTA: Vice City (where jumping through a fake window revealed a chocolate egg on a pedestal). Eagle-eyed players on r/GamingDetails also spotted a matching egg icon etched onto a safe-cracking compass.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Radio Tower Egg Cutscene Clip' },
      { community: 'r/GamingDetails', label: 'Vault Compass Egg Icon Detail' },
      { community: 'GameSpot', label: 'Literal Easter Egg Location Guide' },
    ],
    tags: ['radio tower', 'literal easter egg', 'hamlet', 'cutscene', 'chocolate egg'],
    featured: true,
  },
  {
    id: 'ee-03-immortal-man',
    slug: 'immortal-man-sniper-scope-stalker',
    moduleId: 'easter-eggs',
    indexCode: 'EE-03',
    title: 'The "Immortal Man" (Unkillable Sniper-Scope Stalker)',
    subtitle: 'Lock Eyes Through a Rifle Scope & Escape Before He Reaches the Top',
    regionId: 'leonida-keys',
    subLocation: 'Key Lento — Top Platform of Badger R&D Radio Tower',
    mapPin: { x: 66, y: 82 },
    category: 'cryptid-myth',
    complexity: 'conditional',
    referenceOrigin: 'The Terminator / Rockstar Urban Creepypasta',
    summary:
      'Aiming the provided sniper rifle from the top of Key Lento’s radio tower at a lone pedestrian below triggers a spine-chilling fourth-wall glare and a relentless, bulletproof sprint straight up the tower.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Shrewsbury SM-69 Sniper Rifle & Parachute (both spawn at tower peak)',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Climb to the Very Peak of Badger R&D Radio Tower',
        landmarkCue: 'Key Lento • Near Jason’s House & Donnie’s Caravan',
        instruction:
          'Head to the Badger R&D Radio Tower in Key Lento and climb past the interior radio room all the way up the exterior ladder to the highest platform.',
      },
      {
        stepNumber: 2,
        title: 'Equip the Provided Sniper Rifle & Scan Below',
        landmarkCue: 'Shrewsbury SM-69 Pickup',
        instruction:
          'Pick up the Shrewsbury SM-69 sniper rifle resting next to the parachute on the top platform. Aim down the scope and scan the residential decks, streets, and waterfront caravan area below for a lone standing male NPC (often in shorts and a light t-shirt).',
      },
      {
        stepNumber: 3,
        title: 'Hold Your Crosshair on Him & Escape by Parachute',
        landmarkCue: 'Parachute Escape',
        instruction:
          'Keep your scope trained directly on the lone man until horror music stings and he glares straight into your lens. Grab the parachute immediately and base-jump off the tower before he scales the ladder.',
        fieldTip:
          'Do not try to stand your ground—bullets and explosives do zero damage to him, and breaking line of sight can let him teleport right behind you.',
      },
    ],
    payoffDescription:
      'The man freezes, stares dead into your scope, draws a finger across his throat, and charges the tower at superhuman speed while shrugging off sniper rounds. If he reaches you on the platform, he delivers an instant one-punch knockout kill; parachuting away despawns him safely.',
    loreContext:
      'One of GTA VI’s most viral horror moments on r/GTA6, blending classic GTA myth-hunting paranoia with relentless Terminator-style pursuit.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Immortal Man Scope Discovery' },
      { community: 'IGN', label: 'Key Lento Immortal Stalker Guide' },
      { community: 'Dexerto', label: 'How to Survive the Immortal Man' },
    ],
    tags: ['immortal man', 'stalker', 'sniper', 'key lento', 'horror', 'terminator'],
    featured: true,
  },
  {
    id: 'ee-04-ufo-abduction-bunker',
    slug: 'ufo-abduction-alien-dream-secret-bunker',
    moduleId: 'easter-eggs',
    indexCode: 'EE-04',
    title: 'UFO Abduction, Alien Dream & South Point Secret Bunker',
    subtitle: '2:00 AM Kelly County Abduction -> Nightmare Code -> Permanent Stat Boosts',
    regionId: 'port-gellhorn',
    subLocation: 'Kelly County (NW of Starlet Motel) -> Safehouse Bed -> South Point Airfield (Hamlet)',
    mapPin: { x: 29, y: 42 },
    category: 'cryptid-myth',
    complexity: 'multi-step',
    referenceOrigin: 'The X-Files ("The Truth Is Out There") & GTA V / RDR2 UFO Lore',
    summary:
      'Investigating an abandoned car past 2:00 AM gets your protagonist abducted by a UFO, unlocking a playable alien nightmare containing the keypad code to an underground bunker beneath South Point Airfield.',
    requirements: {
      timeOfDay: 'Phase 1: Strictly after 02:00 AM',
      protagonist: 'Solo Only (Lucia or Jason)',
      storyProgress: 'Chapter 2 onward (after completing Chapter 1)',
      specialCode: {
        label: 'Dream Console 4-Digit Keypad (Check Bars Above Pad)',
        value: 'Session-specific: commonly 2134, 2314, or 2341',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Find the Stranded Car After 2:00 AM (Solo Only)',
        landmarkCue: 'Kelly County • NW of Starlet Motel',
        instruction:
          'After Chapter 1, drive solo (leave your partner behind) past 2:00 AM along the dark rural roads northwest of the Starlet Motel, east of Port Gellhorn, until you spot an empty car with flashing headlights and open doors.',
      },
      {
        stepNumber: 2,
        title: 'Follow the Clothing Trail & Get Abducted',
        landmarkCue: 'Pulsing Blue Woods Light',
        instruction:
          'Follow the trail of discarded clothes into the trees toward a pulsing blue beam. Watch a UFO drop a dazed woman, talk to her, then walk back toward her car on the road—the UFO returns to beam you aboard.',
      },
      {
        stepNumber: 3,
        title: 'Sleep Repeatedly to Trigger the White-Room Alien Dream',
        landmarkCue: 'Any Safehouse Bed',
        instruction:
          'Playing as the same abducted protagonist, sleep repeatedly in a safehouse bed until you wake inside a surreal white alien facility. Carefully step around the alien eggs (stepping on too many summons tentacle attacks) to reach the solar-system console room and count the vertical bars above the keypad for your 4-digit code.',
      },
      {
        stepNumber: 4,
        title: 'Drop Into the South Point Airfield Bunker',
        landmarkCue: 'Hamlet • Fenced Airfield Radio Tower',
        instruction:
          'Travel to South Point Airfield in Hamlet, vault the left side of the radio tower fence, climb the ladder onto the adjacent roof, drop down the open roof hatch, and enter your 4-digit dream code on the basement keypad.',
      },
      {
        stepNumber: 5,
        title: 'Power the Containment Grid & Escape With the Specimen',
        landmarkCue: 'Underground Cattle/Alien Lab',
        instruction:
          'Ride the elevator down, use the central control room switch to unlock both side chambers, carry the milk bottle/container from the left room into the machine in the right room until the grid turns green, grab the alien specimen, and take the elevator out before lockdown.',
      },
    ],
    payoffDescription:
      'Phase 1 unlocks the hidden "The Truth Is Out There" trophy/achievement and skips several in-game days. Completing the underground South Point Airfield bunker puzzle grants permanent upgrades to your protagonist’s Health, Stamina, and Focus stats.',
    loreContext:
      'Expands Rockstar’s overarching extraterrestrial mythos from Mount Chiliad/Fort Zancudo (GTA V) and Hani’s Bethel (RDR2) into a full multi-act playable abduction and government cattle-experimentation conspiracy.',
    verificationStatus: 'community-solved',
    sources: [
      { community: 'r/GTA6', label: 'South Point Bunker Keypad Solver' },
      { community: 'GameSpot', label: 'The Truth Is Out There UFO Guide' },
      { community: 'Red Bull Gaming', label: 'Alien Dream & Bunker Walkthrough' },
    ],
    tags: ['ufo', 'alien', 'abduction', 'bunker', 'stat upgrade', 'trophy', 'starlet motel'],
    featured: true,
  },
  {
    id: 'ee-05-skunk-ape',
    slug: 'skunk-ape-mr-mangrove-questline',
    moduleId: 'easter-eggs',
    indexCode: 'EE-05',
    title: 'The Skunk Ape ("Mr. Mangrove" / Leonida’s Bigfoot)',
    subtitle: 'Rusty Anchor Flyer -> Psychedelic Swamp Effigy -> Night Helicopter Hunt',
    regionId: 'grassrivers',
    subLocation: 'Rusty Anchor Bar (Key Lento) -> Cottonmouth Lake & Gullet Marsh',
    mapPin: { x: 53, y: 66 },
    category: 'cryptid-myth',
    complexity: 'multi-step',
    referenceOrigin: 'Florida Skunk Ape Folklore & GTA San Andreas / GTA V Bigfoot',
    summary:
      'Florida’s foul-smelling cousin to Bigfoot stalks the Grassrivers wetlands—starting from a cryptid hunter’s bar flyer and escalating through spore hallucinations, swamp dolls, and a nighttime searchlight helicopter chase.',
    requirements: {
      timeOfDay: 'Nighttime required for Gullet Marsh dolls & Helicopter hunt',
      protagonist: 'Either',
      storyProgress: 'Available from Chapter 1 onward',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Call Kirk from the Rusty Anchor Notice Board',
        landmarkCue: 'North Key Lento (or Skeeter’s Bar in Hamlet)',
        instruction:
          'Step inside the Rusty Anchor bar in North Key Lento, inspect the bulletin board immediately to the right of the front door to read Kirk’s Skunk Ape flyer, and dial the listed number to add Kirk to your phone.',
      },
      {
        stepNumber: 2,
        title: 'Spot the Wild Skunk Ape & Spore Effigy',
        landmarkCue: 'Dirt Road Between Gambit Bay & Cottonmouth Lake',
        instruction:
          'Explore the swampy dirt trails south of Hamlet between Gambit Bay and Cottonmouth Lake until you spot a dead deer carcass. Approach to glimpse the Skunk Ape feeding before it bolts; follow its tracks into the brush and inspect the wooden tree effigy.',
      },
      {
        stepNumber: 3,
        title: 'Find All Three Wooden Tree Dolls at Night',
        landmarkCue: 'Gullet Marsh Pink Search Zones',
        instruction:
          'When Kirk’s nocturnal search zones appear in Gullet Marsh, inspect the mangrove trees at night to locate three wooden dolls: #1 in northern Gullet Marsh, #2 near the southern Cottonmouth Lake border, and #3 in the central marsh just south of the first zone.',
      },
      {
        stepNumber: 4,
        title: 'Tranquilize "Mr. Mangrove" from Kirk’s Helicopter',
        landmarkCue: 'Cottonmouth Lake & Longneck Trail (Night)',
        instruction:
          'Meet Kirk at his night marker near Cottonmouth Lake and Longneck Trail, board the chopper, and use the searchlight plus the Mister Mangrove Laird 350 tranquilizer rifle to tag the Skunk Ape sprinting across the swamps.',
      },
    ],
    payoffDescription:
      'Inspecting the first wooden effigy blasts you with hallucinogenic spores as the glowing-eyed Skunk Ape looms over you before you wake back on the trail, culminating in a full voiced Stranger finale tracking "Mr. Mangrove" from the air.',
    loreContext:
      'Pays off over two decades of Rockstar Sasquatch mythology—from 2004 San Andreas forum legends to Red Dead Redemption: Undead Nightmare and GTA V’s "The Last One"—reimagined around South Florida’s real-world Skunk Ape sightings.',
    verificationStatus: 'verified',
    sources: [
      { community: 'IGN', label: 'Mr. Mangrove Skunk Ape Walkthrough' },
      { community: 'GamesRadar+', label: 'All 3 Gullet Marsh Tree Doll Locations' },
      { community: 'r/GTA6', label: 'Roadside Deer Wild Sighting Thread' },
    ],
    tags: ['skunk ape', 'bigfoot', 'sasquatch', 'mr mangrove', 'kirk', 'grassrivers'],
    featured: true,
  },
  {
    id: 'ee-06-st-lucia-lighthouse-ghosts',
    slug: 'st-lucia-lighthouse-ghosts-cursed-knife-ghost-ship',
    moduleId: 'easter-eggs',
    indexCode: 'EE-06',
    title: 'St. Lucia Lighthouse Ghosts, Cursed Knife & Ghost Ship',
    subtitle: '1909 Murder Apparition -> 1:30 AM Fog Dive -> Collectible Cursed Knife',
    regionId: 'leonard-county',
    subLocation: 'Little Hardin Island (Across Millport Basin) — St. Lucia Lighthouse',
    mapPin: { x: 86, y: 30 },
    category: 'cryptid-myth',
    complexity: 'multi-step',
    referenceOrigin: '1909 Maritime Ghost Lore & GTA V Mount Gordo / RDR2 Agnes Dowd',
    summary:
      'Under cover of darkness on Little Hardin Island, witnessing a 1909 spectral murder atop St. Lucia Lighthouse unravels a sunken treasure trail yielding the throwable Cursed Knife and a glowing Ghost Ship.',
    requirements: {
      timeOfDay: '22:00–04:00 (Dive triggers ~01:30 AM)',
      protagonist: 'Either',
      equipment: 'Boat, Binoculars, Metal Detector (Scuba Gear spawns on keeper’s boat)',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Watch the Spectral Murder Through Binoculars',
        landmarkCue: 'St. Lucia Lighthouse Balcony • 22:00–04:00',
        instruction:
          'Boat across the Millport Basin to Little Hardin Island after 10:00 PM. Climb the exterior ladder of St. Lucia Lighthouse to the lantern balcony and peer across the platform through your Binoculars to witness ghosts Frank Pudney and Godfrey Asher arguing until one is shoved over the rail.',
      },
      {
        stepNumber: 2,
        title: 'Inspect the Fallen Photograph & Keeper’s Logbook',
        landmarkCue: 'Lighthouse Base -> NW Keeper’s House',
        instruction:
          'Climb down to examine and flip over the old 1909 photograph where the ghost landed. Then walk northwest to the abandoned keeper’s cottage, force open the front door, turn right, and read the Old Logbook by the fireplace.',
      },
      {
        stepNumber: 3,
        title: 'Sail East at 1:30 AM Into the Supernatural Fog',
        landmarkCue: 'Keeper’s Dock Boat (Scuba Stocked)',
        instruction:
          'Around 1:30 AM, board the boat docked beside the keeper’s house (which holds Scuba Gear) and motor to the eastern tip of Little Hardin Island until thick eerie fog rolls in, spectral whispers echo, and your boat engine stalls.',
      },
      {
        stepNumber: 4,
        title: 'Dive for the Cursed Knife & Spot the Ghost Ship',
        landmarkCue: 'Metal Detector Seabed Sweep',
        instruction:
          'Equip Scuba Gear, dive to the ocean floor before dawn, and sweep with your Metal Detector to find the skeletal wooden wreck containing the Cursed Knife. Surface and hurry back toward St. Lucia Lighthouse while still dark to see a glowing green Ghost Ship sail across the horizon.',
      },
    ],
    payoffDescription:
      'Unlocks the permanent, rare throwable/melee Cursed Knife weapon and rewards night-owl explorers with a towering spectral green Ghost Ship gliding silently past the lighthouse beam.',
    loreContext:
      'Blends real-world lighthouse disappearance mysteries (such as the Flannan Isles keepers) with Rockstar’s beloved nocturnal ghost encounters.',
    verificationStatus: 'community-solved',
    sources: [
      { community: 'Vice', label: 'St. Lucia Lighthouse & Cursed Knife Guide' },
      { community: 'Dexerto', label: 'How to Spawn the Ghost Ship in GTA 6' },
    ],
    tags: ['ghost', 'ghost ship', 'cursed knife', 'lighthouse', 'weapon', 'scuba'],
    featured: true,
  },
  {
    id: 'ee-07-haunted-marbelle-hotel',
    slug: 'haunted-marbelle-hotel-silent-hill-safe',
    moduleId: 'easter-eggs',
    indexCode: 'EE-07',
    title: 'The Haunted Marbelle Hotel (Silent Hill Tribute & Safe)',
    subtitle: 'Self-Opening Top-Floor Door, Silent Hill Fog & 6-Digit Safe 955214',
    regionId: 'vice-city',
    subLocation: 'Southern Crosstown — NW 8th Street (East of Pawn & Gun)',
    mapPin: { x: 72, y: 52 },
    category: 'pop-culture',
    complexity: 'multi-step',
    referenceOrigin: 'Silent Hill & P.T. (Konami Psychological Horror)',
    summary:
      'Entering a condemned Crosstown hotel with a "For Sale" sign plunges you into flickering lights, wall mannequins, occult blood writing, and thick Silent Hill fog—plus a rooftop combination for a rare luxury watch.',
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
        title: 'Slip Through the Rear Alley Door of Marbelle Hotel',
        landmarkCue: 'Southern Crosstown • Near NW 8th St',
        instruction:
          'Find the boarded-up Marbelle Hotel ("For Sale" sign out front) east of the Crosstown Pawn & Gun shop. Walk down the left alley to the back of the building and enter the unlocked rear door with your flashlight drawn.',
      },
      {
        stepNumber: 2,
        title: 'Trigger the Top-Floor Mannequin & Self-Opening Door',
        landmarkCue: 'Top Floor Hallway',
        instruction:
          'Ascend the dark stairwell to the top floor, pass the mannequin staring into the wall, and turn right toward the room whose door creaks open on its own. Step inside to trigger the haunting.',
      },
      {
        stepNumber: 3,
        title: 'Read the Rooftop Realtor Note & Crack Safe 955214',
        landmarkCue: 'Roof -> Ground-Floor Office',
        instruction:
          'After surviving the supernatural sequence, head onto the roof to inspect the Old Note circling 6-digit code 955214, then return to the ground-floor back office corner to unlock the wall safe.',
        fieldTip:
          'In a hurry? You can also punch 955214 straight into the ground-floor safe even before triggering the upstairs ghost room.',
      },
    ],
    payoffDescription:
      'Stepping into the top-floor room causes lights to strobe, whispers to surround you, glowing red occult symbols to bleed onto the walls, and the sunny Vice City skyline outside to vanish under oppressive Silent Hill fog. Opening safe 955214 awards cash and the collectible Crowex Ambassador "Breakfast" watch.',
    loreContext:
      'Widely praised on r/GTA6 as Rockstar’s creepiest interior Easter egg, channeling P.T.’s claustrophobic corridor dread and Silent Hill’s signature fog shift.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Marbelle Hotel Silent Hill Fog Showcase' },
      { community: 'Vice', label: 'Marbelle Hotel Safe Code & Watch Guide' },
    ],
    tags: ['silent hill', 'pt', 'horror', 'marbelle hotel', 'safe code', '955214', 'watch'],
  },
  {
    id: 'ee-08-krakinos-mutant-crab',
    slug: 'krakinos-giant-mutant-crab-pelican-valley',
    moduleId: 'easter-eggs',
    indexCode: 'EE-08',
    title: 'Krakinos the Giant Mutant Crab & Pelican Valley Outpost',
    subtitle: 'PC Password CLEAVES -> Giant Crab Ambush -> $10,000 & Crabshack VF5 SMG',
    regionId: 'grassrivers',
    subLocation: 'Pelican Valley Swamps (Gullet Marsh, Launch from Stillwater Path Dock)',
    mapPin: { x: 61, y: 71 },
    category: 'puzzle-secret',
    complexity: 'multi-step',
    referenceOrigin: 'Sci-Fi Creature Features & Swamp Mutation Lore',
    summary:
      'Restoring power to an abandoned swamp crustacean lab triggers a jump-scare ambush from a giant mutated crab named Krakinos—and a three-step cipher leading to $11,000+ and a unique SMG.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Boat (Stillwater Path dock) & an open long-gun slot / vehicle trunk',
      specialCode: {
        label: 'Terminal Password -> Shack Safe -> Boathouse Keypad',
        value: 'CLEAVES  ->  0072  ->  0212',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Restore Breaker Power Behind the Swamp Shack',
        landmarkCue: 'Pelican Valley Outpost • Blue Crab Cages',
        instruction:
          'Boat from Stillwater Path dock into the gator-filled Pelican Valley marshes. Walk behind the dark main outpost shack near the stacked blue crab cages and flip the exterior breaker switch.',
      },
      {
        stepNumber: 2,
        title: 'Find Floorboard Password "CLEAVES" & Log Into PC',
        landmarkCue: 'Side Bedroom Floorboards',
        instruction:
          'Head inside to the small bedroom opposite the kitchen and inspect the scratched floorboards for password CLEAVES. Enter CLEAVES on the main desk PC and read the clue "Safe Code = Double Success".',
      },
      {
        stepNumber: 3,
        title: 'Survive the Krakinos Ambush & Double Specimen 0036',
        landmarkCue: 'Adjacent Lab Shed Clipboard',
        instruction:
          'Step back from the PC and mash the prompt when the giant mutant crab Krakinos lunges onto your chest! Once it flees into the swamp, check the adjacent lab shed’s clipboard ("Specimen 0036 = SUCCESS") and double it to 0072.',
      },
      {
        stepNumber: 4,
        title: 'Unlock Safe 0072 & Pier Boathouse 0212',
        landmarkCue: 'Wooden Pier Boathouse',
        instruction:
          'Enter 0072 into the main shack safe for ~$1,000+ cash and emergency dock code 0212. Walk out onto the pier, punch 0212 into the boathouse keypad, and claim $10,000 cash plus the Crabshack VF5 SMG.',
      },
    ],
    payoffDescription:
      'Delivers a terrifying close-quarters creature cutscene with Krakinos the giant mutant crab, over $11,000 in cash, and the unique custom-skinned Crabshack VF5 submachine gun.',
    loreContext:
      'One of GTA VI’s most rewarding environmental detective puzzles, rewarding players who actually read lab clipboards ("0036 x 2 = 0072") rather than brute-forcing safes.',
    verificationStatus: 'community-solved',
    sources: [
      { community: 'Dexerto', label: 'Pelican Valley Krakinos & VF5 SMG Guide' },
      { community: 'r/GTA6', label: 'CLEAVES / 0072 / 0212 Puzzle Breakdown' },
    ],
    tags: ['krakinos', 'giant crab', 'cleaves', '0072', '0212', 'crabshack vf5', 'smg'],
    featured: true,
  },
  {
    id: 'ee-09-belville-simulation-house',
    slug: 'belville-simulation-house-san-andreas-teaser',
    moduleId: 'easter-eggs',
    indexCode: 'EE-09',
    title: 'The Belville Simulation House ("J + L Are the Only Free Ones")',
    subtitle: '2021 Lil’ Probe’Inn Photo Paid Off Inside a Fourth-Wall Conspiracy Garage',
    regionId: 'leonard-county',
    subLocation: 'Belville — Cream/Yellow House Beside the Cellerica "Dream House" Billboard',
    mapPin: { x: 64, y: 33 },
    category: 'franchise-callback',
    complexity: 'walk-up',
    referenceOrigin: 'GTA: San Andreas Definitive Edition (2021) Lil’ Probe’Inn Photo',
    summary:
      'The mysterious suburban house first teased in a framed 2021 UFO-bar photograph actually exists in Belville—and crawling under its garage door reveals an NPC driven mad by realizing Leonida is a video game.',
    requirements: {
      timeOfDay: 'Daytime recommended',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Two-Palm Cream House in Belville',
        landmarkCue: 'Beside Cellerica Dream House Billboard',
        instruction:
          'Drive to suburban Belville in Leonard County and find the cream/yellow house with a white double garage and two front palm trees right next to the Cellerica billboard.',
      },
      {
        stepNumber: 2,
        title: 'Crouch & Find the Analog Sweet Spot at the Garage Door',
        landmarkCue: 'Bottom Edge of White Garage Door',
        instruction:
          'Stand flush against the bottom lip of the white double garage door and crouch. When the circular prompt appears, slowly rotate your right stick (or mouse) until you hit the sweet spot that fills the circle and lifts the door.',
      },
      {
        stepNumber: 3,
        title: 'Inspect the Red-String Simulation Board & Foiled Magazine',
        landmarkCue: 'Hidden Garage Lair',
        instruction:
          'Crawl inside and examine the red-string conspiracy wall, failed Los Santos flight bookings, and Issue 329 of Foiled magazine resting on the bed.',
      },
    ],
    payoffDescription:
      'Reveals an unhinged fourth-wall corkboard screaming "IT’S A SIMULATION", "Why can’t I leave Leonida?", rants about despawning cars and repeated NPC faces, and sticky notes asking "Who is J?" / "Who is L?" before concluding: "J + L are the only free ones."',
    loreContext:
      'Solves a 5-year Rockstar community mystery! In November 2021, GTA: The Trilogy – Definitive Edition added an unidentified suburban house photo to San Andreas’s Lil’ Probe’Inn UFO bar—now immortalized in Belville.',
    verificationStatus: 'verified',
    sources: [
      { community: 'PC Gamer', label: 'San Andreas Teaser House Found in Belville' },
      { community: 'IGN', label: 'Belville Simulation Garage Easter Egg' },
    ],
    tags: ['simulation', 'san andreas', 'lil probe inn', 'belville', 'fourth wall'],
    featured: true,
  },
  {
    id: 'ee-10-mario-luigi-hidden-block',
    slug: 'super-mario-luigi-hidden-block-j-and-l-caps',
    moduleId: 'easter-eggs',
    indexCode: 'EE-10',
    title: 'Super Mario & Luigi Hidden Block ("J" & "L" Plumber Caps)',
    subtitle: 'Smoke a Ruined Mill Bong to Reveal an Invisible Floating Coin Block',
    regionId: 'mount-kalaga',
    subLocation: 'Southern Moreau (Lummox County) — Lawton Co. Paper Mill Ruins by Water Wheel',
    mapPin: { x: 35, y: 22 },
    category: 'pop-culture',
    complexity: 'multi-step',
    referenceOrigin: 'Super Mario Bros. (Nintendo)',
    summary:
      'Taking a hit from a forgotten bong inside the Lawton Co. Paper Mill ruins reveals a translucent floating Mario block overhead that drops wearable "J" and "L" plumber caps.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Both Together',
      equipment: 'Bring Jason & Lucia together to claim both hats in one visit',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Travel With Both Protagonists to Lawton Co. Paper Mill',
        landmarkCue: 'Southern Moreau • Near River Water Wheel',
        instruction:
          'Head with both Jason and Lucia to the broken brick ruins of the Lawton Co. Paper Mill near the MacAlister Gold Mine ruins and riverside Water Wheel meditation spot in southern Moreau.',
      },
      {
        stepNumber: 2,
        title: 'Interact With the Bong in the Center of the Ruins',
        landmarkCue: 'Crate / Purple Tarp',
        instruction:
          'Find the bong resting on a crate/purple tarp amid the brick walls and take a hit. Follow the rising smoke plume with your camera straight upward.',
      },
      {
        stepNumber: 3,
        title: 'Jump Under (or Shoot) the Translucent Floating Block',
        landmarkCue: 'High Ruined Brick Ledge',
        instruction:
          'Spot the translucent Question-style block hovering in the smoke above the wall. Parkour up the broken brickwork onto the top ledge and jump from underneath to bonk the block (or shoot it directly), then swap characters to pick up both dropped caps.',
      },
    ],
    payoffDescription:
      'Bonking the invisible block triggers a retro platformer chime and drops two permanent wardrobe unlocks: a Mario-styled "J" cap for Jason and a green Luigi-styled "L" cap for Lucia.',
    loreContext:
      'Turns Jason and Lucia’s initials ("J" & "L") into a playful Nintendo tribute tucked away in northern Leonida’s Lummox County ruins.',
    verificationStatus: 'verified',
    sources: [
      { community: 'Rock Paper Shotgun', label: 'Mario & Luigi J/L Hats Guide' },
      { community: 'Mobalytics', label: 'Lawton Paper Mill Hidden Block Walkthrough' },
    ],
    tags: ['mario', 'luigi', 'hats', 'wardrobe', 'bong', 'moreau', 'lummox'],
  },
  {
    id: 'ee-11-cool-dog-island',
    slug: 'cool-dog-jet-ski-and-dog-island',
    moduleId: 'easter-eggs',
    indexCode: 'EE-11',
    title: 'Cool Dog (The Jet-Skiing Dog) & Secret Dog Island',
    subtitle: 'Get Rescued Treading Water in Gambit Bay & Unlock Safe 44017',
    regionId: 'leonida-keys',
    subLocation: 'Gambit Bay Open Water -> Dog Island Sanctuary',
    mapPin: { x: 54, y: 82 },
    category: 'florida-parody',
    complexity: 'conditional',
    referenceOrigin: 'Viral Florida Jet-Skiing Dogs',
    summary:
      'Stranding yourself in the deep waters of Gambit Bay summons "Cool Dog"—a goggle-wearing pup standing upright on a jet ski who chauffeurs you to Dog Island.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Any boat to reach deep Gambit Bay water',
      specialCode: {
        label: 'Dog Island Trailer Safe Combination',
        value: '44017',
      },
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Bail Out Into Deep Gambit Bay Waters',
        landmarkCue: 'Gambit Bay / Leonida Bay',
        instruction:
          'Pilot a boat into the open deep water of Gambit Bay in the Leonida Keys, dive overboard, and swim a short distance away so you are stranded treading water.',
      },
      {
        stepNumber: 2,
        title: 'Wait ~60 Seconds for Barking & Hop on the Jet Ski',
        landmarkCue: 'Triangle / Y Passenger Prompt',
        instruction:
          'Tread water for roughly one minute until you hear enthusiastic barking. Spot the goggle-wearing dog riding a jet ski toward you, swim alongside, and press Triangle / Y to ride pillion.',
      },
      {
        stepNumber: 3,
        title: 'Play Fetch & Loot Dog Island Trailer Safe 44017',
        landmarkCue: 'Dog Island Trailer',
        instruction:
          'Let Cool Dog drive you straight to Dog Island, where you can play catch with the island pack, grab wearable sunglasses, pick up a $1,218 wallet, and unlock the trailer safe with code 44017.',
      },
    ],
    payoffDescription:
      'Chauffeurs you hands-free behind a jet-skiing dog to an island full of friendly dogs, unique sunglasses, $1,218 in loose cash, and safe loot.',
    loreContext:
      'Quickly became one of the most upvoted clips on r/GTA6 during launch week—celebrating wholesome Florida eccentricity.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Cool Dog Rescue Viral Clip' },
      { community: 'IGN', label: 'Dog Island & Safe 44017 Guide' },
      { community: 'GamesRadar+', label: 'How to Summon the Jet-Ski Dog' },
    ],
    tags: ['cool dog', 'jet ski', 'dog island', '44017', 'safe code', 'sunglasses'],
    featured: true,
  },
  {
    id: 'ee-12-dexter-trinity-apartments',
    slug: 'dexter-morgan-trinity-apartments-slice-of-life',
    moduleId: 'easter-eggs',
    indexCode: 'EE-12',
    title: 'Dexter Morgan’s "Trinity Apartments" & Slice of Life Boat',
    subtitle: 'Window AC Unit, Rooftop Kill Kit & Bay Harbor Butcher Boat',
    regionId: 'vice-city',
    subLocation: 'Washington Island (Vice Beach) — West of Drone/Paint Shop & Canal Dock',
    mapPin: { x: 85, y: 54 },
    category: 'pop-culture',
    complexity: 'walk-up',
    referenceOrigin: 'Dexter (Showtime Miami Crime Series)',
    summary:
      'On Washington Island sits a near-1:1 recreation of Dexter Morgan’s waterfront condo—named "Trinity Apartments"—complete with his window AC unit, rooftop kill kit, and moored boat.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Visit Trinity Apartments on Washington Island',
        landmarkCue: 'Vice Beach • West of Paint/Drone Shop',
        instruction:
          'Head to Washington Island in Vice Beach and locate the retro waterfront courtyard complex signed "Trinity Apartments", featuring the signature pool and curved upper walkway.',
      },
      {
        stepNumber: 2,
        title: 'Spot the Window AC Unit & Climb to the Roof',
        landmarkCue: 'Rooftop Kill Stash',
        instruction:
          'Check the upper balcony wall for Dexter’s trademark window AC unit, then climb onto the building’s roof to inspect a stashed knife, rope, gloves, black trash bag, and syringe.',
      },
      {
        stepNumber: 3,
        title: 'Inspect the Docked Dual-Motor Cabin Boat',
        landmarkCue: 'Adjacent Canal Slip',
        instruction:
          'Walk down to the adjacent canal dock right beside the apartments to find a white dual-outboard fishing cruiser modeled directly on Dexter’s Slice of Life.',
      },
    ],
    payoffDescription:
      'Packs four distinct Dexter nods into one Vice Beach block: the Bay Harbor Club architecture, the Season 4 "Trinity" name, the blood-slide AC unit, the rooftop M99 syringe/kill tools, and the Slice of Life cruiser.',
    loreContext:
      'Miami’s real-world Bay Harbor Continental apartment in Bay Harbor Islands served as Dexter’s filming location, making Washington Island its natural Leonida counterpart.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Dexter Rooftop Kill Kit & Boat Discovery' },
      { community: 'r/GamingDetails', label: 'Trinity Apartments AC Unit Breakdown' },
      { community: 'IGN', label: 'Dexter Apartment Location in Vice Beach' },
    ],
    tags: ['dexter', 'trinity apartments', 'slice of life', 'vice beach', 'tv'],
  },
  {
    id: 'ee-13-killer-clown-elevator',
    slug: 'killer-clown-pennywise-haymarket-elevator',
    moduleId: 'easter-eggs',
    indexCode: 'EE-13',
    title: 'Killer Clown (IT / Pennywise) Service Elevator Jump Scare',
    subtitle: 'Red Balloons Inside The Haymarket’s Flickering Lift',
    regionId: 'vice-city',
    subLocation: 'Vice Beach / Ocean Beach — Lobby of The Haymarket Building',
    mapPin: { x: 86, y: 58 },
    category: 'pop-culture',
    complexity: 'conditional',
    referenceOrigin: 'Stephen King’s IT (Pennywise the Dancing Clown)',
    summary:
      'Stepping into a flickering service elevator filled with floating red balloons inside The Haymarket traps the doors shut for a sudden machete-wielding clown lunge.',
    requirements: {
      timeOfDay: 'Nighttime strongly recommended (highest trigger rate)',
      protagonist: 'Either',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Enter The Haymarket Lobby at Night',
        landmarkCue: 'Vice Beach / Ocean Beach',
        instruction:
          'Head to The Haymarket building in Vice Beach / Ocean Beach after dark and walk past the front lobby toward the secondary service elevators.',
      },
      {
        stepNumber: 2,
        title: 'Step Inside the Second Lift With Red Balloons',
        landmarkCue: 'Flickering Overhead Bulb',
        instruction:
          'Look for the second elevator shaft displaying a buzzing, flickering light and floating red balloons inside the cab. Step in and wait for the doors to close.',
      },
      {
        stepNumber: 3,
        title: 'Pop the Remaining Red Balloons to Escape',
        landmarkCue: 'Post-Scare Coupon Drop',
        instruction:
          'After the blackout clown lunge, pop the remaining red balloons inside the elevator cab to release the doors and inspect the gag reward left on the floor.',
      },
    ],
    payoffDescription:
      'The cab plunges into pitch darkness before strobing back on as a painted killer clown lunges at your face with a blade and vanishes—leaving behind a cheeky Rockstar gag item: a coupon for free clean underwear.',
    loreContext:
      'Combines a textbook Stephen King IT homage with classic GTA juvenile humor right after delivering a genuine jump scare.',
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Haymarket Red Balloon Elevator Clip' },
      { community: 'GTABase', label: 'Killer Clown Elevator Location' },
    ],
    tags: ['pennywise', 'it', 'clown', 'red balloons', 'jump scare', 'haymarket'],
  },
  {
    id: 'ee-14-arthur-morgans-hat',
    slug: 'arthur-morgans-genuine-cowboy-hat',
    moduleId: 'easter-eggs',
    indexCode: 'EE-14',
    title: 'Arthur Morgan’s Hat ("Genuine Cowboy Hat")',
    subtitle: 'Buy RDR2’s Iconic Leather Gambler Hat at a Port Gellhorn Yard Sale',
    regionId: 'port-gellhorn',
    subLocation: 'Port Gellhorn — Residential Yard Sale Two Blocks South of Moses’ Garage',
    mapPin: { x: 22, y: 48 },
    category: 'franchise-callback',
    complexity: 'conditional',
    referenceOrigin: 'Red Dead Redemption 2 — Arthur Morgan',
    summary:
      'A daytime neighborhood yard sale in Port Gellhorn quietly sells a weathered brown leather hat with a twisted rope band—letting both Jason and Lucia wear Arthur Morgan’s hat.',
    requirements: {
      timeOfDay: 'Daytime (Dynamic Yard Sale world event)',
      protagonist: 'Either',
      equipment: '$35 cash',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Drive Two Blocks South from Moses’ Garage',
        landmarkCue: 'Port Gellhorn • Past Petrol Station (Left Side)',
        instruction:
          'In Port Gellhorn, drive south down the main road from Moses’ Garage past the petrol station (north of the racetrack) during daytime and watch the left-hand sidewalk for colorful balloons and "Yard Sale" signs.',
        fieldTip:
          'If the yard sale isn’t set up yet, drive a few blocks away, advance daytime hours, and cruise back past the lot.',
      },
      {
        stepNumber: 2,
        title: 'Check the Guitar Case Beside the Far Couch',
        landmarkCue: '$35 Genuine Cowboy Hat Prompt',
        instruction:
          'Walk to the back of the lawn sale near the couch, spot the worn brown cowboy hat resting on a guitar case, and pay ~$35 to purchase the "Genuine Cowboy Hat".',
      },
    ],
    payoffDescription:
      'Permanently adds Arthur Morgan’s unmistakable weathered leather gambler hat (complete with rope band) to your wardrobe for both Lucia and Jason.',
    loreContext:
      'Celebrates Rockstar’s 2018 masterpiece Red Dead Redemption 2 with a wearable keepsake rather than just a static prop.',
    verificationStatus: 'verified',
    sources: [
      { community: 'Eurogamer', label: 'How to Get Arthur Morgan’s Hat in GTA 6' },
      { community: 'PC Gamer', label: 'Port Gellhorn Yard Sale Cowboy Hat' },
      { community: 'r/GTA6', label: 'Genuine Cowboy Hat Wardrobe Showcase' },
    ],
    tags: ['arthur morgan', 'rdr2', 'red dead', 'cowboy hat', 'port gellhorn', 'wardrobe'],
  },
];
