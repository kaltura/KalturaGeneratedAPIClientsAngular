

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileLiveAppleHttpOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryProfileLiveAppleHttpOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileLiveAppleHttpOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileLiveAppleHttpOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileLiveAppleHttpOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileLiveAppleHttpOrderBy',KalturaDeliveryProfileLiveAppleHttpOrderBy);