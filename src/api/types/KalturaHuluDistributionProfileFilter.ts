
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHuluDistributionProfileBaseFilter, KalturaHuluDistributionProfileBaseFilterArgs } from './KalturaHuluDistributionProfileBaseFilter';

export interface KalturaHuluDistributionProfileFilterArgs  extends KalturaHuluDistributionProfileBaseFilterArgs {
    
}


export class KalturaHuluDistributionProfileFilter extends KalturaHuluDistributionProfileBaseFilter {

    

    constructor(data? : KalturaHuluDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHuluDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHuluDistributionProfileFilter',KalturaHuluDistributionProfileFilter);
