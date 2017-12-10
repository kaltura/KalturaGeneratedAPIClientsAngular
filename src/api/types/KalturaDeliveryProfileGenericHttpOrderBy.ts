

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileGenericHttpOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryProfileGenericHttpOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileGenericHttpOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileGenericHttpOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileGenericHttpOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericHttpOrderBy',KalturaDeliveryProfileGenericHttpOrderBy);