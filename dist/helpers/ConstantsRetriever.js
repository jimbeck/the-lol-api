"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const errors_1 = require("../errors");
const gameModes = require('../constants/gameModes.json');
const gameTypes = require('../constants/gameTypes.json');
const mapNames = require('../constants/mapNames.json');
const matchmakingQueues = require('../constants/matchmakingQueues.json');
const seasons = require('../constants/seasons.json');
class ConstantsRetriever {
    static retrieveGameModeByName(name) {
        name = name.toUpperCase();
        if (!_.has(gameModes, name)) {
            throw new errors_1.InvalidGameModeError();
        }
        return gameModes[name];
    }
    static retrieveGameTypeByName(name) {
        name = name.toUpperCase();
        if (!_.has(gameTypes, name)) {
            throw new errors_1.InvalidGameTypeError();
        }
        return gameTypes[name];
    }
    static retrieveMapNameById(id) {
        if (!_.has(mapNames, id)) {
            throw new errors_1.InvalidMapIdError();
        }
        return mapNames[id];
    }
    static retrieveMatchmakingQueueById(id) {
        if (!_.has(matchmakingQueues, id)) {
            throw new errors_1.InvalidMatchingQueueIdError();
        }
        return matchmakingQueues[id];
    }
    static retrieveSeasonById(id) {
        if (!_.has(seasons, id)) {
            throw new errors_1.InvalidSeasonIdError();
        }
        return seasons[id];
    }
}
exports.ConstantsRetriever = ConstantsRetriever;
