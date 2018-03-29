
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTimeWarnerDistributionProviderBaseFilter, KalturaTimeWarnerDistributionProviderBaseFilterArgs } from './KalturaTimeWarnerDistributionProviderBaseFilter';

export interface KalturaTimeWarnerDistributionProviderFilterArgs  extends KalturaTimeWarnerDistributionProviderBaseFilterArgs {
    
}


export class KalturaTimeWarnerDistributionProviderFilter extends KalturaTimeWarnerDistributionProviderBaseFilter {

    

    constructor(data? : KalturaTimeWarnerDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimeWarnerDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTimeWarnerDistributionProviderFilter',KalturaTimeWarnerDistributionProviderFilter);
