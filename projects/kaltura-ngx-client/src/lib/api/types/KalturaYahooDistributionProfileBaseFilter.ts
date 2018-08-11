
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';

export interface KalturaYahooDistributionProfileBaseFilterArgs  extends KalturaConfigurableDistributionProfileFilterArgs {
    
}


export class KalturaYahooDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {

    

    constructor(data? : KalturaYahooDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaYahooDistributionProfileBaseFilter'] = KalturaYahooDistributionProfileBaseFilter;