import * as _ from 'lodash';
import {proxies} from '../constants/proxies';
import {InvalidRegionError} from '../errors';
const serviceProxies = proxies.serviceProxies;
const regionalProxies = proxies.regionalProxies;

export class UrlBuilder {

    public static buildUrl(type: LeagueUrl, path: string, apiKey: string, region: string) {
        let url = '';
        if (type === LeagueUrl.SERVICE) {
            url += this.retrieveHostUrlByRegionCode(region);
        } else if (type === LeagueUrl.REGION) {
            url += this.retrieveHostUrlByPhysicalRegion(region);
        }
        return url + '/' + path + `?api_key=${apiKey}`;
    }

    private static URL_PREFIX: string = 'https://';

    private static retrieveHostUrlByRegionCode(regionCode: string): string {
        const values = serviceProxies.filter(x => x.serviceRegion.toLowerCase() === regionCode.toLowerCase());
        if (values.length === 0) {
            throw new InvalidRegionError();
        }
        // TODO - need to handle multiple platforms (NA and NA1 for new and old summoners)
        return this.URL_PREFIX + values[0].host;
    }

    private static retrieveHostUrlByPhysicalRegion(location: string): string {
        const values = regionalProxies.filter(x => x.physicalRegion.toLowerCase() === location.toLowerCase());
        if (values.length === 0) {
            throw new InvalidRegionError();
        }
        return this.URL_PREFIX + values[0].host;
    }
}

export enum LeagueUrl {
    SERVICE, REGION,
}
