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
