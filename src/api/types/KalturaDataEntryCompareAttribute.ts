

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDataEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaDataEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaDataEntryCompareAttribute('createdAt');
	static endDate = new KalturaDataEntryCompareAttribute('endDate');
	static moderationCount = new KalturaDataEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaDataEntryCompareAttribute('moderationStatus');
	static partnerId = new KalturaDataEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaDataEntryCompareAttribute('partnerSortValue');
	static rank = new KalturaDataEntryCompareAttribute('rank');
	static replacementStatus = new KalturaDataEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaDataEntryCompareAttribute('startDate');
	static status = new KalturaDataEntryCompareAttribute('status');
	static totalRank = new KalturaDataEntryCompareAttribute('totalRank');
	static type = new KalturaDataEntryCompareAttribute('type');
	static updatedAt = new KalturaDataEntryCompareAttribute('updatedAt');
}
KalturaTypesFactory.registerType('KalturaDataEntryCompareAttribute',KalturaDataEntryCompareAttribute);