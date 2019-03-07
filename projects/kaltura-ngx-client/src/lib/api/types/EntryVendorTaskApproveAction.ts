
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskApproveActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'entryVendorTask' action 'approve'.
 *
 * Usage: Approve entry vendor task for execution
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskApproveAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;

    constructor(data : EntryVendorTaskApproveActionArgs)
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
				action : { type : 'c', default : 'approve' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

