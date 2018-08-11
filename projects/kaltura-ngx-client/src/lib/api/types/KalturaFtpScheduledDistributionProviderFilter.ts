
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFtpScheduledDistributionProviderBaseFilter, KalturaFtpScheduledDistributionProviderBaseFilterArgs } from './KalturaFtpScheduledDistributionProviderBaseFilter';

export interface KalturaFtpScheduledDistributionProviderFilterArgs  extends KalturaFtpScheduledDistributionProviderBaseFilterArgs {
    
}


export class KalturaFtpScheduledDistributionProviderFilter extends KalturaFtpScheduledDistributionProviderBaseFilter {

    

    constructor(data? : KalturaFtpScheduledDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpScheduledDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFtpScheduledDistributionProviderFilter'] = KalturaFtpScheduledDistributionProviderFilter;