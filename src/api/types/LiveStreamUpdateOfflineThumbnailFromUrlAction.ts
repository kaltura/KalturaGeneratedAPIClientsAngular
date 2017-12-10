
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamUpdateOfflineThumbnailFromUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	url : string;
}

/**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamUpdateOfflineThumbnailFromUrlAction extends KalturaRequest<KalturaLiveStreamEntry> {

    entryId : string;
	url : string;

    constructor(data : LiveStreamUpdateOfflineThumbnailFromUrlActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamEntry', responseConstructor : KalturaLiveStreamEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'updateOfflineThumbnailFromUrl' },
				entryId : { type : 's' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

