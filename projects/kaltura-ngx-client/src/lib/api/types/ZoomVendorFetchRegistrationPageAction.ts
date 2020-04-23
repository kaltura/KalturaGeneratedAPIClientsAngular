
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorFetchRegistrationPageActionArgs  extends KalturaRequestArgs {
    tokensData : string;
	iv : string;
}

/**
 * Build request payload for service 'zoomVendor' action 'fetchRegistrationPage'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorFetchRegistrationPageAction extends KalturaRequest<void> {

    tokensData : string;
	iv : string;

    constructor(data : ZoomVendorFetchRegistrationPageActionArgs)
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
				action : { type : 'c', default : 'fetchRegistrationPage' },
				tokensData : { type : 's' },
				iv : { type : 's' }
            }
        );
        return result;
    }
}

