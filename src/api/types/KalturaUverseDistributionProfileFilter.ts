
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUverseDistributionProfileBaseFilter, KalturaUverseDistributionProfileBaseFilterArgs } from './KalturaUverseDistributionProfileBaseFilter';

export interface KalturaUverseDistributionProfileFilterArgs  extends KalturaUverseDistributionProfileBaseFilterArgs {
    
}


export class KalturaUverseDistributionProfileFilter extends KalturaUverseDistributionProfileBaseFilter {

    

    constructor(data? : KalturaUverseDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseDistributionProfileFilter',KalturaUverseDistributionProfileFilter);
