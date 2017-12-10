
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaCompareConditionArgs  extends KalturaConditionArgs {
    value? : KalturaIntegerValue;
	comparison? : KalturaSearchConditionComparison;
}


export class KalturaCompareCondition extends KalturaCondition {

    value : KalturaIntegerValue;
	comparison : KalturaSearchConditionComparison;

    constructor(data? : KalturaCompareConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCompareCondition' },
				value : { type : 'o', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				comparison : { type : 'es', subTypeConstructor : KalturaSearchConditionComparison, subType : 'KalturaSearchConditionComparison' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCompareCondition',KalturaCompareCondition);
