
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaAvnDistributionProfileFilter'] = KalturaAvnDistributionProfileFilter;