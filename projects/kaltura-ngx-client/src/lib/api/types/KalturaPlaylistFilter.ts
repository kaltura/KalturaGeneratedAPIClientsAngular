
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaylistBaseFilter, KalturaPlaylistBaseFilterArgs } from './KalturaPlaylistBaseFilter';

export interface KalturaPlaylistFilterArgs  extends KalturaPlaylistBaseFilterArgs {
    
}


export class KalturaPlaylistFilter extends KalturaPlaylistBaseFilter {

    

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
                objectType : { type : 'c', default : 'KalturaPlaylistFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlaylistFilter'] = KalturaPlaylistFilter;