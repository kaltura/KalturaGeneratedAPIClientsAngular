
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaMetadataProfileFilter'] = KalturaMetadataProfileFilter;