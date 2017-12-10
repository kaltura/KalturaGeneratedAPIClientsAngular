
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaFreewheelGenericDistributionProvider',KalturaFreewheelGenericDistributionProvider);
