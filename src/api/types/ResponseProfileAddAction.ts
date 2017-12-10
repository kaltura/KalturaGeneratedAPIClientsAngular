
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileAddActionArgs  extends KalturaRequestArgs {
    addResponseProfile : KalturaResponseProfile;
}

/**
 * Build request payload for service 'responseProfile' action 'add'.
 *
 * Usage: Add new response profile
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ResponseProfileAddAction extends KalturaRequest<KalturaResponseProfile> {

    addResponseProfile : KalturaResponseProfile;

    constructor(data : ResponseProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaResponseProfile', responseConstructor : KalturaResponseProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'responseprofile' },
				action : { type : 'c', default : 'add' },
				addResponseProfile : { type : 'o', subTypeConstructor : KalturaResponseProfile, subType : 'KalturaResponseProfile' }
            }
        );
        return result;
    }
}

