
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIdeticDistributionProviderBaseFilter, KalturaIdeticDistributionProviderBaseFilterArgs } from './KalturaIdeticDistributionProviderBaseFilter';

export interface KalturaIdeticDistributionProviderFilterArgs  extends KalturaIdeticDistributionProviderBaseFilterArgs {
    
}


export class KalturaIdeticDistributionProviderFilter extends KalturaIdeticDistributionProviderBaseFilter {

    

    constructor(data? : KalturaIdeticDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIdeticDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIdeticDistributionProviderFilter',KalturaIdeticDistributionProviderFilter);
