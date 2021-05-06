
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorPreOauthValidationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'zoomVendor' action 'preOauthValidation'.
 *
 * Usage: load html page the that will ask the user for its KMC URL, derive the region of the user from it,
 * and redirect to the registration page in the correct region, while forwarding the necessary code for registration
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorPreOauthValidationAction extends KalturaRequest<void> {

    

    constructor(data? : ZoomVendorPreOauthValidationActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'vendor_zoomvendor' },
				action : { type : 'c', default : 'preOauthValidation' }
            }
        );
        return result;
    }
}

