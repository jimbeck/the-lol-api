import { NoRegionWasProvided } from '../errors';
import { BaseService } from './BaseService';


describe('BaseService', () => {
    describe('getRegionCode', () => {
        it('returns default region code if one is not specified', () => {
            const base: BaseService = new BaseService('123', 'na');
            expect(base.getRegionCode()).toEqual('na');
        });

        it('returns region code if one is specified', () => {
            const base: BaseService = new BaseService('123', 'na');
            expect(base.getRegionCode('br')).toEqual('br');
        });

        it('throws error if no default or specific region code was set', () => {
            const base: BaseService = new BaseService('123');
            expect(base.getRegionCode()).toThrow(NoRegionWasProvided);
        });
    });
});
