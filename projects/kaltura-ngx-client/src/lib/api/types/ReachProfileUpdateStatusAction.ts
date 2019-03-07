
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReachProfile } from './KalturaReachProfile';

import { KalturaReachProfileStatus } from './KalturaReachProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReachProfileUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaReachProfileStatus;
}

/**
 * Build request payload for service 'reachProfile' action 'updateStatus'.
 *
 * Usage: Update reach profile status by id
 *
 * Server response type:         KalturaReachProfile
 * Server failure response type: KalturaAPIException
 */
export class ReachProfileUpdateStatusAction extends KalturaRequest<KalturaReachProfile> {

    id : number;
	status : KalturaReachProfileStatus;

    constructor(data : ReachProfileUpdateStatusActionArgs)
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
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaReachProfileStatus, subType : 'KalturaReachProfileStatus' }
            }
        );
        return result;
    }
}

