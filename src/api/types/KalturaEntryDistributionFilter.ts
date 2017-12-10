
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryDistributionBaseFilter, KalturaEntryDistributionBaseFilterArgs } from './KalturaEntryDistributionBaseFilter';

export interface KalturaEntryDistributionFilterArgs  extends KalturaEntryDistributionBaseFilterArgs {
    
}


export class KalturaEntryDistributionFilter extends KalturaEntryDistributionBaseFilter {

    

    constructor(data? : KalturaEntryDistributionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryDistributionFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryDistributionFilter',KalturaEntryDistributionFilter);
