
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	captionAsset : KalturaCaptionAsset;
}

/**
 * Build request payload for service 'captionAsset' action 'add'.
 *
 * Usage: Add caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetAddAction extends KalturaRequest<KalturaCaptionAsset> {

    entryId : string;
	captionAsset : KalturaCaptionAsset;

    constructor(data : CaptionAssetAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entryId : { type : 's' },
				captionAsset : { type : 'o', subTypeConstructor : KalturaCaptionAsset, subType : 'KalturaCaptionAsset' }
            }
        );
        return result;
    }
}

