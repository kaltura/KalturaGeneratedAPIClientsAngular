
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericSyndicationFeedBaseFilter, KalturaGenericSyndicationFeedBaseFilterArgs } from './KalturaGenericSyndicationFeedBaseFilter';

export interface KalturaGenericSyndicationFeedFilterArgs  extends KalturaGenericSyndicationFeedBaseFilterArgs {
    
}


export class KalturaGenericSyndicationFeedFilter extends KalturaGenericSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaGenericSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericSyndicationFeedFilter'] = KalturaGenericSyndicationFeedFilter;