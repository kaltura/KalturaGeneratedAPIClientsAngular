
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetRegenerateActionArgs  extends KalturaRequestArgs {
    thumbAssetId : string;
}

/**
 * Build request payload for service 'thumbAsset' action 'regenerate'.
 *
 * 
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetRegenerateAction extends KalturaRequest<KalturaThumbAsset> {

    thumbAssetId : string;

    constructor(data : ThumbAssetRegenerateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbAsset', responseConstructor : KalturaThumbAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'regenerate' },
				thumbAssetId : { type : 's' }
            }
        );
        return result;
    }
}

