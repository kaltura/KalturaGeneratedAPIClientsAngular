
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';

export interface KalturaPodcastDistributionProviderBaseFilterArgs  extends KalturaDistributionProviderFilterArgs {
    
}


export class KalturaPodcastDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {

    

    constructor(data? : KalturaPodcastDistributionProviderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPodcastDistributionProviderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPodcastDistributionProviderBaseFilter'] = KalturaPodcastDistributionProviderBaseFilter;