

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaShortLinkOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaShortLinkOrderBy('+createdAt');
	static createdAtDesc = new KalturaShortLinkOrderBy('-createdAt');
	static expiresAtAsc = new KalturaShortLinkOrderBy('+expiresAt');
	static expiresAtDesc = new KalturaShortLinkOrderBy('-expiresAt');
	static updatedAtAsc = new KalturaShortLinkOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaShortLinkOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaShortLinkOrderBy',KalturaShortLinkOrderBy);