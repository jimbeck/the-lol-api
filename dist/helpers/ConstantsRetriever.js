"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const gameModes_1 = require("../constants/gameModes");
const gameTypes_1 = require("../constants/gameTypes");
const mapNames_1 = require("../constants/mapNames");
const matchmakingQueues_1 = require("../constants/matchmakingQueues");
const seasons_1 = require("../constants/seasons");
const errors_1 = require("../errors");
class ConstantsRetriever {
    static retrieveGameModeByName(name) {
        name = name.toUpperCase();
        if (!_.has(gameModes_1.gameModes, name)) {
            throw new errors_1.InvalidGameModeError();
        }
        return gameModes_1.gameModes[name];
    }
    static retrieveGameTypeByName(name) {
        name = name.toUpperCase();
        if (!_.has(gameTypes_1.gameTypes, name)) {
            throw new errors_1.InvalidGameTypeError();
        }
        return gameTypes_1.gameTypes[name];
    }
    static retrieveMapNameById(id) {
        if (!_.has(mapNames_1.mapNames, id)) {
            throw new errors_1.InvalidMapIdError();
        }
        return mapNames_1.mapNames[id];
    }
    static retrieveMatchmakingQueueById(id) {
        if (!_.has(matchmakingQueues_1.matchmakingQueues, id)) {
            throw new errors_1.InvalidMatchingQueueIdError();
        }
        return matchmakingQueues_1.matchmakingQueues[id];
    }
    static retrieveSeasonById(id) {
        if (!_.has(seasons_1.seasons, id)) {
            throw new errors_1.InvalidSeasonIdError();
        }
        return seasons_1.seasons[id];
    }
}
exports.ConstantsRetriever = ConstantsRetriever;
