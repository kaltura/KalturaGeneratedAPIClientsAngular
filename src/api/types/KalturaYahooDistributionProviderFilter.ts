
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYahooDistributionProviderBaseFilter, KalturaYahooDistributionProviderBaseFilterArgs } from './KalturaYahooDistributionProviderBaseFilter';

export interface KalturaYahooDistributionProviderFilterArgs  extends KalturaYahooDistributionProviderBaseFilterArgs {
    
}


export class KalturaYahooDistributionProviderFilter extends KalturaYahooDistributionProviderBaseFilter {

    

    constructor(data? : KalturaYahooDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYahooDistributionProviderFilter',KalturaYahooDistributionProviderFilter);
