import { BaseService } from './dataDragon';
import { RealmDto } from './domain/dataDragon';

export class Realm extends BaseService {

    public getRealmInfo(regionCode?: string): Promise<RealmDto> {
        return this
            .get(`${this.baseHttpsUrl}/realms/${this.getRegionCode(regionCode).toLowerCase()}.json`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
}
