import axios from 'axios';
const MockAdapter = require('axios-mock-adapter');
import {ChampionMasteryService} from './ChampionMasteryService';

const masteries = require('./__tests__/championMastery.json');

describe('ChampionMasteryService', () => {
    describe('getChampionMasteries', () => {
        // it('returns an error', () => {
        //     const service: ChampionMasteryService = new ChampionMasteryService('123', 'na');
        //     const mock = new MockAdapter(axios);
        //     mock.onAny().reply((config) => {
        //         return new Promise((resolve, reject) => {
        //             setTimeout(() => {
        //                 return reject(new Error());
        //             });
        //         });
        //     });
        //     return expect(service.getChampionMasteries('123')).rejects.toThrowError(Error);
        // });

        it('returns a valid championMasteries', () => {
            const summonerId = '24712722';
            const regionCode = 'na';

            const mock = new MockAdapter(axios);
            mock.onAny().reply(200, masteries);
            const service: ChampionMasteryService = new ChampionMasteryService(summonerId, regionCode);
            return expect(service.getChampionMasteries(summonerId)).resolves.toEqual(masteries);
        });
    });
});
