

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveStreamAdminEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaLiveStreamAdminEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaLiveStreamAdminEntryCompareAttribute('createdAt');
	static endDate = new KalturaLiveStreamAdminEntryCompareAttribute('endDate');
	static lastPlayedAt = new KalturaLiveStreamAdminEntryCompareAttribute('lastPlayedAt');
	static mediaDate = new KalturaLiveStreamAdminEntryCompareAttribute('mediaDate');
	static mediaType = new KalturaLiveStreamAdminEntryCompareAttribute('mediaType');
	static moderationCount = new KalturaLiveStreamAdminEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaLiveStreamAdminEntryCompareAttribute('moderationStatus');
	static msDuration = new KalturaLiveStreamAdminEntryCompareAttribute('msDuration');
	static partnerId = new KalturaLiveStreamAdminEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaLiveStreamAdminEntryCompareAttribute('partnerSortValue');
	static plays = new KalturaLiveStreamAdminEntryCompareAttribute('plays');
	static rank = new KalturaLiveStreamAdminEntryCompareAttribute('rank');
	static replacementStatus = new KalturaLiveStreamAdminEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaLiveStreamAdminEntryCompareAttribute('startDate');
	static status = new KalturaLiveStreamAdminEntryCompareAttribute('status');
	static totalRank = new KalturaLiveStreamAdminEntryCompareAttribute('totalRank');
	static type = new KalturaLiveStreamAdminEntryCompareAttribute('type');
	static updatedAt = new KalturaLiveStreamAdminEntryCompareAttribute('updatedAt');
	static views = new KalturaLiveStreamAdminEntryCompareAttribute('views');
}
KalturaTypesFactory.registerType('KalturaLiveStreamAdminEntryCompareAttribute',KalturaLiveStreamAdminEntryCompareAttribute);