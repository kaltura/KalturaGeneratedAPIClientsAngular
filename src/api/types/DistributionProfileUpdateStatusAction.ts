
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';

import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProfileUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaDistributionProfileStatus;
}

/**
 * Build request payload for service 'distributionProfile' action 'updateStatus'.
 *
 * Usage: Update Distribution Profile status by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DistributionProfileUpdateStatusAction extends KalturaRequest<KalturaDistributionProfile> {

    id : number;
	status : KalturaDistributionProfileStatus;

    constructor(data : DistributionProfileUpdateStatusActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDistributionProfile', responseConstructor : KalturaDistributionProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_distributionprofile' },
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaDistributionProfileStatus, subType : 'KalturaDistributionProfileStatus' }
            }
        );
        return result;
    }
}

