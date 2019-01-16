
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventListResponse } from './KalturaScheduleEventListResponse';

import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaScheduleEventConflictType } from './KalturaScheduleEventConflictType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventGetConflictsActionArgs  extends KalturaRequestArgs {
    resourceIds : string;
	scheduleEvent : KalturaScheduleEvent;
	scheduleEventIdToIgnore? : string;
	scheduleEventConflictType? : KalturaScheduleEventConflictType;
}

/**
 * Build request payload for service 'scheduleEvent' action 'getConflicts'.
 *
 * Usage: List conflicting events for resourcesIds by event's dates
 *
 * Server response type:         KalturaScheduleEventListResponse
 * Server failure response type: KalturaAPIException
 */
export class ScheduleEventGetConflictsAction extends KalturaRequest<KalturaScheduleEventListResponse> {

    resourceIds : string;
	scheduleEvent : KalturaScheduleEvent;
	scheduleEventIdToIgnore : string;
	scheduleEventConflictType : KalturaScheduleEventConflictType;

    constructor(data : ScheduleEventGetConflictsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEventListResponse', responseConstructor : KalturaScheduleEventListResponse  });
        if (typeof this.scheduleEventConflictType === 'undefined') this.scheduleEventConflictType = 1;
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
				scheduleEventIdToIgnore : { type : 's' },
				scheduleEventConflictType : { type : 'en', subTypeConstructor : KalturaScheduleEventConflictType, subType : 'KalturaScheduleEventConflictType' }
            }
        );
        return result;
    }
}

