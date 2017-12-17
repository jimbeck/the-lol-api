import {NoApiKeyError} from './errors';
import {LolApi} from './index';

describe('LeagueAPI', () => {
    it('throws error if no api key provided', () => {
        expect(() => new LolApi('')).toThrowError(NoApiKeyError);
    });
    it('throws error if no api key provided', () => {
        expect(() => new LolApi('')).toThrowError(NoApiKeyError);
    });
});
