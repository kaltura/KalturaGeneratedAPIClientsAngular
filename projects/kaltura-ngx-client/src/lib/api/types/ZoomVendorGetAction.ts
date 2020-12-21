
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaZoomIntegrationSetting } from './KalturaZoomIntegrationSetting';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorGetActionArgs  extends KalturaRequestArgs {
    partnerId : number;
}

/**
 * Build request payload for service 'zoomVendor' action 'get'.
 *
 * Usage: Retrieve zoom integration setting object by partner id
 *
 * Server response type:         KalturaZoomIntegrationSetting
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorGetAction extends KalturaRequest<KalturaZoomIntegrationSetting> {

    partnerId : number;

    constructor(data : ZoomVendorGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaZoomIntegrationSetting', responseConstructor : KalturaZoomIntegrationSetting  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'vendor_zoomvendor' },
				action : { type : 'c', default : 'get' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

