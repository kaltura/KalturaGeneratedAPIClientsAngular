
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryMoveActionArgs  extends KalturaRequestArgs {
    categoryIds : string;
	targetCategoryParentId : number;
}

/**
 * Build request payload for service 'category' action 'move'.
 *
 * Usage: Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryMoveAction extends KalturaRequest<boolean> {

    categoryIds : string;
	targetCategoryParentId : number;

    constructor(data : CategoryMoveActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'category' },
				action : { type : 'c', default : 'move' },
				categoryIds : { type : 's' },
				targetCategoryParentId : { type : 'n' }
            }
        );
        return result;
    }
}

