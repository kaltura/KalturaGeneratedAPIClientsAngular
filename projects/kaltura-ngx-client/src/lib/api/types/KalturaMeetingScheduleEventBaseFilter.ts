
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventFilter, KalturaEntryScheduleEventFilterArgs } from './KalturaEntryScheduleEventFilter';

export interface KalturaMeetingScheduleEventBaseFilterArgs  extends KalturaEntryScheduleEventFilterArgs {
    
}


export class KalturaMeetingScheduleEventBaseFilter extends KalturaEntryScheduleEventFilter {

    

    constructor(data? : KalturaMeetingScheduleEventBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMeetingScheduleEventBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMeetingScheduleEventBaseFilter'] = KalturaMeetingScheduleEventBaseFilter;