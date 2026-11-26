import type { MythInvestigationEntry } from '../types/atlas';

export const MYTH_INVESTIGATIONS: MythInvestigationEntry[] = [
  {
    id: 'mb-01-leonidan-supremacy-tallaloko',
    slug: 'monument-of-leonidan-supremacy-waink-and-7304-cipher',
    moduleId: 'mysteries',
    indexCode: 'MB-01',
    title: 'Monument of Leonidan Supremacy, WAiNK Signal & the 7304 Cipher',
    subtitle:
      'Cracked Golden Orb, Four Horse Symbols & the Multi-Island Trail to Tallaloko',
    regionId: 'port-gellhorn',
    subLocation:
      'Manifest Canyon (Kelly County) -> Salton Memorial Island -> Dalton Island -> Lake Tallaloko',
    mapPin: { x: 26, y: 32 },
    mythStatus: 'confirmed-clue',
    summary:
      'Early hunters suspected the Manifest Canyon obelisk’s controller rumble and beeps were a standalone Morse code broadcast. While those pings turned out to be the WAiNK scanner flagging Sculpture #23, the four horse carvings genuinely connect to Salton Memorial Island, Dalton Island, and Lake Tallaloko’s locked Evergreen cabin.',
    requirements: {
      timeOfDay: 'Nighttime required for Blanco Memorial floodlight glyphs; severe storm for orb lightning',
      weather: 'Clear night for glyph visibility; thunderstorm to test orb ignition',
      protagonist: 'Either',
      equipment: 'In-game Smartphone (WAiNK app), boat or helicopter for island hops',
      specialCode: {
        label: 'Decrypted Evergreen Cabin Upper-Room Keypad',
        value: '7304',
      },
    },
    communityConsensus:
      'Confirmed multi-location cipher solved across r/GTA6 and r/GTAVIMystery. Cross-referencing the Watson Bay convenience-store cipher key with four landmark symbols (Salton Memorial gold statue = 7, Dalton Island bronze panel = 3, Lake Tallaloko black bell tower = 0, Manifest Canyon green horse = 4) unlocks Evergreen cabin’s secret projection chamber (~$70,000 safe + Tallaloko Knife). Investigators are still testing whether lightning striking the cracked golden orb during a storm unlocks any further phase.',
    whatWasDebunked:
      'The viral launch-week claim that the rhythmic beeps and controller vibration around the Manifest Canyon obelisk are a secret Morse code message is false—they are standard WAiNK app proximity pings for Sculpture #23 (needed for 100% completion). Do not spend hours decoding the WAiNK beep cadence itself; focus on the carved geometric runes.',
    evidenceChain: [
      {
        id: 'mb01-ev1',
        title: 'Manifest Canyon Obelisk & Four Horse Runes',
        locationCue: 'Manifest Canyon, North Kelly County (WAiNK Sculpture #23)',
        detail:
          'The 1982 "Leonidafication" pillar features a cracked golden globe and four metal horses (one wearing a Glasgow-style orange traffic cone). The green horse carries the fourth cipher glyph translating to digit 4.',
        verified: true,
      },
      {
        id: 'mb01-ev2',
        title: 'Watson Bay Cipher Key & Four-Line Verse',
        locationCue: 'Popper’s Convenience Store Back Office Laptop (Watson Bay)',
        detail:
          'In-game emails and the back-office computer database supply both the symbol-to-digit decoder and the four-line poem ("Gold... Bronze... Black... Green...") ordering the four landmarks.',
        verified: true,
      },
      {
        id: 'mb01-ev3',
        title: 'Salton Memorial, Dalton Island & Tallaloko Bell Tower',
        locationCue: 'Salton Memorial Island -> Dalton Island -> West Lake Tallaloko',
        detail:
          'Night floodlights at Blanco Memorial reveal digit 7; Dalton Island’s concrete chamber and Latin plaque ("Et Mirabuntur Inhabitantes Mortalem Terram") give digit 3; the ruined bell tower west of Lake Tallaloko provides digit 0.',
        verified: true,
      },
      {
        id: 'mb01-ev4',
        title: 'Evergreen Cabin Secret Chamber (Keypad 7304)',
        locationCue: 'Lake Tallaloko Gated Resort — Evergreen Cabin Upper Floor',
        detail:
          'Entering 7304 opens an elite-society slide projector room referencing Andrew Node and Leonida power brokers, a ~$70,000 safe, and the unique Tallaloko Knife.',
        verified: true,
      },
      {
        id: 'mb01-ev5',
        title: 'Lightning-Ignited Golden Orb Follow-Up Trigger',
        locationCue: 'Manifest Canyon Obelisk During Severe Night Storm',
        detail:
          'Players confirmed lightning can set the cracked golden orb ablaze during heavy storms, but sleuths have not yet proven whether this triggers a hidden second-act event or is purely atmospheric.',
        verified: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scan Sculpture #23 & Document the Four Horse Symbols',
        landmarkCue: 'Manifest Canyon • North of Port Gellhorn',
        instruction:
          'Approach the Monument of Leonidan Supremacy, scan it with the WAiNK app to clear the proximity pings, read the 1982 plaque, and photograph the geometric symbols on the green horse statue.',
        fieldTip:
          'Ignoring the WAiNK scan keeps the proximity beeping active—scanning it proves the rumble is the app prompt rather than Morse code.',
      },
      {
        stepNumber: 2,
        title: 'Inspect Blanco Memorial at Night & Dalton Island’s Chamber',
        landmarkCue: 'Salton Memorial Island & Dalton Island',
        instruction:
          'Visit Salton Memorial Island off Vice Beach after dark to see floodlight-projected glyphs on the obelisk, then boat to Dalton Island to inspect the hidden concrete room’s wall diagram and Latin inscription.',
      },
      {
        stepNumber: 3,
        title: 'Verify the Ruined Bell Tower & Unlock Evergreen Cabin (7304)',
        landmarkCue: 'Lake Tallaloko • East Lummox County',
        instruction:
          'Check the ruined bell tower west of Lake Tallaloko for the black-bell glyph, then enter the gated Lake Tallaloko resort, head upstairs inside the Evergreen cabin, and punch 7304 into the keypad.',
      },
      {
        stepNumber: 4,
        title: 'Optional Field Test: Observe the Orb in a Thunderstorm',
        landmarkCue: 'Manifest Canyon • Night Storm Weather',
        instruction:
          'Return to Manifest Canyon during a severe electrical storm to witness lightning strike the cracked globe and log any new audio or environmental reactions.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'r/GTA6', label: 'WAiNK Sculpture #23 & Tallaloko 7304 Megathread' },
      { community: 'r/GTAVIMystery', label: 'Salton / Dalton / Monument Cipher Breakdown' },
      { community: 'IGN', label: 'Monument of Leonidan Supremacy Analysis' },
    ],
    tags: [
      'monument of leonidan supremacy',
      'waink',
      'morse code',
      '7304',
      'tallaloko',
      'blanco memorial',
      'dalton island',
      'chiliad',
    ],
    relatedEasterEggSlug: 'monument-of-leonidan-supremacy-manifest-canyon',
    featured: true,
  },
  {
    id: 'mb-02-project-rumba-russo-iaa',
    slug: 'project-rumba-iaa-president-russo-conspiracy',
    moduleId: 'mysteries',
    indexCode: 'MB-02',
    title: 'Project Rumba, IAA Black Sites & President Russo Conspiracy',
    subtitle:
      'From Friends of Freedom & Sharktooth Bunker to the 5 Mind-Conditioning Loops',
    regionId: 'vice-city',
    subLocation:
      'Downtown Vice City (Friends of Freedom) -> Little Cuba -> Sharktooth Island -> Big Pines',
    mapPin: { x: 75, y: 50 },
    mythStatus: 'confirmed-clue',
    summary:
      'Starting with a drunken ex-patsy at Downtown Vice City’s IAA memorial, this verified Cold War conspiracy spans two hidden underground bunkers, an alien-summit photograph on Mount Chiliad, and a five-loop MKUltra conditioning sequence.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'In-game Smartphone (WAiNK scanner) & boat/helicopter for Sharktooth Island',
      specialCode: {
        label: 'Confirmed Bunker & Loop Codes',
        value: '010317 (Sharktooth)  •  2975 (Safe)  •  085355 (Big Pines)  •  09-06-07 (Loop 3)',
      },
    },
    communityConsensus:
      'Core bunker chain and all 5 Project Rumba conditioning loops are 100% solved and repeatable, awarding President Russo’s 1922 Pistol, the Cold War 556 rifle, a respawning Hauners Ridgway tank, a permanent Focus stat boost, and the Brainwash tattoo. The lingering open thread is the framed Sharktooth bunker photo depicting President Russo meeting an extraterrestrial delegate on Mount Chiliad—strongly linking the IAA black site to the South Point UFO bunker.',
    whatWasDebunked:
      'Trying to force open the Big Pines ground hatch before decrypting the "OBSESS" photo clue—or dialing "OBSESS" letters on your phone—does nothing. The hatch strictly takes calculator-flipped digits 085355, and the conditioning chair room only opens after clearing both bunkers and revisiting the Big Pines console.',
    evidenceChain: [
      {
        id: 'mb02-ev1',
        title: 'Jose Bermudez & Little Cuba Recording',
        locationCue: 'Friends of Freedom Monument -> NW 4th Ave, Little Cuba',
        detail:
          'Scanning the memorial and talking to Jose Bermudez leads to his salmon-colored Little Cuba apartment, where a framed picture and audio tape reveal code 010317.',
        verified: true,
      },
      {
        id: 'mb02-ev2',
        title: 'Sharktooth Island Bunker #1 & Mount Chiliad Alien Photo',
        locationCue: 'Sharktooth Island (North of Waning Sands) • Door 010317 / Safe 2975',
        detail:
          'Restoring power reveals a Cold War conference table and a photo of President Russo greeting an alien envoy on Mount Chiliad. Safe 2975 holds Russo’s 1922 Pistol and the upside-down "OBSESS" clue.',
        verified: true,
      },
      {
        id: 'mb02-ev3',
        title: 'Big Pines IAA Black Site & Project Rumba Dossier',
        locationCue: 'Big Pines Woods (North Mariana County) • Hatch 085355',
        detail:
          'Documents confirm Project Rumba conditioned operatives to snap into violent frenzy upon hearing rumba music after Russo refused war with Cuba. Unlocks the Cold War 556 and Hauners Ridgway tank.',
        verified: true,
      },
      {
        id: 'mb02-ev4',
        title: 'Five-Loop Psychological Conditioning Sequence',
        locationCue: 'Big Pines Bunker Console -> Unlocked Hallway Chair Room',
        detail:
          'Returning to press the master console switch opens the conditioning chair, leading through five shifting loops (Loop 3 keypad 09-06-07) for a permanent Focus boost and Brainwash tattoo.',
        verified: true,
      },
      {
        id: 'mb02-ev5',
        title: 'Cross-Link Between Russo’s Chiliad Photo & South Point Airfield Lab',
        locationCue: 'Sharktooth Conference Room <-> South Point Underground Bunker',
        detail:
          'Lore theorists suspect the IAA faction behind Project Rumba also oversees the South Point Airfield cattle/alien facility, though no in-game trigger directly merges the two quests yet.',
        verified: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Interview Jose Bermudez & Search Little Cuba',
        landmarkCue: 'Friends of Freedom Monument -> NW 4th Ave',
        instruction:
          'Visit the Friends of Freedom memorial in Downtown Vice City, scan with WAiNK, talk to Jose Bermudez, and check his salmon-colored Little Cuba apartment for the audio clue and code 010317.',
      },
      {
        stepNumber: 2,
        title: 'Breach Sharktooth Bunker #1 & Inspect the Alien Photo',
        landmarkCue: 'Sharktooth Island • Door 010317 / Safe 2975',
        instruction:
          'Enter 010317 at the Sharktooth Island bunker, restore power, examine the Mount Chiliad alien-delegate photo in the conference room, sit at the president’s desk for Protocol #2 audio, and crack safe 2975.',
      },
      {
        stepNumber: 3,
        title: 'Clear Big Pines Black Site With Hatch Code 085355',
        landmarkCue: 'Big Pines Highway Woods • North Mariana County',
        instruction:
          'Flip "OBSESS" into 085355 at the Big Pines ground hatch, power the facility, read the Project Rumba files, and claim the Cold War 556 rifle and Hauners Ridgway tank.',
      },
      {
        stepNumber: 4,
        title: 'Revisit the Console & Break the 5 Mind-Conditioning Loops',
        landmarkCue: 'Big Pines Chair Chamber • Loop 3 Keypad 09-06-07',
        instruction:
          'Re-enter the Big Pines bunker, press the console master switch, sit in the unlocked hallway conditioning chair, and complete all five loops using code 09-06-07 on Loop 3.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'GameSpot', label: 'Project Rumba & President Russo Bunker Guide' },
      { community: 'GTABase', label: 'Sharktooth & Big Pines IAA Conspiracy Breakdown' },
      { community: 'GTATown', label: '5-Loop Mind Conditioning & 09-06-07 Solution' },
    ],
    tags: [
      'project rumba',
      'president russo',
      'iaa',
      'bunker',
      '010317',
      '085355',
      '09-06-07',
      'mkultra',
      'chiliad',
    ],
    relatedEasterEggSlug: 'project-rumba-iaa-mind-conditioning-loops',
    featured: true,
  },
  {
    id: 'mb-03-belville-simulation-foiled-329',
    slug: 'belville-simulation-lair-foiled-issue-329',
    moduleId: 'mysteries',
    indexCode: 'MB-03',
    title: 'Belville Simulation Lair & Foiled Issue 329 Meta-Board',
    subtitle:
      'Five-Year Lil’ Probe’Inn Payoff Linking Cryptids, Russo & "J + L Are the Only Free Ones"',
    regionId: 'leonard-county',
    subLocation: 'Belville — Cream/Yellow House Beside the Cellerica Billboard',
    mapPin: { x: 64, y: 33 },
    mythStatus: 'confirmed-clue',
    summary:
      'The suburban house teased back in 2021 inside San Andreas’s Lil’ Probe’Inn UFO bar hides a fourth-wall conspiracy garage whose red-string board and Foiled Issue 329 magazine tie together nearly every major Leonida myth.',
    requirements: {
      timeOfDay: 'Daytime recommended for reading sticky notes and magazine print',
      protagonist: 'Either',
    },
    communityConsensus:
      'Confirmed meta-hub and lore index for Leonida’s mystery web. Beyond solving the 2021 Definitive Edition teaser photo, Foiled Issue 329 on the lair bed explicitly groups the Grassrivers Skunk Ape, President Russo’s assassination, and Mount Chiliad into a single canon checklist—leading hunters to cross-reference the board’s remaining sticky notes for undiscovered triggers.',
    whatWasDebunked:
      'Early rumors claimed you could book a working flight out of Leonida using the failed Los Santos ticket details pinned to the corkboard, or encounter the missing simulation theorist NPC returning to the garage at 3:00 AM. Both have been ruled out—the empty lair and failed bookings are permanent environmental clues.',
    evidenceChain: [
      {
        id: 'mb03-ev1',
        title: '2021 Lil’ Probe’Inn Photograph Match',
        locationCue: 'Belville • Cream House With Two Front Palm Trees',
        detail:
          'Matches the exact house facade added to GTA: San Andreas – Definitive Edition’s UFO bar five years before launch, confirming long-term Rockstar mystery seeding.',
        verified: true,
      },
      {
        id: 'mb03-ev2',
        title: 'Fourth-Wall Simulation Corkboard ("J + L Are the Only Free Ones")',
        locationCue: 'Belville Double Garage Interior (Crawl-Under Entry)',
        detail:
          'Pinboards document despawning vehicles, unreachable state borders ("Why can’t I leave Leonida?"), repeated pedestrian faces, and sticky notes deducing that Jason and Lucia are the sole free-willed agents.',
        verified: true,
      },
      {
        id: 'mb03-ev3',
        title: 'Readable Foiled Magazine — Issue 329',
        locationCue: 'Resting on the Garage Lair Bed',
        detail:
          'Cover and articles explicitly connect the Skunk Ape cryptid, the presidential assassination conspiracy (President Russo), and Mount Chiliad sightings.',
        verified: true,
      },
      {
        id: 'mb03-ev4',
        title: 'Identity & Current Whereabouts of the Garage Theorist',
        locationCue: 'Unresolved Cross-Map NPC Trail',
        detail:
          'Community sleuths are checking radio callers, internet forums, and Leonard County strangers to see whether the missing Belville resident appears elsewhere in Leonida.',
        verified: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Two-Palm Cream House Next to Cellerica',
        landmarkCue: 'Belville • Leonard County',
        instruction:
          'Drive into Belville and look for the cream/yellow suburban home with two front palm trees beside the Cellerica "Dream House" billboard.',
      },
      {
        stepNumber: 2,
        title: 'Hit the Analog Sweet Spot to Lift the Garage Door',
        landmarkCue: 'White Double Garage Bottom Edge',
        instruction:
          'Crouch flush against the bottom lip of the garage door and slowly rotate your right stick (or mouse) until the circular interaction gauge locks on and lifts the door enough to crawl under.',
      },
      {
        stepNumber: 3,
        title: 'Photograph the Corkboard & Read Foiled Issue 329',
        landmarkCue: 'Garage Wall & Bedside Magazine',
        instruction:
          'Use first-person zoom or your smartphone camera to read the "J + L" sticky notes, Los Santos flight rejections, and the full cover/articles of Foiled Issue 329 on the bed.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'PC Gamer', label: 'Belville San Andreas Teaser House Discovery' },
      { community: 'Red Bull Gaming', label: 'Simulation Garage & Foiled Issue 329 Breakdown' },
      { community: 'IGN', label: 'Belville Fourth-Wall Conspiracy Guide' },
    ],
    tags: [
      'belville',
      'simulation',
      'foiled',
      'issue 329',
      'san andreas',
      'lil probe inn',
      'fourth wall',
      'skunk ape',
    ],
    relatedEasterEggSlug: 'belville-simulation-house-san-andreas-teaser',
    featured: true,
  },
  {
    id: 'mb-04-meteorite-network-kalaga',
    slug: 'leonida-meteorite-network-mount-kalaga-stone-circle',
    moduleId: 'mysteries',
    indexCode: 'MB-04',
    title: 'Leonida Meteorite Network & Mount Kalaga Stone Circle',
    subtitle:
      'Summit Incense Cairn, Purple-Fog Crater, Exploding Whale Rock & Scattered Fragments',
    regionId: 'mount-kalaga',
    subLocation:
      'Mount Kalaga Summit & East Slope (Lummox County) <-> Capri Strait Whale Beach & Underwater Caves',
    mapPin: { x: 44, y: 15 },
    mythStatus: 'active-hypothesis',
    summary:
      'Mount Kalaga’s summit stone circle overlooks a purple-fog meteorite crater that warps your vision when looted—while a second high-profile meteorite blasts out of a beached whale and dozens more glow across Leonida’s caves and wrecks. Hunters are testing whether the cairn hides an active ritual trigger.',
    requirements: {
      timeOfDay: 'Nighttime strongly recommended (purple fog and meteorite chunks glow in the dark)',
      protagonist: 'Either',
      equipment: 'Parachute, Scuba Gear for cave chunks (Selkie Hole), dirt bike or helicopter for Kalaga peak',
      specialCode: {
        label: 'Nearby Mount Kalaga Firewatch Tower Code',
        value: '69185',
      },
    },
    communityConsensus:
      'Active investigation. Players confirmed that meteorite fragments are a widespread nocturnal collectible network (including the Mount Kalaga purple-fog crater, the Capri Strait exploding whale carcass, Selkie Hole underwater tunnels, and downed aircraft wrecks) that can be sold at pawn shops. However, because the Mount Kalaga summit stone circle features a burnt incense cairn, lanterns, and a bizarrely placed mobility scooter—plus a locked firewatch tower (`69185`) tied to local lore—sleuths are actively testing full-collection or weather/time triggers at the cairn.',
    whatWasDebunked:
      'Early rumors of a secret "3rd RDR2-style meteorite" locked behind blowing up the beached whale at exactly 3:00 AM are inaccurate: Leonida actually contains many scattered glowing meteorite chunks (not just three), and the Capri Strait whale explodes automatically on proximity without a midnight timer.',
    evidenceChain: [
      {
        id: 'mb04-ev1',
        title: 'Mount Kalaga Summit Stone Circle & Incense Cairn',
        locationCue: 'Mount Kalaga Peak • Lummox County',
        detail:
          'A deliberate ring of standing stones surrounds a stacked cairn with a burnt incense stick, glowing lanterns, a parachute, and an unexplained mobility scooter.',
        verified: true,
      },
      {
        id: 'mb04-ev2',
        title: 'Eastern-Slope Purple-Fog Impact Crater',
        locationCue: 'Upper Eastern Slope Below Kalaga Summit (Night Glow)',
        detail:
          'Visible from the stone circle rim after dark; looting the glowing meteorite inside the scorched campsite triggers a surreal purple-and-green distortion haze.',
        verified: true,
      },
      {
        id: 'mb04-ev3',
        title: 'Exploding Beached Whale Meteorite Fragment',
        locationCue: 'Unmarked Beach SW of Gellhorn Raceway (Capri Strait)',
        detail:
          'When the bloated whale detonates, a collectible meteorite piece scatters across the sand alongside contraband bricks, the Nipper pistol, and a wheelchair.',
        verified: true,
      },
      {
        id: 'mb04-ev4',
        title: 'Leonida-Wide Glowing Fragment & Selkie Hole Network',
        locationCue: 'Selkie Hole Caves, Isolated Keys & Aircraft Wrecks',
        detail:
          'Community maps have cataloged scattered glowing meteorite chunks tucked in underwater tunnels, dead trees, and crash sites—all pawnable for cash.',
        verified: true,
      },
      {
        id: 'mb04-ev5',
        title: 'Summit Cairn Ritual / Full-Collection Cosmic Trigger',
        locationCue: 'Mount Kalaga Stone Circle (Under Active Community Testing)',
        detail:
          'Investigators are testing whether holding unsold meteorites at the summit cairn during specific moon phases, lightning storms, or 100% completion activates a hidden UFO or sky event.',
        verified: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Inspect the Mount Kalaga Summit Stone Circle After Dark',
        landmarkCue: 'Mount Kalaga Peak • Lummox County',
        instruction:
          'Reach the summit at night, examine the incense cairn, lanterns, and mobility scooter, and scan the eastern mountainside below for a distinct pocket of glowing purple fog.',
      },
      {
        stepNumber: 2,
        title: 'Glide Into the Scorched Campsite & Hold the Meteorite',
        landmarkCue: 'Purple-Fog Crater',
        instruction:
          'Parachute or hike down to the crater, collect the glowing meteorite to trigger the purple-green haze, and consider keeping at least one unsold fragment in your inventory for summit testing.',
        fieldTip:
          'Make a manual save before fencing meteorites at pawn shops in case a future cairn or ritual trigger requires carrying them.',
      },
      {
        stepNumber: 3,
        title: 'Check the Nearby Firewatch Tower (Code 69185)',
        landmarkCue: 'Mount Kalaga National Park Firewatch',
        instruction:
          'Visit the nearby firewatch tower and unlock it with code 69185 to inspect local conspiracy notes tied to northern Leonida anomalies.',
      },
      {
        stepNumber: 4,
        title: 'Cross-Check the Capri Strait Whale & Selkie Hole Chunks',
        landmarkCue: 'SW of Gellhorn Raceway & Emerald Springs Caves',
        instruction:
          'Trigger the exploding whale southwest of Gellhorn Raceway for its meteorite fragment and dive into Selkie Hole at night to log faint-glowing space rocks across biomes.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Sportskeeda', label: 'Mount Kalaga Stone Circle & Purple-Fog Crater' },
      { community: 'GTABase', label: 'Leonida Glowing Meteorite Fragment Map Notes' },
      { community: 'r/GTA6', label: 'Kalaga Cairn & Whale Meteorite Theory Thread' },
    ],
    tags: [
      'meteorite',
      'mount kalaga',
      'stone circle',
      'purple fog',
      'exploding whale',
      'selkie hole',
      '69185',
    ],
    relatedEasterEggSlug: 'mount-kalaga-summit-stone-circle-meteorite',
    featured: true,
  },
  {
    id: 'mb-05-manifest-canyon-surveillance-caller',
    slug: 'manifest-canyon-786-555-0145-surveillance-caller',
    moduleId: 'mysteries',
    indexCode: 'MB-05',
    title: 'Manifest Canyon 786-555-0145 Surveillance Caller',
    subtitle:
      'Who Is Digitally Tracking Jason’s Classified Military Past From Chapter 1?',
    regionId: 'port-gellhorn',
    subLocation: 'Manifest Canyon Hills (South of Grayson, NE of Port Gellhorn) & Badger R&D Sites',
    mapPin: { x: 33, y: 36 },
    mythStatus: 'active-hypothesis',
    summary:
      'Trespassing past an automated loudspeaker inside a fenced Manifest Canyon cellular compound marked 786-555-0145 makes Jason’s phone ring with an icy female caller who recites details of his military discharge and private security work.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Jason',
      storyProgress: 'Verified during Chapter 1 free roam (may be missable after later chapters)',
      specialCode: {
        label: 'Compound Warning Sign Phone Number',
        value: '786-555-0145',
      },
    },
    communityConsensus:
      'Confirmed hidden Chapter 1 scripted encounter, but the caller’s true identity remains unresolved. Leading hypotheses on r/GTA6 and GTAForums split between (1) an IAA intelligence handler tied to Leonida’s black-site network, (2) a private military contractor monitoring Jason after his expulsion, or (3) a surveillance sub-unit tied to Badger R&D’s communications grid.',
    whatWasDebunked:
      'Players tried breaching the locked cellular utility hut with explosives, heavy vehicles, and late-game keycards—the hut has no enterable interior. Attempting to trigger the exact same Jason-specific military monologue while playing solo as Lucia also fails to fire the call.',
    evidenceChain: [
      {
        id: 'mb05-ev1',
        title: '786-555-0145 Compound Sign & Automated Perimeter Speaker',
        locationCue: 'Manifest Canyon Hills • Floodlit Red-and-White Lattice Tower',
        detail:
          'A fenced utility hut posts warning number 786-555-0145 and blasts an automated loudspeaker warning the moment you step inside the chain-link perimeter.',
        verified: true,
      },
      {
        id: 'mb05-ev2',
        title: 'Unknown Female Caller Dossier on Jason',
        locationCue: 'Incoming Smartphone Call Inside Compound (Chapter 1, Jason)',
        detail:
          'Staying past the warning triggers an incoming Unknown call where a calm woman recites Jason’s background ("Ex-military... kicked out... private security gigs"), proving active digital surveillance.',
        verified: true,
      },
      {
        id: 'mb05-ev3',
        title: 'Badger R&D / Key Lento Cellular Network Overlap',
        locationCue: 'Manifest Canyon <-> Key Lento Badger R&D Tower Signage',
        detail:
          'Community researchers noticed the exact same 786-555-0145 warning placard style appearing on Badger R&D cellular infrastructure, suggesting a statewide monitoring grid.',
        verified: true,
      },
      {
        id: 'mb05-ev4',
        title: 'Identity of the Caller & Late-Game Callback Dialogue',
        locationCue: 'Unresolved Narrative / Chapter Progression Lead',
        detail:
          'Sleuths are still checking whether redialing 786-555-0145 during later chapters or after clearing the IAA bunkers unlocks a second voice line or reveals the caller’s faction.',
        verified: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Drive to the Manifest Canyon Cellular Hut as Jason (Ch. 1)',
        landmarkCue: 'South of Grayson • NE of Port Gellhorn',
        instruction:
          'During Chapter 1, travel as Jason into the hills northeast of Port Gellhorn until you locate the floodlit red-and-white lattice tower surrounding a fenced utility hut.',
      },
      {
        stepNumber: 2,
        title: 'Log the 786-555-0145 Sign & Ignore the Loudspeaker',
        landmarkCue: 'Chain-Link Perimeter Gate',
        instruction:
          'Read the 786-555-0145 signage, step past the gate when the automated security speaker warns you off, and try opening the sealed hut door.',
      },
      {
        stepNumber: 3,
        title: 'Answer the Unknown Call & Test Manual Redials',
        landmarkCue: 'Jason’s Smartphone',
        instruction:
          'Stay inside the fence until Jason’s phone rings from an Unknown caller, listen to the full military-history warning, and test dialing 786-555-0145 directly to log any busy tone or response.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Chapter 1 Manifest Canyon Surveillance Call Clip' },
      { community: 'GTAForums', label: '786-555-0145 Caller Faction Speculation Thread' },
      { community: 'MiddleEastGamer', label: 'Badger R&D & 786-555-0145 Tower Signage' },
    ],
    tags: [
      '786-555-0145',
      'surveillance',
      'jason',
      'manifest canyon',
      'badger r&d',
      'phone call',
      'chapter 1',
    ],
    relatedEasterEggSlug: 'manifest-canyon-radio-tower-surveillance-call',
  },
  {
    id: 'mb-06-key-lento-immortal-man',
    slug: 'key-lento-immortal-man-anomaly-mechanics',
    moduleId: 'mysteries',
    indexCode: 'MB-06',
    title: 'The Key Lento "Immortal Man" Anomaly',
    subtitle:
      'Confirmed Sniper-Scope Trigger, Temporary God-Mode Mechanics & Unresolved Lore Origin',
    regionId: 'leonida-keys',
    subLocation: 'Key Lento — Top Platform of Badger R&D Radio Tower',
    mapPin: { x: 66, y: 82 },
    mythStatus: 'active-hypothesis',
    summary:
      'Spotting a lone pedestrian below Key Lento’s Badger R&D tower through the summit sniper rifle triggers a chilling throat-slit gesture and a bulletproof sprint straight up the mast. Community testing has mapped his exact immunity window—while his lore origin remains fiercely debated.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
      equipment: 'Shrewsbury SM-69 Sniper Rifle & Parachute (both spawn at tower peak)',
    },
    communityConsensus:
      'Confirmed deliberate scripted horror Easter egg (not a random rendering bug). While the encounter audio sting is active, the stalker runs with scripted damage immunity and delivers an instant one-punch WASTED knockout; breaking the script by parachuting away or leaving his immediate pursuit zone either despawns him or drops his immunity flag. Theorists remain divided on whether he is a fourth-wall "It Follows" supernatural entity, a Florida bath-salts parody, or tied to nearby Badger R&D tower graffiti.',
    whatWasDebunked:
      'Viral clips claiming you can kill the Immortal Man mid-pursuit on the tower using explosive sniper rounds, RPGs, sticky bombs, or dropping vehicles on him are misleading—bullets and blasts fail to kill him while his active hunt script is running. Only breaking the encounter script (escaping via parachute or outrunning the horror cue) removes his invulnerability.',
    evidenceChain: [
      {
        id: 'mb06-ev1',
        title: 'Summit SM-69 Sniper & Parachute Placement',
        locationCue: 'Key Lento • Highest Platform of Badger R&D Radio Tower',
        detail:
          'Rockstar deliberately placed a Shrewsbury SM-69 rifle right beside an escape parachute at the peak—framing the entire encounter as an intentional sniper-scope trap.',
        verified: true,
      },
      {
        id: 'mb06-ev2',
        title: 'Long-Range Scope Eye-Contact & Throat-Slit Trigger',
        locationCue: 'Residential Decks & Waterfront Below Tower',
        detail:
          'Holding your crosshair on the lone standing male NPC (shorts and light shirt) causes him to freeze, lock straight onto your lens from extreme range, draw a finger across his throat, and trigger horror music.',
        verified: true,
      },
      {
        id: 'mb06-ev3',
        title: 'Scripted Pursuit Immunity & Line-of-Sight Teleportation',
        locationCue: 'Tower Base & Ladder Ascent',
        detail:
          'Repeated Reddit stress tests verified he ignores gunfire and explosives during the active sprint, can close distance unnaturally if you look away, and knocks you out in one punch.',
        verified: true,
      },
      {
        id: 'mb06-ev4',
        title: 'Hidden Lore Tie to Badger R&D Tower Graffiti or Secondary Spawn',
        locationCue: 'Key Lento Tower Base & Surrounding Keys (Unconfirmed)',
        detail:
          'Myth hunters are investigating cryptic graffiti around the tower and testing whether the same stalker can be lured or spotted from other Leonida sniper perches.',
        verified: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Climb to the Highest Platform of Badger R&D Tower',
        landmarkCue: 'Key Lento • Past the Radio Storage Room',
        instruction:
          'Climb the exterior vertical ladders all the way to the top deck where the Shrewsbury SM-69 sniper rifle and parachute spawn side by side.',
      },
      {
        stepNumber: 2,
        title: 'Lock Onto the Lone Pedestrian Below & Watch for the Gesture',
        landmarkCue: 'Waterfront Decks / Caravan Area',
        instruction:
          'Pick up the SM-69, zoom onto the residential decks and streets below until you find the lone standing man in a light shirt and shorts, and hold focus until the horror sting hits.',
      },
      {
        stepNumber: 3,
        title: 'Verify Script Reset via Parachute Escape',
        landmarkCue: 'Parachute Base Jump',
        instruction:
          'Don’t waste ammo trying to tank him on the platform—grab the parachute and jump off before he tops the ladder to verify the audio cue ending and his despawn/immunity reset.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Immortal Man Immunity & Script-Break Testing' },
      { community: 'GameSpot', label: 'Key Lento Immortal Man Stalker Breakdown' },
      { community: 'Notebookcheck', label: 'Immortal Man Origin & Mechanics Analysis' },
    ],
    tags: [
      'immortal man',
      'key lento',
      'badger r&d',
      'sniper',
      'it follows',
      'unkillable',
      'debunked kills',
    ],
    relatedEasterEggSlug: 'immortal-man-sniper-scope-stalker',
  },
  {
    id: 'mb-07-hotline-miami-rooster-mask-debunked',
    slug: 'hotline-miami-wearable-rooster-mask-rumor-debunked',
    moduleId: 'mysteries',
    indexCode: 'MB-07',
    title: 'Wearable Hotline Miami Rooster ("Richard") Mask Rumor',
    subtitle:
      'Ambient Crime-Scene Nod Confirmed Real—Story-Mode Wearable Unlock Confirmed False',
    regionId: 'vice-city',
    subLocation: 'Vice City Crime-Scene Encounters & Local Mask / Apparel Shops',
    mapPin: { x: 77, y: 58 },
    mythStatus: 'debunked',
    summary:
      'Viral short-form clips claimed players could loot or unlock a wearable Hotline Miami "Richard" rooster mask for Jason and Lucia after spotting a rooster-masked NPC at an ambient crime scene. Community testing on r/GTA6 and r/GTAVI confirms the mask cannot be picked up or worn in story mode.',
    requirements: {
      timeOfDay: 'Anytime',
      protagonist: 'Either',
    },
    communityConsensus:
      'Debunked as a wearable unlock. Players have indeed spotted a subtle Hotline Miami nod via an ambient crime-scene/torture encounter featuring an NPC in a rooster mask, which sparked massive hunts through Vice City clothing stores and alleyways. However, thorough wardrobe audits across r/GTA6 and r/GTAVI confirm no wearable rooster mask exists in single-player story mode; players hoping for a full Jacket outfit are waiting on future online/DLC additions.',
    whatWasDebunked:
      'Save yourself hours of reloading encounters or scouring Vice City mask shops: you CANNOT loot the rooster mask off the crime-scene NPC, unlock it via a secret phone call, or buy it at any story-mode apparel vendor. Social media clips showing Jason wearing a pristine Richard mask are either GTA Online throwback outfits (owl/bird masks + varsity jacket) or edited hoaxes.',
    evidenceChain: [
      {
        id: 'mb07-ev1',
        title: 'Ambient Crime-Scene Rooster-Mask NPC Sighting',
        locationCue: 'Vice City / Leonida Ambient Crime-Scene Encounter',
        detail:
          'Confirmed environmental homage: players documented an ambient crime/torture setup featuring an NPC wearing a rooster mask evoking Hotline Miami’s Jacket.',
        verified: true,
      },
      {
        id: 'mb07-ev2',
        title: 'Story-Mode Wardrobe & Vendor Audit',
        locationCue: 'All Vice City & Leonida Apparel / Mask Vendors',
        detail:
          'Exhaustive community checks across r/GTA6, r/GTAVI, and r/HotlineMiami confirmed zero equippable rooster/chicken mask items exist in story-mode shops or drops.',
        verified: true,
      },
      {
        id: 'mb07-ev3',
        title: 'Claimed "Secret 50 Blessings Drop" & Lootable Prop',
        locationCue: 'Circulated TikTok / YouTube Rumors',
        detail:
          'Tested and disproven: defeating or looting the ambient NPC never drops a wearable headgear prompt, and no hidden 50 Blessings phone trigger unlocks the mask.',
        verified: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Separate the Real Environmental Homage From Fake Unlock Guides',
        landmarkCue: 'Vice City Street Encounters',
        instruction:
          'Appreciate the ambient rooster-mask crime-scene nod if you encounter it in free roam, but do not reload saves expecting a headgear pickup prompt to spawn.',
      },
      {
        stepNumber: 2,
        title: 'Skip Unverified "Secret Mask Shop" Routes',
        landmarkCue: 'Vice City & Vice Beach Apparel Stores',
        instruction:
          'No hidden backroom apparel shop currently sells a Richard rooster mask in story mode—stick to verified wardrobe unlocks (like Arthur’s Hat, Tommy’s Hawaiian Shirt, and the J & L caps).',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'r/GTA6', label: 'Hotline Miami Rooster Mask Wearability Confirmation' },
      { community: 'r/GTAVI', label: 'Story-Mode Mask Inventory & Jacket Outfit Thread' },
      { community: 'r/HotlineMiami', label: 'Leonida Crime-Scene Reference Discussion' },
    ],
    tags: [
      'hotline miami',
      'rooster mask',
      'richard',
      'jacket',
      'debunked',
      'wearable',
      'rumor',
      'dead end',
    ],
  },
  {
    id: 'mb-08-living-kraken-boss-megalodon-debunked',
    slug: 'living-deep-sea-kraken-boss-and-megalodon-debunked',
    moduleId: 'mysteries',
    indexCode: 'MB-08',
    title: 'Living Deep-Sea "Kraken Boss" & Outer-Trench Megalodon Hunt',
    subtitle:
      'Gloriana Key’s Giant Kraken Is a Static Steel Sculpture—And No Megalodon Spawns',
    regionId: 'offshore-waters',
    subLocation: 'Leonida Deep Ocean — Abyssal Seabed Southeast of Gloriana Key',
    mapPin: { x: 89, y: 74 },
    mythStatus: 'debunked',
    summary:
      'Murky abyssal footage of tentacles crushing a sunken ship southeast of Gloriana Key convinced players a live Kraken boss (and a hidden Megalodon shark) lurked in Leonida’s deep trenches. Close-range scuba inspection puts both sea-monster boss rumors to rest.',
    requirements: {
      timeOfDay: 'Daytime strongly recommended for clear seabed inspection',
      protagonist: 'Either',
      equipment: 'Boat, Scuba Gear & Arras Bullhead Speargun (for regular patrolling sharks)',
    },
    communityConsensus:
      'Confirmed dead end for monster-boss hunters. The Gloriana Key Kraken is a genuine, atmospheric Underwater Discovery (#1–33), but up close it is strictly an inanimate sculpture of rusted steel beams and coral-encrusted plates wrapped around a wreck. Likewise, no living Megalodon shark boss exists anywhere in unmodded Leonida waters.',
    whatWasDebunked:
      'Do not waste scuba tanks shooting the Kraken’s tentacles with your speargun, dropping chum at 3:00 AM during storms, or circling the map’s outer death-barrier hoping to summon a living Kraken or Megalodon shark. The Kraken has zero AI, animation, or attack triggers, and giant-shark boss videos are recycled clickbait or fake edits.',
    evidenceChain: [
      {
        id: 'mb08-ev1',
        title: 'Up-Close Scuba Inspection of the Gloriana Key Kraken',
        locationCue: 'Deep Seabed Southeast of Gloriana Key',
        detail:
          'Illuminating the wreck up close reveals riveted steel plates, twisted iron girders, and heavy coral buildup shaped into colossal tentacles—not a living creature.',
        verified: true,
      },
      {
        id: 'mb08-ev2',
        title: 'Weapon, Time-of-Day & Storm Wake-Up Tests',
        locationCue: 'Gloriana Key Trench (Day / Night / Storm)',
        detail:
          'Speargun hits, underwater explosives, and midnight storm dives produce zero movement, hit markers, or boss health reactions.',
        verified: true,
      },
      {
        id: 'mb08-ev3',
        title: 'Outer-Trench Megalodon Spawn Sweeps',
        locationCue: 'Leonida Deep Ocean Maritime Perimeter',
        detail:
          'Standard sharks patrol wrecks and deep water (and the Jaws Orca encounter spawns a large aggressive shark in Leonida Bay), but no prehistoric Megalodon boss exists.',
        verified: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Dive to the Gloriana Key Wreck in Daylight for Visual Confirmation',
        landmarkCue: 'Southeast of Gloriana Key',
        instruction:
          'Launch a boat during bright daytime, equip Scuba Gear, and descend straight to the shipwreck so clear visibility reveals the rusted steel-beam tentacles.',
      },
      {
        stepNumber: 2,
        title: 'Log the Underwater Discovery & Move On',
        landmarkCue: '33 Underwater Discoveries Set',
        instruction:
          'Count the metal Kraken wreck toward Leonida’s 33 Underwater Discoveries, keep your speargun ready only for normal patrolling sharks, and skip fake midnight boss-summon guides.',
      },
    ],
    verificationStatus: 'verified',
    sources: [
      { community: 'Sportskeeda', label: 'Gloriana Key Kraken Metal Sculpture Confirmation' },
      { community: 'GameSpot', label: 'Underwater Kraken Dive Guide' },
      { community: 'r/GTA6', label: 'Deep Ocean Megalodon & Boss Rumor Debunk' },
    ],
    tags: [
      'kraken',
      'megalodon',
      'boss',
      'debunked',
      'gloriana key',
      'underwater',
      'sculpture',
      'dead end',
    ],
    relatedEasterEggSlug: 'underwater-metal-kraken-gloriana-key',
  },
  {
    id: 'mb-09-malibu-2002-tommy-vercetti-room-debunked',
    slug: 'malibu-club-2002-meet-tommy-vercetti-door-debunked',
    moduleId: 'mysteries',
    indexCode: 'MB-09',
    title: 'Hidden "Meet Tommy Vercetti Alive" Door in 2002 Malibu Club',
    subtitle:
      'What the LIFEISPASSINGMEBY Portal Actually Unlocks vs. Fake Follow-Up Rumors',
    regionId: 'vice-city',
    subLocation: 'LPL Turtle Head Power Station (Reactor 2) -> 2002 PS2 Malibu Club Interior',
    mapPin: { x: 68, y: 61 },
    mythStatus: 'debunked',
    summary:
      'After the community cracked the 12-substation LIFEISPASSINGMEBY portal into 2002’s low-poly Malibu Club, rumors exploded claiming a second hidden door or entering as Lucia lets you meet Tommy Vercetti alive or walk outside into the entire 2002 PS2 Vice City map.',
    requirements: {
      timeOfDay: 'Portal Window: 19:00–06:00 (7 PM – 6 AM)',
      protagonist: 'Jason',
      storyProgress: 'Requires completing all 12 LPL substations manually without switching protagonists',
    },
    communityConsensus:
      'Confirmed debunked. The 2002 Malibu Club portal is completely solved: Kent Paul (voiced by Danny Dyer) is the sole interactive character upstairs, the club interior is a self-contained nostalgia set piece with sealed exterior doors, and returning to modern Leonida permanently awards Tommy Vercetti’s blue floral Hawaiian shirt plus the Western Malibu Zombie Bomber motorcycle.',
    whatWasDebunked:
      'Do not reset your 12-substation run trying to enter Reactor 2 as Lucia (switching characters or fast-traveling resets the substation grid to zero), and do not hunt for a "second PS2 cheat sequence" inside the club—there is no hidden Tommy Vercetti NPC cameo and no playable 2002 open-world Vice City outside the Malibu doors.',
    evidenceChain: [
      {
        id: 'mb09-ev1',
        title: 'Confirmed Kent Paul Encounter & Permanent Rewards',
        locationCue: '2002 PS2 Malibu Club Upstairs Office',
        detail:
          'Talking to Kent Paul completes the sequence and permanently unlocks Tommy’s blue floral Hawaiian shirt and the Western Malibu Zombie Bomber bike back in modern Leonida.',
        verified: true,
      },
      {
        id: 'mb09-ev2',
        title: 'Protagonist-Swap & Fast-Travel Reset Verification',
        locationCue: '12 LPL Substations -> Reactor 2 (19:00–06:00)',
        detail:
          'Community runners verified the grid sequence requires staying as Jason with manual travel; attempts to enter the portal as Lucia reset progress rather than unlocking an alternate cameo.',
        verified: true,
      },
      {
        id: 'mb09-ev3',
        title: 'Sealed 2002 Malibu Interior Bounds',
        locationCue: '2002 Malibu Front Exit & Back Rooms',
        detail:
          'Every door beyond the main dancefloor and Kent Paul’s upstairs room is static geometry—no hidden back-office Tommy Vercetti trigger or 2002 Ocean Beach exit exists.',
        verified: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Run the Verified 12-Substation Route Strictly as Jason',
        landmarkCue: 'Badger R&D -> 12 LPL Substations -> Reactor 2',
        instruction:
          'Follow the confirmed LIFEISPASSINGMEBY walkthrough without fast-traveling or swapping to Lucia so you don’t wipe your substation progress.',
      },
      {
        stepNumber: 2,
        title: 'Speak With Kent Paul & Claim Both Confirmed Rewards',
        landmarkCue: '2002 Malibu Upstairs -> Modern Leonida Return',
        instruction:
          'Enjoy Kent Paul’s full upstairs dialogue, exit back to modern Vice-Dale to collect Tommy’s Hawaiian shirt and Zombie Bomber motorcycle, and ignore fake "secret Tommy door" rumors.',
      },
    ],
    verificationStatus: 'community-solved',
    sources: [
      { community: 'r/GTA6', label: 'LIFEISPASSINGMEBY Portal Complete Verification' },
      { community: 'IGN', label: '2002 Malibu Club Rewards & Kent Paul Guide' },
      { community: 'Vice', label: 'Malibu Club Portal Rules & Reset Mechanics' },
    ],
    tags: [
      'tommy vercetti',
      'malibu club',
      '2002',
      'portal',
      'kent paul',
      'debunked',
      'lifeispassingmeby',
      'dead end',
    ],
    relatedEasterEggSlug: '2002-vice-city-malibu-club-portal',
  },
];
