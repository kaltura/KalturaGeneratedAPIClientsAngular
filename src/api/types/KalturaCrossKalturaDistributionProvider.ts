
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaCrossKalturaDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaCrossKalturaDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaCrossKalturaDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrossKalturaDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCrossKalturaDistributionProvider',KalturaCrossKalturaDistributionProvider);
