import {ConstantsRetriever} from "./ConstantsRetriever";
import {
    InvalidGameModeError, InvalidGameTypeError, InvalidMapIdError, InvalidMatchingQueueIdError,
    InvalidSeasonIdError
} from "../errors";

describe('ConstantsRetriever', function() {
    describe('retrieveGameModeByName', function() {
        it('throws error if invalid game mode', function() {
            expect(() => ConstantsRetriever.retrieveGameModeByName('abc'))
                .toThrowError(InvalidGameModeError);
        });
        it('returns a valid game mode', function() {
            expect(ConstantsRetriever.retrieveGameModeByName('classic'))
                .toEqual({"description": "Classic Summoner's Rift and Twisted Treeline games"});
        });
    });

    describe('retrieveGameTypeByName', function() {
        it('throws error if invalid game type', function() {
            expect(() => ConstantsRetriever.retrieveGameTypeByName('abc'))
                .toThrowError(InvalidGameTypeError);
        });
        it('returns a valid game type', function() {
            expect(ConstantsRetriever.retrieveGameTypeByName('matched_game'))
                .toEqual({"description": "All other games"});
        });
    });

    describe('retrieveMapNameById', function() {
        it('throws error if invalid map id', function() {
            expect(() => ConstantsRetriever.retrieveMapNameById('abc'))
                .toThrowError(InvalidMapIdError);
        });
        it('returns a valid map object', function() {
            expect(ConstantsRetriever.retrieveMapNameById('1'))
                .toEqual({"name": "Summoner's Rift", "notes": "Original Summer Variant"});
        });
    });

    describe('retrieveMatchmakingQueueById', function() {
        it('throws error if invalid matchmaking queue', function() {
            expect(() => ConstantsRetriever.retrieveMatchmakingQueueById('abc'))
                .toThrowError(InvalidMatchingQueueIdError);
        });
        it('returns a valid matchmaking queue object', function() {
            expect(ConstantsRetriever.retrieveMatchmakingQueueById('2'))
                .toEqual({
                    "map": "Summoner's Rift",
                    "description": "5v5 Blind Pick games",
                    "notes": "Deprecated in patch 7.19 in favor of queueId 430"
                });
        });
    });

    describe('retrieveSeasonById', function() {
        it('throws error if invalid season', function() {
            expect(() => ConstantsRetriever.retrieveSeasonById('abc'))
                .toThrowError(InvalidSeasonIdError);
        });
        it('returns a valid season', function() {
            expect(ConstantsRetriever.retrieveSeasonById('2'))
                .toEqual("PRESEASON 2014");
        });
    });
});