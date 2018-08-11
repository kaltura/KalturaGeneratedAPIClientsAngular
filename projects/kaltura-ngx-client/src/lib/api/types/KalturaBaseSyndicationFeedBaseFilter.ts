
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBaseSyndicationFeedBaseFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBaseSyndicationFeedBaseFilter extends KalturaFilter {

    

    constructor(data? : KalturaBaseSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSyndicationFeedBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseSyndicationFeedBaseFilter'] = KalturaBaseSyndicationFeedBaseFilter;