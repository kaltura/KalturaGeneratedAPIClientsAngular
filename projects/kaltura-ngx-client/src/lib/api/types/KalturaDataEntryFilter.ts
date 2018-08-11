
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataEntryBaseFilter, KalturaDataEntryBaseFilterArgs } from './KalturaDataEntryBaseFilter';

export interface KalturaDataEntryFilterArgs  extends KalturaDataEntryBaseFilterArgs {
    
}


export class KalturaDataEntryFilter extends KalturaDataEntryBaseFilter {

    

    constructor(data? : KalturaDataEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDataEntryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDataEntryFilter'] = KalturaDataEntryFilter;