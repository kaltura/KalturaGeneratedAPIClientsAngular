
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReachProfile } from './KalturaReachProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReachProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'reachProfile' action 'get'.
 *
 * Usage: Retrieve specific reach profile by id
 *
 * Server response type:         KalturaReachProfile
 * Server failure response type: KalturaAPIException
 */
export class ReachProfileGetAction extends KalturaRequest<KalturaReachProfile> {

    id : number;

    constructor(data : ReachProfileGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

