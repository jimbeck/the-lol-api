export interface TournamentCodeDto {
    map: string;
    code: string;
    spectators: string;
    region: string;
    providerId: number;
    teamSize: number;
    participants: Set<string>;
    pickType: string;
    tournamentId: number;
    lobbyName: string;
    password: string;
    id: number;
    metadata: string;
}
