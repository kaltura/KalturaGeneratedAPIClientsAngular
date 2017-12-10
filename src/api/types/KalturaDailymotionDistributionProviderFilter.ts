
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaDailymotionDistributionProviderFilter',KalturaDailymotionDistributionProviderFilter);
