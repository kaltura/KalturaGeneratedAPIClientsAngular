
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUnicornDistributionProviderBaseFilter, KalturaUnicornDistributionProviderBaseFilterArgs } from './KalturaUnicornDistributionProviderBaseFilter';

export interface KalturaUnicornDistributionProviderFilterArgs  extends KalturaUnicornDistributionProviderBaseFilterArgs {
    
}


export class KalturaUnicornDistributionProviderFilter extends KalturaUnicornDistributionProviderBaseFilter {

    

    constructor(data? : KalturaUnicornDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnicornDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUnicornDistributionProviderFilter',KalturaUnicornDistributionProviderFilter);
