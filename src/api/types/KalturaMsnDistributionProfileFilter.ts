
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMsnDistributionProfileBaseFilter, KalturaMsnDistributionProfileBaseFilterArgs } from './KalturaMsnDistributionProfileBaseFilter';

export interface KalturaMsnDistributionProfileFilterArgs  extends KalturaMsnDistributionProfileBaseFilterArgs {
    
}


export class KalturaMsnDistributionProfileFilter extends KalturaMsnDistributionProfileBaseFilter {

    

    constructor(data? : KalturaMsnDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMsnDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMsnDistributionProfileFilter',KalturaMsnDistributionProfileFilter);
