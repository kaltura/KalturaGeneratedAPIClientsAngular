
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaSyndicationDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaSyndicationDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaSyndicationDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSyndicationDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSyndicationDistributionProvider',KalturaSyndicationDistributionProvider);
