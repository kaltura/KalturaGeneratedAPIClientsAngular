
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	flavorAsset : KalturaFlavorAsset;
}

/**
 * Build request payload for service 'flavorAsset' action 'add'.
 *
 * Usage: Add flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorAssetAddAction extends KalturaRequest<KalturaFlavorAsset> {

    entryId : string;
	flavorAsset : KalturaFlavorAsset;

    constructor(data : FlavorAssetAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorAsset', responseConstructor : KalturaFlavorAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'add' },
				entryId : { type : 's' },
				flavorAsset : { type : 'o', subTypeConstructor : KalturaFlavorAsset, subType : 'KalturaFlavorAsset' }
            }
        );
        return result;
    }
}

