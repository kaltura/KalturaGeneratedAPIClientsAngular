
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVolatileInteractivity } from './KalturaVolatileInteractivity';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VolatileInteractivityUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version : number;
	kalturaVolatileInteractivity : KalturaVolatileInteractivity;
}

/**
 * Build request payload for service 'volatileInteractivity' action 'update'.
 *
 * Usage: Update a volatile interactivity object
 *
 * Server response type:         KalturaVolatileInteractivity
 * Server failure response type: KalturaAPIException
 */
export class VolatileInteractivityUpdateAction extends KalturaRequest<KalturaVolatileInteractivity> {

    entryId : string;
	version : number;
	kalturaVolatileInteractivity : KalturaVolatileInteractivity;

    constructor(data : VolatileInteractivityUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				version : { type : 'n' },
				kalturaVolatileInteractivity : { type : 'o', subTypeConstructor : KalturaVolatileInteractivity, subType : 'KalturaVolatileInteractivity' }
            }
        );
        return result;
    }
}

