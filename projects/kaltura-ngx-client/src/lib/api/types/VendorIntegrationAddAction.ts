
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationSetting } from './KalturaIntegrationSetting';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorIntegrationAddActionArgs  extends KalturaRequestArgs {
    integration : KalturaIntegrationSetting;
	remoteId : string;
}

/**
 * Build request payload for service 'vendorIntegration' action 'add'.
 *
 * Usage: Add new integration setting object
 *
 * Server response type:         KalturaIntegrationSetting
 * Server failure response type: KalturaAPIException
 */
export class VendorIntegrationAddAction extends KalturaRequest<KalturaIntegrationSetting> {

    integration : KalturaIntegrationSetting;
	remoteId : string;

    constructor(data : VendorIntegrationAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIntegrationSetting', responseConstructor : KalturaIntegrationSetting  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'vendor_vendorintegration' },
				action : { type : 'c', default : 'add' },
				integration : { type : 'o', subTypeConstructor : KalturaIntegrationSetting, subType : 'KalturaIntegrationSetting' },
				remoteId : { type : 's' }
            }
        );
        return result;
    }
}

