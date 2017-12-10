

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileRtmpOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryProfileRtmpOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileRtmpOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileRtmpOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileRtmpOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileRtmpOrderBy',KalturaDeliveryProfileRtmpOrderBy);