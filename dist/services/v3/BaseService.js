"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class BaseService {
    constructor(apiKey, defaultRegionCode) {
        this.apiKey = apiKey;
        this.defaultRegionCode = defaultRegionCode;
    }
    getRegionCode(regionCode) {
        if (regionCode) {
            return regionCode;
        }
        return this.defaultRegionCode;
    }
    get(url, isStatic = false) {
        return axios_1.default.get(url)
            .then((response) => {
            return response;
        });
    }
    post(url) {
        return axios_1.default.post(url);
    }
    put(url) {
        return axios_1.default.put(url);
    }
}
exports.BaseService = BaseService;
