
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaUnicornDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaUnicornDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaUnicornDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnicornDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUnicornDistributionProvider'] = KalturaUnicornDistributionProvider;