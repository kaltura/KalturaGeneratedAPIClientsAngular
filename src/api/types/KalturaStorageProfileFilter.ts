
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageProfileBaseFilter, KalturaStorageProfileBaseFilterArgs } from './KalturaStorageProfileBaseFilter';

export interface KalturaStorageProfileFilterArgs  extends KalturaStorageProfileBaseFilterArgs {
    
}


export class KalturaStorageProfileFilter extends KalturaStorageProfileBaseFilter {

    

    constructor(data? : KalturaStorageProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStorageProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStorageProfileFilter',KalturaStorageProfileFilter);
