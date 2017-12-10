
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	distributionProfile : KalturaDistributionProfile;
}

/**
 * Build request payload for service 'distributionProfile' action 'update'.
 *
 * Usage: Update Distribution Profile by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DistributionProfileUpdateAction extends KalturaRequest<KalturaDistributionProfile> {

    id : number;
	distributionProfile : KalturaDistributionProfile;

    constructor(data : DistributionProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				distributionProfile : { type : 'o', subTypeConstructor : KalturaDistributionProfile, subType : 'KalturaDistributionProfile' }
            }
        );
        return result;
    }
}

