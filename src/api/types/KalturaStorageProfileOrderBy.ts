

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaStorageProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaStorageProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaStorageProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaStorageProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaStorageProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaStorageProfileOrderBy',KalturaStorageProfileOrderBy);