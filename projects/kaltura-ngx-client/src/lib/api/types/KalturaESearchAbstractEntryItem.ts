
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchEntryBaseItem, KalturaESearchEntryBaseItemArgs } from './KalturaESearchEntryBaseItem';

export interface KalturaESearchAbstractEntryItemArgs  extends KalturaESearchEntryBaseItemArgs {
    searchTerm? : string;
	itemType? : KalturaESearchItemType;
	range? : KalturaESearchRange;
	addHighlight? : boolean;
}


export class KalturaESearchAbstractEntryItem extends KalturaESearchEntryBaseItem {

    searchTerm : string;
	itemType : KalturaESearchItemType;
	range : KalturaESearchRange;
	addHighlight : boolean;

    constructor(data? : KalturaESearchAbstractEntryItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchAbstractEntryItem' },
				searchTerm : { type : 's' },
				itemType : { type : 'en', subTypeConstructor : KalturaESearchItemType, subType : 'KalturaESearchItemType' },
				range : { type : 'o', subTypeConstructor : KalturaESearchRange, subType : 'KalturaESearchRange' },
				addHighlight : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchAbstractEntryItem'] = KalturaESearchAbstractEntryItem;