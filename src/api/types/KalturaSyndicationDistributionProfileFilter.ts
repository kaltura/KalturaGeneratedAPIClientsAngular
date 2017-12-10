
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSyndicationDistributionProfileBaseFilter, KalturaSyndicationDistributionProfileBaseFilterArgs } from './KalturaSyndicationDistributionProfileBaseFilter';

export interface KalturaSyndicationDistributionProfileFilterArgs  extends KalturaSyndicationDistributionProfileBaseFilterArgs {
    
}


export class KalturaSyndicationDistributionProfileFilter extends KalturaSyndicationDistributionProfileBaseFilter {

    

    constructor(data? : KalturaSyndicationDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSyndicationDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSyndicationDistributionProfileFilter',KalturaSyndicationDistributionProfileFilter);
