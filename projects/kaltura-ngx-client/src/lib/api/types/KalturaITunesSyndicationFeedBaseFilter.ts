
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';

export interface KalturaITunesSyndicationFeedBaseFilterArgs  extends KalturaBaseSyndicationFeedFilterArgs {
    
}


export class KalturaITunesSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {

    

    constructor(data? : KalturaITunesSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaITunesSyndicationFeedBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaITunesSyndicationFeedBaseFilter'] = KalturaITunesSyndicationFeedBaseFilter;