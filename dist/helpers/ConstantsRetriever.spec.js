"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const ConstantsRetriever_1 = require("./ConstantsRetriever");
describe('ConstantsRetriever', () => {
    describe('retrieveGameModeByName', () => {
        it('throws error if invalid game mode', () => {
            expect(() => ConstantsRetriever_1.ConstantsRetriever.retrieveGameModeByName('abc'))
                .toThrowError(errors_1.InvalidGameModeError);
        });
        it('returns a valid game mode', () => {
            expect(ConstantsRetriever_1.ConstantsRetriever.retrieveGameModeByName('classic'))
                .toEqual({ description: 'Classic Summoner\'s Rift and Twisted Treeline games' });
        });
    });
    describe('retrieveGameTypeByName', () => {
        it('throws error if invalid game type', () => {
            expect(() => ConstantsRetriever_1.ConstantsRetriever.retrieveGameTypeByName('abc'))
                .toThrowError(errors_1.InvalidGameTypeError);
        });
        it('returns a valid game type', () => {
            expect(ConstantsRetriever_1.ConstantsRetriever.retrieveGameTypeByName('matched_game'))
                .toEqual({ description: 'All other games' });
        });
    });
    describe('retrieveMapNameById', () => {
        it('throws error if invalid map id', () => {
            expect(() => ConstantsRetriever_1.ConstantsRetriever.retrieveMapNameById('abc'))
                .toThrowError(errors_1.InvalidMapIdError);
        });
        it('returns a valid map object', () => {
            expect(ConstantsRetriever_1.ConstantsRetriever.retrieveMapNameById('1'))
                .toEqual({ name: 'Summoner\'s Rift', notes: 'Original Summer Variant' });
        });
    });
    describe('retrieveMatchmakingQueueById', () => {
        it('throws error if invalid matchmaking queue', () => {
            expect(() => ConstantsRetriever_1.ConstantsRetriever.retrieveMatchmakingQueueById('abc'))
                .toThrowError(errors_1.InvalidMatchingQueueIdError);
        });
        it('returns a valid matchmaking queue object', () => {
            expect(ConstantsRetriever_1.ConstantsRetriever.retrieveMatchmakingQueueById('2'))
                .toEqual({
                map: 'Summoner\'s Rift',
                description: '5v5 Blind Pick games',
                notes: 'Deprecated in patch 7.19 in favor of queueId 430',
            });
        });
    });
    describe('retrieveSeasonById', () => {
        it('throws error if invalid season', () => {
            expect(() => ConstantsRetriever_1.ConstantsRetriever.retrieveSeasonById('abc'))
                .toThrowError(errors_1.InvalidSeasonIdError);
        });
        it('returns a valid season', () => {
            expect(ConstantsRetriever_1.ConstantsRetriever.retrieveSeasonById('2'))
                .toEqual('PRESEASON 2014');
        });
    });
});
