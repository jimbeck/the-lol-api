"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const lolapi_1 = require("./lolapi");
describe('LeagueAPI', () => {
    it('throws error if no api key provided', () => {
        expect(() => new lolapi_1.LolApi('')).toThrowError(errors_1.NoApiKeyError);
    });
});
