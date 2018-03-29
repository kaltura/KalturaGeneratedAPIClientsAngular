
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSyndicationDistributionProviderBaseFilter, KalturaSyndicationDistributionProviderBaseFilterArgs } from './KalturaSyndicationDistributionProviderBaseFilter';

export interface KalturaSyndicationDistributionProviderFilterArgs  extends KalturaSyndicationDistributionProviderBaseFilterArgs {
    
}


export class KalturaSyndicationDistributionProviderFilter extends KalturaSyndicationDistributionProviderBaseFilter {

    

    constructor(data? : KalturaSyndicationDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSyndicationDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSyndicationDistributionProviderFilter',KalturaSyndicationDistributionProviderFilter);
