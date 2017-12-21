
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchCategoryFieldName } from './KalturaESearchCategoryFieldName';
import { KalturaESearchAbstractCategoryItem, KalturaESearchAbstractCategoryItemArgs } from './KalturaESearchAbstractCategoryItem';

export interface KalturaESearchCategoryItemArgs  extends KalturaESearchAbstractCategoryItemArgs {
    fieldName? : KalturaESearchCategoryFieldName;
}


export class KalturaESearchCategoryItem extends KalturaESearchAbstractCategoryItem {

    fieldName : KalturaESearchCategoryFieldName;

    constructor(data? : KalturaESearchCategoryItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchCategoryFieldName, subType : 'KalturaESearchCategoryFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCategoryItem',KalturaESearchCategoryItem);
