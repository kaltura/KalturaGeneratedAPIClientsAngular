
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayerDeliveryTypeArgs  extends KalturaObjectBaseArgs {
    id? : string;
	label? : string;
	flashvars? : KalturaKeyValue[];
	minVersion? : string;
	enabledByDefault? : boolean;
}


export class KalturaPlayerDeliveryType extends KalturaObjectBase {

    id : string;
	label : string;
	flashvars : KalturaKeyValue[];
	minVersion : string;
	enabledByDefault : boolean;

    constructor(data? : KalturaPlayerDeliveryTypeArgs)
    {
        super(data);
        if (typeof this.flashvars === 'undefined') this.flashvars = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayerDeliveryType' },
				id : { type : 's' },
				label : { type : 's' },
				flashvars : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				minVersion : { type : 's' },
				enabledByDefault : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayerDeliveryType',KalturaPlayerDeliveryType);
