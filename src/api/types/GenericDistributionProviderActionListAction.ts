
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderActionListResponse } from './KalturaGenericDistributionProviderActionListResponse';

import { KalturaGenericDistributionProviderActionFilter } from './KalturaGenericDistributionProviderActionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaGenericDistributionProviderActionFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'genericDistributionProviderAction' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaGenericDistributionProviderActionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GenericDistributionProviderActionListAction extends KalturaRequest<KalturaGenericDistributionProviderActionListResponse> {

    filter : KalturaGenericDistributionProviderActionFilter;
	pager : KalturaFilterPager;

    constructor(data? : GenericDistributionProviderActionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProviderActionListResponse', responseConstructor : KalturaGenericDistributionProviderActionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_genericdistributionprovideraction' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaGenericDistributionProviderActionFilter, subType : 'KalturaGenericDistributionProviderActionFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

