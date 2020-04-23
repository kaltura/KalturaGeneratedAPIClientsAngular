
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorDeAuthorizationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'zoomVendor' action 'deAuthorization'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorDeAuthorizationAction extends KalturaRequest<string> {

    

    constructor(data? : ZoomVendorDeAuthorizationActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'vendor_zoomvendor' },
				action : { type : 'c', default : 'deAuthorization' }
            }
        );
        return result;
    }
}

