
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface VendorCatalogItemServeActionArgs  extends KalturaFileRequestArgs {
    vendorPartnerId? : number;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'serve'.
 *
 * 
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemServeAction extends KalturaFileRequest {

    vendorPartnerId : number;

    constructor(data? : VendorCatalogItemServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_vendorcatalogitem' },
				action : { type : 'c', default : 'serve' },
				vendorPartnerId : { type : 'n' }
            }
        );
        return result;
    }
}

