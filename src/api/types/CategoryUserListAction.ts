
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUserListResponse } from './KalturaCategoryUserListResponse';

import { KalturaCategoryUserFilter } from './KalturaCategoryUserFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCategoryUserFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'categoryUser' action 'list'.
 *
 * Usage: List all categories
 *
 * Server response type:         KalturaCategoryUserListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryUserListAction extends KalturaRequest<KalturaCategoryUserListResponse> {

    filter : KalturaCategoryUserFilter;
	pager : KalturaFilterPager;

    constructor(data? : CategoryUserListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryUserListResponse', responseConstructor : KalturaCategoryUserListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryuser' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCategoryUserFilter, subType : 'KalturaCategoryUserFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

