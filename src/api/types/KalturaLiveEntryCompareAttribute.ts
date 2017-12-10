

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaLiveEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaLiveEntryCompareAttribute('createdAt');
	static endDate = new KalturaLiveEntryCompareAttribute('endDate');
	static lastPlayedAt = new KalturaLiveEntryCompareAttribute('lastPlayedAt');
	static mediaDate = new KalturaLiveEntryCompareAttribute('mediaDate');
	static mediaType = new KalturaLiveEntryCompareAttribute('mediaType');
	static moderationCount = new KalturaLiveEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaLiveEntryCompareAttribute('moderationStatus');
	static msDuration = new KalturaLiveEntryCompareAttribute('msDuration');
	static partnerId = new KalturaLiveEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaLiveEntryCompareAttribute('partnerSortValue');
	static plays = new KalturaLiveEntryCompareAttribute('plays');
	static rank = new KalturaLiveEntryCompareAttribute('rank');
	static replacementStatus = new KalturaLiveEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaLiveEntryCompareAttribute('startDate');
	static status = new KalturaLiveEntryCompareAttribute('status');
	static totalRank = new KalturaLiveEntryCompareAttribute('totalRank');
	static type = new KalturaLiveEntryCompareAttribute('type');
	static updatedAt = new KalturaLiveEntryCompareAttribute('updatedAt');
	static views = new KalturaLiveEntryCompareAttribute('views');
}
KalturaTypesFactory.registerType('KalturaLiveEntryCompareAttribute',KalturaLiveEntryCompareAttribute);