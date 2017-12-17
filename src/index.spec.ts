import {LolApi} from "./index";
import {NoApiKeyError} from "./errors";

describe('LeagueAPI', function() {
    it('throws error if no api key provided', function() {
        expect(() => new LolApi('')).toThrowError(NoApiKeyError);
    });
});