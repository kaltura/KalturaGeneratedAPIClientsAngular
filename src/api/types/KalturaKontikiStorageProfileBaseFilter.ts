
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageProfileFilter, KalturaStorageProfileFilterArgs } from './KalturaStorageProfileFilter';

export interface KalturaKontikiStorageProfileBaseFilterArgs  extends KalturaStorageProfileFilterArgs {
    
}


export class KalturaKontikiStorageProfileBaseFilter extends KalturaStorageProfileFilter {

    

    constructor(data? : KalturaKontikiStorageProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKontikiStorageProfileBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKontikiStorageProfileBaseFilter',KalturaKontikiStorageProfileBaseFilter);
