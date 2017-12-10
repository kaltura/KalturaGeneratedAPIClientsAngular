

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDocumentEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDocumentEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaDocumentEntryOrderBy('-createdAt');
	static endDateAsc = new KalturaDocumentEntryOrderBy('+endDate');
	static endDateDesc = new KalturaDocumentEntryOrderBy('-endDate');
	static moderationCountAsc = new KalturaDocumentEntryOrderBy('+moderationCount');
	static moderationCountDesc = new KalturaDocumentEntryOrderBy('-moderationCount');
	static nameAsc = new KalturaDocumentEntryOrderBy('+name');
	static nameDesc = new KalturaDocumentEntryOrderBy('-name');
	static partnerSortValueAsc = new KalturaDocumentEntryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaDocumentEntryOrderBy('-partnerSortValue');
	static rankAsc = new KalturaDocumentEntryOrderBy('+rank');
	static rankDesc = new KalturaDocumentEntryOrderBy('-rank');
	static recentAsc = new KalturaDocumentEntryOrderBy('+recent');
	static recentDesc = new KalturaDocumentEntryOrderBy('-recent');
	static startDateAsc = new KalturaDocumentEntryOrderBy('+startDate');
	static startDateDesc = new KalturaDocumentEntryOrderBy('-startDate');
	static totalRankAsc = new KalturaDocumentEntryOrderBy('+totalRank');
	static totalRankDesc = new KalturaDocumentEntryOrderBy('-totalRank');
	static updatedAtAsc = new KalturaDocumentEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDocumentEntryOrderBy('-updatedAt');
	static weightAsc = new KalturaDocumentEntryOrderBy('+weight');
	static weightDesc = new KalturaDocumentEntryOrderBy('-weight');
}
KalturaTypesFactory.registerType('KalturaDocumentEntryOrderBy',KalturaDocumentEntryOrderBy);