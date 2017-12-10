
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryListResponse } from './KalturaCategoryListResponse';

import { KalturaCategoryFilter } from './KalturaCategoryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCategoryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'category' action 'list'.
 *
 * Usage: List all categories
 *
 * Server response type:         KalturaCategoryListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryListAction extends KalturaRequest<KalturaCategoryListResponse> {

    filter : KalturaCategoryFilter;
	pager : KalturaFilterPager;

    constructor(data? : CategoryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryListResponse', responseConstructor : KalturaCategoryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'category' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCategoryFilter, subType : 'KalturaCategoryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

