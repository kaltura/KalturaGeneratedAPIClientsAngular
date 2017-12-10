

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDataEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDataEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaDataEntryOrderBy('-createdAt');
	static endDateAsc = new KalturaDataEntryOrderBy('+endDate');
	static endDateDesc = new KalturaDataEntryOrderBy('-endDate');
	static moderationCountAsc = new KalturaDataEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaDataEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaDataEntryOrderBy('+name');
	static nameDesc = new KalturaDataEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaDataEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaDataEntryOrderBy('-partnerSortValue');
	static rankAsc = new KalturaDataEntryOrderBy('+rank');
	static rankDesc = new KalturaDataEntryOrderBy('-rank');
	static recentAsc = new KalturaDataEntryOrderBy('+recent');
	static recentDesc = new KalturaDataEntryOrderBy('-recent');
	static startDateAsc = new KalturaDataEntryOrderBy('+startDate');
	static startDateDesc = new KalturaDataEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaDataEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaDataEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaDataEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDataEntryOrderBy('-updatedAt');
	static weightAsc = new KalturaDataEntryOrderBy('+weight');
	static weightDesc = new KalturaDataEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaDataEntryOrderBy',KalturaDataEntryOrderBy);