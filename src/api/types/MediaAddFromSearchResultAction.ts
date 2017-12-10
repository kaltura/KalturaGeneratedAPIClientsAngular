
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddFromSearchResultActionArgs  extends KalturaRequestArgs {
    mediaEntry? : KalturaMediaEntry;
	searchResult? : KalturaSearchResult;
}

/**
 * Build request payload for service 'media' action 'addFromSearchResult'.
 *
 * Usage: Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaAddFromSearchResultAction extends KalturaRequest<KalturaMediaEntry> {

    mediaEntry : KalturaMediaEntry;
	searchResult : KalturaSearchResult;

    constructor(data? : MediaAddFromSearchResultActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'addFromSearchResult' },
				mediaEntry : { type : 'o', subTypeConstructor : KalturaMediaEntry, subType : 'KalturaMediaEntry' },
				searchResult : { type : 'o', subTypeConstructor : KalturaSearchResult, subType : 'KalturaSearchResult' }
            }
        );
        return result;
    }
}

