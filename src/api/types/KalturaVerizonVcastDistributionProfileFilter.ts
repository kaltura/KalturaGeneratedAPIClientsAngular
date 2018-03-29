
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVerizonVcastDistributionProfileBaseFilter, KalturaVerizonVcastDistributionProfileBaseFilterArgs } from './KalturaVerizonVcastDistributionProfileBaseFilter';

export interface KalturaVerizonVcastDistributionProfileFilterArgs  extends KalturaVerizonVcastDistributionProfileBaseFilterArgs {
    
}


export class KalturaVerizonVcastDistributionProfileFilter extends KalturaVerizonVcastDistributionProfileBaseFilter {

    

    constructor(data? : KalturaVerizonVcastDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVerizonVcastDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVerizonVcastDistributionProfileFilter',KalturaVerizonVcastDistributionProfileFilter);
