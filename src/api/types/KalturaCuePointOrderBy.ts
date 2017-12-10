

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCuePointOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaCuePointOrderBy('+createdAt');
	static createdAtDesc = new KalturaCuePointOrderBy('-createdAt');
	static partnerSortValueAsc = new KalturaCuePointOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaCuePointOrderBy('-partnerSortValue');
	static startTimeAsc = new KalturaCuePointOrderBy('+startTime');
	static startTimeDesc = new KalturaCuePointOrderBy('-startTime');
	static triggeredAtAsc = new KalturaCuePointOrderBy('+triggeredAt');
	static triggeredAtDesc = new KalturaCuePointOrderBy('-triggeredAt');
	static updatedAtAsc = new KalturaCuePointOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaCuePointOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaCuePointOrderBy',KalturaCuePointOrderBy);