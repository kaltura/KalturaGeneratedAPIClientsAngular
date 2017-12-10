
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaYouTubeDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaYouTubeDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaYouTubeDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYouTubeDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYouTubeDistributionProvider',KalturaYouTubeDistributionProvider);
