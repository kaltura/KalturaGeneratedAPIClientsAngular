
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntryListResponse } from './KalturaCategoryEntryListResponse';

import { KalturaCategoryEntryFilter } from './KalturaCategoryEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryEntryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCategoryEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'categoryEntry' action 'list'.
 *
 * Usage: List all categoryEntry
 *
 * Server response type:         KalturaCategoryEntryListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryEntryListAction extends KalturaRequest<KalturaCategoryEntryListResponse> {

    filter : KalturaCategoryEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : CategoryEntryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryEntryListResponse', responseConstructor : KalturaCategoryEntryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryentry' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCategoryEntryFilter, subType : 'KalturaCategoryEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

