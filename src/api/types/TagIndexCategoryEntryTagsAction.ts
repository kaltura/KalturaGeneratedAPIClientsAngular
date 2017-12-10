
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TagIndexCategoryEntryTagsActionArgs  extends KalturaRequestArgs {
    categoryId : number;
	pcToDecrement : string;
	pcToIncrement : string;
}

/**
 * Build request payload for service 'tag' action 'indexCategoryEntryTags'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TagIndexCategoryEntryTagsAction extends KalturaRequest<void> {

    categoryId : number;
	pcToDecrement : string;
	pcToIncrement : string;

    constructor(data : TagIndexCategoryEntryTagsActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'tagsearch_tag' },
				action : { type : 'c', default : 'indexCategoryEntryTags' },
				categoryId : { type : 'n' },
				pcToDecrement : { type : 's' },
				pcToIncrement : { type : 's' }
            }
        );
        return result;
    }
}

