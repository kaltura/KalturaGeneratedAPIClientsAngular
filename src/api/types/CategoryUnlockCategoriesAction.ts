
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUnlockCategoriesActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'category' action 'unlockCategories'.
 *
 * Usage: Unlock categories
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryUnlockCategoriesAction extends KalturaRequest<void> {

    

    constructor(data? : CategoryUnlockCategoriesActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'category' },
				action : { type : 'c', default : 'unlockCategories' }
            }
        );
        return result;
    }
}

