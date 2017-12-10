
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLinkListResponse } from './KalturaShortLinkListResponse';

import { KalturaShortLinkFilter } from './KalturaShortLinkFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaShortLinkFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'shortLink' action 'list'.
 *
 * Usage: List short link objects by filter and pager
 *
 * Server response type:         KalturaShortLinkListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ShortLinkListAction extends KalturaRequest<KalturaShortLinkListResponse> {

    filter : KalturaShortLinkFilter;
	pager : KalturaFilterPager;

    constructor(data? : ShortLinkListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaShortLinkListResponse', responseConstructor : KalturaShortLinkListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'shortlink_shortlink' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaShortLinkFilter, subType : 'KalturaShortLinkFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

