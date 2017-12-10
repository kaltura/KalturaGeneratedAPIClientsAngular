

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCameraScheduleResourceOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaCameraScheduleResourceOrderBy('+createdAt');
	static createdAtDesc = new KalturaCameraScheduleResourceOrderBy('-createdAt');
	static updatedAtAsc = new KalturaCameraScheduleResourceOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaCameraScheduleResourceOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaCameraScheduleResourceOrderBy',KalturaCameraScheduleResourceOrderBy);