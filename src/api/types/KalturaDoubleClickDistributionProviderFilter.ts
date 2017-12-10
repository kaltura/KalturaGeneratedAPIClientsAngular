
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDoubleClickDistributionProviderBaseFilter, KalturaDoubleClickDistributionProviderBaseFilterArgs } from './KalturaDoubleClickDistributionProviderBaseFilter';

export interface KalturaDoubleClickDistributionProviderFilterArgs  extends KalturaDoubleClickDistributionProviderBaseFilterArgs {
    
}


export class KalturaDoubleClickDistributionProviderFilter extends KalturaDoubleClickDistributionProviderBaseFilter {

    

    constructor(data? : KalturaDoubleClickDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDoubleClickDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDoubleClickDistributionProviderFilter',KalturaDoubleClickDistributionProviderFilter);
