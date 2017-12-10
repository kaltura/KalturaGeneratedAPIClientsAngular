
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetAddFromUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	url : string;
}

/**
 * Build request payload for service 'thumbAsset' action 'addFromUrl'.
 *
 * 
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetAddFromUrlAction extends KalturaRequest<KalturaThumbAsset> {

    entryId : string;
	url : string;

    constructor(data : ThumbAssetAddFromUrlActionArgs)
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
				action : { type : 'c', default : 'addFromUrl' },
				entryId : { type : 's' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

