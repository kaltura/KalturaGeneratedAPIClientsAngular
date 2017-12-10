
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface CaptionAssetServeByEntryIdActionArgs  extends KalturaFileRequestArgs {
    entryId : string;
	captionParamId? : number;
}

/**
 * Build request payload for service 'captionAsset' action 'serveByEntryId'.
 *
 * Usage: Serves caption by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class CaptionAssetServeByEntryIdAction extends KalturaFileRequest {

    entryId : string;
	captionParamId : number;

    constructor(data : CaptionAssetServeByEntryIdActionArgs)
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
				action : { type : 'c', default : 'serveByEntryId' },
				entryId : { type : 's' },
				captionParamId : { type : 'n' }
            }
        );
        return result;
    }
}

