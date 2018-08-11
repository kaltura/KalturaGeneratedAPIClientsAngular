
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryBaseNestedObject, KalturaESearchEntryBaseNestedObjectArgs } from './KalturaESearchEntryBaseNestedObject';

export interface KalturaESearchEntryNestedBaseItemArgs  extends KalturaESearchEntryBaseNestedObjectArgs {
    
}


export class KalturaESearchEntryNestedBaseItem extends KalturaESearchEntryBaseNestedObject {

    

    constructor(data? : KalturaESearchEntryNestedBaseItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryNestedBaseItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryNestedBaseItem'] = KalturaESearchEntryNestedBaseItem;