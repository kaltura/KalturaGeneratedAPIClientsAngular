
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryEntryIndexActionArgs  extends KalturaRequestArgs {
    entryId : string;
	categoryId : number;
	shouldUpdate? : boolean;
}

/**
 * Build request payload for service 'categoryEntry' action 'index'.
 *
 * Usage: Index CategoryEntry by Id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryEntryIndexAction extends KalturaRequest<number> {

    entryId : string;
	categoryId : number;
	shouldUpdate : boolean;

    constructor(data : CategoryEntryIndexActionArgs)
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
                service : { type : 'c', default : 'categoryentry' },
				action : { type : 'c', default : 'index' },
				entryId : { type : 's' },
				categoryId : { type : 'n' },
				shouldUpdate : { type : 'b' }
            }
        );
        return result;
    }
}

