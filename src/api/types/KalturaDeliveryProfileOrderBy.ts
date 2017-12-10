

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileOrderBy',KalturaDeliveryProfileOrderBy);