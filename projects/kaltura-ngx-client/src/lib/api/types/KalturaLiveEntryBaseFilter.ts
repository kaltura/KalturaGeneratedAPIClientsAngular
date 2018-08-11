
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaEntryFilter, KalturaMediaEntryFilterArgs } from './KalturaMediaEntryFilter';

export interface KalturaLiveEntryBaseFilterArgs  extends KalturaMediaEntryFilterArgs {
    
}


export class KalturaLiveEntryBaseFilter extends KalturaMediaEntryFilter {

    

    constructor(data? : KalturaLiveEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveEntryBaseFilter'] = KalturaLiveEntryBaseFilter;