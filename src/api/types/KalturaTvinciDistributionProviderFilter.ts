
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTvinciDistributionProviderBaseFilter, KalturaTvinciDistributionProviderBaseFilterArgs } from './KalturaTvinciDistributionProviderBaseFilter';

export interface KalturaTvinciDistributionProviderFilterArgs  extends KalturaTvinciDistributionProviderBaseFilterArgs {
    
}


export class KalturaTvinciDistributionProviderFilter extends KalturaTvinciDistributionProviderBaseFilter {

    

    constructor(data? : KalturaTvinciDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvinciDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvinciDistributionProviderFilter',KalturaTvinciDistributionProviderFilter);
