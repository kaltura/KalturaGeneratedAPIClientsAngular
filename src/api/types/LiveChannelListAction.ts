
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelListResponse } from './KalturaLiveChannelListResponse';

import { KalturaLiveChannelFilter } from './KalturaLiveChannelFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaLiveChannelFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'liveChannel' action 'list'.
 *
 * Usage: List live channels by filter with paging support
 *
 * Server response type:         KalturaLiveChannelListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveChannelListAction extends KalturaRequest<KalturaLiveChannelListResponse> {

    filter : KalturaLiveChannelFilter;
	pager : KalturaFilterPager;

    constructor(data? : LiveChannelListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveChannelListResponse', responseConstructor : KalturaLiveChannelListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livechannel' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaLiveChannelFilter, subType : 'KalturaLiveChannelFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

