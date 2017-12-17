import {InvalidRegionError} from '../errors';
import {UrlRetriever} from './UrlRetriever';

describe('UrlRetriever', () => {
    describe('retrieveServiceUrlByRegionCode', () => {
        it('throws error if invalid region code', () => {
            expect(() => UrlRetriever.retrieveServiceUrlByRegionCode('abc'))
                .toThrowError(InvalidRegionError);
        });
        it('returns a valid url', () => {
            expect(UrlRetriever.retrieveServiceUrlByRegionCode('na'))
                .toEqual('https://na1.api.riotgames.com/lol/');
        });
    });
    describe('retrieveRegionalServiceUrlByLocation', () => {
        it('throws error if invalid region code', () => {
            expect(() => UrlRetriever.retrieveRegionalServiceUrlByLocation('abc'))
                .toThrowError(InvalidRegionError);
        });
        it('returns a valid url', () => {
            expect(UrlRetriever.retrieveRegionalServiceUrlByLocation('americas'))
                .toEqual('https://americas.api.riotgames.com/lol/');
        });
    });
});
