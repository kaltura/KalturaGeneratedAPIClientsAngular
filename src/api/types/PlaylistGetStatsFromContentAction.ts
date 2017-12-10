
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';

import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistGetStatsFromContentActionArgs  extends KalturaRequestArgs {
    playlistType : KalturaPlaylistType;
	playlistContent : string;
}

/**
 * Build request payload for service 'playlist' action 'getStatsFromContent'.
 *
 * Usage: Retrieve playlist statistics
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaylistGetStatsFromContentAction extends KalturaRequest<KalturaPlaylist> {

    playlistType : KalturaPlaylistType;
	playlistContent : string;

    constructor(data : PlaylistGetStatsFromContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaylist', responseConstructor : KalturaPlaylist  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playlist' },
				action : { type : 'c', default : 'getStatsFromContent' },
				playlistType : { type : 'en', subTypeConstructor : KalturaPlaylistType, subType : 'KalturaPlaylistType' },
				playlistContent : { type : 's' }
            }
        );
        return result;
    }
}

