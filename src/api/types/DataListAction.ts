
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataListResponse } from './KalturaDataListResponse';

import { KalturaDataEntryFilter } from './KalturaDataEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDataEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'data' action 'list'.
 *
 * Usage: List data entries by filter with paging support
 *
 * Server response type:         KalturaDataListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DataListAction extends KalturaRequest<KalturaDataListResponse> {

    filter : KalturaDataEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : DataListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDataListResponse', responseConstructor : KalturaDataListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'data' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDataEntryFilter, subType : 'KalturaDataEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

