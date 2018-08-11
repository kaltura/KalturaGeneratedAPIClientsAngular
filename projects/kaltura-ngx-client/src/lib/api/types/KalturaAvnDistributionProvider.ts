
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaAvnDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaAvnDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaAvnDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAvnDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAvnDistributionProvider'] = KalturaAvnDistributionProvider;