
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';

export interface KalturaDataEntryBaseFilterArgs  extends KalturaBaseEntryFilterArgs {
    
}


export class KalturaDataEntryBaseFilter extends KalturaBaseEntryFilter {

    

    constructor(data? : KalturaDataEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDataEntryBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDataEntryBaseFilter'] = KalturaDataEntryBaseFilter;