export interface ChampionMasteryDTO {
    chestGranted: boolean;
    championLevel: number;
    championPoints: number;
    championId: number;
    playerId: number;
    championPointsUntilNextLevel: number;
    championPointsSinceLastLevel: number;
    lastPlayTime: number;
}
export interface ChampionListDto {
    champions: ChampionDto[];
}
export interface ChampionDto {
    rankedPlayEnabled: boolean;
    botEnabled: boolean;
    botMmEnabled: boolean;
    active: boolean;
    freeToPlay: boolean;
    id: number;
}
export interface LeagueListDTO {
    leagueId: string;
    tier: string;
    entries: LeagueItemDTO[];
    queue: string;
    name: string;
}
export interface LeagueItemDTO {
    rank: string;
    hotStreak: boolean;
    miniSeries: MiniSeriesDTO;
    wins: number;
    veteran: boolean;
    losses: number;
    freshBlood: boolean;
    playerOrTeamName: string;
    inactive: boolean;
    playerOrTeamId: string;
    leaguePoints: number;
}
export interface MiniSeriesDTO {
    wins: number;
    losses: number;
    target: number;
    progress: string;
}
export interface LeaguePositionDTO {
    rank: string;
    queueType: string;
    hotStreak: boolean;
    miniSeries: MiniSeriesDTO;
    wins: number;
    veteran: boolean;
    losses: number;
    freshBlood: boolean;
    leagueId: string;
    playerOrTeamName: string;
    inactive: boolean;
    playerOrTeamId: string;
    leagueName: string;
    tier: string;
    leaguePoints: number;
}
export interface ChampionListDto {
    keys: Map<string, string>;
    data: Map<string, ChampionDto>;
    version: string;
    type: string;
    format: string;
}
export interface ChampionDto {
    info: InfoDto;
    enemytips: string[];
    stats: StatsDto;
    name: string;
    title: string;
    image: ImageDto;
    tags: string[];
    partype: string;
    skins: SkinDto[];
    passive: PassiveDto;
    recommended: RecommendedDto[];
    allytips: string[];
    key: string;
    lore: string;
    id: number;
    blurb: string;
    spells: ChampionSpellDto[];
}
export interface InfoDto {
    difficulty: number;
    attack: number;
    defense: number;
    magic: number;
}
export interface StatsDto {
    armorperlevel: number;
    hpperlevel: number;
    attackdamage: number;
    mpperlevel: number;
    attackspeedoffset: number;
    armor: number;
    hp: number;
    hpregenperlevel: number;
    spellblock: number;
    attackrange: number;
    movespeed: number;
    attackdamageperlevel: number;
    mpregenperlevel: number;
    mp: number;
    spellblockperlevel: number;
    crit: number;
    mpregen: number;
    attackspeedperlevel: number;
    hpregen: number;
    critperlevel: number;
}
export interface ImageDto {
    full: string;
    group: string;
    sprite: string;
    h: number;
    w: number;
    y: number;
    x: number;
}
export interface SkinDto {
    num: number;
    name: string;
    id: number;
}
export interface PassiveDto {
    image: ImageDto;
    sanitizedDescription: string;
    name: string;
    description: string;
}
export interface RecommendedDto {
    map: string;
    blocks: BlockDto[];
    champion: string;
    title: string;
    priority: boolean;
    mode: string;
    type: string;
}
export interface BlockDto {
    items: BlockItemDto[];
    recMath: boolean;
    type: string;
}
export interface BlockItemDto {
    count: number;
    id: number;
}
export interface ChampionSpellDto {
    cooldownBurn: string;
    resource: string;
    leveltip: LevelTipDto;
    vars: SpellVarsDto[];
    costType: string;
    image: ImageDto;
    sanitizedDescription: string;
    sanitizedTooltip: string;
    effect: number[][];
    tooltip: string;
    maxrank: number;
    costBurn: string;
    rangeBurn: string;
    range: number[] | string;
    cooldown: number[];
    cost: number[];
    key: string;
    description: string;
    effectBurn: string[];
    altimages: ImageDto[];
    name: string;
}
export interface LevelTipDto {
    effect: string[];
    label: string[];
}
export interface SpellVarsDto {
    ranksWith: string;
    dyn: string;
    link: string;
    coeff: number[];
    key: string;
}
export interface ItemListDto {
    data: Map<string, ItemDto>;
    version: string;
    tree: ItemTreeDto[];
    groups: GroupDto[];
    type: string;
}
export interface ItemTreeDto {
    header: string;
    tags: string[];
}
export interface ItemDto {
    gold: GoldDto;
    plaintext: string;
    hideFromAll: boolean;
    inStore: boolean;
    into: string[];
    id: number;
    stats: InventoryDataStatsDto;
    colloq: string;
    maps: Map<string, boolean>;
    specialRecipe: number;
    image: ImageDto;
    description: string;
    tags: string[];
    effect: Map<string, string>;
    requiredChampion: string;
    from: string[];
    group: string;
    consumeOnFull: boolean;
    name: string;
    consumed: boolean;
    sanitizedDescription: string;
    depth: number;
    stacks: number;
}
export interface GoldDto {
    sell: number;
    total: number;
    base: number;
    purchasable: boolean;
}
export interface InventoryDataStatsDto {
    PercentCritDamageMod: number;
    PercentSpellBlockMod: number;
    PercentHPRegenMod: number;
    PercentMovementSpeedMod: number;
    FlatSpellBlockMod: number;
    FlatCritDamageMod: number;
    FlatEnergyPoolMod: number;
    PercentLifeStealMod: number;
    FlatMPPoolMod: number;
    FlatMovementSpeedMod: number;
    PercentAttackSpeedMod: number;
    FlatBlockMod: number;
    PercentBlockMod: number;
    FlatEnergyRegenMod: number;
    PercentSpellVampMod: number;
    FlatMPRegenMod: number;
    PercentDodgeMod: number;
    FlatAttackSpeedMod: number;
    FlatArmorMod: number;
    FlatHPRegenMod: number;
    PercentMagicDamageMod: number;
    PercentMPPoolMod: number;
    FlatMagicDamageMod: number;
    PercentMPRegenMod: number;
    PercentPhysicalDamageMod: number;
    FlatPhysicalDamageMod: number;
    PercentHPPoolMod: number;
    PercentArmorMod: number;
    PercentCritChanceMod: number;
    PercentEXPBonus: number;
    FlatHPPoolMod: number;
    FlatCritChanceMod: number;
    FlatEXPBonus: number;
}
export interface GroupDto {
    MaxGroupOwnable: string;
    key: string;
}
export interface LanguageStringsDto {
    data: Map<string, string>;
    version: string;
    type: string;
}
export interface MapDataDto {
    data: Map<string, MapDetailsDto>;
    version: string;
    type: string;
}
export interface MapDetailsDto {
    mapName: string;
    image: ImageDto;
    mapId: number;
    unpurchasableItemList: number[];
}
export interface MasteryListDto {
    data: Map<string, MasteryDto>;
    version: string;
    tree: MasteryTreeDto;
    type: string;
}
export interface MasteryTreeDto {
    Resolve: MasteryTreeListDto[];
    Ferocity: MasteryTreeListDto[];
    Cunning: MasteryTreeListDto[];
}
export interface MasteryTreeListDto {
    masteryTreeItems: MasteryTreeItemDto[];
}
export interface MasteryTreeItemDto {
    masteryId: number;
    prereq: string;
}
export interface MasteryDto {
    prereq: string;
    masteryTree: string;
    name: string;
    ranks: number;
    image: ImageDto;
    sanitizedDescription: string[];
    id: number;
    description: string[];
}
export interface ProfileIconDataDto {
    data: Map<string, ProfileIconDetailsDto>;
    version: string;
    type: string;
}
export interface ProfileIconDetailsDto {
    image: ImageDto;
    id: number;
}
export interface RealmDto {
    lg: string;
    dd: string;
    l: string;
    n: Map<string, string>;
    profileiconmax: number;
    store: string;
    v: string;
    cdn: string;
    css: string;
}
export interface RuneListDto {
    data: Map<string, RuneDto>;
    version: string;
    type: string;
}
export interface RuneDto {
    stats: RuneStatsDto;
    name: string;
    tags: string[];
    image: ImageDto;
    sanitizedDescription: string;
    rune: MetaDataDto;
    id: number;
    description: string;
}
export interface RuneStatsDto {
    PercentTimeDeadModPerLevel: number;
    PercentArmorPenetrationModPerLevel: number;
    PercentCritDamageMod: number;
    PercentSpellBlockMod: number;
    PercentHPRegenMod: number;
    PercentMovementSpeedMod: number;
    FlatSpellBlockMod: number;
    FlatEnergyRegenModPerLevel: number;
    FlatEnergyPoolMod: number;
    FlatMagicPenetrationModPerLevel: number;
    PercentLifeStealMod: number;
    FlatMPPoolMod: number;
    PercentCooldownMod: number;
    PercentMagicPenetrationMod: number;
    FlatArmorPenetrationModPerLevel: number;
    FlatMovementSpeedMod: number;
    FlatTimeDeadModPerLevel: number;
    FlatArmorModPerLevel: number;
    PercentAttackSpeedMod: number;
    FlatDodgeModPerLevel: number;
    PercentMagicDamageMod: number;
    PercentBlockMod: number;
    FlatDodgeMod: number;
    FlatEnergyRegenMod: number;
    FlatHPModPerLevel: number;
    PercentAttackSpeedModPerLevel: number;
    PercentSpellVampMod: number;
    FlatMPRegenMod: number;
    PercentHPPoolMod: number;
    PercentDodgeMod: number;
    FlatAttackSpeedMod: number;
    FlatArmorMod: number;
    FlatMagicDamageModPerLevel: number;
    FlatHPRegenMod: number;
    PercentPhysicalDamageMod: number;
    FlatCritChanceModPerLevel: number;
    FlatSpellBlockModPerLevel: number;
    PercentTimeDeadMod: number;
    FlatBlockMod: number;
    PercentMPPoolMod: number;
    FlatMagicDamageMod: number;
    PercentMPRegenMod: number;
    PercentMovementSpeedModPerLevel: number;
    PercentCooldownModPerLevel: number;
    FlatMPModPerLevel: number;
    FlatEnergyModPerLevel: number;
    FlatPhysicalDamageMod: number;
    FlatHPRegenModPerLevel: number;
    FlatCritDamageMod: number;
    PercentArmorMod: number;
    FlatMagicPenetrationMod: number;
    PercentCritChanceMod: number;
    FlatPhysicalDamageModPerLevel: number;
    PercentArmorPenetrationMod: number;
    PercentEXPBonus: number;
    FlatMPRegenModPerLevel: number;
    PercentMagicPenetrationModPerLevel: number;
    FlatTimeDeadMod: number;
    FlatMovementSpeedModPerLevel: number;
    FlatGoldPer10Mod: number;
    FlatArmorPenetrationMod: number;
    FlatCritDamageModPerLevel: number;
    FlatHPPoolMod: number;
    FlatCritChanceMod: number;
    FlatEXPBonus: number;
}
export interface MetaDataDto {
    tier: string;
    type: string;
    isRune: boolean;
}
export interface SummonerSpellListDto {
    data: Map<string, SummonerSpellDto>;
    version: string;
    type: string;
}
export interface SummonerSpellDto {
    vars: SpellVarsDto[];
    image: ImageDto;
    costBurn: string;
    cooldown: number[];
    effectBurn: string[];
    id: number;
    cooldownBurn: string;
    tooltip: string;
    maxrank: number;
    rangeBurn: string;
    description: string;
    effect: number[][];
    key: string;
    leveltip: LevelTipDto;
    modes: string[];
    resource: string;
    name: string;
    costType: string;
    sanitizedDescription: string;
    sanitizedTooltip: string;
    range: number[] | string;
    cost: number[];
    summonerLevel: number;
}
export interface ShardStatus {
    name: string;
    region_tag: string;
    hostname: string;
    services: Service[];
    slug: string;
    locales: string[];
}
export interface Service {
    status: string;
    incidents: Incident[];
    name: string;
    slug: string;
}
export interface Incident {
    active: boolean;
    created_at: string;
    id: number;
    updates: Message[];
}
export interface Message {
    severity: string;
    author: string;
    created_at: string;
    translations: Translation[];
    updated_at: string;
    content: string;
    id: string;
}
export interface Translation {
    locale: string;
    content: string;
    updated_at: string;
}
export interface MatchDto {
    seasonId: number;
    queueId: number;
    gameId: number;
    participantIdentities: ParticipantIdentityDto[];
    gameVersion: string;
    platformId: string;
    gameMode: string;
    mapId: number;
    gameType: string;
    teams: TeamStatsDto[];
    participants: ParticipantDto[];
    gameDuration: number;
    gameCreation: number;
}
export interface ParticipantIdentityDto {
    player: PlayerDto;
    participantId: number;
}
export interface PlayerDto {
    currentPlatformId: string;
    summonerName: string;
    matchHistoryUri: string;
    platformId: string;
    currentAccountId: number;
    profileIcon: number;
    summonerId: number;
    accountId: number;
}
export interface TeamStatsDto {
    firstDragon: boolean;
    firstInhibitor: boolean;
    bans: TeamBansDto[];
    baronKills: number;
    firstRiftHerald: boolean;
    firstBaron: boolean;
    riftHeraldKills: number;
    firstBlood: boolean;
    teamId: number;
    firstTower: boolean;
    vilemawKills: number;
    inhibitorKills: number;
    towerKills: number;
    dominionVictoryScore: number;
    win: string;
    dragonKills: number;
}
export interface TeamBansDto {
    pickTurn: number;
    championId: number;
}
export interface ParticipantDto {
    stats: ParticipantStatsDto;
    participantId: number;
    runes: RuneDto[];
    timeline: ParticipantTimelineDto;
    teamId: number;
    spell2Id: number;
    masteries: MasteryDto[];
    highestAchievedSeasonTier: string;
    spell1Id: number;
    championId: number;
}
export interface ParticipantStatsDto {
    physicalDamageDealt: number;
    neutralMinionsKilledTeamJungle: number;
    magicDamageDealt: number;
    totalPlayerScore: number;
    deaths: number;
    win: boolean;
    neutralMinionsKilledEnemyJungle: number;
    altarsCaptured: number;
    largestCriticalStrike: number;
    totalDamageDealt: number;
    magicDamageDealtToChampions: number;
    visionWardsBoughtInGame: number;
    damageDealtToObjectives: number;
    largestKillingSpree: number;
    item1: number;
    quadraKills: number;
    teamObjective: number;
    totalTimeCrowdControlDealt: number;
    longestTimeSpentLiving: number;
    wardsKilled: number;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    item2: number;
    item3: number;
    item0: number;
    firstBloodAssist: boolean;
    visionScore: number;
    wardsPlaced: number;
    item4: number;
    item5: number;
    item6: number;
    turretKills: number;
    tripleKills: number;
    damageSelfMitigated: number;
    champLevel: number;
    nodeNeutralizeAssist: number;
    firstInhibitorKill: boolean;
    goldEarned: number;
    magicalDamageTaken: number;
    kills: number;
    doubleKills: number;
    nodeCaptureAssist: number;
    trueDamageTaken: number;
    nodeNeutralize: number;
    firstInhibitorAssist: boolean;
    assists: number;
    unrealKills: number;
    neutralMinionsKilled: number;
    objectivePlayerScore: number;
    combatPlayerScore: number;
    damageDealtToTurrets: number;
    altarsNeutralized: number;
    physicalDamageDealtToChampions: number;
    goldSpent: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    participantId: number;
    pentaKills: number;
    totalHeal: number;
    totalMinionsKilled: number;
    firstBloodKill: boolean;
    nodeCapture: number;
    largestMultiKill: number;
    sightWardsBoughtInGame: number;
    totalDamageDealtToChampions: number;
    totalUnitsHealed: number;
    inhibitorKills: number;
    totalScoreRank: number;
    totalDamageTaken: number;
    killingSprees: number;
    timeCCingOthers: number;
    physicalDamageTaken: number;
}
export interface RuneDto {
    runeId: number;
    rank: number;
}
export interface ParticipantTimelineDto {
    lane: string;
    participantId: number;
    csDiffPerMinDeltas: Map<string, number>;
    goldPerMinDeltas: Map<string, number>;
    xpDiffPerMinDeltas: Map<string, number>;
    creepsPerMinDeltas: Map<string, number>;
    xpPerMinDeltas: Map<string, number>;
    role: string;
    damageTakenDiffPerMinDeltas: Map<string, number>;
    damageTakenPerMinDeltas: Map<string, number>;
}
export interface MasteryDto {
    masteryId: number;
    rank: number;
}
export interface MatchlistDto {
    matches: MatchReferenceDto[];
    totalGames: number;
    startIndex: number;
    endIndex: number;
}
export interface MatchReferenceDto {
    lane: string;
    gameId: number;
    champion: number;
    platformId: string;
    season: number;
    queue: number;
    role: string;
    timestamp: number;
}
export interface MatchTimelineDto {
    frames: MatchFrameDto;
    frameInterval: number;
}
export interface MatchFrameDto {
    timestamp: number;
    participantFrames: Map<number, MatchParticipantFrameDto>;
    events: MatchEventDto[];
}
export interface MatchParticipantFrameDto {
    totalGold: number;
    teamScore: number;
    participantId: number;
    level: number;
    currentGold: number;
    minionsKilled: number;
    dominionScore: number;
    position: MatchPositionDto;
    xp: number;
    jungleMinionsKilled: number;
}
export interface MatchPositionDto {
    x: number;
    y: number;
}
export interface MatchEventDto {
    eventType: string;
    towerType: string;
    teamId: number;
    ascendedType: string;
    killerId: number;
    levelUpType: string;
    pointCaptured: string;
    assistingParticipantIds: number[];
    wardType: string;
    monsterType: string;
    type: string;
    skillSlot: number;
    victimId: number;
    timestamp: number;
    afterId: number;
    monsterSubType: string;
    laneType: string;
    itemId: number;
    participantId: number;
    buildingType: string;
    creatorId: number;
    position: MatchPositionDto;
    beforeId: number;
}
export interface CurrentGameInfo {
    gameId: number;
    gameStartTime: number;
    platformId: string;
    gameMode: string;
    mapId: number;
    gameType: string;
    bannedChampions: BannedChampion[];
    observers: Observer;
    participants: CurrentGameParticipant[];
    gameLength: number;
    gameQueueConfigId: number;
}
export interface BannedChampion {
    pickTurn: number;
    championId: number;
    teamId: number;
}
export interface Observer {
    encryptionKey: string;
}
export interface CurrentGameParticipant {
    profileIconId: number;
    championId: number;
    summonerName: string;
    gameCustomizationObjects: GameCustomizationObject[];
    bot: boolean;
    perks: Perks;
    spell2Id: number;
    teamId: number;
    spell1Id: number;
    summonerId: number;
}
export interface GameCustomizationObject {
    category: string;
    content: string;
}
export interface Perks {
    perkStyle: number;
    perkIds: number[];
    perkSubStyle: number;
}
export interface FeaturedGames {
    clientRefreshInterval: number;
    gameList: FeaturedGameInfo[];
}
export interface FeaturedGameInfo {
    gameId: number;
    gameStartTime: number;
    platformId: string;
    gameMode: string;
    mapId: number;
    gameType: string;
    bannedChampions: BannedChampion[];
    observers: Observer;
    participants: Participant[];
    gameLength: number;
    gameQueueConfigId: number;
}
export interface Participant {
    profileIconId: number;
    championId: number;
    summonerName: string;
    bot: boolean;
    spell2Id: number;
    teamId: number;
    spell1Id: number;
}
export interface SummonerDTO {
    profileIconId: number;
    name: string;
    summonerLevel: number;
    revisionDate: number;
    id: number;
    accountId: number;
}
export interface LobbyEventDTOWrapper {
    eventList: LobbyEventDTO[];
}
export interface LobbyEventDTO {
    eventType: string;
    summonerId: string;
    timestamp: string;
}
export interface TournamentCodeDTO {
    map: string;
    code: string;
    spectators: string;
    region: string;
    providerId: number;
    teamSize: number;
    participants: Set<number>;
    pickType: string;
    tournamentId: number;
    lobbyName: string;
    password: string;
    id: number;
    metaData: string;
}
export interface LobbyEventDTOWrapper {
    eventList: LobbyEventDTO[];
}
export interface LobbyEventDTO {
    eventType: string;
    summonerId: string;
    timestamp: string;
}
