
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface ReportGetCsvActionArgs  extends KalturaFileRequestArgs {
    id : number;
	params? : KalturaKeyValue[];
}

/**
 * Build request payload for service 'report' action 'getCsv'.
 *
 * 
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class ReportGetCsvAction extends KalturaFileRequest {

    id : number;
	params : KalturaKeyValue[];

    constructor(data : ReportGetCsvActionArgs)
    {
        super(data);
        if (typeof this.params === 'undefined') this.params = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'getCsv' },
				id : { type : 'n' },
				params : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

