
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';

export interface KalturaIdeticDistributionProviderBaseFilterArgs  extends KalturaDistributionProviderFilterArgs {
    
}


export class KalturaIdeticDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {

    

    constructor(data? : KalturaIdeticDistributionProviderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIdeticDistributionProviderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIdeticDistributionProviderBaseFilter'] = KalturaIdeticDistributionProviderBaseFilter;