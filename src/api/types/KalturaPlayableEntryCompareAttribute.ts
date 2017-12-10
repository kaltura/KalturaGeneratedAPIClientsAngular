

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlayableEntryCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaPlayableEntryCompareAttribute('accessControlId');
	static createdAt = new KalturaPlayableEntryCompareAttribute('createdAt');
	static endDate = new KalturaPlayableEntryCompareAttribute('endDate');
	static lastPlayedAt = new KalturaPlayableEntryCompareAttribute('lastPlayedAt');
	static moderationCount = new KalturaPlayableEntryCompareAttribute('moderationCount');
	static moderationStatus = new KalturaPlayableEntryCompareAttribute('moderationStatus');
	static msDuration = new KalturaPlayableEntryCompareAttribute('msDuration');
	static partnerId = new KalturaPlayableEntryCompareAttribute('partnerId');
	static partnerSortValue = new KalturaPlayableEntryCompareAttribute('partnerSortValue');
	static plays = new KalturaPlayableEntryCompareAttribute('plays');
	static rank = new KalturaPlayableEntryCompareAttribute('rank');
	static replacementStatus = new KalturaPlayableEntryCompareAttribute('replacementStatus');
	static startDate = new KalturaPlayableEntryCompareAttribute('startDate');
	static status = new KalturaPlayableEntryCompareAttribute('status');
	static totalRank = new KalturaPlayableEntryCompareAttribute('totalRank');
	static type = new KalturaPlayableEntryCompareAttribute('type');
	static updatedAt = new KalturaPlayableEntryCompareAttribute('updatedAt');
	static views = new KalturaPlayableEntryCompareAttribute('views');
}
KalturaTypesFactory.registerType('KalturaPlayableEntryCompareAttribute',KalturaPlayableEntryCompareAttribute);