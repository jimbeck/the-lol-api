import * as _ from 'lodash';
import {gameModes, gameTypes, mapNames, matchmakingQueues, seasons} from '../constants';
import {
    InvalidGameModeError, InvalidGameTypeError, InvalidMapIdError, InvalidMatchingQueueIdError,
    InvalidSeasonIdError,
} from '../errors';

export class ConstantsRetriever {
    public static retrieveGameModeByName(name: string) {
        name = name.toUpperCase();
        const gameMode = gameModes.filter(x => x.gamemode === name);
        if (gameMode.length === 0) {
            throw new InvalidGameModeError();
        }
        return gameMode[0];
    }

    public static retrieveGameTypeByName(name: string) {
        name = name.toUpperCase();
        const gameType = gameTypes.filter(x => x.GAMETYPE === name);
        if (gameType.length === 0) {
            throw new InvalidGameTypeError();
        }
        return gameType[0];
    }

    public static retrieveMapNameById(id: number) {
        const map = mapNames.filter(x => x.mapid === id);
        if (map.length === 0) {
            throw new InvalidMapIdError();
        }
        return map[0];
    }

    public static retrieveMatchmakingQueueById(id: number) {
        const queue = matchmakingQueues.filter(x => x.id === id);
        if (queue.length === 0) {
            throw new InvalidMatchingQueueIdError();
        }
        return queue[0];
    }

    public static retrieveSeasonById(id: number) {
        const season = seasons.filter(x => x.id === id);
        if (season.length === 0) {
            throw new InvalidSeasonIdError();
        }
        return season[0];
    }
}
