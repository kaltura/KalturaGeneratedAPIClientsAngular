
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirusScanProfileGetActionArgs  extends KalturaRequestArgs {
    virusScanProfileId : number;
}

/**
 * Build request payload for service 'virusScanProfile' action 'get'.
 *
 * Usage: Retrieve an virus scan profile object by id
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class VirusScanProfileGetAction extends KalturaRequest<KalturaVirusScanProfile> {

    virusScanProfileId : number;

    constructor(data : VirusScanProfileGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				virusScanProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

