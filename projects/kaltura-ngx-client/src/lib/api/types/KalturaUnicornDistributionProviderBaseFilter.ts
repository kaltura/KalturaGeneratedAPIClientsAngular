
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';

export interface KalturaUnicornDistributionProviderBaseFilterArgs  extends KalturaDistributionProviderFilterArgs {
    
}


export class KalturaUnicornDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {

    

    constructor(data? : KalturaUnicornDistributionProviderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnicornDistributionProviderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUnicornDistributionProviderBaseFilter'] = KalturaUnicornDistributionProviderBaseFilter;