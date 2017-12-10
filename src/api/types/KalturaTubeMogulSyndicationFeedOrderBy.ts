

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTubeMogulSyndicationFeedOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaTubeMogulSyndicationFeedOrderBy('+createdAt');
	static createdAtDesc = new KalturaTubeMogulSyndicationFeedOrderBy('-createdAt');
	static nameAsc = new KalturaTubeMogulSyndicationFeedOrderBy('+name');
	static nameDesc = new KalturaTubeMogulSyndicationFeedOrderBy('-name');
	static playlistIdAsc = new KalturaTubeMogulSyndicationFeedOrderBy('+playlistId');
	static playlistIdDesc = new KalturaTubeMogulSyndicationFeedOrderBy('-playlistId');
	static typeAsc = new KalturaTubeMogulSyndicationFeedOrderBy('+type');
	static typeDesc = new KalturaTubeMogulSyndicationFeedOrderBy('-type');
	static updatedAtAsc = new KalturaTubeMogulSyndicationFeedOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaTubeMogulSyndicationFeedOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaTubeMogulSyndicationFeedOrderBy',KalturaTubeMogulSyndicationFeedOrderBy);