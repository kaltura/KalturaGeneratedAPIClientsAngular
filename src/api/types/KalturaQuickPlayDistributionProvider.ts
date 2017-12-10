
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaQuickPlayDistributionProvider',KalturaQuickPlayDistributionProvider);
