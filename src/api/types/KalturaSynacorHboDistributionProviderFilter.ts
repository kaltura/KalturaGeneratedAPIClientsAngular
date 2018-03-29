
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSynacorHboDistributionProviderBaseFilter, KalturaSynacorHboDistributionProviderBaseFilterArgs } from './KalturaSynacorHboDistributionProviderBaseFilter';

export interface KalturaSynacorHboDistributionProviderFilterArgs  extends KalturaSynacorHboDistributionProviderBaseFilterArgs {
    
}


export class KalturaSynacorHboDistributionProviderFilter extends KalturaSynacorHboDistributionProviderBaseFilter {

    

    constructor(data? : KalturaSynacorHboDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSynacorHboDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSynacorHboDistributionProviderFilter',KalturaSynacorHboDistributionProviderFilter);
