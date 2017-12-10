

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEventCuePointOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaEventCuePointOrderBy('+createdAt');
	static createdAtDesc = new KalturaEventCuePointOrderBy('-createdAt');
	static partnerSortValueAsc = new KalturaEventCuePointOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaEventCuePointOrderBy('-partnerSortValue');
	static startTimeAsc = new KalturaEventCuePointOrderBy('+startTime');
	static startTimeDesc = new KalturaEventCuePointOrderBy('-startTime');
	static triggeredAtAsc = new KalturaEventCuePointOrderBy('+triggeredAt');
	static triggeredAtDesc = new KalturaEventCuePointOrderBy('-triggeredAt');
	static updatedAtAsc = new KalturaEventCuePointOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaEventCuePointOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaEventCuePointOrderBy',KalturaEventCuePointOrderBy);