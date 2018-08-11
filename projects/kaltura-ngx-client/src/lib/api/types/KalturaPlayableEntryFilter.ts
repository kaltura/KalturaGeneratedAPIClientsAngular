
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayableEntryBaseFilter, KalturaPlayableEntryBaseFilterArgs } from './KalturaPlayableEntryBaseFilter';

export interface KalturaPlayableEntryFilterArgs  extends KalturaPlayableEntryBaseFilterArgs {
    
}


export class KalturaPlayableEntryFilter extends KalturaPlayableEntryBaseFilter {

    

    constructor(data? : KalturaPlayableEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayableEntryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayableEntryFilter'] = KalturaPlayableEntryFilter;