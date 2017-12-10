
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistAddActionArgs  extends KalturaRequestArgs {
    playlist : KalturaPlaylist;
	updateStats? : boolean;
}

/**
 * Build request payload for service 'playlist' action 'add'.
 *
 * Usage: Add new playlist
 * Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaylistAddAction extends KalturaRequest<KalturaPlaylist> {

    playlist : KalturaPlaylist;
	updateStats : boolean;

    constructor(data : PlaylistAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaylist', responseConstructor : KalturaPlaylist  });
        if (typeof this.updateStats === 'undefined') this.updateStats = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playlist' },
				action : { type : 'c', default : 'add' },
				playlist : { type : 'o', subTypeConstructor : KalturaPlaylist, subType : 'KalturaPlaylist' },
				updateStats : { type : 'b' }
            }
        );
        return result;
    }
}

