export declare class UrlBuilder {
    static buildUrl(type: LeagueUrl, path: string, apiKey: string, region: string): string;
    private static URL_PREFIX;
    private static URL_SUFFIX;
    private static retrieveServiceUrlByRegionCode(regionCode);
    private static retrieveRegionalServiceUrlByLocation(location);
}
export declare enum LeagueUrl {
    SERVICE = 0,
    REGION = 1,
}
