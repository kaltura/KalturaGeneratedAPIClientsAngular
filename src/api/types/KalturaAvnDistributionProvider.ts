
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaAvnDistributionProvider',KalturaAvnDistributionProvider);
