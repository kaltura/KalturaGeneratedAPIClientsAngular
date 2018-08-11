
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaComcastMrssDistributionProviderBaseFilter, KalturaComcastMrssDistributionProviderBaseFilterArgs } from './KalturaComcastMrssDistributionProviderBaseFilter';

export interface KalturaComcastMrssDistributionProviderFilterArgs  extends KalturaComcastMrssDistributionProviderBaseFilterArgs {
    
}


export class KalturaComcastMrssDistributionProviderFilter extends KalturaComcastMrssDistributionProviderBaseFilter {

    

    constructor(data? : KalturaComcastMrssDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaComcastMrssDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaComcastMrssDistributionProviderFilter'] = KalturaComcastMrssDistributionProviderFilter;