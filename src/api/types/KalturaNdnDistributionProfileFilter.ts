
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNdnDistributionProfileBaseFilter, KalturaNdnDistributionProfileBaseFilterArgs } from './KalturaNdnDistributionProfileBaseFilter';

export interface KalturaNdnDistributionProfileFilterArgs  extends KalturaNdnDistributionProfileBaseFilterArgs {
    
}


export class KalturaNdnDistributionProfileFilter extends KalturaNdnDistributionProfileBaseFilter {

    

    constructor(data? : KalturaNdnDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNdnDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNdnDistributionProfileFilter',KalturaNdnDistributionProfileFilter);
