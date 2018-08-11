
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';

export interface KalturaFacebookDistributionProfileBaseFilterArgs  extends KalturaConfigurableDistributionProfileFilterArgs {
    
}


export class KalturaFacebookDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {

    

    constructor(data? : KalturaFacebookDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFacebookDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFacebookDistributionProfileBaseFilter'] = KalturaFacebookDistributionProfileBaseFilter;