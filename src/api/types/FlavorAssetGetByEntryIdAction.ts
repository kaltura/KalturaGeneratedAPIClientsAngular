
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetByEntryIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'flavorAsset' action 'getByEntryId'.
 *
 * Usage: Get Flavor Assets for Entry
 *
 * Server response type:         KalturaFlavorAsset[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorAssetGetByEntryIdAction extends KalturaRequest<KalturaFlavorAsset[]> {

    entryId : string;

    constructor(data : FlavorAssetGetByEntryIdActionArgs)
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
				action : { type : 'c', default : 'getByEntryId' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

