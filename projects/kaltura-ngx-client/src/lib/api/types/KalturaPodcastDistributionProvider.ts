
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaPodcastDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaPodcastDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaPodcastDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPodcastDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPodcastDistributionProvider'] = KalturaPodcastDistributionProvider;