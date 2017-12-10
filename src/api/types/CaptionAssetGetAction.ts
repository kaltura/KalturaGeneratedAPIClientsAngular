
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetGetActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}

/**
 * Build request payload for service 'captionAsset' action 'get'.
 *
 * 
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetGetAction extends KalturaRequest<KalturaCaptionAsset> {

    captionAssetId : string;

    constructor(data : CaptionAssetGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionAsset', responseConstructor : KalturaCaptionAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionasset' },
				action : { type : 'c', default : 'get' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

