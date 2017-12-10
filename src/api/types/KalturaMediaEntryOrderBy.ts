

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMediaEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaMediaEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaMediaEntryOrderBy('-createdAt');
	static durationAsc = new KalturaMediaEntryOrderBy('+duration');
	static durationDesc = new KalturaMediaEntryOrderBy('-duration');
	static endDateAsc = new KalturaMediaEntryOrderBy('+endDate');
	static endDateDesc = new KalturaMediaEntryOrderBy('-endDate');
	static lastPlayedAtAsc = new KalturaMediaEntryOrderBy('+lastPlayedAt');
	static lastPlayedAtDesc = new KalturaMediaEntryOrderBy('-lastPlayedAt');
	static mediaTypeAsc = new KalturaMediaEntryOrderBy('+mediaType');
	static mediaTypeDesc = new KalturaMediaEntryOrderBy('-mediaType');
	static moderationCountAsc = new KalturaMediaEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaMediaEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaMediaEntryOrderBy('+name');
	static nameDesc = new KalturaMediaEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaMediaEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaMediaEntryOrderBy('-partnerSortValue');
	static playsAsc = new KalturaMediaEntryOrderBy('+plays');
	static playsDesc = new KalturaMediaEntryOrderBy('-plays');
	static rankAsc = new KalturaMediaEntryOrderBy('+rank');
	static rankDesc = new KalturaMediaEntryOrderBy('-rank');
	static recentAsc = new KalturaMediaEntryOrderBy('+recent');
	static recentDesc = new KalturaMediaEntryOrderBy('-recent');
	static startDateAsc = new KalturaMediaEntryOrderBy('+startDate');
	static startDateDesc = new KalturaMediaEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaMediaEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaMediaEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaMediaEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaMediaEntryOrderBy('-updatedAt');
	static viewsAsc = new KalturaMediaEntryOrderBy('+views');
	static viewsDesc = new KalturaMediaEntryOrderBy('-views');
	static weightAsc = new KalturaMediaEntryOrderBy('+weight');
	static weightDesc = new KalturaMediaEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaMediaEntryOrderBy',KalturaMediaEntryOrderBy);