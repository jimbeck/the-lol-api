import axios from 'axios';

export class BaseService {
    protected apiKey: string;
    private defaultRegionCode: string;

    constructor(apiKey: string, defaultRegionCode?: string) {
        this.apiKey = apiKey;
        this.defaultRegionCode = defaultRegionCode;
    }

    public getRegionCode(regionCode?: string) {
        if (regionCode) {
            return regionCode;
        }
        return this.defaultRegionCode;
    }

    public get(url) {
        return axios.get(url);
    }

    public post(url) {
        return axios.post(url);
    }

    public put(url) {
        return axios.put(url);
    }
}
