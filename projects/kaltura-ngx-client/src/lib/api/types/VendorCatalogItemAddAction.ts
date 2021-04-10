
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVendorCatalogItem } from './KalturaVendorCatalogItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorCatalogItemAddActionArgs  extends KalturaRequestArgs {
    vendorCatalogItem : KalturaVendorCatalogItem;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'add'.
 *
 * Usage: Allows you to add an service catalog item
 *
 * Server response type:         KalturaVendorCatalogItem
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemAddAction extends KalturaRequest<KalturaVendorCatalogItem> {

    vendorCatalogItem : KalturaVendorCatalogItem;

    constructor(data : VendorCatalogItemAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				vendorCatalogItem : { type : 'o', subTypeConstructor : KalturaVendorCatalogItem, subType : 'KalturaVendorCatalogItem' }
            }
        );
        return result;
    }
}

