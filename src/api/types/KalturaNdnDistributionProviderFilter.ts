
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNdnDistributionProviderBaseFilter, KalturaNdnDistributionProviderBaseFilterArgs } from './KalturaNdnDistributionProviderBaseFilter';

export interface KalturaNdnDistributionProviderFilterArgs  extends KalturaNdnDistributionProviderBaseFilterArgs {
    
}


export class KalturaNdnDistributionProviderFilter extends KalturaNdnDistributionProviderBaseFilter {

    

    constructor(data? : KalturaNdnDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNdnDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNdnDistributionProviderFilter',KalturaNdnDistributionProviderFilter);
