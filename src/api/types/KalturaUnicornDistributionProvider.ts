
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaUnicornDistributionProvider',KalturaUnicornDistributionProvider);
