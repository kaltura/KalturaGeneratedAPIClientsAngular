
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportExportResponse } from './KalturaReportExportResponse';

import { KalturaReportExportParams } from './KalturaReportExportParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportExportToCsvActionArgs  extends KalturaRequestArgs {
    params : KalturaReportExportParams;
}

/**
 * Build request payload for service 'report' action 'exportToCsv'.
 *
 * 
 *
 * Server response type:         KalturaReportExportResponse
 * Server failure response type: KalturaAPIException
 */
export class ReportExportToCsvAction extends KalturaRequest<KalturaReportExportResponse> {

    params : KalturaReportExportParams;

    constructor(data : ReportExportToCsvActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReportExportResponse', responseConstructor : KalturaReportExportResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'exportToCsv' },
				params : { type : 'o', subTypeConstructor : KalturaReportExportParams, subType : 'KalturaReportExportParams' }
            }
        );
        return result;
    }
}

