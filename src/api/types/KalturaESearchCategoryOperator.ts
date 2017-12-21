
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchCategoryBaseItem, KalturaESearchCategoryBaseItemArgs } from './KalturaESearchCategoryBaseItem';

export interface KalturaESearchCategoryOperatorArgs  extends KalturaESearchCategoryBaseItemArgs {
    operator? : KalturaESearchOperatorType;
	searchItems? : KalturaESearchCategoryBaseItem[];
}


export class KalturaESearchCategoryOperator extends KalturaESearchCategoryBaseItem {

    operator : KalturaESearchOperatorType;
	searchItems : KalturaESearchCategoryBaseItem[];

    constructor(data? : KalturaESearchCategoryOperatorArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchCategoryOperator' },
				operator : { type : 'en', subTypeConstructor : KalturaESearchOperatorType, subType : 'KalturaESearchOperatorType' },
				searchItems : { type : 'a', subTypeConstructor : KalturaESearchCategoryBaseItem, subType : 'KalturaESearchCategoryBaseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCategoryOperator',KalturaESearchCategoryOperator);
