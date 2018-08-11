
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCrossKalturaDistributionProfileBaseFilter, KalturaCrossKalturaDistributionProfileBaseFilterArgs } from './KalturaCrossKalturaDistributionProfileBaseFilter';

export interface KalturaCrossKalturaDistributionProfileFilterArgs  extends KalturaCrossKalturaDistributionProfileBaseFilterArgs {
    
}


export class KalturaCrossKalturaDistributionProfileFilter extends KalturaCrossKalturaDistributionProfileBaseFilter {

    

    constructor(data? : KalturaCrossKalturaDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrossKalturaDistributionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCrossKalturaDistributionProfileFilter'] = KalturaCrossKalturaDistributionProfileFilter;