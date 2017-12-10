

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaGenericSyndicationFeedOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaGenericSyndicationFeedOrderBy('+createdAt');
	static createdAtDesc = new KalturaGenericSyndicationFeedOrderBy('-createdAt');
	static nameAsc = new KalturaGenericSyndicationFeedOrderBy('+name');
	static nameDesc = new KalturaGenericSyndicationFeedOrderBy('-name');
	static playlistIdAsc = new KalturaGenericSyndicationFeedOrderBy('+playlistId');
	static playlistIdDesc = new KalturaGenericSyndicationFeedOrderBy('-playlistId');
	static typeAsc = new KalturaGenericSyndicationFeedOrderBy('+type');
	static typeDesc = new KalturaGenericSyndicationFeedOrderBy('-type');
	static updatedAtAsc = new KalturaGenericSyndicationFeedOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaGenericSyndicationFeedOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaGenericSyndicationFeedOrderBy',KalturaGenericSyndicationFeedOrderBy);