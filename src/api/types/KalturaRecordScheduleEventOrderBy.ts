

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaRecordScheduleEventOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaRecordScheduleEventOrderBy('+createdAt');
	static createdAtDesc = new KalturaRecordScheduleEventOrderBy('-createdAt');
	static endDateAsc = new KalturaRecordScheduleEventOrderBy('+endDate');
	static endDateDesc = new KalturaRecordScheduleEventOrderBy('-endDate');
	static priorityAsc = new KalturaRecordScheduleEventOrderBy('+priority');
	static priorityDesc = new KalturaRecordScheduleEventOrderBy('-priority');
	static startDateAsc = new KalturaRecordScheduleEventOrderBy('+startDate');
	static startDateDesc = new KalturaRecordScheduleEventOrderBy('-startDate');
	static summaryAsc = new KalturaRecordScheduleEventOrderBy('+summary');
	static summaryDesc = new KalturaRecordScheduleEventOrderBy('-summary');
	static updatedAtAsc = new KalturaRecordScheduleEventOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaRecordScheduleEventOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaRecordScheduleEventOrderBy',KalturaRecordScheduleEventOrderBy);