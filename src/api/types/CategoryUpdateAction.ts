
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	category : KalturaCategory;
}

/**
 * Build request payload for service 'category' action 'update'.
 *
 * Usage: Update Category
 *
 * Server response type:         KalturaCategory
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryUpdateAction extends KalturaRequest<KalturaCategory> {

    id : number;
	category : KalturaCategory;

    constructor(data : CategoryUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategory', responseConstructor : KalturaCategory  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'category' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				category : { type : 'o', subTypeConstructor : KalturaCategory, subType : 'KalturaCategory' }
            }
        );
        return result;
    }
}

