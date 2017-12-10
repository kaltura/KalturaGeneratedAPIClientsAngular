

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaQuestionCuePointOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaQuestionCuePointOrderBy('+createdAt');
	static createdAtDesc = new KalturaQuestionCuePointOrderBy('-createdAt');
	static partnerSortValueAsc = new KalturaQuestionCuePointOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaQuestionCuePointOrderBy('-partnerSortValue');
	static startTimeAsc = new KalturaQuestionCuePointOrderBy('+startTime');
	static startTimeDesc = new KalturaQuestionCuePointOrderBy('-startTime');
	static triggeredAtAsc = new KalturaQuestionCuePointOrderBy('+triggeredAt');
	static triggeredAtDesc = new KalturaQuestionCuePointOrderBy('-triggeredAt');
	static updatedAtAsc = new KalturaQuestionCuePointOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaQuestionCuePointOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaQuestionCuePointOrderBy',KalturaQuestionCuePointOrderBy);