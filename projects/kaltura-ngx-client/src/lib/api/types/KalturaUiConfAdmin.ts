
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConf, KalturaUiConfArgs } from './KalturaUiConf';

export interface KalturaUiConfAdminArgs  extends KalturaUiConfArgs {
    isPublic? : boolean;
}


export class KalturaUiConfAdmin extends KalturaUiConf {

    isPublic : boolean;

    constructor(data? : KalturaUiConfAdminArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUiConfAdmin' },
				isPublic : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUiConfAdmin'] = KalturaUiConfAdmin;