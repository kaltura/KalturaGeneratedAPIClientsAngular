
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchGroupBaseItem, KalturaESearchGroupBaseItemArgs } from './KalturaESearchGroupBaseItem';

export interface KalturaESearchGroupOperatorArgs  extends KalturaESearchGroupBaseItemArgs {
    operator? : KalturaESearchOperatorType;
	searchItems? : KalturaESearchGroupBaseItem[];
}


export class KalturaESearchGroupOperator extends KalturaESearchGroupBaseItem {

    operator : KalturaESearchOperatorType;
	searchItems : KalturaESearchGroupBaseItem[];

    constructor(data? : KalturaESearchGroupOperatorArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchGroupOperator' },
				operator : { type : 'en', subTypeConstructor : KalturaESearchOperatorType, subType : 'KalturaESearchOperatorType' },
				searchItems : { type : 'a', subTypeConstructor : KalturaESearchGroupBaseItem, subType : 'KalturaESearchGroupBaseItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchGroupOperator'] = KalturaESearchGroupOperator;