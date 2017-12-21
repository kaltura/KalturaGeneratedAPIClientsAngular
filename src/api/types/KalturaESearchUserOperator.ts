
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchUserBaseItem, KalturaESearchUserBaseItemArgs } from './KalturaESearchUserBaseItem';

export interface KalturaESearchUserOperatorArgs  extends KalturaESearchUserBaseItemArgs {
    operator? : KalturaESearchOperatorType;
	searchItems? : KalturaESearchUserBaseItem[];
}


export class KalturaESearchUserOperator extends KalturaESearchUserBaseItem {

    operator : KalturaESearchOperatorType;
	searchItems : KalturaESearchUserBaseItem[];

    constructor(data? : KalturaESearchUserOperatorArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchUserOperator' },
				operator : { type : 'en', subTypeConstructor : KalturaESearchOperatorType, subType : 'KalturaESearchOperatorType' },
				searchItems : { type : 'a', subTypeConstructor : KalturaESearchUserBaseItem, subType : 'KalturaESearchUserBaseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchUserOperator',KalturaESearchUserOperator);
