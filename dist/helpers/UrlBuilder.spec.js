"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const UrlBuilder_1 = require("./UrlBuilder");
describe('UrlBuilder', () => {
    describe('buildUrl', () => {
        it('throws error if invalid region code for the league service', () => {
            expect(() => UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, 'lol', '123', 'blah blah'))
                .toThrowError(errors_1.InvalidRegionError);
        });
        it('returns a valid url for the league service', () => {
            expect(UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, 'lol', '123', 'na'))
                .toEqual('https://na1.api.riotgames.com/lol?api_key=123');
        });
        it('throws error if invalid location for the regional league service', () => {
            expect(() => UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.REGION, 'lol', '123', 'blah blah'))
                .toThrowError(errors_1.InvalidRegionError);
        });
        it('returns a valid url for the regional league service', () => {
            expect(UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.REGION, 'lol', '123', 'americas'))
                .toEqual('https://americas.api.riotgames.com/lol?api_key=123');
        });
    });
});
