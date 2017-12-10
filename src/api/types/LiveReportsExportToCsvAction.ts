
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveReportExportResponse } from './KalturaLiveReportExportResponse';

import { KalturaLiveReportExportType } from './KalturaLiveReportExportType';
import { KalturaLiveReportExportParams } from './KalturaLiveReportExportParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveReportsExportToCsvActionArgs  extends KalturaRequestArgs {
    reportType : KalturaLiveReportExportType;
	params : KalturaLiveReportExportParams;
}

/**
 * Build request payload for service 'liveReports' action 'exportToCsv'.
 *
 * 
 *
 * Server response type:         KalturaLiveReportExportResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveReportsExportToCsvAction extends KalturaRequest<KalturaLiveReportExportResponse> {

    reportType : KalturaLiveReportExportType;
	params : KalturaLiveReportExportParams;

    constructor(data : LiveReportsExportToCsvActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveReportExportResponse', responseConstructor : KalturaLiveReportExportResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livereports' },
				action : { type : 'c', default : 'exportToCsv' },
				reportType : { type : 'en', subTypeConstructor : KalturaLiveReportExportType, subType : 'KalturaLiveReportExportType' },
				params : { type : 'o', subTypeConstructor : KalturaLiveReportExportParams, subType : 'KalturaLiveReportExportParams' }
            }
        );
        return result;
    }
}

