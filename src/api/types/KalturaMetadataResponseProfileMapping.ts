
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaMetadataResponseProfileMapping',KalturaMetadataResponseProfileMapping);
