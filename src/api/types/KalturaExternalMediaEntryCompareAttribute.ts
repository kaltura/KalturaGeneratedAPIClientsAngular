

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaExternalMediaEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaExternalMediaEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaExternalMediaEntryCompareAttribute('createdAt');
	static endDate = new KalturaExternalMediaEntryCompareAttribute('endDate');
	static lastPlayedAt = new KalturaExternalMediaEntryCompareAttribute('lastPlayedAt');
	static mediaDate = new KalturaExternalMediaEntryCompareAttribute('mediaDate');
	static mediaType = new KalturaExternalMediaEntryCompareAttribute('mediaType');
	static moderationCount = new KalturaExternalMediaEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaExternalMediaEntryCompareAttribute('moderationStatus');
	static msDuration = new KalturaExternalMediaEntryCompareAttribute('msDuration');
	static partnerId = new KalturaExternalMediaEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaExternalMediaEntryCompareAttribute('partnerSortValue');
	static plays = new KalturaExternalMediaEntryCompareAttribute('plays');
	static rank = new KalturaExternalMediaEntryCompareAttribute('rank');
	static replacementStatus = new KalturaExternalMediaEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaExternalMediaEntryCompareAttribute('startDate');
	static status = new KalturaExternalMediaEntryCompareAttribute('status');
	static totalRank = new KalturaExternalMediaEntryCompareAttribute('totalRank');
	static type = new KalturaExternalMediaEntryCompareAttribute('type');
	static updatedAt = new KalturaExternalMediaEntryCompareAttribute('updatedAt');
	static views = new KalturaExternalMediaEntryCompareAttribute('views');
}
KalturaTypesFactory.registerType('KalturaExternalMediaEntryCompareAttribute',KalturaExternalMediaEntryCompareAttribute);