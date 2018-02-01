
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchEntryBaseItem, KalturaESearchEntryBaseItemArgs } from './KalturaESearchEntryBaseItem';

export interface KalturaESearchEntryBaseNestedObjectArgs  extends KalturaESearchEntryBaseItemArgs {
    
}


export class KalturaESearchEntryBaseNestedObject extends KalturaESearchEntryBaseItem {

    

    constructor(data? : KalturaESearchEntryBaseNestedObjectArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryBaseNestedObject' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchEntryBaseNestedObject',KalturaESearchEntryBaseNestedObject);
