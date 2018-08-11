
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface CaptionAssetServeActionArgs  extends KalturaFileRequestArgs {
    captionAssetId : string;
}

/**
 * Build request payload for service 'captionAsset' action 'serve'.
 *
 * Usage: Serves caption by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetServeAction extends KalturaFileRequest {

    captionAssetId : string;

    constructor(data : CaptionAssetServeActionArgs)
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
				action : { type : 'c', default : 'serve' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

