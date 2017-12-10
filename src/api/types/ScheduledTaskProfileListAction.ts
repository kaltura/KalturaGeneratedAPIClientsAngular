
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfileListResponse } from './KalturaScheduledTaskProfileListResponse';

import { KalturaScheduledTaskProfileFilter } from './KalturaScheduledTaskProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaScheduledTaskProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'scheduledTaskProfile' action 'list'.
 *
 * Usage: List scheduled task profiles
 *
 * Server response type:         KalturaScheduledTaskProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduledTaskProfileListAction extends KalturaRequest<KalturaScheduledTaskProfileListResponse> {

    filter : KalturaScheduledTaskProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : ScheduledTaskProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduledTaskProfileListResponse', responseConstructor : KalturaScheduledTaskProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaScheduledTaskProfileFilter, subType : 'KalturaScheduledTaskProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

