
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTvinciDistributionProfileBaseFilter, KalturaTvinciDistributionProfileBaseFilterArgs } from './KalturaTvinciDistributionProfileBaseFilter';

export interface KalturaTvinciDistributionProfileFilterArgs  extends KalturaTvinciDistributionProfileBaseFilterArgs {
    
}


export class KalturaTvinciDistributionProfileFilter extends KalturaTvinciDistributionProfileBaseFilter {

    

    constructor(data? : KalturaTvinciDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvinciDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvinciDistributionProfileFilter',KalturaTvinciDistributionProfileFilter);
