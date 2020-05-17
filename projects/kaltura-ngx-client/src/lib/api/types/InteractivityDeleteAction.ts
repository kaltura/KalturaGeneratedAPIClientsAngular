
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface InteractivityDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'interactivity' action 'delete'.
 *
 * Usage: Delete a interactivity object by entry id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class InteractivityDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : InteractivityDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'interactivity_interactivity' },
				action : { type : 'c', default : 'delete' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

