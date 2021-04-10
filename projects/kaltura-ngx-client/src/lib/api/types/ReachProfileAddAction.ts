
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReachProfile } from './KalturaReachProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReachProfileAddActionArgs  extends KalturaRequestArgs {
    reachProfile : KalturaReachProfile;
}

/**
 * Build request payload for service 'reachProfile' action 'add'.
 *
 * Usage: Allows you to add a partner specific reach profile
 *
 * Server response type:         KalturaReachProfile
 * Server failure response type: KalturaAPIException
 */
export class ReachProfileAddAction extends KalturaRequest<KalturaReachProfile> {

    reachProfile : KalturaReachProfile;

    constructor(data : ReachProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				reachProfile : { type : 'o', subTypeConstructor : KalturaReachProfile, subType : 'KalturaReachProfile' }
            }
        );
        return result;
    }
}

