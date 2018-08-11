
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaYahooDistributionProfileBaseFilter, KalturaYahooDistributionProfileBaseFilterArgs } from './KalturaYahooDistributionProfileBaseFilter';

export interface KalturaYahooDistributionProfileFilterArgs  extends KalturaYahooDistributionProfileBaseFilterArgs {
    
}


export class KalturaYahooDistributionProfileFilter extends KalturaYahooDistributionProfileBaseFilter {

    

    constructor(data? : KalturaYahooDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaYahooDistributionProfileFilter'] = KalturaYahooDistributionProfileFilter;