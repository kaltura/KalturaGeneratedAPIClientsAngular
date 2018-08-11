
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericXsltSyndicationFeedBaseFilter, KalturaGenericXsltSyndicationFeedBaseFilterArgs } from './KalturaGenericXsltSyndicationFeedBaseFilter';

export interface KalturaGenericXsltSyndicationFeedFilterArgs  extends KalturaGenericXsltSyndicationFeedBaseFilterArgs {
    
}


export class KalturaGenericXsltSyndicationFeedFilter extends KalturaGenericXsltSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaGenericXsltSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericXsltSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericXsltSyndicationFeedFilter'] = KalturaGenericXsltSyndicationFeedFilter;