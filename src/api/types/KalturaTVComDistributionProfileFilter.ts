
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTVComDistributionProfileBaseFilter, KalturaTVComDistributionProfileBaseFilterArgs } from './KalturaTVComDistributionProfileBaseFilter';

export interface KalturaTVComDistributionProfileFilterArgs  extends KalturaTVComDistributionProfileBaseFilterArgs {
    
}


export class KalturaTVComDistributionProfileFilter extends KalturaTVComDistributionProfileBaseFilter {

    

    constructor(data? : KalturaTVComDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTVComDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTVComDistributionProfileFilter',KalturaTVComDistributionProfileFilter);
