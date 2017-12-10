

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileAkamaiHttpOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryProfileAkamaiHttpOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileAkamaiHttpOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileAkamaiHttpOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileAkamaiHttpOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileAkamaiHttpOrderBy',KalturaDeliveryProfileAkamaiHttpOrderBy);