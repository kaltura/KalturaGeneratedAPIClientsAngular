
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUverseClickToOrderDistributionProviderBaseFilter, KalturaUverseClickToOrderDistributionProviderBaseFilterArgs } from './KalturaUverseClickToOrderDistributionProviderBaseFilter';

export interface KalturaUverseClickToOrderDistributionProviderFilterArgs  extends KalturaUverseClickToOrderDistributionProviderBaseFilterArgs {
    
}


export class KalturaUverseClickToOrderDistributionProviderFilter extends KalturaUverseClickToOrderDistributionProviderBaseFilter {

    

    constructor(data? : KalturaUverseClickToOrderDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseClickToOrderDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseClickToOrderDistributionProviderFilter',KalturaUverseClickToOrderDistributionProviderFilter);
