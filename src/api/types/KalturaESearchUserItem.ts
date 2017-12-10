
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchUserFieldName } from './KalturaESearchUserFieldName';
import { KalturaESearchItem, KalturaESearchItemArgs } from './KalturaESearchItem';

export interface KalturaESearchUserItemArgs  extends KalturaESearchItemArgs {
    fieldName? : KalturaESearchUserFieldName;
}


export class KalturaESearchUserItem extends KalturaESearchItem {

    fieldName : KalturaESearchUserFieldName;

    constructor(data? : KalturaESearchUserItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchUserFieldName, subType : 'KalturaESearchUserFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchUserItem',KalturaESearchUserItem);
