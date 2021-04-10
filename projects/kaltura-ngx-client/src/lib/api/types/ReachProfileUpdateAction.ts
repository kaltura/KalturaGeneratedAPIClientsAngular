
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReachProfile } from './KalturaReachProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReachProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	reachProfile : KalturaReachProfile;
}

/**
 * Build request payload for service 'reachProfile' action 'update'.
 *
 * Usage: Update an existing reach profile object
 *
 * Server response type:         KalturaReachProfile
 * Server failure response type: KalturaAPIException
 */
export class ReachProfileUpdateAction extends KalturaRequest<KalturaReachProfile> {

    id : number;
	reachProfile : KalturaReachProfile;

    constructor(data : ReachProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReachProfile', responseConstructor : KalturaReachProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_reachprofile' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				reachProfile : { type : 'o', subTypeConstructor : KalturaReachProfile, subType : 'KalturaReachProfile' }
            }
        );
        return result;
    }
}

