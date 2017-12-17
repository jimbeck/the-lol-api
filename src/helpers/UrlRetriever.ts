import * as _ from 'lodash';
import {InvalidRegionError} from '../errors';
const config = require('../config/config.json');
const serviceProxies = config.serviceProxies;
const regionalProxies = config.regionalProxies;

export class UrlRetriever {
    public static retrieveServiceUrlByRegionCode(regionCode: string): string {
        const platforms = serviceProxies[regionCode.toLowerCase()];
        if (!platforms) {
            throw new InvalidRegionError();
        }
        // TODO - need to handle multiple platforms (NA and NA1 for new and old summoners)
        return this.URL_PREFIX + platforms[0] + this.URL_SUFFIX + '/lol/';
    }

    public static retrieveRegionalServiceUrlByLocation(location: string): string {
        const index = _.indexOf(regionalProxies, location.toLowerCase());
        if (index === -1) {
            throw new InvalidRegionError();
        }
        return this.URL_PREFIX + regionalProxies[index] + this.URL_SUFFIX + '/lol/';
    }

    private static URL_PREFIX: string = 'https://';
    private static URL_SUFFIX: string  = '.api.riotgames.com';

}
