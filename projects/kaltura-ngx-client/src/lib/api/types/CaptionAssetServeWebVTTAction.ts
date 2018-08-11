
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface CaptionAssetServeWebVTTActionArgs  extends KalturaFileRequestArgs {
    captionAssetId : string;
	segmentDuration? : number;
	segmentIndex? : number;
	localTimestamp? : number;
}

/**
 * Build request payload for service 'captionAsset' action 'serveWebVTT'.
 *
 * Usage: Serves caption by its id converting it to segmented WebVTT
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetServeWebVTTAction extends KalturaFileRequest {

    captionAssetId : string;
	segmentDuration : number;
	segmentIndex : number;
	localTimestamp : number;

    constructor(data : CaptionAssetServeWebVTTActionArgs)
    {
        super(data);
        if (typeof this.segmentDuration === 'undefined') this.segmentDuration = 30;
		if (typeof this.localTimestamp === 'undefined') this.localTimestamp = 10000;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionasset' },
				action : { type : 'c', default : 'serveWebVTT' },
				captionAssetId : { type : 's' },
				segmentDuration : { type : 'n' },
				segmentIndex : { type : 'n' },
				localTimestamp : { type : 'n' }
            }
        );
        return result;
    }
}

