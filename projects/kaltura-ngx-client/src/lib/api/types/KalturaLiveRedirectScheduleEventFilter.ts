
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventFilter, KalturaEntryScheduleEventFilterArgs } from './KalturaEntryScheduleEventFilter';

export interface KalturaLiveRedirectScheduleEventFilterArgs  extends KalturaEntryScheduleEventFilterArgs {
    
}


export class KalturaLiveRedirectScheduleEventFilter extends KalturaEntryScheduleEventFilter {

    

    constructor(data? : KalturaLiveRedirectScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveRedirectScheduleEventFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveRedirectScheduleEventFilter'] = KalturaLiveRedirectScheduleEventFilter;