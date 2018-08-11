
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventFilter, KalturaEntryScheduleEventFilterArgs } from './KalturaEntryScheduleEventFilter';

export interface KalturaRecordScheduleEventBaseFilterArgs  extends KalturaEntryScheduleEventFilterArgs {
    
}


export class KalturaRecordScheduleEventBaseFilter extends KalturaEntryScheduleEventFilter {

    

    constructor(data? : KalturaRecordScheduleEventBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecordScheduleEventBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRecordScheduleEventBaseFilter'] = KalturaRecordScheduleEventBaseFilter;