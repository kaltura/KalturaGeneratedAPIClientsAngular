
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaListResponse } from './KalturaMediaListResponse';

import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMediaEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'media' action 'list'.
 *
 * Usage: List media entries by filter with paging support
 *
 * Server response type:         KalturaMediaListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaListAction extends KalturaRequest<KalturaMediaListResponse> {

    filter : KalturaMediaEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : MediaListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaListResponse', responseConstructor : KalturaMediaListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaMediaEntryFilter, subType : 'KalturaMediaEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

