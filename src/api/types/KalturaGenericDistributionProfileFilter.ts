
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenericDistributionProfileBaseFilter, KalturaGenericDistributionProfileBaseFilterArgs } from './KalturaGenericDistributionProfileBaseFilter';

export interface KalturaGenericDistributionProfileFilterArgs  extends KalturaGenericDistributionProfileBaseFilterArgs {
    
}


export class KalturaGenericDistributionProfileFilter extends KalturaGenericDistributionProfileBaseFilter {

    

    constructor(data? : KalturaGenericDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionProfileFilter',KalturaGenericDistributionProfileFilter);
