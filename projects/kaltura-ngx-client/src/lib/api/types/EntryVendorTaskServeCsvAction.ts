
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskServeCsvActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'entryVendorTask' action 'serveCsv'.
 *
 * Usage: Will serve a requested csv
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskServeCsvAction extends KalturaRequest<string> {

    id : string;

    constructor(data : EntryVendorTaskServeCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_entryvendortask' },
				action : { type : 'c', default : 'serveCsv' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

