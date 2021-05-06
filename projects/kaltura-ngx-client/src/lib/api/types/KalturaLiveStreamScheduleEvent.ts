
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseLiveScheduleEvent, KalturaBaseLiveScheduleEventArgs } from './KalturaBaseLiveScheduleEvent';

export interface KalturaLiveStreamScheduleEventArgs  extends KalturaBaseLiveScheduleEventArgs {
    sourceEntryId? : string;
	projectedAudience? : number;
	preStartTime? : number;
	postEndTime? : number;
}


export class KalturaLiveStreamScheduleEvent extends KalturaBaseLiveScheduleEvent {

    sourceEntryId : string;
	projectedAudience : number;
	preStartTime : number;
	postEndTime : number;

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
				sourceEntryId : { type : 's' },
				projectedAudience : { type : 'n' },
				preStartTime : { type : 'n' },
				postEndTime : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamScheduleEvent'] = KalturaLiveStreamScheduleEvent;