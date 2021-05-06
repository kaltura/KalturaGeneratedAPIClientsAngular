
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';

export interface KalturaBaseLiveScheduleEventArgs  extends KalturaEntryScheduleEventArgs {
    
}


export class KalturaBaseLiveScheduleEvent extends KalturaEntryScheduleEvent {

    

    constructor(data? : KalturaBaseLiveScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseLiveScheduleEvent' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseLiveScheduleEvent'] = KalturaBaseLiveScheduleEvent;