
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYouTubeDistributionProfileBaseFilter, KalturaYouTubeDistributionProfileBaseFilterArgs } from './KalturaYouTubeDistributionProfileBaseFilter';

export interface KalturaYouTubeDistributionProfileFilterArgs  extends KalturaYouTubeDistributionProfileBaseFilterArgs {
    
}


export class KalturaYouTubeDistributionProfileFilter extends KalturaYouTubeDistributionProfileBaseFilter {

    

    constructor(data? : KalturaYouTubeDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYouTubeDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYouTubeDistributionProfileFilter',KalturaYouTubeDistributionProfileFilter);
