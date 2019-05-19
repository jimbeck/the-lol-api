import axios, {AxiosPromise, AxiosResponse} from 'axios';
import { NoRegionWasProvided } from '../errors';

export class BaseService {
    protected baseHttpsUrl = `https://ddragon.leagueoflegends.com`;
    protected baseUrl = `http://ddragon.leagueoflegends.com/cdn`;
    private defaultRegionCode: string;

    constructor(defaultRegionCode?: string) {
        this.defaultRegionCode = defaultRegionCode;
    }

    public getRegionCode(regionCode?: string) {
        if (!regionCode && !this.defaultRegionCode) {
            throw new NoRegionWasProvided();
        }
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
