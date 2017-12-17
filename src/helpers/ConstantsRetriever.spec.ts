import {
    InvalidGameModeError, InvalidGameTypeError, InvalidMapIdError, InvalidMatchingQueueIdError,
    InvalidSeasonIdError,
} from '../errors';
import {ConstantsRetriever} from './ConstantsRetriever';

describe('ConstantsRetriever', () => {
    describe('retrieveGameModeByName', () => {
        it('throws error if invalid game mode', () => {
            expect(() => ConstantsRetriever.retrieveGameModeByName('abc'))
                .toThrowError(InvalidGameModeError);
        });
        it('returns a valid game mode', () => {
            expect(ConstantsRetriever.retrieveGameModeByName('classic'))
                .toEqual({description: 'Classic Summoner\'s Rift and Twisted Treeline games'});
        });
    });

    describe('retrieveGameTypeByName', () => {
        it('throws error if invalid game type', () => {
            expect(() => ConstantsRetriever.retrieveGameTypeByName('abc'))
                .toThrowError(InvalidGameTypeError);
        });
        it('returns a valid game type', () => {
            expect(ConstantsRetriever.retrieveGameTypeByName('matched_game'))
                .toEqual({description: 'All other games'});
        });
    });

    describe('retrieveMapNameById', () => {
        it('throws error if invalid map id', () => {
            expect(() => ConstantsRetriever.retrieveMapNameById('abc'))
                .toThrowError(InvalidMapIdError);
        });
        it('returns a valid map object', () => {
            expect(ConstantsRetriever.retrieveMapNameById('1'))
                .toEqual({name: 'Summoner\'s Rift', notes: 'Original Summer Variant'});
        });
    });

    describe('retrieveMatchmakingQueueById', () => {
        it('throws error if invalid matchmaking queue', () => {
            expect(() => ConstantsRetriever.retrieveMatchmakingQueueById('abc'))
                .toThrowError(InvalidMatchingQueueIdError);
        });
        it('returns a valid matchmaking queue object', () => {
            expect(ConstantsRetriever.retrieveMatchmakingQueueById('2'))
                .toEqual({
                    map: 'Summoner\'s Rift',
                    description: '5v5 Blind Pick games',
                    notes: 'Deprecated in patch 7.19 in favor of queueId 430',
                });
        });
    });

    describe('retrieveSeasonById', () => {
        it('throws error if invalid season', () => {
            expect(() => ConstantsRetriever.retrieveSeasonById('abc'))
                .toThrowError(InvalidSeasonIdError);
        });
        it('returns a valid season', () => {
            expect(ConstantsRetriever.retrieveSeasonById('2'))
                .toEqual('PRESEASON 2014');
        });
    });
});
