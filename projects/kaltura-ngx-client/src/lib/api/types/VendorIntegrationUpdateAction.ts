
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationSetting } from './KalturaIntegrationSetting';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorIntegrationUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	integrationSetting : KalturaIntegrationSetting;
}

/**
 * Build request payload for service 'vendorIntegration' action 'update'.
 *
 * Usage: Update an existing vedor catalog item object
 *
 * Server response type:         KalturaIntegrationSetting
 * Server failure response type: KalturaAPIException
 */
export class VendorIntegrationUpdateAction extends KalturaRequest<KalturaIntegrationSetting> {

    id : number;
	integrationSetting : KalturaIntegrationSetting;

    constructor(data : VendorIntegrationUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				integrationSetting : { type : 'o', subTypeConstructor : KalturaIntegrationSetting, subType : 'KalturaIntegrationSetting' }
            }
        );
        return result;
    }
}

