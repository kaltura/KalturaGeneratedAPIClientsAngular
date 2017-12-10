
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaMsnDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaMsnDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaMsnDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMsnDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMsnDistributionProvider',KalturaMsnDistributionProvider);
