
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaGenericXsltSyndicationFeedFilter',KalturaGenericXsltSyndicationFeedFilter);
