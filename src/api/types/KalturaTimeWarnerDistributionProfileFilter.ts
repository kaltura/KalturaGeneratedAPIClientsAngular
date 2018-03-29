
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTimeWarnerDistributionProfileBaseFilter, KalturaTimeWarnerDistributionProfileBaseFilterArgs } from './KalturaTimeWarnerDistributionProfileBaseFilter';

export interface KalturaTimeWarnerDistributionProfileFilterArgs  extends KalturaTimeWarnerDistributionProfileBaseFilterArgs {
    
}


export class KalturaTimeWarnerDistributionProfileFilter extends KalturaTimeWarnerDistributionProfileBaseFilter {

    

    constructor(data? : KalturaTimeWarnerDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimeWarnerDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTimeWarnerDistributionProfileFilter',KalturaTimeWarnerDistributionProfileFilter);
