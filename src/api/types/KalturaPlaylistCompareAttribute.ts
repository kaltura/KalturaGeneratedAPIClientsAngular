

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlaylistCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaPlaylistCompareAttribute('accessControlId');
	static createdAt = new KalturaPlaylistCompareAttribute('createdAt');
	static endDate = new KalturaPlaylistCompareAttribute('endDate');
	static moderationCount = new KalturaPlaylistCompareAttribute('moderationCount');
	static moderationStatus = new KalturaPlaylistCompareAttribute('moderationStatus');
	static partnerId = new KalturaPlaylistCompareAttribute('partnerId');
	static partnerSortValue = new KalturaPlaylistCompareAttribute('partnerSortValue');
	static rank = new KalturaPlaylistCompareAttribute('rank');
	static replacementStatus = new KalturaPlaylistCompareAttribute('replacementStatus');
	static startDate = new KalturaPlaylistCompareAttribute('startDate');
	static status = new KalturaPlaylistCompareAttribute('status');
	static totalRank = new KalturaPlaylistCompareAttribute('totalRank');
	static type = new KalturaPlaylistCompareAttribute('type');
	static updatedAt = new KalturaPlaylistCompareAttribute('updatedAt');
}
KalturaTypesFactory.registerType('KalturaPlaylistCompareAttribute',KalturaPlaylistCompareAttribute);