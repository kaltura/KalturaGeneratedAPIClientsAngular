

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBaseEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaBaseEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaBaseEntryCompareAttribute('createdAt');
	static endDate = new KalturaBaseEntryCompareAttribute('endDate');
	static moderationCount = new KalturaBaseEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaBaseEntryCompareAttribute('moderationStatus');
	static partnerId = new KalturaBaseEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaBaseEntryCompareAttribute('partnerSortValue');
	static rank = new KalturaBaseEntryCompareAttribute('rank');
	static replacementStatus = new KalturaBaseEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaBaseEntryCompareAttribute('startDate');
	static status = new KalturaBaseEntryCompareAttribute('status');
	static totalRank = new KalturaBaseEntryCompareAttribute('totalRank');
	static type = new KalturaBaseEntryCompareAttribute('type');
	static updatedAt = new KalturaBaseEntryCompareAttribute('updatedAt');
}
KalturaTypesFactory.registerType('KalturaBaseEntryCompareAttribute',KalturaBaseEntryCompareAttribute);