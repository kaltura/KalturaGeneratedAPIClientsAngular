
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirusScanProfileDeleteActionArgs  extends KalturaRequestArgs {
    virusScanProfileId : number;
}

/**
 * Build request payload for service 'virusScanProfile' action 'delete'.
 *
 * Usage: Mark the virus scan profile as deleted
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class VirusScanProfileDeleteAction extends KalturaRequest<KalturaVirusScanProfile> {

    virusScanProfileId : number;

    constructor(data : VirusScanProfileDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVirusScanProfile', responseConstructor : KalturaVirusScanProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'virusscan_virusscanprofile' },
				action : { type : 'c', default : 'delete' },
				virusScanProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

