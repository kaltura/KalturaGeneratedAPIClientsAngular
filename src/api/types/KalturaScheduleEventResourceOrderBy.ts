

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaScheduleEventResourceOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaScheduleEventResourceOrderBy('+createdAt');
	static createdAtDesc = new KalturaScheduleEventResourceOrderBy('-createdAt');
	static updatedAtAsc = new KalturaScheduleEventResourceOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaScheduleEventResourceOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaScheduleEventResourceOrderBy',KalturaScheduleEventResourceOrderBy);