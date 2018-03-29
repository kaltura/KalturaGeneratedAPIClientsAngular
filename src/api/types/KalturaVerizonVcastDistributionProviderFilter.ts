
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVerizonVcastDistributionProviderBaseFilter, KalturaVerizonVcastDistributionProviderBaseFilterArgs } from './KalturaVerizonVcastDistributionProviderBaseFilter';

export interface KalturaVerizonVcastDistributionProviderFilterArgs  extends KalturaVerizonVcastDistributionProviderBaseFilterArgs {
    
}


export class KalturaVerizonVcastDistributionProviderFilter extends KalturaVerizonVcastDistributionProviderBaseFilter {

    

    constructor(data? : KalturaVerizonVcastDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVerizonVcastDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVerizonVcastDistributionProviderFilter',KalturaVerizonVcastDistributionProviderFilter);
