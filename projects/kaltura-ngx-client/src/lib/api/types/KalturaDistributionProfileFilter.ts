
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfileBaseFilter, KalturaDistributionProfileBaseFilterArgs } from './KalturaDistributionProfileBaseFilter';

export interface KalturaDistributionProfileFilterArgs  extends KalturaDistributionProfileBaseFilterArgs {
    
}


export class KalturaDistributionProfileFilter extends KalturaDistributionProfileBaseFilter {

    

    constructor(data? : KalturaDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionProfileFilter'] = KalturaDistributionProfileFilter;