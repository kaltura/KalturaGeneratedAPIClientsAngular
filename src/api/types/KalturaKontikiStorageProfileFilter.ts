
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKontikiStorageProfileBaseFilter, KalturaKontikiStorageProfileBaseFilterArgs } from './KalturaKontikiStorageProfileBaseFilter';

export interface KalturaKontikiStorageProfileFilterArgs  extends KalturaKontikiStorageProfileBaseFilterArgs {
    
}


export class KalturaKontikiStorageProfileFilter extends KalturaKontikiStorageProfileBaseFilter {

    

    constructor(data? : KalturaKontikiStorageProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKontikiStorageProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKontikiStorageProfileFilter',KalturaKontikiStorageProfileFilter);
