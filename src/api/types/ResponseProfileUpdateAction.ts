
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	updateResponseProfile : KalturaResponseProfile;
}

/**
 * Build request payload for service 'responseProfile' action 'update'.
 *
 * Usage: Update response profile by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ResponseProfileUpdateAction extends KalturaRequest<KalturaResponseProfile> {

    id : number;
	updateResponseProfile : KalturaResponseProfile;

    constructor(data : ResponseProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				updateResponseProfile : { type : 'o', subTypeConstructor : KalturaResponseProfile, subType : 'KalturaResponseProfile' }
            }
        );
        return result;
    }
}

