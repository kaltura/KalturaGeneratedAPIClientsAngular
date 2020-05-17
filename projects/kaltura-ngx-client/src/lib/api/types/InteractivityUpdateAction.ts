
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaInteractivity } from './KalturaInteractivity';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface InteractivityUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version : number;
	kalturaInteractivity : KalturaInteractivity;
}

/**
 * Build request payload for service 'interactivity' action 'update'.
 *
 * Usage: Update an existing interactivity object
 *
 * Server response type:         KalturaInteractivity
 * Server failure response type: KalturaAPIException
 */
export class InteractivityUpdateAction extends KalturaRequest<KalturaInteractivity> {

    entryId : string;
	version : number;
	kalturaInteractivity : KalturaInteractivity;

    constructor(data : InteractivityUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				version : { type : 'n' },
				kalturaInteractivity : { type : 'o', subTypeConstructor : KalturaInteractivity, subType : 'KalturaInteractivity' }
            }
        );
        return result;
    }
}

