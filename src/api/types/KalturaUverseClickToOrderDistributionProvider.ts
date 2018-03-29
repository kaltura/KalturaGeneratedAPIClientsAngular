
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaUverseClickToOrderDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaUverseClickToOrderDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaUverseClickToOrderDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseClickToOrderDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseClickToOrderDistributionProvider',KalturaUverseClickToOrderDistributionProvider);
