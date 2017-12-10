
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchEntryFieldName } from './KalturaESearchEntryFieldName';
import { KalturaESearchItem, KalturaESearchItemArgs } from './KalturaESearchItem';

export interface KalturaESearchEntryItemArgs  extends KalturaESearchItemArgs {
    fieldName? : KalturaESearchEntryFieldName;
}


export class KalturaESearchEntryItem extends KalturaESearchItem {

    fieldName : KalturaESearchEntryFieldName;

    constructor(data? : KalturaESearchEntryItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchEntryFieldName, subType : 'KalturaESearchEntryFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchEntryItem',KalturaESearchEntryItem);
