
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaFreewheelDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaFreewheelDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaFreewheelDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelDistributionProvider',KalturaFreewheelDistributionProvider);
