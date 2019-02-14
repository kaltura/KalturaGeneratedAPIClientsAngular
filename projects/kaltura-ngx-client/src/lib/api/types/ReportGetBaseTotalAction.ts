
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportBaseTotal } from './KalturaReportBaseTotal';

import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaReportResponseOptions } from './KalturaReportResponseOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetBaseTotalActionArgs  extends KalturaRequestArgs {
    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	objectIds? : string;
	responseOptions? : KalturaReportResponseOptions;
}

/**
 * Build request payload for service 'report' action 'getBaseTotal'.
 *
 * Usage: report getBaseTotal action allows to get the total base for storage reports
 *
 * Server response type:         KalturaReportBaseTotal[]
 * Server failure response type: KalturaAPIException
 */
export class ReportGetBaseTotalAction extends KalturaRequest<KalturaReportBaseTotal[]> {

    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	objectIds : string;
	responseOptions : KalturaReportResponseOptions;

    constructor(data : ReportGetBaseTotalActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaReportBaseTotal', responseConstructor : KalturaReportBaseTotal  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'getBaseTotal' },
				reportType : { type : 'es', subTypeConstructor : KalturaReportType, subType : 'KalturaReportType' },
				reportInputFilter : { type : 'o', subTypeConstructor : KalturaReportInputFilter, subType : 'KalturaReportInputFilter' },
				objectIds : { type : 's' },
				responseOptions : { type : 'o', subTypeConstructor : KalturaReportResponseOptions, subType : 'KalturaReportResponseOptions' }
            }
        );
        return result;
    }
}

