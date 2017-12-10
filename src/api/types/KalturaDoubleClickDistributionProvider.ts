
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaDoubleClickDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaDoubleClickDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaDoubleClickDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDoubleClickDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDoubleClickDistributionProvider',KalturaDoubleClickDistributionProvider);
