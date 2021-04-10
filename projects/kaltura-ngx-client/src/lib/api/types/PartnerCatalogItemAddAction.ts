
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVendorCatalogItem } from './KalturaVendorCatalogItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerCatalogItemAddActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'PartnerCatalogItem' action 'add'.
 *
 * Usage: Assign existing catalogItem to specific account
 *
 * Server response type:         KalturaVendorCatalogItem
 * Server failure response type: KalturaAPIException
 */
export class PartnerCatalogItemAddAction extends KalturaRequest<KalturaVendorCatalogItem> {

    id : number;

    constructor(data : PartnerCatalogItemAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVendorCatalogItem', responseConstructor : KalturaVendorCatalogItem  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_partnercatalogitem' },
				action : { type : 'c', default : 'add' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

