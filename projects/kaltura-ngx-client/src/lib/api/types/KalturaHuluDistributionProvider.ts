
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaHuluDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaHuluDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaHuluDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHuluDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHuluDistributionProvider'] = KalturaHuluDistributionProvider;