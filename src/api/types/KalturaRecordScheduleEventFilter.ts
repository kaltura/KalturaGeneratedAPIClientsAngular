
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordScheduleEventBaseFilter, KalturaRecordScheduleEventBaseFilterArgs } from './KalturaRecordScheduleEventBaseFilter';

export interface KalturaRecordScheduleEventFilterArgs  extends KalturaRecordScheduleEventBaseFilterArgs {
    
}


export class KalturaRecordScheduleEventFilter extends KalturaRecordScheduleEventBaseFilter {

    

    constructor(data? : KalturaRecordScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecordScheduleEventFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecordScheduleEventFilter',KalturaRecordScheduleEventFilter);
