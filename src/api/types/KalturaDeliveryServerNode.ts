
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaServerNode, KalturaServerNodeArgs } from './KalturaServerNode';

export interface KalturaDeliveryServerNodeArgs  extends KalturaServerNodeArgs {
    deliveryProfileIds? : KalturaKeyValue[];
}


export class KalturaDeliveryServerNode extends KalturaServerNode {

    deliveryProfileIds : KalturaKeyValue[];

    constructor(data? : KalturaDeliveryServerNodeArgs)
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
                objectType : { type : 'c', default : 'KalturaDeliveryServerNode' },
				deliveryProfileIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryServerNode',KalturaDeliveryServerNode);
