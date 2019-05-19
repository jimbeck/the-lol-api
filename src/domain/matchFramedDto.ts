import { MatchEventDto, MatchParticipantFrameDto } from '.';

export interface MatchFrameDto {
    timestamp: number;
    participantFrames: Map<number, MatchParticipantFrameDto>;
    events: MatchEventDto[];
}
