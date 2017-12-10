

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBaseEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaBaseEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaBaseEntryOrderBy('-createdAt');
	static endDateAsc = new KalturaBaseEntryOrderBy('+endDate');
	static endDateDesc = new KalturaBaseEntryOrderBy('-endDate');
	static moderationCountAsc = new KalturaBaseEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaBaseEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaBaseEntryOrderBy('+name');
	static nameDesc = new KalturaBaseEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaBaseEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaBaseEntryOrderBy('-partnerSortValue');
	static rankAsc = new KalturaBaseEntryOrderBy('+rank');
	static rankDesc = new KalturaBaseEntryOrderBy('-rank');
	static recentAsc = new KalturaBaseEntryOrderBy('+recent');
	static recentDesc = new KalturaBaseEntryOrderBy('-recent');
	static startDateAsc = new KalturaBaseEntryOrderBy('+startDate');
	static startDateDesc = new KalturaBaseEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaBaseEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaBaseEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaBaseEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBaseEntryOrderBy('-updatedAt');
	static weightAsc = new KalturaBaseEntryOrderBy('+weight');
	static weightDesc = new KalturaBaseEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaBaseEntryOrderBy',KalturaBaseEntryOrderBy);