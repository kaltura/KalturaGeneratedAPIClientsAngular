
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaExternalMediaEntryCompareAttribute } from './KalturaExternalMediaEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaExternalMediaEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaExternalMediaEntryCompareAttribute;
}


export class KalturaExternalMediaEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaExternalMediaEntryCompareAttribute;

    constructor(data? : KalturaExternalMediaEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalMediaEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaExternalMediaEntryCompareAttribute, subType : 'KalturaExternalMediaEntryCompareAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExternalMediaEntryCompareAttributeCondition'] = KalturaExternalMediaEntryCompareAttributeCondition;