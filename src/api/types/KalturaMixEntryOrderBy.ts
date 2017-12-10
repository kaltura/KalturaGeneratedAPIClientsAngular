

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMixEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaMixEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaMixEntryOrderBy('-createdAt');
	static durationAsc = new KalturaMixEntryOrderBy('+duration');
	static durationDesc = new KalturaMixEntryOrderBy('-duration');
	static endDateAsc = new KalturaMixEntryOrderBy('+endDate');
	static endDateDesc = new KalturaMixEntryOrderBy('-endDate');
	static lastPlayedAtAsc = new KalturaMixEntryOrderBy('+lastPlayedAt');
	static lastPlayedAtDesc = new KalturaMixEntryOrderBy('-lastPlayedAt');
	static moderationCountAsc = new KalturaMixEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaMixEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaMixEntryOrderBy('+name');
	static nameDesc = new KalturaMixEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaMixEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaMixEntryOrderBy('-partnerSortValue');
	static playsAsc = new KalturaMixEntryOrderBy('+plays');
	static playsDesc = new KalturaMixEntryOrderBy('-plays');
	static rankAsc = new KalturaMixEntryOrderBy('+rank');
	static rankDesc = new KalturaMixEntryOrderBy('-rank');
	static recentAsc = new KalturaMixEntryOrderBy('+recent');
	static recentDesc = new KalturaMixEntryOrderBy('-recent');
	static startDateAsc = new KalturaMixEntryOrderBy('+startDate');
	static startDateDesc = new KalturaMixEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaMixEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaMixEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaMixEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaMixEntryOrderBy('-updatedAt');
	static viewsAsc = new KalturaMixEntryOrderBy('+views');
	static viewsDesc = new KalturaMixEntryOrderBy('-views');
	static weightAsc = new KalturaMixEntryOrderBy('+weight');
	static weightDesc = new KalturaMixEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaMixEntryOrderBy',KalturaMixEntryOrderBy);