
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddFromEntryActionArgs  extends KalturaRequestArgs {
    sourceEntryId : string;
	mediaEntry? : KalturaMediaEntry;
	sourceFlavorParamsId? : number;
}

/**
 * Build request payload for service 'media' action 'addFromEntry'.
 *
 * Usage: Copy entry into new entry
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaAddFromEntryAction extends KalturaRequest<KalturaMediaEntry> {

    sourceEntryId : string;
	mediaEntry : KalturaMediaEntry;
	sourceFlavorParamsId : number;

    constructor(data : MediaAddFromEntryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'addFromEntry' },
				sourceEntryId : { type : 's' },
				mediaEntry : { type : 'o', subTypeConstructor : KalturaMediaEntry, subType : 'KalturaMediaEntry' },
				sourceFlavorParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

