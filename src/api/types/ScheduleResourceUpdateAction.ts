
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleResourceUpdateActionArgs  extends KalturaRequestArgs {
    scheduleResourceId : number;
	scheduleResource : KalturaScheduleResource;
}

/**
 * Build request payload for service 'scheduleResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduleResourceUpdateAction extends KalturaRequest<KalturaScheduleResource> {

    scheduleResourceId : number;
	scheduleResource : KalturaScheduleResource;

    constructor(data : ScheduleResourceUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				scheduleResourceId : { type : 'n' },
				scheduleResource : { type : 'o', subTypeConstructor : KalturaScheduleResource, subType : 'KalturaScheduleResource' }
            }
        );
        return result;
    }
}

