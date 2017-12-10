

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaYahooSyndicationFeedOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaYahooSyndicationFeedOrderBy('+createdAt');
	static createdAtDesc = new KalturaYahooSyndicationFeedOrderBy('-createdAt');
	static nameAsc = new KalturaYahooSyndicationFeedOrderBy('+name');
	static nameDesc = new KalturaYahooSyndicationFeedOrderBy('-name');
	static playlistIdAsc = new KalturaYahooSyndicationFeedOrderBy('+playlistId');
	static playlistIdDesc = new KalturaYahooSyndicationFeedOrderBy('-playlistId');
	static typeAsc = new KalturaYahooSyndicationFeedOrderBy('+type');
	static typeDesc = new KalturaYahooSyndicationFeedOrderBy('-type');
	static updatedAtAsc = new KalturaYahooSyndicationFeedOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaYahooSyndicationFeedOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaYahooSyndicationFeedOrderBy',KalturaYahooSyndicationFeedOrderBy);