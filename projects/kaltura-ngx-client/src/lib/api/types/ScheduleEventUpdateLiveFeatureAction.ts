
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamScheduleEvent } from './KalturaLiveStreamScheduleEvent';

import { KalturaLiveFeature } from './KalturaLiveFeature';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventUpdateLiveFeatureActionArgs  extends KalturaRequestArgs {
    scheduledEventId : number;
	featureName : string;
	liveFeature : KalturaLiveFeature;
}

/**
 * Build request payload for service 'scheduleEvent' action 'updateLiveFeature'.
 *
 * Usage: Add feature to live event
 *
 * Server response type:         KalturaLiveStreamScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export class ScheduleEventUpdateLiveFeatureAction extends KalturaRequest<KalturaLiveStreamScheduleEvent> {

    scheduledEventId : number;
	featureName : string;
	liveFeature : KalturaLiveFeature;

    constructor(data : ScheduleEventUpdateLiveFeatureActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamScheduleEvent', responseConstructor : KalturaLiveStreamScheduleEvent  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleevent' },
				action : { type : 'c', default : 'updateLiveFeature' },
				scheduledEventId : { type : 'n' },
				featureName : { type : 's' },
				liveFeature : { type : 'o', subTypeConstructor : KalturaLiveFeature, subType : 'KalturaLiveFeature' }
            }
        );
        return result;
    }
}

