
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaAttributeCondition, KalturaAttributeConditionArgs } from './KalturaAttributeCondition';

export interface KalturaSearchComparableAttributeConditionArgs  extends KalturaAttributeConditionArgs {
    comparison? : KalturaSearchConditionComparison;
}


export class KalturaSearchComparableAttributeCondition extends KalturaAttributeCondition {

    comparison : KalturaSearchConditionComparison;

    constructor(data? : KalturaSearchComparableAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchComparableAttributeCondition' },
				comparison : { type : 'es', subTypeConstructor : KalturaSearchConditionComparison, subType : 'KalturaSearchConditionComparison' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchComparableAttributeCondition',KalturaSearchComparableAttributeCondition);
