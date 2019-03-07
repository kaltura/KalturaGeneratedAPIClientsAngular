
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTaskListResponse } from './KalturaEntryVendorTaskListResponse';

import { KalturaEntryVendorTaskFilter } from './KalturaEntryVendorTaskFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEntryVendorTaskFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'entryVendorTask' action 'list'.
 *
 * Usage: List KalturaEntryVendorTask objects
 *
 * Server response type:         KalturaEntryVendorTaskListResponse
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskListAction extends KalturaRequest<KalturaEntryVendorTaskListResponse> {

    filter : KalturaEntryVendorTaskFilter;
	pager : KalturaFilterPager;

    constructor(data? : EntryVendorTaskListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryVendorTaskListResponse', responseConstructor : KalturaEntryVendorTaskListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_entryvendortask' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaEntryVendorTaskFilter, subType : 'KalturaEntryVendorTaskFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

