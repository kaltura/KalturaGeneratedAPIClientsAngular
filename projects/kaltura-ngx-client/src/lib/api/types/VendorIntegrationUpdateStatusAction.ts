
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationSetting } from './KalturaIntegrationSetting';

import { KalturaVendorIntegrationStatus } from './KalturaVendorIntegrationStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorIntegrationUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaVendorIntegrationStatus;
}

/**
 * Build request payload for service 'vendorIntegration' action 'updateStatus'.
 *
 * Usage: Update vendor catalog item status by id
 *
 * Server response type:         KalturaIntegrationSetting
 * Server failure response type: KalturaAPIException
 */
export class VendorIntegrationUpdateStatusAction extends KalturaRequest<KalturaIntegrationSetting> {

    id : number;
	status : KalturaVendorIntegrationStatus;

    constructor(data : VendorIntegrationUpdateStatusActionArgs)
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
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaVendorIntegrationStatus, subType : 'KalturaVendorIntegrationStatus' }
            }
        );
        return result;
    }
}

