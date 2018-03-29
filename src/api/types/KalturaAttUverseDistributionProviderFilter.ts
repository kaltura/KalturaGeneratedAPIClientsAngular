
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttUverseDistributionProviderBaseFilter, KalturaAttUverseDistributionProviderBaseFilterArgs } from './KalturaAttUverseDistributionProviderBaseFilter';

export interface KalturaAttUverseDistributionProviderFilterArgs  extends KalturaAttUverseDistributionProviderBaseFilterArgs {
    
}


export class KalturaAttUverseDistributionProviderFilter extends KalturaAttUverseDistributionProviderBaseFilter {

    

    constructor(data? : KalturaAttUverseDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttUverseDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttUverseDistributionProviderFilter',KalturaAttUverseDistributionProviderFilter);
