
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamScheduleEventBaseFilter, KalturaLiveStreamScheduleEventBaseFilterArgs } from './KalturaLiveStreamScheduleEventBaseFilter';

export interface KalturaLiveStreamScheduleEventFilterArgs  extends KalturaLiveStreamScheduleEventBaseFilterArgs {
    
}


export class KalturaLiveStreamScheduleEventFilter extends KalturaLiveStreamScheduleEventBaseFilter {

    

    constructor(data? : KalturaLiveStreamScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamScheduleEventFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamScheduleEventFilter'] = KalturaLiveStreamScheduleEventFilter;