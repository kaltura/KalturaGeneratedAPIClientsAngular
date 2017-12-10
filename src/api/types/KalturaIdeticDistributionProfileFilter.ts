
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIdeticDistributionProfileBaseFilter, KalturaIdeticDistributionProfileBaseFilterArgs } from './KalturaIdeticDistributionProfileBaseFilter';

export interface KalturaIdeticDistributionProfileFilterArgs  extends KalturaIdeticDistributionProfileBaseFilterArgs {
    
}


export class KalturaIdeticDistributionProfileFilter extends KalturaIdeticDistributionProfileBaseFilter {

    

    constructor(data? : KalturaIdeticDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIdeticDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIdeticDistributionProfileFilter',KalturaIdeticDistributionProfileFilter);
