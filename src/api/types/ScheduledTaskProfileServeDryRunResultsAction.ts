
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface ScheduledTaskProfileServeDryRunResultsActionArgs  extends KalturaFileRequestArgs {
    requestId : number;
}

/**
 * Build request payload for service 'scheduledTaskProfile' action 'serveDryRunResults'.
 *
 * Usage: Serves dry run results by its request id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class ScheduledTaskProfileServeDryRunResultsAction extends KalturaFileRequest {

    requestId : number;

    constructor(data : ScheduledTaskProfileServeDryRunResultsActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c', default : 'serveDryRunResults' },
				requestId : { type : 'n' }
            }
        );
        return result;
    }
}

