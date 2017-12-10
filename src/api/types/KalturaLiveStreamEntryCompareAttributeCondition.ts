
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamEntryCompareAttribute } from './KalturaLiveStreamEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaLiveStreamEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaLiveStreamEntryCompareAttribute;
}


export class KalturaLiveStreamEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaLiveStreamEntryCompareAttribute;

    constructor(data? : KalturaLiveStreamEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaLiveStreamEntryCompareAttribute, subType : 'KalturaLiveStreamEntryCompareAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamEntryCompareAttributeCondition',KalturaLiveStreamEntryCompareAttributeCondition);
