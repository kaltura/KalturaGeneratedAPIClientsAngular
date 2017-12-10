
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylistListResponse } from './KalturaPlaylistListResponse';

import { KalturaPlaylistFilter } from './KalturaPlaylistFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPlaylistFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'playlist' action 'list'.
 *
 * Usage: List available playlists
 *
 * Server response type:         KalturaPlaylistListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaylistListAction extends KalturaRequest<KalturaPlaylistListResponse> {

    filter : KalturaPlaylistFilter;
	pager : KalturaFilterPager;

    constructor(data? : PlaylistListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaylistListResponse', responseConstructor : KalturaPlaylistListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playlist' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPlaylistFilter, subType : 'KalturaPlaylistFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

