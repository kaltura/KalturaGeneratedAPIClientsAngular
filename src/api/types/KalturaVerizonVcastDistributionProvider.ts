
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaVerizonVcastDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaVerizonVcastDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaVerizonVcastDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVerizonVcastDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVerizonVcastDistributionProvider',KalturaVerizonVcastDistributionProvider);
