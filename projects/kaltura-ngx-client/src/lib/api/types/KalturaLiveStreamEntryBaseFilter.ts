
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveEntryFilter, KalturaLiveEntryFilterArgs } from './KalturaLiveEntryFilter';

export interface KalturaLiveStreamEntryBaseFilterArgs  extends KalturaLiveEntryFilterArgs {
    
}


export class KalturaLiveStreamEntryBaseFilter extends KalturaLiveEntryFilter {

    

    constructor(data? : KalturaLiveStreamEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamEntryBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamEntryBaseFilter'] = KalturaLiveStreamEntryBaseFilter;