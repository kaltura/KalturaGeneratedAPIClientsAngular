
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetItemParseActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}

/**
 * Build request payload for service 'captionAssetItem' action 'parse'.
 *
 * Usage: Parse content of caption asset and index it
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetItemParseAction extends KalturaRequest<void> {

    captionAssetId : string;

    constructor(data : CaptionAssetItemParseActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'captionsearch_captionassetitem' },
				action : { type : 'c', default : 'parse' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

