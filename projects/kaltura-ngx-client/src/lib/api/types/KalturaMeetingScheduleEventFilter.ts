
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMeetingScheduleEventBaseFilter, KalturaMeetingScheduleEventBaseFilterArgs } from './KalturaMeetingScheduleEventBaseFilter';

export interface KalturaMeetingScheduleEventFilterArgs  extends KalturaMeetingScheduleEventBaseFilterArgs {
    
}


export class KalturaMeetingScheduleEventFilter extends KalturaMeetingScheduleEventBaseFilter {

    

    constructor(data? : KalturaMeetingScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMeetingScheduleEventFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMeetingScheduleEventFilter'] = KalturaMeetingScheduleEventFilter;