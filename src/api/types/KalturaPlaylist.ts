
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';

export interface KalturaPlaylistArgs  extends KalturaBaseEntryArgs {
    playlistContent? : string;
	filters? : KalturaMediaEntryFilterForPlaylist[];
	totalResults? : number;
	playlistType? : KalturaPlaylistType;
}


export class KalturaPlaylist extends KalturaBaseEntry {

    playlistContent : string;
	filters : KalturaMediaEntryFilterForPlaylist[];
	totalResults : number;
	playlistType : KalturaPlaylistType;
	readonly plays : number;
	readonly views : number;
	readonly duration : number;
	readonly executeUrl : string;

    constructor(data? : KalturaPlaylistArgs)
    {
        super(data);
        if (typeof this.filters === 'undefined') this.filters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaylist' },
				playlistContent : { type : 's' },
				filters : { type : 'a', subTypeConstructor : KalturaMediaEntryFilterForPlaylist, subType : 'KalturaMediaEntryFilterForPlaylist' },
				totalResults : { type : 'n' },
				playlistType : { type : 'en', subTypeConstructor : KalturaPlaylistType, subType : 'KalturaPlaylistType' },
				plays : { type : 'n', readOnly : true },
				views : { type : 'n', readOnly : true },
				duration : { type : 'n', readOnly : true },
				executeUrl : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaylist',KalturaPlaylist);
