
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDocumentEntryCompareAttribute } from './KalturaDocumentEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaDocumentEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaDocumentEntryCompareAttribute;
}


export class KalturaDocumentEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaDocumentEntryCompareAttribute;

    constructor(data? : KalturaDocumentEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaDocumentEntryCompareAttribute, subType : 'KalturaDocumentEntryCompareAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentEntryCompareAttributeCondition',KalturaDocumentEntryCompareAttributeCondition);
