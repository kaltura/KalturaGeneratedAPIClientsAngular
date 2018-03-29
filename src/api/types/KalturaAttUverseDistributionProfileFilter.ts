
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttUverseDistributionProfileBaseFilter, KalturaAttUverseDistributionProfileBaseFilterArgs } from './KalturaAttUverseDistributionProfileBaseFilter';

export interface KalturaAttUverseDistributionProfileFilterArgs  extends KalturaAttUverseDistributionProfileBaseFilterArgs {
    
}


export class KalturaAttUverseDistributionProfileFilter extends KalturaAttUverseDistributionProfileBaseFilter {

    

    constructor(data? : KalturaAttUverseDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttUverseDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttUverseDistributionProfileFilter',KalturaAttUverseDistributionProfileFilter);
