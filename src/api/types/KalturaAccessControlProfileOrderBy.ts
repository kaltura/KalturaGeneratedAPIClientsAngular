

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAccessControlProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAccessControlProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaAccessControlProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaAccessControlProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAccessControlProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAccessControlProfileOrderBy',KalturaAccessControlProfileOrderBy);