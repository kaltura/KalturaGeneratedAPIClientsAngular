
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportGraph } from './KalturaReportGraph';

import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetGraphsActionArgs  extends KalturaRequestArgs {
    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	dimension? : string;
	objectIds? : string;
}

/**
 * Build request payload for service 'report' action 'getGraphs'.
 *
 * Usage: report getGraphs action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReportGetGraphsAction extends KalturaRequest<KalturaReportGraph[]> {

    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	dimension : string;
	objectIds : string;

    constructor(data : ReportGetGraphsActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaReportGraph', responseConstructor : KalturaReportGraph  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'getGraphs' },
				reportType : { type : 'es', subTypeConstructor : KalturaReportType, subType : 'KalturaReportType' },
				reportInputFilter : { type : 'o', subTypeConstructor : KalturaReportInputFilter, subType : 'KalturaReportInputFilter' },
				dimension : { type : 's' },
				objectIds : { type : 's' }
            }
        );
        return result;
    }
}

