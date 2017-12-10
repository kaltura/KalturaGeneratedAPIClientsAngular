
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventResourceAddActionArgs  extends KalturaRequestArgs {
    scheduleEventResource : KalturaScheduleEventResource;
}

/**
 * Build request payload for service 'scheduleEventResource' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleEventResource object
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduleEventResourceAddAction extends KalturaRequest<KalturaScheduleEventResource> {

    scheduleEventResource : KalturaScheduleEventResource;

    constructor(data : ScheduleEventResourceAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				scheduleEventResource : { type : 'o', subTypeConstructor : KalturaScheduleEventResource, subType : 'KalturaScheduleEventResource' }
            }
        );
        return result;
    }
}

