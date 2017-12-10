
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFreewheelGenericDistributionProfileBaseFilter, KalturaFreewheelGenericDistributionProfileBaseFilterArgs } from './KalturaFreewheelGenericDistributionProfileBaseFilter';

export interface KalturaFreewheelGenericDistributionProfileFilterArgs  extends KalturaFreewheelGenericDistributionProfileBaseFilterArgs {
    
}


export class KalturaFreewheelGenericDistributionProfileFilter extends KalturaFreewheelGenericDistributionProfileBaseFilter {

    

    constructor(data? : KalturaFreewheelGenericDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelGenericDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelGenericDistributionProfileFilter',KalturaFreewheelGenericDistributionProfileFilter);
