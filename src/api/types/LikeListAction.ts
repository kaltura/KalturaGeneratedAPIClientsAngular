
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLikeListResponse } from './KalturaLikeListResponse';

import { KalturaLikeFilter } from './KalturaLikeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LikeListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaLikeFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'like' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaLikeListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LikeListAction extends KalturaRequest<KalturaLikeListResponse> {

    filter : KalturaLikeFilter;
	pager : KalturaFilterPager;

    constructor(data? : LikeListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLikeListResponse', responseConstructor : KalturaLikeListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'like_like' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaLikeFilter, subType : 'KalturaLikeFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

