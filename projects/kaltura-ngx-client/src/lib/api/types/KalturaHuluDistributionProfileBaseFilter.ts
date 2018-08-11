
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';

export interface KalturaHuluDistributionProfileBaseFilterArgs  extends KalturaConfigurableDistributionProfileFilterArgs {
    
}


export class KalturaHuluDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {

    

    constructor(data? : KalturaHuluDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHuluDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHuluDistributionProfileBaseFilter'] = KalturaHuluDistributionProfileBaseFilter;