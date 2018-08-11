
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFtpDistributionProviderFilter, KalturaFtpDistributionProviderFilterArgs } from './KalturaFtpDistributionProviderFilter';

export interface KalturaFtpScheduledDistributionProviderBaseFilterArgs  extends KalturaFtpDistributionProviderFilterArgs {
    
}


export class KalturaFtpScheduledDistributionProviderBaseFilter extends KalturaFtpDistributionProviderFilter {

    

    constructor(data? : KalturaFtpScheduledDistributionProviderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpScheduledDistributionProviderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFtpScheduledDistributionProviderBaseFilter'] = KalturaFtpScheduledDistributionProviderBaseFilter;