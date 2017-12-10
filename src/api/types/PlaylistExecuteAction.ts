
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaContext } from './KalturaContext';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistExecuteActionArgs  extends KalturaRequestArgs {
    id : string;
	detailed? : string;
	playlistContext? : KalturaContext;
	filter? : KalturaMediaEntryFilterForPlaylist;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'playlist' action 'execute'.
 *
 * Usage: Retrieve playlist for playing purpose
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaylistExecuteAction extends KalturaRequest<KalturaBaseEntry[]> {

    id : string;
	detailed : string;
	playlistContext : KalturaContext;
	filter : KalturaMediaEntryFilterForPlaylist;
	pager : KalturaFilterPager;

    constructor(data : PlaylistExecuteActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playlist' },
				action : { type : 'c', default : 'execute' },
				id : { type : 's' },
				detailed : { type : 's' },
				playlistContext : { type : 'o', subTypeConstructor : KalturaContext, subType : 'KalturaContext' },
				filter : { type : 'o', subTypeConstructor : KalturaMediaEntryFilterForPlaylist, subType : 'KalturaMediaEntryFilterForPlaylist' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

