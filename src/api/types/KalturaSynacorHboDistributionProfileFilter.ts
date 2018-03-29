
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSynacorHboDistributionProfileBaseFilter, KalturaSynacorHboDistributionProfileBaseFilterArgs } from './KalturaSynacorHboDistributionProfileBaseFilter';

export interface KalturaSynacorHboDistributionProfileFilterArgs  extends KalturaSynacorHboDistributionProfileBaseFilterArgs {
    
}


export class KalturaSynacorHboDistributionProfileFilter extends KalturaSynacorHboDistributionProfileBaseFilter {

    

    constructor(data? : KalturaSynacorHboDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSynacorHboDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSynacorHboDistributionProfileFilter',KalturaSynacorHboDistributionProfileFilter);
