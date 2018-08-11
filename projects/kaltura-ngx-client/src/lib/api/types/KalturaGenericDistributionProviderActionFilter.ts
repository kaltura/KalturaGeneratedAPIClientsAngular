
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderActionBaseFilter, KalturaGenericDistributionProviderActionBaseFilterArgs } from './KalturaGenericDistributionProviderActionBaseFilter';

export interface KalturaGenericDistributionProviderActionFilterArgs  extends KalturaGenericDistributionProviderActionBaseFilterArgs {
    
}


export class KalturaGenericDistributionProviderActionFilter extends KalturaGenericDistributionProviderActionBaseFilter {

    

    constructor(data? : KalturaGenericDistributionProviderActionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProviderActionFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericDistributionProviderActionFilter'] = KalturaGenericDistributionProviderActionFilter;