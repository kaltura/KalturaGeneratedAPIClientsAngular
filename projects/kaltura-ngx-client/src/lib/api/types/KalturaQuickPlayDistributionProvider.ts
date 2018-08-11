
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaQuickPlayDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaQuickPlayDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaQuickPlayDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuickPlayDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuickPlayDistributionProvider'] = KalturaQuickPlayDistributionProvider;