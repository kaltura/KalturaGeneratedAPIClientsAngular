
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';

export interface KalturaPodcastDistributionProfileBaseFilterArgs  extends KalturaDistributionProfileFilterArgs {
    
}


export class KalturaPodcastDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {

    

    constructor(data? : KalturaPodcastDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPodcastDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPodcastDistributionProfileBaseFilter'] = KalturaPodcastDistributionProfileBaseFilter;