
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaAssetPropertiesCompareConditionArgs  extends KalturaConditionArgs {
    properties? : KalturaKeyValue[];
}


export class KalturaAssetPropertiesCompareCondition extends KalturaCondition {

    properties : KalturaKeyValue[];

    constructor(data? : KalturaAssetPropertiesCompareConditionArgs)
    {
        super(data);
        if (typeof this.properties === 'undefined') this.properties = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetPropertiesCompareCondition' },
				properties : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetPropertiesCompareCondition',KalturaAssetPropertiesCompareCondition);
