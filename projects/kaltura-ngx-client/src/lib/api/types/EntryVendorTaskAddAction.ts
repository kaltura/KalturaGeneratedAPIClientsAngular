
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskAddActionArgs  extends KalturaRequestArgs {
    entryVendorTask : KalturaEntryVendorTask;
}

/**
 * Build request payload for service 'entryVendorTask' action 'add'.
 *
 * Usage: Allows you to add a entry vendor task
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskAddAction extends KalturaRequest<KalturaEntryVendorTask> {

    entryVendorTask : KalturaEntryVendorTask;

    constructor(data : EntryVendorTaskAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entryVendorTask : { type : 'o', subTypeConstructor : KalturaEntryVendorTask, subType : 'KalturaEntryVendorTask' }
            }
        );
        return result;
    }
}

