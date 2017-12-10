

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveStreamEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLiveStreamEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveStreamEntryOrderBy('-createdAt');
	static durationAsc = new KalturaLiveStreamEntryOrderBy('+duration');
	static durationDesc = new KalturaLiveStreamEntryOrderBy('-duration');
	static endDateAsc = new KalturaLiveStreamEntryOrderBy('+endDate');
	static endDateDesc = new KalturaLiveStreamEntryOrderBy('-endDate');
	static firstBroadcastAsc = new KalturaLiveStreamEntryOrderBy('+firstBroadcast');
	static firstBroadcastDesc = new KalturaLiveStreamEntryOrderBy('-firstBroadcast');
	static lastBroadcastAsc = new KalturaLiveStreamEntryOrderBy('+lastBroadcast');
	static lastBroadcastDesc = new KalturaLiveStreamEntryOrderBy('-lastBroadcast');
	static lastPlayedAtAsc = new KalturaLiveStreamEntryOrderBy('+lastPlayedAt');
	static lastPlayedAtDesc = new KalturaLiveStreamEntryOrderBy('-lastPlayedAt');
	static mediaTypeAsc = new KalturaLiveStreamEntryOrderBy('+mediaType');
	static mediaTypeDesc = new KalturaLiveStreamEntryOrderBy('-mediaType');
	static moderationCountAsc = new KalturaLiveStreamEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaLiveStreamEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaLiveStreamEntryOrderBy('+name');
	static nameDesc = new KalturaLiveStreamEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaLiveStreamEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaLiveStreamEntryOrderBy('-partnerSortValue');
	static playsAsc = new KalturaLiveStreamEntryOrderBy('+plays');
	static playsDesc = new KalturaLiveStreamEntryOrderBy('-plays');
	static rankAsc = new KalturaLiveStreamEntryOrderBy('+rank');
	static rankDesc = new KalturaLiveStreamEntryOrderBy('-rank');
	static recentAsc = new KalturaLiveStreamEntryOrderBy('+recent');
	static recentDesc = new KalturaLiveStreamEntryOrderBy('-recent');
	static startDateAsc = new KalturaLiveStreamEntryOrderBy('+startDate');
	static startDateDesc = new KalturaLiveStreamEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaLiveStreamEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaLiveStreamEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaLiveStreamEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveStreamEntryOrderBy('-updatedAt');
	static viewsAsc = new KalturaLiveStreamEntryOrderBy('+views');
	static viewsDesc = new KalturaLiveStreamEntryOrderBy('-views');
	static weightAsc = new KalturaLiveStreamEntryOrderBy('+weight');
	static weightDesc = new KalturaLiveStreamEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaLiveStreamEntryOrderBy',KalturaLiveStreamEntryOrderBy);