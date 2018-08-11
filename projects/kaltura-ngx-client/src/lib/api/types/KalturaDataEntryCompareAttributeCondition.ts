
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataEntryCompareAttribute } from './KalturaDataEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaDataEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaDataEntryCompareAttribute;
}


export class KalturaDataEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaDataEntryCompareAttribute;

    constructor(data? : KalturaDataEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDataEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaDataEntryCompareAttribute, subType : 'KalturaDataEntryCompareAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDataEntryCompareAttributeCondition'] = KalturaDataEntryCompareAttributeCondition;