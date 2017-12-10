
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYouTubeDistributionProviderBaseFilter, KalturaYouTubeDistributionProviderBaseFilterArgs } from './KalturaYouTubeDistributionProviderBaseFilter';

export interface KalturaYouTubeDistributionProviderFilterArgs  extends KalturaYouTubeDistributionProviderBaseFilterArgs {
    
}


export class KalturaYouTubeDistributionProviderFilter extends KalturaYouTubeDistributionProviderBaseFilter {

    

    constructor(data? : KalturaYouTubeDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYouTubeDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYouTubeDistributionProviderFilter',KalturaYouTubeDistributionProviderFilter);
