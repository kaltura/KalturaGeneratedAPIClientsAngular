

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaGoogleVideoSyndicationFeedOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaGoogleVideoSyndicationFeedOrderBy('+createdAt');
	static createdAtDesc = new KalturaGoogleVideoSyndicationFeedOrderBy('-createdAt');
	static nameAsc = new KalturaGoogleVideoSyndicationFeedOrderBy('+name');
	static nameDesc = new KalturaGoogleVideoSyndicationFeedOrderBy('-name');
	static playlistIdAsc = new KalturaGoogleVideoSyndicationFeedOrderBy('+playlistId');
	static playlistIdDesc = new KalturaGoogleVideoSyndicationFeedOrderBy('-playlistId');
	static typeAsc = new KalturaGoogleVideoSyndicationFeedOrderBy('+type');
	static typeDesc = new KalturaGoogleVideoSyndicationFeedOrderBy('-type');
	static updatedAtAsc = new KalturaGoogleVideoSyndicationFeedOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaGoogleVideoSyndicationFeedOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaGoogleVideoSyndicationFeedOrderBy',KalturaGoogleVideoSyndicationFeedOrderBy);