
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	entryVendorTask : KalturaEntryVendorTask;
}

/**
 * Build request payload for service 'entryVendorTask' action 'update'.
 *
 * Usage: Update entry vendor task. Only the properties that were set will be updated
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskUpdateAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;
	entryVendorTask : KalturaEntryVendorTask;

    constructor(data : EntryVendorTaskUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				entryVendorTask : { type : 'o', subTypeConstructor : KalturaEntryVendorTask, subType : 'KalturaEntryVendorTask' }
            }
        );
        return result;
    }
}

