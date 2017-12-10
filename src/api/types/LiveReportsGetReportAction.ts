
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStatsListResponse } from './KalturaLiveStatsListResponse';

import { KalturaLiveReportType } from './KalturaLiveReportType';
import { KalturaLiveReportInputFilter } from './KalturaLiveReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveReportsGetReportActionArgs  extends KalturaRequestArgs {
    reportType : KalturaLiveReportType;
	filter? : KalturaLiveReportInputFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'liveReports' action 'getReport'.
 *
 * 
 *
 * Server response type:         KalturaLiveStatsListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveReportsGetReportAction extends KalturaRequest<KalturaLiveStatsListResponse> {

    reportType : KalturaLiveReportType;
	filter : KalturaLiveReportInputFilter;
	pager : KalturaFilterPager;

    constructor(data : LiveReportsGetReportActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStatsListResponse', responseConstructor : KalturaLiveStatsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livereports' },
				action : { type : 'c', default : 'getReport' },
				reportType : { type : 'es', subTypeConstructor : KalturaLiveReportType, subType : 'KalturaLiveReportType' },
				filter : { type : 'o', subTypeConstructor : KalturaLiveReportInputFilter, subType : 'KalturaLiveReportInputFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

