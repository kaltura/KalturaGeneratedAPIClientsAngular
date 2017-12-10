

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAnswerCuePointOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAnswerCuePointOrderBy('+createdAt');
	static createdAtDesc = new KalturaAnswerCuePointOrderBy('-createdAt');
	static partnerSortValueAsc = new KalturaAnswerCuePointOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaAnswerCuePointOrderBy('-partnerSortValue');
	static startTimeAsc = new KalturaAnswerCuePointOrderBy('+startTime');
	static startTimeDesc = new KalturaAnswerCuePointOrderBy('-startTime');
	static triggeredAtAsc = new KalturaAnswerCuePointOrderBy('+triggeredAt');
	static triggeredAtDesc = new KalturaAnswerCuePointOrderBy('-triggeredAt');
	static updatedAtAsc = new KalturaAnswerCuePointOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAnswerCuePointOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAnswerCuePointOrderBy',KalturaAnswerCuePointOrderBy);