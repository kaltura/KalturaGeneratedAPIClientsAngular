
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaYahooDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaYahooDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaYahooDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaYahooDistributionProvider'] = KalturaYahooDistributionProvider;