
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaEntryFilter, KalturaMediaEntryFilterArgs } from './KalturaMediaEntryFilter';

export interface KalturaMediaEntryFilterForPlaylistArgs  extends KalturaMediaEntryFilterArgs {
    limit? : number;
	name? : string;
}


export class KalturaMediaEntryFilterForPlaylist extends KalturaMediaEntryFilter {

    limit : number;
	name : string;

    constructor(data? : KalturaMediaEntryFilterForPlaylistArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEntryFilterForPlaylist' },
				limit : { type : 'n' },
				name : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaEntryFilterForPlaylist'] = KalturaMediaEntryFilterForPlaylist;