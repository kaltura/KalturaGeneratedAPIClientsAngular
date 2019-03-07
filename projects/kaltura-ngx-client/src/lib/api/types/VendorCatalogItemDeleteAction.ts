
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorCatalogItemDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'delete'.
 *
 * Usage: Delete vedor catalog item object
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : VendorCatalogItemDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_vendorcatalogitem' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

