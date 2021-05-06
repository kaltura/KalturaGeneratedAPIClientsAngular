
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorLocalRegistrationPageActionArgs  extends KalturaRequestArgs {
    jwt : string;
}

/**
 * Build request payload for service 'zoomVendor' action 'localRegistrationPage'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorLocalRegistrationPageAction extends KalturaRequest<void> {

    jwt : string;

    constructor(data : ZoomVendorLocalRegistrationPageActionArgs)
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
				action : { type : 'c', default : 'localRegistrationPage' },
				jwt : { type : 's' }
            }
        );
        return result;
    }
}

