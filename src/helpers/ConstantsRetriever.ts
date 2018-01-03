import * as _ from 'lodash';
import {gameModes} from '../constants/gameModes';
import {gameTypes} from '../constants/gameTypes';
import {mapNames} from '../constants/mapNames';
import {matchmakingQueues} from '../constants/matchmakingQueues';
import {seasons} from '../constants/seasons';
import {
    InvalidGameModeError, InvalidGameTypeError, InvalidMapIdError, InvalidMatchingQueueIdError,
    InvalidSeasonIdError,
} from '../errors';

export class ConstantsRetriever {
    public static retrieveGameModeByName(name: string): string {
        name = name.toUpperCase();
        if (!_.has(gameModes, name)) {
            throw new InvalidGameModeError();
        }
        return gameModes[name];
    }

    public static retrieveGameTypeByName(name: string): string {
        name = name.toUpperCase();
        if (!_.has(gameTypes, name)) {
            throw new InvalidGameTypeError();
        }
        return gameTypes[name];
    }

    public static retrieveMapNameById(id: string) {
        if (!_.has(mapNames, id)) {
            throw new InvalidMapIdError();
        }
        return mapNames[id];
    }

    public static retrieveMatchmakingQueueById(id: string) {
        if (!_.has(matchmakingQueues, id)) {
            throw new InvalidMatchingQueueIdError();
        }
        return matchmakingQueues[id];
    }

    public static retrieveSeasonById(id: string) {
        if (!_.has(seasons, id)) {
            throw new InvalidSeasonIdError();
        }
        return seasons[id];
    }
}
