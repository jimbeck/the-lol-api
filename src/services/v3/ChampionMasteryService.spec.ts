import {ChampionMasteryService} from './ChampionMasteryService';

jest.mock('../../__mocks__/request');

describe('ChampionMasteryService', () => {
    describe('getChampionMasteries', () => {
        it('returns an error', () => {
            expect.assertions(1);
            const service: ChampionMasteryService = new ChampionMasteryService('123', 'na');
            return expect(service.getChampionMasteries('123')).rejects.toThrowError(Error);
        });
    });
});
