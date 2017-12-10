

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaKontikiStorageProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaKontikiStorageProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaKontikiStorageProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaKontikiStorageProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaKontikiStorageProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaKontikiStorageProfileOrderBy',KalturaKontikiStorageProfileOrderBy);