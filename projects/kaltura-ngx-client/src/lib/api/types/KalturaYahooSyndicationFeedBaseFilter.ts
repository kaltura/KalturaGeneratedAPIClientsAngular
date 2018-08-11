
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';

export interface KalturaYahooSyndicationFeedBaseFilterArgs  extends KalturaBaseSyndicationFeedFilterArgs {
    
}


export class KalturaYahooSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {

    

    constructor(data? : KalturaYahooSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooSyndicationFeedBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaYahooSyndicationFeedBaseFilter'] = KalturaYahooSyndicationFeedBaseFilter;