
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYoutubeApiDistributionProviderBaseFilter, KalturaYoutubeApiDistributionProviderBaseFilterArgs } from './KalturaYoutubeApiDistributionProviderBaseFilter';

export interface KalturaYoutubeApiDistributionProviderFilterArgs  extends KalturaYoutubeApiDistributionProviderBaseFilterArgs {
    
}


export class KalturaYoutubeApiDistributionProviderFilter extends KalturaYoutubeApiDistributionProviderBaseFilter {

    

    constructor(data? : KalturaYoutubeApiDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYoutubeApiDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYoutubeApiDistributionProviderFilter',KalturaYoutubeApiDistributionProviderFilter);
