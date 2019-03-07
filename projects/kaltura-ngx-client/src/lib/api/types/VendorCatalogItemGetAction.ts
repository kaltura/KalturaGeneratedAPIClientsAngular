
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVendorCatalogItem } from './KalturaVendorCatalogItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorCatalogItemGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'get'.
 *
 * Usage: Retrieve specific catalog item by id
 *
 * Server response type:         KalturaVendorCatalogItem
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemGetAction extends KalturaRequest<KalturaVendorCatalogItem> {

    id : number;

    constructor(data : VendorCatalogItemGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

