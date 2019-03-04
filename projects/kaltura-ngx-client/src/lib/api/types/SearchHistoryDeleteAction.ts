
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchHistoryDeleteActionArgs  extends KalturaRequestArgs {
    searchTerm : string;
}

/**
 * Build request payload for service 'searchHistory' action 'delete'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class SearchHistoryDeleteAction extends KalturaRequest<void> {

    searchTerm : string;

    constructor(data : SearchHistoryDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchhistory_searchhistory' },
				action : { type : 'c', default : 'delete' },
				searchTerm : { type : 's' }
            }
        );
        return result;
    }
}

