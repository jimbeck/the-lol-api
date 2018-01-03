import { AxiosPromise, AxiosResponse } from 'axios';
export declare class BaseService {
    protected apiKey: string;
    private defaultRegionCode;
    constructor(apiKey: string, defaultRegionCode?: string);
    getRegionCode(regionCode?: string): string;
    get(url: any, isStatic?: boolean): Promise<AxiosResponse<any>>;
    post(url: any): AxiosPromise<any>;
    put(url: any): AxiosPromise<any>;
}
