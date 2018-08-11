
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaFreewheelDistributionProfileFilter'] = KalturaFreewheelDistributionProfileFilter;