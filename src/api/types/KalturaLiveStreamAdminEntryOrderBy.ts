

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveStreamAdminEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLiveStreamAdminEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveStreamAdminEntryOrderBy('-createdAt');
	static durationAsc = new KalturaLiveStreamAdminEntryOrderBy('+duration');
	static durationDesc = new KalturaLiveStreamAdminEntryOrderBy('-duration');
	static endDateAsc = new KalturaLiveStreamAdminEntryOrderBy('+endDate');
	static endDateDesc = new KalturaLiveStreamAdminEntryOrderBy('-endDate');
	static firstBroadcastAsc = new KalturaLiveStreamAdminEntryOrderBy('+firstBroadcast');
	static firstBroadcastDesc = new KalturaLiveStreamAdminEntryOrderBy('-firstBroadcast');
	static lastBroadcastAsc = new KalturaLiveStreamAdminEntryOrderBy('+lastBroadcast');
	static lastBroadcastDesc = new KalturaLiveStreamAdminEntryOrderBy('-lastBroadcast');
	static lastPlayedAtAsc = new KalturaLiveStreamAdminEntryOrderBy('+lastPlayedAt');
	static lastPlayedAtDesc = new KalturaLiveStreamAdminEntryOrderBy('-lastPlayedAt');
	static mediaTypeAsc = new KalturaLiveStreamAdminEntryOrderBy('+mediaType');
	static mediaTypeDesc = new KalturaLiveStreamAdminEntryOrderBy('-mediaType');
	static moderationCountAsc = new KalturaLiveStreamAdminEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaLiveStreamAdminEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaLiveStreamAdminEntryOrderBy('+name');
	static nameDesc = new KalturaLiveStreamAdminEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaLiveStreamAdminEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaLiveStreamAdminEntryOrderBy('-partnerSortValue');
	static playsAsc = new KalturaLiveStreamAdminEntryOrderBy('+plays');
	static playsDesc = new KalturaLiveStreamAdminEntryOrderBy('-plays');
	static rankAsc = new KalturaLiveStreamAdminEntryOrderBy('+rank');
	static rankDesc = new KalturaLiveStreamAdminEntryOrderBy('-rank');
	static recentAsc = new KalturaLiveStreamAdminEntryOrderBy('+recent');
	static recentDesc = new KalturaLiveStreamAdminEntryOrderBy('-recent');
	static startDateAsc = new KalturaLiveStreamAdminEntryOrderBy('+startDate');
	static startDateDesc = new KalturaLiveStreamAdminEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaLiveStreamAdminEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaLiveStreamAdminEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaLiveStreamAdminEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveStreamAdminEntryOrderBy('-updatedAt');
	static viewsAsc = new KalturaLiveStreamAdminEntryOrderBy('+views');
	static viewsDesc = new KalturaLiveStreamAdminEntryOrderBy('-views');
	static weightAsc = new KalturaLiveStreamAdminEntryOrderBy('+weight');
	static weightDesc = new KalturaLiveStreamAdminEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaLiveStreamAdminEntryOrderBy',KalturaLiveStreamAdminEntryOrderBy);