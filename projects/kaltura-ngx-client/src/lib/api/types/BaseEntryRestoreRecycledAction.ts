
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryRestoreRecycledActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'baseEntry' action 'restoreRecycled'.
 *
 * Usage: Restore the entry from the recycle bin
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export class BaseEntryRestoreRecycledAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;

    constructor(data : BaseEntryRestoreRecycledActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'restoreRecycled' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

