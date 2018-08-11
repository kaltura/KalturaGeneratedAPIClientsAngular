
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';

export interface KalturaMsnDistributionProfileBaseFilterArgs  extends KalturaConfigurableDistributionProfileFilterArgs {
    
}


export class KalturaMsnDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {

    

    constructor(data? : KalturaMsnDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMsnDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMsnDistributionProfileBaseFilter'] = KalturaMsnDistributionProfileBaseFilter;