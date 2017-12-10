
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'scheduledTaskProfile' action 'get'.
 *
 * Usage: Retrieve a scheduled task profile by id
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduledTaskProfileGetAction extends KalturaRequest<KalturaScheduledTaskProfile> {

    id : number;

    constructor(data : ScheduledTaskProfileGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduledTaskProfile', responseConstructor : KalturaScheduledTaskProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

