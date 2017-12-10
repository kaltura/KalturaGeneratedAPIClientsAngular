

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaScheduleResourceOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaScheduleResourceOrderBy('+createdAt');
	static createdAtDesc = new KalturaScheduleResourceOrderBy('-createdAt');
	static updatedAtAsc = new KalturaScheduleResourceOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaScheduleResourceOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaScheduleResourceOrderBy',KalturaScheduleResourceOrderBy);