

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEntryScheduleEventOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaEntryScheduleEventOrderBy('+createdAt');
	static createdAtDesc = new KalturaEntryScheduleEventOrderBy('-createdAt');
	static endDateAsc = new KalturaEntryScheduleEventOrderBy('+endDate');
	static endDateDesc = new KalturaEntryScheduleEventOrderBy('-endDate');
	static priorityAsc = new KalturaEntryScheduleEventOrderBy('+priority');
	static priorityDesc = new KalturaEntryScheduleEventOrderBy('-priority');
	static startDateAsc = new KalturaEntryScheduleEventOrderBy('+startDate');
	static startDateDesc = new KalturaEntryScheduleEventOrderBy('-startDate');
	static summaryAsc = new KalturaEntryScheduleEventOrderBy('+summary');
	static summaryDesc = new KalturaEntryScheduleEventOrderBy('-summary');
	static updatedAtAsc = new KalturaEntryScheduleEventOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaEntryScheduleEventOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaEntryScheduleEventOrderBy',KalturaEntryScheduleEventOrderBy);