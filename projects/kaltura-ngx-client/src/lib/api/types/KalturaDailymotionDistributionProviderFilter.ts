
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDailymotionDistributionProviderBaseFilter, KalturaDailymotionDistributionProviderBaseFilterArgs } from './KalturaDailymotionDistributionProviderBaseFilter';

export interface KalturaDailymotionDistributionProviderFilterArgs  extends KalturaDailymotionDistributionProviderBaseFilterArgs {
    
}


export class KalturaDailymotionDistributionProviderFilter extends KalturaDailymotionDistributionProviderBaseFilter {

    

    constructor(data? : KalturaDailymotionDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDailymotionDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDailymotionDistributionProviderFilter'] = KalturaDailymotionDistributionProviderFilter;