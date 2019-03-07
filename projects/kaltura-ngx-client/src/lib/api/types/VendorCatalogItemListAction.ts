
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVendorCatalogItemListResponse } from './KalturaVendorCatalogItemListResponse';

import { KalturaVendorCatalogItemFilter } from './KalturaVendorCatalogItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorCatalogItemListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaVendorCatalogItemFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'list'.
 *
 * Usage: List KalturaVendorCatalogItem objects
 *
 * Server response type:         KalturaVendorCatalogItemListResponse
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemListAction extends KalturaRequest<KalturaVendorCatalogItemListResponse> {

    filter : KalturaVendorCatalogItemFilter;
	pager : KalturaFilterPager;

    constructor(data? : VendorCatalogItemListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVendorCatalogItemListResponse', responseConstructor : KalturaVendorCatalogItemListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_vendorcatalogitem' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaVendorCatalogItemFilter, subType : 'KalturaVendorCatalogItemFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

