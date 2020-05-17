
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VolatileInteractivityDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'volatileInteractivity' action 'delete'.
 *
 * Usage: Delete a volatile interactivity object by entry id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class VolatileInteractivityDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : VolatileInteractivityDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'interactivity_volatileinteractivity' },
				action : { type : 'c', default : 'delete' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

