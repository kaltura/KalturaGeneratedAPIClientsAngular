
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDailymotionDistributionProfileBaseFilter, KalturaDailymotionDistributionProfileBaseFilterArgs } from './KalturaDailymotionDistributionProfileBaseFilter';

export interface KalturaDailymotionDistributionProfileFilterArgs  extends KalturaDailymotionDistributionProfileBaseFilterArgs {
    
}


export class KalturaDailymotionDistributionProfileFilter extends KalturaDailymotionDistributionProfileBaseFilter {

    

    constructor(data? : KalturaDailymotionDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDailymotionDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDailymotionDistributionProfileFilter',KalturaDailymotionDistributionProfileFilter);
