
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryCloneActionArgs  extends KalturaRequestArgs {
    categoryId : number;
	fromPartnerId : number;
	parentCategoryId? : number;
}

/**
 * Build request payload for service 'category' action 'clone'.
 *
 * Usage: Clone Category
 *
 * Server response type:         KalturaCategory
 * Server failure response type: KalturaAPIException
 */
export class CategoryCloneAction extends KalturaRequest<KalturaCategory> {

    categoryId : number;
	fromPartnerId : number;
	parentCategoryId : number;

    constructor(data : CategoryCloneActionArgs)
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
				action : { type : 'c', default : 'clone' },
				categoryId : { type : 'n' },
				fromPartnerId : { type : 'n' },
				parentCategoryId : { type : 'n' }
            }
        );
        return result;
    }
}

