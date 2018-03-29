
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTVComDistributionProviderBaseFilter, KalturaTVComDistributionProviderBaseFilterArgs } from './KalturaTVComDistributionProviderBaseFilter';

export interface KalturaTVComDistributionProviderFilterArgs  extends KalturaTVComDistributionProviderBaseFilterArgs {
    
}


export class KalturaTVComDistributionProviderFilter extends KalturaTVComDistributionProviderBaseFilter {

    

    constructor(data? : KalturaTVComDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTVComDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTVComDistributionProviderFilter',KalturaTVComDistributionProviderFilter);
