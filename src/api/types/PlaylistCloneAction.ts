
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistCloneActionArgs  extends KalturaRequestArgs {
    id : string;
	newPlaylist? : KalturaPlaylist;
}

/**
 * Build request payload for service 'playlist' action 'clone'.
 *
 * Usage: Clone an existing playlist
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaylistCloneAction extends KalturaRequest<KalturaPlaylist> {

    id : string;
	newPlaylist : KalturaPlaylist;

    constructor(data : PlaylistCloneActionArgs)
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
				action : { type : 'c', default : 'clone' },
				id : { type : 's' },
				newPlaylist : { type : 'o', subTypeConstructor : KalturaPlaylist, subType : 'KalturaPlaylist' }
            }
        );
        return result;
    }
}

