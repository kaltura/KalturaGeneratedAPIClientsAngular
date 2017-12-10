
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmLicenseAccessDetails } from './KalturaDrmLicenseAccessDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmLicenseAccessGetAccessActionArgs  extends KalturaRequestArgs {
    entryId : string;
	flavorIds : string;
	referrer : string;
}

/**
 * Build request payload for service 'drmLicenseAccess' action 'getAccess'.
 *
 * Usage: getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action
 *
 * Server response type:         KalturaDrmLicenseAccessDetails
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmLicenseAccessGetAccessAction extends KalturaRequest<KalturaDrmLicenseAccessDetails> {

    entryId : string;
	flavorIds : string;
	referrer : string;

    constructor(data : DrmLicenseAccessGetAccessActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmLicenseAccessDetails', responseConstructor : KalturaDrmLicenseAccessDetails  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_drmlicenseaccess' },
				action : { type : 'c', default : 'getAccess' },
				entryId : { type : 's' },
				flavorIds : { type : 's' },
				referrer : { type : 's' }
            }
        );
        return result;
    }
}

