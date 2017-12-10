
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileBaseFilterArgs } from './KalturaConfigurableDistributionProfileBaseFilter';

export interface KalturaConfigurableDistributionProfileFilterArgs  extends KalturaConfigurableDistributionProfileBaseFilterArgs {
    
}


export class KalturaConfigurableDistributionProfileFilter extends KalturaConfigurableDistributionProfileBaseFilter {

    

    constructor(data? : KalturaConfigurableDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurableDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurableDistributionProfileFilter',KalturaConfigurableDistributionProfileFilter);
