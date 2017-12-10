
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchCategoryOrderByFieldName } from './KalturaESearchCategoryOrderByFieldName';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';

export interface KalturaESearchCategoryOrderByItemArgs  extends KalturaESearchOrderByItemArgs {
    sortField? : KalturaESearchCategoryOrderByFieldName;
}


export class KalturaESearchCategoryOrderByItem extends KalturaESearchOrderByItem {

    sortField : KalturaESearchCategoryOrderByFieldName;

    constructor(data? : KalturaESearchCategoryOrderByItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryOrderByItem' },
				sortField : { type : 'es', subTypeConstructor : KalturaESearchCategoryOrderByFieldName, subType : 'KalturaESearchCategoryOrderByFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCategoryOrderByItem',KalturaESearchCategoryOrderByItem);
