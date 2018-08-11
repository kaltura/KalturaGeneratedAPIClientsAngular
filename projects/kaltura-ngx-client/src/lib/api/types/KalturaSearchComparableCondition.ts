
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaSearchCondition, KalturaSearchConditionArgs } from './KalturaSearchCondition';

export interface KalturaSearchComparableConditionArgs  extends KalturaSearchConditionArgs {
    comparison? : KalturaSearchConditionComparison;
}


export class KalturaSearchComparableCondition extends KalturaSearchCondition {

    comparison : KalturaSearchConditionComparison;

    constructor(data? : KalturaSearchComparableConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchComparableCondition' },
				comparison : { type : 'es', subTypeConstructor : KalturaSearchConditionComparison, subType : 'KalturaSearchConditionComparison' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchComparableCondition'] = KalturaSearchComparableCondition;