
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDoubleClickDistributionProfileBaseFilter, KalturaDoubleClickDistributionProfileBaseFilterArgs } from './KalturaDoubleClickDistributionProfileBaseFilter';

export interface KalturaDoubleClickDistributionProfileFilterArgs  extends KalturaDoubleClickDistributionProfileBaseFilterArgs {
    
}


export class KalturaDoubleClickDistributionProfileFilter extends KalturaDoubleClickDistributionProfileBaseFilter {

    

    constructor(data? : KalturaDoubleClickDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDoubleClickDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDoubleClickDistributionProfileFilter'] = KalturaDoubleClickDistributionProfileFilter;