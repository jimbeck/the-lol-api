import axios, {AxiosPromise, AxiosResponse} from 'axios';

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

    public get(url, isStatic: boolean = false) {
        return axios.get(url)
            .then((response) => {
                return response;
            });
    }

    public post(url) {
        return axios.post(url);
    }

    public put(url) {
        return axios.put(url);
    }
}
