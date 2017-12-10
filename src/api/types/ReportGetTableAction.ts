
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportTable } from './KalturaReportTable';

import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetTableActionArgs  extends KalturaRequestArgs {
    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	pager : KalturaFilterPager;
	order? : string;
	objectIds? : string;
}

/**
 * Build request payload for service 'report' action 'getTable'.
 *
 * Usage: report getTable action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTable
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReportGetTableAction extends KalturaRequest<KalturaReportTable> {

    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	pager : KalturaFilterPager;
	order : string;
	objectIds : string;

    constructor(data : ReportGetTableActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReportTable', responseConstructor : KalturaReportTable  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'getTable' },
				reportType : { type : 'es', subTypeConstructor : KalturaReportType, subType : 'KalturaReportType' },
				reportInputFilter : { type : 'o', subTypeConstructor : KalturaReportInputFilter, subType : 'KalturaReportInputFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' },
				order : { type : 's' },
				objectIds : { type : 's' }
            }
        );
        return result;
    }
}

