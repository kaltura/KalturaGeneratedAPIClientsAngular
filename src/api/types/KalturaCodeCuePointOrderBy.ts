

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCodeCuePointOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaCodeCuePointOrderBy('+createdAt');
	static createdAtDesc = new KalturaCodeCuePointOrderBy('-createdAt');
	static durationAsc = new KalturaCodeCuePointOrderBy('+duration');
	static durationDesc = new KalturaCodeCuePointOrderBy('-duration');
	static endTimeAsc = new KalturaCodeCuePointOrderBy('+endTime');
	static endTimeDesc = new KalturaCodeCuePointOrderBy('-endTime');
	static partnerSortValueAsc = new KalturaCodeCuePointOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaCodeCuePointOrderBy('-partnerSortValue');
	static startTimeAsc = new KalturaCodeCuePointOrderBy('+startTime');
	static startTimeDesc = new KalturaCodeCuePointOrderBy('-startTime');
	static triggeredAtAsc = new KalturaCodeCuePointOrderBy('+triggeredAt');
	static triggeredAtDesc = new KalturaCodeCuePointOrderBy('-triggeredAt');
	static updatedAtAsc = new KalturaCodeCuePointOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaCodeCuePointOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaCodeCuePointOrderBy',KalturaCodeCuePointOrderBy);