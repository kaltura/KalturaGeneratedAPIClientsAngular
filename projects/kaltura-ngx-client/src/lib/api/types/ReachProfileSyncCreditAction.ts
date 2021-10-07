
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReachProfile } from './KalturaReachProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReachProfileSyncCreditActionArgs  extends KalturaRequestArgs {
    reachProfileId : number;
}

/**
 * Build request payload for service 'reachProfile' action 'syncCredit'.
 *
 * Usage: sync vendor profile credit
 *
 * Server response type:         KalturaReachProfile
 * Server failure response type: KalturaAPIException
 */
export class ReachProfileSyncCreditAction extends KalturaRequest<KalturaReachProfile> {

    reachProfileId : number;

    constructor(data : ReachProfileSyncCreditActionArgs)
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
				action : { type : 'c', default : 'syncCredit' },
				reachProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

