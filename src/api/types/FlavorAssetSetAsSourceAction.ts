
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetSetAsSourceActionArgs  extends KalturaRequestArgs {
    assetId : string;
}

/**
 * Build request payload for service 'flavorAsset' action 'setAsSource'.
 *
 * Usage: Set a given flavor as the original flavor
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorAssetSetAsSourceAction extends KalturaRequest<void> {

    assetId : string;

    constructor(data : FlavorAssetSetAsSourceActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'setAsSource' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

