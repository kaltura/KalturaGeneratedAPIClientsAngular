

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBaseSyndicationFeedOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaBaseSyndicationFeedOrderBy('+createdAt');
	static createdAtDesc = new KalturaBaseSyndicationFeedOrderBy('-createdAt');
	static nameAsc = new KalturaBaseSyndicationFeedOrderBy('+name');
	static nameDesc = new KalturaBaseSyndicationFeedOrderBy('-name');
	static playlistIdAsc = new KalturaBaseSyndicationFeedOrderBy('+playlistId');
	static playlistIdDesc = new KalturaBaseSyndicationFeedOrderBy('-playlistId');
	static typeAsc = new KalturaBaseSyndicationFeedOrderBy('+type');
	static typeDesc = new KalturaBaseSyndicationFeedOrderBy('-type');
	static updatedAtAsc = new KalturaBaseSyndicationFeedOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBaseSyndicationFeedOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaBaseSyndicationFeedOrderBy',KalturaBaseSyndicationFeedOrderBy);