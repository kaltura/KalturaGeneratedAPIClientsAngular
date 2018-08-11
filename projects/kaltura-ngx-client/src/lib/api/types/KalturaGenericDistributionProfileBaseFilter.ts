
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';

export interface KalturaGenericDistributionProfileBaseFilterArgs  extends KalturaDistributionProfileFilterArgs {
    
}


export class KalturaGenericDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {

    

    constructor(data? : KalturaGenericDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericDistributionProfileBaseFilter'] = KalturaGenericDistributionProfileBaseFilter;