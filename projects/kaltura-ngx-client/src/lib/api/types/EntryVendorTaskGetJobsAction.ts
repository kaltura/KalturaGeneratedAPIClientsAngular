
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTaskListResponse } from './KalturaEntryVendorTaskListResponse';

import { KalturaEntryVendorTaskFilter } from './KalturaEntryVendorTaskFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskGetJobsActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEntryVendorTaskFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'entryVendorTask' action 'getJobs'.
 *
 * Usage: get KalturaEntryVendorTask objects for specific vendor partner
 *
 * Server response type:         KalturaEntryVendorTaskListResponse
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskGetJobsAction extends KalturaRequest<KalturaEntryVendorTaskListResponse> {

    filter : KalturaEntryVendorTaskFilter;
	pager : KalturaFilterPager;

    constructor(data? : EntryVendorTaskGetJobsActionArgs)
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
				action : { type : 'c', default : 'getJobs' },
				filter : { type : 'o', subTypeConstructor : KalturaEntryVendorTaskFilter, subType : 'KalturaEntryVendorTaskFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

