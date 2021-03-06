import { TeamBansDto } from '.';

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
