
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MediaUpdateThumbnailJpegActionArgs  extends KalturaUploadRequestArgs {
    entryId : string;
	fileData : File;
}

/**
 * Build request payload for service 'media' action 'updateThumbnailJpeg'.
 *
 * Usage: Update media entry thumbnail using a raw jpeg file
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class MediaUpdateThumbnailJpegAction extends KalturaUploadRequest<KalturaMediaEntry> {

    entryId : string;
	fileData : File;

    constructor(data : MediaUpdateThumbnailJpegActionArgs)
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
				action : { type : 'c', default : 'updateThumbnailJpeg' },
				entryId : { type : 's' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}

