
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue, KalturaStringValueArgs } from './KalturaStringValue';

export interface KalturaStringFieldArgs  extends KalturaStringValueArgs {
    
}


export class KalturaStringField extends KalturaStringValue {

    

    constructor(data? : KalturaStringFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStringField' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaStringField'] = KalturaStringField;