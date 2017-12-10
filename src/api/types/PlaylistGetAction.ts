
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistGetActionArgs  extends KalturaRequestArgs {
    id : string;
	version? : number;
}

/**
 * Build request payload for service 'playlist' action 'get'.
 *
 * Usage: Retrieve a playlist
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaylistGetAction extends KalturaRequest<KalturaPlaylist> {

    id : string;
	version : number;

    constructor(data : PlaylistGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaylist', responseConstructor : KalturaPlaylist  });
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playlist' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' },
				version : { type : 'n' }
            }
        );
        return result;
    }
}

