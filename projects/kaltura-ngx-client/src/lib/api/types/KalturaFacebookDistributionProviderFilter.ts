
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFacebookDistributionProviderBaseFilter, KalturaFacebookDistributionProviderBaseFilterArgs } from './KalturaFacebookDistributionProviderBaseFilter';

export interface KalturaFacebookDistributionProviderFilterArgs  extends KalturaFacebookDistributionProviderBaseFilterArgs {
    
}


export class KalturaFacebookDistributionProviderFilter extends KalturaFacebookDistributionProviderBaseFilter {

    

    constructor(data? : KalturaFacebookDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFacebookDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFacebookDistributionProviderFilter'] = KalturaFacebookDistributionProviderFilter;