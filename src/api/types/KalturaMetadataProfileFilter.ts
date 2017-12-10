
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataProfileBaseFilter, KalturaMetadataProfileBaseFilterArgs } from './KalturaMetadataProfileBaseFilter';

export interface KalturaMetadataProfileFilterArgs  extends KalturaMetadataProfileBaseFilterArgs {
    
}


export class KalturaMetadataProfileFilter extends KalturaMetadataProfileBaseFilter {

    

    constructor(data? : KalturaMetadataProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataProfileFilter',KalturaMetadataProfileFilter);
