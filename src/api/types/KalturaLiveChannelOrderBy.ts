

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveChannelOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLiveChannelOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveChannelOrderBy('-createdAt');
	static durationAsc = new KalturaLiveChannelOrderBy('+duration');
	static durationDesc = new KalturaLiveChannelOrderBy('-duration');
	static endDateAsc = new KalturaLiveChannelOrderBy('+endDate');
	static endDateDesc = new KalturaLiveChannelOrderBy('-endDate');
	static firstBroadcastAsc = new KalturaLiveChannelOrderBy('+firstBroadcast');
	static firstBroadcastDesc = new KalturaLiveChannelOrderBy('-firstBroadcast');
	static lastBroadcastAsc = new KalturaLiveChannelOrderBy('+lastBroadcast');
	static lastBroadcastDesc = new KalturaLiveChannelOrderBy('-lastBroadcast');
	static lastPlayedAtAsc = new KalturaLiveChannelOrderBy('+lastPlayedAt');
	static lastPlayedAtDesc = new KalturaLiveChannelOrderBy('-lastPlayedAt');
	static mediaTypeAsc = new KalturaLiveChannelOrderBy('+mediaType');
	static mediaTypeDesc = new KalturaLiveChannelOrderBy('-mediaType');
	static moderationCountAsc = new KalturaLiveChannelOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaLiveChannelOrderBy('-moderationCount');
	static nameAsc = new KalturaLiveChannelOrderBy('+name');
	static nameDesc = new KalturaLiveChannelOrderBy('-name');
	static partnerSortValueAsc = new KalturaLiveChannelOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaLiveChannelOrderBy('-partnerSortValue');
	static playsAsc = new KalturaLiveChannelOrderBy('+plays');
	static playsDesc = new KalturaLiveChannelOrderBy('-plays');
	static rankAsc = new KalturaLiveChannelOrderBy('+rank');
	static rankDesc = new KalturaLiveChannelOrderBy('-rank');
	static recentAsc = new KalturaLiveChannelOrderBy('+recent');
	static recentDesc = new KalturaLiveChannelOrderBy('-recent');
	static startDateAsc = new KalturaLiveChannelOrderBy('+startDate');
	static startDateDesc = new KalturaLiveChannelOrderBy('-startDate');
	static totalRankAsc = new KalturaLiveChannelOrderBy('+totalRank');
	static totalRankDesc = new KalturaLiveChannelOrderBy('-totalRank');
	static updatedAtAsc = new KalturaLiveChannelOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveChannelOrderBy('-updatedAt');
	static viewsAsc = new KalturaLiveChannelOrderBy('+views');
	static viewsDesc = new KalturaLiveChannelOrderBy('-views');
	static weightAsc = new KalturaLiveChannelOrderBy('+weight');
	static weightDesc = new KalturaLiveChannelOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaLiveChannelOrderBy',KalturaLiveChannelOrderBy);