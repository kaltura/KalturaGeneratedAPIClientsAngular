
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMixEntryCompareAttribute } from './KalturaMixEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaMixEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaMixEntryCompareAttribute;
}


export class KalturaMixEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaMixEntryCompareAttribute;

    constructor(data? : KalturaMixEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMixEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaMixEntryCompareAttribute, subType : 'KalturaMixEntryCompareAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMixEntryCompareAttributeCondition'] = KalturaMixEntryCompareAttributeCondition;