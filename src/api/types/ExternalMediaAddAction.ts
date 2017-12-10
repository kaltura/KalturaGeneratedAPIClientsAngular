
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalMediaAddActionArgs  extends KalturaRequestArgs {
    entry : KalturaExternalMediaEntry;
}

/**
 * Build request payload for service 'externalMedia' action 'add'.
 *
 * Usage: Add external media entry
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExternalMediaAddAction extends KalturaRequest<KalturaExternalMediaEntry> {

    entry : KalturaExternalMediaEntry;

    constructor(data : ExternalMediaAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entry : { type : 'o', subTypeConstructor : KalturaExternalMediaEntry, subType : 'KalturaExternalMediaEntry' }
            }
        );
        return result;
    }
}

