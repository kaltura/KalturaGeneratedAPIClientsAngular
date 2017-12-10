
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFacebookDistributionProfileBaseFilter, KalturaFacebookDistributionProfileBaseFilterArgs } from './KalturaFacebookDistributionProfileBaseFilter';

export interface KalturaFacebookDistributionProfileFilterArgs  extends KalturaFacebookDistributionProfileBaseFilterArgs {
    
}


export class KalturaFacebookDistributionProfileFilter extends KalturaFacebookDistributionProfileBaseFilter {

    

    constructor(data? : KalturaFacebookDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFacebookDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFacebookDistributionProfileFilter',KalturaFacebookDistributionProfileFilter);
