
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserServeCsvActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'user' action 'serveCsv'.
 *
 * Usage: Will serve a requested CSV
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserServeCsvAction extends KalturaRequest<string> {

    id : string;

    constructor(data : UserServeCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'serveCsv' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

