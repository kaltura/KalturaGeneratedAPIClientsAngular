

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileGenericRtmpOrderBy extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static createdAtAsc = new KalturaDeliveryProfileGenericRtmpOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileGenericRtmpOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileGenericRtmpOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileGenericRtmpOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericRtmpOrderBy',KalturaDeliveryProfileGenericRtmpOrderBy);