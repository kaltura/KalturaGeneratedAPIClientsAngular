
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPodcastDistributionProviderBaseFilter, KalturaPodcastDistributionProviderBaseFilterArgs } from './KalturaPodcastDistributionProviderBaseFilter';

export interface KalturaPodcastDistributionProviderFilterArgs  extends KalturaPodcastDistributionProviderBaseFilterArgs {
    
}


export class KalturaPodcastDistributionProviderFilter extends KalturaPodcastDistributionProviderBaseFilter {

    

    constructor(data? : KalturaPodcastDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPodcastDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPodcastDistributionProviderFilter',KalturaPodcastDistributionProviderFilter);
