
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYoutubeApiDistributionProfileBaseFilter, KalturaYoutubeApiDistributionProfileBaseFilterArgs } from './KalturaYoutubeApiDistributionProfileBaseFilter';

export interface KalturaYoutubeApiDistributionProfileFilterArgs  extends KalturaYoutubeApiDistributionProfileBaseFilterArgs {
    
}


export class KalturaYoutubeApiDistributionProfileFilter extends KalturaYoutubeApiDistributionProfileBaseFilter {

    

    constructor(data? : KalturaYoutubeApiDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYoutubeApiDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYoutubeApiDistributionProfileFilter',KalturaYoutubeApiDistributionProfileFilter);
