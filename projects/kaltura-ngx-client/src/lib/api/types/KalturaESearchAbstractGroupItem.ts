
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchGroupBaseItem, KalturaESearchGroupBaseItemArgs } from './KalturaESearchGroupBaseItem';

export interface KalturaESearchAbstractGroupItemArgs  extends KalturaESearchGroupBaseItemArgs {
    searchTerm? : string;
	itemType? : KalturaESearchItemType;
	range? : KalturaESearchRange;
	addHighlight? : boolean;
}


export class KalturaESearchAbstractGroupItem extends KalturaESearchGroupBaseItem {

    searchTerm : string;
	itemType : KalturaESearchItemType;
	range : KalturaESearchRange;
	addHighlight : boolean;

    constructor(data? : KalturaESearchAbstractGroupItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchAbstractGroupItem' },
				searchTerm : { type : 's' },
				itemType : { type : 'en', subTypeConstructor : KalturaESearchItemType, subType : 'KalturaESearchItemType' },
				range : { type : 'o', subTypeConstructor : KalturaESearchRange, subType : 'KalturaESearchRange' },
				addHighlight : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchAbstractGroupItem'] = KalturaESearchAbstractGroupItem;