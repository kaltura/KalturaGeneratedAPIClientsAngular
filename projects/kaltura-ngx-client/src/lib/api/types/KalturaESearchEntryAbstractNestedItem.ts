
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchEntryNestedBaseItem, KalturaESearchEntryNestedBaseItemArgs } from './KalturaESearchEntryNestedBaseItem';

export interface KalturaESearchEntryAbstractNestedItemArgs  extends KalturaESearchEntryNestedBaseItemArgs {
    searchTerm? : string;
	itemType? : KalturaESearchItemType;
	range? : KalturaESearchRange;
	addHighlight? : boolean;
}


export class KalturaESearchEntryAbstractNestedItem extends KalturaESearchEntryNestedBaseItem {

    searchTerm : string;
	itemType : KalturaESearchItemType;
	range : KalturaESearchRange;
	addHighlight : boolean;

    constructor(data? : KalturaESearchEntryAbstractNestedItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryAbstractNestedItem' },
				searchTerm : { type : 's' },
				itemType : { type : 'en', subTypeConstructor : KalturaESearchItemType, subType : 'KalturaESearchItemType' },
				range : { type : 'o', subTypeConstructor : KalturaESearchRange, subType : 'KalturaESearchRange' },
				addHighlight : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryAbstractNestedItem'] = KalturaESearchEntryAbstractNestedItem;