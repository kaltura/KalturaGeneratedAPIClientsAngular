
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationSetting } from './KalturaIntegrationSetting';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VendorIntegrationGetActionArgs  extends KalturaRequestArgs {
    integrationId : number;
}

/**
 * Build request payload for service 'vendorIntegration' action 'get'.
 *
 * Usage: Retrieve integration setting object by ID
 *
 * Server response type:         KalturaIntegrationSetting
 * Server failure response type: KalturaAPIException
 */
export class VendorIntegrationGetAction extends KalturaRequest<KalturaIntegrationSetting> {

    integrationId : number;

    constructor(data : VendorIntegrationGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				integrationId : { type : 'n' }
            }
        );
        return result;
    }
}

