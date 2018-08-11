
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMsnDistributionProviderBaseFilter, KalturaMsnDistributionProviderBaseFilterArgs } from './KalturaMsnDistributionProviderBaseFilter';

export interface KalturaMsnDistributionProviderFilterArgs  extends KalturaMsnDistributionProviderBaseFilterArgs {
    
}


export class KalturaMsnDistributionProviderFilter extends KalturaMsnDistributionProviderBaseFilter {

    

    constructor(data? : KalturaMsnDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMsnDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMsnDistributionProviderFilter'] = KalturaMsnDistributionProviderFilter;