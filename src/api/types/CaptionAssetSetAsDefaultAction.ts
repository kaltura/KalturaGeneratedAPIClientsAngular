
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetSetAsDefaultActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}

/**
 * Build request payload for service 'captionAsset' action 'setAsDefault'.
 *
 * Usage: Markss the caption as default and removes that mark from all other caption assets of the entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetSetAsDefaultAction extends KalturaRequest<void> {

    captionAssetId : string;

    constructor(data : CaptionAssetSetAsDefaultActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionasset' },
				action : { type : 'c', default : 'setAsDefault' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

