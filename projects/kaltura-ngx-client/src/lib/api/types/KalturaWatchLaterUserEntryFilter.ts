
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';

export interface KalturaWatchLaterUserEntryFilterArgs  extends KalturaUserEntryFilterArgs {
    
}


export class KalturaWatchLaterUserEntryFilter extends KalturaUserEntryFilter {

    

    constructor(data? : KalturaWatchLaterUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchLaterUserEntryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWatchLaterUserEntryFilter'] = KalturaWatchLaterUserEntryFilter;