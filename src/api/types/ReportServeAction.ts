
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportServeActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'report' action 'serve'.
 *
 * Usage: Will serve a requested report
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReportServeAction extends KalturaRequest<string> {

    id : string;

    constructor(data : ReportServeActionArgs)
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
				action : { type : 'c', default : 'serve' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

