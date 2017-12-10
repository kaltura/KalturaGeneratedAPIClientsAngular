
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaYahooDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaYahooDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaYahooDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYahooDistributionProvider',KalturaYahooDistributionProvider);
