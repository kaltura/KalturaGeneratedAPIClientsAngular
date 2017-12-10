
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	captionAsset : KalturaCaptionAsset;
}

/**
 * Build request payload for service 'captionAsset' action 'update'.
 *
 * Usage: Update caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetUpdateAction extends KalturaRequest<KalturaCaptionAsset> {

    id : string;
	captionAsset : KalturaCaptionAsset;

    constructor(data : CaptionAssetUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				captionAsset : { type : 'o', subTypeConstructor : KalturaCaptionAsset, subType : 'KalturaCaptionAsset' }
            }
        );
        return result;
    }
}

