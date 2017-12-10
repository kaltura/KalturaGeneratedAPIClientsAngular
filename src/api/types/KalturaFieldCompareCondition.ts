
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegerField } from './KalturaIntegerField';
import { KalturaCompareCondition, KalturaCompareConditionArgs } from './KalturaCompareCondition';

export interface KalturaFieldCompareConditionArgs  extends KalturaCompareConditionArgs {
    field? : KalturaIntegerField;
}


export class KalturaFieldCompareCondition extends KalturaCompareCondition {

    field : KalturaIntegerField;

    constructor(data? : KalturaFieldCompareConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFieldCompareCondition' },
				field : { type : 'o', subTypeConstructor : KalturaIntegerField, subType : 'KalturaIntegerField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFieldCompareCondition',KalturaFieldCompareCondition);
