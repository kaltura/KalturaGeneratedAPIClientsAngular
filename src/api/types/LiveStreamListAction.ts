
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamListResponse } from './KalturaLiveStreamListResponse';

import { KalturaLiveStreamEntryFilter } from './KalturaLiveStreamEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaLiveStreamEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'liveStream' action 'list'.
 *
 * Usage: List live stream entries by filter with paging support
 *
 * Server response type:         KalturaLiveStreamListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamListAction extends KalturaRequest<KalturaLiveStreamListResponse> {

    filter : KalturaLiveStreamEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : LiveStreamListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamListResponse', responseConstructor : KalturaLiveStreamListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaLiveStreamEntryFilter, subType : 'KalturaLiveStreamEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

