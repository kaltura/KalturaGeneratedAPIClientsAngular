
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileRequestDryRunActionArgs  extends KalturaRequestArgs {
    scheduledTaskProfileId : number;
	maxResults? : number;
}

/**
 * Build request payload for service 'scheduledTaskProfile' action 'requestDryRun'.
 *
 * 
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduledTaskProfileRequestDryRunAction extends KalturaRequest<number> {

    scheduledTaskProfileId : number;
	maxResults : number;

    constructor(data : ScheduledTaskProfileRequestDryRunActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
        if (typeof this.maxResults === 'undefined') this.maxResults = 500;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c', default : 'requestDryRun' },
				scheduledTaskProfileId : { type : 'n' },
				maxResults : { type : 'n' }
            }
        );
        return result;
    }
}

