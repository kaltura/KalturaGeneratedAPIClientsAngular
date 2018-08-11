
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFreewheelGenericDistributionProviderBaseFilter, KalturaFreewheelGenericDistributionProviderBaseFilterArgs } from './KalturaFreewheelGenericDistributionProviderBaseFilter';

export interface KalturaFreewheelGenericDistributionProviderFilterArgs  extends KalturaFreewheelGenericDistributionProviderBaseFilterArgs {
    
}


export class KalturaFreewheelGenericDistributionProviderFilter extends KalturaFreewheelGenericDistributionProviderBaseFilter {

    

    constructor(data? : KalturaFreewheelGenericDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelGenericDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFreewheelGenericDistributionProviderFilter'] = KalturaFreewheelGenericDistributionProviderFilter;