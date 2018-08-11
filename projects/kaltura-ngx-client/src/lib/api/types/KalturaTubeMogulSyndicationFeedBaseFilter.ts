
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';

export interface KalturaTubeMogulSyndicationFeedBaseFilterArgs  extends KalturaBaseSyndicationFeedFilterArgs {
    
}


export class KalturaTubeMogulSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {

    

    constructor(data? : KalturaTubeMogulSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTubeMogulSyndicationFeedBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTubeMogulSyndicationFeedBaseFilter'] = KalturaTubeMogulSyndicationFeedBaseFilter;