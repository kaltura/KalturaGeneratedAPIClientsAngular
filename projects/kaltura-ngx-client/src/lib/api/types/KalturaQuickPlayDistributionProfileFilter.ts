
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaQuickPlayDistributionProfileBaseFilter, KalturaQuickPlayDistributionProfileBaseFilterArgs } from './KalturaQuickPlayDistributionProfileBaseFilter';

export interface KalturaQuickPlayDistributionProfileFilterArgs  extends KalturaQuickPlayDistributionProfileBaseFilterArgs {
    
}


export class KalturaQuickPlayDistributionProfileFilter extends KalturaQuickPlayDistributionProfileBaseFilter {

    

    constructor(data? : KalturaQuickPlayDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuickPlayDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuickPlayDistributionProfileFilter'] = KalturaQuickPlayDistributionProfileFilter;