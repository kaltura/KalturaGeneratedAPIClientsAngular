
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveChannelSegmentBaseFilter, KalturaLiveChannelSegmentBaseFilterArgs } from './KalturaLiveChannelSegmentBaseFilter';

export interface KalturaLiveChannelSegmentFilterArgs  extends KalturaLiveChannelSegmentBaseFilterArgs {
    
}


export class KalturaLiveChannelSegmentFilter extends KalturaLiveChannelSegmentBaseFilter {

    

    constructor(data? : KalturaLiveChannelSegmentFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveChannelSegmentFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveChannelSegmentFilter'] = KalturaLiveChannelSegmentFilter;