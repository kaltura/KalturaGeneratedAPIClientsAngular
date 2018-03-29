
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaTimeWarnerDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaTimeWarnerDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaTimeWarnerDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimeWarnerDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTimeWarnerDistributionProvider',KalturaTimeWarnerDistributionProvider);
