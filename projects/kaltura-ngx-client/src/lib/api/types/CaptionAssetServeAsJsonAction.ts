
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface CaptionAssetServeAsJsonActionArgs  extends KalturaFileRequestArgs {
    captionAssetId : string;
}

/**
 * Build request payload for service 'captionAsset' action 'serveAsJson'.
 *
 * Usage: Serves caption file as Json by its ID
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetServeAsJsonAction extends KalturaFileRequest {

    captionAssetId : string;

    constructor(data : CaptionAssetServeAsJsonActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionasset' },
				action : { type : 'c', default : 'serveAsJson' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

