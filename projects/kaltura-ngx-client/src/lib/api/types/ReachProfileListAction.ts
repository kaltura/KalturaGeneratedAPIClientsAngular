
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReachProfileListResponse } from './KalturaReachProfileListResponse';

import { KalturaReachProfileFilter } from './KalturaReachProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReachProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaReachProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'reachProfile' action 'list'.
 *
 * Usage: List KalturaReachProfile objects
 *
 * Server response type:         KalturaReachProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export class ReachProfileListAction extends KalturaRequest<KalturaReachProfileListResponse> {

    filter : KalturaReachProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : ReachProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReachProfileListResponse', responseConstructor : KalturaReachProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_reachprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaReachProfileFilter, subType : 'KalturaReachProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

