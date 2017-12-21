
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchEntryBaseItem, KalturaESearchEntryBaseItemArgs } from './KalturaESearchEntryBaseItem';

export interface KalturaESearchEntryOperatorArgs  extends KalturaESearchEntryBaseItemArgs {
    operator? : KalturaESearchOperatorType;
	searchItems? : KalturaESearchEntryBaseItem[];
}


export class KalturaESearchEntryOperator extends KalturaESearchEntryBaseItem {

    operator : KalturaESearchOperatorType;
	searchItems : KalturaESearchEntryBaseItem[];

    constructor(data? : KalturaESearchEntryOperatorArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchEntryOperator' },
				operator : { type : 'en', subTypeConstructor : KalturaESearchOperatorType, subType : 'KalturaESearchOperatorType' },
				searchItems : { type : 'a', subTypeConstructor : KalturaESearchEntryBaseItem, subType : 'KalturaESearchEntryBaseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchEntryOperator',KalturaESearchEntryOperator);
