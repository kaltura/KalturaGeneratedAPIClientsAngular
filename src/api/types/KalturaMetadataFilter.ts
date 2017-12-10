
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataBaseFilter, KalturaMetadataBaseFilterArgs } from './KalturaMetadataBaseFilter';

export interface KalturaMetadataFilterArgs  extends KalturaMetadataBaseFilterArgs {
    
}


export class KalturaMetadataFilter extends KalturaMetadataBaseFilter {

    

    constructor(data? : KalturaMetadataFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataFilter',KalturaMetadataFilter);
