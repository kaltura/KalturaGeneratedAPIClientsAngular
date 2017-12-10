
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaFtpScheduledDistributionProviderBaseFilter',KalturaFtpScheduledDistributionProviderBaseFilter);
