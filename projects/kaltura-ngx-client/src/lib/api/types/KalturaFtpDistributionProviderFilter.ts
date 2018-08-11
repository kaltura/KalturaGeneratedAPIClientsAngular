
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFtpDistributionProviderBaseFilter, KalturaFtpDistributionProviderBaseFilterArgs } from './KalturaFtpDistributionProviderBaseFilter';

export interface KalturaFtpDistributionProviderFilterArgs  extends KalturaFtpDistributionProviderBaseFilterArgs {
    
}


export class KalturaFtpDistributionProviderFilter extends KalturaFtpDistributionProviderBaseFilter {

    

    constructor(data? : KalturaFtpDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFtpDistributionProviderFilter'] = KalturaFtpDistributionProviderFilter;