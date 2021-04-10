
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskRejectActionArgs  extends KalturaRequestArgs {
    id : number;
	rejectReason? : string;
}

/**
 * Build request payload for service 'entryVendorTask' action 'reject'.
 *
 * Usage: Reject entry vendor task for execution
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskRejectAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;
	rejectReason : string;

    constructor(data : EntryVendorTaskRejectActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryVendorTask', responseConstructor : KalturaEntryVendorTask  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_entryvendortask' },
				action : { type : 'c', default : 'reject' },
				id : { type : 'n' },
				rejectReason : { type : 's' }
            }
        );
        return result;
    }
}

