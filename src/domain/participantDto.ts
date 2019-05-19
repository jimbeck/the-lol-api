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
