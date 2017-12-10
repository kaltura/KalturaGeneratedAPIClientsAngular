
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAvnDistributionProviderBaseFilter, KalturaAvnDistributionProviderBaseFilterArgs } from './KalturaAvnDistributionProviderBaseFilter';

export interface KalturaAvnDistributionProviderFilterArgs  extends KalturaAvnDistributionProviderBaseFilterArgs {
    
}


export class KalturaAvnDistributionProviderFilter extends KalturaAvnDistributionProviderBaseFilter {

    

    constructor(data? : KalturaAvnDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAvnDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAvnDistributionProviderFilter',KalturaAvnDistributionProviderFilter);
