
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectListResponse } from './KalturaObjectListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileGetDryRunResultsActionArgs  extends KalturaRequestArgs {
    requestId : number;
}

/**
 * Build request payload for service 'scheduledTaskProfile' action 'getDryRunResults'.
 *
 * 
 *
 * Server response type:         KalturaObjectListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduledTaskProfileGetDryRunResultsAction extends KalturaRequest<KalturaObjectListResponse> {

    requestId : number;

    constructor(data : ScheduledTaskProfileGetDryRunResultsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaObjectListResponse', responseConstructor : KalturaObjectListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c', default : 'getDryRunResults' },
				requestId : { type : 'n' }
            }
        );
        return result;
    }
}

