
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';

export interface KalturaSyndicationDistributionProfileBaseFilterArgs  extends KalturaDistributionProfileFilterArgs {
    
}


export class KalturaSyndicationDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {

    

    constructor(data? : KalturaSyndicationDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSyndicationDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSyndicationDistributionProfileBaseFilter'] = KalturaSyndicationDistributionProfileBaseFilter;