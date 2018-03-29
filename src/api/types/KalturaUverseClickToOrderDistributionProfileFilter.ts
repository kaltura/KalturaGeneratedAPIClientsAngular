
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUverseClickToOrderDistributionProfileBaseFilter, KalturaUverseClickToOrderDistributionProfileBaseFilterArgs } from './KalturaUverseClickToOrderDistributionProfileBaseFilter';

export interface KalturaUverseClickToOrderDistributionProfileFilterArgs  extends KalturaUverseClickToOrderDistributionProfileBaseFilterArgs {
    
}


export class KalturaUverseClickToOrderDistributionProfileFilter extends KalturaUverseClickToOrderDistributionProfileBaseFilter {

    

    constructor(data? : KalturaUverseClickToOrderDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseClickToOrderDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseClickToOrderDistributionProfileFilter',KalturaUverseClickToOrderDistributionProfileFilter);
