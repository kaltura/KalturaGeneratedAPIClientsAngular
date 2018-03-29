
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaPushToNewsDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaPushToNewsDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaPushToNewsDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushToNewsDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPushToNewsDistributionProvider',KalturaPushToNewsDistributionProvider);
