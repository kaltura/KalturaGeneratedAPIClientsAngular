
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaAttUverseDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaAttUverseDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaAttUverseDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttUverseDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttUverseDistributionProvider',KalturaAttUverseDistributionProvider);
