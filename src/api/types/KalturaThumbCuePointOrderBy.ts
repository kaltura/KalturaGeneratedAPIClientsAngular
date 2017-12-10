

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaThumbCuePointOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaThumbCuePointOrderBy('+createdAt');
	static createdAtDesc = new KalturaThumbCuePointOrderBy('-createdAt');
	static partnerSortValueAsc = new KalturaThumbCuePointOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaThumbCuePointOrderBy('-partnerSortValue');
	static startTimeAsc = new KalturaThumbCuePointOrderBy('+startTime');
	static startTimeDesc = new KalturaThumbCuePointOrderBy('-startTime');
	static triggeredAtAsc = new KalturaThumbCuePointOrderBy('+triggeredAt');
	static triggeredAtDesc = new KalturaThumbCuePointOrderBy('-triggeredAt');
	static updatedAtAsc = new KalturaThumbCuePointOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaThumbCuePointOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaThumbCuePointOrderBy',KalturaThumbCuePointOrderBy);