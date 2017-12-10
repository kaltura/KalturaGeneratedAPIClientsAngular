

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPartnerOrderBy extends KalturaObjectBase {
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

    static adminEmailAsc = new KalturaPartnerOrderBy('+adminEmail');
	static adminEmailDesc = new KalturaPartnerOrderBy('-adminEmail');
	static adminNameAsc = new KalturaPartnerOrderBy('+adminName');
	static adminNameDesc = new KalturaPartnerOrderBy('-adminName');
	static createdAtAsc = new KalturaPartnerOrderBy('+createdAt');
	static createdAtDesc = new KalturaPartnerOrderBy('-createdAt');
	static idAsc = new KalturaPartnerOrderBy('+id');
	static idDesc = new KalturaPartnerOrderBy('-id');
	static nameAsc = new KalturaPartnerOrderBy('+name');
	static nameDesc = new KalturaPartnerOrderBy('-name');
	static statusAsc = new KalturaPartnerOrderBy('+status');
	static statusDesc = new KalturaPartnerOrderBy('-status');
	static websiteAsc = new KalturaPartnerOrderBy('+website');
	static websiteDesc = new KalturaPartnerOrderBy('-website');
}
KalturaTypesFactory.registerType('KalturaPartnerOrderBy',KalturaPartnerOrderBy);