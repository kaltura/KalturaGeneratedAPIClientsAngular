

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryServerNodeOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryServerNodeOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryServerNodeOrderBy('-createdAt');
	static heartbeatTimeAsc = new KalturaDeliveryServerNodeOrderBy('+heartbeatTime');
	static heartbeatTimeDesc = new KalturaDeliveryServerNodeOrderBy('-heartbeatTime');
	static updatedAtAsc = new KalturaDeliveryServerNodeOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryServerNodeOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryServerNodeOrderBy',KalturaDeliveryServerNodeOrderBy);