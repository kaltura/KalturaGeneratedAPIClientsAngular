
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchResult } from './KalturaSearchResult';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchGetMediaInfoActionArgs  extends KalturaRequestArgs {
    searchResult : KalturaSearchResult;
}

/**
 * Build request payload for service 'search' action 'getMediaInfo'.
 *
 * Usage: Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields
 *
 * Server response type:         KalturaSearchResult
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchGetMediaInfoAction extends KalturaRequest<KalturaSearchResult> {

    searchResult : KalturaSearchResult;

    constructor(data : SearchGetMediaInfoActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSearchResult', responseConstructor : KalturaSearchResult  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'search' },
				action : { type : 'c', default : 'getMediaInfo' },
				searchResult : { type : 'o', subTypeConstructor : KalturaSearchResult, subType : 'KalturaSearchResult' }
            }
        );
        return result;
    }
}

