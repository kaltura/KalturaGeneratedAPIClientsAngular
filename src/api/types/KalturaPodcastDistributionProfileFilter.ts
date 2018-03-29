
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPodcastDistributionProfileBaseFilter, KalturaPodcastDistributionProfileBaseFilterArgs } from './KalturaPodcastDistributionProfileBaseFilter';

export interface KalturaPodcastDistributionProfileFilterArgs  extends KalturaPodcastDistributionProfileBaseFilterArgs {
    
}


export class KalturaPodcastDistributionProfileFilter extends KalturaPodcastDistributionProfileBaseFilter {

    

    constructor(data? : KalturaPodcastDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPodcastDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPodcastDistributionProfileFilter',KalturaPodcastDistributionProfileFilter);
