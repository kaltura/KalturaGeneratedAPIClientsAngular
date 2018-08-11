
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaDailymotionDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaDailymotionDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaDailymotionDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDailymotionDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDailymotionDistributionProvider'] = KalturaDailymotionDistributionProvider;