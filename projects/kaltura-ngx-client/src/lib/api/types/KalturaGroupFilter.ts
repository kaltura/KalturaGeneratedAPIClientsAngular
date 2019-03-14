
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserFilter, KalturaUserFilterArgs } from './KalturaUserFilter';

export interface KalturaGroupFilterArgs  extends KalturaUserFilterArgs {
    
}


export class KalturaGroupFilter extends KalturaUserFilter {

    

    constructor(data? : KalturaGroupFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroupFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGroupFilter'] = KalturaGroupFilter;