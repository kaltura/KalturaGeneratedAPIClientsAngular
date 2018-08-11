
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDoubleClickDistributionProviderBaseFilter, KalturaDoubleClickDistributionProviderBaseFilterArgs } from './KalturaDoubleClickDistributionProviderBaseFilter';

export interface KalturaDoubleClickDistributionProviderFilterArgs  extends KalturaDoubleClickDistributionProviderBaseFilterArgs {
    
}


export class KalturaDoubleClickDistributionProviderFilter extends KalturaDoubleClickDistributionProviderBaseFilter {

    

    constructor(data? : KalturaDoubleClickDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDoubleClickDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDoubleClickDistributionProviderFilter'] = KalturaDoubleClickDistributionProviderFilter;