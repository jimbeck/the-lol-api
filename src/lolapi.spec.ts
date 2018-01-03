import {NoApiKeyError} from './errors';
import {LolApi} from './lolapi';

describe('LeagueAPI', () => {
    it('throws error if no api key provided', () => {
        expect(() => new LolApi('')).toThrowError(NoApiKeyError);
    });
});
