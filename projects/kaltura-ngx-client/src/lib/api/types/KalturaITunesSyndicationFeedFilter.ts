
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaITunesSyndicationFeedBaseFilter, KalturaITunesSyndicationFeedBaseFilterArgs } from './KalturaITunesSyndicationFeedBaseFilter';

export interface KalturaITunesSyndicationFeedFilterArgs  extends KalturaITunesSyndicationFeedBaseFilterArgs {
    
}


export class KalturaITunesSyndicationFeedFilter extends KalturaITunesSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaITunesSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaITunesSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaITunesSyndicationFeedFilter'] = KalturaITunesSyndicationFeedFilter;