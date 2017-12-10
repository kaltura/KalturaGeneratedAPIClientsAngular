
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';

export interface KalturaRecordScheduleEventArgs  extends KalturaEntryScheduleEventArgs {
    
}


export class KalturaRecordScheduleEvent extends KalturaEntryScheduleEvent {

    

    constructor(data? : KalturaRecordScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecordScheduleEvent' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecordScheduleEvent',KalturaRecordScheduleEvent);
