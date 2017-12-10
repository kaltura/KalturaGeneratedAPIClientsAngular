
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDeliveryProfileConditionArgs  extends KalturaConditionArgs {
    deliveryProfileIds? : KalturaIntegerValue[];
}


export class KalturaDeliveryProfileCondition extends KalturaCondition {

    deliveryProfileIds : KalturaIntegerValue[];

    constructor(data? : KalturaDeliveryProfileConditionArgs)
    {
        super(data);
        if (typeof this.deliveryProfileIds === 'undefined') this.deliveryProfileIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileCondition' },
				deliveryProfileIds : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileCondition',KalturaDeliveryProfileCondition);
