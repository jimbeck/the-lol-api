"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("./BaseService");
describe('BaseService', () => {
    describe('getRegionCode', () => {
        it('returns default region code if one is not specified', () => {
            const base = new BaseService_1.BaseService('123', 'na');
            expect(base.getRegionCode()).toEqual('na');
        });
        it('returns region code if one is specified', () => {
            const base = new BaseService_1.BaseService('123', 'na');
            expect(base.getRegionCode('br')).toEqual('br');
        });
    });
});
