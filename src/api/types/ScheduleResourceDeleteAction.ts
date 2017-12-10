
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleResourceDeleteActionArgs  extends KalturaRequestArgs {
    scheduleResourceId : number;
}

/**
 * Build request payload for service 'scheduleResource' action 'delete'.
 *
 * Usage: Mark the KalturaScheduleResource object as deleted
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduleResourceDeleteAction extends KalturaRequest<KalturaScheduleResource> {

    scheduleResourceId : number;

    constructor(data : ScheduleResourceDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleResource', responseConstructor : KalturaScheduleResource  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleresource' },
				action : { type : 'c', default : 'delete' },
				scheduleResourceId : { type : 'n' }
            }
        );
        return result;
    }
}

