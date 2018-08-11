
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaEntryIndexAdvancedFilter'] = KalturaEntryIndexAdvancedFilter;