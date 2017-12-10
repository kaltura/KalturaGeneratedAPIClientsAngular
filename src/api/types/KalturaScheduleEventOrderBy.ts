

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaScheduleEventOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaScheduleEventOrderBy('+createdAt');
	static createdAtDesc = new KalturaScheduleEventOrderBy('-createdAt');
	static endDateAsc = new KalturaScheduleEventOrderBy('+endDate');
	static endDateDesc = new KalturaScheduleEventOrderBy('-endDate');
	static priorityAsc = new KalturaScheduleEventOrderBy('+priority');
	static priorityDesc = new KalturaScheduleEventOrderBy('-priority');
	static startDateAsc = new KalturaScheduleEventOrderBy('+startDate');
	static startDateDesc = new KalturaScheduleEventOrderBy('-startDate');
	static summaryAsc = new KalturaScheduleEventOrderBy('+summary');
	static summaryDesc = new KalturaScheduleEventOrderBy('-summary');
	static updatedAtAsc = new KalturaScheduleEventOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaScheduleEventOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaScheduleEventOrderBy',KalturaScheduleEventOrderBy);