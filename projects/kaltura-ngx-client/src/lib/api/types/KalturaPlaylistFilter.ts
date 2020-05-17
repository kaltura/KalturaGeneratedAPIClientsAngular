
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaPlaylistBaseFilter, KalturaPlaylistBaseFilterArgs } from './KalturaPlaylistBaseFilter';

export interface KalturaPlaylistFilterArgs  extends KalturaPlaylistBaseFilterArgs {
    playListTypeEqual? : KalturaPlaylistType;
	playListTypeIn? : string;
}


export class KalturaPlaylistFilter extends KalturaPlaylistBaseFilter {

    playListTypeEqual : KalturaPlaylistType;
	playListTypeIn : string;

    constructor(data? : KalturaPlaylistFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaylistFilter' },
				playListTypeEqual : { type : 'en', subTypeConstructor : KalturaPlaylistType, subType : 'KalturaPlaylistType' },
				playListTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlaylistFilter'] = KalturaPlaylistFilter;