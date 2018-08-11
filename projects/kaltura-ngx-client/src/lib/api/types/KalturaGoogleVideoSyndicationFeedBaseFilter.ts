
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';

export interface KalturaGoogleVideoSyndicationFeedBaseFilterArgs  extends KalturaBaseSyndicationFeedFilterArgs {
    
}


export class KalturaGoogleVideoSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {

    

    constructor(data? : KalturaGoogleVideoSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGoogleVideoSyndicationFeedBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGoogleVideoSyndicationFeedBaseFilter'] = KalturaGoogleVideoSyndicationFeedBaseFilter;