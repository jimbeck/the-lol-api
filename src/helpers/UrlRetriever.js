"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
let config = require('../config/config.json');
const regions = config.regions;
class UrlRetriever {
    static retrieveUrlByRegion(regionCode) {
        if (!_.includes(regions, regionCode)) {
            throw new Error("Not a valid region code");
        }
        else {
            return 'https://' + regionCode + '.api.riotgames.com/lol/';
        }
    }
}
exports.UrlRetriever = UrlRetriever;
//# sourceMappingURL=UrlRetriever.js.map