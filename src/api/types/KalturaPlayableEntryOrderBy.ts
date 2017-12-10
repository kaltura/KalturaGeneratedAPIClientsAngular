

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlayableEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaPlayableEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaPlayableEntryOrderBy('-createdAt');
	static durationAsc = new KalturaPlayableEntryOrderBy('+duration');
	static durationDesc = new KalturaPlayableEntryOrderBy('-duration');
	static endDateAsc = new KalturaPlayableEntryOrderBy('+endDate');
	static endDateDesc = new KalturaPlayableEntryOrderBy('-endDate');
	static lastPlayedAtAsc = new KalturaPlayableEntryOrderBy('+lastPlayedAt');
	static lastPlayedAtDesc = new KalturaPlayableEntryOrderBy('-lastPlayedAt');
	static moderationCountAsc = new KalturaPlayableEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaPlayableEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaPlayableEntryOrderBy('+name');
	static nameDesc = new KalturaPlayableEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaPlayableEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaPlayableEntryOrderBy('-partnerSortValue');
	static playsAsc = new KalturaPlayableEntryOrderBy('+plays');
	static playsDesc = new KalturaPlayableEntryOrderBy('-plays');
	static rankAsc = new KalturaPlayableEntryOrderBy('+rank');
	static rankDesc = new KalturaPlayableEntryOrderBy('-rank');
	static recentAsc = new KalturaPlayableEntryOrderBy('+recent');
	static recentDesc = new KalturaPlayableEntryOrderBy('-recent');
	static startDateAsc = new KalturaPlayableEntryOrderBy('+startDate');
	static startDateDesc = new KalturaPlayableEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaPlayableEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaPlayableEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaPlayableEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaPlayableEntryOrderBy('-updatedAt');
	static viewsAsc = new KalturaPlayableEntryOrderBy('+views');
	static viewsDesc = new KalturaPlayableEntryOrderBy('-views');
	static weightAsc = new KalturaPlayableEntryOrderBy('+weight');
	static weightDesc = new KalturaPlayableEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaPlayableEntryOrderBy',KalturaPlayableEntryOrderBy);