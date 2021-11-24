
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface ReportGetCsvFromStringParamsActionArgs  extends KalturaFileRequestArgs {
    id : number;
	params? : string;
	excludedFields? : string;
}

/**
 * Build request payload for service 'report' action 'getCsvFromStringParams'.
 *
 * Usage: Returns report CSV file executed by string params with the following convention: param1=value1;param2=value2
 * excludedFields can be supplied comma separated
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class ReportGetCsvFromStringParamsAction extends KalturaFileRequest {

    id : number;
	params : string;
	excludedFields : string;

    constructor(data : ReportGetCsvFromStringParamsActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'getCsvFromStringParams' },
				id : { type : 'n' },
				params : { type : 's' },
				excludedFields : { type : 's' }
            }
        );
        return result;
    }
}

