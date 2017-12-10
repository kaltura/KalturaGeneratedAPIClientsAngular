

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMixEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaMixEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaMixEntryCompareAttribute('createdAt');
	static endDate = new KalturaMixEntryCompareAttribute('endDate');
	static lastPlayedAt = new KalturaMixEntryCompareAttribute('lastPlayedAt');
	static moderationCount = new KalturaMixEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaMixEntryCompareAttribute('moderationStatus');
	static msDuration = new KalturaMixEntryCompareAttribute('msDuration');
	static partnerId = new KalturaMixEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaMixEntryCompareAttribute('partnerSortValue');
	static plays = new KalturaMixEntryCompareAttribute('plays');
	static rank = new KalturaMixEntryCompareAttribute('rank');
	static replacementStatus = new KalturaMixEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaMixEntryCompareAttribute('startDate');
	static status = new KalturaMixEntryCompareAttribute('status');
	static totalRank = new KalturaMixEntryCompareAttribute('totalRank');
	static type = new KalturaMixEntryCompareAttribute('type');
	static updatedAt = new KalturaMixEntryCompareAttribute('updatedAt');
	static views = new KalturaMixEntryCompareAttribute('views');
}
KalturaTypesFactory.registerType('KalturaMixEntryCompareAttribute',KalturaMixEntryCompareAttribute);