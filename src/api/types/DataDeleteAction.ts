
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'data' action 'delete'.
 *
 * Usage: Delete a data entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DataDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : DataDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'data' },
				action : { type : 'c', default : 'delete' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

