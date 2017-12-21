
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchCategoryBaseItem, KalturaESearchCategoryBaseItemArgs } from './KalturaESearchCategoryBaseItem';

export interface KalturaESearchAbstractCategoryItemArgs  extends KalturaESearchCategoryBaseItemArgs {
    searchTerm? : string;
	itemType? : KalturaESearchItemType;
	range? : KalturaESearchRange;
}


export class KalturaESearchAbstractCategoryItem extends KalturaESearchCategoryBaseItem {

    searchTerm : string;
	itemType : KalturaESearchItemType;
	range : KalturaESearchRange;

    constructor(data? : KalturaESearchAbstractCategoryItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchAbstractCategoryItem' },
				searchTerm : { type : 's' },
				itemType : { type : 'en', subTypeConstructor : KalturaESearchItemType, subType : 'KalturaESearchItemType' },
				range : { type : 'o', subTypeConstructor : KalturaESearchRange, subType : 'KalturaESearchRange' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchAbstractCategoryItem',KalturaESearchAbstractCategoryItem);
