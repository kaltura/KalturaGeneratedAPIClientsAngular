
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaMatchConditionType } from './KalturaMatchConditionType';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaMatchConditionArgs  extends KalturaConditionArgs {
    values? : KalturaStringValue[];
	matchType? : KalturaMatchConditionType;
}


export class KalturaMatchCondition extends KalturaCondition {

    values : KalturaStringValue[];
	matchType : KalturaMatchConditionType;

    constructor(data? : KalturaMatchConditionArgs)
    {
        super(data);
        if (typeof this.values === 'undefined') this.values = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMatchCondition' },
				values : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				matchType : { type : 'es', subTypeConstructor : KalturaMatchConditionType, subType : 'KalturaMatchConditionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMatchCondition',KalturaMatchCondition);
