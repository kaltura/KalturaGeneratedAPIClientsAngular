
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskExtendAccessKeyActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'entryVendorTask' action 'extendAccessKey'.
 *
 * Usage: Extend access key in case the existing one has expired
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskExtendAccessKeyAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;

    constructor(data : EntryVendorTaskExtendAccessKeyActionArgs)
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
				action : { type : 'c', default : 'extendAccessKey' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

