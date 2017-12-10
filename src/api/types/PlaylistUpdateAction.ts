
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	playlist : KalturaPlaylist;
	updateStats? : boolean;
}

/**
 * Build request payload for service 'playlist' action 'update'.
 *
 * Usage: Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaylistUpdateAction extends KalturaRequest<KalturaPlaylist> {

    id : string;
	playlist : KalturaPlaylist;
	updateStats : boolean;

    constructor(data : PlaylistUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				playlist : { type : 'o', subTypeConstructor : KalturaPlaylist, subType : 'KalturaPlaylist' },
				updateStats : { type : 'b' }
            }
        );
        return result;
    }
}

