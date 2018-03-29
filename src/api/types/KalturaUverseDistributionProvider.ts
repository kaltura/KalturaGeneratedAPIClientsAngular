
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaUverseDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaUverseDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaUverseDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseDistributionProvider',KalturaUverseDistributionProvider);
