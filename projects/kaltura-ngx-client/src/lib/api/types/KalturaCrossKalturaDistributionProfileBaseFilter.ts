
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';

export interface KalturaCrossKalturaDistributionProfileBaseFilterArgs  extends KalturaConfigurableDistributionProfileFilterArgs {
    
}


export class KalturaCrossKalturaDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {

    

    constructor(data? : KalturaCrossKalturaDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrossKalturaDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCrossKalturaDistributionProfileBaseFilter'] = KalturaCrossKalturaDistributionProfileBaseFilter;