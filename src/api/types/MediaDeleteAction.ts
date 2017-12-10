
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'media' action 'delete'.
 *
 * Usage: Delete a media entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : MediaDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

