
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaMetroPcsDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaMetroPcsDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaMetroPcsDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetroPcsDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMetroPcsDistributionProvider'] = KalturaMetroPcsDistributionProvider;