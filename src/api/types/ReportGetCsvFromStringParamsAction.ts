
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface ReportGetCsvFromStringParamsActionArgs  extends KalturaFileRequestArgs {
    id : number;
	params? : string;
}

/**
 * Build request payload for service 'report' action 'getCsvFromStringParams'.
 *
 * Usage: Returns report CSV file executed by string params with the following convention: param1=value1;param2=value2
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class ReportGetCsvFromStringParamsAction extends KalturaFileRequest {

    id : number;
	params : string;

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
				params : { type : 's' }
            }
        );
        return result;
    }
}

