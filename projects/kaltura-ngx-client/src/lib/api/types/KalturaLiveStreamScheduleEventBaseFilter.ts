
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventFilter, KalturaEntryScheduleEventFilterArgs } from './KalturaEntryScheduleEventFilter';

export interface KalturaLiveStreamScheduleEventBaseFilterArgs  extends KalturaEntryScheduleEventFilterArgs {
    
}


export class KalturaLiveStreamScheduleEventBaseFilter extends KalturaEntryScheduleEventFilter {

    

    constructor(data? : KalturaLiveStreamScheduleEventBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamScheduleEventBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamScheduleEventBaseFilter'] = KalturaLiveStreamScheduleEventBaseFilter;