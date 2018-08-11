
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamEntryFilter, KalturaLiveStreamEntryFilterArgs } from './KalturaLiveStreamEntryFilter';

export interface KalturaLiveStreamAdminEntryBaseFilterArgs  extends KalturaLiveStreamEntryFilterArgs {
    
}


export class KalturaLiveStreamAdminEntryBaseFilter extends KalturaLiveStreamEntryFilter {

    

    constructor(data? : KalturaLiveStreamAdminEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamAdminEntryBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamAdminEntryBaseFilter'] = KalturaLiveStreamAdminEntryBaseFilter;