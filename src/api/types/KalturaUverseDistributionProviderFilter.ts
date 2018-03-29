
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUverseDistributionProviderBaseFilter, KalturaUverseDistributionProviderBaseFilterArgs } from './KalturaUverseDistributionProviderBaseFilter';

export interface KalturaUverseDistributionProviderFilterArgs  extends KalturaUverseDistributionProviderBaseFilterArgs {
    
}


export class KalturaUverseDistributionProviderFilter extends KalturaUverseDistributionProviderBaseFilter {

    

    constructor(data? : KalturaUverseDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseDistributionProviderFilter',KalturaUverseDistributionProviderFilter);
