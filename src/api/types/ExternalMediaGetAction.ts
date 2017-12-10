
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalMediaGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'externalMedia' action 'get'.
 *
 * Usage: Get external media entry by ID
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExternalMediaGetAction extends KalturaRequest<KalturaExternalMediaEntry> {

    id : string;

    constructor(data : ExternalMediaGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaExternalMediaEntry', responseConstructor : KalturaExternalMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'externalmedia_externalmedia' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

