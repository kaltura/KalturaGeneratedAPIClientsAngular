
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';

export interface KalturaESearchOperatorArgs  extends KalturaESearchBaseItemArgs {
    operator? : KalturaESearchOperatorType;
	searchItems? : KalturaESearchBaseItem[];
}


export class KalturaESearchOperator extends KalturaESearchBaseItem {

    operator : KalturaESearchOperatorType;
	searchItems : KalturaESearchBaseItem[];

    constructor(data? : KalturaESearchOperatorArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchOperator' },
				operator : { type : 'en', subTypeConstructor : KalturaESearchOperatorType, subType : 'KalturaESearchOperatorType' },
				searchItems : { type : 'a', subTypeConstructor : KalturaESearchBaseItem, subType : 'KalturaESearchBaseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchOperator',KalturaESearchOperator);
