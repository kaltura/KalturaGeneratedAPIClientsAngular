

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveChannelCompareAttribute extends KalturaObjectBase {
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

    static accessControlId = new KalturaLiveChannelCompareAttribute('accessControlId');
	static createdAt = new KalturaLiveChannelCompareAttribute('createdAt');
	static endDate = new KalturaLiveChannelCompareAttribute('endDate');
	static lastPlayedAt = new KalturaLiveChannelCompareAttribute('lastPlayedAt');
	static mediaDate = new KalturaLiveChannelCompareAttribute('mediaDate');
	static mediaType = new KalturaLiveChannelCompareAttribute('mediaType');
	static moderationCount = new KalturaLiveChannelCompareAttribute('moderationCount');
	static moderationStatus = new KalturaLiveChannelCompareAttribute('moderationStatus');
	static msDuration = new KalturaLiveChannelCompareAttribute('msDuration');
	static partnerId = new KalturaLiveChannelCompareAttribute('partnerId');
	static partnerSortValue = new KalturaLiveChannelCompareAttribute('partnerSortValue');
	static plays = new KalturaLiveChannelCompareAttribute('plays');
	static rank = new KalturaLiveChannelCompareAttribute('rank');
	static replacementStatus = new KalturaLiveChannelCompareAttribute('replacementStatus');
	static startDate = new KalturaLiveChannelCompareAttribute('startDate');
	static status = new KalturaLiveChannelCompareAttribute('status');
	static totalRank = new KalturaLiveChannelCompareAttribute('totalRank');
	static type = new KalturaLiveChannelCompareAttribute('type');
	static updatedAt = new KalturaLiveChannelCompareAttribute('updatedAt');
	static views = new KalturaLiveChannelCompareAttribute('views');
}
KalturaTypesFactory.registerType('KalturaLiveChannelCompareAttribute',KalturaLiveChannelCompareAttribute);