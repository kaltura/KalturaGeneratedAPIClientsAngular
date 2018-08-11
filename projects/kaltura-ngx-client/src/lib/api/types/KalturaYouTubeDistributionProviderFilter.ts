
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaYouTubeDistributionProviderBaseFilter, KalturaYouTubeDistributionProviderBaseFilterArgs } from './KalturaYouTubeDistributionProviderBaseFilter';

export interface KalturaYouTubeDistributionProviderFilterArgs  extends KalturaYouTubeDistributionProviderBaseFilterArgs {
    
}


export class KalturaYouTubeDistributionProviderFilter extends KalturaYouTubeDistributionProviderBaseFilter {

    

    constructor(data? : KalturaYouTubeDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYouTubeDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaYouTubeDistributionProviderFilter'] = KalturaYouTubeDistributionProviderFilter;