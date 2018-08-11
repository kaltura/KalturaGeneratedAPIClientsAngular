
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';

export interface KalturaComcastMrssDistributionProviderBaseFilterArgs  extends KalturaDistributionProviderFilterArgs {
    
}


export class KalturaComcastMrssDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {

    

    constructor(data? : KalturaComcastMrssDistributionProviderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaComcastMrssDistributionProviderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaComcastMrssDistributionProviderBaseFilter'] = KalturaComcastMrssDistributionProviderBaseFilter;