
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchUserBaseItem, KalturaESearchUserBaseItemArgs } from './KalturaESearchUserBaseItem';

export interface KalturaESearchAbstractUserItemArgs  extends KalturaESearchUserBaseItemArgs {
    searchTerm? : string;
	itemType? : KalturaESearchItemType;
	range? : KalturaESearchRange;
}


export class KalturaESearchAbstractUserItem extends KalturaESearchUserBaseItem {

    searchTerm : string;
	itemType : KalturaESearchItemType;
	range : KalturaESearchRange;

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
				range : { type : 'o', subTypeConstructor : KalturaESearchRange, subType : 'KalturaESearchRange' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchAbstractUserItem',KalturaESearchAbstractUserItem);
