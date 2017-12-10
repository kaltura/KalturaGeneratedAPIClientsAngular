
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderListResponse } from './KalturaDistributionProviderListResponse';

import { KalturaDistributionProviderFilter } from './KalturaDistributionProviderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProviderListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDistributionProviderFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'distributionProvider' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaDistributionProviderListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DistributionProviderListAction extends KalturaRequest<KalturaDistributionProviderListResponse> {

    filter : KalturaDistributionProviderFilter;
	pager : KalturaFilterPager;

    constructor(data? : DistributionProviderListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDistributionProviderListResponse', responseConstructor : KalturaDistributionProviderListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_distributionprovider' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDistributionProviderFilter, subType : 'KalturaDistributionProviderFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

