

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLiveEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveEntryOrderBy('-createdAt');
	static durationAsc = new KalturaLiveEntryOrderBy('+duration');
	static durationDesc = new KalturaLiveEntryOrderBy('-duration');
	static endDateAsc = new KalturaLiveEntryOrderBy('+endDate');
	static endDateDesc = new KalturaLiveEntryOrderBy('-endDate');
	static firstBroadcastAsc = new KalturaLiveEntryOrderBy('+firstBroadcast');
	static firstBroadcastDesc = new KalturaLiveEntryOrderBy('-firstBroadcast');
	static lastBroadcastAsc = new KalturaLiveEntryOrderBy('+lastBroadcast');
	static lastBroadcastDesc = new KalturaLiveEntryOrderBy('-lastBroadcast');
	static lastPlayedAtAsc = new KalturaLiveEntryOrderBy('+lastPlayedAt');
	static lastPlayedAtDesc = new KalturaLiveEntryOrderBy('-lastPlayedAt');
	static mediaTypeAsc = new KalturaLiveEntryOrderBy('+mediaType');
	static mediaTypeDesc = new KalturaLiveEntryOrderBy('-mediaType');
	static moderationCountAsc = new KalturaLiveEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaLiveEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaLiveEntryOrderBy('+name');
	static nameDesc = new KalturaLiveEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaLiveEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaLiveEntryOrderBy('-partnerSortValue');
	static playsAsc = new KalturaLiveEntryOrderBy('+plays');
	static playsDesc = new KalturaLiveEntryOrderBy('-plays');
	static rankAsc = new KalturaLiveEntryOrderBy('+rank');
	static rankDesc = new KalturaLiveEntryOrderBy('-rank');
	static recentAsc = new KalturaLiveEntryOrderBy('+recent');
	static recentDesc = new KalturaLiveEntryOrderBy('-recent');
	static startDateAsc = new KalturaLiveEntryOrderBy('+startDate');
	static startDateDesc = new KalturaLiveEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaLiveEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaLiveEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaLiveEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveEntryOrderBy('-updatedAt');
	static viewsAsc = new KalturaLiveEntryOrderBy('+views');
	static viewsDesc = new KalturaLiveEntryOrderBy('-views');
	static weightAsc = new KalturaLiveEntryOrderBy('+weight');
	static weightDesc = new KalturaLiveEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaLiveEntryOrderBy',KalturaLiveEntryOrderBy);