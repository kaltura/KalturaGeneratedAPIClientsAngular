
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
	moveEntriesToParentCategory? : KalturaNullableBoolean;
}

/**
 * Build request payload for service 'category' action 'delete'.
 *
 * Usage: Delete a Category
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryDeleteAction extends KalturaRequest<void> {

    id : number;
	moveEntriesToParentCategory : KalturaNullableBoolean;

    constructor(data : CategoryDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
        if (typeof this.moveEntriesToParentCategory === 'undefined') this.moveEntriesToParentCategory = 1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'category' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' },
				moveEntriesToParentCategory : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

