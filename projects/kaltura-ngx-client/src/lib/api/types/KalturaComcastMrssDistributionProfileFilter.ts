
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaComcastMrssDistributionProfileBaseFilter, KalturaComcastMrssDistributionProfileBaseFilterArgs } from './KalturaComcastMrssDistributionProfileBaseFilter';

export interface KalturaComcastMrssDistributionProfileFilterArgs  extends KalturaComcastMrssDistributionProfileBaseFilterArgs {
    
}


export class KalturaComcastMrssDistributionProfileFilter extends KalturaComcastMrssDistributionProfileBaseFilter {

    

    constructor(data? : KalturaComcastMrssDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaComcastMrssDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaComcastMrssDistributionProfileFilter'] = KalturaComcastMrssDistributionProfileFilter;