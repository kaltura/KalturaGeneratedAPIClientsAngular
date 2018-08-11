
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaIdeticDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaIdeticDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaIdeticDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIdeticDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIdeticDistributionProvider'] = KalturaIdeticDistributionProvider;