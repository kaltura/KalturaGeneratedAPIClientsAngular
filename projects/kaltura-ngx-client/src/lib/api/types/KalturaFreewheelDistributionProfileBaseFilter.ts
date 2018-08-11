
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';

export interface KalturaFreewheelDistributionProfileBaseFilterArgs  extends KalturaDistributionProfileFilterArgs {
    
}


export class KalturaFreewheelDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {

    

    constructor(data? : KalturaFreewheelDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFreewheelDistributionProfileBaseFilter'] = KalturaFreewheelDistributionProfileBaseFilter;