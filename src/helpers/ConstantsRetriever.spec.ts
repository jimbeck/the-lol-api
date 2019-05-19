
import { gameModes, gameTypes, mapNames, matchmakingQueues, seasons } from '../constants';
import {
    InvalidGameModeError, InvalidGameTypeError, InvalidMapIdError, InvalidMatchingQueueIdError,
    InvalidSeasonIdError,
} from '../errors';
import { ConstantsRetriever } from './ConstantsRetriever';

describe('ConstantsRetriever', () => {
    describe('retrieveGameModeByName', () => {
        it('throws error if invalid game mode', () => {
            expect(() => ConstantsRetriever.retrieveGameModeByName('abc'))
                .toThrowError(InvalidGameModeError);
        });
        it('returns a valid game mode', () => {
            expect(ConstantsRetriever.retrieveGameModeByName('classic'))
                .toEqual(gameModes.filter((x) => x.gamemode === 'CLASSIC')[0]);
        });
    });

    describe('retrieveGameTypeByName', () => {
        it('throws error if invalid game type', () => {
            expect(() => ConstantsRetriever.retrieveGameTypeByName('abc'))
                .toThrowError(InvalidGameTypeError);
        });
        it('returns a valid game type', () => {
            expect(ConstantsRetriever.retrieveGameTypeByName('matched_game'))
                .toEqual(gameTypes.filter((x) => x.GAMETYPE === 'MATCHED_GAME')[0]);
        });
    });

    describe('retrieveMapNameById', () => {
        it('throws error if invalid map id', () => {
            expect(() => ConstantsRetriever.retrieveMapNameById(-1))
                .toThrowError(InvalidMapIdError);
        });
        it('returns a valid map object', () => {
            expect(ConstantsRetriever.retrieveMapNameById(1))
                .toEqual(mapNames.filter((x) => x.mapid === 1)[0]);
        });
    });

    describe('retrieveMatchmakingQueueById', () => {
        it('throws error if invalid matchmaking queue', () => {
            expect(() => ConstantsRetriever.retrieveMatchmakingQueueById(-1))
                .toThrowError(InvalidMatchingQueueIdError);
        });
        it('returns a valid matchmaking queue object', () => {
            expect(ConstantsRetriever.retrieveMatchmakingQueueById(2))
                .toEqual(matchmakingQueues.filter((x) => x.id === 2)[0]);
        });
    });

    describe('retrieveSeasonById', () => {
        it('throws error if invalid season', () => {
            expect(() => ConstantsRetriever.retrieveSeasonById(-1))
                .toThrowError(InvalidSeasonIdError);
        });
        it('returns a valid season', () => {
            expect(ConstantsRetriever.retrieveSeasonById(2))
                .toEqual(seasons.filter((x) => x.id === 2)[0]);
        });
    });
});
