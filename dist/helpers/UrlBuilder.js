"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const proxies_1 = require("../constants/proxies");
const errors_1 = require("../errors");
const serviceProxies = proxies_1.proxies.serviceProxies;
const regionalProxies = proxies_1.proxies.regionalProxies;
class UrlBuilder {
    static buildUrl(type, path, apiKey, region) {
        let url = '';
        if (type === LeagueUrl.SERVICE) {
            url += this.retrieveServiceUrlByRegionCode(region);
        }
        else if (type === LeagueUrl.REGION) {
            url += this.retrieveRegionalServiceUrlByLocation(region);
        }
        return url + '/' + path + `?api_key=${apiKey}`;
    }
    static retrieveServiceUrlByRegionCode(regionCode) {
        const platforms = serviceProxies[regionCode.toLowerCase()];
        if (!platforms) {
            throw new errors_1.InvalidRegionError();
        }
        // TODO - need to handle multiple platforms (NA and NA1 for new and old summoners)
        return this.URL_PREFIX + platforms[0] + this.URL_SUFFIX;
    }
    static retrieveRegionalServiceUrlByLocation(location) {
        const index = _.indexOf(regionalProxies, location.toLowerCase());
        if (index === -1) {
            throw new errors_1.InvalidRegionError();
        }
        return this.URL_PREFIX + regionalProxies[index] + this.URL_SUFFIX;
    }
}
UrlBuilder.URL_PREFIX = 'https://';
UrlBuilder.URL_SUFFIX = '.api.riotgames.com';
exports.UrlBuilder = UrlBuilder;
var LeagueUrl;
(function (LeagueUrl) {
    LeagueUrl[LeagueUrl["SERVICE"] = 0] = "SERVICE";
    LeagueUrl[LeagueUrl["REGION"] = 1] = "REGION";
})(LeagueUrl = exports.LeagueUrl || (exports.LeagueUrl = {}));
