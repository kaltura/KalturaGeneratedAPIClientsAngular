
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaResponseProfileMapping, KalturaResponseProfileMappingArgs } from './KalturaResponseProfileMapping';

export interface KalturaMetadataResponseProfileMappingArgs  extends KalturaResponseProfileMappingArgs {
    
}


export class KalturaMetadataResponseProfileMapping extends KalturaResponseProfileMapping {

    

    constructor(data? : KalturaMetadataResponseProfileMappingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataResponseProfileMapping' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMetadataResponseProfileMapping'] = KalturaMetadataResponseProfileMapping;