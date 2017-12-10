

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaGenericXsltSyndicationFeedOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaGenericXsltSyndicationFeedOrderBy('+createdAt');
	static createdAtDesc = new KalturaGenericXsltSyndicationFeedOrderBy('-createdAt');
	static nameAsc = new KalturaGenericXsltSyndicationFeedOrderBy('+name');
	static nameDesc = new KalturaGenericXsltSyndicationFeedOrderBy('-name');
	static playlistIdAsc = new KalturaGenericXsltSyndicationFeedOrderBy('+playlistId');
	static playlistIdDesc = new KalturaGenericXsltSyndicationFeedOrderBy('-playlistId');
	static typeAsc = new KalturaGenericXsltSyndicationFeedOrderBy('+type');
	static typeDesc = new KalturaGenericXsltSyndicationFeedOrderBy('-type');
	static updatedAtAsc = new KalturaGenericXsltSyndicationFeedOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaGenericXsltSyndicationFeedOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaGenericXsltSyndicationFeedOrderBy',KalturaGenericXsltSyndicationFeedOrderBy);