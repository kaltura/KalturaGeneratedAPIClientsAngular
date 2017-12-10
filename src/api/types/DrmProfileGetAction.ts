
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileGetActionArgs  extends KalturaRequestArgs {
    drmProfileId : number;
}

/**
 * Build request payload for service 'drmProfile' action 'get'.
 *
 * Usage: Retrieve a KalturaDrmProfile object by ID
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmProfileGetAction extends KalturaRequest<KalturaDrmProfile> {

    drmProfileId : number;

    constructor(data : DrmProfileGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				drmProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

