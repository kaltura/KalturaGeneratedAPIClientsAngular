
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaApproveReplaceActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'media' action 'approveReplace'.
 *
 * Usage: Approves media replacement
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaApproveReplaceAction extends KalturaRequest<KalturaMediaEntry> {

    entryId : string;

    constructor(data : MediaApproveReplaceActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'approveReplace' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

