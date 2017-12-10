
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetUrlForReportAsCsvActionArgs  extends KalturaRequestArgs {
    reportTitle : string;
	reportText : string;
	headers : string;
	reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	dimension? : string;
	pager? : KalturaFilterPager;
	order? : string;
	objectIds? : string;
}

/**
 * Build request payload for service 'report' action 'getUrlForReportAsCsv'.
 *
 * Usage: will create a Csv file for the given report and return the URL to access it
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReportGetUrlForReportAsCsvAction extends KalturaRequest<string> {

    reportTitle : string;
	reportText : string;
	headers : string;
	reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	dimension : string;
	pager : KalturaFilterPager;
	order : string;
	objectIds : string;

    constructor(data : ReportGetUrlForReportAsCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'getUrlForReportAsCsv' },
				reportTitle : { type : 's' },
				reportText : { type : 's' },
				headers : { type : 's' },
				reportType : { type : 'es', subTypeConstructor : KalturaReportType, subType : 'KalturaReportType' },
				reportInputFilter : { type : 'o', subTypeConstructor : KalturaReportInputFilter, subType : 'KalturaReportInputFilter' },
				dimension : { type : 's' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' },
				order : { type : 's' },
				objectIds : { type : 's' }
            }
        );
        return result;
    }
}

