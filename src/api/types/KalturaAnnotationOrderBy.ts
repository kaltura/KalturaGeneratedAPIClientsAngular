

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAnnotationOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAnnotationOrderBy('+createdAt');
	static createdAtDesc = new KalturaAnnotationOrderBy('-createdAt');
	static durationAsc = new KalturaAnnotationOrderBy('+duration');
	static durationDesc = new KalturaAnnotationOrderBy('-duration');
	static endTimeAsc = new KalturaAnnotationOrderBy('+endTime');
	static endTimeDesc = new KalturaAnnotationOrderBy('-endTime');
	static partnerSortValueAsc = new KalturaAnnotationOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaAnnotationOrderBy('-partnerSortValue');
	static startTimeAsc = new KalturaAnnotationOrderBy('+startTime');
	static startTimeDesc = new KalturaAnnotationOrderBy('-startTime');
	static triggeredAtAsc = new KalturaAnnotationOrderBy('+triggeredAt');
	static triggeredAtDesc = new KalturaAnnotationOrderBy('-triggeredAt');
	static updatedAtAsc = new KalturaAnnotationOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAnnotationOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAnnotationOrderBy',KalturaAnnotationOrderBy);