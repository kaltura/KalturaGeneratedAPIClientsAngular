
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVendorCatalogItem } from './KalturaVendorCatalogItem';

import { KalturaVendorCatalogItemStatus } from './KalturaVendorCatalogItemStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorCatalogItemUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaVendorCatalogItemStatus;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'updateStatus'.
 *
 * Usage: Update vendor catalog item status by id
 *
 * Server response type:         KalturaVendorCatalogItem
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemUpdateStatusAction extends KalturaRequest<KalturaVendorCatalogItem> {

    id : number;
	status : KalturaVendorCatalogItemStatus;

    constructor(data : VendorCatalogItemUpdateStatusActionArgs)
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
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemStatus, subType : 'KalturaVendorCatalogItemStatus' }
            }
        );
        return result;
    }
}

