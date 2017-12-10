
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIndexAdvancedFilter, KalturaIndexAdvancedFilterArgs } from './KalturaIndexAdvancedFilter';

export interface KalturaEntryIndexAdvancedFilterArgs  extends KalturaIndexAdvancedFilterArgs {
    
}


export class KalturaEntryIndexAdvancedFilter extends KalturaIndexAdvancedFilter {

    

    constructor(data? : KalturaEntryIndexAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryIndexAdvancedFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryIndexAdvancedFilter',KalturaEntryIndexAdvancedFilter);
