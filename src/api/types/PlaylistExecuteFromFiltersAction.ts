
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistExecuteFromFiltersActionArgs  extends KalturaRequestArgs {
    filters : KalturaMediaEntryFilterForPlaylist[];
	totalResults : number;
	detailed? : string;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'playlist' action 'executeFromFilters'.
 *
 * Usage: Revrieve playlist for playing purpose, based on media entry filters
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaylistExecuteFromFiltersAction extends KalturaRequest<KalturaBaseEntry[]> {

    filters : KalturaMediaEntryFilterForPlaylist[];
	totalResults : number;
	detailed : string;
	pager : KalturaFilterPager;

    constructor(data : PlaylistExecuteFromFiltersActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
        if (typeof this.filters === 'undefined') this.filters = [];
		if (typeof this.detailed === 'undefined') this.detailed = "1";
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playlist' },
				action : { type : 'c', default : 'executeFromFilters' },
				filters : { type : 'a', subTypeConstructor : KalturaMediaEntryFilterForPlaylist, subType : 'KalturaMediaEntryFilterForPlaylist' },
				totalResults : { type : 'n' },
				detailed : { type : 's' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

