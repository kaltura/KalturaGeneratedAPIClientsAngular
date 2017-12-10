
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaYoutubeApiDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaYoutubeApiDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaYoutubeApiDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYoutubeApiDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYoutubeApiDistributionProvider',KalturaYoutubeApiDistributionProvider);
