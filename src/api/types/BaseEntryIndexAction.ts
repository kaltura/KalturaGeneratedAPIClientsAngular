
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryIndexActionArgs  extends KalturaRequestArgs {
    id : string;
	shouldUpdate? : boolean;
}

/**
 * Build request payload for service 'baseEntry' action 'index'.
 *
 * Usage: Index an entry by id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryIndexAction extends KalturaRequest<number> {

    id : string;
	shouldUpdate : boolean;

    constructor(data : BaseEntryIndexActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
        if (typeof this.shouldUpdate === 'undefined') this.shouldUpdate = true;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'index' },
				id : { type : 's' },
				shouldUpdate : { type : 'b' }
            }
        );
        return result;
    }
}

