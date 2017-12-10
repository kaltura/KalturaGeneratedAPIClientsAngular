
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetWebPlayableByEntryIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'flavorAsset' action 'getWebPlayableByEntryId'.
 *
 * Usage: Get web playable Flavor Assets for Entry
 *
 * Server response type:         KalturaFlavorAsset[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorAssetGetWebPlayableByEntryIdAction extends KalturaRequest<KalturaFlavorAsset[]> {

    entryId : string;

    constructor(data : FlavorAssetGetWebPlayableByEntryIdActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaFlavorAsset', responseConstructor : KalturaFlavorAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'getWebPlayableByEntryId' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

