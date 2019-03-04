
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchHistoryListResponse } from './KalturaESearchHistoryListResponse';

import { KalturaESearchHistoryFilter } from './KalturaESearchHistoryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchHistoryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaESearchHistoryFilter;
}

/**
 * Build request payload for service 'searchHistory' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaESearchHistoryListResponse
 * Server failure response type: KalturaAPIException
 */
export class SearchHistoryListAction extends KalturaRequest<KalturaESearchHistoryListResponse> {

    filter : KalturaESearchHistoryFilter;

    constructor(data? : SearchHistoryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaESearchHistoryListResponse', responseConstructor : KalturaESearchHistoryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchhistory_searchhistory' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaESearchHistoryFilter, subType : 'KalturaESearchHistoryFilter' }
            }
        );
        return result;
    }
}

