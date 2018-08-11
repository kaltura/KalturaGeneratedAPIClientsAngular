
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchUserBaseItem, KalturaESearchUserBaseItemArgs } from './KalturaESearchUserBaseItem';

export interface KalturaESearchAbstractUserItemArgs  extends KalturaESearchUserBaseItemArgs {
    searchTerm? : string;
	itemType? : KalturaESearchItemType;
	range? : KalturaESearchRange;
	addHighlight? : boolean;
}


export class KalturaESearchAbstractUserItem extends KalturaESearchUserBaseItem {

    searchTerm : string;
	itemType : KalturaESearchItemType;
	range : KalturaESearchRange;
	addHighlight : boolean;

    constructor(data? : KalturaESearchAbstractUserItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchAbstractUserItem' },
				searchTerm : { type : 's' },
				itemType : { type : 'en', subTypeConstructor : KalturaESearchItemType, subType : 'KalturaESearchItemType' },
				range : { type : 'o', subTypeConstructor : KalturaESearchRange, subType : 'KalturaESearchRange' },
				addHighlight : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchAbstractUserItem'] = KalturaESearchAbstractUserItem;