
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorCatalogItemGetServeUrlActionArgs  extends KalturaRequestArgs {
    vendorPartnerId? : number;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'getServeUrl'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemGetServeUrlAction extends KalturaRequest<string> {

    vendorPartnerId : number;

    constructor(data? : VendorCatalogItemGetServeUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_vendorcatalogitem' },
				action : { type : 'c', default : 'getServeUrl' },
				vendorPartnerId : { type : 'n' }
            }
        );
        return result;
    }
}

