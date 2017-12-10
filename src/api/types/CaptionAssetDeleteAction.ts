
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetDeleteActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}

/**
 * Build request payload for service 'captionAsset' action 'delete'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetDeleteAction extends KalturaRequest<void> {

    captionAssetId : string;

    constructor(data : CaptionAssetDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

