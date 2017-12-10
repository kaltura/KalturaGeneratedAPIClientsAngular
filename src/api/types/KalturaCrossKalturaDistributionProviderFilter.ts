
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrossKalturaDistributionProviderBaseFilter, KalturaCrossKalturaDistributionProviderBaseFilterArgs } from './KalturaCrossKalturaDistributionProviderBaseFilter';

export interface KalturaCrossKalturaDistributionProviderFilterArgs  extends KalturaCrossKalturaDistributionProviderBaseFilterArgs {
    
}


export class KalturaCrossKalturaDistributionProviderFilter extends KalturaCrossKalturaDistributionProviderBaseFilter {

    

    constructor(data? : KalturaCrossKalturaDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrossKalturaDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCrossKalturaDistributionProviderFilter',KalturaCrossKalturaDistributionProviderFilter);
