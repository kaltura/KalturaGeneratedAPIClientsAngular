

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAdCuePointOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAdCuePointOrderBy('+createdAt');
	static createdAtDesc = new KalturaAdCuePointOrderBy('-createdAt');
	static durationAsc = new KalturaAdCuePointOrderBy('+duration');
	static durationDesc = new KalturaAdCuePointOrderBy('-duration');
	static endTimeAsc = new KalturaAdCuePointOrderBy('+endTime');
	static endTimeDesc = new KalturaAdCuePointOrderBy('-endTime');
	static partnerSortValueAsc = new KalturaAdCuePointOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaAdCuePointOrderBy('-partnerSortValue');
	static startTimeAsc = new KalturaAdCuePointOrderBy('+startTime');
	static startTimeDesc = new KalturaAdCuePointOrderBy('-startTime');
	static triggeredAtAsc = new KalturaAdCuePointOrderBy('+triggeredAt');
	static triggeredAtDesc = new KalturaAdCuePointOrderBy('-triggeredAt');
	static updatedAtAsc = new KalturaAdCuePointOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAdCuePointOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAdCuePointOrderBy',KalturaAdCuePointOrderBy);