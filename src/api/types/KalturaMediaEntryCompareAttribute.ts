

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMediaEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaMediaEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaMediaEntryCompareAttribute('createdAt');
	static endDate = new KalturaMediaEntryCompareAttribute('endDate');
	static lastPlayedAt = new KalturaMediaEntryCompareAttribute('lastPlayedAt');
	static mediaDate = new KalturaMediaEntryCompareAttribute('mediaDate');
	static mediaType = new KalturaMediaEntryCompareAttribute('mediaType');
	static moderationCount = new KalturaMediaEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaMediaEntryCompareAttribute('moderationStatus');
	static msDuration = new KalturaMediaEntryCompareAttribute('msDuration');
	static partnerId = new KalturaMediaEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaMediaEntryCompareAttribute('partnerSortValue');
	static plays = new KalturaMediaEntryCompareAttribute('plays');
	static rank = new KalturaMediaEntryCompareAttribute('rank');
	static replacementStatus = new KalturaMediaEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaMediaEntryCompareAttribute('startDate');
	static status = new KalturaMediaEntryCompareAttribute('status');
	static totalRank = new KalturaMediaEntryCompareAttribute('totalRank');
	static type = new KalturaMediaEntryCompareAttribute('type');
	static updatedAt = new KalturaMediaEntryCompareAttribute('updatedAt');
	static views = new KalturaMediaEntryCompareAttribute('views');
}
KalturaTypesFactory.registerType('KalturaMediaEntryCompareAttribute',KalturaMediaEntryCompareAttribute);