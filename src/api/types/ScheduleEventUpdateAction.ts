
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventUpdateActionArgs  extends KalturaRequestArgs {
    scheduleEventId : number;
	scheduleEvent : KalturaScheduleEvent;
}

/**
 * Build request payload for service 'scheduleEvent' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleEvent object
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduleEventUpdateAction extends KalturaRequest<KalturaScheduleEvent> {

    scheduleEventId : number;
	scheduleEvent : KalturaScheduleEvent;

    constructor(data : ScheduleEventUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEvent', responseConstructor : KalturaScheduleEvent  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleevent' },
				action : { type : 'c', default : 'update' },
				scheduleEventId : { type : 'n' },
				scheduleEvent : { type : 'o', subTypeConstructor : KalturaScheduleEvent, subType : 'KalturaScheduleEvent' }
            }
        );
        return result;
    }
}

