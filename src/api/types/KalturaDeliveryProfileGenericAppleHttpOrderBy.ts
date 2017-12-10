

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileGenericAppleHttpOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryProfileGenericAppleHttpOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileGenericAppleHttpOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileGenericAppleHttpOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileGenericAppleHttpOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericAppleHttpOrderBy',KalturaDeliveryProfileGenericAppleHttpOrderBy);