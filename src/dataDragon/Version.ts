import { BaseService } from '.';

export class Version extends BaseService {

    public getVersioninfo(): Promise<string[]> {
        return this
            .get(`${this.baseHttpsUrl}/api/versions.json`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
}
