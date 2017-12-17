import * as _ from 'lodash';
import {InvalidRegionError} from '../errors';
const proxies = require('../constants/proxies.json');
const serviceProxies = proxies.serviceProxies;
const regionalProxies = proxies.regionalProxies;

export class UrlBuilder {

    public static buildUrl(type: LeagueUrl, path: string, apiKey: string, region: string) {
        let url = '';
        if (type === LeagueUrl.SERVICE) {
            url += this.retrieveServiceUrlByRegionCode(region);
        } else if (type === LeagueUrl.REGION) {
            url += this.retrieveRegionalServiceUrlByLocation(region);
        }
        return url + '/' + path + `?apiKey=${apiKey}`;
    }

    private static URL_PREFIX: string = 'https://';
    private static URL_SUFFIX: string  = '.api.riotgames.com';

    private static retrieveServiceUrlByRegionCode(regionCode: string): string {
        const platforms = serviceProxies[regionCode.toLowerCase()];
        if (!platforms) {
            throw new InvalidRegionError();
        }
        // TODO - need to handle multiple platforms (NA and NA1 for new and old summoners)
        return this.URL_PREFIX + platforms[0] + this.URL_SUFFIX;
    }

    private static retrieveRegionalServiceUrlByLocation(location: string): string {
        const index = _.indexOf(regionalProxies, location.toLowerCase());
        if (index === -1) {
            throw new InvalidRegionError();
        }
        return this.URL_PREFIX + regionalProxies[index] + this.URL_SUFFIX;
    }
}

export enum LeagueUrl {
    SERVICE, REGION,
}
