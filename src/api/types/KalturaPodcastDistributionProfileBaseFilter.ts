
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';

export interface KalturaPodcastDistributionProfileBaseFilterArgs  extends KalturaDistributionProfileFilterArgs {
    
}


export class KalturaPodcastDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {

    

    constructor(data? : KalturaPodcastDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPodcastDistributionProfileBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPodcastDistributionProfileBaseFilter',KalturaPodcastDistributionProfileBaseFilter);
