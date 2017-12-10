
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFreewheelDistributionProviderBaseFilter, KalturaFreewheelDistributionProviderBaseFilterArgs } from './KalturaFreewheelDistributionProviderBaseFilter';

export interface KalturaFreewheelDistributionProviderFilterArgs  extends KalturaFreewheelDistributionProviderBaseFilterArgs {
    
}


export class KalturaFreewheelDistributionProviderFilter extends KalturaFreewheelDistributionProviderBaseFilter {

    

    constructor(data? : KalturaFreewheelDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelDistributionProviderFilter',KalturaFreewheelDistributionProviderFilter);
