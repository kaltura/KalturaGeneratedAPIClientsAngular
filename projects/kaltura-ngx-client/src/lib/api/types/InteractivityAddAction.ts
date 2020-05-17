
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaInteractivity } from './KalturaInteractivity';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface InteractivityAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	kalturaInteractivity : KalturaInteractivity;
}

/**
 * Build request payload for service 'interactivity' action 'add'.
 *
 * Usage: Add a interactivity object
 *
 * Server response type:         KalturaInteractivity
 * Server failure response type: KalturaAPIException
 */
export class InteractivityAddAction extends KalturaRequest<KalturaInteractivity> {

    entryId : string;
	kalturaInteractivity : KalturaInteractivity;

    constructor(data : InteractivityAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaInteractivity', responseConstructor : KalturaInteractivity  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'interactivity_interactivity' },
				action : { type : 'c', default : 'add' },
				entryId : { type : 's' },
				kalturaInteractivity : { type : 'o', subTypeConstructor : KalturaInteractivity, subType : 'KalturaInteractivity' }
            }
        );
        return result;
    }
}

