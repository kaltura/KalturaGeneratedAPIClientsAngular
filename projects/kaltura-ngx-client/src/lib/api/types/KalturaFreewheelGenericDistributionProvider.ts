
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaFreewheelGenericDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaFreewheelGenericDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaFreewheelGenericDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelGenericDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFreewheelGenericDistributionProvider'] = KalturaFreewheelGenericDistributionProvider;