
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaQuickPlayDistributionProviderBaseFilter, KalturaQuickPlayDistributionProviderBaseFilterArgs } from './KalturaQuickPlayDistributionProviderBaseFilter';

export interface KalturaQuickPlayDistributionProviderFilterArgs  extends KalturaQuickPlayDistributionProviderBaseFilterArgs {
    
}


export class KalturaQuickPlayDistributionProviderFilter extends KalturaQuickPlayDistributionProviderBaseFilter {

    

    constructor(data? : KalturaQuickPlayDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuickPlayDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuickPlayDistributionProviderFilter'] = KalturaQuickPlayDistributionProviderFilter;