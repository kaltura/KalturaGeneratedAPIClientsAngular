
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedBaseFilterArgs } from './KalturaBaseSyndicationFeedBaseFilter';

export interface KalturaBaseSyndicationFeedFilterArgs  extends KalturaBaseSyndicationFeedBaseFilterArgs {
    
}


export class KalturaBaseSyndicationFeedFilter extends KalturaBaseSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaBaseSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseSyndicationFeedFilter'] = KalturaBaseSyndicationFeedFilter;