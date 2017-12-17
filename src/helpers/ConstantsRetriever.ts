import * as _ from 'lodash';
import {
    InvalidGameModeError, InvalidGameTypeError, InvalidMapIdError, InvalidMatchingQueueIdError,
    InvalidSeasonIdError
} from "../errors";
let gameModes = require('../constants/gameModes.json');
let gameTypes = require('../constants/gameTypes.json');
let mapNames = require('../constants/mapNames.json');
let matchmakingQueues = require('../constants/matchmakingQueues.json');
let seasons = require('../constants/seasons.json');

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