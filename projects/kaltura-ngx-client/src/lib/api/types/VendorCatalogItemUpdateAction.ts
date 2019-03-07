
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVendorCatalogItem } from './KalturaVendorCatalogItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorCatalogItemUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	vendorCatalogItem : KalturaVendorCatalogItem;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'update'.
 *
 * Usage: Update an existing vedor catalog item object
 *
 * Server response type:         KalturaVendorCatalogItem
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemUpdateAction extends KalturaRequest<KalturaVendorCatalogItem> {

    id : number;
	vendorCatalogItem : KalturaVendorCatalogItem;

    constructor(data : VendorCatalogItemUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVendorCatalogItem', responseConstructor : KalturaVendorCatalogItem  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_vendorcatalogitem' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				vendorCatalogItem : { type : 'o', subTypeConstructor : KalturaVendorCatalogItem, subType : 'KalturaVendorCatalogItem' }
            }
        );
        return result;
    }
}

