
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUser, KalturaUserArgs } from './KalturaUser';

export interface KalturaAdminUserArgs  extends KalturaUserArgs {
    
}


export class KalturaAdminUser extends KalturaUser {

    

    constructor(data? : KalturaAdminUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdminUser' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAdminUser'] = KalturaAdminUser;