
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryRecycleActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'baseEntry' action 'recycle'.
 *
 * Usage: Move the entry to the recycle bin
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export class BaseEntryRecycleAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;

    constructor(data : BaseEntryRecycleActionArgs)
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
				action : { type : 'c', default : 'recycle' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

