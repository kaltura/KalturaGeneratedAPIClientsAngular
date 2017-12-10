
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileAddActionArgs  extends KalturaRequestArgs {
    drmProfile : KalturaDrmProfile;
}

/**
 * Build request payload for service 'drmProfile' action 'add'.
 *
 * Usage: Allows you to add a new DrmProfile object
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmProfileAddAction extends KalturaRequest<KalturaDrmProfile> {

    drmProfile : KalturaDrmProfile;

    constructor(data : DrmProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmProfile', responseConstructor : KalturaDrmProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_drmprofile' },
				action : { type : 'c', default : 'add' },
				drmProfile : { type : 'o', subTypeConstructor : KalturaDrmProfile, subType : 'KalturaDrmProfile' }
            }
        );
        return result;
    }
}

