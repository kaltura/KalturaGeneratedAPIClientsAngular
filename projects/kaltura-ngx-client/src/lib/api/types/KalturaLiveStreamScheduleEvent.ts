
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';

export interface KalturaLiveStreamScheduleEventArgs  extends KalturaEntryScheduleEventArgs {
    projectedAudience? : number;
}


export class KalturaLiveStreamScheduleEvent extends KalturaEntryScheduleEvent {

    projectedAudience : number;

    constructor(data? : KalturaLiveStreamScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamScheduleEvent' },
				projectedAudience : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamScheduleEvent'] = KalturaLiveStreamScheduleEvent;