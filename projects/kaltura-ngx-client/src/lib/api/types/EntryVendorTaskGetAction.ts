
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'entryVendorTask' action 'get'.
 *
 * Usage: Retrieve specific entry vendor task by id
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskGetAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;

    constructor(data : EntryVendorTaskGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

