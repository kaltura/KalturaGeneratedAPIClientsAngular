
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaHuluDistributionProvider',KalturaHuluDistributionProvider);
