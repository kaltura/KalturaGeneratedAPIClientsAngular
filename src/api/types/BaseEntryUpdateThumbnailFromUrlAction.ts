
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryUpdateThumbnailFromUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	url : string;
}

/**
 * Build request payload for service 'baseEntry' action 'updateThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryUpdateThumbnailFromUrlAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	url : string;

    constructor(data : BaseEntryUpdateThumbnailFromUrlActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'updateThumbnailFromUrl' },
				entryId : { type : 's' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

