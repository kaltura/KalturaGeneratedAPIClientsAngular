

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaITunesSyndicationFeedOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaITunesSyndicationFeedOrderBy('+createdAt');
	static createdAtDesc = new KalturaITunesSyndicationFeedOrderBy('-createdAt');
	static nameAsc = new KalturaITunesSyndicationFeedOrderBy('+name');
	static nameDesc = new KalturaITunesSyndicationFeedOrderBy('-name');
	static playlistIdAsc = new KalturaITunesSyndicationFeedOrderBy('+playlistId');
	static playlistIdDesc = new KalturaITunesSyndicationFeedOrderBy('-playlistId');
	static typeAsc = new KalturaITunesSyndicationFeedOrderBy('+type');
	static typeDesc = new KalturaITunesSyndicationFeedOrderBy('-type');
	static updatedAtAsc = new KalturaITunesSyndicationFeedOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaITunesSyndicationFeedOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaITunesSyndicationFeedOrderBy',KalturaITunesSyndicationFeedOrderBy);