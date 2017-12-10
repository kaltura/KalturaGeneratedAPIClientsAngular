
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version? : number;
}

/**
 * Build request payload for service 'mixing' action 'get'.
 *
 * Usage: Get mix entry by id
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MixingGetAction extends KalturaRequest<KalturaMixEntry> {

    entryId : string;
	version : number;

    constructor(data : MixingGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMixEntry', responseConstructor : KalturaMixEntry  });
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mixing' },
				action : { type : 'c', default : 'get' },
				entryId : { type : 's' },
				version : { type : 'n' }
            }
        );
        return result;
    }
}

