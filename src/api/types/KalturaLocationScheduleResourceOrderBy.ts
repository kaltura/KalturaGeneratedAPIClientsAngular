

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLocationScheduleResourceOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLocationScheduleResourceOrderBy('+createdAt');
	static createdAtDesc = new KalturaLocationScheduleResourceOrderBy('-createdAt');
	static updatedAtAsc = new KalturaLocationScheduleResourceOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLocationScheduleResourceOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaLocationScheduleResourceOrderBy',KalturaLocationScheduleResourceOrderBy);