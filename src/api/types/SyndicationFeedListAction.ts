
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedListResponse } from './KalturaBaseSyndicationFeedListResponse';

import { KalturaBaseSyndicationFeedFilter } from './KalturaBaseSyndicationFeedFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBaseSyndicationFeedFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'syndicationFeed' action 'list'.
 *
 * Usage: List Syndication Feeds by filter with paging support
 *
 * Server response type:         KalturaBaseSyndicationFeedListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SyndicationFeedListAction extends KalturaRequest<KalturaBaseSyndicationFeedListResponse> {

    filter : KalturaBaseSyndicationFeedFilter;
	pager : KalturaFilterPager;

    constructor(data? : SyndicationFeedListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseSyndicationFeedListResponse', responseConstructor : KalturaBaseSyndicationFeedListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'syndicationfeed' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBaseSyndicationFeedFilter, subType : 'KalturaBaseSyndicationFeedFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

