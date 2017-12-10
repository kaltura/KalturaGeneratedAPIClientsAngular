
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventListResponse } from './KalturaScheduleEventListResponse';

import { KalturaScheduleEventFilter } from './KalturaScheduleEventFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaScheduleEventFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'scheduleEvent' action 'list'.
 *
 * Usage: List KalturaScheduleEvent objects
 *
 * Server response type:         KalturaScheduleEventListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ScheduleEventListAction extends KalturaRequest<KalturaScheduleEventListResponse> {

    filter : KalturaScheduleEventFilter;
	pager : KalturaFilterPager;

    constructor(data? : ScheduleEventListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEventListResponse', responseConstructor : KalturaScheduleEventListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleevent' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaScheduleEventFilter, subType : 'KalturaScheduleEventFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

