
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGenerateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	thumbParams : KalturaThumbParams;
	sourceAssetId? : string;
}

/**
 * Build request payload for service 'thumbAsset' action 'generate'.
 *
 * 
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetGenerateAction extends KalturaRequest<KalturaThumbAsset> {

    entryId : string;
	thumbParams : KalturaThumbParams;
	sourceAssetId : string;

    constructor(data : ThumbAssetGenerateActionArgs)
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
				action : { type : 'c', default : 'generate' },
				entryId : { type : 's' },
				thumbParams : { type : 'o', subTypeConstructor : KalturaThumbParams, subType : 'KalturaThumbParams' },
				sourceAssetId : { type : 's' }
            }
        );
        return result;
    }
}

