
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaNdnDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaNdnDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaNdnDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNdnDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNdnDistributionProvider',KalturaNdnDistributionProvider);
