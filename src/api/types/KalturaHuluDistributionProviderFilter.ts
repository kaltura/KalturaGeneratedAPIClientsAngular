
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHuluDistributionProviderBaseFilter, KalturaHuluDistributionProviderBaseFilterArgs } from './KalturaHuluDistributionProviderBaseFilter';

export interface KalturaHuluDistributionProviderFilterArgs  extends KalturaHuluDistributionProviderBaseFilterArgs {
    
}


export class KalturaHuluDistributionProviderFilter extends KalturaHuluDistributionProviderBaseFilter {

    

    constructor(data? : KalturaHuluDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHuluDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHuluDistributionProviderFilter',KalturaHuluDistributionProviderFilter);
