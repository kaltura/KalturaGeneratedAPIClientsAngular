
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaFacebookDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaFacebookDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaFacebookDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFacebookDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFacebookDistributionProvider'] = KalturaFacebookDistributionProvider;