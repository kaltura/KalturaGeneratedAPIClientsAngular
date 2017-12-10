
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaFtpDistributionProfileFilter',KalturaFtpDistributionProfileFilter);
