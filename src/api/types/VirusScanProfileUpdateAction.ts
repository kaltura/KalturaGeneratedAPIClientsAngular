
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirusScanProfileUpdateActionArgs  extends KalturaRequestArgs {
    virusScanProfileId : number;
	virusScanProfile : KalturaVirusScanProfile;
}

/**
 * Build request payload for service 'virusScanProfile' action 'update'.
 *
 * Usage: Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class VirusScanProfileUpdateAction extends KalturaRequest<KalturaVirusScanProfile> {

    virusScanProfileId : number;
	virusScanProfile : KalturaVirusScanProfile;

    constructor(data : VirusScanProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				virusScanProfileId : { type : 'n' },
				virusScanProfile : { type : 'o', subTypeConstructor : KalturaVirusScanProfile, subType : 'KalturaVirusScanProfile' }
            }
        );
        return result;
    }
}

