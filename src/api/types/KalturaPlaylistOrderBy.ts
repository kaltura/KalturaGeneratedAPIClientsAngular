

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlaylistOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaPlaylistOrderBy('+createdAt');
	static createdAtDesc = new KalturaPlaylistOrderBy('-createdAt');
	static endDateAsc = new KalturaPlaylistOrderBy('+endDate');
	static endDateDesc = new KalturaPlaylistOrderBy('-endDate');
	static moderationCountAsc = new KalturaPlaylistOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaPlaylistOrderBy('-moderationCount');
	static nameAsc = new KalturaPlaylistOrderBy('+name');
	static nameDesc = new KalturaPlaylistOrderBy('-name');
	static partnerSortValueAsc = new KalturaPlaylistOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaPlaylistOrderBy('-partnerSortValue');
	static rankAsc = new KalturaPlaylistOrderBy('+rank');
	static rankDesc = new KalturaPlaylistOrderBy('-rank');
	static recentAsc = new KalturaPlaylistOrderBy('+recent');
	static recentDesc = new KalturaPlaylistOrderBy('-recent');
	static startDateAsc = new KalturaPlaylistOrderBy('+startDate');
	static startDateDesc = new KalturaPlaylistOrderBy('-startDate');
	static totalRankAsc = new KalturaPlaylistOrderBy('+totalRank');
	static totalRankDesc = new KalturaPlaylistOrderBy('-totalRank');
	static updatedAtAsc = new KalturaPlaylistOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaPlaylistOrderBy('-updatedAt');
	static weightAsc = new KalturaPlaylistOrderBy('+weight');
	static weightDesc = new KalturaPlaylistOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaPlaylistOrderBy',KalturaPlaylistOrderBy);