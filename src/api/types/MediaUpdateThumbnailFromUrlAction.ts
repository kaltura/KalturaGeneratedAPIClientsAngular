
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaUpdateThumbnailFromUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	url : string;
}

/**
 * Build request payload for service 'media' action 'updateThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaUpdateThumbnailFromUrlAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	url : string;

    constructor(data : MediaUpdateThumbnailFromUrlActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'updateThumbnailFromUrl' },
				entryId : { type : 's' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

