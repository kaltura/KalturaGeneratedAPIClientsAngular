
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTagListResponse } from './KalturaTagListResponse';

import { KalturaTagFilter } from './KalturaTagFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TagSearchActionArgs  extends KalturaRequestArgs {
    tagFilter : KalturaTagFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'tag' action 'search'.
 *
 * 
 *
 * Server response type:         KalturaTagListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TagSearchAction extends KalturaRequest<KalturaTagListResponse> {

    tagFilter : KalturaTagFilter;
	pager : KalturaFilterPager;

    constructor(data : TagSearchActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTagListResponse', responseConstructor : KalturaTagListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'tagsearch_tag' },
				action : { type : 'c', default : 'search' },
				tagFilter : { type : 'o', subTypeConstructor : KalturaTagFilter, subType : 'KalturaTagFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

