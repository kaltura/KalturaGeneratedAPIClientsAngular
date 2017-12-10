
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';

import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileGetByProviderActionArgs  extends KalturaRequestArgs {
    provider : KalturaDrmProviderType;
}

/**
 * Build request payload for service 'drmProfile' action 'getByProvider'.
 *
 * Usage: Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmProfileGetByProviderAction extends KalturaRequest<KalturaDrmProfile> {

    provider : KalturaDrmProviderType;

    constructor(data : DrmProfileGetByProviderActionArgs)
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
				action : { type : 'c', default : 'getByProvider' },
				provider : { type : 'es', subTypeConstructor : KalturaDrmProviderType, subType : 'KalturaDrmProviderType' }
            }
        );
        return result;
    }
}

