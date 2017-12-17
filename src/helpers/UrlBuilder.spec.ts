import {InvalidRegionError} from '../errors';
import {LeagueUrl, UrlBuilder} from './UrlBuilder';

describe('UrlBuilder', () => {
    describe('buildUrl', () => {
        it('throws error if invalid region code for the league service', () => {
            expect(() => UrlBuilder.buildUrl(
                LeagueUrl.SERVICE,
                'lol',
                '123',
                'blah blah'))
                .toThrowError(InvalidRegionError);
        });
        it('returns a valid url for the league service', () => {
            expect(UrlBuilder.buildUrl(
                LeagueUrl.SERVICE,
                'lol',
                '123',
                'na'))
                .toEqual('https://na1.api.riotgames.com/lol?apiKey=123');
        });
        it('throws error if invalid location for the regional league service', () => {
            expect(() => UrlBuilder.buildUrl(
                LeagueUrl.REGION,
                'lol',
                '123',
                'blah blah'))
                .toThrowError(InvalidRegionError);
        });
        it('returns a valid url for the regional league service', () => {
            expect(UrlBuilder.buildUrl(
                LeagueUrl.REGION,
                'lol',
                '123',
                'americas'))
                .toEqual('https://americas.api.riotgames.com/lol?apiKey=123');
        });
    });
});
