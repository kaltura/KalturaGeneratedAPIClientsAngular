
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventListResponse } from './KalturaScheduleEventListResponse';

import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventGetConflictsActionArgs  extends KalturaRequestArgs {
    resourceIds : string;
	scheduleEvent : KalturaScheduleEvent;
	scheduleEventIdToIgnore? : string;
}

/**
 * Build request payload for service 'scheduleEvent' action 'getConflicts'.
 *
 * Usage: List conflicting events for resourcesIds by event's dates
 *
 * Server response type:         KalturaScheduleEventListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduleEventGetConflictsAction extends KalturaRequest<KalturaScheduleEventListResponse> {

    resourceIds : string;
	scheduleEvent : KalturaScheduleEvent;
	scheduleEventIdToIgnore : string;

    constructor(data : ScheduleEventGetConflictsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEventListResponse', responseConstructor : KalturaScheduleEventListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleevent' },
				action : { type : 'c', default : 'getConflicts' },
				resourceIds : { type : 's' },
				scheduleEvent : { type : 'o', subTypeConstructor : KalturaScheduleEvent, subType : 'KalturaScheduleEvent' },
				scheduleEventIdToIgnore : { type : 's' }
            }
        );
        return result;
    }
}

