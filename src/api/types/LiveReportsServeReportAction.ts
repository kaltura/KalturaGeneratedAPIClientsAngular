
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveReportsServeReportActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'liveReports' action 'serveReport'.
 *
 * Usage: Will serve a requested report
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveReportsServeReportAction extends KalturaRequest<string> {

    id : string;

    constructor(data : LiveReportsServeReportActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livereports' },
				action : { type : 'c', default : 'serveReport' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

