import {UrlRetriever} from "./UrlRetriever";
import {InvalidRegionError} from "../errors";

describe('UrlRetriever', function() {
    describe('retrieveServiceUrlByRegionCode', function() {
        it('throws error if invalid region code', function() {
            expect(() => UrlRetriever.retrieveServiceUrlByRegionCode('abc'))
                .toThrowError(InvalidRegionError);
        });
        it('returns a valid url', function() {
            expect(UrlRetriever.retrieveServiceUrlByRegionCode('na'))
                .toEqual('https://na1.api.riotgames.com/lol/')
        });
    });
    describe('retrieveRegionalServiceUrlByLocation', function() {
        it('throws error if invalid region code', function() {
            expect(() => UrlRetriever.retrieveRegionalServiceUrlByLocation('abc'))
                .toThrowError(InvalidRegionError);
        });
        it('returns a valid url', function() {
            expect(UrlRetriever.retrieveRegionalServiceUrlByLocation('americas'))
                .toEqual('https://americas.api.riotgames.com/lol/')
        });
    });
});