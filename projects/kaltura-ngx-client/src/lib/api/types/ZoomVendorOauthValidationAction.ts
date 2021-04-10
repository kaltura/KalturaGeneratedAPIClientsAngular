
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorOauthValidationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'zoomVendor' action 'oauthValidation'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorOauthValidationAction extends KalturaRequest<string> {

    

    constructor(data? : ZoomVendorOauthValidationActionArgs)
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
				action : { type : 'c', default : 'oauthValidation' }
            }
        );
        return result;
    }
}

