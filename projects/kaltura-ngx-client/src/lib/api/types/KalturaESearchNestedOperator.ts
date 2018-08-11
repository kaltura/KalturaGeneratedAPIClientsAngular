
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchEntryNestedBaseItem, KalturaESearchEntryNestedBaseItemArgs } from './KalturaESearchEntryNestedBaseItem';

export interface KalturaESearchNestedOperatorArgs  extends KalturaESearchEntryNestedBaseItemArgs {
    operator? : KalturaESearchOperatorType;
	searchItems? : KalturaESearchEntryNestedBaseItem[];
}


export class KalturaESearchNestedOperator extends KalturaESearchEntryNestedBaseItem {

    operator : KalturaESearchOperatorType;
	searchItems : KalturaESearchEntryNestedBaseItem[];

    constructor(data? : KalturaESearchNestedOperatorArgs)
    {
        super(data);
        if (typeof this.searchItems === 'undefined') this.searchItems = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchNestedOperator' },
				operator : { type : 'en', subTypeConstructor : KalturaESearchOperatorType, subType : 'KalturaESearchOperatorType' },
				searchItems : { type : 'a', subTypeConstructor : KalturaESearchEntryNestedBaseItem, subType : 'KalturaESearchEntryNestedBaseItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchNestedOperator'] = KalturaESearchNestedOperator;