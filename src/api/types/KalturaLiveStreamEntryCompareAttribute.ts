

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveStreamEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaLiveStreamEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaLiveStreamEntryCompareAttribute('createdAt');
	static endDate = new KalturaLiveStreamEntryCompareAttribute('endDate');
	static lastPlayedAt = new KalturaLiveStreamEntryCompareAttribute('lastPlayedAt');
	static mediaDate = new KalturaLiveStreamEntryCompareAttribute('mediaDate');
	static mediaType = new KalturaLiveStreamEntryCompareAttribute('mediaType');
	static moderationCount = new KalturaLiveStreamEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaLiveStreamEntryCompareAttribute('moderationStatus');
	static msDuration = new KalturaLiveStreamEntryCompareAttribute('msDuration');
	static partnerId = new KalturaLiveStreamEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaLiveStreamEntryCompareAttribute('partnerSortValue');
	static plays = new KalturaLiveStreamEntryCompareAttribute('plays');
	static rank = new KalturaLiveStreamEntryCompareAttribute('rank');
	static replacementStatus = new KalturaLiveStreamEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaLiveStreamEntryCompareAttribute('startDate');
	static status = new KalturaLiveStreamEntryCompareAttribute('status');
	static totalRank = new KalturaLiveStreamEntryCompareAttribute('totalRank');
	static type = new KalturaLiveStreamEntryCompareAttribute('type');
	static updatedAt = new KalturaLiveStreamEntryCompareAttribute('updatedAt');
	static views = new KalturaLiveStreamEntryCompareAttribute('views');
}
KalturaTypesFactory.registerType('KalturaLiveStreamEntryCompareAttribute',KalturaLiveStreamEntryCompareAttribute);