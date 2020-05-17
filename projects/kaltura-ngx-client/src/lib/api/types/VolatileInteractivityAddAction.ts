
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVolatileInteractivity } from './KalturaVolatileInteractivity';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VolatileInteractivityAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	kalturaVolatileInteractivity : KalturaVolatileInteractivity;
}

/**
 * Build request payload for service 'volatileInteractivity' action 'add'.
 *
 * Usage: add a volatile interactivity object
 *
 * Server response type:         KalturaVolatileInteractivity
 * Server failure response type: KalturaAPIException
 */
export class VolatileInteractivityAddAction extends KalturaRequest<KalturaVolatileInteractivity> {

    entryId : string;
	kalturaVolatileInteractivity : KalturaVolatileInteractivity;

    constructor(data : VolatileInteractivityAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entryId : { type : 's' },
				kalturaVolatileInteractivity : { type : 'o', subTypeConstructor : KalturaVolatileInteractivity, subType : 'KalturaVolatileInteractivity' }
            }
        );
        return result;
    }
}

