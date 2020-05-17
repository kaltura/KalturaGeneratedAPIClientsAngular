
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVolatileInteractivity } from './KalturaVolatileInteractivity';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VolatileInteractivityGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'volatileInteractivity' action 'get'.
 *
 * Usage: Retrieve a volatile interactivity object by entry id
 *
 * Server response type:         KalturaVolatileInteractivity
 * Server failure response type: KalturaAPIException
 */
export class VolatileInteractivityGetAction extends KalturaRequest<KalturaVolatileInteractivity> {

    entryId : string;

    constructor(data : VolatileInteractivityGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVolatileInteractivity', responseConstructor : KalturaVolatileInteractivity  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'interactivity_volatileinteractivity' },
				action : { type : 'c', default : 'get' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

