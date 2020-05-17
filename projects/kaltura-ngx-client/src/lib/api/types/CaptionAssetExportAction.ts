
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetExportActionArgs  extends KalturaRequestArgs {
    assetId : string;
	storageProfileId : number;
}

/**
 * Build request payload for service 'captionAsset' action 'export'.
 *
 * Usage: manually export an asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetExportAction extends KalturaRequest<KalturaFlavorAsset> {

    assetId : string;
	storageProfileId : number;

    constructor(data : CaptionAssetExportActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorAsset', responseConstructor : KalturaFlavorAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionasset' },
				action : { type : 'c', default : 'export' },
				assetId : { type : 's' },
				storageProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

