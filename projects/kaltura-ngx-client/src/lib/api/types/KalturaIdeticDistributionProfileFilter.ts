
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaIdeticDistributionProfileBaseFilter, KalturaIdeticDistributionProfileBaseFilterArgs } from './KalturaIdeticDistributionProfileBaseFilter';

export interface KalturaIdeticDistributionProfileFilterArgs  extends KalturaIdeticDistributionProfileBaseFilterArgs {
    
}


export class KalturaIdeticDistributionProfileFilter extends KalturaIdeticDistributionProfileBaseFilter {

    

    constructor(data? : KalturaIdeticDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIdeticDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIdeticDistributionProfileFilter'] = KalturaIdeticDistributionProfileFilter;