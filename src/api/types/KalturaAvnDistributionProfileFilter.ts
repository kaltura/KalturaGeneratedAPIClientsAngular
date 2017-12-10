
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAvnDistributionProfileBaseFilter, KalturaAvnDistributionProfileBaseFilterArgs } from './KalturaAvnDistributionProfileBaseFilter';

export interface KalturaAvnDistributionProfileFilterArgs  extends KalturaAvnDistributionProfileBaseFilterArgs {
    
}


export class KalturaAvnDistributionProfileFilter extends KalturaAvnDistributionProfileBaseFilter {

    

    constructor(data? : KalturaAvnDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAvnDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAvnDistributionProfileFilter',KalturaAvnDistributionProfileFilter);
