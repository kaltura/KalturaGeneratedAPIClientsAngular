
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFtpDistributionProfileBaseFilter, KalturaFtpDistributionProfileBaseFilterArgs } from './KalturaFtpDistributionProfileBaseFilter';

export interface KalturaFtpDistributionProfileFilterArgs  extends KalturaFtpDistributionProfileBaseFilterArgs {
    
}


export class KalturaFtpDistributionProfileFilter extends KalturaFtpDistributionProfileBaseFilter {

    

    constructor(data? : KalturaFtpDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFtpDistributionProfileFilter'] = KalturaFtpDistributionProfileFilter;