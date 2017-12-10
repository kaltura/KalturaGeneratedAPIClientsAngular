

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCategoryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaCategoryOrderBy('+createdAt');
	static createdAtDesc = new KalturaCategoryOrderBy('-createdAt');
	static depthAsc = new KalturaCategoryOrderBy('+depth');
	static depthDesc = new KalturaCategoryOrderBy('-depth');
	static directEntriesCountAsc = new KalturaCategoryOrderBy('+directEntriesCount');
	static directEntriesCountDesc = new KalturaCategoryOrderBy('-directEntriesCount');
	static directSubCategoriesCountAsc = new KalturaCategoryOrderBy('+directSubCategoriesCount');
	static directSubCategoriesCountDesc = new KalturaCategoryOrderBy('-directSubCategoriesCount');
	static entriesCountAsc = new KalturaCategoryOrderBy('+entriesCount');
	static entriesCountDesc = new KalturaCategoryOrderBy('-entriesCount');
	static fullNameAsc = new KalturaCategoryOrderBy('+fullName');
	static fullNameDesc = new KalturaCategoryOrderBy('-fullName');
	static membersCountAsc = new KalturaCategoryOrderBy('+membersCount');
	static membersCountDesc = new KalturaCategoryOrderBy('-membersCount');
	static nameAsc = new KalturaCategoryOrderBy('+name');
	static nameDesc = new KalturaCategoryOrderBy('-name');
	static partnerSortValueAsc = new KalturaCategoryOrderBy('+partnerSortValue');
	static partnerSortValueDesc = new KalturaCategoryOrderBy('-partnerSortValue');
	static updatedAtAsc = new KalturaCategoryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaCategoryOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaCategoryOrderBy',KalturaCategoryOrderBy);