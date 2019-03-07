
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskAbortActionArgs  extends KalturaRequestArgs {
    id : number;
	abortReason? : string;
}

/**
 * Build request payload for service 'entryVendorTask' action 'abort'.
 *
 * Usage: Cancel entry task. will only occur for task in PENDING or PENDING_MODERATION status
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskAbortAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;
	abortReason : string;

    constructor(data : EntryVendorTaskAbortActionArgs)
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
				action : { type : 'c', default : 'abort' },
				id : { type : 'n' },
				abortReason : { type : 's' }
            }
        );
        return result;
    }
}

