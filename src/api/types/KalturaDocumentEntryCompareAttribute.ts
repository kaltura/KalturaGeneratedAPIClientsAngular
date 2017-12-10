

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDocumentEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaDocumentEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaDocumentEntryCompareAttribute('createdAt');
	static endDate = new KalturaDocumentEntryCompareAttribute('endDate');
	static moderationCount = new KalturaDocumentEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaDocumentEntryCompareAttribute('moderationStatus');
	static partnerId = new KalturaDocumentEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaDocumentEntryCompareAttribute('partnerSortValue');
	static rank = new KalturaDocumentEntryCompareAttribute('rank');
	static replacementStatus = new KalturaDocumentEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaDocumentEntryCompareAttribute('startDate');
	static status = new KalturaDocumentEntryCompareAttribute('status');
	static totalRank = new KalturaDocumentEntryCompareAttribute('totalRank');
	static type = new KalturaDocumentEntryCompareAttribute('type');
	static updatedAt = new KalturaDocumentEntryCompareAttribute('updatedAt');
}
KalturaTypesFactory.registerType('KalturaDocumentEntryCompareAttribute',KalturaDocumentEntryCompareAttribute);