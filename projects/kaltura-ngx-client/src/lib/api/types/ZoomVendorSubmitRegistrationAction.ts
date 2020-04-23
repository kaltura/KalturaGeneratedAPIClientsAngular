
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaZoomIntegrationSetting } from './KalturaZoomIntegrationSetting';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorSubmitRegistrationActionArgs  extends KalturaRequestArgs {
    accountId : string;
	integrationSetting : KalturaZoomIntegrationSetting;
}

/**
 * Build request payload for service 'zoomVendor' action 'submitRegistration'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorSubmitRegistrationAction extends KalturaRequest<string> {

    accountId : string;
	integrationSetting : KalturaZoomIntegrationSetting;

    constructor(data : ZoomVendorSubmitRegistrationActionArgs)
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
				action : { type : 'c', default : 'submitRegistration' },
				accountId : { type : 's' },
				integrationSetting : { type : 'o', subTypeConstructor : KalturaZoomIntegrationSetting, subType : 'KalturaZoomIntegrationSetting' }
            }
        );
        return result;
    }
}

