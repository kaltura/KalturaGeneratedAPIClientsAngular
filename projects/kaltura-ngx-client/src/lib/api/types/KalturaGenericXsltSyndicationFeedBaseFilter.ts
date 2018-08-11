
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericSyndicationFeedFilter, KalturaGenericSyndicationFeedFilterArgs } from './KalturaGenericSyndicationFeedFilter';

export interface KalturaGenericXsltSyndicationFeedBaseFilterArgs  extends KalturaGenericSyndicationFeedFilterArgs {
    
}


export class KalturaGenericXsltSyndicationFeedBaseFilter extends KalturaGenericSyndicationFeedFilter {

    

    constructor(data? : KalturaGenericXsltSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericXsltSyndicationFeedBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericXsltSyndicationFeedBaseFilter'] = KalturaGenericXsltSyndicationFeedBaseFilter;