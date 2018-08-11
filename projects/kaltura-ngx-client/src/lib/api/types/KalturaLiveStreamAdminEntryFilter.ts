
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamAdminEntryBaseFilter, KalturaLiveStreamAdminEntryBaseFilterArgs } from './KalturaLiveStreamAdminEntryBaseFilter';

export interface KalturaLiveStreamAdminEntryFilterArgs  extends KalturaLiveStreamAdminEntryBaseFilterArgs {
    
}


export class KalturaLiveStreamAdminEntryFilter extends KalturaLiveStreamAdminEntryBaseFilter {

    

    constructor(data? : KalturaLiveStreamAdminEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamAdminEntryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamAdminEntryFilter'] = KalturaLiveStreamAdminEntryFilter;