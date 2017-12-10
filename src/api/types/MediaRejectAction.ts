
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaRejectActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'media' action 'reject'.
 *
 * Usage: Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaRejectAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : MediaRejectActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'reject' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

