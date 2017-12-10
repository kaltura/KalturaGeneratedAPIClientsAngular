
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchResult } from './KalturaSearchResult';

import { KalturaMediaType } from './KalturaMediaType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchSearchUrlActionArgs  extends KalturaRequestArgs {
    mediaType : KalturaMediaType;
	url : string;
}

/**
 * Build request payload for service 'search' action 'searchUrl'.
 *
 * Usage: Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *
 * Server response type:         KalturaSearchResult
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchSearchUrlAction extends KalturaRequest<KalturaSearchResult> {

    mediaType : KalturaMediaType;
	url : string;

    constructor(data : SearchSearchUrlActionArgs)
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
				action : { type : 'c', default : 'searchUrl' },
				mediaType : { type : 'en', subTypeConstructor : KalturaMediaType, subType : 'KalturaMediaType' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

