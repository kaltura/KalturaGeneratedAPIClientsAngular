
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaAdminUser',KalturaAdminUser);
