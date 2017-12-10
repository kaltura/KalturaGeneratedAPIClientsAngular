
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventResourceUpdateActionArgs  extends KalturaRequestArgs {
    scheduleEventId : number;
	scheduleResourceId : number;
	scheduleEventResource : KalturaScheduleEventResource;
}

/**
 * Build request payload for service 'scheduleEventResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleEventResource object
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduleEventResourceUpdateAction extends KalturaRequest<KalturaScheduleEventResource> {

    scheduleEventId : number;
	scheduleResourceId : number;
	scheduleEventResource : KalturaScheduleEventResource;

    constructor(data : ScheduleEventResourceUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEventResource', responseConstructor : KalturaScheduleEventResource  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleeventresource' },
				action : { type : 'c', default : 'update' },
				scheduleEventId : { type : 'n' },
				scheduleResourceId : { type : 'n' },
				scheduleEventResource : { type : 'o', subTypeConstructor : KalturaScheduleEventResource, subType : 'KalturaScheduleEventResource' }
            }
        );
        return result;
    }
}

