
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalMediaUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	entry : KalturaExternalMediaEntry;
}

/**
 * Build request payload for service 'externalMedia' action 'update'.
 *
 * Usage: Update external media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExternalMediaUpdateAction extends KalturaRequest<KalturaExternalMediaEntry> {

    id : string;
	entry : KalturaExternalMediaEntry;

    constructor(data : ExternalMediaUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				entry : { type : 'o', subTypeConstructor : KalturaExternalMediaEntry, subType : 'KalturaExternalMediaEntry' }
            }
        );
        return result;
    }
}

