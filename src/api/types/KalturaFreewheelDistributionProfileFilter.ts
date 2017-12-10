
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFreewheelDistributionProfileBaseFilter, KalturaFreewheelDistributionProfileBaseFilterArgs } from './KalturaFreewheelDistributionProfileBaseFilter';

export interface KalturaFreewheelDistributionProfileFilterArgs  extends KalturaFreewheelDistributionProfileBaseFilterArgs {
    
}


export class KalturaFreewheelDistributionProfileFilter extends KalturaFreewheelDistributionProfileBaseFilter {

    

    constructor(data? : KalturaFreewheelDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelDistributionProfileFilter',KalturaFreewheelDistributionProfileFilter);
