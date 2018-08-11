
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUnicornDistributionProfileBaseFilter, KalturaUnicornDistributionProfileBaseFilterArgs } from './KalturaUnicornDistributionProfileBaseFilter';

export interface KalturaUnicornDistributionProfileFilterArgs  extends KalturaUnicornDistributionProfileBaseFilterArgs {
    
}


export class KalturaUnicornDistributionProfileFilter extends KalturaUnicornDistributionProfileBaseFilter {

    

    constructor(data? : KalturaUnicornDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnicornDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUnicornDistributionProfileFilter'] = KalturaUnicornDistributionProfileFilter;