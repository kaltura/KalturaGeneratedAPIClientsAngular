
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskUpdateJobActionArgs  extends KalturaRequestArgs {
    id : number;
	entryVendorTask : KalturaEntryVendorTask;
}

/**
 * Build request payload for service 'entryVendorTask' action 'updateJob'.
 *
 * Usage: Update entry vendor task. Only the properties that were set will be updated
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskUpdateJobAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;
	entryVendorTask : KalturaEntryVendorTask;

    constructor(data : EntryVendorTaskUpdateJobActionArgs)
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
				action : { type : 'c', default : 'updateJob' },
				id : { type : 'n' },
				entryVendorTask : { type : 'o', subTypeConstructor : KalturaEntryVendorTask, subType : 'KalturaEntryVendorTask' }
            }
        );
        return result;
    }
}

