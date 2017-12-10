
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryEntryActivateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	categoryId : number;
}

/**
 * Build request payload for service 'categoryEntry' action 'activate'.
 *
 * Usage: activate CategoryEntry when it is pending moderation
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryEntryActivateAction extends KalturaRequest<void> {

    entryId : string;
	categoryId : number;

    constructor(data : CategoryEntryActivateActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryentry' },
				action : { type : 'c', default : 'activate' },
				entryId : { type : 's' },
				categoryId : { type : 'n' }
            }
        );
        return result;
    }
}

