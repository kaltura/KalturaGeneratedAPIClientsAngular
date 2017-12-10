
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageProfile, KalturaStorageProfileArgs } from './KalturaStorageProfile';

export interface KalturaKontikiStorageProfileArgs  extends KalturaStorageProfileArgs {
    serviceToken? : string;
}


export class KalturaKontikiStorageProfile extends KalturaStorageProfile {

    serviceToken : string;

    constructor(data? : KalturaKontikiStorageProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKontikiStorageProfile' },
				serviceToken : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKontikiStorageProfile',KalturaKontikiStorageProfile);
