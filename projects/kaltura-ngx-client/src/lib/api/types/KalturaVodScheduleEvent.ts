
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';

export interface KalturaVodScheduleEventArgs  extends KalturaEntryScheduleEventArgs {
    
}


export class KalturaVodScheduleEvent extends KalturaEntryScheduleEvent {

    

    constructor(data? : KalturaVodScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVodScheduleEvent' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVodScheduleEvent'] = KalturaVodScheduleEvent;