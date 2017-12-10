

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaExternalMediaEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaExternalMediaEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaExternalMediaEntryOrderBy('-createdAt');
	static durationAsc = new KalturaExternalMediaEntryOrderBy('+duration');
	static durationDesc = new KalturaExternalMediaEntryOrderBy('-duration');
	static endDateAsc = new KalturaExternalMediaEntryOrderBy('+endDate');
	static endDateDesc = new KalturaExternalMediaEntryOrderBy('-endDate');
	static lastPlayedAtAsc = new KalturaExternalMediaEntryOrderBy('+lastPlayedAt');
	static lastPlayedAtDesc = new KalturaExternalMediaEntryOrderBy('-lastPlayedAt');
	static mediaTypeAsc = new KalturaExternalMediaEntryOrderBy('+mediaType');
	static mediaTypeDesc = new KalturaExternalMediaEntryOrderBy('-mediaType');
	static moderationCountAsc = new KalturaExternalMediaEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaExternalMediaEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaExternalMediaEntryOrderBy('+name');
	static nameDesc = new KalturaExternalMediaEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaExternalMediaEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaExternalMediaEntryOrderBy('-partnerSortValue');
	static playsAsc = new KalturaExternalMediaEntryOrderBy('+plays');
	static playsDesc = new KalturaExternalMediaEntryOrderBy('-plays');
	static rankAsc = new KalturaExternalMediaEntryOrderBy('+rank');
	static rankDesc = new KalturaExternalMediaEntryOrderBy('-rank');
	static recentAsc = new KalturaExternalMediaEntryOrderBy('+recent');
	static recentDesc = new KalturaExternalMediaEntryOrderBy('-recent');
	static startDateAsc = new KalturaExternalMediaEntryOrderBy('+startDate');
	static startDateDesc = new KalturaExternalMediaEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaExternalMediaEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaExternalMediaEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaExternalMediaEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaExternalMediaEntryOrderBy('-updatedAt');
	static viewsAsc = new KalturaExternalMediaEntryOrderBy('+views');
	static viewsDesc = new KalturaExternalMediaEntryOrderBy('-views');
	static weightAsc = new KalturaExternalMediaEntryOrderBy('+weight');
	static weightDesc = new KalturaExternalMediaEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaExternalMediaEntryOrderBy',KalturaExternalMediaEntryOrderBy);