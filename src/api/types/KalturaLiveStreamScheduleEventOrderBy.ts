

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveStreamScheduleEventOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLiveStreamScheduleEventOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveStreamScheduleEventOrderBy('-createdAt');
	static endDateAsc = new KalturaLiveStreamScheduleEventOrderBy('+endDate');
	static endDateDesc = new KalturaLiveStreamScheduleEventOrderBy('-endDate');
	static priorityAsc = new KalturaLiveStreamScheduleEventOrderBy('+priority');
	static priorityDesc = new KalturaLiveStreamScheduleEventOrderBy('-priority');
	static startDateAsc = new KalturaLiveStreamScheduleEventOrderBy('+startDate');
	static startDateDesc = new KalturaLiveStreamScheduleEventOrderBy('-startDate');
	static summaryAsc = new KalturaLiveStreamScheduleEventOrderBy('+summary');
	static summaryDesc = new KalturaLiveStreamScheduleEventOrderBy('-summary');
	static updatedAtAsc = new KalturaLiveStreamScheduleEventOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveStreamScheduleEventOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaLiveStreamScheduleEventOrderBy',KalturaLiveStreamScheduleEventOrderBy);