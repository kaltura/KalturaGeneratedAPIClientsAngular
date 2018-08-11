
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetroPcsDistributionProfileBaseFilter, KalturaMetroPcsDistributionProfileBaseFilterArgs } from './KalturaMetroPcsDistributionProfileBaseFilter';

export interface KalturaMetroPcsDistributionProfileFilterArgs  extends KalturaMetroPcsDistributionProfileBaseFilterArgs {
    
}


export class KalturaMetroPcsDistributionProfileFilter extends KalturaMetroPcsDistributionProfileBaseFilter {

    

    constructor(data? : KalturaMetroPcsDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetroPcsDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMetroPcsDistributionProfileFilter'] = KalturaMetroPcsDistributionProfileFilter;