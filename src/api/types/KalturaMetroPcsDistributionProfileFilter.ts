
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaMetroPcsDistributionProfileFilter',KalturaMetroPcsDistributionProfileFilter);
