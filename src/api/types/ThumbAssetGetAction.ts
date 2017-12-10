
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGetActionArgs  extends KalturaRequestArgs {
    thumbAssetId : string;
}

/**
 * Build request payload for service 'thumbAsset' action 'get'.
 *
 * 
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetGetAction extends KalturaRequest<KalturaThumbAsset> {

    thumbAssetId : string;

    constructor(data : ThumbAssetGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				thumbAssetId : { type : 's' }
            }
        );
        return result;
    }
}

