
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseEntryCompareAttribute } from './KalturaBaseEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaBaseEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaBaseEntryCompareAttribute;
}


export class KalturaBaseEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaBaseEntryCompareAttribute;

    constructor(data? : KalturaBaseEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaBaseEntryCompareAttribute, subType : 'KalturaBaseEntryCompareAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntryCompareAttributeCondition',KalturaBaseEntryCompareAttributeCondition);
