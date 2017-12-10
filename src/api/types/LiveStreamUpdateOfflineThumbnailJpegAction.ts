
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface LiveStreamUpdateOfflineThumbnailJpegActionArgs  extends KalturaUploadRequestArgs {
    entryId : string;
	fileData : File;
}

/**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailJpeg'.
 *
 * Usage: Update live stream entry thumbnail using a raw jpeg file
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class LiveStreamUpdateOfflineThumbnailJpegAction extends KalturaUploadRequest<KalturaLiveStreamEntry> {

    entryId : string;
	fileData : File;

    constructor(data : LiveStreamUpdateOfflineThumbnailJpegActionArgs)
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
				action : { type : 'c', default : 'updateOfflineThumbnailJpeg' },
				entryId : { type : 's' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}

