
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';

export interface KalturaFreewheelDistributionProviderBaseFilterArgs  extends KalturaDistributionProviderFilterArgs {
    
}


export class KalturaFreewheelDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {

    

    constructor(data? : KalturaFreewheelDistributionProviderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelDistributionProviderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFreewheelDistributionProviderBaseFilter'] = KalturaFreewheelDistributionProviderBaseFilter;