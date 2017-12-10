
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportGraph } from './KalturaReportGraph';

import { KalturaLiveReportType } from './KalturaLiveReportType';
import { KalturaLiveReportInputFilter } from './KalturaLiveReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveReportsGetEventsActionArgs  extends KalturaRequestArgs {
    reportType : KalturaLiveReportType;
	filter? : KalturaLiveReportInputFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'liveReports' action 'getEvents'.
 *
 * 
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveReportsGetEventsAction extends KalturaRequest<KalturaReportGraph[]> {

    reportType : KalturaLiveReportType;
	filter : KalturaLiveReportInputFilter;
	pager : KalturaFilterPager;

    constructor(data : LiveReportsGetEventsActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaReportGraph', responseConstructor : KalturaReportGraph  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livereports' },
				action : { type : 'c', default : 'getEvents' },
				reportType : { type : 'es', subTypeConstructor : KalturaLiveReportType, subType : 'KalturaLiveReportType' },
				filter : { type : 'o', subTypeConstructor : KalturaLiveReportInputFilter, subType : 'KalturaLiveReportInputFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

