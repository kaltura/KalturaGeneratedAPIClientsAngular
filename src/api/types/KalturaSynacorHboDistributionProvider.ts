
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaSynacorHboDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaSynacorHboDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaSynacorHboDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSynacorHboDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSynacorHboDistributionProvider',KalturaSynacorHboDistributionProvider);
