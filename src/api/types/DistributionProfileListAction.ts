
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileListResponse } from './KalturaDistributionProfileListResponse';

import { KalturaDistributionProfileFilter } from './KalturaDistributionProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDistributionProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'distributionProfile' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaDistributionProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DistributionProfileListAction extends KalturaRequest<KalturaDistributionProfileListResponse> {

    filter : KalturaDistributionProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : DistributionProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDistributionProfileListResponse', responseConstructor : KalturaDistributionProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_distributionprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDistributionProfileFilter, subType : 'KalturaDistributionProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

